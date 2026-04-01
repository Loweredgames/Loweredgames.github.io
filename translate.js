/*
 * Questo file gestisce:
 * 1) il widget Google Translate,
 * 2) il cambio di tema in base alla data,
 * 3) il cambio del favicon per eventi speciali.
 *
 * 
 * Come funziona:
 * - `themeEvents` è un array di eventi.
 * - Ogni evento può usare `month` e `day` per un singolo giorno,
 *   oppure `startMonth` + `startDay` e `endMonth` + `endDay`
 *   per un intervallo di date.
 * - Se la data corrisponde, viene aggiunta la classe CSS al body
 *   (`body.classList.add(event.className)`) e viene aggiornato il favicon.
 * - Per l'evento `april-fools` viene anche lanciato un effetto confetti.
 *
 * 
 * Come aggiungere un nuovo evento:
 * 1) nella variabile `themeEvents`, aggiungi un nuovo oggetto:
 *      {
 *          id: 'nome-evento',
 *          month: 11, // gennaio = 0, febbraio = 1, ..., dicembre = 11
 *          day: 25,
 *          className: 'christmas',
 *          iconPath: 'images/icons/favicon-christmas.ico' Deve essere un .ico
 *      }
 *
 * 2) in `style.css`, aggiungi gli stili per:
 * Nota: il tema normale rimane definito in `body::before` e `body`. Il tema evento deve sovrascriverlo con `body.nome-evento::before` e classi specifiche, in modo che il layout standard resti disponibile nei giorni normali. esempi: body.nome-evento header
 *      body.nome-evento::before
 *      body.nome-evento::after
 *      body.nome-evento header
 *      body.nome-evento nav a
 *      body.nome-evento .tag-filter
 *      ... ecc.
 *
 *
 * 3) se vuoi un comportamento JavaScript extra per l'evento,
 *    modifica la funzione `applySiteTheme()` e aggiungi un controllo su `event.id`.
 *
 * Note sul favicon:
 * - Se `iconPath` è impostato, il codice userà quel file.
 * - Puoi usare un `.ico` o uno `.png` sotto la cartella `images/icons`.
 *
 * Esempio rapido di un nuovo evento:
 * {
 *     id: 'halloween',
 *     month: 9,
 *     day: 31,
 *     className: 'halloween',
 *     iconPath: 'images/icons/favicon-halloween.ico'
 * }
 *
 * Importante:
 * - `month` parte da 0.
 * - `className` deve essere usato anche nel CSS.
 * - Non serve cambiare il codice HTML delle pagine perché `translate.js`
 *   viene eseguito su tutte le pagine che lo importano.
 */

// Funzione per caricare e inizializzare il widget di Google Translate
function loadTranslateWidget() {
    // Crea e configura il container per il widget
    const googleDiv = document.createElement('div');
    googleDiv.id = 'google_translate_element';
    googleDiv.style.position = 'fixed';
    googleDiv.style.top = '1rem';
    googleDiv.style.right = '1rem';
    googleDiv.style.zIndex = '1000';
    
    // Definizione degli stili personalizzati per il widget
    const style = document.createElement('style');
    style.textContent = `
        /* Stile del contenitore principale */
        .goog-te-gadget {
            position: relative;
            background-color: #2d2d2d;
            border-radius: 4px;
            padding: 8px;
            font-family: 'Minecraft', Arial, sans-serif !important;
            border: none;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
            color: #ffffff !important;
        }

        /* Stili per il selettore della lingua */
        .goog-te-gadget-simple {
            background-color: transparent !important;
            border: none !important;
            padding: 0 !important;
        }

        /* Stili per il testo nel widget */
        .goog-te-gadget span, .goog-te-gadget-simple span {
            color: #ffffff !important;
            font-family: 'Minecraft', Arial, sans-serif !important;
        }

        /* Personalizzazione del menu a tendina */
        .goog-te-combo {
            background-color: #2d2d2d !important;
            color: #ffffff !important;
            border: none !important;
            padding: 8px 12px !important;
            font-family: 'Minecraft', Arial, sans-serif !important;
            cursor: pointer !important;
            border-radius: 4px !important;
            outline: none !important;
            width: 200px !important;
        }

        /* Effetto hover sul menu */
        .goog-te-combo:hover {
            background-color: #3d3d3d !important;
        }

        /* Stile delle opzioni nel menu */
        .goog-te-combo option {
            background-color: #1a1a1a !important;
            color: #ffffff !important;
            padding: 12px 16px !important;
            line-height: 2 !important;
            min-height: 30px !important;
            display: block !important;
            max-height: 300px !important;
        }

        /* Personalizzazione della freccia del menu a tendina */
        select.goog-te-combo {
            -webkit-appearance: none !important;
            -moz-appearance: none !important;
            appearance: none !important;
            background-image: url('data:image/svg+xml;utf8,<svg fill="%23ffffff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>') !important;
            background-repeat: no-repeat !important;
            background-position: right 8px center !important;
            padding-right: 30px !important;
        }

        /* Nasconde elementi indesiderati di Google Translate */
        .goog-te-banner-frame,
        .goog-logo-link,
        .skiptranslate iframe {
            display: none !important;
        }
    `;
    
    // Aggiunge gli stili e il container al documento
    document.head.appendChild(style);
    document.body.appendChild(googleDiv);

    // Carica lo script di Google Translate
    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(script);
}

