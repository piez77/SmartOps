import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
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
            Il tuo primo sito è gratis.<br />Il prossimo lo pagano i tuoi clienti.
          </h1>
          <p className="text-xl md:text-2xl text-brand-charcoal/70 mb-12 max-w-3xl mx-auto font-sans-modern leading-relaxed">
            Siamo la white label agency che costruisce siti web impeccabili per la tua agenzia. SEO, CRM e automazioni integrate. Risultati reali, non solo click.
          </p>
          <p className="text-lg text-brand-charcoal/60 mb-8 max-w-2xl mx-auto font-sans-modern">
            Primo progetto gratuito. Consegna in 48 ore. Testa il nostro livello prima di decidere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:smartoperationsweb@gmail.com?subject=Richiesta%20Informazioni%20SmartOps&body=Ciao%20SmartOps%2C%0A%0AVorrei%20ricevere%20maggiori%20informazioni%20sui%20vostri%20servizi%20white%20label.%0A%0AGrazie"
              className="group relative px-10 py-5 bg-gradient-to-r from-brand-purple via-purple-600 to-brand-purple bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-xl font-bold text-xl text-white flex items-center justify-center gap-3 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-purple/40 hover:scale-105 animate-pulse-glow"
            >
              <span className="relative z-10">Scrivici Ora</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
            </a>
            <a
              href="#pricing"
              className="group px-10 py-5 bg-white border-2 border-brand-purple rounded-xl font-bold text-xl text-brand-purple flex items-center justify-center gap-3 transition-all duration-300 hover:bg-brand-purple hover:text-white hover:shadow-xl"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>Scopri i Piani</span>
              <ArrowDown className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-300" />
            </a>
          </div>
          <p className="text-sm text-brand-charcoal/50 mt-6 font-sans-modern">
            Ti invieremo il tuo sito pilota, chiavi in mano. <a href="#services" className="text-brand-purple hover:underline font-medium" onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }); }}>Scopri come funziona</a>
          </p>
        </div>
      </div>
    </div>
  );
}