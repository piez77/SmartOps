import React from 'react';
import { Benefits } from './Benefits';
import { ProcessAnimation } from './ProcessAnimation';

export function LeadGeneration() {
  return (
    <section id="automated-outreach" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-black" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-[0.1]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Lead Generation
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We increase leads through Google, Instagram, or Facebook ads with proven strategies that deliver results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Benefits />
          <ProcessAnimation />
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stop wasting time and money—let us fuel your pipeline with high-quality leads through targeted advertising.
          </p>
        </div>
      </div>
    </section>
  );
}