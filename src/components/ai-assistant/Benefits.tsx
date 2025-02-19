import React from 'react';
import { Clock, Puzzle, MessageCircleHeart } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: "Risparmia Ore Ogni Giorno",
    description: "Automatizza le attività di routine così puoi concentrarti sul lavoro che conta davvero per te."
  },
  {
    icon: Puzzle,
    title: "Su Misura per le Tue Esigenze",
    description: "Addestra l'Assistente AI per riflettere la voce del tuo brand e gestire richieste uniche dei clienti."
  },
  {
    icon: MessageCircleHeart,
    title: "Delizia i Clienti 24 Ore su 24",
    description: "Fornisci risposte efficaci e gentili a tutte le domande dei clienti—anche alle 3 del mattino."
  }
];

export function Benefits() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className="group p-8 rounded-xl bg-gradient-to-b from-purple-900/20 to-transparent hover:from-purple-900/30 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10"
        >
          <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
            <benefit.icon className="w-12 h-12 text-purple-400" />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-purple-400 transition-colors">
            {benefit.title}
          </h3>
          <p className="text-gray-400">{benefit.description}</p>
        </div>
      ))}
    </div>
  );
}