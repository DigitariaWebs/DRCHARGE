"use client";

import { motion } from "framer-motion";
import { Leaf, Zap, Users, TreePine } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { TechBadge } from "@/components/ui/tech-badge";
import { CounterAnimation } from "@/components/ui/counter-animation";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { InteractiveCard } from "@/components/ui/interactive-card";
import {
  SPACING,
  TYPOGRAPHY,
  ANIMATIONS,
  GRADIENT_OVERLAYS,
} from "@/lib/design-tokens";

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

export function SustainabilityDashboard({ dictionary }: SustainabilityDashboardProps) {
  const metrics = [
    {
      icon: TreePine,
      value: parseFloat(dictionary.sustainability.metrics.co2_saved.value.replace(/,/g, "")),
      unit: dictionary.sustainability.metrics.co2_saved.unit,
      label: dictionary.sustainability.metrics.co2_saved.label,
      description: dictionary.sustainability.metrics.co2_saved.description,
      color: "emerald",
      gradient: "from-emerald-500 to-green-600",
    },
    {
      icon: Zap,
      value: parseFloat(dictionary.sustainability.metrics.renewable.value),
      unit: dictionary.sustainability.metrics.renewable.unit,
      label: dictionary.sustainability.metrics.renewable.label,
      description: dictionary.sustainability.metrics.renewable.description,
      color: "teal",
      gradient: "from-teal-500 to-cyan-600",
    },
    {
      icon: Users,
      value: parseFloat(dictionary.sustainability.metrics.devices.value.replace(/,/g, "").replace("+", "")),
      unit: dictionary.sustainability.metrics.devices.unit,
      label: dictionary.sustainability.metrics.devices.label,
      description: dictionary.sustainability.metrics.devices.description,
      color: "blue",
      gradient: "from-blue-500 to-indigo-600",
    },
  ];

  return (
    <SectionWrapper variant="light" padding="standard">
      <div className={`absolute inset-0 ${GRADIENT_OVERLAYS.radialEco}`} />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2310b981%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
      
      <div className={`container ${SPACING.containerPadding} relative z-10`}>
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <TechBadge variant="eco" glow className="mb-6">
            {dictionary.sustainability.badge}
          </TechBadge>
          <h2 className={`${TYPOGRAPHY.h2} mb-6`}>
            <span className="text-gradient-eco">
              {dictionary.sustainability.title}
            </span>
          </h2>
          <p className={`${TYPOGRAPHY.subtitle} text-muted-foreground max-w-3xl mx-auto`}>
            {dictionary.sustainability.subtitle}
          </p>
        </ScrollReveal>

        {/* Metrics Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-3 ${SPACING.gap.medium} mb-16`}>
          {metrics.map((metric, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <InteractiveCard className="h-full">
                <motion.div
                  className={`${SPACING.cardPaddingLarge} bg-white/90 backdrop-blur-sm border border-${metric.color}-200/50 rounded-3xl h-full flex flex-col`}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon */}
                  <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${metric.gradient} flex items-center justify-center mb-6 shadow-lg`}>
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
                      <span className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${metric.gradient} bg-clip-text text-transparent`}>
                        {metric.unit}
                      </span>
                    </div>
                  </div>

                  {/* Label */}
                  <h3 className={`${TYPOGRAPHY.h4} mb-3 text-foreground`}>
                    {metric.label}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-base leading-relaxed mt-auto">
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
            className={`${SPACING.cardPaddingLarge} bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-3xl text-center`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-center mb-4">
              <Leaf className="h-8 w-8 text-emerald-600 mr-3" />
              <h3 className={`${TYPOGRAPHY.h3} text-gradient-eco`}>
                {dictionary.sustainability.calculator.title}
              </h3>
            </div>
            <p className={`${TYPOGRAPHY.body} text-muted-foreground mb-6 max-w-2xl mx-auto`}>
              {dictionary.sustainability.calculator.description}
            </p>
            
            {/* Visual Indicator */}
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="h-12 w-12 rounded-full bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center shadow-lg"
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

