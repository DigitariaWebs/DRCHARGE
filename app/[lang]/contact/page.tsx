import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { ContactPage } from "@/components/contact-page";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as Locale);
  return {
    title: `Dr. Charge - ${dictionary.nav.contact}`,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as Locale);
  return <ContactPage dictionary={dictionary} />;
}
