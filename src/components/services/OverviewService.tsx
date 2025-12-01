import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

const problems = [
  "Ritardi che portano a penali, rinnovi mancati e clienti persi",
  "Qualità incostante: design bellissimo ma codice scadente, SEO non curato, landing che non convertono",
  "Controllo del brand compromesso quando il fornitore parla direttamente col cliente",
  "Costi imprevedibili che mangiano i margini mese dopo mese",
  "Tempo sprecato per coordinare freelance, risolvere bug e rincorrere consegne"
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
    <div ref={sectionRef} className="relative pt-16 pb-24 overflow-hidden bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-serif-display font-bold mb-6 text-brand-charcoal leading-tight">
            <span className="block mb-2">100% DI MARGINI</span>
            <span className="block">0% DELLO STRESS</span>
          </h2>
          <p
            className={`text-xl md:text-2xl text-brand-charcoal/80 max-w-4xl mx-auto font-sans-modern transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Servizi web white-label per agenzie che vogliono crescere, consegnare puntuali e mantenere il proprio brand al centro.<br />
            Voi vendete. Noi realizziamo.
          </p>
        </div>

        <div
          className={`prose prose-lg max-w-none mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-brand-charcoal/70 text-lg leading-relaxed mb-6">
            Ogni agenzia conosce questa storia.<br />
            Il progetto parte bene. Poi arrivano i ritardi, le revisioni infinite, i clienti impazienti.
          </p>

          <p className="text-brand-charcoal/70 text-lg leading-relaxed mb-6">
            Coordinare freelance è un incubo.<br />
            Costruire un team interno è ancora peggio: costi alti, gestione complessa, rallentamenti continui.<br />
            Nel frattempo, il costo dell'acquisizione cresce e ogni click sprecato diventa un problema reale.
          </p>

          <p className="text-brand-charcoal/70 text-lg leading-relaxed mb-6">
            <strong className="text-brand-purple">Il risultato?</strong><br />
            Margini erosi. Reputazione a rischio.<br />
            Meno tempo per far crescere i clienti e l'agenzia.
          </p>

          <p className="text-brand-charcoal/70 text-lg leading-relaxed mb-6">
            Noi offriamo una strada diversa.<br />
            La solidità di un team intero, senza costi fissi o complessità operative.<br />
            Consegne rapide, qualità costante, processi chiari.<br />
            Prezzi trasparenti che eliminano preventivi lunghi, sorprese e sprechi di budget.
          </p>

          <p className="text-brand-charcoal/70 text-lg leading-relaxed mb-6">
            Tutto sotto il vostro marchio.<br />
            Come se lo aveste fatto voi.
          </p>

          <p className="text-brand-charcoal/70 text-lg leading-relaxed mb-6">
            Dite addio al caos.<br />
            Tornate a vendere, creare strategie e far crescere il business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-purple text-white rounded-lg font-semibold hover:bg-brand-purple/90 transition-all hover:shadow-lg"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Vedi i Prezzi
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-brand-purple text-brand-purple rounded-lg font-semibold hover:bg-brand-purple hover:text-white transition-all"
            >
              Richiedi Informazioni
            </a>
          </div>
        </div>

        <div
          className={`bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-2xl md:text-3xl font-serif-display font-bold mb-8 text-brand-charcoal text-center">
            I problemi che eliminiamo per sempre
          </h3>
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
                <X className="w-6 h-6 text-black flex-shrink-0 mt-1" />
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