"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "@/lib/images";
import { AppCTA } from "@/components/app-cta";
import { CheckCircle, Zap, Battery, Truck } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { InteractiveCard } from "@/components/ui/interactive-card";
import { TechBadge } from "@/components/ui/tech-badge";
import { TYPOGRAPHY, SPACING } from "@/lib/design-tokens";

interface ServicesPageProps {
  dictionary: Dictionary;
}

export function ServicesPage({ dictionary }: ServicesPageProps) {
  const services: Array<{
    key: "station" | "powerbank" | "truck";
    image: string;
    features: string[];
    icon: any;
    gradient: string;
  }> = [
    {
      key: "station",
      image: images.powerbanks,
      features: ["Sécurisé", "Rapide", "Écran HD"],
      icon: Zap,
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      key: "powerbank",
      image: images.lifestyle,
      features: ["Mobile", "Disponible 24/7", "Compatible"],
      icon: Battery,
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      key: "truck",
      image: images.mobileTruck,
      features: ["Événementiel", "Urgence", "Grande capacité"],
      icon: Truck,
      gradient: "from-teal-500 to-green-600",
    },
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <ScrollReveal className="text-center mb-20">
          <TechBadge variant="eco" glow className="mb-6">
            Our Solutions
          </TechBadge>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`${TYPOGRAPHY.h1} mb-6 text-gradient-eco-tech`}
          >
            {dictionary.services.title}
          </motion.h1>
          <p className={`${TYPOGRAPHY.subtitle} text-muted-foreground max-w-3xl mx-auto`}>
            Innovative charging solutions for every need
          </p>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid gap-20">
          {services.map((service, index) => {
            const data = dictionary.services.items[service.key];
            const Icon = service.icon;
            return (
              <ScrollReveal
                key={service.key}
                delay={index * 0.1}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <div
                  className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center`}
                >
                  {/* Image */}
                  <div className="flex-1 w-full">
                    <InteractiveCard>
                      <div className="relative w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl group">
                        <Image
                          src={service.image}
                          alt={data.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        
                        {/* Floating Icon Badge */}
                        <motion.div
                          className="absolute top-6 right-6"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: 0.3, type: "spring" }}
                          viewport={{ once: true }}
                        >
                          <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-2xl`}>
                            <Icon className="h-8 w-8 text-white" />
                          </div>
                        </motion.div>
                      </div>
                    </InteractiveCard>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-8">
                    <div>
                      <h2 className={`${TYPOGRAPHY.h2} mb-4 text-gradient-eco`}>
                        {data.title}
                      </h2>
                      <p className={`${TYPOGRAPHY.bodyLarge} text-muted-foreground leading-relaxed`}>
                        {data.description}
                      </p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-4">
                      {service.features.map((feat, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + i * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-4 group/item"
                        >
                          <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform`}>
                            <CheckCircle className="h-6 w-6 text-white" />
                          </div>
                          <span className="text-lg font-semibold text-foreground">
                            {feat}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* App CTA */}
      <div className="mt-24">
        <AppCTA dictionary={dictionary} />
      </div>
    </div>
  );
}
