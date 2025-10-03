import { useState } from 'react';
import { Sparkles, Copy, Check } from 'lucide-react';

function UnicodeConverter() {
  const [textInput, setTextInput] = useState('');
  const [unicodeInput, setUnicodeInput] = useState('');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const textToUnicode = (text: string): string => {
    return text
      .split('')
      .map((char) => {
        const code = char.charCodeAt(0);
        return `U+${code.toString(16).toUpperCase().padStart(4, '0')}`;
      })
      .join(' ');
  };

  const textToUnicodeDecimal = (text: string): string => {
    return text
      .split('')
      .map((char) => char.charCodeAt(0))
      .join(' ');
  };

  const textToUnicodeHex = (text: string): string => {
    return text
      .split('')
      .map((char) => '0x' + char.charCodeAt(0).toString(16).toUpperCase())
      .join(' ');
  };

  const unicodeToText = (unicode: string): string => {
    try {
      return unicode
        .trim()
        .split(/[\s,]+/)
        .map((code) => {
          const cleaned = code.replace(/[Uu]\+|0[xX]|\\[uU]/g, '');
          const num = parseInt(cleaned, 16);
          return isNaN(num) ? '' : String.fromCodePoint(num);
        })
        .join('');
    } catch {
      return '';
    }
  };

  const getCharDetails = (char: string) => {
    const code = char.charCodeAt(0);
    return {
      char,
      decimal: code,
      hex: code.toString(16).toUpperCase(),
      unicode: `U+${code.toString(16).toUpperCase().padStart(4, '0')}`,
      binary: code.toString(2).padStart(16, '0'),
      name: getCharName(code),
    };
  };

  const getCharName = (code: number): string => {
    if (code >= 0x0041 && code <= 0x005a) return 'Lettera maiuscola latina';
    if (code >= 0x0061 && code <= 0x007a) return 'Lettera minuscola latina';
    if (code >= 0x0030 && code <= 0x0039) return 'Cifra';
    if (code >= 0x0020 && code <= 0x007e) return 'ASCII stampabile';
    if (code >= 0x0080 && code <= 0x00ff) return 'Latin-1 Supplement';
    if (code >= 0x0100 && code <= 0x017f) return 'Latin Extended-A';
    if (code >= 0x1f600 && code <= 0x1f64f) return 'Emoticon';
    if (code >= 0x1f300 && code <= 0x1f5ff) return 'Simboli vari';
    return 'Carattere Unicode';
  };

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Errore copia:', err);
    }
  };

  const unicodeResult = textInput ? textToUnicode(textInput) : '';
  const unicodeDecimalResult = textInput ? textToUnicodeDecimal(textInput) : '';
  const unicodeHexResult = textInput ? textToUnicodeHex(textInput) : '';
  const textResult = unicodeInput ? unicodeToText(unicodeInput) : '';

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">
              Testo da Convertire in Unicode
            </label>
            <textarea
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              placeholder="Inserisci testo o emoji... 👋 🌟 ❤️"
              rows={4}
              className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all resize-none"
            />
          </div>

          {textInput && (
            <div className="space-y-4">
              <div className="bg-slate-900/50 border border-slate-600 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold text-cyan-400">Unicode (U+)</h4>
                  <button
                    onClick={() => copyToClipboard(unicodeResult, 'unicode')}
                    className="p-2 hover:bg-slate-700 rounded-lg transition-all"
                    title="Copia"
                  >
                    {copiedField === 'unicode' ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-slate-400 hover:text-white" />
                    )}
                  </button>
                </div>
                <p className="text-white font-mono text-sm break-all">{unicodeResult}</p>
              </div>

              <div className="bg-slate-900/50 border border-slate-600 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold text-cyan-400">Unicode Decimale</h4>
                  <button
                    onClick={() => copyToClipboard(unicodeDecimalResult, 'decimal')}
                    className="p-2 hover:bg-slate-700 rounded-lg transition-all"
                    title="Copia"
                  >
                    {copiedField === 'decimal' ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-slate-400 hover:text-white" />
                    )}
                  </button>
                </div>
                <p className="text-white font-mono text-sm break-all">{unicodeDecimalResult}</p>
              </div>

              <div className="bg-slate-900/50 border border-slate-600 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold text-cyan-400">Unicode Esadecimale</h4>
                  <button
                    onClick={() => copyToClipboard(unicodeHexResult, 'hex')}
                    className="p-2 hover:bg-slate-700 rounded-lg transition-all"
                    title="Copia"
                  >
                    {copiedField === 'hex' ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-slate-400 hover:text-white" />
                    )}
                  </button>
                </div>
                <p className="text-white font-mono text-sm break-all">{unicodeHexResult}</p>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">
              Unicode da Convertire in Testo
            </label>
            <textarea
              value={unicodeInput}
              onChange={(e) => setUnicodeInput(e.target.value)}
              placeholder="Inserisci codici Unicode... (es. U+0048 U+0065 U+006C U+006C U+006F)"
              rows={4}
              className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all resize-none"
            />
            <p className="text-xs text-slate-400 mt-2">
              Formati supportati: U+0048, 0x48, \u0048, 48
            </p>
          </div>

          {unicodeInput && (
            <div className="bg-slate-900/50 border border-slate-600 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-semibold text-cyan-400">Testo Risultante</h4>
                <button
                  onClick={() => copyToClipboard(textResult, 'text')}
                  className="p-2 hover:bg-slate-700 rounded-lg transition-all"
                  title="Copia"
                >
                  {copiedField === 'text' ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-slate-400 hover:text-white" />
                  )}
                </button>
              </div>
              <p className="text-white text-2xl break-all">{textResult}</p>
            </div>
          )}
        </div>
      </div>

      {textInput && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-semibold text-white">Dettagli Caratteri</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {textInput.split('').map((char, index) => {
              const details = getCharDetails(char);
              return (
                <div
                  key={index}
                  className="bg-slate-900/50 border border-slate-600 rounded-lg p-4 hover:border-cyan-400/50 transition-all"
                >
                  <div className="text-center mb-3">
                    <div className="text-5xl mb-2">{details.char}</div>
                    <p className="text-xs text-slate-400">{details.name}</p>
                  </div>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Unicode:</span>
                      <span className="text-white font-mono">{details.unicode}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Decimale:</span>
                      <span className="text-white font-mono">{details.decimal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Esadecimale:</span>
                      <span className="text-white font-mono">0x{details.hex}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Binario:</span>
                      <span className="text-white font-mono text-[10px]">{details.binary}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="bg-slate-900/30 border border-slate-700 rounded-lg p-4">
        <h4 className="text-sm font-semibold text-slate-300 mb-2">Intervalli Unicode Comuni</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
          <div className="text-slate-400">
            <span className="font-mono">U+0000-U+007F:</span> ASCII Base
          </div>
          <div className="text-slate-400">
            <span className="font-mono">U+0080-U+00FF:</span> Latin-1 Supplement
          </div>
          <div className="text-slate-400">
            <span className="font-mono">U+1F600-U+1F64F:</span> Emoticon
          </div>
          <div className="text-slate-400">
            <span className="font-mono">U+1F300-U+1F5FF:</span> Simboli Vari
          </div>
        </div>
      </div>
    </div>
  );
}

export default UnicodeConverter;
