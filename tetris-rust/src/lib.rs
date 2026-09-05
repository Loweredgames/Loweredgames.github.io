//! Piccolo gioco di Tetris compilabile in Rust e WebAssembly.
//!
//! `lib.rs` viene usato al posto di `main.rs` perché questo crate non deve
//! avviare un programma da terminale: deve esportare una libreria che
//! JavaScript possa caricare nel browser tramite `wasm-bindgen`.

/// Numero di colonne della board.
pub const WIDTH: usize = 10;
/// Numero di righe della board.
pub const HEIGHT: usize = 16;

#[derive(Clone, Debug, PartialEq, Eq)]
struct Piece {
    cells: Vec<Vec<u8>>,
    x: i32,
    y: i32,
}

#[derive(Debug)]
#[wasm_bindgen::prelude::wasm_bindgen]
pub struct Game {
    board: [[u8; WIDTH]; HEIGHT],
    active: Piece,
    score: u32,
    paused: bool,
    game_over: bool,
    next_piece: usize,
}

#[wasm_bindgen::prelude::wasm_bindgen]
impl Game {
    /// Crea una partita vuota e inizialmente in pausa.
    #[wasm_bindgen::prelude::wasm_bindgen(constructor)]
    pub fn new() -> Self {
        let mut game = Self {
            board: [[0; WIDTH]; HEIGHT],
            active: Piece {
                cells: vec![vec![1, 1], vec![1, 1]],
                x: 4,
                y: 0,
            },
            score: 0,
            paused: true,
            game_over: false,
            next_piece: 0,
        };
        game.spawn_piece();
        game
    }

    /// Cambia tra pausa e partita attiva.
    pub fn toggle_pause(&mut self) {
        if !self.game_over {
            self.paused = !self.paused;
        }
    }

    /// Sposta il pezzo corrente di una colonna verso sinistra.
    pub fn move_left(&mut self) {
        self.move_horizontal(-1);
    }

    /// Sposta il pezzo corrente di una colonna verso destra.
    pub fn move_right(&mut self) {
        self.move_horizontal(1);
    }

    /// Restituisce la board come testo: `0` vuoto, `1` blocco fissato, `2` pezzo attivo.
    pub fn board_state(&self) -> String {
        let mut state = self.board;
        for (row, cells) in self.active.cells.iter().enumerate() {
            for (column, filled) in cells.iter().enumerate() {
                let x = self.active.x + column as i32;
                let y = self.active.y + row as i32;
                if *filled != 0 && y >= 0 && y < HEIGHT as i32 && x >= 0 && x < WIDTH as i32 {
                    state[y as usize][x as usize] = 2;
                }
            }
        }
        state
            .iter()
            .flat_map(|row| row.iter().map(|cell| char::from(b'0' + *cell)))
            .collect()
    }

    /// Restituisce il punteggio corrente.
    pub fn score(&self) -> u32 {
        self.score
    }

    /// Indica se la partita è in pausa.
    pub fn is_paused(&self) -> bool {
        self.paused
    }

    /// Indica se la partita è terminata.
    pub fn is_game_over(&self) -> bool {
        self.game_over
    }

    /// Sposta il pezzo orizzontalmente se la nuova posizione è valida.
    pub fn move_horizontal(&mut self, offset: i32) -> bool {
        if self.paused || self.game_over {
            return false;
        }
        let mut next = self.active.clone();
        next.x += offset;
        if !self.collides(&next) {
            self.active = next;
            true
        } else {
            false
        }
    }

    /// Ruota il pezzo di 90 gradi se la rotazione non crea una collisione.
    pub fn rotate(&mut self) -> bool {
        if self.paused || self.game_over {
            return false;
        }
        let rotated = rotate(&self.active.cells);
        let next = Piece {
            cells: rotated,
            ..self.active.clone()
        };
        if !self.collides(&next) {
            self.active = next;
            true
        } else {
            false
        }
    }

