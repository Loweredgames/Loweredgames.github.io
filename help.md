## Risoluzione dei problemi:

### Problemi Generali:

# Domanda: Come faccio a installare un server di Minecraft? Ho un problema con il mio server, come posso risolverlo?

> _**Risposta**: Se ci sono dei problemi con il tuo server o non riesci a capire alcune cose, come installare il server, puoi cercare sulla [wiki di Minecraft](https://minecraft.wiki/w/Server) o su [internet](https://www.google.com/search?q=minecraft+server+help&sxsrf=AE3TifNHPKXjYRIw2oEB5vv0Ab0_j66FXg%3A1753610481317). Se hai trovato qualcosa che danneggia la mappa, segnalalo sul [forum Discord](https://discord.gg/2WRSZsf4tC). **Purtroppo non posso aiutarti perché sono solo un creatore di mappe e non so molto di gestione dei server**. Mi occupo solo di comandi/funzioni/datapack e alcuni aspetti tecnici. **Questo non è un forum per i Server ma solo per le mie mappe**, Grazie._

# Domanda: Le mappe funziona su Realms?

> _**Risposta**: Non lo so, non ho mai fatto dei test. tecnicamente funzionano._

### Problemi per la mappa Voidblock:

# Domanda: Come faccio a installare la mappa su Aternos?

> _**Risposta**: In caso di problemi con **Aternos**, **puoi consultare il centro assistenza del [sito web](https://support.aternos.org/hc/en-us)**. Hanno anche creato dei video in cui spiegano come creare [un server in modo semplice e facile](https://www.youtube.com/@AternosORG/videos). **I problemi che potrebbero verificarsi non verranno risolti e questo non è un forum per Aternos**, quindi consiglio di utilizzare il centro di assistenza del sito. La mia mappa Voidblock dovrebbe tecnicamente supportare Aternos, a patto che i comandi siano attivi e il datapack e il resources pack sianno presenti nelle cartelle del mondo. Se ci sono errori, [segnalateli su Aternos](https://support.aternos.org/hc/en-us), Grazie._

# Domanda: Aiuto, le isole/strutture non vengono generate nelle dimensioni o nel mondo. Come si fa?

> _**Risposta**: **Hai controllato se i comandi sono attivi nel mondo?** Questo accade perché i datapack richiedono un livello di sicurezza superiore a 1. Se non viene generato nulla e il mondo non ha comandi attivi, devi scaricare nuovamente la mappa e sostituire la mappa, eliminando quella precedente oppure attivando i comandi nel **level.dat**. Prima di creare il mondo, **controlla di attivare i comandi o, se ti trovi in un server, devi farlo usando il programma usato dal server**. Se non funziona, significa che stai usando una mod o un launcher di terze parti. Se usi una mod che modifica la generazione del mondo, probabilmente non funzionerà, quindi rimuovila e dovrebbe funzionare. Se usi il launcher controlla che tutti i jar delle mod sono aggiornate all'ultima versione o controlla le impostazioni del launcher. In caso di problemi guarda [il centro di assistenza del sito del launcher](https://support.modrinth.com/), forse riesci ha trovare una soluzione._

# Domanda: I mob passivi si generano? e i mob ostili?

> _**Risposta**: **Tutti i mob si generano nella Voidblock**. Se non vedi nessun mob è probabile che le strutture generate creano questo problema, basta distruggere le strutture intorno e il problema dovrebbe risolversi. Minecraft poi ha una regola non mostrata, dove i mob spawnano in basso nel mondo. Potresti provare._

# Domanda: Aiuto, non vedo niente. Solo lo schermo nero! È normale? Come posso risolvere?

> _**Risposta**: Se vedi tutto lo schermo nero ma nella chat, premendo ```T``` di default, appare un messaggio in chat. significa che la mappa **funziona correttamente nel tuo mondo e non è un bug della mappa**._
>
> _Se apri la chat con ```il pulsante della chat, T di default```, e scorri in alto, puoi vedere che la mappa ti dice su quale isola vuoi spawnare. Basta premere uno dei pulsanti desiderati e la mappa si avvia. Ci sono anche dei ```?``` che ti danno informazioni sulle isole, ti basta passarci sopra il mouse e apparirà del testo. Dalla ```7.0.1``` appare anche in chat un messaggio che ti dice di premere la chat/comandi per vedere il messaggio popups._

<video width="854" height="480" controls>
  <source src="images/help/help_popups.mp4">
</video>

# Domanda: I miei progressi sono spariti e anche gli oggetti che avevo nell'inventario. Ho aggiornato la mappa nel launcher di Cursedforge e quando ho iniziato il mondo, le strutture, le cose che avevo costruito sono sparite, il mondo è vuoto. Perché? C'è una soluzione?

> _**Risposta**: Il launcher di Curseforge **sostituisce tutti i file che corrispondono alla cartella del tuo mondo quando esce una nuova versione**. Si tratta di un problema inaspettato che **non può essere risolto da me** ma solo dagli autori del launcher. Il tuo mondo è identico alla mappa predefinita che scarichi la prima volta trovata su Curseforge, ovvero "Voidblock - Skyblock"._
>
> _Se hai un backup puoi ripristinare tutto come prima, ma purtroppo se non hai un backups hai perso tutto e non puoi ripristinare nulla, devi rifarre tutto 😢, **ti consiglio di farli sempre i backups**. Per risolvere questo problema, aggiornando la mappa correttamente e senza problemi o risolvendo questo problema, segui questi passaggi:_
>
> 1. _Rinomina la cartella del tuo mondo sia in Minecraft che sul tuo computer. Nella cartella sul tuo computer rinominala, ad esempio "My World Skyblock ❤️", deve avere un nome diverso da quello della mappa predefinita ```Voidblock```, altrimenti potrebbero esserci dei conflitti._
> 2. _Rimuovi le cartelle: datapack, generated e il resources pack all'interno della tua cartella, quella che hai rinominato._
> 3. _Poi, **Si consiglia di scaricare l'ultima versione della mappa**, superiore alla 1.20.6, ma anche una versione precedente va bene. vai nella cartella scaricata e prendi tutti i file tranne ```level.dat``` e ```level.dat_old```, **Non sostituire mai il level.dat o perderai tutto**. E mettilo nella cartella che hai rinominato precedentemente._
> 4. _Per finire, La mappa aggiorna tutto automaticamente e non rischierai di perdere nulla. **Fai sempre dei backups per sicurezza** e attendi il completamento degli aggiornamenti. Se non funziona nulla, fai un comando ```/reload``` in chat, premendo ```T per impostazione predefinita```, in Minecraft._
>
> _Purtroppo, **questo bug è causato dal launcher di Curseforge che sostituisce i file se il nome della cartella è lo stesso**. Non c'è nulla che io possa fare al riguardo e si consiglia sempre di fare manualmente l'aggiornamento, Per ogni aggiornamento. segui gli stessi passaggi sopra se si presenta lo stesso problema. **Se sei abbituato ha usare le mod** puoi sempre usare [Voidblock Mod Version](https://www.curseforge.com/minecraft/mc-mods/voidblock-mod-version/files)._

# Domanda: Perché alcune gamerules non vengono modificate quando eseguo il comando?

> _**Risposta**: **Per motivi di sicurezza alcune gamerules rimangono impostate come predefinite**, in modo che il mondo non venga danneggiato. Per abilitare o disabilitare le gamerules basta andare nel datapack, e cercare il file ```voidblock_setup.mcfunction```, il percorso varia dalle versioni ma è sempre il file principale e si trova subito all'inizio. All'interno del file ```voidblock_setup.mcfunction```, vai alla sezione delle gamerules e imposta o elimina tutte le gamerules che si desidera._

__Se hai altre domande, pubblicale su Discord e aggiornero qui i problemi. Grazie 💯.__