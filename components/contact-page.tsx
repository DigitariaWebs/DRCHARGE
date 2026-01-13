"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send, MapPin, Mail } from "lucide-react";

interface ContactPageProps {
  dictionary: Dictionary;
}

export function ContactPage({ dictionary }: ContactPageProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    const body = `Nom: ${formState.name}\nEmail: ${formState.email}\nTéléphone: ${formState.phone}\n\nMessage:\n${formState.message}`;
    const mailto = `mailto:info@drcharge.ca?subject=${encodeURIComponent(formState.subject || "Contact Dr. Charge")}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSuccess(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-24 pb-16 bg-[#F9F9F9]">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              {dictionary.contact.title}
            </h1>
            <p className="text-xl text-gray-600">
              Une question? Un devis? Notre équipe vous répond sous 24h.
            </p>

            <div className="space-y-6 pt-8">
              <div className="flex items-center gap-4 text-lg">
                <div className="h-12 w-12 rounded-full bg-[#38A169]/10 flex items-center justify-center text-[#38A169]">
                  <MapPin className="h-6 w-6" />
                </div>
                <span className="text-gray-900">Montréal, Québec, Canada</span>
              </div>
              <div className="flex items-center gap-4 text-lg">
                <div className="h-12 w-12 rounded-full bg-[#38A169]/10 flex items-center justify-center text-[#38A169]">
                  <Mail className="h-6 w-6" />
                </div>
                <a
                  href="mailto:info@drcharge.ca"
                  className="hover:text-[#38A169] transition-colors text-gray-900"
                >
                  info@drcharge.ca
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  {dictionary.contact.form.name}
                </label>
                <input
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    {dictionary.contact.form.email}
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    {dictionary.contact.form.phone}
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    value={formState.phone}
                    onChange={handleChange}
                    className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  {dictionary.contact.form.subject}
                </label>
                <input
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  {dictionary.contact.form.message}
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 resize-y"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#38A169] hover:bg-[#38A169]/90 text-white"
              >
                {success
                  ? dictionary.contact.form.success
                  : dictionary.contact.form.send}
                {!success && <Send className="ml-2 h-4 w-4" />}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
