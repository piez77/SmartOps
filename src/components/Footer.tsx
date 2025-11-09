import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-brand-gray border-t border-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <Logo />
          
          <div className="text-brand-charcoal/70 font-sans-modern">
            © 2025 SmartOps Tutti i diritti riservati.
          </div>
          
          <div className="flex items-center gap-8">
            <div className="flex gap-4">
              <Link to="/" className="text-brand-charcoal/70 hover:text-brand-purple transition-colors font-medium">
                Home
              </Link>
              <Link to="/contact" className="text-brand-charcoal/70 hover:text-brand-purple transition-colors font-medium">
                Contatti
              </Link>
            </div>
            <a
              href="https://www.instagram.com/smart.operation?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-charcoal/70 hover:text-brand-purple transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}