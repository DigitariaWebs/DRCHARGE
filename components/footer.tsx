"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Leaf, Award, Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FooterProps {
  lang: string;
  dictionary: Dictionary;
}

export function Footer({ lang, dictionary }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <footer className="bg-[#1A4B3A] text-white pt-20 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 md:p-12 mb-16"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              {dictionary.footer.newsletter.title}
            </h3>
            <p className="text-gray-300 mb-6">
              Get updates on new stations, features, and sustainability
              initiatives
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={dictionary.footer.newsletter.placeholder}
                className="flex-1 px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
              <Button
                type="submit"
                className="px-8 py-3 bg-[#38A169] hover:bg-[#38A169]/90 text-white rounded-lg font-semibold transition-all"
              >
                {subscribed ? (
                  <>
                    <Check className="h-5 w-5 mr-2" />
                    {dictionary.footer.newsletter.success}
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    {dictionary.footer.newsletter.button}
                  </>
                )}
              </Button>
            </form>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href={`/${lang}`}>
              <Image
                src="/logo-transparent.png"
                alt="Dr. Charge Logo"
                width={500}
                height={500}
                className="w-64"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              {dictionary.hero.subtitle}
            </p>

            {/* Certifications */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Leaf className="h-4 w-4 text-[#38A169]" />
                <span className="text-gray-300">
                  {dictionary.footer.certifications.carbon_neutral}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Award className="h-4 w-4 text-[#38A169]" />
                <span className="text-gray-300">
                  {dictionary.footer.certifications.green_energy}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">
              {dictionary.nav.home}
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link
                  href={`/${lang}/services`}
                  className="hover:text-[#38A169] transition-colors inline-flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    {dictionary.nav.services}
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/about`}
                  className="hover:text-[#38A169] transition-colors inline-flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    {dictionary.nav.about}
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/faq`}
                  className="hover:text-[#38A169] transition-colors inline-flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    {dictionary.nav.faq}
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">
              {dictionary.common.contact}
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#38A169] mt-0.5 flex-shrink-0" />
                <span>Montréal, Québec, Canada</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#38A169] flex-shrink-0" />
                <a
                  href="mailto:info@drcharge.ca"
                  className="hover:text-white transition-colors"
                >
                  info@drcharge.ca
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#38A169] flex-shrink-0" />
                <span>514-369-3699</span>
              </li>
            </ul>
          </div>

          {/* App Column */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">App</h3>
            <div className="flex flex-col gap-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 h-12 w-40 rounded-lg flex items-center justify-center text-xs text-gray-300 border border-white/20 hover:border-[#38A169]/50 transition-colors cursor-pointer"
              >
                App Store
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 h-12 w-40 rounded-lg flex items-center justify-center text-xs text-gray-300 border border-white/20 hover:border-[#38A169]/50 transition-colors cursor-pointer"
              >
                Google Play
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>© 2025 Dr. Charge. {dictionary.footer.rights}</p>
          <p className="text-gray-600">{dictionary.footer.credit}</p>
        </div>
      </div>
    </footer>
  );
}
