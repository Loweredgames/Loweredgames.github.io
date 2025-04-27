## Highlights

# _functions and datapack_:

- aggiunta la versione 1.21.5 ([Spring to Life](https://www.minecraft.net/en-us/article/minecraft-java-edition-1-21-5)) [#402](https://github.com/Loweredgames/Voidblock/pull/402)
- separate le funzioni nelle versioni

## Added

# _functions and datapack_:

- aggiunta la versione 1.21.5 ([Spring to Life](https://www.minecraft.net/en-us/article/minecraft-java-edition-1-21-5)) [#402](https://github.com/Loweredgames/Voidblock/pull/402)
- - è stata mantenuta la compatibilità per la 1.21/1.21.2/1.21.3/1.21.4
- - aggiornate le isole e le strutture nella 1.21.5

## Changed

# _functions and datapack_:

- separate le funzioni nelle varie versioni del datapack:
- - le funzioni si attiverano in base alle versioni di Minecraft. questo non cambiera tanto la logica o le meccaniche della Voidblock, ma in futuri aggiornamenti ci potrebbero essere meccaniche esclusive in base alla versione o porting che potrebbero essere leggermente diversi,
- - in generale il datapack capisce in quale versione di Minecraft sei, come la 1.21,
- - - i testi popup dove mostrano le versioni come il pvn, da adesso mostrano la versione corrente e non piu tutte le versioni disponibili, quindi sara tutto piu facile da capire,
- - questa modifica non riflette il PID o alcune funzioni interne che rimangono nel ```data```.
- - - i popup sono stati anche aggiornati nella 1.21.5 a causa dei cambiamenti interni del testo. piccola modifica al link Modrinth che adesso a un proprio link fasullo e che verra modificato in futuro.
- - spostate alcune funzioni: 
- - - la wall_texts_sign che si trova su ```structures``` cartella,
- - - la mc(versione di Minecraft) che si trova su ```versions``` cartella,

## Fixed

# _functions and datapack_:

- risolto un problema nel titolo "Voidblock" che ogni tanto veniva usato il sottotitolo

## Removed

# _misc and other_:

- l'area_effect_cloud entity è stata rimossa completamente. datto che l'effetto nella 1.21.5 persiste ho deciso di rimuoverlo completamente, anche per migliorare le prestazioni.

> _**⚠️BUILDING: They are development version and can be unstable, use it at your risk⚠️**_

**Full Changelog**: -> (ricordarsi di aggiungere Github versione tag compare)

**Download** -> (ricordarsi di fare collegamento diretto in GitHub)