import { useState, useEffect } from 'react';
import { ArrowRight, Copy, Check } from 'lucide-react';

interface ConversionResult {
  base: number;
  label: string;
  value: string;
  prefix?: string;
}

function BaseConverter() {
  const [inputValue, setInputValue] = useState('');
  const [inputBase, setInputBase] = useState(10);
  const [customBase, setCustomBase] = useState('');
  const [results, setResults] = useState<ConversionResult[]>([]);
  const [error, setError] = useState('');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const commonBases = [
    { base: 2, label: 'Binario', prefix: '0b' },
    { base: 8, label: 'Ottale', prefix: '0o' },
    { base: 10, label: 'Decimale', prefix: '' },
    { base: 16, label: 'Esadecimale', prefix: '0x' },
  ];

  useEffect(() => {
    if (!inputValue.trim()) {
      setResults([]);
      setError('');
      return;
    }

    try {
      const cleanValue = inputValue.trim().replace(/^0[bBxXoO]/, '');
      const decimalValue = parseInt(cleanValue, inputBase);

      if (isNaN(decimalValue)) {
        setError('Valore non valido per la base selezionata');
        setResults([]);
        return;
      }

      setError('');
      const conversions: ConversionResult[] = commonBases.map(({ base, label, prefix }) => ({
        base,
        label,
        value: decimalValue.toString(base).toUpperCase(),
        prefix,
      }));

      if (customBase && parseInt(customBase) >= 2 && parseInt(customBase) <= 36) {
        const base = parseInt(customBase);
        if (!commonBases.some(b => b.base === base)) {
          conversions.push({
            base,
            label: `Base ${base}`,
            value: decimalValue.toString(base).toUpperCase(),
            prefix: '',
          });
        }
      }

      setResults(conversions);
    } catch (err) {
      setError('Errore nella conversione');
      setResults([]);
    }
  }, [inputValue, inputBase, customBase]);

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Errore copia:', err);
    }
  };

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-slate-300 mb-2">
            Valore da Convertire
          </label>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Inserisci un numero..."
            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-300 mb-2">
            Base di Input
          </label>
          <select
            value={inputBase}
            onChange={(e) => setInputBase(parseInt(e.target.value))}
            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
          >
            <option value={2}>Binario (Base 2)</option>
            <option value={8}>Ottale (Base 8)</option>
            <option value={10}>Decimale (Base 10)</option>
            <option value={16}>Esadecimale (Base 16)</option>
            <option value={32}>Base 32</option>
            <option value={36}>Base 36</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-300 mb-2">
          Base Personalizzata (2-36) - Opzionale
        </label>
        <input
          type="number"
          min="2"
          max="36"
          value={customBase}
          onChange={(e) => setCustomBase(e.target.value)}
          placeholder="Es. 7, 12, 24..."
          className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
        />
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4">
          <p className="text-red-400 text-sm">{error}</p>
        </div>
      )}

      {results.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <ArrowRight className="w-5 h-5 text-cyan-400" />
            <h3 className="text-xl font-semibold text-white">Risultati</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {results.map((result, index) => (
              <div
                key={index}
                className="bg-slate-900/50 border border-slate-600 rounded-lg p-5 hover:border-cyan-400/50 transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-semibold text-cyan-400">{result.label}</h4>
                  <button
                    onClick={() => copyToClipboard(result.prefix + result.value, index)}
                    className="p-2 hover:bg-slate-700 rounded-lg transition-all"
                    title="Copia"
                  >
                    {copiedIndex === index ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-slate-400 group-hover:text-white" />
                    )}
                  </button>
                </div>
                <div className="flex items-baseline gap-1">
                  {result.prefix && (
                    <span className="text-slate-500 text-sm font-mono">{result.prefix}</span>
                  )}
                  <p className="text-2xl font-bold text-white font-mono break-all">
                    {result.value}
                  </p>
                </div>
                <p className="text-xs text-slate-400 mt-2">Base {result.base}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {!inputValue && (
        <div className="text-center py-12 text-slate-400">
          <p>Inserisci un numero per vedere le conversioni</p>
        </div>
      )}
    </div>
  );
}

export default BaseConverter;
