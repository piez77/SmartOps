import React from 'react';
import { MessageSquareCode, Globe, Bot } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: "Supporto Clienti AI",
    description: "Sistema di chatbot intelligente che gestisce le richieste dei clienti e la programmazione degli appuntamenti con un tocco umano.",
    highlights: [
      "Supporto automatizzato 24/7",
      "Elaborazione del linguaggio naturale",
      "Programmazione intelligente degli appuntamenti",
      "Interazioni personalizzate con i clienti"
    ],
    link: "#ai-support"
  },
  {
    icon: Globe,
    title: "Sviluppo Web",
    description: "Siti web personalizzati che combinano design straordinario con alte prestazioni.",
    highlights: [
      "Stack tecnologico moderno",
      "Design interattivo",
      "Ottimizzazione SEO",
      "Focus sulle prestazioni"
    ],
    link: "#web-design"
  },
  {
    icon: MessageSquareCode,
    title: "Outreach Automatizzato",
    description: "Generazione di lead guidata dall'AI attraverso un coinvolgimento personalizzato dei clienti.",
    highlights: [
      "Targeting intelligente dei lead",
      "Follow-up automatizzati",
      "Analisi delle campagne",
      "Ottimizzazione delle conversioni"
    ],
    link: "#automated-outreach"
  }
];

export function OverviewService() {
  const handleScroll = (e: React.MouseEvent<HTMLDivElement>, link?: string) => {
    if (link) {
      e.preventDefault();
      const element = document.querySelector(link);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#4f46e520,transparent)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-[0.1]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Le Nostre Soluzioni
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Offriamo alle aziende soluzioni all'avanguardia basate sull'automazione e l'intelligenza artificiale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              onClick={(e) => handleScroll(e, service.link)}
              className={`group relative bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 ${service.link ? 'cursor-pointer' : ''}`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-purple-600/20 to-blue-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <service.icon className="w-12 h-12 text-purple-400 mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}