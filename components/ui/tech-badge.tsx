"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "eco" | "tech" | "neutral";
  glow?: boolean;
}

export function TechBadge({
  children,
  className,
  variant = "eco",
  glow = false,
}: TechBadgeProps) {
  const variantStyles = {
    eco: "bg-emerald-500/10 border-emerald-500/30 text-emerald-600",
    tech: "bg-blue-500/10 border-blue-500/30 text-blue-600",
    neutral: "bg-gray-500/10 border-gray-500/30 text-gray-600",
  };

  const glowStyles = {
    eco: "shadow-lg shadow-emerald-500/20",
    tech: "shadow-lg shadow-blue-500/20",
    neutral: "shadow-lg shadow-gray-500/20",
  };

  return (
    <motion.div
      className={cn(
        "inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-md border",
        variantStyles[variant],
        glow && glowStyles[variant],
        className,
      )}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {glow && (
        <motion.div
          className={cn(
            "w-2 h-2 rounded-full mr-2",
            variant === "eco" && "bg-emerald-500",
            variant === "tech" && "bg-blue-500",
            variant === "neutral" && "bg-gray-500",
          )}
          animate={{
            opacity: [1, 0.5, 1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
      {children}
    </motion.div>
  );
}
