import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export function ServiceCard({ icon: Icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="group relative p-8 rounded-xl border border-brand-gray hover:border-brand-purple/30 transition-all duration-300 hover:shadow-xl bg-white">
      <div className="mb-6 transform group-hover:scale-105 transition-transform duration-300">
        <Icon className="w-12 h-12 text-brand-purple" />
      </div>
      <h3 className="text-2xl font-serif-display font-semibold mb-4 text-brand-charcoal">
        {title}
      </h3>
      <p className="text-brand-charcoal/70 mb-6 font-sans-modern">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-brand-charcoal/70">
            <span className="w-1.5 h-1.5 bg-brand-purple rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}