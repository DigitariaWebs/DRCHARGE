"use client";

import { motion } from "framer-motion";
import { Leaf, Zap, Users, TreePine } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { CounterAnimation } from "@/components/ui/counter-animation";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { InteractiveCard } from "@/components/ui/interactive-card";
import { SPACING, TYPOGRAPHY } from "@/lib/design-tokens";

interface SustainabilityDashboardProps {
  dictionary: {
    sustainability: {
      badge: string;
      title: string;
      subtitle: string;
      metrics: {
        co2_saved: {
          value: string;
          unit: string;
          label: string;
          description: string;
        };
        renewable: {
          value: string;
          unit: string;
          label: string;
          description: string;
        };
        devices: {
          value: string;
          unit: string;
          label: string;
          description: string;
        };
      };
      calculator: {
        title: string;
        description: string;
      };
    };
  };
}

export function SustainabilityDashboard({
  dictionary,
}: SustainabilityDashboardProps) {
  const metrics = [
    {
      icon: TreePine,
      value: parseFloat(
        dictionary.sustainability.metrics.co2_saved.value.replace(/,/g, ""),
      ),
      unit: dictionary.sustainability.metrics.co2_saved.unit,
      label: dictionary.sustainability.metrics.co2_saved.label,
      description: dictionary.sustainability.metrics.co2_saved.description,
      color: "emerald",
      gradient: "from-[#38A169] to-[#1A4B3A]",
    },
    {
      icon: Zap,
      value: parseFloat(dictionary.sustainability.metrics.renewable.value),
      unit: dictionary.sustainability.metrics.renewable.unit,
      label: dictionary.sustainability.metrics.renewable.label,
      description: dictionary.sustainability.metrics.renewable.description,
      color: "teal",
      gradient: "from-[#38A169] to-[#1A4B3A]",
    },
    {
      icon: Users,
      value: parseFloat(
        dictionary.sustainability.metrics.devices.value
          .replace(/,/g, "")
          .replace("+", ""),
      ),
      unit: dictionary.sustainability.metrics.devices.unit,
      label: dictionary.sustainability.metrics.devices.label,
      description: dictionary.sustainability.metrics.devices.description,
      color: "blue",
      gradient: "from-[#38A169] to-[#1A4B3A]",
    },
  ];

  return (
    <SectionWrapper variant="dark" padding="standard" className="bg-[#1A4B3A]">
      <div
        className={`container ${SPACING.containerPadding} relative z-10 mx-auto max-w-7xl`}
      >
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className={`${TYPOGRAPHY.h2} mb-6 text-white`}>
            {dictionary.sustainability.title.split(" ").map((word, i, arr) =>
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
            className={`${TYPOGRAPHY.subtitle} text-white/90 max-w-3xl mx-auto`}
          >
            {dictionary.sustainability.subtitle}
          </p>
        </ScrollReveal>

        {/* Metrics Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 ${SPACING.gap.medium} mb-16 justify-items-center`}
        >
          {metrics.map((metric, index) => (
            <ScrollReveal
              key={index}
              delay={index * 0.1}
              className="w-full max-w-sm"
            >
              <InteractiveCard className="h-full w-full">
                <motion.div
                  className={`${SPACING.cardPaddingLarge} bg-white border border-gray-200 rounded-xl h-full flex flex-col shadow-sm hover:shadow-lg transition-all w-full`}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon */}
                  <div
                    className={`h-16 w-16 rounded-xl bg-gradient-to-br ${metric.gradient} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <metric.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Counter */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <CounterAnimation
                        end={metric.value}
                        duration={2.5}
                        className={`text-5xl md:text-6xl font-black bg-gradient-to-r ${metric.gradient} bg-clip-text text-transparent`}
                      />
                      <span
                        className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${metric.gradient} bg-clip-text text-transparent`}
                      >
                        {metric.unit}
                      </span>
                    </div>
                  </div>

                  {/* Label */}
                  <h3 className={`${TYPOGRAPHY.h4} mb-3 text-gray-900`}>
                    {metric.label}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-base leading-relaxed mt-auto">
                    {metric.description}
                  </p>
                </motion.div>
              </InteractiveCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Impact Calculator CTA */}
        <ScrollReveal delay={0.4}>
          <motion.div
            className={`${SPACING.cardPaddingLarge} bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-center`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-center mb-4">
              <Leaf className="h-8 w-8 text-[#38A169] mr-3" />
              <h3 className={`${TYPOGRAPHY.h3} text-white`}>
                {dictionary.sustainability.calculator.title}
              </h3>
            </div>
            <p
              className={`${TYPOGRAPHY.body} text-white/90 mb-6 max-w-2xl mx-auto`}
            >
              {dictionary.sustainability.calculator.description}
            </p>

            {/* Visual Indicator */}
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="h-12 w-12 rounded-full bg-gradient-to-br from-[#38A169] to-[#1A4B3A] flex items-center justify-center shadow-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <TreePine className="h-6 w-6 text-white" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
