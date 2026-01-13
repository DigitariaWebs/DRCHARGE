"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import { AppCTA } from "@/components/app-cta";
import { SponsorsSection } from "@/components/sponsors-section";
import { SectionWrapper } from "@/components/ui/section-wrapper";

import { SplitLayout } from "@/components/ui/split-layout";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { CounterAnimation } from "@/components/ui/counter-animation";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { InteractiveCard } from "@/components/ui/interactive-card";
import { TechBadge } from "@/components/ui/tech-badge";
import { CursorGlow } from "@/components/ui/cursor-glow";
import { SustainabilityDashboard } from "@/components/sustainability-dashboard";
import { images } from "@/lib/images";
import {
  Zap,
  Shield,
  Leaf,
  CheckCircle,
  ArrowRight,
  Battery,
  Sparkles,
} from "lucide-react";
import { SPACING, TYPOGRAPHY, IMAGE_STYLES } from "@/lib/design-tokens";

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

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1A4B3A]">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-20"
          >
            <source src={images.heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#1A4B3A]/80" />
        </div>
        <div
          className={`container relative z-10 ${SPACING.containerPadding} text-white mx-auto`}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="flex justify-center"
              >
                <Image
                  src="/logo-transparent.png"
                  alt="Dr. Charge Logo"
                  width={300}
                  height={300}
                  className="h-40 w-40 md:h-64 md:w-64"
                />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white"
              >
                {dictionary.hero.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className={`text-lg md:text-xl text-white/90 max-w-xl`}
              >
                {dictionary.hero.subtitle}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="pt-4"
              >
                <MagneticButton
                  className="px-8 py-4 bg-[#38A169] hover:bg-[#38A169]/90 text-white font-semibold rounded-lg text-lg flex items-center gap-2"
                  onClick={() => router.push(`/${lang}/contact`)}
                >
                  <span>{dictionary.hero.cta_primary}</span>
                  <ArrowRight className="h-5 w-5" />
                </MagneticButton>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Right Side Image - Aligned to section border with no gap */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="absolute right-0 top-0 bottom-0 w-1/2 md:w-[45%] h-full z-10"
        >
          <div className="relative h-full w-full">
            <Image
              src="/charging.png"
              alt="Electric vehicle charging"
              fill
              className="object-contain object-right object-bottom"
              priority
              style={{ objectPosition: "right bottom" }}
            />
          </div>
        </motion.div>
      </section>

      {/* PROBLEM SECTION - Enhanced "The Challenge" */}
      <SectionWrapper
        variant="light"
        padding="standard"
        className="bg-[#F9F9F9]"
      >
        <div
          className={`container ${SPACING.containerPadding} relative z-10 mx-auto max-w-7xl`}
        >
          <SplitLayout
            imageSide="left"
            image={
              <ScrollReveal direction="left">
                <div
                  className={`w-full relative h-[450px] ${IMAGE_STYLES.rounded} ${IMAGE_STYLES.container} group`}
                >
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
                  <motion.h2
                    className={`${TYPOGRAPHY.h2} text-gray-900`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    {dictionary.challenge.title}
                  </motion.h2>
                  <p className={`${TYPOGRAPHY.subtitle} text-gray-600`}>
                    {dictionary.challenge.subtitle}
                  </p>
                  <div
                    className={`flex items-center ${SPACING.gap.small} pt-4`}
                  >
                    <div className="flex -space-x-2">
                      <motion.div
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-[#38A169] to-[#1A4B3A] border-2 border-white flex items-center justify-center shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Zap className="h-6 w-6 text-white" />
                      </motion.div>
                      <motion.div
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-[#38A169] to-[#1A4B3A] border-2 border-white flex items-center justify-center shadow-lg"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                      >
                        <CheckCircle className="h-6 w-6 text-white" />
                      </motion.div>
                    </div>
                    <span className="text-sm text-gray-600">
                      {dictionary.challenge.stat_label}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            }
          />
        </div>
      </SectionWrapper>

      {/* TECHNOLOGY PILLARS SECTION - Enhanced Interactive Cards */}
      <SectionWrapper
        variant="light"
        padding="standard"
        className="bg-[#F9F9F9]"
      >
        <div
          className={`container ${SPACING.containerPadding} relative z-10 mx-auto max-w-7xl`}
        >
          <ScrollReveal className="text-center mb-16">
            <h2 className={`${TYPOGRAPHY.h2} mb-4 text-gray-900`}>
              {dictionary.tech_pillars.title.split(" ").map((word, i, arr) =>
                i === arr.length - 1 ? (
                  <span key={i} className="text-[#38A169]">
                    {" "}
                    {word}
                  </span>
                ) : (
                  <span key={i}>
                    {i > 0 ? " " : ""}
                    {word}
                  </span>
                ),
              )}
            </h2>
            <p
              className={`${TYPOGRAPHY.subtitle} text-gray-600 max-w-3xl mx-auto`}
            >
              {dictionary.tech_pillars.subtitle}
            </p>
          </ScrollReveal>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${SPACING.gap.medium} justify-items-center`}
          >
            {[
              {
                icon: Zap,
                title: dictionary.tech_pillars.items.speed.title,
                desc: dictionary.tech_pillars.items.speed.description,
                detail: dictionary.tech_pillars.items.speed.detail,
                gradient: "from-[#38A169] to-[#1A4B3A]",
                iconBg: "from-[#38A169]/20 to-[#1A4B3A]/20",
                borderColor: "border-[#38A169]/30",
              },
              {
                icon: Shield,
                title: dictionary.tech_pillars.items.security.title,
                desc: dictionary.tech_pillars.items.security.description,
                detail: dictionary.tech_pillars.items.security.detail,
                gradient: "from-[#38A169] to-[#1A4B3A]",
                iconBg: "from-[#38A169]/20 to-[#1A4B3A]/20",
                borderColor: "border-[#38A169]/30",
              },
              {
                icon: Leaf,
                title: dictionary.tech_pillars.items.sustainability.title,
                desc: dictionary.tech_pillars.items.sustainability.description,
                detail: dictionary.tech_pillars.items.sustainability.detail,
                gradient: "from-[#38A169] to-[#1A4B3A]",
                iconBg: "from-[#38A169]/20 to-[#1A4B3A]/20",
                borderColor: "border-[#38A169]/30",
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="w-full max-w-sm">
                <InteractiveCard className="h-full w-full">
                  <motion.div
                    className={`group relative ${SPACING.cardPaddingLarge} bg-white rounded-xl border border-gray-200 shadow-sm h-full flex flex-col hover:shadow-lg transition-all w-full`}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Icon with Glow */}
                      <motion.div
                        className={`h-16 w-16 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 shadow-lg transition-all duration-300`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <item.icon className="h-8 w-8 text-white" />
                      </motion.div>

                      {/* Title */}
                      <h3 className={`${TYPOGRAPHY.h3} mb-4 text-gray-900`}>
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p
                        className={`text-gray-600 ${TYPOGRAPHY.body} mb-6 flex-grow`}
                      >
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
      <SectionWrapper
        variant="dark"
        padding="standard"
        className="bg-[#1A4B3A]"
      >
        <div
          className={`container ${SPACING.containerPadding} relative z-10 mx-auto max-w-7xl`}
        >
          <SplitLayout
            imageSide="left"
            image={
              <ScrollReveal direction="left">
                <InteractiveCard tiltStrength={5}>
                  <div
                    className={`relative ${IMAGE_STYLES.rounded} ${IMAGE_STYLES.container} shadow-2xl group`}
                  >
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
                        <div
                          className={`flex items-center ${SPACING.gap.small} mb-3`}
                        >
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
                          <span className="text-sm font-semibold text-emerald-400">
                            Available Now
                          </span>
                        </div>
                        <h3 className={`${TYPOGRAPHY.h3} mb-2 text-white`}>
                          Station CL19
                        </h3>
                        <p className="text-gray-300">
                          The future of public charging.
                        </p>
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
                    <h2 className={`${TYPOGRAPHY.h2} mb-6 text-white`}>
                      {dictionary.innovation.title
                        .split(" ")
                        .map((word, i, arr) =>
                          i === arr.length - 1 ? (
                            <span key={i} className="text-[#38A169]">
                              {" "}
                              {word}
                            </span>
                          ) : (
                            <span key={i}>
                              {i > 0 ? " " : ""}
                              {word}
                            </span>
                          ),
                        )}
                    </h2>
                    <p className={`${TYPOGRAPHY.subtitle} text-white/90`}>
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
                    className="mt-6 px-6 py-3 bg-white/10 border border-white/30 hover:bg-white/20 text-white font-semibold rounded-lg flex items-center gap-2"
                    onClick={() => router.push(`/${lang}/services`)}
                  >
                    <span>{dictionary.innovation.cta}</span>
                    <ArrowRight className="h-5 w-5" />
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
        className={`${SPACING.sectionPadding} min-h-[90vh] flex items-center relative overflow-hidden bg-[#1A4B3A]`}
      >
        <motion.div style={{ scale, opacity }} className="absolute inset-0 z-0">
          <Image
            src={images.mobileTruck}
            alt="Mobile Truck"
            fill
            className="object-cover brightness-[0.2] opacity-50"
          />
          <div className="absolute inset-0 bg-[#1A4B3A]/80" />
        </motion.div>

        <div
          className={`container relative z-10 ${SPACING.containerPadding} text-white text-center mx-auto max-w-7xl`}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className={`${TYPOGRAPHY.h1Hero} mb-8 text-white`}>
              {dictionary.mobile_truck.title.split(" ").map((word, i, arr) =>
                i === arr.length - 1 ? (
                  <span key={i} className="text-[#38A169]">
                    {" "}
                    {word}
                  </span>
                ) : (
                  <span key={i}>
                    {i > 0 ? " " : ""}
                    {word}
                  </span>
                ),
              )}
            </h2>
            <p
              className={`${TYPOGRAPHY.bodyLarge} max-w-3xl mx-auto mb-12 text-white/90`}
            >
              {dictionary.mobile_truck.subtitle}
            </p>
            <MagneticButton
              className="px-8 py-4 bg-[#38A169] hover:bg-[#38A169]/90 text-white font-semibold rounded-lg text-lg flex items-center gap-2"
              onClick={() => router.push(`/${lang}/contact`)}
            >
              <span>{dictionary.mobile_truck.cta}</span>
              <ArrowRight className="h-5 w-5" />
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* IMPACT BY NUMBERS SECTION - Animated Counters */}
      <SectionWrapper
        variant="light"
        padding="standard"
        className="bg-[#F9F9F9]"
      >
        <div
          className={`container ${SPACING.containerPadding} relative z-10 mx-auto max-w-7xl`}
        >
          <ScrollReveal className="text-center mb-16">
            <h2 className={`${TYPOGRAPHY.h2} mb-4 text-gray-900`}>
              {dictionary.impact.title.split(" ").map((word, i, arr) =>
                i === arr.length - 1 ? (
                  <span key={i} className="text-[#38A169]">
                    {" "}
                    {word}
                  </span>
                ) : (
                  <span key={i}>
                    {i > 0 ? " " : ""}
                    {word}
                  </span>
                ),
              )}
            </h2>
            <p
              className={`${TYPOGRAPHY.subtitle} text-gray-600 max-w-2xl mx-auto`}
            >
              {dictionary.impact.subtitle}
            </p>
          </ScrollReveal>

          <div
            className={`grid grid-cols-1 md:grid-cols-3 ${SPACING.gap.medium} text-center justify-items-center`}
          >
            {[
              {
                value: 15,
                unit: dictionary.impact.stats.charge_speed.unit,
                label: dictionary.impact.stats.charge_speed.label,
                icon: Zap,
                gradient: "from-[#38A169] to-[#1A4B3A]",
              },
              {
                value: 100,
                unit: dictionary.impact.stats.power.unit,
                label: dictionary.impact.stats.power.label,
                icon: Zap,
                gradient: "from-[#38A169] to-[#1A4B3A]",
              },
              {
                value: 150,
                unit: dictionary.impact.stats.connectivity.unit,
                label: dictionary.impact.stats.connectivity.label,
                icon: Zap,
                gradient: "from-[#38A169] to-[#1A4B3A]",
              },
            ].map((stat, i) => (
              <ScrollReveal
                key={i}
                delay={i * 0.15}
                className="w-full max-w-sm"
              >
                <InteractiveCard className="w-full">
                  <motion.div
                    className={`${SPACING.cardPaddingLarge} bg-white border border-gray-200 rounded-xl group hover:shadow-lg transition-all duration-500 w-full`}
                    whileHover={{ y: -4, scale: 1.02 }}
                  >
                    {/* Icon */}
                    <motion.div
                      className={`h-20 w-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg transition-all`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
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
                        <span
                          className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                        >
                          {stat.unit}
                        </span>
                      </div>
                    </div>

                    {/* Label */}
                    <div className="text-lg md:text-xl text-gray-900 font-semibold">
                      {stat.label}
                    </div>

                    {/* Subtle Chart Background */}
                    <motion.div
                      className="mt-6 h-1 w-full bg-gray-100 rounded-full overflow-hidden"
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

      {/* SPONSORS & COLLABORATIONS SECTION */}
      <SponsorsSection dictionary={dictionary} />

      {/* APP SECTION */}
      <AppCTA dictionary={dictionary} />
    </div>
  );
}
