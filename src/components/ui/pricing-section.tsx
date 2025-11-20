"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TimelineContent } from "@/components/ui/timeline-animation";
import NumberFlow from "@number-flow/react";
import { Globe, Zap, Headphones, CheckCheck } from "lucide-react";
import { motion } from "motion/react";
import React, { useRef, useState } from "react";

const plans = [
  {
    name: "STANDARD",
    description:
      "Perfetto per agenzie che vogliono risultati affidabili senza assumere personale.",
    price: 1450,
    yearlyPrice: 1087,
    projectsPerMonth: "2 progetti al mese",
    buttonText: "Scegli Standard",
    buttonVariant: "outline" as const,
    capacity: "1 progetto attivo alla volta",
    delivery: "5–6 giorni",
    support: "Email",
    guarantee: false,
    features: [
      { text: "1 progetto attivo alla volta", icon: <Globe size={20} /> },
      { text: "Consegna in 5–6 giorni", icon: <Zap size={20} /> },
      { text: "Supporto via Email", icon: <Headphones size={20} /> },
    ],
    includes: [
      "Landing page ottimizzate per la conversione",
      "Siti business ottimizzati SEO",
      "Funnel completi integrati con CRM",
    ],
  },
  {
    name: "GROWTH",
    description:
      "Ideale per agenzie in crescita che vogliono più capacità senza aumentare i costi fissi.",
    price: 1950,
    yearlyPrice: 1462,
    projectsPerMonth: "4 progetti al mese",
    buttonText: "INIZIA ORA",
    buttonVariant: "default" as const,
    popular: true,
    badge: "Più scelto",
    capacity: "2 progetti attivi alla volta",
    delivery: "2–3 giorni",
    support: "Priority via chat o Zoom",
    guarantee: true,
    features: [
      { text: "2 progetti attivi alla volta", icon: <Globe size={20} /> },
      { text: "Consegna in 2–3 giorni", icon: <Zap size={20} /> },
      { text: "Supporto Priority via chat o Zoom", icon: <Headphones size={20} /> },
    ],
    includes: [
      "Landing page ottimizzate per la conversione",
      "Siti business ottimizzati SEO",
      "Funnel completi integrati con CRM",
      "Miglior rapporto qualità/prezzo",
    ],
  },
  {
    name: "SCALE",
    description:
      "Per agenzie strutturate che gestiscono più brand e progetti contemporaneamente.",
    price: 3950,
    yearlyPrice: 2962,
    projectsPerMonth: "8 progetti al mese",
    buttonText: "Contattaci",
    buttonVariant: "outline" as const,
    capacity: "3 progetti attivi alla volta",
    delivery: "2–3 giorni",
    support: "Zoom o Chat",
    guarantee: true,
    features: [
      { text: "3 progetti attivi alla volta", icon: <Globe size={20} /> },
      { text: "Consegna in 2–3 giorni", icon: <Zap size={20} /> },
      { text: "Supporto via Zoom o Chat", icon: <Headphones size={20} /> },
    ],
    includes: [
      "Landing page ottimizzate per la conversione",
      "Siti business ottimizzati SEO",
      "Funnel completi integrati con CRM",
    ],
  },
];

