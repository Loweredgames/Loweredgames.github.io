# Tetris Rust

Piccolo gioco di Tetris compilabile in Rust e WebAssembly.

## Perché `lib.rs` e non `main.rs`?

Questo progetto non è un programma da avviare nel terminale. È una libreria Rust compilata in WebAssembly e caricata dal browser.

- `main.rs` si usa per un programma eseguibile con `cargo run`.
- `lib.rs` si usa per una libreria, cioè codice che viene importato da un altro ambiente.
- `wasm-bindgen` rende disponibili al JavaScript il costruttore `Game` e i suoi metodi pubblici.

Il file JavaScript del sito si occupa soltanto di collegare input e grafica alla libreria Rust:

```js
const { default: init, Game } = await import('./tetris-rust/pkg/tetris_rust.js');
await init();
const game = new Game();
```

## Organizzazione

- `src/lib.rs`: regole del gioco e stato della partita.
- `Cargo.toml`: nome del crate, versione, tipo di libreria e dipendenza WASM.
- `pkg/`: file generati da `wasm-bindgen`, caricati dal browser.
- `target/`: file temporanei di compilazione; non contiene il codice sorgente.

## Stato e regole

La board è larga 10 colonne e alta 16 righe.

- `0`: cella vuota;
- `1`: blocco già fissato;
- `2`: pezzo attivo, aggiunto da `board_state()` per il rendering.

La partita parte in pausa. `toggle_pause()` la avvia o la ferma. Movimento, rotazione e caduta vengono ignorati se la partita è in pausa o terminata.

## Comandi Rust esportati

- `new()`: crea una partita nuova in pausa.
- `toggle_pause()`: cambia lo stato pausa.
- `move_left()` / `move_right()`: spostano il pezzo.
- `rotate()`: ruota il pezzo.
- `drop_one()`: fa scendere il pezzo di una riga.
- `board_state()`: restituisce lo stato per il disegno HTML.
- `score()`: restituisce il punteggio.
- `is_paused()` / `is_game_over()`: restituiscono lo stato della partita.

## Test e build

Dal terminale, dentro questa cartella:

```bash
cargo test
cargo build --target wasm32-unknown-unknown --release
wasm-bindgen target/wasm32-unknown-unknown/release/tetris_rust.wasm --target web --out-dir pkg
```

Per provare il portfolio devi usare un server HTTP dalla cartella principale:

```bash
cd ..
python3 -m http.server 8000
```

Poi apri `http://localhost:8000`.

## Modifiche comuni

- Dimensioni board: modifica `WIDTH` e `HEIGHT` in `src/lib.rs`, poi aggiorna anche `boardWidth`, `boardHeight` e le dimensioni CSS in `index.html`, `script.js` e `style.css`.
- Pezzi: modifica `shape_for()`.
- Punteggio righe: modifica il valore aggiunto dentro `lock_piece()`.
- Velocità: modifica `650` nel timer di `script.js`.
- Stato iniziale: modifica `paused: true` in `Game::new()` e il testo iniziale del pulsante in `index.html`.

Dopo ogni modifica al Rust devi rigenerare `pkg/` con i comandi di build sopra.