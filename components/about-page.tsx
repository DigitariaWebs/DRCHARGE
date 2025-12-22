"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import Image from "next/image";
import { images } from "@/lib/images";

interface AboutPageProps {
  dictionary: Dictionary;
}

export function AboutPage({ dictionary }: AboutPageProps) {
  const team = [
    { name: "Patrick Stevenson Dubois", role: "Fondateur, PDG" },
    { name: "Matt Perez", role: "Fondateur" },
    { name: "Christopher Perrault", role: "Développeur" },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {dictionary.about.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            {dictionary.about.mission}
          </p>

          <div className="relative w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden mb-16 shadow-2xl">
            <Image
              src={images.sustainability}
              alt="Dr Charge Sustainability"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h3 className="text-white text-3xl font-bold">
                Énergie Verte & Durable
              </h3>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Innovation & Design</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nos unités mobiles et stations sont conçues par les meilleurs
              ingénieurs pour allier esthétique et performance. Le design du
              camion mobile permet une intervention rapide et efficace partout.
            </p>
          </div>
          <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src={images.mobileTruckDetail}
              alt="Truck Design Detail"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-secondary/30 border border-border/50 text-center hover:bg-secondary/50 transition-colors"
            >
              <div className="h-24 w-24 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <User className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-muted-foreground mt-2">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
