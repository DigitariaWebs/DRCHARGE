"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, Zap } from "lucide-react";

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
        }
    };
}

export function Header({ lang, dictionary }: HeaderProps) {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const pathname = usePathname();
    const router = useRouter();

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
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
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                isScrolled ? "bg-white/80 backdrop-blur-md border-gray-200 py-2" : "bg-transparent py-4 text-white"
            )}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href={`/${lang}`} className="flex items-center gap-2 font-bold text-xl tracking-tighter">
                    <div className="bg-primary text-white p-1.5 rounded-lg">
                        <Zap className="h-5 w-5 fill-current" />
                    </div>
                    <span className={isScrolled ? "text-foreground" : "text-white"}>Dr. Charge</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary relative group",
                                isScrolled ? "text-muted-foreground" : "text-white/90"
                            )}
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <Link href={switchLang()} className={cn(
                        "flex items-center gap-1 text-xs font-medium uppercase tracking-wider px-2 py-1 rounded transition-colors",
                        isScrolled ? "hover:bg-secondary text-foreground" : "text-white hover:bg-white/20"
                    )}>
                        <Globe className="h-3 w-3" />
                        {lang === "fr" ? "EN" : "FR"}
                    </Link>
                    <Button
                        variant={isScrolled ? "default" : "secondary"}
                        size="sm"
                        onClick={() => router.push(`/${lang}/contact`)}
                    >
                        {dictionary.common.contact}
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={cn("md:hidden p-2", isScrolled ? "text-foreground" : "text-white")}
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
                            className="fixed inset-y-0 right-0 w-3/4 max-w-sm bg-background border-l shadow-2xl z-50 md:hidden flex flex-col p-6"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <span className="font-bold text-lg">Menu</span>
                                <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                                    <X className="h-5 w-5" />
                                </Button>
                            </div>

                            <div className="flex flex-col gap-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                ))}

                                <hr className="my-2" />

                                <Link
                                    href={`/${lang}/contact`}
                                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {dictionary.common.contact}
                                </Link>

                                <div className="mt-auto">
                                    <Link href={switchLang()} className="flex items-center gap-2 font-medium">
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
