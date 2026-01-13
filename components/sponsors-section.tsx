"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Handshake, Award } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { InteractiveCard } from "@/components/ui/interactive-card";
import { TYPOGRAPHY, SPACING } from "@/lib/design-tokens";

interface SponsorsSectionProps {
    dictionary: Dictionary;
}

export function SponsorsSection({ dictionary }: SponsorsSectionProps) {
    // Sponsors with actual logos and placeholders
    const sponsors = [
        { id: 1, name: "Salon A", logo: "/salonA.png", hasLogo: true },
        { id: 2, icon: Handshake, hasLogo: false },
        { id: 3, icon: Award, hasLogo: false },
        { id: 4, icon: Users, hasLogo: false },
    ];

    return (
        <section className="py-20 bg-[#F9F9F9]">
            <div className={`container ${SPACING.containerPadding} mx-auto max-w-7xl`}>
                {/* Header */}
                <ScrollReveal className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 rounded-full bg-[#38A169]/10 text-[#38A169] font-semibold text-sm mb-6"
                    >
                        {dictionary.sponsors.badge}
                    </motion.div>
                    <h2 className={`${TYPOGRAPHY.h2} mb-4 text-gray-900`}>
                        {dictionary.sponsors.title}
                    </h2>
                    <p className={`${TYPOGRAPHY.subtitle} text-gray-600 max-w-2xl mx-auto`}>
                        {dictionary.sponsors.subtitle}
                    </p>
                </ScrollReveal>

                {/* Sponsors Grid */}
                <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ${SPACING.gap.medium}`}>
                    {sponsors.map((sponsor, i) => (
                        <ScrollReveal key={sponsor.id} delay={i * 0.1}>
                            <InteractiveCard>
                                <motion.div
                                    className="relative bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-center h-56 group hover:shadow-lg transition-all"
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {sponsor.hasLogo ? (
                                        // Actual Partner Logo
                                        <div className="relative w-full h-full flex items-center justify-center">
                                            <Image
                                                src={sponsor.logo!}
                                                alt={sponsor.name!}
                                                fill
                                                className="object-contain transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>
                                    ) : (
                                        // Placeholder Icon
                                        <>
                                            <motion.div
                                                className="h-16 w-16 rounded-full bg-gradient-to-br from-[#38A169]/20 to-[#1A4B3A]/20 flex items-center justify-center"
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                {sponsor.icon && <sponsor.icon className="h-8 w-8 text-[#38A169]" />}
                                            </motion.div>

                                            {/* Coming Soon Badge */}
                                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <span className="text-xs text-gray-500 font-medium whitespace-nowrap">
                                                    {dictionary.sponsors.coming_soon}
                                                </span>
                                            </div>
                                        </>
                                    )}
                                </motion.div>
                            </InteractiveCard>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Optional: Add a CTA or note */}
                <ScrollReveal className="text-center mt-12">
                    <p className="text-gray-500 text-sm">
                        {dictionary.sponsors.coming_soon}
                    </p>
                </ScrollReveal>
            </div>
        </section>
    );
}
