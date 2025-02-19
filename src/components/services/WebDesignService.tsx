import React from 'react';
import { Laptop, Smartphone, Search, Zap, Bot, Car } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

const webDesignFeatures = [
  { 
    icon: Laptop,
    title: "Web Design Personalizzato",
    description: "Più di un sito web—un'esperienza digitale che genera risultati.",
    features: [
      "Layout unici che riflettono l'identità del brand",
      "Interfacce utente interattive",
      "Design ottimizzato per le conversioni",
      "Visual allineati al brand"
    ]
  },
  {
    icon: Smartphone,
    title: "Sviluppo Mobile-First",
    description: "Siti web all' avanguardia che funzionano perfettamente su tutti i dispositivi.",
    features: [
      "Architettura interattiva",
      "Interfacce touch-friendly",
      "Prestazioni veloci su mobile",
      "Coerenza cross-device"
    ]
  },
  {
    icon: Search,
    title: "SEO e Prestazioni",
    description: "Siti web velocissimi ottimizzati per i motori di ricerca e l'esperienza dell' utente.",
    features: [
      "Struttura ottimizzata per SEO",
      "Tempi di caricamento rapidi",
      "Monitoraggio delle prestazioni",
      "Visibilità sui motori di ricerca"
    ]
  },
  {
    icon: Bot,
    title: "Integrazione AI",
    description: "Funzionalità intelligenti che migliorano il coinvolgimento e la conversione degli utenti.",
    features: [
      "Chatbot basati su AI",
      "Raccomandazioni personalizzate",
      "Risposte efficaci alle domande",
      "Interazioni automatizzate"
    ]
  },
  {
    icon: Car,
    title: "Consegna Rapidissima",
    description: "Consegniamo il progetto completo in pochi giorni.",
    features: [
      "Pronto in Giorni, Non Settimane",
      "Nessun Compromesso sulla Qualità",
      "Design Pronti al Lancio",
      "Ottieni il tuo sito più velocemente che mai"
    ]
  },
  {
    icon: Zap,
    title: "Tecnologia a Prova di Futuro",
    description: "Costruito con tecnologia moderna e scalabile per il successo a lungo termine.",
    features: [
      "Stack tecnologico moderno",
      "Architettura scalabile",
      "Aggiornamenti regolari",
      "Best practice di sicurezza"
    ]
  }
];

export function WebDesignService() {
  return (
    <div id="web-design" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-[0.1]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Eccellenza nel Web Design
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Progettiamo siti web visivamente straordinari e ad alte prestazioni che convertono i visitatori in clienti fedeli.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webDesignFeatures.map((feature, index) => (
            <ServiceCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              features={feature.features}
            />
          ))}
        </div>
      </div>
    </div>
  );
}