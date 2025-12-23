import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { AboutPage } from "@/components/about-page";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as Locale);
  return {
    title: `Dr. Charge - ${dictionary.nav.about}`,
    description: dictionary.about.mission,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as Locale);
  return <AboutPage dictionary={dictionary} />;
}
