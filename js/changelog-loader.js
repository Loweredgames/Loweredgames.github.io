// Lista dei changelog disponibili (accessibile globalmente)
window.changelogList = [
    {
        file: '2020-12-31-changelog.md', // Nome del file markdown
        date: '25 Gennaio 2024',         // Data di pubblicazione
        title: 'Changelog Template date', // Titolo visualizzato
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhN3wr6bMKw7ri9urVk4xUHLRy4jVlGI6k8_Q8vqLgMcbrW-BM9BURbspRWu2MwOEEf0GqBWlsET696NTXcKGjNCo0VfOwrBgI7tppuZqupJdchAWtuLcKql5NSPPmrHuElQhKVqXTc9Do4/s72-w581-c-h581/changelog.png'  // URL immagine
    },
    {
        file: 'v1-0-0.md',
        date: '20 Gennaio 2024',
        title: 'Versione 1.0.0',
        image: 'images/2024-09-23_14.21.49.png'
    },
    {
        file: 'v0-9-0.md',
        date: '10 Gennaio 2024',
        title: 'Versione 0.9.0'
    }
];

// Funzione per caricare la lista dei changelog nella griglia
function loadChangelogList() {
    const changelogGrid = document.getElementById('changelog-grid');
    
    // Crea una card per ogni changelog
    changelogList.forEach(changelog => {
        const card = createChangelogCard(changelog);
        changelogGrid.appendChild(card);
    });
}

// Funzione per creare una singola card del changelog
function createChangelogCard(changelog) {
    const card = document.createElement('a');
    card.href = `view-changelog.html?file=${changelog.file}`; // Link alla pagina del changelog
    card.className = 'changelog-card';
    
    // Template della card con immagine opzionale
    card.innerHTML = `
        ${changelog.image ? `<div class="changelog-image"><img src="${changelog.image}" alt="${changelog.title}"></div>` : ''}
        <h3>${changelog.title}</h3>
        <p>${changelog.date}</p>
    `;
    return card;
}

// Inizializza il caricamento quando il DOM è pronto
document.addEventListener('DOMContentLoaded', loadChangelogList);
