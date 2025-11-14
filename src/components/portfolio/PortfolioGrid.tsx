import React, { useEffect, useRef, useState } from 'react';
import { PortfolioCard } from './PortfolioCard';
import { PortfolioItem } from '../../types/portfolio';

interface PortfolioGridProps {
  items: PortfolioItem[];
}

export function PortfolioGrid({ items }: PortfolioGridProps) {
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
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-brand-gray overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(91,33,182,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(106,76,255,0.06),transparent_50%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-serif-display font-bold mb-6 text-brand-purple">
            Portfolio
          </h2>
          <p className="text-xl text-brand-charcoal/70 max-w-3xl mx-auto font-sans-modern leading-relaxed">
            Qualunque sia la nicchia, rappresentiamo al meglio il brand dei nostri clienti.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, index) => (
            <PortfolioCard key={item.id} {...item} index={index} />
          ))}
        </div>

        <div
          className={`text-center mt-16 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-lg text-brand-charcoal/60 mb-6 font-sans-modern">
            Pronto a vedere il tuo progetto qui?
          </p>
          <a
            href="https://calendly.com/pietrocanazza16/smartops?month=2025-11"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand-purple text-white rounded-lg font-semibold text-lg hover:bg-purple-600 transition-all hover:shadow-xl hover:shadow-brand-purple/30 hover:scale-105"
          >
            <span>Inizia il Tuo Primo Progetto Gratis</span>
          </a>
        </div>
      </div>
    </section>
  );
}
