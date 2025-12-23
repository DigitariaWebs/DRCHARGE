"use client";

import { useRef, useState, MouseEvent } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
  tiltStrength?: number;
  scaleOnHover?: boolean;
}

export function InteractiveCard({
  children,
  className,
  tiltStrength = 10,
  scaleOnHover = true,
}: InteractiveCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) / (rect.width / 2);
    const deltaY = (e.clientY - centerY) / (rect.height / 2);

    setRotation({
      x: -deltaY * tiltStrength,
      y: deltaX * tiltStrength,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      className={cn("perspective-1000", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: rotation.x,
        rotateY: rotation.y,
        scale: isHovered && scaleOnHover ? 1.05 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </motion.div>
  );
}
