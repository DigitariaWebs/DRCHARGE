import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { ServicesPage } from "@/components/services-page";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as Locale);
  return {
    title: `Dr. Charge - ${dictionary.nav.services}`,
    description: dictionary.hero.subtitle,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as Locale);
  return <ServicesPage dictionary={dictionary} />;
}
