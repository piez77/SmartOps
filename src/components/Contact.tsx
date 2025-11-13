import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { Breadcrumb } from './Breadcrumb';

export function Contact() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="relative w-full max-w-4xl mx-auto px-4 py-16">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(91,33,182,0.08),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(106,76,255,0.06),transparent_50%)]"></div>
        </div>

        <div className="relative">
          <Breadcrumb items={[{ label: 'Contatti' }]} />

          <h2 className="text-4xl md:text-5xl font-serif-display font-bold mb-12 text-center text-brand-purple">
            Contattaci
          </h2>

          <div className="grid gap-8 max-w-2xl mx-auto">
            <a
              href="mailto:smartoperationsweb@gmail.com"
              className="group bg-white p-8 rounded-xl border border-brand-gray hover:border-brand-purple/30 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <Mail className="w-6 h-6 text-brand-purple group-hover:scale-105 transition-transform" />
                <h3 className="text-2xl font-serif-display font-semibold text-brand-charcoal">Email</h3>
              </div>
              <span className="text-lg text-brand-charcoal/70 group-hover:text-brand-purple transition-colors font-sans-modern">
                smartoperationsweb@gmail.com
              </span>
            </a>

            <a
              href="tel:+393393767851"
              className="group bg-white p-8 rounded-xl border border-brand-gray hover:border-brand-purple/30 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <Phone className="w-6 h-6 text-brand-purple group-hover:scale-105 transition-transform" />
                <h3 className="text-2xl font-serif-display font-semibold text-brand-charcoal">Telefono</h3>
              </div>
              <span className="text-lg text-brand-charcoal/70 group-hover:text-brand-purple transition-colors font-sans-modern">
                +39 339 376 7851
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}