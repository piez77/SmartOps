import React from 'react';
import { TrendingUp, Settings2, Rocket } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: "Leads Through Ads",
    description: "We generate qualified leads through targeted advertising on Google, Instagram, and Facebook."
  },
  {
    icon: Settings2,
    title: "Complete Management",
    description: "We handle everything—from ad creation to campaign optimization—using data-driven strategies."
  },
  {
    icon: Rocket,
    title: "Focus on What You Do Best",
    description: "Let us handle lead generation while you concentrate on growing your business and serving your clients."
  }
];

export function Benefits() {
  return (
    <div className="space-y-8">
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className="group p-6 rounded-xl bg-gradient-to-r from-purple-900/20 to-transparent hover:from-purple-900/30 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10"
        >
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-purple-500/10 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <benefit.icon className="w-8 h-8 text-purple-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-400 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}