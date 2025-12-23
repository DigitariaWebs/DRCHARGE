import { getDictionary } from "@/get-dictionary";
import { LandingPage } from "@/components/landing-page";
import { Locale } from "@/i18n-config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as Locale);
  return {
    title: `Dr. Charge - ${dictionary.hero.title}`,
    description: dictionary.hero.subtitle,
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as Locale);
  return <LandingPage lang={lang} dictionary={dictionary} />;
}
