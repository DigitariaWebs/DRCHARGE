// Unified Design Tokens for Landing Page - Eco-Modern Tech Identity
// These constants ensure consistency across all sections

// ============================================================================
// COLOR SYSTEM - Eco-Modern Tech Palette
// ============================================================================
export const COLORS = {
  // Primary Eco-Green Gradients
  eco: {
    light: "#10b981", // Emerald 500
    base: "#059669", // Emerald 600
    dark: "#047857", // Emerald 700
    gradient: "from-teal-500 via-emerald-500 to-green-600",
  },
  // Tech Blue Accents
  tech: {
    light: "#3b82f6", // Blue 500
    base: "#2563eb", // Blue 600
    dark: "#1d4ed8", // Blue 700
    gradient: "from-cyan-500 via-blue-500 to-indigo-600",
  },
  // Natural Neutrals
  neutral: {
    white: "#ffffff",
    gray50: "#f9fafb",
    gray100: "#f3f4f6",
    gray200: "#e5e7eb",
    gray300: "#d1d5db",
    gray400: "#9ca3af",
    gray500: "#6b7280",
    gray600: "#4b5563",
    gray700: "#374151",
    gray800: "#1f2937",
    gray900: "#111827",
    black: "#000000",
  },
  // Dark Mode with Green Undertones
  dark: {
    surface: "#0f1419",
    elevated: "#1a1f26",
    border: "rgba(5, 150, 105, 0.1)",
  },
} as const;

// ============================================================================
// SPACING SYSTEM
// ============================================================================
export const SPACING = {
  sectionPadding: "py-32", // Standard section padding
  sectionPaddingCompact: "py-24", // For compact sections
  containerPadding: "px-4 md:px-6",
  gap: {
    small: "gap-4",
    medium: "gap-8",
    large: "gap-16",
    xlarge: "gap-20",
  },
  cardPadding: "p-8",
  cardPaddingLarge: "p-10 md:p-12",
} as const;

// ============================================================================
// TYPOGRAPHY SYSTEM - Enhanced with Letter Spacing
// ============================================================================
export const TYPOGRAPHY = {
  h1: "text-5xl md:text-7xl font-black tracking-tight",
  h1Hero: "text-6xl md:text-8xl font-black tracking-tighter",
  h2: "text-4xl md:text-6xl font-black tracking-tight",
  h3: "text-3xl md:text-4xl font-bold tracking-tight",
  h4: "text-2xl md:text-3xl font-bold",
  subtitle: "text-xl md:text-2xl font-light leading-relaxed tracking-wide",
  body: "text-base md:text-lg leading-relaxed",
  bodyLarge: "text-xl md:text-2xl leading-relaxed",
  caption: "text-sm md:text-base font-medium",
  overline: "text-xs md:text-sm font-semibold uppercase tracking-widest",
} as const;

// ============================================================================
// BADGE STYLES - Tech-Enhanced
// ============================================================================
export const BADGE_STYLES = {
  base: "inline-block px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-md",
  accent:
    "bg-accent/10 border border-accent/20 text-accent shadow-lg shadow-accent/5",
  primary:
    "bg-primary/10 border border-primary/20 text-primary shadow-lg shadow-primary/5",
  tech: "bg-blue-500/10 border border-blue-500/20 text-blue-500 shadow-lg shadow-blue-500/5",
  white: "bg-white/10 backdrop-blur-md border border-white/20 text-white",
  dark: "bg-black/60 backdrop-blur-md border border-white/20 text-white",
  glow: "bg-accent/10 border border-accent/30 text-accent shadow-xl shadow-accent/20 animate-pulse-slow",
} as const;

// ============================================================================
// BUTTON STYLES - Magnetic & Interactive
// ============================================================================
export const BUTTON_STYLES = {
  primary:
    "px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300",
  secondary:
    "px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300",
  large:
    "px-10 py-7 text-lg font-semibold rounded-xl transition-all duration-300",
  xlarge:
    "px-12 py-8 text-xl font-semibold rounded-2xl transition-all duration-300",
  magnetic:
    "relative overflow-hidden transition-all duration-300 hover:scale-105",
} as const;

