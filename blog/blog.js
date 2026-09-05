const postList = document.querySelector('#post-list');
const postView = document.querySelector('#post-view');
const postCategory = document.querySelector('#post-category');
const postTitle = document.querySelector('#post-title');
const postMeta = document.querySelector('#post-meta');
const postContent = document.querySelector('#post-content');

const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const toDateTime = (date) => {
  const match = String(date).match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  return match ? `${match[3]}-${match[2]}-${match[1]}` : '';
};

const renderMarkdown = (markdown) => {
  const lines = markdown.trim().split(/\r?\n/);
  const html = [];
  let listItems = [];
  let paragraph = [];

  const inline = (text) => escapeHtml(text)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>');

  const flushParagraph = () => {
    if (paragraph.length > 0) {
      html.push(`<p>${inline(paragraph.join(' '))}</p>`);
      paragraph = [];
    }
  };

  const flushList = () => {
    if (listItems.length > 0) {
      html.push(`<ul>${listItems.map((item) => `<li>${inline(item)}</li>`).join('')}</ul>`);
      listItems = [];
    }
  };

  lines.forEach((line) => {
    if (line.startsWith('## ')) {
      flushParagraph();
      flushList();
      html.push(`<h2>${inline(line.slice(3))}</h2>`);
    } else if (line.startsWith('# ')) {
      flushParagraph();
      flushList();
      html.push(`<h2>${inline(line.slice(2))}</h2>`);
    } else if (line.startsWith('- ')) {
      flushParagraph();
      listItems.push(line.slice(2));
    } else if (line.trim() === '') {
      flushParagraph();
      flushList();
    } else {
      paragraph.push(line.trim());
    }
  });

  flushParagraph();
  flushList();
  return html.join('');
};

const showError = (message) => {
  postView.hidden = true;
  postList.hidden = false;
  postList.innerHTML = `<p class="empty-state">${message}</p>`;
};

const renderPostList = (posts) => {
  if (posts.length === 0) {
    showError('Non ci sono ancora aggiornamenti pubblicati.');
    return;
  }

  postList.innerHTML = posts.map((post) => `
    <article class="post-list-item reveal is-visible">
      <div class="post-list-date"><time datetime="${toDateTime(post.date)}">${escapeHtml(post.date)}</time></div>
      <div class="post-list-copy">
        <p class="post-meta">${escapeHtml(post.category)}</p>
        <h2><a href="#post=${encodeURIComponent(post.file)}">${escapeHtml(post.title)}</a></h2>
        <p>${escapeHtml(post.excerpt)}</p>
        <a class="text-link" href="#post=${encodeURIComponent(post.file)}">Leggi l'articolo <span aria-hidden="true">-&gt;</span></a>
      </div>
    </article>
  `).join('');
};

const showPostList = () => {
  postView.hidden = true;
  postList.hidden = false;
};

const showPost = async (posts, file) => {
  const post = posts.find((item) => item.file === file);
  if (!post) {
    showPostList();
    return;
  }

  try {
    const response = await fetch(`posts/${post.file}`);
    if (!response.ok) throw new Error('Post non disponibile');
    const markdown = await response.text();
    postCategory.textContent = `Diario personale / ${post.category}`;
    postTitle.textContent = post.title;
    postMeta.innerHTML = `<time datetime="${toDateTime(post.date)}">${escapeHtml(post.date)}</time><span aria-hidden="true">/</span>${escapeHtml(post.author)}`;
    postContent.innerHTML = renderMarkdown(markdown);
    postList.hidden = true;
    postView.hidden = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } catch (error) {
    showError('Non riesco a caricare questo aggiornamento. Avvia il sito con un server locale.');
  }
};

const updateView = (posts) => {
  const match = window.location.hash.match(/^#post=(.+)$/);
  if (match) {
    try {
      showPost(posts, decodeURIComponent(match[1]));
    } catch (error) {
      showPostList();
    }
  } else {
    showPostList();
  }
};

fetch('posts.json')
  .then((response) => {
    if (!response.ok) throw new Error('Catalogo non disponibile');
    return response.json();
  })
  .then((posts) => {
    if (!Array.isArray(posts)) throw new Error('Catalogo non valido');
    renderPostList(posts);
    updateView(posts);
    window.addEventListener('hashchange', () => updateView(posts));
  })
  .catch(() => showError('Non riesco a caricare gli aggiornamenti. Avvia il sito con un server locale.'));
