"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AppCTA } from "@/components/app-cta";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionBadge } from "@/components/ui/section-badge";
import { SplitLayout } from "@/components/ui/split-layout";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { CounterAnimation } from "@/components/ui/counter-animation";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { InteractiveCard } from "@/components/ui/interactive-card";
import { FloatingElement } from "@/components/ui/floating-element";
import { TechBadge } from "@/components/ui/tech-badge";
import { EnergyParticles } from "@/components/ui/energy-particles";
import { CursorGlow } from "@/components/ui/cursor-glow";
import { SustainabilityDashboard } from "@/components/sustainability-dashboard";
import { images } from "@/lib/images";
import { Zap, Shield, Leaf, CheckCircle, ArrowRight, Battery, Sparkles } from "lucide-react";
import {
  SPACING,
  TYPOGRAPHY,
  BUTTON_STYLES,
  CARD_STYLES,
  IMAGE_STYLES,
  ANIMATIONS,
  GRADIENT_OVERLAYS,
} from "@/lib/design-tokens";

interface LandingPageProps {
  lang: string;
  dictionary: Dictionary;
}

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
      {/* Cursor Glow Effect */}
      <CursorGlow />
      
      {/* HERO SECTION - Enhanced with Particles */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-70 filter brightness-[0.4]"
          >
            <source src={images.heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-emerald-900/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 via-transparent to-blue-600/20" />
        </div>

        {/* Energy Particles */}
        <EnergyParticles count={40} className="z-[1]" />

        {/* Floating Geometric Shapes */}
        <FloatingElement className="absolute top-20 left-10 z-[1]" duration={4} yOffset={15}>
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-sm border border-emerald-500/30" />
        </FloatingElement>
        <FloatingElement className="absolute top-40 right-20 z-[1]" duration={5} delay={1} yOffset={20}>
          <div className="w-16 h-16 rotate-45 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30" />
        </FloatingElement>
        <FloatingElement className="absolute bottom-40 left-1/4 z-[1]" duration={6} delay={2} yOffset={12}>
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500/20 to-emerald-500/20 backdrop-blur-sm border border-teal-500/30" />
        </FloatingElement>

        <div className={`container relative z-10 ${SPACING.containerPadding} text-center text-white`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block"
            >
              <h1 className={`${TYPOGRAPHY.h1Hero} text-gradient-eco-tech drop-shadow-2xl`}>
                {dictionary.hero.title}
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className={`max-w-3xl mx-auto ${TYPOGRAPHY.bodyLarge} text-gray-100`}
            >
              {dictionary.hero.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className={`flex flex-col md:flex-row ${SPACING.gap.small} justify-center pt-8`}
            >
              <MagneticButton
                className={`${BUTTON_STYLES.large} bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-2xl shadow-emerald-500/50 hover:shadow-emerald-500/60 rounded-xl`}
                onClick={() => router.push(`/${lang}/contact`)}
              >
                <span className="flex items-center">
                  {dictionary.hero.cta_primary}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </MagneticButton>
              <MagneticButton
                className={`${BUTTON_STYLES.large} bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 text-white hover:border-white/50 rounded-xl`}
                onClick={() => router.push(`/${lang}/about`)}
              >
                <span className="flex items-center">
                  {dictionary.common.learn_more}
                </span>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-1 h-16 rounded-full border-2 border-emerald-400/40 backdrop-blur-sm flex justify-center p-1 bg-emerald-500/10 glow-eco">
            <motion.div
              className="w-1 h-4 bg-gradient-to-b from-emerald-400 to-teal-500 rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.2 }}
            />
          </div>
        </motion.div>
      </section>

      {/* PROBLEM SECTION - Enhanced "The Challenge" */}
      <SectionWrapper variant="dark" padding="standard">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(5,150,105,0.15),transparent_50%)]" />
        <div className={`container ${SPACING.containerPadding} relative z-10`}>
          <SplitLayout
            imageSide="left"
            image={
              <ScrollReveal direction="left">
                <div className={`w-full relative h-[450px] ${IMAGE_STYLES.rounded} ${IMAGE_STYLES.container} group`}>
                  <Image
                    src={images.emptyPhone}
                    alt="Low Battery Phone"
                    fill
                    className={`object-cover ${IMAGE_STYLES.hoverLarge}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/60 via-emerald-500/20 to-transparent opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-transparent" />
                  
                  {/* Pulsing Battery Icon */}
                  <motion.div
                    className="absolute top-4 right-4"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [1, 0.8, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <TechBadge variant="eco" glow>
                      <Battery className="h-4 w-4 mr-1" />
                      <span>Low Battery</span>
                    </TechBadge>
                  </motion.div>

                  {/* Ripple Effect on Hover */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl border-4 border-emerald-500/50"
                    initial={{ scale: 1, opacity: 0 }}
                    whileHover={{ scale: 1.05, opacity: [0, 0.5, 0] }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </ScrollReveal>
            }
            content={
              <ScrollReveal direction="right">
                <div className="space-y-8">
                  <TechBadge variant="eco" glow className="mb-4">
                    {dictionary.challenge.badge}
                  </TechBadge>
                  <motion.h2
                    className={`${TYPOGRAPHY.h2} text-gradient-eco-tech`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    {dictionary.challenge.title}
                  </motion.h2>
                  <p className={`${TYPOGRAPHY.subtitle} text-gray-300`}>
                    {dictionary.challenge.subtitle}
                  </p>
                  <div className={`flex items-center ${SPACING.gap.small} pt-4`}>
                    <div className="flex -space-x-2">
                      <motion.div
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 border-2 border-gray-900 flex items-center justify-center shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Zap className="h-6 w-6 text-white" />
                      </motion.div>
                      <motion.div
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 border-2 border-gray-900 flex items-center justify-center shadow-lg"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                      >
                        <CheckCircle className="h-6 w-6 text-white" />
                      </motion.div>
                    </div>
                    <span className="text-sm text-gray-400">{dictionary.challenge.stat_label}</span>
                  </div>
                </div>
              </ScrollReveal>
            }
          />
        </div>
      </SectionWrapper>

      {/* TECHNOLOGY PILLARS SECTION - Enhanced Interactive Cards */}
      <SectionWrapper variant="light" padding="standard">
        <div className={`absolute inset-0 ${GRADIENT_OVERLAYS.meshGradient}`} />
        <div className={`container ${SPACING.containerPadding} relative z-10`}>
          <ScrollReveal className="text-center mb-16">
            <TechBadge variant="tech" glow className="mb-6">
              {dictionary.tech_pillars.badge}
            </TechBadge>
            <h2 className={`${TYPOGRAPHY.h2} mb-4`}>
              {dictionary.tech_pillars.title}
            </h2>
            <p className={`${TYPOGRAPHY.subtitle} text-muted-foreground max-w-3xl mx-auto`}>
              {dictionary.tech_pillars.subtitle}
            </p>
          </ScrollReveal>
          
          <div className={`grid grid-cols-1 md:grid-cols-3 ${SPACING.gap.medium}`}>
            {[
              {
                icon: Zap,
                title: dictionary.tech_pillars.items.speed.title,
                desc: dictionary.tech_pillars.items.speed.description,
                detail: dictionary.tech_pillars.items.speed.detail,
                gradient: "from-blue-500 to-cyan-600",
                iconBg: "from-blue-500/20 to-cyan-500/20",
                borderColor: "border-blue-500/30",
              },
              {
                icon: Shield,
                title: dictionary.tech_pillars.items.security.title,
                desc: dictionary.tech_pillars.items.security.description,
                detail: dictionary.tech_pillars.items.security.detail,
                gradient: "from-emerald-500 to-teal-600",
                iconBg: "from-emerald-500/20 to-teal-500/20",
                borderColor: "border-emerald-500/30",
              },
              {
                icon: Leaf,
                title: dictionary.tech_pillars.items.sustainability.title,
                desc: dictionary.tech_pillars.items.sustainability.description,
                detail: dictionary.tech_pillars.items.sustainability.detail,
                gradient: "from-green-500 to-emerald-600",
                iconBg: "from-green-500/20 to-emerald-500/20",
                borderColor: "border-green-500/30",
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <InteractiveCard className="h-full">
                  <motion.div
                    className={`group relative ${SPACING.cardPaddingLarge} ${CARD_STYLES.interactive} h-full flex flex-col`}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Gradient Border Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.iconBg} ${IMAGE_STYLES.rounded} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Icon with Glow */}
                      <motion.div
                        className={`h-20 w-20 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <item.icon className="h-10 w-10 text-white" />
                      </motion.div>

                      {/* Title */}
                      <h3 className={`${TYPOGRAPHY.h3} mb-4 text-foreground group-hover:text-gradient-eco-tech transition-all`}>
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className={`text-muted-foreground ${TYPOGRAPHY.body} mb-6 flex-grow`}>
                        {item.desc}
                      </p>

                      {/* Detail Badge */}
                      <motion.div
                        className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${item.gradient} text-white text-sm font-semibold shadow-lg mt-auto`}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Sparkles className="h-4 w-4 mr-2" />
                        {item.detail}
                      </motion.div>
                    </div>
                  </motion.div>
                </InteractiveCard>
              </ScrollReveal>
            ))}
          </div>

          {/* Connecting Lines Visual (Optional Enhancement) */}
          <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-px">
            <motion.div
              className="h-full bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      </SectionWrapper>

      {/* INNOVATION SPOTLIGHT - CL19 with 3D Effects */}
      <SectionWrapper variant="light" padding="standard" className="bg-gradient-to-br from-secondary/50 via-secondary/40 to-background">
        <div className={`absolute inset-0 ${GRADIENT_OVERLAYS.radialTech}`} />
        <div className={`container ${SPACING.containerPadding} relative z-10`}>
          <SplitLayout
            imageSide="left"
            image={
              <ScrollReveal direction="left">
                <InteractiveCard tiltStrength={5}>
                  <div className={`relative ${IMAGE_STYLES.rounded} ${IMAGE_STYLES.container} shadow-2xl group`}>
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-emerald-500/30 rounded-3xl blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <div className="relative">
                      <Image
                        src={images.powerbanks}
                        alt="CL19 Station"
                        width={800}
                        height={600}
                        className={`object-cover w-full h-[550px] ${IMAGE_STYLES.hoverLarge} ${IMAGE_STYLES.rounded}`}
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-3xl" />
                      
                      {/* Info Card */}
                      <motion.div
                        className={`absolute bottom-0 left-0 right-0 ${SPACING.cardPadding} rounded-b-3xl backdrop-blur-md`}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <div className={`flex items-center ${SPACING.gap.small} mb-3`}>
                          <motion.div
                            className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [1, 0.7, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                            }}
                          />
                          <span className="text-sm font-semibold text-emerald-400">Available Now</span>
                        </div>
                        <h3 className={`${TYPOGRAPHY.h3} mb-2 text-white`}>Station CL19</h3>
                        <p className="text-gray-300">The future of public charging.</p>
                      </motion.div>

                      {/* Feature Hotspots */}
                      <motion.div
                        className="absolute top-1/4 right-8"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                        viewport={{ once: true }}
                      >
                        <div className="relative">
                          <motion.div
                            className="w-8 h-8 rounded-full bg-blue-500/80 backdrop-blur-sm border-2 border-white/50 cursor-pointer"
                            animate={{
                              boxShadow: [
                                "0 0 0 0 rgba(59, 130, 246, 0.7)",
                                "0 0 0 10px rgba(59, 130, 246, 0)",
                              ],
                            }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </InteractiveCard>
              </ScrollReveal>
            }
            content={
              <ScrollReveal direction="right">
                <div className="space-y-10">
                  <div>
                    <TechBadge variant="tech" glow className="mb-6">
                      {dictionary.innovation.badge}
                    </TechBadge>
                    <h2 className={`${TYPOGRAPHY.h2} mb-6 text-gradient-tech`}>
                      {dictionary.innovation.title}
                    </h2>
                    <p className={`${TYPOGRAPHY.subtitle} text-muted-foreground`}>
                      {dictionary.innovation.subtitle}
                    </p>
                  </div>

                  <ul className="space-y-5">
                    {dictionary.innovation.features.map((feat, i) => (
                      <motion.li
                        key={i}
                        className={`flex items-center ${SPACING.gap.small} text-lg font-medium group/item`}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center group-hover/item:from-blue-500/30 group-hover/item:to-cyan-500/30 transition-all"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <CheckCircle className="text-blue-600 h-6 w-6" />
                        </motion.div>
                        <span className="text-foreground">{feat}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <MagneticButton
                    className={`mt-6 ${BUTTON_STYLES.large} bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/40 rounded-xl`}
                    onClick={() => router.push(`/${lang}/services`)}
                  >
                    <span className="flex items-center">
                      {dictionary.innovation.cta}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </span>
                  </MagneticButton>
                </div>
              </ScrollReveal>
            }
          />
        </div>
      </SectionWrapper>

      {/* MOBILE TRUCK PARALLAX - Enhanced with Motion */}
      <section
        ref={targetRef}
        className={`${SPACING.sectionPadding} min-h-[90vh] flex items-center relative overflow-hidden`}
      >
        <motion.div style={{ scale, opacity }} className="absolute inset-0 z-0">
          <Image
            src={images.mobileTruck}
            alt="Mobile Truck"
            fill
            className="object-cover brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 via-emerald-600/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </motion.div>

        {/* Floating Location Pins */}
        <FloatingElement className="absolute top-20 left-1/4 z-[1]" duration={4} yOffset={15}>
          <motion.div
            className="w-12 h-12 rounded-full bg-emerald-500/30 backdrop-blur-sm border-2 border-emerald-400/50 flex items-center justify-center"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            viewport={{ once: true }}
          >
            <div className="w-3 h-3 rounded-full bg-emerald-400" />
          </motion.div>
        </FloatingElement>

        <FloatingElement className="absolute bottom-32 right-1/3 z-[1]" duration={5} delay={1} yOffset={20}>
          <motion.div
            className="w-10 h-10 rounded-full bg-blue-500/30 backdrop-blur-sm border-2 border-blue-400/50 flex items-center justify-center"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.7, type: "spring" }}
            viewport={{ once: true }}
          >
            <div className="w-2 h-2 rounded-full bg-blue-400" />
          </motion.div>
        </FloatingElement>

        <div className={`container relative z-10 ${SPACING.containerPadding} text-white text-center`}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <TechBadge variant="neutral" className="mb-8 bg-white/20 border-white/30 text-white" glow>
                {dictionary.mobile_truck.badge}
              </TechBadge>
            </motion.div>
            <h2 className={`${TYPOGRAPHY.h1Hero} mb-8 text-gradient-eco-tech drop-shadow-2xl`}>
              {dictionary.mobile_truck.title}
            </h2>
            <p className={`${TYPOGRAPHY.bodyLarge} max-w-3xl mx-auto mb-12 text-gray-100`}>
              {dictionary.mobile_truck.subtitle}
            </p>
            <MagneticButton
              className={`${BUTTON_STYLES.xlarge} bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-2xl shadow-emerald-500/50 hover:shadow-emerald-500/60 rounded-2xl`}
              onClick={() => router.push(`/${lang}/contact`)}
            >
              <span className="flex items-center">
                {dictionary.mobile_truck.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* IMPACT BY NUMBERS SECTION - Animated Counters */}
      <SectionWrapper variant="gradient" padding="standard" className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600">
        <div className={`absolute inset-0 ${GRADIENT_OVERLAYS.radialAccentStrong}`} />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
        
        <div className={`container ${SPACING.containerPadding} relative z-10`}>
          <ScrollReveal className="text-center mb-16">
            <TechBadge variant="neutral" className="mb-6 bg-white/20 border-white/30 text-white">
              {dictionary.impact.badge}
            </TechBadge>
            <h2 className={`${TYPOGRAPHY.h2} mb-4 text-white`}>
              {dictionary.impact.title}
            </h2>
            <p className={`${TYPOGRAPHY.subtitle} text-white/90 max-w-2xl mx-auto`}>
              {dictionary.impact.subtitle}
            </p>
          </ScrollReveal>

          <div className={`grid grid-cols-1 md:grid-cols-3 ${SPACING.gap.medium} text-center`}>
            {[
              { 
                value: 15,
                unit: dictionary.impact.stats.charge_speed.unit,
                label: dictionary.impact.stats.charge_speed.label,
                icon: Zap,
                gradient: "from-yellow-400 to-orange-500",
              },
              { 
                value: 100,
                unit: dictionary.impact.stats.power.unit,
                label: dictionary.impact.stats.power.label,
                icon: Zap,
                gradient: "from-blue-400 to-cyan-500",
              },
              { 
                value: 150,
                unit: dictionary.impact.stats.connectivity.unit,
                label: dictionary.impact.stats.connectivity.label,
                icon: Zap,
                gradient: "from-emerald-400 to-teal-500",
              },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <InteractiveCard>
                  <motion.div
                    className={`${SPACING.cardPaddingLarge} bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl group hover:bg-white/15 hover:border-white/30 transition-all duration-500`}
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    {/* Icon */}
                    <motion.div
                      className={`h-20 w-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <stat.icon className="h-10 w-10 text-white" />
                    </motion.div>

                    {/* Animated Counter */}
                    <div className="mb-6">
                      <div className="flex items-baseline justify-center gap-2">
                        <CounterAnimation
                          end={stat.value}
                          duration={2.5}
                          className={`text-6xl md:text-7xl font-black tracking-tighter bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                        />
                        <span className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                          {stat.unit}
                        </span>
                      </div>
                    </div>

                    {/* Label */}
                    <div className="text-lg md:text-xl text-white font-semibold">
                      {stat.label}
                    </div>

                    {/* Subtle Chart Background */}
                    <motion.div
                      className="mt-6 h-1 w-full bg-white/10 rounded-full overflow-hidden"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className={`h-full bg-gradient-to-r ${stat.gradient}`}
                        initial={{ x: "-100%" }}
                        whileInView={{ x: 0 }}
                        transition={{ delay: 0.7 + i * 0.1, duration: 1 }}
                        viewport={{ once: true }}
                      />
                    </motion.div>
                  </motion.div>
                </InteractiveCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* SUSTAINABILITY DASHBOARD SECTION */}
      <SustainabilityDashboard dictionary={dictionary} />

      {/* APP SECTION */}
      <AppCTA dictionary={dictionary} />
    </div>
  );
}
