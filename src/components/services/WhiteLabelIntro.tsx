import React from 'react';

export function WhiteLabelIntro() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.03),transparent_50%)]"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="space-y-8 animate-fade-in-up">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif-display font-bold text-brand-purple leading-tight">
              SmartOps: il vostro reparto web, senza assunzioni né ritardi
            </h2>
            <p className="text-xl md:text-2xl text-brand-charcoal/80 font-sans-modern font-medium">
              Consegniamo siti e landing page pronti alla rivendita in soli 3 giorni. Prezzi fissi, qualità costante, margini garantiti.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-brand-charcoal/70 font-sans-modern leading-relaxed space-y-6">
            <p>
              <strong className="text-brand-purple">SmartOps risolve il problema più grande delle agenzie:</strong> troppi progetti, poco tempo, margini che si assottigliano.
            </p>

            <p>
              Il nostro sistema white-label vi permette di offrire siti e landing di alto livello. Senza assumere. Senza coordinare. Senza formare nessuno.
            </p>

            <div className="bg-purple-50 border-l-4 border-brand-purple pl-6 py-4 my-8 rounded-r-lg">
              <p className="font-semibold text-brand-purple mb-3 text-lg">Come funziona:</p>
              <ol className="space-y-2 list-decimal list-inside text-brand-charcoal/80">
                <li>Voi vendete il progetto con il vostro brand</li>
                <li>Noi lo realizziamo dietro le quinte</li>
                <li>In 3 giorni vi consegniamo il lavoro finito</li>
                <li>Voi lo consegnate al cliente finale</li>
              </ol>
            </div>

            <p>
              Nessun ritardo. Nessuna complessità. Solo risultati misurabili e prevedibili.
            </p>

            <p>
              Con i nostri piani mensili a prezzo fisso, pianificate i margini fin dal preventivo. Nessuna sorpresa. Nessun costo extra.
            </p>

            <p className="text-xl font-semibold text-brand-purple pt-4">
              SmartOps non è un fornitore. È il vostro team interno — senza buste paga, ferie o riunioni infinite.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mt-8 pt-6 border-t border-brand-purple/20">
              <a
                href="#web-design"
                className="text-brand-purple hover:text-brand-purple/80 font-medium underline"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#web-design')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Scopri tutti i servizi web design →
              </a>
              <span className="text-brand-charcoal/30">|</span>
              <a
                href="#testimonials"
                className="text-brand-purple hover:text-brand-purple/80 font-medium underline"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#testimonials')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Vedi i nostri progetti →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
