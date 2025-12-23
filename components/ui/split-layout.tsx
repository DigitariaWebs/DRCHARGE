"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SPACING, ANIMATIONS } from "@/lib/design-tokens";

interface SplitLayoutProps {
  imageSide?: "left" | "right";
  image: React.ReactNode;
  content: React.ReactNode;
  className?: string;
}

export function SplitLayout({
  imageSide = "left",
  image,
  content,
  className,
}: SplitLayoutProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-2",
        SPACING.gap.xlarge,
        "items-center",
        className,
      )}
    >
      <motion.div
        {...ANIMATIONS.scale}
        className={cn(
          "order-2 lg:order-1",
          imageSide === "right" && "lg:order-2",
        )}
      >
        {image}
      </motion.div>
      <motion.div
        {...ANIMATIONS.fadeInUp}
        className={cn(
          "order-1 lg:order-2 space-y-10",
          imageSide === "right" && "lg:order-1",
        )}
      >
        {content}
      </motion.div>
    </div>
  );
}