// Lista degli eventi speciali che cambiano il tema del sito.
// Ogni oggetto rappresenta un evento con data, classe CSS e favicon dedicato.
const themeEvents = [
    

    // April Fools'
    {
        id: 'april-fools',
        month: 3,
        day: 1,
        className: 'april-fools',
        iconPath: 'images/icons/april_fools/favicon.ico'
    },

    // Natale (intervallo di giorni)
    {
        id: 'christmas',
        startMonth: 11,
        endMonth: 11,
        startDay: 24,
        endDay: 26,
        className: 'christmas',
        iconPath: 'images/icons/favicon-christmas.ico'
    }
];

function isTodayInEventRange(event, today) {
    const hasRange =
        typeof event.startMonth === 'number' &&
        typeof event.startDay === 'number' &&
        typeof event.endMonth === 'number' &&
        typeof event.endDay === 'number';

    if (hasRange) {
        const year = today.getFullYear();
        const startDate = new Date(year, event.startMonth, event.startDay);
        const endDate = new Date(year, event.endMonth, event.endDay);

        if (startDate <= endDate) {
            return today >= startDate && today <= endDate;
        }

        // Intervallo che attraversa l'anno nuovo, es. 28 dicembre -> 2 gennaio
        return today >= startDate || today <= endDate;
    }

    return event.month === today.getMonth() && event.day === today.getDate();
}

// Cerca l'evento che corrisponde alla data odierna.
function getTodayThemeEvent() {
    const today = new Date();
    return themeEvents.find(event => isTodayInEventRange(event, today));
}

function updateFaviconForEvent(event) {
    // Se troviamo il tag favicon e l'evento ha un icona dedicata,
    // la usiamo. Altrimenti manteniamo l'icona normale
    const icon = document.querySelector('link[rel~="icon"], link[rel="shortcut icon"]');
    if (!icon || !event) return;

    if (event.iconPath) {
        icon.type = 'image/x-icon';
        icon.href = event.iconPath;
        return;
    }

    // Se non è specificato un favicon evento, conserva quello di default già definito nel <head>.
    return;
}

// Crea l'effetto confetti per il tema Pesce d'Aprile.
function launchAprilFoolsConfetti() {
    const overlay = document.createElement('div');
    overlay.className = 'april-fools-confetti';
    const colors = ['#ffeb3b', '#ff4081', '#40c4ff', '#76ff03', '#ffffff'];

    // Crea 18 pezzi di confetti con posizioni, dimensioni, colori e animazioni casuali.
    for (let i = 0; i < 18; i++) {
        const piece = document.createElement('span');
        piece.style.left = `${Math.random() * 100}%`;
        piece.style.top = `${-10 - Math.random() * 10}%`;
        piece.style.width = `${6 + Math.random() * 10}px`;
        piece.style.height = piece.style.width;
        piece.style.backgroundColor = colors[i % colors.length];
        piece.style.animationDelay = `${Math.random() * 0.6}s`;
        piece.style.animationDuration = `${2 + Math.random() * 1.5}s`;
        piece.style.opacity = `${0.8 + Math.random() * 0.2}`;
        overlay.appendChild(piece);
    }
    // Aggiunge l'overlay dei confetti al body e lo rimuove dopo l'animazione.
    document.body.appendChild(overlay);
    window.setTimeout(() => {
        overlay.style.transition = 'opacity 0.8s ease';
        overlay.style.opacity = '0';
        window.setTimeout(() => overlay.remove(), 800);
    }, 6500);
}

// Applica il tema del sito in base alla data odierna, se c'è un evento corrispondente.
function applySiteTheme() {
    // Cerca un evento che corrisponda alla data odierna.
    const event = getTodayThemeEvent();
    if (!event) return;

    // Applica la classe CSS dell'evento al body e aggiorna il favicon.
    document.body.classList.add(event.className);
    updateFaviconForEvent(event);

    // Aggiungi effetti speciali per eventi specifici.
    if (event.id === 'april-fools') {
        launchAprilFoolsConfetti();
    }
}

/**
 * Funzione di inizializzazione del widget di Google Translate
 * Viene chiamata automaticamente dallo script di Google
 */
// Callback richiesta da Google Translate per inizializzare il widget.
window.googleTranslateElementInit = function() {
    new google.translate.TranslateElement({
        pageLanguage: 'it',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
        gaTrack: false
    }, 'google_translate_element');
};

// Al caricamento della pagina, applica il tema evento (se c'è) e poi carica il widget di traduzione.
document.addEventListener('DOMContentLoaded', function() {
    applySiteTheme();
    loadTranslateWidget();
});
