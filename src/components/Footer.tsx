import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Zap className="w-8 h-8 text-purple-400" />
            <span className="text-2xl font-bold">SmartOps</span>
          </div>
          
          <div className="text-gray-400">
            © 2025 SmartOps Tutti i diritti riservati.
          </div>
          
          <div className="flex items-center gap-8">
            <div className="flex gap-4">
              <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                Contatti
              </Link>
            </div>
            <a 
              href="https://www.instagram.com/smart.operation?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}