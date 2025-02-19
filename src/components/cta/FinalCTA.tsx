import React from 'react';
import { ValuePoints } from './ValuePoints';
import { CTAButton } from './CTAButton';
import { ParticleBackground } from './ParticleBackground';

export function FinalCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      <ParticleBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Pronto a Trasformare la Tua Attività? Scopriamo Insieme le Possibilità.
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Prenota una chiamata di scoperta gratuita con i nostri esperti per vedere come l'automazione AI può farti risparmiare tempo, aumentare l'efficienza e far crescere la tua attività senza sforzo.
          </p>
        </div>

        <ValuePoints />
        <CTAButton />
      </div>
    </section>
  );
}