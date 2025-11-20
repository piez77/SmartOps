import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Che tipo di progetti potete realizzare?",
    answer: "Realizziamo landing page ad alta conversione, siti business ottimizzati SEO, funnel completi, pagine di prenotazione, thank you page e tutto ciò che serve per trasformare traffico in clienti."
  },
  {
    question: "Le vostre landing sono ottimizzate per la conversione?",
    answer: "Sì. Ogni progetto segue un processo CRO completo:\n✓ struttura persuasiva\n✓ copy ottimizzato\n✓ design responsive\n✓ caricamento veloce"
  },
  {
    question: "Fornite statistiche o tracciamenti?",
    answer: "Sì, possiamo integrare:\nGoogle analytics e tracciamento conversioni."
  },
  {
    question: "I siti business sono ottimizzati SEO?",
    answer: "Sì. Ogni sito include:\nmeta tag corretti, struttura SEO-friendly, velocità elevata, internal linking e copy ottimizzato per il ranking."
  },
  {
    question: "Il lavoro è white-label?",
    answer: "Sempre. Il cliente finale vede solo il tuo brand."
  },
  {
    question: "Serve fornire testi e materiali?",
    answer: "Puoi fornirli tu, ma non è obbligatorio.\nIn alternativa, creiamo noi copy, design, struttura e immagini."
  },
  {
    question: "Come si avvia un progetto?",
    answer: "Dopo l'attivazione del piano compili un form dedicato con le informazioni base del business e del progetto.\nTi basta quello: da lì partiamo noi."
  },
  {
    question: "Posso mettere in pausa o cambiare piano?",
    answer: "Sì.\nPuoi mettere in pausa l'abbonamento o cambiare piano pagando la differenza in qualsiasi momento."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.03),transparent_50%)]"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif-display font-bold text-brand-charcoal mb-4">
            Domande Frequenti
          </h2>
          <p className="text-xl text-brand-charcoal/70 font-sans-modern">
            Tutto quello che devi sapere sul nostro servizio
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-purple-50/50 transition-colors duration-200"
              >
                <span className="font-semibold text-lg text-brand-charcoal font-sans-modern">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-brand-purple flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 text-brand-charcoal/80 font-sans-modern leading-relaxed whitespace-pre-line">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-brand-charcoal/70 mb-6 font-sans-modern">
            Hai altre domande? Siamo qui per aiutarti.
          </p>
          <a
            href="https://calendly.com/pietrocanazza16/smartops?month=2025-11"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-purple text-white rounded-xl font-semibold text-lg hover:bg-brand-purple/90 transition-all hover:shadow-lg"
          >
            Prenota una Chiamata
          </a>
        </div>
      </div>
    </section>
  );
}
