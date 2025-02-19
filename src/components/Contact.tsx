import React from 'react';
import { Mail, Phone } from 'lucide-react';

export function Contact() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="relative w-full max-w-4xl mx-auto px-4 py-16">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100%,#4f46e580,transparent)] opacity-30" />
        </div>

        {/* Content */}
        <div className="relative">
          <h1 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Contattaci
          </h1>

          <div className="grid gap-8 max-w-2xl mx-auto">
            <a 
              href="mailto:smartoperationsweb@gmail.com"
              className="group bg-purple-900/20 p-8 rounded-xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-4">
                <Mail className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform" />
                <h2 className="text-2xl font-semibold text-white">Email</h2>
              </div>
              <span className="text-lg text-gray-300 group-hover:text-purple-400 transition-colors">
                smartoperationsweb@gmail.com
              </span>
            </a>

            <a 
              href="tel:+393393767851"
              className="group bg-purple-900/20 p-8 rounded-xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-4">
                <Phone className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform" />
                <h2 className="text-2xl font-semibold text-white">Telefono</h2>
              </div>
              <span className="text-lg text-gray-300 group-hover:text-purple-400 transition-colors">
                +39 339 376 7851
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}