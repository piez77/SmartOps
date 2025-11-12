import React from 'react';
import { Laptop, Smartphone, Search, Zap, Bot, Car } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

const webDesignFeatures = [
  { 
    icon: Laptop,
    title: "Web Design Personalizzato",
    description: "Un'esperienza digitale che genera risultati concreti.",
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
    description: "Siti all'avanguardia che funzionano su tutti i dispositivi.",
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
    description: "Siti velocissimi ottimizzati per SEO ed esperienza utente.",
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
    description: "Funzionalità AI che migliorano coinvolgimento e conversioni.",
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
    <div id="web-design" className="relative py-24 overflow-hidden bg-brand-gray">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-serif-display font-bold mb-6 text-brand-purple">
Perché le agenzie più intelligenti scelgono SmartOps
          </h2>
          <p className="text-xl text-brand-charcoal/70 max-w-3xl mx-auto font-sans-modern">
Non vendiamo solo siti web. Offriamo tranquillità, margini prevedibili e risultati concreti.
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