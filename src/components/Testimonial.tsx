import React from 'react';
import { Quote } from 'lucide-react';

export function Testimonial() {
  return (
    <div className="py-20 bg-black/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#4f46e580,transparent)] opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="p-8 rounded-lg bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:scale-105 group">
          <Quote className="w-12 h-12 text-purple-400 mx-auto mb-6 group-hover:rotate-12 transition-transform" />
          <div className="text-2xl italic text-center mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            "SmartOps has saved us hundreds of hours every month!"
          </div>
          <div className="text-center text-gray-400">- John D.</div>
        </div>
      </div>
    </div>
  );
}