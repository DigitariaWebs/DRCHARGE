"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";

interface HeaderProps {
  lang: string;
  dictionary: {
    nav: {
      home: string;
      services: string;
      about: string;
      faq: string;
      contact: string;
    };
    common: {
      contact: string;
      install_app: string;
    };
  };
}

export function Header({ lang, dictionary }: HeaderProps) {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Scroll progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  React.useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: `/${lang}`, label: dictionary.nav.home },
    { href: `/${lang}/services`, label: dictionary.nav.services },
    { href: `/${lang}/about`, label: dictionary.nav.about },
    { href: `/${lang}/faq`, label: dictionary.nav.faq },
  ];

  const switchLang = () => {
    const newLang = lang === "fr" ? "en" : "fr";
    // sophisticated regex to replace lang segment
    const segments = pathname.split("/");
    // segments[1] is typically the lang if valid
    segments[1] = newLang;
    return segments.join("/");
  };

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-24",
        "bg-[#1A4B3A] text-white",
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#38A169] origin-left"
        style={{ scaleX }}
      />

      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-full">
        {/* Logo */}
        <Link
          href={`/${lang}`}
          className="font-bold text-xl tracking-tighter group flex items-center h-full"
        >
          <motion.div
            className="transition-all duration-300 h-full flex items-center"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Image
              src="/logo-transparent.png"
              alt="Dr. Charge Logo"
              width={500}
              height={500}
              className="h-full w-auto"
            />
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-md group",
                  isActive
                    ? "text-white bg-[#38A169]/20"
                    : "text-white/90 hover:text-white hover:bg-white/10",
                )}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-[#38A169] w-1/2"
                    layoutId="activeNav"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href={switchLang()}
            className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 border border-white/30 hover:border-white/50 text-white"
          >
            <Globe className="h-4 w-4" />
            <span className="uppercase tracking-wider text-xs font-semibold">
              {lang === "fr" ? "EN" : "FR"}
            </span>
          </Link>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              className="px-6 py-2 rounded-md font-semibold transition-all duration-300 bg-[#38A169] hover:bg-[#38A169]/90 text-white"
              onClick={() => router.push(`/${lang}/contact`)}
            >
              {dictionary.common.contact}
            </Button>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed inset-y-0 right-0 w-3/4 max-w-sm bg-[#1A4B3A] border-l border-white/10 shadow-2xl z-50 md:hidden flex flex-col p-6"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-bold text-lg">Menu</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium text-white hover:text-[#38A169] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                <hr className="my-2 border-white/10" />

                <Link
                  href={`/${lang}/contact`}
                  className="text-lg font-medium text-white hover:text-[#38A169] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {dictionary.common.contact}
                </Link>

                <div className="mt-auto">
                  <Link
                    href={switchLang()}
                    className="flex items-center gap-2 font-medium"
                  >
                    <Globe className="h-4 w-4" />
                    Switch to {lang === "fr" ? "English" : "Français"}
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
