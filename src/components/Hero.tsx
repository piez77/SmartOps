import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FloatingElements } from './floating/FloatingElements';
import { openVoiceflowAssistant } from '../utils/voiceflow';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FloatingElements />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Creiamo Siti Web Veloci, Moderni e Orientati alla Conversione
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Distinguiti con un sito web professionale e ad alte prestazioni in tempi record. Mostra la tua attività e trasforma i visitatori in clienti con design eleganti e su misura per i tuoi obiettivi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://calendly.com/pietrocanazza16/smartops" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all hover:scale-105"
            >
              Inizia Ora
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
    </div>
  );
}