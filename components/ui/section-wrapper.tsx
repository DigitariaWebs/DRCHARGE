"use client";

import { cn } from "@/lib/utils";
import { SPACING } from "@/lib/design-tokens";

interface SectionWrapperProps {
  variant?: "light" | "dark" | "gradient" | "image";
  padding?: "standard" | "compact";
  className?: string;
  children: React.ReactNode;
}

export function SectionWrapper({
  variant = "light",
  padding = "standard",
  className,
  children,
}: SectionWrapperProps) {
  const paddingClass =
    padding === "standard"
      ? SPACING.sectionPadding
      : SPACING.sectionPaddingCompact;

  const variantClasses = {
    light: "bg-gradient-to-b from-background via-background to-secondary/30",
    dark: "bg-gradient-to-b from-gray-950 via-gray-900 to-gray-900 text-white",
    gradient:
      "bg-gradient-to-br from-primary via-primary/95 to-accent text-white",
    image: "relative overflow-hidden",
  };

  return (
    <section
      className={cn(
        paddingClass,
        variantClasses[variant],
        "relative overflow-hidden",
        className,
      )}
    >
      {children}
    </section>
  );
}
