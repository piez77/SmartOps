import React from 'react';
import { TestimonialCard } from './TestimonialCard';

const portfolio = [
  {
    companyName: "W.G. Montaggi",
    websiteUrl: "https://wgmontaggi.com/",
    logoUrl: "https://res.cloudinary.com/dmc8jmcqc/image/upload/v1737792954/Screenshot_2025-01-25_091525_thrydh.png"
  },
  {
    companyName: "M.GM. Colors",
    websiteUrl: "https://mgmcolors.com/",
    logoUrl: "https://res.cloudinary.com/dmc8jmcqc/image/upload/v1738063506/WhatsApp_Image_2025-01-27_at_11.24.09_PM_qa1hbe.png"
  },
  {
    companyName: "Buftea Capital",
    websiteUrl: "https://bufteacapital.net/",
    logoUrl: "https://res.cloudinary.com/dmc8jmcqc/image/upload/v1748264976/Screenshot_2025-05-26_150903_p9betd.png"
  },
  {
    companyName: "Ottica Supervisione",
    websiteUrl: "https://otticasupervisione.it/",
    logoUrl: "https://res.cloudinary.com/dmc8jmcqc/image/upload/v1756998673/474777750_629139916324199_6078298961544040115_n_fskuxa.jpg"
  },
  {
    companyName: "Egina",
    websiteUrl: "https://egina.net/",
    logoUrl: "https://res.cloudinary.com/dmc8jmcqc/image/upload/v1761375116/Immagine_WhatsApp_2025-10-25_ore_08.49.24_82711686_ukavss.jpg"
  },
  {
    companyName: "Gioielleria L'Aura d'Oro",
    websiteUrl: "https://lauradoroshop.com/",
    logoUrl: "https://res.cloudinary.com/dmc8jmcqc/image/upload/v1752165289/Immagine_WhatsApp_2025-07-10_ore_18.34.12_f4833a05_clucbg.jpg"
  },
  {
    companyName: "Estetica e Benessere My Style",
    websiteUrl: "https://esteticaebenesseremystyle.com/",
    logoUrl: "https://res.cloudinary.com/dmc8jmcqc/image/upload/v1746716232/LOGO_byzf0b_avvccp.jpg"
  },
  {
    companyName: "Celeste Impresa di Pulizie",
    websiteUrl: "https://celesteservice.com/",
    logoUrl: "https://res.cloudinary.com/dmc8jmcqc/image/upload/v1746389313/Screenshot_2025-05-04_220753_yqtlmj.png"
  },
  {
    companyName: "Gab's Afrobeauty",
    websiteUrl: "https://gabsafrobeauty.com/",
    logoUrl: "https://res.cloudinary.com/dmc8jmcqc/image/upload/v1742895573/Immagine_WhatsApp_2025-03-24_ore_19.10.16_3434b278_tznfp5.jpg"
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 overflow-hidden bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-serif-display font-bold mb-6 text-brand-purple">
            Portafoglio
          </h2>
          <p className="text-xl text-brand-charcoal/70 max-w-3xl mx-auto font-sans-modern">
            Qualunque sia la nicchia, rappresentiamo al meglio il brand dei nostri clienti.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {portfolio.map((item, index) => (
            <TestimonialCard
              key={index}
              {...item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}