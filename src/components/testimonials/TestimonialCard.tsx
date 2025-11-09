import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  companyName: string;
  websiteUrl: string;
  logoUrl: string;
  description: string;
}

export function TestimonialCard({ companyName, websiteUrl, logoUrl, description }: TestimonialCardProps) {
  return (
    <div className="group relative bg-white p-8 rounded-xl border border-brand-gray hover:border-brand-purple/30 transition-all duration-300 hover:shadow-xl">
      <div className="relative">
        <div className="flex items-center justify-between mb-6">
          <img 
            src={logoUrl} 
            alt={`${companyName} logo`} 
            className="h-12 object-contain"
          />
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-brand-purple fill-current" />
            ))}
          </div>
        </div>
        
        <p className="text-brand-charcoal/70 mb-6 italic font-sans-modern">"{description}"</p>
        
        <a
          href={websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-purple hover:text-brand-purple/80 transition-colors inline-flex items-center gap-2 font-semibold"
        >
          Visita il Sito
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </div>
  );
}