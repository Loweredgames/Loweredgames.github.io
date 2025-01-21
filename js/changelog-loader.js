// Rendi changelogList accessibile globalmente
window.changelogList = [
    {
        file: '2020-12-31-changelog.md',
        date: '25 Gennaio 2024',
        title: 'Changelog Template date',
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhN3wr6bMKw7ri9urVk4xUHLRy4jVlGI6k8_Q8vqLgMcbrW-BM9BURbspRWu2MwOEEf0GqBWlsET696NTXcKGjNCo0VfOwrBgI7tppuZqupJdchAWtuLcKql5NSPPmrHuElQhKVqXTc9Do4/s72-w581-c-h581/changelog.png'
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

function loadChangelogList() {
    const changelogGrid = document.getElementById('changelog-grid');
    
    changelogList.forEach(changelog => {
        const card = createChangelogCard(changelog);
        changelogGrid.appendChild(card);
    });
}

function createChangelogCard(changelog) {
    const card = document.createElement('a');
    card.href = `view-changelog.html?file=${changelog.file}`; // Modificato da version a file
    card.className = 'changelog-card';
    card.innerHTML = `
        ${changelog.image ? `<div class="changelog-image"><img src="${changelog.image}" alt="${changelog.title}"></div>` : ''}
        <h3>${changelog.title}</h3>
        <p>${changelog.date}</p>
    `;
    return card;
}

// Carica i changelog quando la pagina è pronta
document.addEventListener('DOMContentLoaded', loadChangelogList);
