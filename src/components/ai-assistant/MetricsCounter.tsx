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
          <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
            {metric.value}
          </div>
          <div className="text-gray-400">{metric.label}</div>
        </div>
      ))}
    </div>
  );
}