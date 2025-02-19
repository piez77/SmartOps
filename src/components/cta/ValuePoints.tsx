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
          className="group p-8 rounded-full bg-gradient-to-b from-purple-900/20 to-transparent hover:from-purple-900/30 transition-all duration-500 hover:scale-105 text-center"
        >
          <div className="mb-6 transform group-hover:scale-110 transition-all duration-300 inline-block">
            <div className="p-4 rounded-full bg-purple-500/10">
              <value.icon className="w-8 h-8 text-purple-400" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-400 transition-colors">
            {value.title}
          </h3>
          <p className="text-gray-400">{value.description}</p>
        </div>
      ))}
    </div>
  );
}