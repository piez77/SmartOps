import React from 'react';
import { Search, Handshake, Timer } from 'lucide-react';

const values = [
  {
    icon: Search,
    title: "Analisi Personalizzata",
    description: "Analizziamo le tue esigenze specifiche e creiamo un piano di automazione su misura."
  },
  {
    icon: Handshake,
    title: "Nessun Obbligo",
    description: "Esplora le nostre soluzioni senza alcun impegno."
  },
  {
    icon: Timer,
    title: "Risultati Immediati",
    description: "Scopri strategie attuabili per vedere un impatto immediato."
  }
];

export function ValuePoints() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {values.map((value, index) => (
        <div
          key={index}
          className="group p-8 rounded-xl bg-white border border-brand-gray hover:border-brand-purple/30 transition-all duration-300 hover:shadow-lg text-center"
        >
          <div className="mb-6 transform group-hover:scale-105 transition-transform duration-300 inline-block">
            <div className="p-4 rounded-full bg-brand-purple/10">
              <value.icon className="w-8 h-8 text-brand-purple" />
            </div>
          </div>
          <h3 className="text-xl font-serif-display font-semibold mb-2 text-brand-charcoal">
            {value.title}
          </h3>
          <p className="text-brand-charcoal/70 font-sans-modern">{value.description}</p>
        </div>
      ))}
    </div>
  );
}