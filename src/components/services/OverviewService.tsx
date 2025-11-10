import React from 'react';
import { Globe } from 'lucide-react';

const services = [
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
    <div className="relative py-24 overflow-hidden bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif-display font-bold mb-6 text-brand-purple">
            Le Nostre Soluzioni
          </h2>
          <p className="text-xl text-brand-charcoal/70 max-w-3xl mx-auto font-sans-modern">
            Automazione intelligente e sviluppo web premium per risultati misurabili
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-2xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              onClick={(e) => handleScroll(e, service.link)}
              className={`group relative bg-white p-8 rounded-xl border border-brand-gray hover:border-brand-purple/30 transition-all duration-300 hover:shadow-xl ${service.link ? 'cursor-pointer' : ''}`}
            >
              <div className="relative">
                <service.icon className="w-12 h-12 text-brand-purple mb-6 transform group-hover:scale-105 transition-transform duration-300" />
                <h3 className="text-2xl font-serif-display font-semibold mb-4 text-brand-charcoal">
                  {service.title}
                </h3>
                <p className="text-brand-charcoal/70 mb-6 font-sans-modern">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center text-brand-charcoal/70">
                      <span className="w-1.5 h-1.5 bg-brand-purple rounded-full mr-2"></span>
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