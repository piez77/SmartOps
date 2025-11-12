"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import {
  Palette,
  Smartphone,
  Search,
  Bot,
  Zap,
  Rocket,
  CheckCircle,
  Sparkles,
  Star,
  ArrowRight,
} from "lucide-react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"

export default function AboutUsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const services = [
    {
      icon: <Palette className="w-6 h-6" />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-blue-400" />,
      title: "Eccellenza nel Web Design",
      description:
        "Ogni sito SmartOps nasce per bilanciare estetica e performance. Niente template anonimi o soluzioni preconfezionate: realizziamo progetti premium che non solo catturano l'attenzione, ma la trasformano in azione. Ogni pagina è pensata per generare risultati misurabili — perché la bellezza da sola non basta, ma la bellezza che converte sì.",
      position: "left",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-blue-400" />,
      title: "Web Design Personalizzato",
      description:
        "Crediamo che un sito web debba raccontare il brand che rappresenta. Per questo ogni progetto è costruito da zero, con layout unici, interfacce interattive e visual coerenti con l'identità del cliente. Ottimizziamo ogni dettaglio per la conversione, così i vostri clienti ottengono risultati tangibili — e voi diventate il partner che li fa crescere.",
      position: "left",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-blue-400" />,
      title: "Sviluppo Mobile-First",
      description:
        "Oggi il primo contatto avviene quasi sempre da smartphone. Ecco perché sviluppiamo con un approccio mobile-first, garantendo prestazioni elevate, architetture interattive e interfacce touch-friendly. Ogni sito funziona in modo impeccabile su qualunque dispositivo, mantenendo coerenza e velocità ovunque.",
      position: "left",
    },
    {
      icon: <Search className="w-6 h-6" />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-blue-400" />,
      title: "SEO e Prestazioni",
      description:
        "Un design che non performa è un'occasione sprecata. Per questo ottimizziamo ogni sito per SEO, velocità di caricamento e visibilità sui motori di ricerca. Monitoriamo le prestazioni e costruiamo strutture pensate per scalare nel tempo. Così i vostri clienti vi associano non solo alla creatività, ma anche ai risultati.",
      position: "right",
    },
    {
      icon: <Bot className="w-6 h-6" />,
      secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-blue-400" />,
      title: "Integrazione AI",
      description:
        "Le tecnologie intelligenti non sono più un lusso, ma un vantaggio competitivo. I nostri siti includono chatbot basati su AI, raccomandazioni dinamiche e interazioni automatizzate che aumentano il coinvolgimento e migliorano l'esperienza utente. Mentre gli altri inseguono la tendenza, voi la offrite già.",
      position: "right",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-blue-400" />,
      title: "Consegna Rapidissima",
      description:
        "Ecco la parte che fa davvero la differenza: in massimo tre giorni dal momento della commissione, il progetto è completo, rifinito e pronto per la consegna al cliente. Nessuna attesa, nessun compromesso sulla qualità. Solo siti pronti al lancio, costruiti su misura e consegnati alla velocità che il mercato richiede.",
      position: "right",
    },
  ]

  return (
    <section
      id="about-section"
      ref={sectionRef}
      className="w-full py-24 px-4 bg-gradient-to-b from-purple-50 to-white text-gray-900 overflow-hidden relative"
    >
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-purple-500/5 blur-3xl"
        style={{ y: y1, rotate: rotate1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl"
        style={{ y: y2, rotate: rotate2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-purple-500/30"
        animate={{
          y: [0, -15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-blue-500/30"
        animate={{
          y: [0, 20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="container mx-auto max-w-6xl relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="flex flex-col items-center mb-6" variants={itemVariants}>
          <motion.span
            className="text-purple-600 font-medium mb-2 flex items-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Zap className="w-4 h-4" />
            COME FUNZIONA SMARTOPS
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-center">
            Il vostro reparto web, senza assunzioni né ritardi
          </h2>
          <motion.div
            className="w-24 h-1 bg-purple-600"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>
        </motion.div>

        <motion.p className="text-center max-w-3xl mx-auto mb-8 text-gray-700 text-lg" variants={itemVariants}>
          Consegniamo siti e landing page pronti alla rivendita in soli 3 giorni. Prezzi fissi, qualità costante, margini garantiti.
        </motion.p>

        <motion.div className="text-center max-w-4xl mx-auto mb-16 text-gray-600 leading-relaxed space-y-4" variants={itemVariants}>
          <p>
            SmartOps è nata per risolvere un problema che ogni agenzia conosce: troppi progetti, troppo poco tempo, e margini che si assottigliano a ogni revisione. Il nostro sistema white-label vi permette di offrire ai vostri clienti siti e landing di alto livello, senza assumere, coordinare o formare nessuno.
          </p>
          <p>
            Ecco come funziona: voi vendete il progetto con il vostro brand. Noi lo realizziamo — silenziosamente, dietro le quinte — e in massimo tre giorni vi consegniamo un lavoro finito, pronto per la consegna al cliente finale. Nessun ritardo, nessuna complessità. Solo risultati misurabili e prevedibili.
          </p>
          <p>
            Le agenzie che ci scelgono lo fanno per una ragione semplice: ogni progetto diventa profitto certo, non una fonte di stress. Con i nostri piani mensili a prezzo fisso potete pianificare i margini fin dal preventivo, senza sorprese o costi extra.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="space-y-16">
            {services
              .filter((service) => service.position === "left")
              .map((service, index) => (
                <ServiceItem
                  key={`left-${index}`}
                  icon={service.icon}
                  secondaryIcon={service.secondaryIcon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="left"
                />
              ))}
          </div>

          <div className="flex justify-center items-center order-first md:order-none mb-8 md:mb-0">
            <motion.div className="relative w-full max-w-xs" variants={itemVariants}>
              <motion.div
                className="rounded-md overflow-hidden shadow-xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                  alt="SmartOps Web Design"
                  className="w-full h-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent flex items-end justify-center p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <motion.button
                    className="bg-white text-purple-900 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Scopri di più <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              </motion.div>
              <motion.div
                className="absolute inset-0 border-4 border-blue-400 rounded-md -m-3 z-[-1]"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              ></motion.div>

              <motion.div
                className="absolute -top-4 -right-8 w-16 h-16 rounded-full bg-purple-500/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                style={{ y: y1 }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-6 -left-10 w-20 h-20 rounded-full bg-blue-500/15"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
                style={{ y: y2 }}
              ></motion.div>

              <motion.div
                className="absolute -top-10 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-purple-600"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-blue-500"
                animate={{
                  y: [0, 10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              ></motion.div>
            </motion.div>
          </div>

          <div className="space-y-16">
            {services
              .filter((service) => service.position === "right")
              .map((service, index) => (
                <ServiceItem
                  key={`right-${index}`}
                  icon={service.icon}
                  secondaryIcon={service.secondaryIcon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="right"
                />
              ))}
          </div>
        </div>

        <motion.div
          className="mt-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex-1">
            <h3 className="text-2xl font-medium mb-2">Pronti a trasformare il vostro business?</h3>
            <p className="text-white/90">Iniziamo insieme il percorso verso il successo digitale.</p>
          </div>
          <motion.button
            className="bg-white hover:bg-gray-100 text-purple-600 px-6 py-3 rounded-lg flex items-center gap-2 font-medium transition-colors shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Inizia ora <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}

interface ServiceItemProps {
  icon: React.ReactNode
  secondaryIcon?: React.ReactNode
  title: string
  description: string
  variants: {
    hidden: { opacity: number; y?: number }
    visible: { opacity: number; y?: number; transition: { duration: number; ease: string } }
  }
  delay: number
  direction: "left" | "right"
}

function ServiceItem({ icon, secondaryIcon, title, description, variants, delay, direction }: ServiceItemProps) {
  return (
    <motion.div
      className="flex flex-col group"
      variants={variants}
      transition={{ delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="flex items-center gap-3 mb-3"
        initial={{ x: direction === "left" ? -20 : 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        <motion.div
          className="text-purple-600 bg-purple-100 p-3 rounded-lg transition-colors duration-300 group-hover:bg-purple-200 relative"
          whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}
        >
          {icon}
          {secondaryIcon}
        </motion.div>
        <h3 className="text-xl font-medium text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
          {title}
        </h3>
      </motion.div>
      <motion.p
        className="text-sm text-gray-600 leading-relaxed pl-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.4 }}
      >
        {description}
      </motion.p>
      <motion.div
        className="mt-3 pl-12 flex items-center text-purple-600 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
      >
        <span className="flex items-center gap-1">
          Scopri di più <ArrowRight className="w-3 h-3" />
        </span>
      </motion.div>
    </motion.div>
  )
}