    /// Fa scendere il pezzo di una riga; se tocca il fondo lo fissa e genera il prossimo.
    pub fn drop_one(&mut self) -> bool {
        if self.paused || self.game_over {
            return false;
        }
        let mut next = self.active.clone();
        next.y += 1;
        if !self.collides(&next) {
            self.active = next;
            true
        } else {
            self.lock_piece();
            false
        }
    }

    /// Genera i sette pezzi in sequenza per rendere il comportamento ripetibile nei test.
    fn spawn_piece(&mut self) {
        let shape = shape_for(self.next_piece);
        self.next_piece = (self.next_piece + 1) % 7;
        self.active = Piece {
            x: ((WIDTH - shape[0].len()) / 2) as i32,
            y: 0,
            cells: shape,
        };
        if self.collides(&self.active) {
            self.game_over = true;
        }
    }

    /// Controlla bordi e blocchi già presenti nella board.
    fn collides(&self, piece: &Piece) -> bool {
        piece.cells.iter().enumerate().any(|(row, cells)| {
            cells.iter().enumerate().any(|(column, filled)| {
                if *filled == 0 {
                    return false;
                }
                let x = piece.x + column as i32;
                let y = piece.y + row as i32;
                x < 0
                    || x >= WIDTH as i32
                    || y >= HEIGHT as i32
                    || (y >= 0 && self.board[y as usize][x as usize] != 0)
            })
        })
    }

    /// Fissa il pezzo, elimina le righe complete e aggiorna il punteggio.
    fn lock_piece(&mut self) {
        for (row, cells) in self.active.cells.iter().enumerate() {
            for (column, filled) in cells.iter().enumerate() {
                let x = self.active.x + column as i32;
                let y = self.active.y + row as i32;
                if *filled != 0 && y >= 0 && y < HEIGHT as i32 && x >= 0 && x < WIDTH as i32 {
                    self.board[y as usize][x as usize] = 1;
                }
            }
        }
        let mut rows = Vec::with_capacity(HEIGHT);
        for row in self.board.iter() {
            if row.iter().any(|cell| *cell == 0) {
                rows.push(*row);
            } else {
                self.score += 100;
            }
        }
        while rows.len() < HEIGHT {
            rows.insert(0, [0; WIDTH]);
        }
        self.board = rows.try_into().expect("board height is fixed");
        self.spawn_piece();
    }
}

/// Restituisce una delle sette forme Tetris standard.
fn shape_for(index: usize) -> Vec<Vec<u8>> {
    match index % 7 {
        0 => vec![vec![1, 1, 1, 1]],
        1 => vec![vec![0, 1, 0], vec![1, 1, 1]],
        2 => vec![vec![1, 1, 0], vec![0, 1, 1]],
        3 => vec![vec![0, 1, 1], vec![1, 1, 0]],
        4 => vec![vec![1, 0, 0], vec![1, 1, 1]],
        5 => vec![vec![0, 0, 1], vec![1, 1, 1]],
        _ => vec![vec![1, 1], vec![1, 1]],
    }
}

/// Ruota una matrice di celle in senso orario.
fn rotate(shape: &[Vec<u8>]) -> Vec<Vec<u8>> {
    (0..shape[0].len())
        .map(|column| shape.iter().rev().map(|row| row[column]).collect())
        .collect()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn starts_paused() {
        let game = Game::new();
        assert!(game.paused);
        assert_eq!(game.score, 0);
    }

    #[test]
    fn paused_game_does_not_move() {
        let mut game = Game::new();
        let original = game.active.clone();
        assert!(!game.drop_one());
        assert_eq!(game.active, original);
    }

    #[test]
    fn resume_allows_movement() {
        let mut game = Game::new();
        game.toggle_pause();
        assert!(game.drop_one());
        assert_eq!(game.active.y, 1);
    }

    #[test]
    fn rotation_changes_shape() {
        let mut game = Game::new();
        game.toggle_pause();
        game.active.cells = vec![vec![1, 0], vec![1, 1]];
        assert!(game.rotate());
        assert_eq!(game.active.cells, vec![vec![1, 1], vec![1, 0]]);
    }
}
