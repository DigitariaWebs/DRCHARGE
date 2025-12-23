"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, Mail, MapPin, Phone, Leaf, Award, Send, Check } from "lucide-react";
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
    <footer className="bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white pt-20 pb-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2310b981%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-emerald-600/20 via-teal-600/20 to-blue-600/20 backdrop-blur-md border border-emerald-500/30 rounded-3xl p-8 md:p-12 mb-16"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              {dictionary.footer.newsletter.title}
            </h3>
            <p className="text-gray-300 mb-6">
              Get updates on new stations, features, and sustainability initiatives
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
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
                className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-xl font-semibold transition-all"
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
          <div className="space-y-6">
            <Link
              href={`/${lang}`}
              className="flex items-center gap-2 font-bold text-xl tracking-tighter group"
            >
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-1.5 rounded-lg group-hover:scale-110 transition-transform">
                <Zap className="h-5 w-5 fill-current" />
              </div>
              <span>Dr. Charge</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              {dictionary.hero.subtitle}
            </p>
            
            {/* Certifications */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Leaf className="h-4 w-4 text-emerald-500" />
                <span className="text-gray-300">{dictionary.footer.certifications.carbon_neutral}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Award className="h-4 w-4 text-teal-500" />
                <span className="text-gray-300">{dictionary.footer.certifications.green_energy}</span>
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
                  className="hover:text-emerald-400 transition-colors inline-flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    {dictionary.nav.services}
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/about`}
                  className="hover:text-emerald-400 transition-colors inline-flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    {dictionary.nav.about}
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/faq`}
                  className="hover:text-emerald-400 transition-colors inline-flex items-center group"
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
                <MapPin className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>Montréal, Québec, Canada</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                <a
                  href="mailto:info@drcharge.ca"
                  className="hover:text-white transition-colors"
                >
                  info@drcharge.ca
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-emerald-500 flex-shrink-0" />
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
                className="bg-gradient-to-r from-gray-800 to-gray-700 h-12 w-40 rounded-xl flex items-center justify-center text-xs text-gray-300 border border-gray-600 hover:border-emerald-500/50 transition-colors cursor-pointer"
              >
                App Store
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-gray-800 to-gray-700 h-12 w-40 rounded-xl flex items-center justify-center text-xs text-gray-300 border border-gray-600 hover:border-emerald-500/50 transition-colors cursor-pointer"
              >
                Google Play
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© 2025 Dr. Charge. {dictionary.footer.rights}</p>
          <p className="text-gray-600">{dictionary.footer.credit}</p>
        </div>
      </div>
    </footer>
  );
}
