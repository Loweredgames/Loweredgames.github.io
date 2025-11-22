_Oggi è il compleanno della Voidblock (Skyblock CE in precedenza). Grazie per l'enorme traguardo che è stato raggiunto:_

![♥️ 1,8M Downloads](images/posts/Website/Traguardo.png)

_Mi scuso se non c'è stato nessun regalo ma sono stato molto occupato. in futuro vorrei festeggiarlo ogni anno il compleanno. 😃_

## Highlights

# _functions and datapack_:

- potenziati il PID e fatto un refactoring interno al sistema delle conversioni [#421](https://github.com/Loweredgames/Voidblock/issues/421) [#422](https://github.com/Loweredgames/Voidblock/pull/422)
- aggiunta la versione 1.21.9/1.21.10 ufficialmente
- - aggiornato il pack alla 1.21.9/1.21.10
- - aggiornato il panorama al nuovo "The Copper Age Drop"

# _langs_:

- aggiornate le traduzioni e piccoli fix

## Added

# _misc and other_:

- aggiunta la versione 1.21.9/1.21.10 ufficialmente
- - - aggiornato il pack alla 1.21.9/1.21.10
- - - - nel datapack alla 88.0
- - - - nel resources pack alla 69.0

# _functions and datapack_:

- aggiunta una ricetta nella 1.21.9/1.21.10 per potenziare il rame
- - questo è un piccolo bilanciamento che viene fatto per il set di rame dato che è diventato importante.
- aggiunta versione sperimentale per il prossimo Mounts of Mayhem Drop (1.21.11)
- - è ancora in corso...
- - i drops verrano aggiunti anche nelle versioni di manutezione.
- - > *Mi sto concentrando in delle versioni di manutenzione invece di versioni minori. cosi sara tutto piu veloce. Gli aggiornamenti grandi e minori riprenderano in futuro.*

## Changed

# _functions and datapack_:

- potenziati il PID e fatto un refactoring interno al sistema delle conversioni [#421](https://github.com/Loweredgames/Voidblock/issues/421) [#422](https://github.com/Loweredgames/Voidblock/pull/422)
- - adesso i PID saranno locali invece che globali. questo avrà dei vantaggi come l'aggiornamento specifico in quella versione e altri miglioramenti
- - i PID saranno sempre attivi e avranno sempre una conversione anche se comparira il messaggio in *"Non c'è niente da vedere qui"*
- - aggiornato il loro formato a ```PID_(numero del PID)_mc(numero versione di Minecraft)```. esempio: ```PID_1_mc121```
- - - aggiunto PID per i test interni, per testare nuove conversioni
- - - è stato aggiornato anche al PVN con lo stesso formato
- - - sono state rimosse tutte le conversioni precedenti per l'aggiornamento dei PID
- - aggiunte le musiche generiche del menu in tutti i PID per riflettere i vari aggiornamenti
- - - le musiche cambierano in base alla versione di Minecraft che ti trovi
- - resi tutti i SUBPID locali e aggiornati come i PID. saranno disabilitati se non c'è nessuna conversione
- - rimosso "mc setup" con "mc versions" sperimentale (era solo un test interno)
- - - rimossa la directory ```setup_pid``` e vari cambiamenti
- - aggiornati anche i PID legacy che adesso si chiamerano PID OLD e reso locale come i PID. aumentato il PID a 1 per il cambiamento al formato (lo 0 serve solo internamente per i test)
- - aggiornata la funzione ```voidblock_mc_setup.mcfunction``` in ```setup_global.mcfunction```, adesso questa funzione sarà per i setup globali e includera i PID
- - - piccolo refactoring alla funzione ```custom_structures.mcfunction``` che adesso si chiama ```generated_structures.mcfunction``` e aggiornata la scoreboard in ```Voidblock_structures```
- - - - questo cambiamento non avra alcun effetto perchè ```Voidblock_structures_id``` non è stato cambiato internamente.
- - aggiornata la funzione ```refactoring_scoreboard.mcfunction```
- - altre correzioni e migliormaneti vari
- cambiato il nome della funzione da ```old_pid``` a ```pid_old```
- aggiornata la funzione ```pid_remove```
- - rimuovera sempre i pid che sono molto vecchi e lasciera convertire quelli meno vecchi. come in ```pvn_remove```
- resa la Bossbar delle versioni di sviluppo e il messaggio Warning locali che globali:
- - la versione sarà in sviluppo solo quando overlay della versione è ancora sperimentale o in fase di sviluppo e non in tutti gli overlays nel pack.
- - - possono diventare di nuovo in sviluppo se quella versione specifica è in sviluppo.
- - - se la versione non è in sviluppo, è stabile come prima e può essere aggiornata tranquillamente (guardare sempre il tag nel sito web e fare sempre dei backups per sicurezza).
- - - - il test rimarrà fisso in sviluppo per sempre
- le gamerule da adesso saranno settate solo all'inizio
- - questo significa che si potranno modificare alla fine della conversione dei PID
- - - > *molti utenti l'hanno chiesto e finalmente mi sono deciso di farlo 😄.*

# _langs_:

- aggiornate le traduzioni e piccoli fix

# _textures and resources_:

- aggiornato il panorama al nuovo "The Copper Age Drop"

## Fixed

# _worlds and maps_:

- regressione nel caricamento e generazione del mondo nelle versioni dalla 1.21.9 [#431](https://github.com/Loweredgames/Voidblock/issues/431)
- - risolto nella 1.21.10, rimane per sicurezza.

**Full Changelog**: https://github.com/Loweredgames/Voidblock/compare/1.21.8_JE-1...1.21.9_JE-0

[**Download**](https://github.com/Loweredgames/Voidblock/releases/tag/1.21.9_JE-0)