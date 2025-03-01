// Lista dei changelog disponibili (accessibile globalmente)
window.changelogList = [
    {
        file: '2020-12-31-changelog.md', // Nome del file markdown
        date: '25.01.2024',         // Formato data
        title: 'Changelog Template date', // Titolo visualizzato
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhN3wr6bMKw7ri9urVk4xUHLRy4jVlGI6k8_Q8vqLgMcbrW-BM9BURbspRWu2MwOEEf0GqBWlsET696NTXcKGjNCo0VfOwrBgI7tppuZqupJdchAWtuLcKql5NSPPmrHuElQhKVqXTc9Do4/s72-w581-c-h581/changelog.png',  // URL immagine
        description: 'Template per i changelog', // Aggiunto campo description
        tags: ['lts','stable','release-candidate','pre-release','building', 'recap','website','changelog-doc'] // Aggiunti i tag
    },
    {
        file: 'v1-0-0.md',
        date: '20.01.2024',
        title: 'Versione 1.0.0',
        image: 'images/posts/2024-09-23_14.21.49.png',
        tags: ['stable']
    },
    {
        file: 'v0-9-0.md',
        date: '10.11.2024',
        title: 'Versione 0.9.0',
        image: '',
        tags: ['stable', 'pre-release']
    },
    {
        file: 'v1-0-0.md',
        date: '20.11.2024',
        title: 'Versione t',
        image: '',
        tags: ['building']
    },
    {
        file: 'v1-0-0.md',
        date: '20.11.2004',
        title: 'Versione t2',
        image: '',
        tags: ['test']
    },
    {
        file: 'v1-0-0.md',
        date: '20.10.2004',
        title: 'Versione t3',
        image: '',
        tags: ['test']
    },
    {
        file: 'test.md',
        date: '3.10.2000',
        title: 'Versione t4',
        image: 'https://dummyimage.com/600x400/000/fff.png',
        tags: ['test']
    }
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
    
    // Genera il calendario
    generateChangelogCalendar();


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

// Funzione aggiornata per generare il calendario
function generateChangelogCalendar() {
    const calendarContainer = document.querySelector('.changelog-calendar');
    if (!calendarContainer) return;

    // Raggruppa i changelog per anno e mese
    const groupedChangelogs = groupChangelogsByYearMonth(window.changelogList);
    calendarContainer.innerHTML = '';

    // Ordina gli anni in ordine decrescente
    const years = Object.keys(groupedChangelogs).sort((a, b) => b - a);

    years.forEach(year => {
        const yearSection = document.createElement('div');
        yearSection.className = 'calendar-year';
        yearSection.innerHTML = `<h3 class="year-title">${year}</h3>`;

        // Ordina i mesi in ordine decrescente
        const months = Object.keys(groupedChangelogs[year]).sort((a, b) => b - a);

        months.forEach(monthIndex => {
            const monthLogs = groupedChangelogs[year][monthIndex];
            const monthSection = document.createElement('div');
            monthSection.className = 'calendar-month';
            
            // Ordina i changelog per giorno in ordine decrescente
            monthLogs.sort((a, b) => {
                const dayA = parseInt(a.date.split('.')[0]);
                const dayB = parseInt(b.date.split('.')[0]);
                return dayB - dayA;
            });

            monthSection.innerHTML = `
                <h4 class="month-title">${getMonthName(parseInt(monthIndex))}</h4>
                <ul>
                    ${monthLogs.map(log => {
                        const day = log.date.split('.')[0].padStart(2, '0');
                        return `
                            <li>
                                <span class="date">${day}</span>
                                <a href="view-changelog.html?file=${log.file}">${log.title}</a>
                            </li>
                        `;
                    }).join('')}
                </ul>
            `;
            
            yearSection.appendChild(monthSection);
        });
        
        calendarContainer.appendChild(yearSection);
    });
}

// Funzione aggiornata per raggruppare i changelog
function groupChangelogsByYearMonth(changelogs) {
    return changelogs.reduce((groups, log) => {
        // Parsing della data (formato: "DD.MM.YYYY")
        const [day, month, year] = log.date.split('.');
        
        // Converte mese da numero a indice (sottrae 1 perché i mesi partono da 0)
        const monthIndex = parseInt(month) - 1;
        
        // Crea gli oggetti anno e mese se non esistono
        if (!groups[year]) {
            groups[year] = {};
        }
        if (!groups[year][monthIndex]) {
            groups[year][monthIndex] = [];
        }
        
        // Aggiungi il changelog al gruppo appropriato
        groups[year][monthIndex].push({
            ...log,
            dayNum: parseInt(day)
        });

        // Ordina i changelog del mese per data decrescente
        groups[year][monthIndex].sort((a, b) => b.dayNum - a.dayNum);
        
        return groups;
    }, {});
}

// Funzione di utilità per ottenere il nome del mese
function getMonthName(monthIndex) {
    const months = [
        'Gennaio', 'Febbraio', 'Marzo', 'Aprile',
        'Maggio', 'Giugno', 'Luglio', 'Agosto',
        'Settembre', 'Ottobre', 'Novembre', 'Dicembre'
    ];
    return months[monthIndex];
}

// Funzione di utilità per ottenere l'indice del mese
function getMonthIndex(monthName) {
    const months = {
        'Gennaio': 0, 'Febbraio': 1, 'Marzo': 2, 'Aprile': 3,
        'Maggio': 4, 'Giugno': 5, 'Luglio': 6, 'Agosto': 7,
        'Settembre': 8, 'Ottobre': 9, 'Novembre': 10, 'Dicembre': 11
    };
    return months[monthName];
}

// Inizializza il caricamento quando il DOM è pronto
document.addEventListener('DOMContentLoaded', loadChangelogList);
