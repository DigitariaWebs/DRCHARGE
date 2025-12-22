"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQPageProps {
  dictionary: Dictionary;
}

export function FAQPage({ dictionary }: FAQPageProps) {
  const faqs = [
    {
      question: "LED état charge",
      answer:
        "L'indicateur LED change de couleur selon l'état : Rouge (Vide), Orange (En charge), Vert (Plein).",
    },
    {
      question: "Temps de charge",
      answer:
        "Nos stations rechargent jusqu'à 25% en 15 minutes grâce à la technologie Fast Charge.",
    },
    {
      question: "Sécurité",
      answer:
        "Chaque casier est sécurisé et surveillé. Vos données et appareils sont protégés.",
    },
    {
      question: "Données",
      answer:
        "Nous respectons votre vie privée. Aucune donnée personnelle n'est stockée sans consentement.",
    },
    {
      question: "Livraison & installation",
      answer:
        "Nous livrons et installons partout au Québec et au Canada sous 72h.",
    },
    {
      question: "Personnalisation",
      answer:
        "Les stations peuvent être entièrement personnalisées aux couleurs de votre marque.",
    },
    {
      question: "Partenariats & médias",
      answer:
        "Contactez notre équipe presse pour toute demande de partenariat.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="pt-24 pb-16">
      <div className="container px-4 md:px-6 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          {dictionary.faq.title}
        </h1>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="border border-border/50 rounded-xl overflow-hidden bg-card"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/30 transition-colors"
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                {openIndex === i ? (
                  <Minus className="text-primary h-5 w-5" />
                ) : (
                  <Plus className="text-muted-foreground h-5 w-5" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
