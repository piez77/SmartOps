import React from 'react';

const metrics = [
  { value: "98%", label: "richieste risolte istantaneamente" },
  { value: "10,000+", label: "ore risparmiate per i nostri clienti" }
];

export function MetricsCounter() {
  return (
    <div className="flex flex-wrap justify-center gap-12 mt-16">
      {metrics.map((metric, index) => (
        <div key={index} className="text-center">
          <div className="text-5xl md:text-6xl font-serif-display font-bold text-brand-purple mb-2">
            {metric.value}
          </div>
          <div className="text-brand-charcoal/70 font-sans-modern">{metric.label}</div>
        </div>
      ))}
    </div>
  );
}