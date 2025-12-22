"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AppCTA } from "@/components/app-cta";
import { images } from "@/lib/images";
import { Zap, Shield, Leaf, CheckCircle, ArrowRight } from "lucide-react";

interface LandingPageProps {
  lang: string;
  dictionary: Dictionary;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const stagger = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.2 },
};

export function LandingPage({ lang, dictionary }: LandingPageProps) {
  const targetRef = useRef(null);
  const router = useRouter();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60 filter brightness-50"
          >
            <source src={images.heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/30" />
        </div>

        <div className="container relative z-10 px-4 md:px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              {dictionary.hero.title}
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-2xl text-gray-200">
              {dictionary.hero.subtitle}
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center pt-8">
              <Button
                size="lg"
                className="text-lg px-8"
                onClick={() => router.push(`/${lang}/contact`)}
              >
                {dictionary.hero.cta_primary}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-white/10 border-white/20 hover:bg-white/20 text-white"
                onClick={() => router.push(`/${lang}/about`)}
              >
                {dictionary.common.learn_more}
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-1 h-12 rounded-full border-2 border-white/30 flex justify-center p-1">
            <div className="w-1 h-3 bg-white rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-16 bg-black text-white overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 relative h-[400px] rounded-2xl overflow-hidden"
            >
              <Image
                src={images.emptyPhone}
                alt="Low Battery Phone"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 space-y-6"
            >
              <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-400">
                0% de batterie ? Plus&#39;jamais.
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Ne laissez pas une batterie vide gâcher votre journée. Avec le
                réseau Dr. Charge, l&#39;énergie est toujours à portée de main.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {[
              {
                icon: Zap,
                title: dictionary.services.items.station.title,
                desc: "Ultra-fast charging up to 100W.",
              },
              {
                icon: Shield,
                title: "Sécurité Maximale",
                desc: "Protection avancée pour vos appareils.",
              }, // Todo: add to dictionary
              {
                icon: Leaf,
                title: "Durable",
                desc: "Écosystème énergétique vert et responsable.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group p-8 rounded-2xl bg-secondary/50 hover:bg-secondary transition-colors border border-border/50"
              >
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CL19 PRODUCT FOCUS */}
      <section className="py-24 overflow-hidden relative">
        <div className="absolute inset-0 bg-secondary/30" />
        <div className="container px-4 md:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              {...fadeInUp}
              className="order-2 lg:order-1 relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src={images.powerbanks}
                alt="CL19 Station"
                width={800}
                height={600}
                className="object-cover w-full h-[500px] hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 text-white">
                <h3 className="text-2xl font-bold">Station CL19</h3>
                <p>L&apos;avenir de la recharge publique.</p>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="order-1 lg:order-2 space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                {dictionary.services.items.station.title}
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {dictionary.services.items.station.description}
              </p>

              <ul className="space-y-4">
                {[
                  "Recharge 25% en 15 min",
                  "Compatible Tous Appareils",
                  "Écran Tactile HD",
                ].map((feat, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-3 text-lg font-medium"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <CheckCircle className="text-primary h-6 w-6" />
                    {feat}
                  </motion.li>
                ))}
              </ul>

              <Button
                size="lg"
                className="mt-4"
                onClick={() => router.push(`/${lang}/services`)}
              >
                {dictionary.common.view_all}{" "}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MOBILE TRUCK PARALLAX */}
      <section
        ref={targetRef}
        className="py-24 min-h-[80vh] flex items-center relative overflow-hidden"
      >
        <motion.div style={{ scale, opacity }} className="absolute inset-0 z-0">
          <Image
            src={images.mobileTruck}
            alt="Mobile Truck"
            fill
            className="object-cover brightness-50"
          />
        </motion.div>

        <div className="container relative z-10 px-4 md:px-6 text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              {dictionary.services.items.truck.title}
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-10">
              {dictionary.services.items.truck.description}
            </p>
            <Button
              size="lg"
              variant="default"
              className="text-lg h-14 px-10"
              onClick={() => router.push(`/${lang}/contact`)}
            >
              {dictionary.common.contact}
            </Button>
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-24 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
            {[
              { val: "15 min", label: dictionary.stats.charge_speed },
              { val: "100W", label: dictionary.stats.power },
              { val: "150m", label: dictionary.stats.connectivity },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
                className="p-6"
              >
                <div className="text-5xl md:text-6xl font-black mb-2 tracking-tighter">
                  {stat.val}
                </div>
                <div className="text-lg opacity-80 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* APP SECTION */}
      <AppCTA dictionary={dictionary} />
    </div>
  );
}
