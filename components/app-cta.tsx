"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/images";
import { Smartphone } from "lucide-react";

interface AppCTAProps {
  dictionary: Dictionary;
}

export function AppCTA({ dictionary }: AppCTAProps) {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              {dictionary.app_section.title}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {dictionary.app_section.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {dictionary.app_section.features.map(
                (feature: string, i: number) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-border/50"
                  >
                    <Smartphone className="text-primary h-5 w-5" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ),
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="h-14 px-6 bg-black text-white hover:bg-gray-800 flex items-center gap-3 rounded-xl">
                <div className="text-left">
                  <div className="text-[10px] uppercase">Available on the</div>
                  <div className="text-lg font-bold leading-none">
                    App Store
                  </div>
                </div>
              </Button>
              <Button className="h-14 px-6 bg-black text-white hover:bg-gray-800 flex items-center gap-3 rounded-xl">
                <div className="text-left">
                  <div className="text-[10px] uppercase">Get it on</div>
                  <div className="text-lg font-bold leading-none">
                    Google Play
                  </div>
                </div>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[600px] flex items-center justify-center p-8"
          >
            {/* Phone Mockup with Image */}
            <div className="relative w-[300px] h-[600px] bg-black rounded-[40px] px-3 py-4 border-8 border-gray-900 shadow-2xl shadow-primary/20 rotate-[-5deg] hover:rotate-0 transition-transform duration-500 z-10">
              <div className="absolute top-0 w-32 h-6 bg-black left-1/2 -translate-x-1/2 rounded-b-xl z-20"></div>
              <div className="h-full w-full bg-white rounded-[32px] overflow-hidden relative">
                <Image
                  src={images.appMobile}
                  alt="Dr Charge App"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* Background Deco */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/20 blur-[100px] rounded-full z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
