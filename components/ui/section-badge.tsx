"use client";

import { cn } from "@/lib/utils";
import { BADGE_STYLES } from "@/lib/design-tokens";

interface SectionBadgeProps {
  variant?: "accent" | "primary" | "white" | "dark";
  children: React.ReactNode;
  className?: string;
}

export function SectionBadge({ 
  variant = "accent", 
  children, 
  className 
}: SectionBadgeProps) {
  return (
    <div className={cn(
      BADGE_STYLES.base,
      variant === "accent" && BADGE_STYLES.accent,
      variant === "primary" && BADGE_STYLES.primary,
      variant === "white" && BADGE_STYLES.white,
      variant === "dark" && BADGE_STYLES.dark,
      className
    )}>
      {children}
    </div>
  );
}

