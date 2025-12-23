"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { rafThrottle } from "@/lib/performance";

interface CursorGlowProps {
  color?: string;
  size?: number;
  opacity?: number;
}

export function CursorGlow({
  color = "rgba(5, 150, 105, 0.15)",
  size = 300,
  opacity = 0.15,
}: CursorGlowProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Use RAF throttle for better performance
  const handleMouseMove = useCallback(
    rafThrottle((e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    }),
    [],
  );

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isMobile, handleMouseMove, handleMouseLeave]);

  // Don't render on mobile
  if (isMobile) {
    return null;
  }

  return (
    <motion.div
      className="pointer-events-none fixed z-50 rounded-full blur-3xl will-change-transform"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        opacity: isVisible ? opacity : 0,
      }}
      animate={{
        x: mousePosition.x - size / 2,
        y: mousePosition.y - size / 2,
      }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 20,
        mass: 0.5,
      }}
    />
  );
}
