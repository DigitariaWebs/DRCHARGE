"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientBorderProps {
  children: React.ReactNode;
  className?: string;
  borderWidth?: number;
  animated?: boolean;
  colors?: string[];
}

export function GradientBorder({
  children,
  className,
  borderWidth = 2,
  animated = true,
  colors = ["#10b981", "#059669", "#2563eb", "#3b82f6"],
}: GradientBorderProps) {
  const gradientColors = colors.join(", ");

  return (
    <div className={cn("relative", className)}>
      <motion.div
        className="absolute inset-0 rounded-3xl"
        style={{
          background: `linear-gradient(90deg, ${gradientColors})`,
          padding: `${borderWidth}px`,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
        animate={
          animated
            ? {
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }
            : {}
        }
        transition={
          animated
            ? {
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }
            : {}
        }
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