const PricingSwitch = ({ onSwitch }: { onSwitch: (value: string) => void }) => {
  const [selected, setSelected] = useState("0");

  const handleSwitch = (value: string) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className="flex justify-center">
      <div className="relative z-50 mx-auto flex w-fit rounded-full bg-neutral-50 border border-gray-200 p-1">
        <button
          onClick={() => handleSwitch("0")}
          className={`relative z-10 w-fit sm:h-12 h-10 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors ${
            selected === "0"
              ? "text-white"
              : "text-muted-foreground hover:text-black"
          }`}
        >
          {selected === "0" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 sm:h-12 h-10 w-full rounded-full border-4 shadow-sm shadow-brand-purple border-brand-purple bg-gradient-to-t from-brand-purple via-purple-500 to-purple-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">Mensile</span>
        </button>

        <button
          onClick={() => handleSwitch("1")}
          className={`relative z-10 w-fit sm:h-12 h-8 flex-shrink-0 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors ${
            selected === "1"
              ? "text-white"
              : "text-muted-foreground hover:text-black"
          }`}
        >
          {selected === "1" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 sm:h-12 h-10 w-full rounded-full border-4 shadow-sm shadow-brand-purple border-brand-purple bg-gradient-to-t from-brand-purple via-purple-500 to-purple-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-2">
            Annuale
            <span className="rounded-full bg-purple-50 px-2 py-0.5 text-xs font-medium text-black">
              Risparmia 25%
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const [forceVisible, setForceVisible] = useState(false);
  const pricingRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.15,
        duration: 0.4,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: forceVisible ? 1 : 0,
    },
  };

  const togglePricingPeriod = (value: string) =>
    setIsYearly(Number.parseInt(value) === 1);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setForceVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="px-4 pt-20 min-h-screen mx-auto relative bg-neutral-100" ref={pricingRef} id="pricing">
      <div
        className="absolute top-0 left-[10%] right-[10%] w-[80%] h-full z-0"
        style={{
          backgroundImage: `
        radial-gradient(circle at center, #5B21B6 0%, transparent 70%)
      `,
          opacity: 0.6,
          mixBlendMode: "multiply",
        }}
      />

      <div className="text-center mb-6 max-w-3xl mx-auto">
        <TimelineContent
          as="h2"
          animationNum={0}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="md:text-6xl sm:text-4xl text-3xl font-serif-display font-medium text-gray-900 mb-4"
        >
          Piani pensati per far crescere la tua{" "}
          <TimelineContent
            as="span"
            animationNum={1}
            timelineRef={pricingRef}
            customVariants={revealVariants}
            className="border border-dashed border-brand-purple px-2 py-1 rounded-xl bg-purple-100 capitalize inline-block"
          >
            agenzia
          </TimelineContent>
        </TimelineContent>

        <TimelineContent
          as="p"
          animationNum={2}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="sm:text-base text-sm text-gray-600 sm:w-[70%] w-[80%] mx-auto font-sans-modern"
        >
          Siti pronti da rivendere, risultati immediati e un partner che lavora dietro le quinte per te.
        </TimelineContent>
      </div>

      <TimelineContent
        as="div"
        animationNum={3}
        timelineRef={pricingRef}
        customVariants={revealVariants}
      >
        <PricingSwitch onSwitch={togglePricingPeriod} />
      </TimelineContent>

      <div className="grid md:grid-cols-3 max-w-7xl gap-4 py-6 mx-auto">
        {plans.map((plan, index) => (
          <TimelineContent
            key={plan.name}
            as="div"
            animationNum={4 + index}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <Card
              className={`relative border-neutral-200 ${
                plan.popular ? "ring-2 ring-brand-purple bg-purple-50" : "bg-white "
              }`}
            >
              <CardHeader className="text-left">
                <div className="flex justify-between items-start">
                  <h3 className="text-3xl font-serif-display font-semibold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  {plan.popular && (
                    <div className="">
                      <span className="bg-brand-purple text-white px-3 py-1 rounded-full text-sm font-medium">
                        {plan.badge || "Consigliato"}
                      </span>
                    </div>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-4 font-sans-modern">{plan.description}</p>
                <div>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-semibold text-gray-900">
                      €
                      <NumberFlow
                        value={isYearly ? plan.yearlyPrice : plan.price}
                        className="text-4xl font-semibold"
                      />
                    </span>
                    <span className="text-gray-600 ml-1">
                      /mese
                    </span>
                  </div>
                  <p className="text-base font-medium text-brand-purple mt-2">
                    {plan.projectsPerMonth}
                  </p>
                  {isYearly && (
                    <p className="text-sm text-gray-500 mt-1">fatturati annualmente</p>
                  )}
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <a
                  href={plan.name === "Scale" ? "mailto:smartoperationsweb@gmail.com" : "https://calendly.com/pietrocanazza16/smartops?month=2025-11"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full mb-6 p-4 text-xl text-center rounded-xl transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-t from-brand-purple to-purple-600 shadow-lg shadow-brand-purple/50 border border-purple-400 text-white hover:shadow-xl hover:shadow-brand-purple/60"
                      : "bg-gradient-to-t from-neutral-900 to-neutral-600 shadow-lg shadow-neutral-900 border border-neutral-700 text-white hover:shadow-xl"
                  }`}
                >
                  {plan.buttonText}
                </a>
                <ul className="space-y-2 font-semibold py-5">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="text-neutral-800 grid place-content-center mt-0.5 mr-3">
                        {feature.icon}
                      </span>
                      <span className="text-sm text-gray-600">
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3 pt-4 border-t border-neutral-200">
                  <h4 className="font-medium text-base text-gray-900 mb-3">
                    Incluso:
                  </h4>
                  <ul className="space-y-2 font-semibold">
                    {plan.includes.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="h-6 w-6 bg-purple-50 border border-brand-purple rounded-full grid place-content-center mt-0.5 mr-3">
                          <CheckCheck className="h-4 w-4 text-brand-purple " />
                        </span>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TimelineContent>
        ))}
      </div>

      <div className="text-center py-12 max-w-4xl mx-auto">
        <TimelineContent
          as="div"
          animationNum={7}
          timelineRef={pricingRef}
          customVariants={revealVariants}
        >
          <p className="text-2xl font-serif-display text-gray-900 mb-6 italic">
            "La potenza di un team interno. Senza i costi, senza la complessità."
          </p>
          <p className="text-sm text-gray-600 mb-4 font-sans-modern">
            Progetti singoli disponibili su richiesta
          </p>
          <a
            href="mailto:smartoperationsweb@gmail.com"
            className="text-brand-purple hover:text-purple-700 font-medium underline"
          >
            smartoperationsweb@gmail.com
          </a>
        </TimelineContent>
      </div>

      <div className="text-center pb-20 max-w-2xl mx-auto">
        <TimelineContent
          as="div"
          animationNum={8}
          timelineRef={pricingRef}
          customVariants={revealVariants}
        >
          <h3 className="text-3xl font-serif-display font-bold text-gray-900 mb-4">
            Inizia gratis con il tuo primo sito.
          </h3>
          <p className="text-lg text-gray-600 mb-6 font-sans-modern">
            Scopri la qualità del nostro lavoro senza spendere un euro — il primo progetto è offerto da noi.
          </p>
          <a
            href="https://calendly.com/pietrocanazza16/smartops?month=2025-11"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-purple via-purple-600 to-brand-purple bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-xl font-bold text-xl text-white transition-all duration-500 hover:shadow-2xl hover:shadow-brand-purple/40 hover:scale-105"
          >
            Prenota Chiamata Gratuita →
          </a>
        </TimelineContent>
      </div>
    </div>
  );
}
