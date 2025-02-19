import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Servizi', href: '#services' },
  { name: 'Web Design', href: '#web-design' },
  { name: 'Supporto AI', href: '#ai-support' },
  { name: 'Testimonianze', href: '#testimonials' }
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
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Zap className="w-8 h-8 text-purple-400" />
            <span className="text-2xl font-bold">SmartOps</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-purple-400 transition-colors"
                onClick={closeMenu}
              >
                {link.name}
              </a>
            ))}
            <Link
              to="/contact"
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Contatti
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-purple-400 transition-colors"
            onClick={toggleMenu}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute w-full bg-black/95 backdrop-blur-sm border-b border-purple-500/20 transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-gray-300 hover:text-purple-400 transition-colors py-2"
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}
          <Link
            to="/contact"
            className="block px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold hover:opacity-90 transition-opacity text-center"
            onClick={closeMenu}
          >
            Contatti
          </Link>
        </div>
      </div>
    </nav>
  );
}