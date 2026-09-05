# Loweredgames.github.io

Sito web per i miei progetti tra cui Minecraft.

---

Portfolio statico personale realizzato con HTML, CSS e JavaScript. Il sito presenta la tua bio, le passioni, i progetti, Rust e i collegamenti ai tuoi profili online.

## File principali

### `index.html`

Contiene tutta la struttura e i testi visibili della pagina.

- `head`: titolo, descrizione SEO, font esterni e collegamenti a CSS/JavaScript.
- `header`: nome del sito, pulsante tema e navigazione.
- `hero`: presentazione iniziale, bio e simbolo `¿?`.
- `chi-sono`: biografia e blocco di codice Rust dimostrativo.
- `passioni`: schede per videogiochi, anime e manga, film e serie, spazio e Rust.
- `progetti`: tendine HTML per i progetti. Ogni progetto contiene titolo, tag, favicon, descrizione e link.
- `contatti`: collegamento principale a Discord.
- `footer`: tutti i social e i profili pubblici.

### `style.css`

Contiene il tema grafico, il layout e il responsive design.

Le variabili all'inizio del file sono il punto più semplice da modificare:

```css
--bg       /* sfondo principale */
--bg-soft  /* sfondo alternativo delle sezioni */
--panel    /* pannelli e menu */
--ink      /* testo principale */
--muted    /* testo secondario */
--line     /* bordi e separatori */
--acid     /* rosso principale */
```

La modalità chiara usa `body[data-theme='light']` e sostituisce automaticamente i colori principali.

### `script.js`

Gestisce soltanto le funzioni interattive:

- cambio modalità chiara/scura;
- salvataggio del tema in `localStorage`;
- menu mobile;
- chiusura del menu dopo aver scelto una sezione;
- anno automatico del copyright;
- animazioni di entrata quando le sezioni diventano visibili.

Il sito resta leggibile anche senza JavaScript. Le tendine dei progetti usano infatti gli elementi HTML nativi `details` e `summary`.

## Come modificare il contenuto

### Cambiare la bio

Apri `index.html` e cerca i commenti `HERO` e `PROFILO`. Modifica direttamente i paragrafi, il nome e le righe della bio.

### Aggiungere o modificare un interesse

Nella sezione `PASSIONI`, duplica un elemento con classe `interest-card` e modifica numero, simbolo, titolo `h3` e descrizione `p`.

### Modificare un progetto

Dentro `PROGETTI`, ogni elemento `details` rappresenta una tendina. Puoi cambiare `drawer-index`, `drawer-title`, `drawer-type`, l'URL `img src` del favicon, la descrizione e il collegamento `href`.

Per aggiungere un progetto, copia un intero blocco `details` e modifica tutti questi valori.

### Modificare i social

Nel `FOOTER`, sostituisci gli URL dentro gli attributi `href`. Puoi aggiungere un nuovo link copiando un elemento `a` dentro `social-grid`.

### Cambiare i font

Modifica il collegamento Google Fonts nell'`head` e le variabili `--sans`, `--mono` e `--serif` in `style.css`.

## Avvio locale

Il sito non richiede dipendenze o build.

```bash
python3 -m http.server 8000
```

Apri `http://localhost:8000` nel browser.

## Pubblicazione su GitHub Pages

1. Carica `index.html`, `style.css` e `script.js` nel repository.
2. Mantieni i percorsi relativi dei file.
3. In GitHub apri `Settings > Pages`.
4. Seleziona il branch principale e la cartella principale `/root`.
5. Salva e attendi la pubblicazione.

## Note importanti

- I favicon dei progetti sono caricati dai siti esterni. Se un favicon non è disponibile, restano visibili le iniziali di fallback.
- Il tema scelto viene salvato solo nel browser del visitatore.
- I link con `target="_blank"` usano `rel="noopener noreferrer"` per sicurezza.
- Il codice Rust nella bio è dimostrativo; il motore del Tetris viene invece compilato e caricato realmente come WebAssembly.

## Tetris Rust/WASM

Il mini Tetris usa il motore Rust in `tetris-rust/`. Il browser carica il modulo generato in `tetris-rust/pkg/`; JavaScript gestisce solo tastiera, pulsanti, timer e disegno delle celle.

La documentazione specifica del crate è in `tetris-rust/README.md`; il codice contiene anche commenti Rust sui metodi principali.

Prerequisiti:

```bash
rustup target add wasm32-unknown-unknown
cargo install wasm-bindgen-cli
```

Build del motore:

```bash
cd tetris-rust
cargo test
cargo build --target wasm32-unknown-unknown --release
wasm-bindgen target/wasm32-unknown-unknown/release/tetris_rust.wasm --target web --out-dir pkg
```

Per provare il modulo WASM usa un server HTTP, non l'apertura diretta del file HTML:

```bash
cd ..
python3 -m http.server 8000
```

Il gioco parte in pausa. Premi il pulsante `▶` oppure `P` per iniziare; usa le frecce, `Spazio` e i pulsanti sotto la board.