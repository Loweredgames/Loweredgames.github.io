/* @ts-self-types="./tetris_rust.d.ts" */

export class Game {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        GameFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_game_free(ptr, 0);
    }
    /**
     * Restituisce la board come testo: `0` vuoto, `1` blocco fissato, `2` pezzo attivo.
     * @returns {string}
     */
    board_state() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.game_board_state(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Fa scendere il pezzo di una riga; se tocca il fondo lo fissa e genera il prossimo.
     * @returns {boolean}
     */
    drop_one() {
        const ret = wasm.game_drop_one(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
     * Indica se la partita è terminata.
     * @returns {boolean}
     */
    is_game_over() {
        const ret = wasm.game_is_game_over(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
     * Indica se la partita è in pausa.
     * @returns {boolean}
     */
    is_paused() {
        const ret = wasm.game_is_paused(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
     * Sposta il pezzo orizzontalmente se la nuova posizione è valida.
     * @param {number} offset
     * @returns {boolean}
     */
    move_horizontal(offset) {
        const ret = wasm.game_move_horizontal(this.__wbg_ptr, offset);
        return ret !== 0;
    }
    /**
     * Sposta il pezzo corrente di una colonna verso sinistra.
     */
    move_left() {
        wasm.game_move_left(this.__wbg_ptr);
    }
    /**
     * Sposta il pezzo corrente di una colonna verso destra.
     */
    move_right() {
        wasm.game_move_right(this.__wbg_ptr);
    }
    /**
     * Crea una partita vuota e inizialmente in pausa.
     */
    constructor() {
        const ret = wasm.game_new();
        this.__wbg_ptr = ret;
        GameFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * Ruota il pezzo di 90 gradi se la rotazione non crea una collisione.
     * @returns {boolean}
     */
    rotate() {
        const ret = wasm.game_rotate(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
     * Restituisce il punteggio corrente.
     * @returns {number}
     */
    score() {
        const ret = wasm.game_score(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * Cambia tra pausa e partita attiva.
     */
    toggle_pause() {
        wasm.game_toggle_pause(this.__wbg_ptr);
    }
}
if (Symbol.dispose) Game.prototype[Symbol.dispose] = Game.prototype.free;
function __wbg_get_imports() {
    const import0 = {
        __proto__: null,
        __wbg___wbindgen_throw_5d9e815e6fdf150f: function(arg0, arg1) {
            throw new Error(getStringFromWasm0(arg0, arg1));
        },
        __wbindgen_init_externref_table: function() {
            const table = wasm.__wbindgen_externrefs;
            const offset = table.grow(4);
            table.set(0, undefined);
            table.set(offset + 0, undefined);
            table.set(offset + 1, null);
            table.set(offset + 2, true);
            table.set(offset + 3, false);
        },
    };
    return {
        __proto__: null,
        "./tetris_rust_bg.js": import0,
    };
}

const GameFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_game_free(ptr, 1));

function getStringFromWasm0(ptr, len) {
    return decodeText(ptr >>> 0, len);
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(ptr, len) {
    numBytesDecoded += len;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
        cachedTextDecoder.decode();
        numBytesDecoded = len;
    }
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

let wasmModule, wasmInstance, wasm;
function __wbg_finalize_init(instance, module) {
    wasmInstance = instance;
    wasm = instance.exports;
    wasmModule = module;
    cachedUint8ArrayMemory0 = null;
    wasm.__wbindgen_start();
    return wasm;
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (!module.ok) {
            throw new Error(`failed to fetch Wasm: ${module.status} ${module.statusText} fetching '${module.url}'`);
        }

        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);
            } catch (e) {
                const validResponse = expectedResponseType(module.type);

                if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else { throw e; }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);
    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };
        } else {
            return instance;
        }
    }

    function expectedResponseType(type) {
        switch (type) {
            case 'basic': case 'cors': case 'default': return true;
        }
        return false;
    }
}

function initSync(module) {
    if (wasm !== undefined) return wasm;


    if (module !== undefined) {
        if (Object.getPrototypeOf(module) === Object.prototype) {
            ({module} = module)
        } else {
            console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
        }
    }

    const imports = __wbg_get_imports();
    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }
    const instance = new WebAssembly.Instance(module, imports);
    return __wbg_finalize_init(instance, module);
}

async function __wbg_init(module_or_path) {
    if (wasm !== undefined) return wasm;


    if (module_or_path !== undefined) {
        if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
            ({module_or_path} = module_or_path)
        } else {
            console.warn('using deprecated parameters for the initialization function; pass a single object instead')
        }
    }

    if (module_or_path === undefined) {
        module_or_path = new URL('tetris_rust_bg.wasm', import.meta.url);
    }
    const imports = __wbg_get_imports();

    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
        module_or_path = fetch(module_or_path);
    }

    const { instance, module } = await __wbg_load(await module_or_path, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync, __wbg_init as default };
