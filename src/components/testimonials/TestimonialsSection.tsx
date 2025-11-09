import React from 'react';
import { TestimonialCard } from './TestimonialCard';

const testimonials = [
  {
    companyName: "W.G. Montaggi",
    websiteUrl: "https://wgmontaggi.com/",
    logoUrl: "https://res.cloudinary.com/dmc8jmcqc/image/upload/v1737792954/Screenshot_2025-01-25_091525_thrydh.png",
    description: "Il nostro nuovo sito web cattura perfettamente il nostro impegno per la qualità e l'innovazione nelle installazioni industriali. Il design moderno e la funzionalità fluida hanno migliorato significativamente la nostra presenza online."
  },
  {
    companyName: "M.GM. Colors",
    websiteUrl: "https://mgmcolors.com/",
    logoUrl: "https://res.cloudinary.com/dmc8jmcqc/image/upload/v1738063506/WhatsApp_Image_2025-01-27_at_11.24.09_PM_qa1hbe.png",
    description: "Il sito web mostra perfettamente la nostra esperienza nelle rifiniture interne ed esterne. Il design moderno e il layout professionale ci hanno aiutato a presentare meglio i nostri servizi ai clienti."
  },
  {
    companyName: "Ruote Celeri",
    websiteUrl: "https://ruoteceleri.netlify.app/",
    logoUrl: "https://res.cloudinary.com/dmc8jmcqc/image/upload/v1737194774/Screenshot_2025-01-18_110537_matzkh.png",
    description: "Il nostro nuovo sito web bilancia perfettamente stile e funzionalità, aiutandoci a mostrare i nostri servizi automobilistici premium a un pubblico più ampio."
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 overflow-hidden bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-serif-display font-bold mb-6 text-brand-purple">
            Scelto da Aziende in Diversi Settori
          </h2>
          <p className="text-xl text-brand-charcoal/70 max-w-3xl mx-auto font-sans-modern">
            Risultati concreti per clienti che puntano su qualità, velocità e ROI misurabile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}