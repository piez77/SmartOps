import React from 'react';

interface TestimonialCardProps {
  companyName: string;
  websiteUrl: string;
  logoUrl: string;
}

export function TestimonialCard({ companyName, websiteUrl, logoUrl }: TestimonialCardProps) {
  return (
    <div className="group relative bg-white p-8 rounded-xl border border-brand-gray hover:border-brand-purple/30 transition-all duration-300 hover:shadow-xl">
      <div className="relative flex flex-col items-center justify-center h-full">
        <a
          href={websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group-hover:scale-105 transition-transform duration-300"
        >
          <img
            src={logoUrl}
            alt={`${companyName} logo`}
            className="h-20 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
          />
        </a>
      </div>
    </div>
  );
}