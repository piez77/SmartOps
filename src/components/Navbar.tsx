import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

const navLinks = [
  { name: 'Servizi', href: '#services' },
  { name: 'Web Design', href: '#web-design' },
  { name: 'Supporto AI', href: '#ai-support' },
  { name: 'Portafoglio', href: '#testimonials' }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-brand-white/95 backdrop-blur-sm border-b border-brand-gray shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-brand-charcoal/70 hover:text-brand-purple transition-colors font-medium"
                onClick={closeMenu}
              >
                {link.name}
              </a>
            ))}
            <Link
              to="/contact"
              className="px-6 py-3 bg-brand-purple rounded-lg font-semibold text-white hover:bg-brand-purple/90 transition-all hover:shadow-lg"
            >
              Contatti
            </Link>
          </div>

          <button
            className="md:hidden text-brand-charcoal hover:text-brand-purple transition-colors"
            onClick={toggleMenu}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden absolute w-full bg-brand-white border-b border-brand-gray shadow-lg transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-brand-charcoal/70 hover:text-brand-purple transition-colors py-2 font-medium"
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}
          <Link
            to="/contact"
            className="block px-6 py-3 bg-brand-purple rounded-lg font-semibold text-white hover:bg-brand-purple/90 transition-all text-center"
            onClick={closeMenu}
          >
            Contatti
          </Link>
        </div>
      </div>
    </nav>
  );
}