import React from 'react';
import { OverviewService } from './services/OverviewService';
import { WhiteLabelIntro } from './services/WhiteLabelIntro';
import { WebDesignService } from './services/WebDesignService';

export function Services() {
  return (
    <section id="services" className="bg-black/50">
      <OverviewService />
      <WhiteLabelIntro />
      <WebDesignService />
    </section>
  );
}