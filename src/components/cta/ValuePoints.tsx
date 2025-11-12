import React from 'react';
import { Search, Handshake, Timer } from 'lucide-react';

const values = [
  {
    icon: Search,
    title: "Analisi Personalizzata",
    description: "In 15 minuti analizziamo la tua offerta attuale, il flusso di lavoro e i tuoi margini. Ti mostreremo come integrando i nostri servizi nel tuo modello di business potrai offrire un web design professionale, mantenendo il pieno controllo del tuo brand e aumentando i margini di profitto."
  },
  {
    icon: Handshake,
    title: "Nessun Obbligo",
    description: "È una conversazione, non una vendita. Ti offriamo una panoramica chiara di come potresti scalare i tuoi servizi web senza assumere personale, gestire sviluppatori o perdere tempo nella produzione."
  },
  {
    icon: Timer,
    title: "Risultati Immediati",
    description: "Già durante la chiamata riceverai strategie concrete per migliorare la consegna dei progetti, ridurre i tempi e aumentare la soddisfazione dei tuoi clienti. Un piano pratico per crescere — che puoi applicare subito."
  }
];

export function ValuePoints() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {values.map((value, index) => (
        <div
          key={index}
          className="group p-8 rounded-xl bg-white border border-brand-gray hover:border-brand-purple/30 transition-all duration-300 hover:shadow-lg text-left"
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