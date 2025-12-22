import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { FAQPage } from "@/components/faq-page";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang as Locale);
    return {
        title: `Dr. Charge - ${dictionary.nav.faq}`,
    };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang as Locale);
    return <FAQPage dictionary={dictionary} />;
}
