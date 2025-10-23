# BASE-CONVERTE

> Un convertitore multi-funzionale avanzato per sistemi numerici, codifiche di caratteri e rappresentazioni in virgola mobile/fissa

[![React](https://img.shields.io/badge/React-18.3.1-61dafb?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-646cff?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38bdf8?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## 📋 Indice

- [Descrizione](#-descrizione)
- [Caratteristiche Principali](#-caratteristiche-principali)
- [Demo e Funzionalità](#-demo-e-funzionalità)
- [Tecnologie Utilizzate](#-tecnologie-utilizzate)
- [Prerequisiti](#-prerequisiti)
- [Installazione](#-installazione)
- [Utilizzo](#-utilizzo)
- [Struttura del Progetto](#-struttura-del-progetto)
- [Funzionalità Dettagliate](#-funzionalità-dettagliate)
- [Build e Deployment](#-build-e-deployment)
- [Contribuire](#-contribuire)
- [Licenza](#-licenza)
- [Contatti](#-contatti)

## 🎯 Descrizione

**BASE-CONVERTE** è un'applicazione web moderna e professionale progettata per convertire tra diversi sistemi numerici, codifiche di caratteri e rappresentazioni binarie. Perfetta per sviluppatori, studenti e professionisti che lavorano con encoding, sistemi numerici e rappresentazioni binarie.

L'applicazione si distingue per la sua **interfaccia utente elegante** in stile glassmorphism, offrendo un'esperienza visiva piacevole e intuitiva con animazioni fluide e un design responsivo.

### Perché BASE-CONVERTE?

- 🎓 **Educativo**: Spiegazioni dettagliate di IEEE 754, notazione Q, tabelle ASCII/Unicode complete
- 💼 **Professionale**: Interfaccia pulita e design glassmorphism moderno
- ⚡ **Performante**: Conversioni in tempo reale mentre digiti
- 📱 **Responsivo**: Funziona perfettamente su desktop, tablet e mobile
- 🔄 **Multi-funzionale**: 4 moduli di conversione integrati in un'unica applicazione

## ✨ Caratteristiche Principali

### 🔢 Convertitore di Basi Numeriche
- Conversione tra basi 2-36
- Supporto prefissi (0b, 0x, 0o)
- Base personalizzata configurabile
- Output in binario, ottale, decimale, esadecimale
- Funzione copia rapida con feedback visivo

### 📝 Convertitore ASCII
- Conversione testo ↔ ASCII decimale
- Conversione testo → binario
- Conversione testo → esadecimale
- Tabella ASCII completa (0-127) con ricerca
- Filtro per categorie (controllo, speciali, numeri, lettere)
- Modal dettagliate per caratteri di controllo

### 🌐 Convertitore Unicode
- Conversione testo → Unicode (formato U+)
- Conversione testo → Unicode decimale/esadecimale
- Supporto Unicode ↔ testo (formati multipli: U+xxxx, 0x, \u, decimale)
- Dettagli carattere (code point, categoria, nome)
- Supporto emoji completo
- Tabella Unicode con filtraggio per range (ASCII, Latin-1, Emoticons, ecc.)

### 🎚️ Convertitore Virgola Mobile/Fissa
- **IEEE 754** Float32 e Float64:
  - Visualizzazione bit di segno
  - Bit dell'esponente (8 o 11 bit)
  - Bit della mantissa (23 o 52 bit)
  - Rappresentazione binaria ed esadecimale completa
- **Fixed-point** (notazione Q):
  - Bit frazionari configurabili (0-31)
  - Output binario ed esadecimale
  - Valore intero scalato
- Box informativi educativi su IEEE 754 e notazione Q

## 🎨 Demo e Funzionalità

### Interfaccia Glassmorphism
L'applicazione utilizza un design glassmorphism all'avanguardia con:
- Pannelli semi-trasparenti con effetto blur
- Gradiente liquido animato sullo sfondo
- Transizioni ed effetti hover fluidi
- Colori accent ciano/blu (#38bdf8, #0ea5e9)
- Bottoni con effetto "liquid" e riflessi speculari

### Esperienza Utente
- ✅ Conversione in tempo reale mentre digiti
- 📋 Pulsanti copia con feedback visivo (checkmark per 2 secondi)
- 🔍 Tabelle ricercabili con filtro istantaneo
- 📂 Sezioni espandibili/comprimibili
- 🎯 Validazione input con messaggi di errore chiari
- 🎭 Modal per informazioni dettagliate sui caratteri

## 🛠 Tecnologie Utilizzate

### Frontend
- **React 18.3.1** - Libreria UI moderna con hooks
- **TypeScript 5.5.3** - Tipizzazione statica per maggiore robustezza
- **Vite 5.4.2** - Build tool veloce e moderno
- **Tailwind CSS 3.4.1** - Framework CSS utility-first
- **Lucide React 0.344.0** - Icone SVG eleganti e leggere

### Styling & Design
- **PostCSS 8.4.35** - Processore CSS
- **Autoprefixer 10.4.18** - Prefissi CSS automatici
- Sistema di design glassmorphism personalizzato
- Animazioni custom (float, glow, shimmer, slideDown, fadeIn, scaleIn)

### Backend & Integrazione
- **Supabase 2.57.4** - Backend as a Service (per future integrazioni)

### Sviluppo
- **ESLint 9.9.1** - Linter per qualità del codice
- **TypeScript ESLint** - Plugin ESLint per TypeScript
- Configurazione strict TypeScript

## 📦 Prerequisiti

Prima di iniziare, assicurati di avere installato:

- **Node.js** (versione 18.x o superiore)
- **npm** (versione 9.x o superiore) o **yarn** (versione 1.22.x o superiore)

Per verificare le versioni installate:

```bash
node --version
npm --version
```

## 🚀 Installazione

### 1. Clona il repository

```bash
git clone https://github.com/carellonicolo/BASE-CONVERTE.git
cd BASE-CONVERTE
```

### 2. Installa le dipendenze

```bash
npm install
```

oppure con yarn:

```bash
yarn install
```

### 3. Avvia il server di sviluppo

```bash
npm run dev
```

oppure con yarn:

```bash
yarn dev
```

L'applicazione sarà disponibile su `http://localhost:5173/` (la porta potrebbe variare se 5173 è occupata).

## 💻 Utilizzo

### Comandi Disponibili

| Comando | Descrizione |
|---------|-------------|
| `npm run dev` | Avvia il server di sviluppo con hot-reload |
| `npm run build` | Crea la build di produzione ottimizzata |
| `npm run preview` | Preview della build di produzione in locale |
| `npm run lint` | Esegue il linter per controllare la qualità del codice |
| `npm run typecheck` | Verifica i tipi TypeScript senza emettere file |

### Navigazione nell'Applicazione

1. **Basi Numeriche**: Clicca sulla prima tab per accedere al convertitore di basi numeriche
2. **ASCII**: Seconda tab per conversioni ASCII e accesso alla tabella completa
3. **Unicode**: Terza tab per conversioni Unicode e dettagli caratteri
4. **Virgola Mobile/Fissa**: Quarta tab per conversioni IEEE 754 e fixed-point

### Esempio di Utilizzo

#### Convertire un numero decimale in altre basi:
1. Vai alla tab "Basi Numeriche"
2. Inserisci il numero decimale (es. `255`)
3. Visualizza automaticamente:
   - Binario: `11111111`
   - Ottale: `377`
   - Esadecimale: `FF`

#### Convertire testo in ASCII:
1. Vai alla tab "ASCII"
2. Inserisci il testo (es. `Hello`)
3. Visualizza i codici ASCII decimali, binari ed esadecimali

#### Analizzare un numero in virgola mobile:
1. Vai alla tab "Virgola Mobile/Fissa"
2. Inserisci un numero (es. `3.14`)
3. Visualizza la rappresentazione IEEE 754 Float32 con bit di segno, esponente e mantissa

## 📂 Struttura del Progetto

```
BASE-CONVERTE/
│
├── public/                          # Asset statici
│
├── src/
│   ├── App.tsx                     # Componente principale (112 righe)
│   ├── main.tsx                    # Entry point React
│   ├── index.css                   # Stili globali e glassmorphism (227 righe)
│   ├── vite-env.d.ts              # Type definitions Vite
│   │
│   ├── components/                 # Componenti React
│   │   ├── BaseConverter.tsx       # Convertitore basi numeriche (192 righe)
│   │   ├── AsciiConverter.tsx      # Convertitore ASCII (185 righe)
│   │   ├── AsciiTable.tsx          # Tabella ASCII completa (374 righe)
│   │   ├── UnicodeConverter.tsx    # Convertitore Unicode (274 righe)
│   │   ├── UnicodeTable.tsx        # Tabella Unicode
│   │   ├── FloatingPointConverter.tsx  # IEEE 754 & fixed-point (429 righe)
│   │   └── CharacterDetailModal.tsx    # Modal dettagli caratteri (4,829 righe)
│   │
│   └── data/                       # Dati statici
│       ├── unicodeCharacterDetails.ts
│       └── controlCharacterDetails.ts
│
├── Configuration files:
│   ├── package.json                # Dipendenze e scripts
│   ├── tsconfig.json              # Configurazione TypeScript
│   ├── tsconfig.app.json          # Config TypeScript per app
│   ├── tsconfig.node.json         # Config TypeScript per Node
│   ├── vite.config.ts             # Configurazione Vite
│   ├── tailwind.config.js         # Configurazione Tailwind CSS
│   ├── postcss.config.js          # Configurazione PostCSS
│   ├── eslint.config.js           # Regole ESLint
│   ├── index.html                 # Entry point HTML
│   └── .gitignore                 # Regole Git ignore
│
└── README.md                       # Questo file
```

### Linee di Codice
- **Totale**: ~2,088 righe di TypeScript/TSX
- Codice ben strutturato con separazione delle responsabilità
- Componenti riutilizzabili e modulari

## 🎯 Funzionalità Dettagliate

### 1. Convertitore di Basi Numeriche

**File**: `src/components/BaseConverter.tsx`

**Funzionalità**:
- Input da qualsiasi base (2-36) con riconoscimento automatico del prefisso
- Supporto prefissi standard: `0b` (binario), `0x` (esadecimale), `0o` (ottale)
- Selezione base personalizzata con range 2-36
- Output simultaneo in:
  - Binario (Base 2)
  - Ottale (Base 8)
  - Decimale (Base 10)
  - Esadecimale (Base 16)
  - Base personalizzata configurabile
- Gestione errori per input invalidi
- Copy-to-clipboard con animazione di conferma

**Casi d'uso**:
- Sviluppo embedded e low-level programming
- Debug di rappresentazioni binarie
- Apprendimento dei sistemi numerici
- Conversione rapida tra basi comuni

### 2. Convertitore ASCII

**File principale**: `src/components/AsciiConverter.tsx`

**Funzionalità**:
- Conversione **Testo → ASCII Decimale**
- Conversione **Testo → Binario**
- Conversione **Testo → Esadecimale**
- Conversione bidirezionale **ASCII Decimale ↔ Testo**
- Supporto caratteri speciali e di controllo

**Tabella ASCII** (`src/components/AsciiTable.tsx`):
- 128 caratteri ASCII (0-127) completi
- Ricerca in tempo reale per codice decimale, esadecimale o carattere
- Filtro per categorie:
  - 🔴 **Controllo** (0-31): caratteri non stampabili
  - 🟡 **Speciali** (32-47, 58-64, 91-96, 123-127): simboli e punteggiatura
  - 🟢 **Numeri** (48-57): cifre 0-9
  - 🔵 **Maiuscole** (65-90): lettere A-Z
  - 🟦 **Minuscole** (97-122): lettere a-z
- Design espandibile/comprimibile
- Modal dettagliate per caratteri di controllo (ESC, TAB, CR, LF, ecc.)

**Casi d'uso**:
- Programmazione e debugging
- Analisi di protocolli di comunicazione
- Codifica/decodifica di messaggi
- Apprendimento della tabella ASCII

### 3. Convertitore Unicode

**File principale**: `src/components/UnicodeConverter.tsx`

**Funzionalità**:
- Conversione **Testo → Unicode** (formato U+xxxx)
- Conversione **Testo → Unicode Decimale**
- Conversione **Testo → Unicode Esadecimale**
- Conversione bidirezionale **Unicode ↔ Testo**
- Supporto formati multipli in input:
  - `U+xxxx` (standard Unicode)
  - `0xhhhh` (prefisso esadecimale)
  - `\uxxxx` (escape sequence JavaScript)
  - Decimale diretto
- Separazione automatica con spazi, virgole o nuove linee

**Dettagli Carattere**:
Per ogni carattere inserito mostra:
- Code point Unicode (U+xxxx)
- Valore decimale
- Valore esadecimale
- Rappresentazione binaria
- Categoria/Nome del carattere

**Supporto Emoji**: ✅ Completo
- Riconoscimento emoji
- Visualizzazione corretta
- Code point multi-byte

**Tabella Unicode** (`src/components/UnicodeTable.tsx`):
- Range Unicode comuni (ASCII, Latin-1, Emoticons, Symbols)
- Interfaccia simile alla tabella ASCII
- Ricerca e filtro

**Casi d'uso**:
- Sviluppo web internazionale
- Gestione caratteri multi-lingue
- Debug encoding issues
- Inserimento emoji e simboli speciali

### 4. Convertitore Virgola Mobile/Fissa

**File**: `src/components/FloatingPointConverter.tsx`

#### A. IEEE 754 Floating Point

**Float32 (32-bit)**:
- 1 bit di segno
- 8 bit di esponente (bias 127)
- 23 bit di mantissa (frazione)
- Visualizzazione completa della rappresentazione binaria
- Output esadecimale (4 byte)

**Float64 (64-bit)**:
- 1 bit di segno
- 11 bit di esponente (bias 1023)
- 52 bit di mantissa (frazione)
- Visualizzazione completa della rappresentazione binaria
- Output esadecimale (8 byte)

**Box Informativo**:
Spiega lo standard IEEE 754 con esempi pratici e formula matematica:
```
valore = (-1)^segno × 2^(esponente-bias) × (1 + mantissa)
```

#### B. Fixed-Point (Notazione Q)

**Funzionalità**:
- Configurazione bit frazionari (0-31)
- Formato Qm.n (es. Q16.16)
- Output binario a 32 bit
- Output esadecimale
- Valore intero scalato

**Box Informativo**:
Spiega la notazione Q con esempi:
- Q8.8: 8 bit interi, 8 bit frazionari
- Q16.16: 16 bit interi, 16 bit frazionari
- Formula: `valore_reale = intero_scalato / 2^n`

#### C. Convertitore Binario → Decimale

Semplice conversione da stringa binaria a numero decimale.

**Casi d'uso**:
- Programmazione grafica e gaming (rappresentazioni float)
- Sviluppo embedded (fixed-point)
- Analisi di file binari
- Apprendimento degli standard IEEE 754
- Debug di precisione numerica

## 🏗 Build e Deployment

### Build di Produzione

```bash
npm run build
```

Questo comando:
1. Esegue il type-checking TypeScript
2. Ottimizza e minimizza il codice
3. Genera i file statici nella cartella `dist/`

### Preview della Build

```bash
npm run preview
```

Avvia un server locale per testare la build di produzione prima del deployment.

### Deployment

I file generati in `dist/` possono essere deployati su:

- **Netlify**: Drag & drop della cartella `dist/`
- **Vercel**: Connessione al repository GitHub e deploy automatico
- **GitHub Pages**: Utilizzando `gh-pages` branch
- **Nginx/Apache**: Copia i file in `/var/www/html/`
- **CDN**: Qualsiasi servizio di hosting statico

#### Esempio con Netlify

```bash
npm run build
# Drag & drop della cartella dist/ su netlify.com
```

#### Esempio con Vercel

```bash
npm run build
npx vercel --prod
```

## 🤝 Contribuire

I contributi sono benvenuti! Se desideri contribuire a BASE-CONVERTE:

### Come Contribuire

1. **Fork** il progetto
2. **Crea** un branch per la tua feature:
   ```bash
   git checkout -b feature/NuovaFunzionalita
   ```
3. **Commit** le tue modifiche:
   ```bash
   git commit -m 'Aggiunta NuovaFunzionalita'
   ```
4. **Push** al branch:
   ```bash
   git push origin feature/NuovaFunzionalita
   ```
5. **Apri** una Pull Request

### Linee Guida

- Segui lo stile del codice esistente
- Aggiungi commenti dove necessario
- Testa le modifiche prima di inviare la PR
- Aggiorna la documentazione se necessario
- Usa TypeScript strict mode

### Idee per Contributi

- 🌍 Aggiungere supporto multilingua (inglese, spagnolo, francese)
- 🎨 Temi personalizzabili (dark mode, light mode, custom colors)
- 📱 App mobile con React Native
- 🔧 Nuovi convertitori (Base64, MD5, SHA, ecc.)
- 📊 Export dei risultati (JSON, CSV, PDF)
- ⌨️ Scorciatoie da tastiera
- 🎓 Modalità tutorial interattivo

## 📄 Licenza

Questo progetto è stato creato per scopi educativi e professionali. Per informazioni sulla licenza, contattare l'autore.

## 👤 Contatti

**Prof. Carello Nicolò**

📧 Email: [info@nicolocarello.it](mailto:info@nicolocarello.it)

---

## 🙏 Ringraziamenti

Un ringraziamento speciale a:

- **React Team** per l'eccellente framework
- **Vite Team** per il build tool velocissimo
- **Tailwind CSS** per il framework utility-first
- **Lucide** per le icone eleganti
- La **community open source** per l'ispirazione continua

---

## 📊 Statistiche Progetto

- 📝 ~2,088 righe di codice TypeScript/TSX
- 🧩 7 componenti React principali
- 🎨 Sistema di design glassmorphism personalizzato
- 🎯 4 moduli di conversione completi
- ⚡ 100% TypeScript con strict mode
- 📱 100% responsive design

---

## 🔮 Roadmap Futura

- [ ] Modalità offline (PWA)
- [ ] Salvataggio cronologia conversioni
- [ ] Export/Import configurazioni
- [ ] Più temi colore
- [ ] API REST per conversioni programmatiche
- [ ] Estensione browser
- [ ] Versione CLI

---

<div align="center">

**Sviluppato con ❤️ da Prof. Carello Nicolò**

[⬆ Torna su](#base-converte)

</div>
