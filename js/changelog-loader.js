// Lista dei changelog disponibili (accessibile globalmente)
window.changelogList = [
    {
        file: '2020-12-31-changelog.md', // Nome del file markdown
        date: '25 Gennaio 2024',         // Data di pubblicazione
        title: 'Changelog Template date', // Titolo visualizzato
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhN3wr6bMKw7ri9urVk4xUHLRy4jVlGI6k8_Q8vqLgMcbrW-BM9BURbspRWu2MwOEEf0GqBWlsET696NTXcKGjNCo0VfOwrBgI7tppuZqupJdchAWtuLcKql5NSPPmrHuElQhKVqXTc9Do4/s72-w581-c-h581/changelog.png',  // URL immagine
        description: 'Template per i changelog', // Aggiunto campo description
        tags: ['blogger', 'template'] // Aggiunti i tag
    },
    {
        file: 'v1-0-0.md',
        date: '20 Gennaio 2024',
        title: 'Versione 1.0.0',
        image: 'images/posts/2024-09-23_14.21.49.png',
        tags: ['version', 'stable']
    },
    {
        file: 'v0-9-0.md',
        date: '10 Gennaio 2024',
        title: 'Versione 0.9.0',
        image: '',
        tags: ['pre-release']
    },
    {
        file: 'v1-0-0.md',
        date: '20 Gennaio 2024',
        title: 'Versione t',
        image: 'images/posts/2024-09-23_14.21.49.png',
        tags: ['test']
    },
];

// Funzione per caricare la lista dei changelog nella griglia
function loadChangelogList() {
    const changelogGrid = document.getElementById('changelog-grid');
    changelogGrid.innerHTML = ''; // Pulisci la griglia
    
    // Crea una card per ogni changelog
    changelogList.forEach(changelog => {
        const card = createChangelogCard(changelog);
        changelogGrid.appendChild(card);
    });

    // Inizializza i filtri tag
    initializeTagFilters();
}

// Funzione per creare una singola card del changelog
function createChangelogCard(changelog) {
    const card = document.createElement('a');
    card.href = `view-changelog.html?file=${changelog.file}`; // Link alla pagina del changelog
    card.className = 'changelog-card';
    
    const defaultImage = 'https://placehold.co/600x400/1a1a1a/ffffff/png?text=No+Image';
    
    // Crea il markup HTML per i tag
    const tagsHtml = changelog.tags ? 
        `<div class="changelog-tags">
            ${changelog.tags.map(tag => `<span class="tag ${tag}">${tag}</span>`).join('')}
         </div>` : '';

    card.innerHTML = `
        <div class="changelog-image">
            <img src="${changelog.image || defaultImage}" 
                 alt="${changelog.title}"
                 onerror="this.src='${defaultImage}'">
        </div>
        ${tagsHtml}
        <h3>${changelog.title}</h3>
        <p class="date">${changelog.date}</p>
        ${changelog.description ? `<p class="description">${changelog.description}</p>` : ''}
    `;
    return card;
}

// Funzione per filtrare i changelog per versione
function filterChangelogsByVersion(version) {
    return window.changelogList.filter(changelog => 
        changelog.title.toLowerCase().includes(version.toLowerCase())
    );
}

// Funzione per cercare nei changelog
function searchChangelogs(searchTerm) {
    const activeTag = document.querySelector('.tag-filter.active').dataset.tag;
    let results = window.changelogList;
    
    // Applica prima il filtro per tag se non è "all"
    if (activeTag !== 'all') {
        results = results.filter(changelog => 
            changelog.tags && changelog.tags.includes(activeTag)
        );
    }
    
    // Poi applica il filtro di ricerca
    results = results.filter(changelog => 
        changelog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        changelog.description?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    refreshChangelogGrid(results);
}

// Funzione per aggiornare la griglia dei changelog
function refreshChangelogGrid(changelogs) {
    const grid = document.getElementById('changelog-grid');
    grid.innerHTML = '';
    changelogs.forEach(changelog => {
        const card = createChangelogCard(changelog);
        grid.appendChild(card);
    });
}

// Funzione per copiare il link del changelog
function copyChangelogLink(file) {
    const url = `${window.location.origin}/view-changelog.html?file=${file}`;
    navigator.clipboard.writeText(url)
        .then(() => alert('Link copiato negli appunti!'));
}

// Funzione per filtrare i changelog per tag
function filterChangelogsByTag(tag) {
    const results = window.changelogList.filter(changelog => 
        changelog.tags && changelog.tags.includes(tag)
    );
    refreshChangelogGrid(results);
}

// Funzione per inizializzare i filtri tag
function initializeTagFilters() {
    const tagFilters = document.querySelectorAll('.tag-filter');
    tagFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            // Rimuovi la classe active da tutti i filtri
            tagFilters.forEach(f => f.classList.remove('active'));
            // Aggiungi la classe active al filtro cliccato
            filter.classList.add('active');
            
            const tag = filter.dataset.tag;
            if (tag === 'all') {
                refreshChangelogGrid(window.changelogList);
            } else {
                filterChangelogsByTag(tag);
            }
        });
    });
}

// Inizializza il caricamento quando il DOM è pronto
document.addEventListener('DOMContentLoaded', loadChangelogList);
