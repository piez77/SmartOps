import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-32 bg-gradient-to-b from-white via-purple-50/30 to-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6"
          >
            <Sparkles className="w-5 h-5 text-brand-purple" />
            <span className="text-brand-purple font-semibold">FAQ</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-serif-display font-bold text-brand-charcoal mb-6 bg-gradient-to-r from-brand-purple via-purple-600 to-brand-purple bg-clip-text text-transparent">
            Domande Frequenti
          </h2>
          <p className="text-xl text-brand-charcoal/70 font-sans-modern max-w-2xl mx-auto">
            Tutto quello che devi sapere sul nostro servizio
          </p>
        </motion.div>

        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group"
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className={`relative border-2 rounded-2xl overflow-hidden bg-white shadow-lg transition-all duration-300 ${
                  openIndex === index
                    ? 'border-brand-purple shadow-2xl shadow-brand-purple/20'
                    : hoveredIndex === index
                    ? 'border-purple-300 shadow-xl shadow-purple-100'
                    : 'border-gray-200 hover:border-purple-200'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/5 via-purple-400/5 to-brand-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <button
                  onClick={() => toggleFAQ(index)}
                  className="relative w-full px-8 py-6 text-left flex items-center justify-between gap-4 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <motion.div
                      animate={{
                        rotate: hoveredIndex === index ? 360 : 0,
                        scale: hoveredIndex === index ? 1.1 : 1
                      }}
                      transition={{ duration: 0.3 }}
                      className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        openIndex === index
                          ? 'bg-gradient-to-br from-brand-purple to-purple-600 text-white shadow-lg shadow-brand-purple/30'
                          : 'bg-purple-100 text-brand-purple'
                      }`}
                    >
                      <HelpCircle className="w-5 h-5" />
                    </motion.div>

                    <span className={`font-semibold text-lg font-sans-modern transition-colors duration-300 ${
                      openIndex === index ? 'text-brand-purple' : 'text-brand-charcoal group-hover:text-brand-purple'
                    }`}>
                      {faq.question}
                    </span>
                  </div>

                  <motion.div
                    animate={{
                      rotate: openIndex === index ? 180 : 0,
                      scale: hoveredIndex === index ? 1.2 : 1
                    }}
                    transition={{ duration: 0.3, type: "spring" }}
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openIndex === index
                        ? 'bg-brand-purple text-white'
                        : 'bg-gray-100 text-gray-600 group-hover:bg-purple-100 group-hover:text-brand-purple'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        exit={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="px-8 pb-6 pl-[4.5rem]"
                      >
                        <div className="relative">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-purple to-purple-400 rounded-full"></div>
                          <p className="text-brand-charcoal/80 font-sans-modern leading-relaxed whitespace-pre-line pl-6">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-purple/10 to-transparent blur-xl"></div>

          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-12 border-2 border-purple-200 shadow-2xl">
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block mb-6"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-brand-purple to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-brand-purple/30">
                <HelpCircle className="w-8 h-8 text-white" />
              </div>
            </motion.div>

            <h3 className="text-3xl font-serif-display font-bold text-brand-charcoal mb-4">
              Hai altre domande?
            </h3>
            <p className="text-lg text-brand-charcoal/70 mb-8 font-sans-modern max-w-xl mx-auto">
              Siamo qui per aiutarti. Prenota una chiamata gratuita e scopri come possiamo far crescere insieme la tua agenzia.
            </p>

            <motion.a
              href="https://calendly.com/pietrocanazza16/smartops?month=2025-11"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-brand-purple via-purple-600 to-brand-purple bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-2xl font-bold text-xl text-white transition-all duration-500 shadow-2xl shadow-brand-purple/40 hover:shadow-3xl hover:shadow-brand-purple/60 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
              <span className="relative">Prenota una Chiamata</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative"
              >
                →
              </motion.span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
