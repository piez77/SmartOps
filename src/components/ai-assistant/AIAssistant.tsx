import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Benefits } from './Benefits';
import { MetricsCounter } from './MetricsCounter';
import { openVoiceflowAssistant } from '../../utils/voiceflow';

export function AIAssistant() {
  return (
    <section id="ai-support" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-blue-900/20" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiM4QjVDRjYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Il Tuo Assistente AI 24/7: Intelligente, Personalizzato e Senza Stress
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Elimina il caos delle richieste dei clienti con un assistente AI che lavora instancabilmente per deliziare i tuoi clienti—perfettamente adattato alla tua attività.
          </p>
        </div>

        <Benefits />
        <MetricsCounter />

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Smetti di perdere tempo in attività ripetitive—lascia che il tuo Assistente AI se ne occupi. Personalizzato, efficiente e pronto a lavorare per te.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://calendly.com/pietrocanazza16/smartops"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
            >
              Ottieni il Tuo Assistente AI Ora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button 
              onClick={openVoiceflowAssistant}
              className="group px-8 py-4 border border-purple-500 rounded-lg font-semibold text-lg hover:bg-purple-500/10 transition-all hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10">Scopri Come Funziona</span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}