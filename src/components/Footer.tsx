import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-gray border-t border-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <Logo />
            <p className="text-brand-charcoal/60 text-sm mt-4 font-sans-modern">
              Web design white label per agenzie che vogliono crescere.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-brand-charcoal mb-4">Servizi</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleScrollTo(e, '#services')}
                  className="text-brand-charcoal/70 hover:text-brand-purple transition-colors text-sm"
                >
                  Panoramica Servizi
                </a>
              </li>
              <li>
                <a
                  href="#web-design"
                  onClick={(e) => handleScrollTo(e, '#web-design')}
                  className="text-brand-charcoal/70 hover:text-brand-purple transition-colors text-sm"
                >
                  Web Design
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  onClick={(e) => handleScrollTo(e, '#testimonials')}
                  className="text-brand-charcoal/70 hover:text-brand-purple transition-colors text-sm"
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-brand-charcoal mb-4">Azienda</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-brand-charcoal/70 hover:text-brand-purple transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => handleScrollTo(e, '#pricing')}
                  className="text-brand-charcoal/70 hover:text-brand-purple transition-colors text-sm"
                >
                  Prezzi
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-brand-charcoal/70 hover:text-brand-purple transition-colors text-sm">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-brand-charcoal mb-4">Seguici</h3>
            <a
              href="https://www.instagram.com/smart.operation?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-charcoal/70 hover:text-brand-purple transition-colors text-sm"
            >
              <Instagram className="w-5 h-5" />
              <span>Instagram</span>
            </a>
          </div>
        </div>

        <div className="border-t border-brand-charcoal/10 pt-8 text-center">
          <p className="text-brand-charcoal/70 text-sm font-sans-modern">
            © 2025 SmartOps. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
}