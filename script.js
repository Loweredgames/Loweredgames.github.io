/*
  JAVASCRIPT DEL PORTFOLIO
  Il sito resta utilizzabile senza questo file: menu e tendine hanno comunque
  un comportamento HTML valido. Qui gestiamo solo tema, menu, anno e reveal.
*/

// Const
const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');
const currentYear = document.querySelector('#current-year');
const themeToggle = document.querySelector('.theme-toggle');

// Applica il tema e aggiorna etichetta, icona e stato accessibile del pulsante.
const setTheme = (theme) => {
  const isLight = theme === 'light';
  document.body.dataset.theme = isLight ? 'light' : 'dark';

  if (themeToggle) {
    themeToggle.setAttribute('aria-pressed', String(isLight));
    themeToggle.setAttribute('aria-label', isLight ? 'Attiva modalità scura' : 'Attiva modalità chiara');
    themeToggle.querySelector('.theme-icon').textContent = isLight ? '☾' : '☼';
    themeToggle.querySelector('.theme-label').textContent = isLight ? 'Scuro' : 'Chiaro';
  }
};

// Il tema scuro e' il valore predefinito; la scelta dell'utente viene ricordata.
const savedTheme = window.localStorage.getItem('loweredgames-theme');
setTheme(savedTheme === 'light' ? 'light' : 'dark');

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const nextTheme = document.body.dataset.theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    window.localStorage.setItem('loweredgames-theme', nextTheme);
  });
}

// Aggiorna automaticamente l'anno del copyright nel footer.
if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

// Menu mobile: su desktop la navigazione e' sempre visibile.
if (menuToggle && siteNav) {
  const closeMenu = () => {
    siteNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
}

const tetrisGrid = document.querySelector('#tetris-grid');
const tetrisScore = document.querySelector('#tetris-score');
const tetrisStatus = document.querySelector('#tetris-status');

// Ponte browser verso il motore Rust compilato in tetris-rust/pkg.
const startRustTetris = async () => {
  if (!tetrisGrid || !tetrisScore || !tetrisStatus) return;

  try {
    const { default: init, Game } = await import('./tetris-rust/pkg/tetris_rust.js');
    await init();
    const rustGame = new Game();
    const boardWidth = 10;
    const boardHeight = 16;
    const cells = [];
    const pauseButton = document.querySelector('[data-tetris-action="pause"]');

    tetrisGrid.innerHTML = '';
    for (let index = 0; index < boardWidth * boardHeight; index += 1) {
      const cell = document.createElement('span');
      cell.className = 'tetris-cell';
      tetrisGrid.appendChild(cell);
      cells.push(cell);
    }

    const render = () => {
      const state = rustGame.board_state();
      cells.forEach((cell, index) => {
        cell.className = state[index] === '1' ? 'tetris-cell filled' : state[index] === '2' ? 'tetris-cell active' : 'tetris-cell';
      });
      tetrisScore.textContent = rustGame.score();
      tetrisStatus.textContent = rustGame.is_game_over() ? 'GAME OVER' : rustGame.is_paused() ? 'PAUSA' : 'IN CORSO';
      if (pauseButton) {
        const paused = rustGame.is_paused();
        pauseButton.textContent = paused ? '▶' : 'Ⅱ';
        pauseButton.setAttribute('aria-label', paused ? 'Riprendi il gioco' : 'Metti in pausa');
        pauseButton.setAttribute('aria-pressed', String(paused));
      }
    };

    const action = (name) => {
      if (name === 'left') rustGame.move_left();
      if (name === 'right') rustGame.move_right();
      if (name === 'rotate') rustGame.rotate();
      if (name === 'drop') rustGame.drop_one();
      if (name === 'pause') rustGame.toggle_pause();
      render();
    };

    document.querySelectorAll('[data-tetris-action]').forEach((button) => {
      button.addEventListener('click', () => action(button.dataset.tetrisAction));
    });
    window.addEventListener('keydown', (event) => {
      const keyActions = { ArrowLeft: 'left', ArrowRight: 'right', ArrowUp: 'rotate', ArrowDown: 'drop', ' ': 'drop', p: 'pause', P: 'pause' };
      if (keyActions[event.key]) {
        event.preventDefault();
        action(keyActions[event.key]);
      }
    });
    window.setInterval(() => action('drop'), 650);
    render();
  } catch (error) {
    tetrisStatus.textContent = 'WASM NON DISPONIBILE';
    console.error('Impossibile caricare il motore Rust/WASM:', error);
  }
};

startRustTetris();

// Reveal progressivo: se IntersectionObserver non e' disponibile mostra tutto.
const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window && revealElements.length > 0) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('is-visible'));
}
