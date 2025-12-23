"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

interface EnergyParticlesProps {
  count?: number;
  colors?: string[];
  className?: string;
}

export function EnergyParticles({
  count = 30,
  colors = ["#10b981", "#059669", "#3b82f6", "#2563eb"],
  className = "",
}: EnergyParticlesProps) {
  const particles = useRef<Particle[]>([]);

  useEffect(() => {
    particles.current = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
  }, [count, colors]);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {particles.current.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: 0.6,
          }}
          animate={{
            y: [0, -100, -200],
            x: [0, Math.random() * 50 - 25],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
