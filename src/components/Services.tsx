import React from 'react';
import { OverviewService } from './services/OverviewService';
import { WebDesignService } from './services/WebDesignService';

export function Services() {
  return (
    <section id="services" className="bg-black/50">
      <OverviewService />
      <WebDesignService />
    </section>
  );
}