import React from 'react';

export function WhiteLabelIntro() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-brand-purple/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
              SmartOps è nata per risolvere un problema che ogni agenzia conosce: troppi progetti, troppo poco tempo, e margini che si assottigliano a ogni revisione. Il nostro sistema white-label vi permette di offrire ai vostri clienti siti e landing di alto livello, senza assumere, coordinare o formare nessuno.
            </p>

            <p>
              Ecco come funziona: voi vendete il progetto con il vostro brand. Noi lo realizziamo — silenziosamente, dietro le quinte — e in massimo tre giorni vi consegniamo un lavoro finito, pronto per la consegna al cliente finale. Nessun ritardo, nessuna complessità. Solo risultati misurabili e prevedibili.
            </p>

            <p>
              Le agenzie che ci scelgono lo fanno per una ragione semplice: ogni progetto diventa profitto certo, non una fonte di stress. Con i nostri piani mensili a prezzo fisso potete pianificare i margini fin dal preventivo, senza sorprese o costi extra.
            </p>

            <p>
              SmartOps non è un fornitore. È il vostro team interno, ma senza buste paga, ferie o riunioni infinite. Ogni sito è costruito come se fosse vostro — perché lo è. Noi restiamo invisibili, voi restate brillanti.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
