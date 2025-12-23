"use client";

import { motion } from "framer-motion";
import { User, Leaf, Zap, Target } from "lucide-react";
import Image from "next/image";
import { images } from "@/lib/images";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { InteractiveCard } from "@/components/ui/interactive-card";
import { TechBadge } from "@/components/ui/tech-badge";
import { FloatingElement } from "@/components/ui/floating-element";
import { TYPOGRAPHY, SPACING } from "@/lib/design-tokens";

interface AboutPageProps {
  dictionary: Dictionary;
}

export function AboutPage({ dictionary }: AboutPageProps) {
  const team = [
    { name: "Patrick Stevenson Dubois", role: "Fondateur, PDG" },
    { name: "Matt Perez", role: "Fondateur" },
    { name: "Christopher Perrault", role: "Développeur" },
  ];

  const values = [
    {
      icon: Leaf,
      title: "Sustainability",
      description: "100% renewable energy powering all our solutions",
      gradient: "from-emerald-500 to-green-600",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Cutting-edge technology for fast, reliable charging",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      icon: Target,
      title: "Accessibility",
      description: "Making power available everywhere, anytime",
      gradient: "from-teal-500 to-emerald-600",
    },
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <ScrollReveal className="text-center max-w-4xl mx-auto mb-20">
          <TechBadge variant="eco" glow className="mb-6">
            Who We Are
          </TechBadge>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`${TYPOGRAPHY.h1} mb-6 text-gradient-eco-tech`}
          >
            {dictionary.about.title}
          </motion.h1>
          <p className={`${TYPOGRAPHY.bodyLarge} text-muted-foreground`}>
            {dictionary.about.mission}
          </p>
        </ScrollReveal>

        {/* Hero Image */}
        <ScrollReveal className="mb-24">
          <InteractiveCard>
            <div className="relative w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src={images.sustainability}
                alt="Dr Charge Sustainability"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-900/40 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <h3 className="text-white text-4xl md:text-6xl font-bold mb-4">
                    Énergie Verte & Durable
                  </h3>
                  <p className="text-emerald-100 text-xl">Powering a greener future</p>
                </motion.div>
              </div>
            </div>
          </InteractiveCard>
        </ScrollReveal>

        {/* Values Section */}
        <ScrollReveal className="mb-24">
          <div className="text-center mb-12">
            <h2 className={`${TYPOGRAPHY.h2} mb-4 text-gradient-eco`}>Our Values</h2>
            <p className={`${TYPOGRAPHY.subtitle} text-muted-foreground max-w-2xl mx-auto`}>
              The principles that guide everything we do
            </p>
          </div>
          <div className={`grid grid-cols-1 md:grid-cols-3 ${SPACING.gap.medium}`}>
            {values.map((value, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <InteractiveCard>
                  <motion.div
                    className="p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-emerald-200/50 hover:border-emerald-300 transition-all h-full"
                    whileHover={{ y: -8 }}
                  >
                    <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className={`${TYPOGRAPHY.h3} mb-4`}>{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                </InteractiveCard>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        {/* Innovation Section */}
        <ScrollReveal className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <TechBadge variant="tech">Innovation</TechBadge>
              <h2 className={`${TYPOGRAPHY.h2} text-gradient-tech`}>
                Innovation & Design
              </h2>
              <p className={`${TYPOGRAPHY.bodyLarge} text-muted-foreground leading-relaxed`}>
                Nos unités mobiles et stations sont conçues par les meilleurs
                ingénieurs pour allier esthétique et performance. Le design du
                camion mobile permet une intervention rapide et efficace partout.
              </p>
            </div>
            <InteractiveCard>
              <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src={images.mobileTruckDetail}
                  alt="Truck Design Detail"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
              </div>
            </InteractiveCard>
          </div>
        </ScrollReveal>

        {/* Team Section */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className={`${TYPOGRAPHY.h2} mb-4`}>Our Team</h2>
            <p className={`${TYPOGRAPHY.subtitle} text-muted-foreground max-w-2xl mx-auto`}>
              Meet the people powering the future
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <InteractiveCard>
                  <motion.div
                    className="p-10 rounded-3xl bg-white/90 backdrop-blur-sm border border-emerald-200/50 text-center hover:border-emerald-300 transition-all"
                    whileHover={{ y: -8 }}
                  >
                    {/* Team member photo would go here */}
                    <div className="relative h-32 w-32 mx-auto mb-6">
                      <motion.div
                        className="h-full w-full bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-xl overflow-hidden"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Placeholder for actual team photos */}
                        <User className="h-16 w-16 text-white" />
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-emerald-600 font-medium">{member.role}</p>
                  </motion.div>
                </InteractiveCard>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
