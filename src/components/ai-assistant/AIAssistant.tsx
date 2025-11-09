import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Benefits } from './Benefits';
import { MetricsCounter } from './MetricsCounter';
import { openVoiceflowAssistant } from '../../utils/voiceflow';

export function AIAssistant() {
  return (
    <section id="ai-support" className="relative py-24 overflow-hidden bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-serif-display font-bold mb-6 text-brand-purple">
            Assistente AI 24/7 per il Tuo Business
          </h2>
          <p className="text-xl text-brand-charcoal/70 max-w-3xl mx-auto font-sans-modern">
            Automazione affidabile che gestisce richieste clienti e appuntamenti, riducendo i costi operativi e aumentando la soddisfazione.
          </p>
        </div>

        <Benefits />
        <MetricsCounter />

        <div className="mt-16 text-center">
          <p className="text-xl text-brand-charcoal/70 mb-8 max-w-3xl mx-auto font-sans-modern">
            Risparmia tempo su attività ripetitive. Sistema personalizzato, efficiente e misurabile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://calendly.com/pietrocanazza16/smartops"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-brand-purple rounded-lg font-semibold text-lg text-white flex items-center justify-center gap-2 hover:bg-brand-purple/90 transition-all hover:shadow-xl hover:shadow-brand-purple/20"
            >
              Ottieni il Tuo Assistente AI Ora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={openVoiceflowAssistant}
              className="group px-8 py-4 border-2 border-brand-purple/30 rounded-lg font-semibold text-lg text-brand-purple hover:bg-brand-purple/5 transition-all hover:border-brand-purple"
            >
              <span>Scopri Come Funziona</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}