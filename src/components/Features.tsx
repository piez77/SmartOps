import React from 'react';
import { Workflow, Brain, Puzzle } from 'lucide-react';

const features = [
  {
    icon: <Workflow className="w-12 h-12 text-purple-400" />,
    title: 'Intelligent Workflow Design',
    description: 'Automate repetitive tasks with precision.',
  },
  {
    icon: <Brain className="w-12 h-12 text-blue-400" />,
    title: 'Custom AI Solutions',
    description: 'Tailored tools for every unique business.',
  },
  {
    icon: <Puzzle className="w-12 h-12 text-purple-400" />,
    title: 'Seamless Integration',
    description: 'Works with all your favorite platforms.',
  },
];

export function Features() {
  return (
    <div className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#4f46e520,transparent)] animate-pulse"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-6 rounded-lg bg-gradient-to-b from-purple-900/20 to-transparent hover:from-purple-900/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}