// ============================================================================
// CARD STYLES - Interactive with Depth
// ============================================================================
export const CARD_STYLES = {
  base: "rounded-3xl transition-all duration-500",
  light:
    "bg-white/80 backdrop-blur-sm border border-border/50 hover:bg-white hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2",
  dark: "bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/20",
  glass:
    "bg-white/70 backdrop-blur-md border border-white/20 hover:bg-white/80",
  interactive:
    "bg-white/90 backdrop-blur-sm border border-border/50 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/15 hover:-translate-y-3 transition-all duration-500 cursor-pointer",
  elevated:
    "bg-white shadow-xl shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2",
} as const;

// ============================================================================
// IMAGE STYLES - Enhanced Hover Effects
// ============================================================================
export const IMAGE_STYLES = {
  rounded: "rounded-3xl",
  hover: "group-hover:scale-105 transition-transform duration-700 ease-out",
  hoverLarge:
    "group-hover:scale-110 transition-transform duration-1000 ease-out",
  container: "relative overflow-hidden",
  parallax: "transition-transform duration-300 ease-out",
} as const;

// ============================================================================
// ANIMATION PRESETS - Enhanced Micro-interactions
// ============================================================================
export const ANIMATIONS = {
  // Basic Animations
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
  fadeIn: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  },

  // Stagger Animations
  stagger: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.2 },
  },
  staggerFast: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.1 },
  },

  // Scale & Depth
  scale: {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
  scaleUp: {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },

  // Slide Animations
  slideInLeft: {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
  slideInRight: {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },

  // Rotation & 3D
  rotate: {
    initial: { opacity: 0, rotateY: -15 },
    whileInView: { opacity: 1, rotateY: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },

  // Floating Animation
  float: {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  },

  // Pulse Animation
  pulse: {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  },
} as const;

// ============================================================================
// GRADIENT OVERLAYS - Eco-Modern Tech
// ============================================================================
export const GRADIENT_OVERLAYS = {
  radialPrimary:
    "bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.08),transparent_50%)]",
  radialAccent:
    "bg-[radial-gradient(circle_at_50%_50%,rgba(5,150,105,0.1),transparent_50%)]",
  radialAccentStrong:
    "bg-[radial-gradient(circle_at_50%_50%,rgba(5,150,105,0.2),transparent_70%)]",
  radialTech:
    "bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.15),transparent_60%)]",
  radialEco:
    "bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.1),transparent_50%)]",
  meshGradient:
    "bg-[radial-gradient(at_top_left,rgba(5,150,105,0.15),transparent_50%),radial-gradient(at_top_right,rgba(37,99,235,0.15),transparent_50%),radial-gradient(at_bottom,rgba(16,185,129,0.1),transparent_50%)]",
} as const;

// ============================================================================
// MICRO-INTERACTION TIMING
// ============================================================================
export const TIMING = {
  instant: 100,
  fast: 200,
  normal: 300,
  slow: 500,
  slower: 700,
  slowest: 1000,
} as const;

// ============================================================================
// CURSOR EFFECTS CONFIGURATION
// ============================================================================
export const CURSOR_CONFIG = {
  magneticStrength: 0.3,
  magneticRadius: 100,
  glowSize: 300,
  glowOpacity: 0.15,
  glowColor: "rgba(5, 150, 105, 0.3)",
} as const;

// ============================================================================
// PARTICLE SYSTEM PARAMETERS
// ============================================================================
export const PARTICLE_CONFIG = {
  count: 50,
  speed: 0.5,
  size: { min: 2, max: 4 },
  opacity: { min: 0.1, max: 0.6 },
  colors: ["#10b981", "#059669", "#3b82f6", "#2563eb"],
  connectionDistance: 150,
} as const;

// ============================================================================
// BREAKPOINTS
// ============================================================================
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;
