import { useState } from 'react';
import { Calculator, Hash, Type, Binary, Gauge } from 'lucide-react';
import BaseConverter from './components/BaseConverter';
import AsciiConverter from './components/AsciiConverter';
import UnicodeConverter from './components/UnicodeConverter';
import FloatingPointConverter from './components/FloatingPointConverter';

function App() {
  const [activeTab, setActiveTab] = useState<'base' | 'ascii' | 'unicode' | 'floating'>('base');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calculator className="w-12 h-12 text-cyan-400" />
            <h1 className="text-5xl font-bold text-white">Base Converter</h1>
          </div>
          <p className="text-slate-300 text-lg">Prof. Carello Nicolò, info@nicolocarello.it</p>
        </header>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden">
          <div className="flex border-b border-slate-700/50">
            <button
              onClick={() => setActiveTab('base')}
              className={`flex-1 px-6 py-4 flex items-center justify-center gap-2 font-semibold transition-all ${
                activeTab === 'base'
                  ? 'bg-cyan-500/20 text-cyan-400 border-b-2 border-cyan-400'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/30'
              }`}
            >
              <Hash className="w-5 h-5" />
              Basi Numeriche
            </button>
            <button
              onClick={() => setActiveTab('ascii')}
              className={`flex-1 px-6 py-4 flex items-center justify-center gap-2 font-semibold transition-all ${
                activeTab === 'ascii'
                  ? 'bg-cyan-500/20 text-cyan-400 border-b-2 border-cyan-400'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/30'
              }`}
            >
              <Type className="w-5 h-5" />
              ASCII
            </button>
            <button
              onClick={() => setActiveTab('unicode')}
              className={`flex-1 px-6 py-4 flex items-center justify-center gap-2 font-semibold transition-all ${
                activeTab === 'unicode'
                  ? 'bg-cyan-500/20 text-cyan-400 border-b-2 border-cyan-400'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/30'
              }`}
            >
              <Binary className="w-5 h-5" />
              Unicode
            </button>
            <button
              onClick={() => setActiveTab('floating')}
              className={`flex-1 px-6 py-4 flex items-center justify-center gap-2 font-semibold transition-all ${
                activeTab === 'floating'
                  ? 'bg-cyan-500/20 text-cyan-400 border-b-2 border-cyan-400'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/30'
              }`}
            >
              <Gauge className="w-5 h-5" />
              Virgola Mobile/Fissa
            </button>
          </div>

          <div className="p-8">
            {activeTab === 'base' && <BaseConverter />}
            {activeTab === 'ascii' && <AsciiConverter />}
            {activeTab === 'unicode' && <UnicodeConverter />}
            {activeTab === 'floating' && <FloatingPointConverter />}
          </div>
        </div>

        <footer className="text-center mt-8 text-slate-400 text-sm">

        </footer>
      </div>
    </div>
  );
}

export default App;
