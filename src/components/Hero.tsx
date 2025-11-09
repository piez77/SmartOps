import React from 'react';
import { ArrowRight } from 'lucide-react';
import { openVoiceflowAssistant } from '../utils/voiceflow';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-brand-gray/30 to-white">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(91,33,182,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(106,76,255,0.06),transparent_50%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-serif-display font-bold mb-8 text-brand-purple leading-tight">
            Siti Web che Convertono.<br />Consegnati in Giorni.
          </h1>
          <p className="text-xl md:text-2xl text-brand-charcoal/70 mb-12 max-w-3xl mx-auto font-sans-modern leading-relaxed">
            Partner affidabile per agenzie e aziende che cercano velocità, qualità e risultati misurabili. Design premium, consegne rapide, ROI garantito.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/pietrocanazza16/smartops"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-brand-purple rounded-lg font-semibold text-lg text-white flex items-center justify-center gap-2 hover:bg-brand-purple/90 transition-all hover:shadow-xl hover:shadow-brand-purple/20"
            >
              Inizia Ora
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
    </div>
  );
}