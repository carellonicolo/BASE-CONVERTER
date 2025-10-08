import { useEffect } from 'react';
import { X, Info } from 'lucide-react';
import { ControlCharacterDetail } from '../data/controlCharacterDetails';

interface CharacterDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  character: {
    dec: number;
    hex: string;
    bin: string;
    char: string;
  } | null;
  details: ControlCharacterDetail | null;
}

function CharacterDetailModal({ isOpen, onClose, character, details }: CharacterDetailModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !character || !details) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/90"></div>

      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-hidden bg-slate-800/95 border border-white/20 rounded-2xl shadow-2xl animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 bg-slate-900/95 backdrop-blur-xl border-b border-white/20 px-6 py-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-liquid-500/20 border border-liquid-400/30 flex items-center justify-center">
                <span className="text-2xl font-bold text-liquid-300 font-mono">
                  {character.char === ' ' ? '␣' : character.char}
                </span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">{details.name}</h2>
                <div className="flex gap-3 mt-1 text-xs font-mono text-slate-400">
                  <span>DEC: {character.dec}</span>
                  <span>HEX: 0x{character.hex}</span>
                  <span>BIN: {character.bin}</span>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all duration-200 hover:scale-110"
              aria-label="Chiudi"
            >
              <X className="w-4 h-4 text-slate-300" />
            </button>
          </div>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-120px)] px-6 py-6 space-y-6 custom-scrollbar bg-slate-800">
          <div className="space-y-4">
            <div className="bg-slate-700/60 rounded-xl p-4 border border-liquid-500/30">
              <div className="flex items-center gap-2 mb-2">
                <Info className="w-4 h-4 text-liquid-300" />
                <h3 className="text-sm font-bold text-liquid-300 uppercase tracking-wider">Scopo</h3>
              </div>
              <p className="text-slate-100 leading-relaxed">{details.purpose}</p>
            </div>

            <div className="bg-slate-700/60 rounded-xl p-4 border border-blue-500/30">
              <h3 className="text-sm font-bold text-blue-300 uppercase tracking-wider mb-2">Dettagli Tecnici</h3>
              <p className="text-slate-100 leading-relaxed">{details.technicalDetails}</p>
            </div>

            <div className="bg-slate-700/60 rounded-xl p-4 border border-green-500/30">
              <h3 className="text-sm font-bold text-green-300 uppercase tracking-wider mb-2">Uso Moderno</h3>
              <p className="text-slate-100 leading-relaxed">{details.modernUsage}</p>
            </div>

            {details.examples && (
              <div className="bg-slate-700/60 rounded-xl p-4 border border-yellow-500/30">
                <h3 className="text-sm font-bold text-yellow-300 uppercase tracking-wider mb-2">Esempi</h3>
                <p className="text-slate-100 leading-relaxed font-mono text-sm bg-slate-900/60 p-3 rounded-lg border border-white/10">
                  {details.examples}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="sticky bottom-0 bg-slate-900/95 backdrop-blur-xl border-t border-white/20 px-6 py-4">
          <button
            onClick={onClose}
            className="w-full px-4 py-2.5 rounded-xl bg-liquid-500/20 hover:bg-liquid-500/30 border border-liquid-400/30 text-liquid-300 font-semibold transition-all duration-200 hover:scale-[1.02]"
          >
            Chiudi
          </button>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetailModal;
