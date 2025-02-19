import React from 'react';

const stats = [
  { label: 'Faster Processes', value: '10x' },
  { label: 'Workflow Accuracy', value: '99.9%' },
  { label: 'Clients Served Globally', value: '50+' },
];

export function Stats() {
  return (
    <div className="relative bg-black/50 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100%,#4f46e580,transparent)] opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group p-6 rounded-lg bg-gradient-to-b from-purple-900/20 to-transparent hover:from-purple-900/30 transition-all duration-500 hover:scale-105"
            >
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-gray-400 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}