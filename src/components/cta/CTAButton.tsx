import React from 'react';
import { Calendar } from 'lucide-react';

export function CTAButton() {
  return (
    <div className="text-center">
      <a
        href="https://calendly.com/pietrocanazza16/smartops"
        target="_blank"
        rel="noopener noreferrer"
        className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold text-lg inline-flex items-center gap-2 hover:opacity-90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 animate-pulse"
      >
        <Calendar className="w-5 h-5" />
        Prenota Ora la Tua Chiamata Gratuita
      </a>
      <p className="mt-4 text-gray-400">
        È gratuito, facile e richiede solo 15 minuti per esplorare le possibilità!
      </p>
    </div>
  );
}