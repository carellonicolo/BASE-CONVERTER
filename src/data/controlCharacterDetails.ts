export interface ControlCharacterDetail {
  char: string;
  name: string;
  purpose: string;
  technicalDetails: string;
  modernUsage: string;
  examples?: string;
}

export const controlCharacterDetails: Record<string, ControlCharacterDetail> = {
  'NUL': {
    char: 'NUL',
    name: 'Null',
    purpose: 'Carattere nullo utilizzato per indicare la fine di una stringa o come riempimento.',
    technicalDetails: 'In C e molti altri linguaggi, NUL (\\0) viene utilizzato come terminatore di stringa. Ha valore decimale 0 ed esadecimale 0x00.',
    modernUsage: 'Ancora ampiamente utilizzato come terminatore di stringhe in C, C++, e nei protocolli di comunicazione. Spesso usato per padding in strutture dati.',
    examples: 'In C: char str[] = "Hello\\0"; - Il carattere NUL marca la fine della stringa.'
  },
  'SOH': {
    char: 'SOH',
    name: 'Start of Heading',
    purpose: 'Indica l\'inizio di un\'intestazione in un messaggio o frame di dati.',
    technicalDetails: 'Utilizzato storicamente nei protocolli di comunicazione per segnalare l\'inizio di un blocco di intestazione. Valore: DEC 1, HEX 0x01.',
    modernUsage: 'Raro nell\'uso moderno. Può essere trovato in alcuni protocolli legacy o sistemi di comunicazione specializzati.',
    examples: 'Nei vecchi sistemi telegrafici e nei primi protocolli di rete per delimitare header di messaggi.'
  },
  'STX': {
    char: 'STX',
    name: 'Start of Text',
    purpose: 'Segna l\'inizio del testo effettivo di un messaggio, dopo l\'intestazione.',
    technicalDetails: 'Separatore logico tra intestazione e corpo del messaggio. Valore: DEC 2, HEX 0x02.',
    modernUsage: 'Utilizzato in alcuni protocolli industriali (SCADA, PLC) e sistemi point-of-sale. Presente in protocolli come HL7 in ambito sanitario.',
    examples: 'Protocollo HL7: MSH|^~\\&|...<STX>contenuto del messaggio<ETX>'
  },
  'ETX': {
    char: 'ETX',
    name: 'End of Text',
    purpose: 'Indica la fine del testo in un messaggio, prima di eventuali informazioni di controllo.',
    technicalDetails: 'Complementare a STX, segna la conclusione del contenuto del messaggio. Valore: DEC 3, HEX 0x03.',
    modernUsage: 'Ancora utilizzato in protocolli industriali, sistemi POS e applicazioni embedded che richiedono delimitazione dei dati.',
    examples: 'Nei terminali POS per indicare la fine di una transazione prima del checksum.'
  },
  'EOT': {
    char: 'EOT',
    name: 'End of Transmission',
    purpose: 'Segnala la fine completa di una trasmissione di dati.',
    technicalDetails: 'Indica che il trasmettitore ha completato l\'invio di tutti i dati. Valore: DEC 4, HEX 0x04.',
    modernUsage: 'Utilizzato in Unix/Linux per segnalare EOF (End of File) da tastiera (Ctrl+D). Presente in alcuni protocolli seriali.',
    examples: 'In Unix: premere Ctrl+D nel terminale per inviare EOT e chiudere l\'input standard.'
  },
  'ENQ': {
    char: 'ENQ',
    name: 'Enquiry',
    purpose: 'Richiesta di identificazione o stato da un dispositivo remoto.',
    technicalDetails: 'Usato per richiedere una risposta da un ricevitore, tipicamente per verificare la presenza o lo stato. Valore: DEC 5, HEX 0x05.',
    modernUsage: 'Raro nell\'uso moderno, ma può essere trovato in vecchi protocolli di handshaking e comunicazioni seriali.',
    examples: 'Nei protocolli di comunicazione mainframe per verificare se un terminale è pronto a ricevere dati.'
  },
  'ACK': {
    char: 'ACK',
    name: 'Acknowledge',
    purpose: 'Conferma positiva che i dati sono stati ricevuti correttamente.',
    technicalDetails: 'Segnale di riconoscimento utilizzato nei protocolli di comunicazione per confermare la ricezione. Valore: DEC 6, HEX 0x06.',
    modernUsage: 'Ancora usato in TCP/IP, protocolli seriali (RS-232), e molti protocolli industriali per confermare la ricezione dei pacchetti.',
    examples: 'TCP: ogni pacchetto ricevuto viene confermato con un ACK per garantire la consegna affidabile.'
  },
  'BEL': {
    char: 'BEL',
    name: 'Bell',
    purpose: 'Genera un segnale acustico o visivo di attenzione.',
    technicalDetails: 'Originariamente faceva suonare una campanella fisica nei telescriventi. Valore: DEC 7, HEX 0x07.',
    modernUsage: 'Ancora utilizzato nei terminali moderni per produrre un beep o flash dello schermo. Accessibile con \\a in molti linguaggi.',
    examples: 'In Bash: echo -e "\\a" produce un beep. Nei terminali per segnalare errori o completamenti.'
  },
  'BS': {
    char: 'BS',
    name: 'Backspace',
    purpose: 'Sposta il cursore indietro di una posizione, permettendo la sovrascrittura.',
    technicalDetails: 'Non cancella necessariamente il carattere, ma muove solo il cursore. Valore: DEC 8, HEX 0x08.',
    modernUsage: 'Utilizzato nei terminali e negli editor di testo. Il tasto Backspace sulla tastiera può inviare BS o DEL a seconda della configurazione.',
    examples: 'Nei terminali VT100 e compatibili per implementare la funzione di cancellazione verso sinistra.'
  },
  'TAB': {
    char: 'TAB',
    name: 'Horizontal Tab',
    purpose: 'Sposta il cursore alla prossima tabulazione orizzontale predefinita.',
    technicalDetails: 'Tipicamente avanza alla prossima posizione multipla di 8 caratteri. Valore: DEC 9, HEX 0x09.',
    modernUsage: 'Ampiamente utilizzato nella programmazione per indentazione, nei file TSV (Tab-Separated Values), e nei terminali.',
    examples: 'In Python: "Nome\\tCognome\\tEtà" crea colonne separate da tab. Nei Makefile è obbligatorio per le regole.'
  },
  'LF': {
    char: 'LF',
    name: 'Line Feed',
    purpose: 'Sposta il cursore alla riga successiva (avanzamento riga).',
    technicalDetails: 'In Unix/Linux è il terminatore di riga standard. Valore: DEC 10, HEX 0x0A.',
    modernUsage: 'Standard per i fine riga su Unix, Linux, macOS moderni. Nei protocolli HTTP e molti formati di testo.',
    examples: 'File Unix: ogni riga termina con \\n (LF). In C: printf("Prima riga\\nSeconda riga");'
  },
  'VT': {
    char: 'VT',
    name: 'Vertical Tab',
    purpose: 'Tabulazione verticale, sposta il cursore alla prossima linea di tabulazione verticale.',
    technicalDetails: 'Analogo a TAB ma in direzione verticale. Valore: DEC 11, HEX 0x0B.',
    modernUsage: 'Raramente utilizzato. Alcuni linguaggi lo trattano come whitespace. Può causare comportamenti inaspettati.',
    examples: 'In alcuni editor di testo e stampanti legacy per creare spaziature verticali fisse.'
  },
  'FF': {
    char: 'FF',
    name: 'Form Feed',
    purpose: 'Avanza alla pagina successiva (espulsione pagina nelle stampanti).',
    technicalDetails: 'Usato per controllare stampanti e terminali per iniziare una nuova pagina. Valore: DEC 12, HEX 0x0C.',
    modernUsage: 'Ancora utilizzato in alcuni contesti di stampa e nei documenti PostScript/PDF. Può essere usato per separare sezioni logiche.',
    examples: 'In stampa: \\f forza una nuova pagina. Nei file di log per separare sezioni di output.'
  },
  'CR': {
    char: 'CR',
    name: 'Carriage Return',
    purpose: 'Riporta il cursore all\'inizio della riga corrente.',
    technicalDetails: 'Nelle telescriventi riportava il carrello all\'inizio. Valore: DEC 13, HEX 0x0D.',
    modernUsage: 'Windows usa CR+LF (\\r\\n) per terminare le righe. Su Mac classico (pre-OSX) era il solo terminatore. Usato per progress bar.',
    examples: 'Windows: "testo\\r\\n". Progress bar: printf("Progresso: %d%%\\r", percent); per sovrascrivere.'
  },
  'SO': {
    char: 'SO',
    name: 'Shift Out',
    purpose: 'Attiva un set di caratteri alternativo.',
    technicalDetails: 'Cambia il set di caratteri corrente a uno alternativo (es. grafico). Valore: DEC 14, HEX 0x0E.',
    modernUsage: 'Obsoleto. Era usato per switch tra set di caratteri su vecchi terminali e stampanti.',
    examples: 'Nei vecchi terminali per passare da caratteri alfanumerici a caratteri grafici per disegnare box.'
  },
  'SI': {
    char: 'SI',
    name: 'Shift In',
    purpose: 'Ritorna al set di caratteri standard.',
    technicalDetails: 'Complementare a SO, ripristina il set di caratteri normale. Valore: DEC 15, HEX 0x0F.',
    modernUsage: 'Obsoleto, usato insieme a SO nei vecchi sistemi.',
    examples: 'Nei terminali: <SO>caratteri grafici<SI>testo normale per alternare visualizzazioni.'
  },
  'DLE': {
    char: 'DLE',
    name: 'Data Link Escape',
    purpose: 'Modifica il significato dei caratteri seguenti per scopi di controllo del link dati.',
    technicalDetails: 'Escape character per protocolli di comunicazione. Valore: DEC 16, HEX 0x10.',
    modernUsage: 'Utilizzato in alcuni protocolli seriali e di comunicazione per byte stuffing e escape sequences.',
    examples: 'In protocolli binari per "escapare" caratteri di controllo all\'interno dei dati: <DLE><STX> per inviare STX come dato.'
  },
  'DC1': {
    char: 'DC1',
    name: 'Device Control 1 (XON)',
    purpose: 'Controllo dispositivo 1, spesso usato come XON nel controllo di flusso.',
    technicalDetails: 'Riprende la trasmissione dopo un XOFF. Valore: DEC 17, HEX 0x11.',
    modernUsage: 'Usato nel controllo di flusso software (XON/XOFF) nelle comunicazioni seriali. Ctrl+Q in molti terminali.',
    examples: 'Seriale RS-232: il ricevitore invia XON per dire "pronto a ricevere altri dati" dopo aver inviato XOFF.'
  },
  'DC2': {
    char: 'DC2',
    name: 'Device Control 2',
    purpose: 'Controllo dispositivo 2, funzione dipendente dal dispositivo.',
    technicalDetails: 'Uso specifico del dispositivo, non standardizzato. Valore: DEC 18, HEX 0x12.',
    modernUsage: 'Raramente utilizzato, significato dipendente dall\'implementazione specifica.',
    examples: 'In alcune stampanti storiche per attivare funzioni speciali come stampa condensata.'
  },
  'DC3': {
    char: 'DC3',
    name: 'Device Control 3 (XOFF)',
    purpose: 'Controllo dispositivo 3, spesso usato come XOFF nel controllo di flusso.',
    technicalDetails: 'Pausa la trasmissione (flow control). Valore: DEC 19, HEX 0x13.',
    modernUsage: 'Controllo di flusso software nelle comunicazioni seriali. Ctrl+S in molti terminali (pausa output).',
    examples: 'Il ricevitore invia XOFF quando il buffer è quasi pieno: "fermati, non inviare più dati finché non ricevi XON".'
  },
  'DC4': {
    char: 'DC4',
    name: 'Device Control 4',
    purpose: 'Controllo dispositivo 4, funzione dipendente dal dispositivo.',
    technicalDetails: 'Uso specifico del dispositivo, non standardizzato. Valore: DEC 20, HEX 0x14.',
    modernUsage: 'Raramente utilizzato nel computing moderno.',
    examples: 'In alcuni dispositivi legacy per disattivare funzioni attivate da DC2.'
  },
  'NAK': {
    char: 'NAK',
    name: 'Negative Acknowledge',
    purpose: 'Conferma negativa, indica che i dati ricevuti contengono errori.',
    technicalDetails: 'Opposto di ACK, segnala ricezione con errori. Valore: DEC 21, HEX 0x15.',
    modernUsage: 'Utilizzato in protocolli di comunicazione che richiedono ritrasmissione in caso di errore (XMODEM, YMODEM, protocolli industriali).',
    examples: 'XMODEM: se il checksum non corrisponde, il ricevitore invia NAK per richiedere ritrasmissione del blocco.'
  },
  'SYN': {
    char: 'SYN',
    name: 'Synchronous Idle',
    purpose: 'Sincronizzazione in comunicazioni sincrone, mantiene la sincronizzazione durante idle.',
    technicalDetails: 'Usato nelle trasmissioni sincrone per mantenere il clock sincronizzato. Valore: DEC 22, HEX 0x16.',
    modernUsage: 'Obsoleto nelle applicazioni moderne. Era usato in protocolli sincronizzati come BSC (Binary Synchronous Communications).',
    examples: 'Nei protocolli mainframe IBM per riempire gaps e mantenere la sincronizzazione tra device.'
  },
  'ETB': {
    char: 'ETB',
    name: 'End of Transmission Block',
    purpose: 'Indica la fine di un blocco di trasmissione, ma non della trasmissione completa.',
    technicalDetails: 'Delimita blocchi in una trasmissione multi-blocco. Valore: DEC 23, HEX 0x17.',
    modernUsage: 'Utilizzato in alcuni protocolli che trasmettono dati in blocchi con checksum individuali.',
    examples: 'In protocolli BSC per terminare un blocco prima del checksum, seguito da altri blocchi.'
  },
  'CAN': {
    char: 'CAN',
    name: 'Cancel',
    purpose: 'Annulla i dati precedenti, indica che dovrebbero essere ignorati.',
    technicalDetails: 'Scarta i dati trasmessi in precedenza, indica errore o reset. Valore: DEC 24, HEX 0x18.',
    modernUsage: 'Usato in protocolli di trasferimento file (XMODEM, ZMODEM) per annullare trasferimenti. Ctrl+X in alcuni contesti.',
    examples: 'XMODEM: inviare due byte CAN consecutivi annulla il trasferimento del file in corso.'
  },
  'EM': {
    char: 'EM',
    name: 'End of Medium',
    purpose: 'Indica la fine fisica del supporto utilizzabile (es. fine nastro, carta).',
    technicalDetails: 'Segna l\'esaurimento del mezzo fisico di memorizzazione. Valore: DEC 25, HEX 0x19.',
    modernUsage: 'Obsoleto, era rilevante per nastri magnetici, schede perforate e supporti fisici.',
    examples: 'Nei sistemi a nastro per segnalare che il nastro è finito o è stata raggiunta la fine utilizzabile.'
  },
  'SUB': {
    char: 'SUB',
    name: 'Substitute',
    purpose: 'Sostituisce un carattere che è stato ricevuto in modo errato o è invalido.',
    technicalDetails: 'Marcatore per caratteri corrotti o non riconosciuti. Valore: DEC 26, HEX 0x1A.',
    modernUsage: 'In DOS/Windows, Ctrl+Z segna la fine del file in modalità testo. Usato come EOF marker in alcuni contesti.',
    examples: 'DOS: tipo file.txt - Ctrl+Z termina l\'input. In file di testo DOS come marcatore EOF.'
  },
  'ESC': {
    char: 'ESC',
    name: 'Escape',
    purpose: 'Inizio di una sequenza di escape, modifica l\'interpretazione dei caratteri successivi.',
    technicalDetails: 'Prefisso per sequenze di controllo (ANSI, VT100). Valore: DEC 27, HEX 0x1B.',
    modernUsage: 'Ampiamente utilizzato nelle sequenze di escape ANSI per colori, posizionamento cursore, formattazione nei terminali.',
    examples: 'ANSI: ESC[31m rende il testo rosso. ESC[2J pulisce lo schermo. Nei terminali moderni per controlli avanzati.'
  },
  'FS': {
    char: 'FS',
    name: 'File Separator',
    purpose: 'Separa file logici in un stream di dati.',
    technicalDetails: 'Delimitatore gerarchico di livello più alto tra quattro separatori (FS, GS, RS, US). Valore: DEC 28, HEX 0x1C.',
    modernUsage: 'Raramente usato, ma può essere trovato in formati di dati strutturati legacy o database flat-file.',
    examples: 'In archivi multi-file su nastro per delimitare dove un file termina e il successivo inizia.'
  },
  'GS': {
    char: 'GS',
    name: 'Group Separator',
    purpose: 'Separa gruppi logici all\'interno di un file.',
    technicalDetails: 'Secondo livello di separazione gerarchica. Valore: DEC 29, HEX 0x1D.',
    modernUsage: 'Occasionalmente usato in formati dati complessi e database. Più comune in ambiti mainframe legacy.',
    examples: 'In database flat per separare record correlati in gruppi logici all\'interno di un file.'
  },
  'RS': {
    char: 'RS',
    name: 'Record Separator',
    purpose: 'Separa record individuali all\'interno di un gruppo.',
    technicalDetails: 'Terzo livello di separazione gerarchica. Valore: DEC 30, HEX 0x1E.',
    modernUsage: 'Usato in alcuni formati di dati strutturati e protocolli per delimitare record.',
    examples: 'In file CSV alternativi o formati database per separare righe/record invece di usare newline.'
  },
  'US': {
    char: 'US',
    name: 'Unit Separator',
    purpose: 'Separa unità (campi) all\'interno di un record.',
    technicalDetails: 'Quarto e più basso livello di separazione gerarchica. Valore: DEC 31, HEX 0x1F.',
    modernUsage: 'Utilizzato in alcuni protocolli e formati per separare campi, simile al ruolo della virgola in CSV.',
    examples: 'In formati dati proprietari: "nome<US>cognome<US>email<RS>" per separare campi all\'interno di record.'
  },
  'DEL': {
    char: 'DEL',
    name: 'Delete',
    purpose: 'Originariamente usato per cancellare caratteri su nastro perforato.',
    technicalDetails: 'Codice 127 (tutti bit a 1), permetteva di "perforare" tutti i buchi per cancellare. Valore: DEC 127, HEX 0x7F.',
    modernUsage: 'In alcuni terminali è il carattere inviato dal tasto Backspace. Spesso ignorato o trattato come carattere di controllo.',
    examples: 'Nei nastri perforati: sovrascrivere con DEL (tutti bit 1) cancellava qualsiasi carattere. Alcune configurazioni terminale: Backspace invia DEL.'
  }
};
