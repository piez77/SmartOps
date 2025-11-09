import React from 'react';
import { ValuePoints } from './ValuePoints';
import { CTAButton } from './CTAButton';
import { ParticleBackground } from './ParticleBackground';

export function FinalCTA() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-brand-purple/5 to-white">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-serif-display font-bold mb-6 text-brand-purple">
            Pronto per Risultati Concreti?
          </h2>
          <p className="text-xl text-brand-charcoal/70 max-w-3xl mx-auto font-sans-modern">
            Chiamata gratuita per valutare come automazione e web design premium possono aumentare l'efficienza e il ROI del tuo business.
          </p>
        </div>

        <ValuePoints />
        <CTAButton />
      </div>
    </section>
  );
}