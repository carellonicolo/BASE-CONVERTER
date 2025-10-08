import { ControlCharacterDetail } from './controlCharacterDetails';

export const unicodeCharacterDetails: Record<string, ControlCharacterDetail> = {
  'NUL': {
    char: 'NUL',
    name: 'Null',
    purpose: 'Carattere nullo utilizzato per indicare la fine di una stringa o come riempimento.',
    technicalDetails: 'In C e molti altri linguaggi, NUL (\\0) viene utilizzato come terminatore di stringa. Ha valore decimale 0, esadecimale 0x00 e Unicode U+0000.',
    modernUsage: 'Ancora ampiamente utilizzato come terminatore di stringhe in C, C++, e nei protocolli di comunicazione. Spesso usato per padding in strutture dati.',
    examples: 'In C: char str[] = "Hello\\0"; - Il carattere NUL marca la fine della stringa.'
  },
  '\t': {
    char: '\t',
    name: 'Horizontal Tab (TAB)',
    purpose: 'Sposta il cursore alla prossima tabulazione orizzontale predefinita.',
    technicalDetails: 'Tipicamente avanza alla prossima posizione multipla di 8 caratteri. Unicode U+0009, valore decimale 9, esadecimale 0x09.',
    modernUsage: 'Ampiamente utilizzato nella programmazione per indentazione, nei file TSV (Tab-Separated Values), e nei terminali.',
    examples: 'In Python: "Nome\\tCognome\\tEtà" crea colonne separate da tab. Nei Makefile è obbligatorio per le regole.'
  },
  '\n': {
    char: '\n',
    name: 'Line Feed (LF)',
    purpose: 'Sposta il cursore alla riga successiva (avanzamento riga).',
    technicalDetails: 'In Unix/Linux è il terminatore di riga standard. Unicode U+000A, valore decimale 10, esadecimale 0x0A.',
    modernUsage: 'Standard per i fine riga su Unix, Linux, macOS moderni. Nei protocolli HTTP e molti formati di testo.',
    examples: 'File Unix: ogni riga termina con \\n (LF). In C: printf("Prima riga\\nSeconda riga");'
  },
  '\r': {
    char: '\r',
    name: 'Carriage Return (CR)',
    purpose: 'Riporta il cursore all\'inizio della riga corrente.',
    technicalDetails: 'Nelle telescriventi riportava il carrello all\'inizio. Unicode U+000D, valore decimale 13, esadecimale 0x0D.',
    modernUsage: 'Windows usa CR+LF (\\r\\n) per terminare le righe. Su Mac classico (pre-OSX) era il solo terminatore. Usato per progress bar.',
    examples: 'Windows: "testo\\r\\n". Progress bar: printf("Progresso: %d%%\\r", percent); per sovrascrivere.'
  },
  ' ': {
    char: ' ',
    name: 'Space (Spazio)',
    purpose: 'Spazio bianco standard utilizzato per separare parole e elementi.',
    technicalDetails: 'Il carattere spazio più comune in testo normale. Unicode U+0020, valore decimale 32, esadecimale 0x20.',
    modernUsage: 'Universalmente utilizzato in tutti i testi per separazione tra parole, nella programmazione, e nella formattazione.',
    examples: 'In HTML e CSS gli spazi multipli vengono collassati in uno solo. "Hello World" contiene uno spazio tra le parole.'
  },
  '\u00A0': {
    char: '\u00A0',
    name: 'Non-Breaking Space (Spazio Unificatore)',
    purpose: 'Spazio che impedisce l\'interruzione di riga tra due parole.',
    technicalDetails: 'Mantiene insieme elementi che non devono essere separati da un\'interruzione di riga. Unicode U+00A0, valore decimale 160.',
    modernUsage: 'Utilizzato in HTML (&nbsp;), documenti di testo e tipografia per mantenere insieme numeri e unità (es. "100 km"), nomi e titoli.',
    examples: 'HTML: "Prezzo:&nbsp;€&nbsp;50" assicura che prezzo e valuta rimangano sulla stessa riga. In LaTeX: "100~km".'
  },
  '©': {
    char: '©',
    name: 'Copyright Sign',
    purpose: 'Simbolo del copyright per indicare diritti d\'autore riservati.',
    technicalDetails: 'Simbolo internazionale per il copyright. Unicode U+00A9, valore decimale 169, esadecimale 0xA9.',
    modernUsage: 'Utilizzato in piè di pagina di siti web, documenti, software e opere creative per indicare la protezione del copyright.',
    examples: 'HTML: &copy; oppure &#169;. Esempio: "© 2024 Nome Azienda. Tutti i diritti riservati."'
  },
  '®': {
    char: '®',
    name: 'Registered Trademark',
    purpose: 'Indica un marchio registrato ufficialmente presso un ufficio brevetti.',
    technicalDetails: 'Simbolo legale per marchi registrati. Unicode U+00AE, valore decimale 174, esadecimale 0xAE.',
    modernUsage: 'Utilizzato dopo nomi di marchi registrati commercialmente, principalmente in contesti legali e di branding.',
    examples: 'HTML: &reg; oppure &#174;. Esempio: "Microsoft®", "Coca-Cola®", "iPhone®"'
  },
  '°': {
    char: '°',
    name: 'Degree Sign',
    purpose: 'Simbolo per gradi, utilizzato per temperature, angoli e coordinate geografiche.',
    technicalDetails: 'Simbolo per unità di misura angolare e termica. Unicode U+00B0, valore decimale 176, esadecimale 0xB0.',
    modernUsage: 'Ampiamente utilizzato per temperature (°C, °F), coordinate geografiche (45°N), angoli geometrici (90°).',
    examples: 'Temperatura: "25°C" o "77°F". Coordinate: "41°54\'N 12°27\'E". Angolo: "angolo retto di 90°"'
  },
  '±': {
    char: '±',
    name: 'Plus-Minus Sign',
    purpose: 'Indica un valore con margine di errore o tolleranza, o operazioni duali.',
    technicalDetails: 'Simbolo matematico per indicare variazione in entrambe le direzioni. Unicode U+00B1, valore decimale 177.',
    modernUsage: 'Utilizzato in matematica, fisica, ingegneria per indicare precisione di misurazioni e tolleranze.',
    examples: 'Misurazioni: "5.2 ± 0.1 metri". Matematica: "x = ±5" (soluzione quadratica). Tolleranza: "100Ω ± 5%"'
  },
  'µ': {
    char: 'µ',
    name: 'Micro Sign',
    purpose: 'Simbolo del prefisso micro (10⁻⁶) nelle unità di misura.',
    technicalDetails: 'Rappresenta un milionesimo dell\'unità base. Unicode U+00B5, valore decimale 181, esadecimale 0xB5.',
    modernUsage: 'Utilizzato in scienza e ingegneria per micrometri (µm), microsecondi (µs), microampere (µA), etc.',
    examples: 'Distanze: "50 µm" (micrometri). Tempo: "100 µs" (microsecondi). Elettronica: "10 µF" (microfarad)'
  },
  '¿': {
    char: '¿',
    name: 'Inverted Question Mark',
    purpose: 'Punto interrogativo invertito utilizzato in spagnolo all\'inizio delle domande.',
    technicalDetails: 'Carattere specifico della lingua spagnola. Unicode U+00BF, valore decimale 191, esadecimale 0xBF.',
    modernUsage: 'Obbligatorio in spagnolo formale all\'inizio di frasi interrogative, anche se spesso omesso online.',
    examples: 'Spagnolo: "¿Cómo estás?" (Come stai?), "¿Qué hora es?" (Che ore sono?), "¿Por qué?" (Perché?)'
  },
  '¡': {
    char: '¡',
    name: 'Inverted Exclamation Mark',
    purpose: 'Punto esclamativo invertito utilizzato in spagnolo all\'inizio delle esclamazioni.',
    technicalDetails: 'Carattere specifico della lingua spagnola. Unicode U+00A1, valore decimale 161, esadecimale 0xA1.',
    modernUsage: 'Obbligatorio in spagnolo formale all\'inizio di frasi esclamative, anche se spesso omesso online.',
    examples: 'Spagnolo: "¡Hola!" (Ciao!), "¡Qué bien!" (Che bello!), "¡Cuidado!" (Attenzione!)'
  },
  'À': {
    char: 'À',
    name: 'A with Grave',
    purpose: 'Lettera A maiuscola con accento grave.',
    technicalDetails: 'Utilizzata in diverse lingue romanze. Unicode U+00C0, valore decimale 192, esadecimale 0xC0.',
    modernUsage: 'Comune in francese, italiano e altre lingue. In italiano spesso usata per indicare preposizioni accentate.',
    examples: 'Italiano: "À" in nomi propri. Francese: "À Paris" (A Parigi). "À la carte"'
  },
  'É': {
    char: 'É',
    name: 'E with Acute',
    purpose: 'Lettera E maiuscola con accento acuto.',
    technicalDetails: 'Molto comune in francese e spagnolo. Unicode U+00C9, valore decimale 201, esadecimale 0xC9.',
    modernUsage: 'Frequente in francese per il suono "e chiuso". Usata anche in spagnolo, catalano, e altre lingue.',
    examples: 'Francese: "État" (Stato), "Éducation", "Été" (Estate). Spagnolo: in nomi propri e parole accentate.'
  },
  'à': {
    char: 'à',
    name: 'a with Grave',
    purpose: 'Lettera a minuscola con accento grave.',
    technicalDetails: 'Fondamentale in italiano e francese. Unicode U+00E0, valore decimale 224, esadecimale 0xE0.',
    modernUsage: 'In italiano indica la preposizione "a" e alcune forme verbali. In francese comune in molte parole.',
    examples: 'Italiano: "andrà", "città", "libertà". Francese: "à", "déjà", "voilà"'
  },
  'è': {
    char: 'è',
    name: 'e with Grave',
    purpose: 'Lettera e minuscola con accento grave.',
    technicalDetails: 'Essenziale in italiano e francese. Unicode U+00E8, valore decimale 232, esadecimale 0xE8.',
    modernUsage: 'In italiano per il verbo essere (terza persona) e "e aperta". In francese per distinguere suoni.',
    examples: 'Italiano: "è" (verbo essere), "caffè", "cioè". Francese: "très", "après", "problème"'
  },
  'é': {
    char: 'é',
    name: 'e with Acute',
    purpose: 'Lettera e minuscola con accento acuto.',
    technicalDetails: 'Molto frequente in francese, spagnolo e portoghese. Unicode U+00E9, valore decimale 233.',
    modernUsage: 'In francese indica "e chiusa". Comune anche in altre lingue romanze e prestiti linguistici.',
    examples: 'Francese: "été", "café", "téléphone". Spagnolo: "José", "bebé". Italiano: "perché", "né"'
  },
  'ì': {
    char: 'ì',
    name: 'i with Grave',
    purpose: 'Lettera i minuscola con accento grave.',
    technicalDetails: 'Caratteristica dell\'italiano. Unicode U+00EC, valore decimale 236, esadecimale 0xEC.',
    modernUsage: 'In italiano per parole tronche sulla i e alcune forme verbali.',
    examples: 'Italiano: "così", "lì", "finì", "partì", "sì" (affermazione in alcune grafie dialettali)'
  },
  'ò': {
    char: 'ò',
    name: 'o with Grave',
    purpose: 'Lettera o minuscola con accento grave.',
    technicalDetails: 'Usata principalmente in italiano. Unicode U+00F2, valore decimale 242, esadecimale 0xF2.',
    modernUsage: 'In italiano per "o aperta" in parole tronche e alcune forme verbali.',
    examples: 'Italiano: "però", "può", "portò", "andrò", "sarò"'
  },
  'ù': {
    char: 'ù',
    name: 'u with Grave',
    purpose: 'Lettera u minuscola con accento grave.',
    technicalDetails: 'Caratteristica dell\'italiano. Unicode U+00F9, valore decimale 249, esadecimale 0xF9.',
    modernUsage: 'In italiano per parole tronche sulla u e distinzione di significato.',
    examples: 'Italiano: "più", "giù", "virtù", "gioventù", "laggiù"'
  },
  'ç': {
    char: 'ç',
    name: 'c with Cedilla',
    purpose: 'Lettera c minuscola con cediglia.',
    technicalDetails: 'La cediglia indica pronuncia sibilante. Unicode U+00E7, valore decimale 231, esadecimale 0xE7.',
    modernUsage: 'Essenziale in francese, portoghese, catalano. Indica suono "s" invece di "k".',
    examples: 'Francese: "français", "garçon", "ça". Portoghese: "açúcar", "cabeça". Catalano: "força"'
  },
  'ñ': {
    char: 'ñ',
    name: 'n with Tilde',
    purpose: 'Lettera n minuscola con tilde.',
    technicalDetails: 'Lettera distintiva dello spagnolo. Unicode U+00F1, valore decimale 241, esadecimale 0xF1.',
    modernUsage: 'Lettera a sé stante nell\'alfabeto spagnolo, rappresenta il suono palatale nasale /ɲ/.',
    examples: 'Spagnolo: "España", "mañana", "niño", "año", "señor"'
  },
  'ß': {
    char: 'ß',
    name: 'Sharp S (Eszett)',
    purpose: 'Lettera tedesca che rappresenta il suono "ss".',
    technicalDetails: 'Carattere unico del tedesco. Unicode U+00DF, valore decimale 223, esadecimale 0xDF.',
    modernUsage: 'Usata in tedesco dopo vocali lunghe e dittonghi. Può essere sostituita con "ss" se non disponibile.',
    examples: 'Tedesco: "Straße" (strada), "groß" (grande), "weiß" (bianco), "Fußball" (calcio)'
  },
  '÷': {
    char: '÷',
    name: 'Division Sign',
    purpose: 'Simbolo matematico per la divisione.',
    technicalDetails: 'Operatore di divisione standard. Unicode U+00F7, valore decimale 247, esadecimale 0xF7.',
    modernUsage: 'Utilizzato principalmente in contesti didattici e matematica elementare. Nei linguaggi di programmazione si usa "/".',
    examples: 'Matematica: "12 ÷ 3 = 4", "100 ÷ 5 = 20". HTML: &divide; oppure &#247;'
  },
  '×': {
    char: '×',
    name: 'Multiplication Sign',
    purpose: 'Simbolo matematico per la moltiplicazione.',
    technicalDetails: 'Operatore di moltiplicazione standard. Unicode U+00D7, valore decimale 215, esadecimale 0xD7.',
    modernUsage: 'Usato in matematica, dimensioni (es. 1920×1080), e scale. Nei linguaggi di programmazione si usa "*".',
    examples: 'Matematica: "5 × 3 = 15". Dimensioni: "1920×1080 pixels". Scale: "1:50×10 cm". HTML: &times;'
  },
  '¼': {
    char: '¼',
    name: 'One Quarter',
    purpose: 'Frazione un quarto come simbolo singolo.',
    technicalDetails: 'Frazione vulgar predefinita. Unicode U+00BC, valore decimale 188, esadecimale 0xBC.',
    modernUsage: 'Utilizzata in cucina, ricette, misurazioni, e tipografia quando disponibile.',
    examples: 'Ricette: "¼ di tazza", "¼ di cucchiaino". Misure: "¼ di litro". Tempo: "¼ d\'ora"'
  },
  '½': {
    char: '½',
    name: 'One Half',
    purpose: 'Frazione un mezzo come simbolo singolo.',
    technicalDetails: 'Frazione vulgar predefinita. Unicode U+00BD, valore decimale 189, esadecimale 0xBD.',
    modernUsage: 'Molto comune in cucina, misurazioni quotidiane, e testi generali.',
    examples: 'Cucina: "½ tazza di farina". Misure: "½ litro", "½ kg". Matematica: "0.5 = ½"'
  },
  '¾': {
    char: '¾',
    name: 'Three Quarters',
    purpose: 'Frazione tre quarti come simbolo singolo.',
    technicalDetails: 'Frazione vulgar predefinita. Unicode U+00BE, valore decimale 190, esadecimale 0xBE.',
    modernUsage: 'Utilizzata in misurazioni, statistiche, e descrizioni proporzionali.',
    examples: 'Statistiche: "¾ della popolazione". Misure: "¾ di pollice". Tempo: "¾ d\'ora (45 minuti)"'
  },
  '¢': {
    char: '¢',
    name: 'Cent Sign',
    purpose: 'Simbolo per la valuta cent (centesimo di dollaro o euro).',
    technicalDetails: 'Rappresenta 1/100 di unità monetaria principale. Unicode U+00A2, valore decimale 162.',
    modernUsage: 'Utilizzato principalmente negli Stati Uniti per prezzi al centesimo. Meno comune nell\'era digitale.',
    examples: 'Prezzi: "99¢", "50¢ per articolo". Storico: ancora visibile in alcuni negozi americani.'
  },
  '£': {
    char: '£',
    name: 'Pound Sterling',
    purpose: 'Simbolo della sterlina britannica.',
    technicalDetails: 'Valuta ufficiale del Regno Unito. Unicode U+00A3, valore decimale 163, esadecimale 0xA3.',
    modernUsage: 'Utilizzato prima del valore numerico: £50, £1.99. Codice ISO: GBP.',
    examples: 'Prezzi: "£50", "£1,000", "£99.99". HTML: &pound; oppure &#163;'
  },
  '¥': {
    char: '¥',
    name: 'Yen/Yuan Sign',
    purpose: 'Simbolo per Yen giapponese e Yuan cinese.',
    technicalDetails: 'Condiviso tra Giappone (JPY) e Cina (CNY). Unicode U+00A5, valore decimale 165.',
    modernUsage: 'Utilizzato prima del valore numerico per valute asiatiche. Il contesto determina se è Yen o Yuan.',
    examples: 'Giappone: "¥1000" (circa $7). Cina: "¥50". HTML: &yen; oppure &#165;'
  },
  '§': {
    char: '§',
    name: 'Section Sign',
    purpose: 'Simbolo di sezione, utilizzato per riferimenti legali e documenti.',
    technicalDetails: 'Indica divisioni in documenti legali e accademici. Unicode U+00A7, valore decimale 167.',
    modernUsage: 'Comune in testi legali, codici, riferimenti normativi e documenti ufficiali europei.',
    examples: 'Legale: "§5 del codice civile", "articolo 3 §2". HTML: &sect; oppure &#167;'
  },
  '¶': {
    char: '¶',
    name: 'Pilcrow (Paragraph Sign)',
    purpose: 'Simbolo di paragrafo, indica l\'inizio di un nuovo paragrafo.',
    technicalDetails: 'Usato storicamente per marcare paragrafi. Unicode U+00B6, valore decimale 182, esadecimale 0xB6.',
    modernUsage: 'Ancora utilizzato negli editor di testo per mostrare caratteri invisibili (¶ = ritorno a capo). Riferimenti testuali.',
    examples: 'Word processing: mostra interruzioni di paragrafo. Riferimenti: "vedi ¶3". HTML: &para;'
  }
};
