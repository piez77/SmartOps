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
    <div className="group relative bg-gradient-to-b from-purple-900/20 to-transparent p-8 rounded-xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-600/20 to-blue-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="relative">
        <div className="flex items-center justify-between mb-6">
          <img 
            src={logoUrl} 
            alt={`${companyName} logo`} 
            className="h-12 object-contain"
          />
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-purple-400 fill-current" />
            ))}
          </div>
        </div>
        
        <p className="text-gray-300 mb-6 italic">"{description}"</p>
        
        <a 
          href={websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-300 transition-colors inline-flex items-center gap-2"
        >
          Visita il Sito
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </div>
  );
}