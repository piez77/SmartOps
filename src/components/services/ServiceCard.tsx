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
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-600/20 to-blue-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="relative p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 bg-black/40 backdrop-blur-sm">
        <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
          <Icon className="w-12 h-12 text-purple-400" />
        </div>
        <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-purple-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 mb-6">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-300">
              <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}