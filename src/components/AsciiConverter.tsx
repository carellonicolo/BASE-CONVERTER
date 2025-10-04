import { useState } from 'react';
import { ArrowRightLeft, Copy, Check } from 'lucide-react';

function AsciiConverter() {
  const [textInput, setTextInput] = useState('');
  const [asciiInput, setAsciiInput] = useState('');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const textToAscii = (text: string): string => {
    return text
      .split('')
      .map((char) => char.charCodeAt(0))
      .join(' ');
  };

  const asciiToText = (ascii: string): string => {
    try {
      return ascii
        .trim()
        .split(/[\s,]+/)
        .map((code) => {
          const num = parseInt(code);
          return isNaN(num) ? '' : String.fromCharCode(num);
        })
        .join('');
    } catch {
      return '';
    }
  };

  const textToBinary = (text: string): string => {
    return text
      .split('')
      .map((char) => char.charCodeAt(0).toString(2).padStart(8, '0'))
      .join(' ');
  };

  const textToHex = (text: string): string => {
    return text
      .split('')
      .map((char) => char.charCodeAt(0).toString(16).toUpperCase().padStart(2, '0'))
      .join(' ');
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

  const asciiResult = textInput ? textToAscii(textInput) : '';
  const binaryResult = textInput ? textToBinary(textInput) : '';
  const hexResult = textInput ? textToHex(textInput) : '';
  const textResult = asciiInput ? asciiToText(asciiInput) : '';

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-200 mb-3 tracking-wide">
              Testo da Convertire
            </label>
            <textarea
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              placeholder="Inserisci il testo..."
              rows={4}
              className="liquid-input w-full text-white placeholder-slate-400 resize-none"
            />
          </div>

          {textInput && (
            <div className="space-y-4">
              <div className="glass-card specular-highlight p-5">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-bold text-liquid-300 uppercase tracking-wider">ASCII Decimale</h4>
                  <button
                    onClick={() => copyToClipboard(asciiResult, 'ascii')}
                    className="glass-morphism p-2.5 rounded-xl transition-all duration-300 hover:scale-110 hover:bg-white/10"
                    title="Copia"
                  >
                    {copiedField === 'ascii' ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-slate-300 hover:text-white" />
                    )}
                  </button>
                </div>
                <p className="text-white font-mono text-sm break-all">{asciiResult}</p>
              </div>

              <div className="glass-card specular-highlight p-5">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-bold text-liquid-300 uppercase tracking-wider">Binario</h4>
                  <button
                    onClick={() => copyToClipboard(binaryResult, 'binary')}
                    className="glass-morphism p-2.5 rounded-xl transition-all duration-300 hover:scale-110 hover:bg-white/10"
                    title="Copia"
                  >
                    {copiedField === 'binary' ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-slate-300 hover:text-white" />
                    )}
                  </button>
                </div>
                <p className="text-white font-mono text-sm break-all">{binaryResult}</p>
              </div>

              <div className="glass-card specular-highlight p-5">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-bold text-liquid-300 uppercase tracking-wider">Esadecimale</h4>
                  <button
                    onClick={() => copyToClipboard(hexResult, 'hex')}
                    className="glass-morphism p-2.5 rounded-xl transition-all duration-300 hover:scale-110 hover:bg-white/10"
                    title="Copia"
                  >
                    {copiedField === 'hex' ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-slate-300 hover:text-white" />
                    )}
                  </button>
                </div>
                <p className="text-white font-mono text-sm break-all">{hexResult}</p>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-200 mb-3 tracking-wide">
              Codici ASCII da Convertire
            </label>
            <textarea
              value={asciiInput}
              onChange={(e) => setAsciiInput(e.target.value)}
              placeholder="Inserisci i codici ASCII separati da spazi o virgole... (es. 72 101 108 108 111)"
              rows={4}
              className="liquid-input w-full text-white placeholder-slate-400 resize-none"
            />
          </div>

          {asciiInput && (
            <div className="glass-card specular-highlight p-5">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-bold text-liquid-300 uppercase tracking-wider">Testo Risultante</h4>
                <button
                  onClick={() => copyToClipboard(textResult, 'text')}
                  className="glass-morphism p-2.5 rounded-xl transition-all duration-300 hover:scale-110 hover:bg-white/10"
                  title="Copia"
                >
                  {copiedField === 'text' ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-slate-300 hover:text-white" />
                  )}
                </button>
              </div>
              <p className="text-white text-lg break-all">{textResult}</p>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-center py-4">
        <div className="relative">
          <div className="absolute inset-0 bg-liquid-400 blur-lg opacity-40"></div>
          <ArrowRightLeft className="w-6 h-6 text-liquid-300 relative z-10" />
        </div>
      </div>

      <div className="glass-morphism rounded-2xl p-5">
        <h4 className="text-sm font-bold text-slate-200 mb-3 tracking-wide">Tabella di Riferimento ASCII</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
          <div className="text-slate-400">
            <span className="font-mono">32-47:</span> Simboli
          </div>
          <div className="text-slate-400">
            <span className="font-mono">48-57:</span> Numeri (0-9)
          </div>
          <div className="text-slate-400">
            <span className="font-mono">65-90:</span> Maiuscole (A-Z)
          </div>
          <div className="text-slate-400">
            <span className="font-mono">97-122:</span> Minuscole (a-z)
          </div>
        </div>
      </div>
    </div>
  );
}

export default AsciiConverter;
