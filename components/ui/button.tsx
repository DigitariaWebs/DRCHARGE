"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: "default" | "secondary" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  isLoading?: boolean;
  children?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      isLoading,
      children,
      ...props
    },
    ref,
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none overflow-hidden relative";

    const variants = {
      default: "bg-[#38A169] text-white hover:bg-[#38A169]/90 shadow-lg",
      secondary: "bg-[#F9F9F9] text-gray-900 hover:bg-gray-100",
      outline:
        "border border-white/30 bg-transparent hover:bg-white/10 text-white",
      ghost: "hover:bg-white/10 text-white",
      link: "text-[#38A169] underline-offset-4 hover:underline",
    };

    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-12 rounded-md px-8 text-base",
      icon: "h-10 w-10",
    };

    return (
      <motion.button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
        {variant === "default" && (
          <motion.div
            className="absolute inset-0 bg-white/20"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.5 }}
          />
        )}
      </motion.button>
    );
  },
);
Button.displayName = "Button";

export { Button };
