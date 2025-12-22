"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "@/lib/images";

import { AppCTA } from "@/components/app-cta";
import { CheckCircle } from "lucide-react";

interface ServicesPageProps {
  dictionary: Dictionary;
}

export function ServicesPage({ dictionary }: ServicesPageProps) {
  const services = [
    {
      key: "station",
      image: images.powerbanks, // Using powerbanks image for station
      features: ["Sécurisé", "Rapide", "Écran HD"],
    },
    {
      key: "powerbank",
      image: images.lifestyle, // Lifestyle for powerbank dispenser context
      features: ["Mobile", "Disponible 24/7", "Compatible"],
    },
    {
      key: "truck",
      image: images.mobileTruck,
      features: ["Événementiel", "Urgence", "Grande capacité"],
    },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container px-4 md:px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-12 text-center"
        >
          {dictionary.services.title}
        </motion.h1>

        <div className="grid gap-16">
          {services.map((service, index) => {
            const data = dictionary.services.items[service.key];
            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center group`}
              >
                <div className="flex-1 relative w-full h-[400px] rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src={service.image}
                    alt={data.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>

                <div className="flex-1 space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    {data.title}
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {data.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feat, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 font-medium"
                      >
                        <CheckCircle className="h-5 w-5 text-primary" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <AppCTA dictionary={dictionary} />
    </div>
  );
}
