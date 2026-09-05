/* tslint:disable */
/* eslint-disable */

export class Game {
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Restituisce la board come testo: `0` vuoto, `1` blocco fissato, `2` pezzo attivo.
     */
    board_state(): string;
    /**
     * Fa scendere il pezzo di una riga; se tocca il fondo lo fissa e genera il prossimo.
     */
    drop_one(): boolean;
    /**
     * Indica se la partita è terminata.
     */
    is_game_over(): boolean;
    /**
     * Indica se la partita è in pausa.
     */
    is_paused(): boolean;
    /**
     * Sposta il pezzo orizzontalmente se la nuova posizione è valida.
     */
    move_horizontal(offset: number): boolean;
    /**
     * Sposta il pezzo corrente di una colonna verso sinistra.
     */
    move_left(): void;
    /**
     * Sposta il pezzo corrente di una colonna verso destra.
     */
    move_right(): void;
    /**
     * Crea una partita vuota e inizialmente in pausa.
     */
    constructor();
    /**
     * Ruota il pezzo di 90 gradi se la rotazione non crea una collisione.
     */
    rotate(): boolean;
    /**
     * Restituisce il punteggio corrente.
     */
    score(): number;
    /**
     * Cambia tra pausa e partita attiva.
     */
    toggle_pause(): void;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly __wbg_game_free: (a: number, b: number) => void;
    readonly game_board_state: (a: number) => [number, number];
    readonly game_drop_one: (a: number) => number;
    readonly game_is_game_over: (a: number) => number;
    readonly game_is_paused: (a: number) => number;
    readonly game_move_horizontal: (a: number, b: number) => number;
    readonly game_move_left: (a: number) => void;
    readonly game_move_right: (a: number) => void;
    readonly game_new: () => number;
    readonly game_rotate: (a: number) => number;
    readonly game_score: (a: number) => number;
    readonly game_toggle_pause: (a: number) => void;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
