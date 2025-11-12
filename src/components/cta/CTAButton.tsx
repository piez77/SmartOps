import React from 'react';
import { Calendar } from 'lucide-react';

export function CTAButton() {
  return (
    <div className="text-center">
      <a
        href="https://calendly.com/pietrocanazza16/smartops?month=2025-11"
        target="_blank"
        rel="noopener noreferrer"
        className="group px-8 py-4 bg-brand-purple rounded-lg font-semibold text-lg text-white inline-flex items-center gap-2 hover:bg-brand-purple/90 transition-all hover:shadow-xl hover:shadow-brand-purple/20"
      >
        <Calendar className="w-5 h-5" />
        Prenota Ora la Tua Chiamata Gratuita
      </a>
      <p className="mt-4 text-brand-charcoal/70 font-sans-modern">
        Prenota ora la tua chiamata gratuita — bastano 15 minuti per scoprire come offrire più servizi, con meno stress e più margini.
      </p>
    </div>
  );
}