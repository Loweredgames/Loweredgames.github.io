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

/**
 * Funzione di inizializzazione del widget di Google Translate
 * Viene chiamata automaticamente dallo script di Google
 */
window.googleTranslateElementInit = function() {
    new google.translate.TranslateElement({
        pageLanguage: 'it',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
        gaTrack: false
    }, 'google_translate_element');
};

// Inizializza il widget quando il DOM è completamente caricato
document.addEventListener('DOMContentLoaded', loadTranslateWidget);
