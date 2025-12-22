import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { i18n, type Locale } from "@/i18n-config";
import "../globals.css";
import { getDictionary } from "@/get-dictionary";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Charge - Puissance en déplacement",
  description: "Solutions de recharge premium / Premium Charging Solutions",
  metadataBase: new URL("https://drcharge.ca"), // Placeholder for local/production
  openGraph: {
    images: ["/og-strategy.jpg"],
  },
};



export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as Locale);
  return (
    <html lang={lang}>
      <body
        className={`${inter.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header lang={lang} dictionary={dictionary} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer lang={lang} dictionary={dictionary} />
      </body>
    </html>
  );
}
