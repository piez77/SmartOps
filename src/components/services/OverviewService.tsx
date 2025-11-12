import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

const problems = [
  "Ritardi che causano penali, rinnovi mancati e clienti persi",
  "Qualità incostante: design bello ma codice scadente, SEO non ottimizzato, landing non performanti",
  "Controllo del brand compromesso quando il fornitore parla direttamente col cliente",
  "Costi nascosti e scope creep che erodono i margini",
  "Tempo sprecato nel coordinare più freelance e risolvere bug che non avrebbero dovuto esistere"
];

export function OverviewService() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative py-24 overflow-hidden bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif-display font-bold mb-6 text-brand-charcoal leading-tight">
            100% dei margini, 0% dello stress
          </h2>
          <p
            className={`text-xl md:text-2xl text-brand-charcoal/80 max-w-4xl mx-auto font-sans-modern transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Servizi web white-label per agenzie che vogliono crescere, consegnare puntuali e mantenere il proprio brand al centro. Voi vendete, noi realizziamo.
          </p>
        </div>

        <div
          className={`prose prose-lg max-w-none mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-brand-charcoal/70 text-lg leading-relaxed mb-6">
            Ogni agenzia conosce la storia: il progetto parte con entusiasmo, poi arrivano ritardi, revisioni infinite e clienti impazienti. Coordinare freelance è un incubo, costruire un team interno costa tempo, stipendi e gestione che spesso le piccole e medie realtà non possono permettersi.
          </p>

          <p className="text-brand-charcoal/70 text-lg leading-relaxed mb-6">
            Il risultato? Margini erosi, reputazione a rischio e meno tempo per ciò che davvero conta: far crescere i clienti (e l'agenzia).
          </p>

          <p className="text-brand-charcoal/70 text-lg leading-relaxed mb-6">
            Noi conosciamo bene queste sfide e abbiamo costruito soluzioni su misura per chi vuole la solidità di un team interno, ma senza il peso di costi fissi esorbitanti. Consegne rapide, qualità costante, processi trasparenti: tutto sotto il vostro marchio, come se lo aveste fatto voi.
          </p>

          <p className="text-brand-charcoal/70 text-lg leading-relaxed mb-10">
            Così potete dire addio al caos operativo e tornare a concentrarvi su ciò che fate meglio: vendere, creare strategie e far crescere il vostro business.
          </p>
        </div>

        <div
          className={`bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <ul className="space-y-6">
            {problems.map((problem, index) => (
              <li
                key={index}
                className={`flex items-start gap-4 transition-all duration-1000`}
                style={{
                  transitionDelay: `${600 + index * 100}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                }}
              >
                <X className="w-6 h-6 text-brand-charcoal flex-shrink-0 mt-1 font-bold stroke-[3]" />
                <span className="text-brand-charcoal/80 text-lg leading-relaxed">
                  {problem}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}