"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { TechBadge } from "@/components/ui/tech-badge";
import { TYPOGRAPHY } from "@/lib/design-tokens";

interface FAQPageProps {
  dictionary: Dictionary;
}

export function FAQPage({ dictionary }: FAQPageProps) {
  const faqs = [
    {
      question: "LED état charge",
      answer:
        "L'indicateur LED change de couleur selon l'état : Rouge (Vide), Orange (En charge), Vert (Plein).",
      category: "Usage",
    },
    {
      question: "Temps de charge",
      answer:
        "Nos stations rechargent jusqu'à 25% en 15 minutes grâce à la technologie Fast Charge.",
      category: "Performance",
    },
    {
      question: "Sécurité",
      answer:
        "Chaque casier est sécurisé et surveillé. Vos données et appareils sont protégés.",
      category: "Security",
    },
    {
      question: "Données",
      answer:
        "Nous respectons votre vie privée. Aucune donnée personnelle n'est stockée sans consentement.",
      category: "Privacy",
    },
    {
      question: "Livraison & installation",
      answer:
        "Nous livrons et installons partout au Québec et au Canada sous 72h.",
      category: "Service",
    },
    {
      question: "Personnalisation",
      answer:
        "Les stations peuvent être entièrement personnalisées aux couleurs de votre marque.",
      category: "Customization",
    },
    {
      question: "Partenariats & médias",
      answer:
        "Contactez notre équipe presse pour toute demande de partenariat.",
      category: "Business",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-[#F9F9F9]">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <h1 className={`${TYPOGRAPHY.h1} mb-6 text-gray-900`}>
            {dictionary.faq.title}
          </h1>
          <p
            className={`${TYPOGRAPHY.subtitle} text-gray-600 max-w-2xl mx-auto`}
          >
            Find answers to common questions about our charging solutions
          </p>
        </ScrollReveal>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <motion.div
                className="border-2 border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg hover:border-[#38A169]/50 transition-all"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left group"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <motion.div
                      className={`h-12 w-12 rounded-xl flex items-center justify-center transition-all ${
                        openIndex === i
                          ? "bg-gradient-to-br from-[#38A169] to-[#1A4B3A]"
                          : "bg-[#38A169]/10 group-hover:bg-[#38A169]/20"
                      }`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <HelpCircle
                        className={`h-6 w-6 ${
                          openIndex === i ? "text-white" : "text-[#38A169]"
                        }`}
                      />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-semibold text-[#38A169] uppercase tracking-wider">
                          {faq.category}
                        </span>
                      </div>
                      <span className="font-bold text-lg text-gray-900">
                        {faq.question}
                      </span>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {openIndex === i ? (
                      <Minus className="text-[#38A169] h-6 w-6" />
                    ) : (
                      <Plus className="text-gray-400 h-6 w-6 group-hover:text-[#38A169] transition-colors" />
                    )}
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pl-[88px]">
                        <div className="p-4 bg-[#38A169]/10 rounded-xl border-l-4 border-[#38A169]">
                          <p className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Contact CTA */}
        <ScrollReveal className="mt-16">
          <motion.div
            className="p-8 rounded-xl bg-white border-2 border-gray-200 shadow-sm text-center"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className={`${TYPOGRAPHY.h3} mb-4 text-gray-900`}>
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our team is here to help you with any inquiries
            </p>
            <motion.button
              className="px-8 py-4 bg-[#38A169] hover:bg-[#38A169]/90 text-white rounded-lg font-semibold shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Support
            </motion.button>
          </motion.div>
        </ScrollReveal>
      </div>
    </div>
  );
}
