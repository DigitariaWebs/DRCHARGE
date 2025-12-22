import Link from "next/link";
import { Zap, Mail, MapPin, Phone } from "lucide-react";

interface FooterProps {
    lang: string;
    dictionary: any;
}

export function Footer({ lang, dictionary }: FooterProps) {
    return (
        <footer className="bg-gray-950 text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-4">
                        <Link href={`/${lang}`} className="flex items-center gap-2 font-bold text-xl tracking-tighter">
                            <div className="bg-primary text-white p-1.5 rounded-lg">
                                <Zap className="h-5 w-5 fill-current" />
                            </div>
                            <span>Dr. Charge</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {dictionary.hero.subtitle}
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-lg">{dictionary.nav.home}</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href={`/${lang}/services`} className="hover:text-primary transition-colors">{dictionary.nav.services}</Link></li>
                            <li><Link href={`/${lang}/about`} className="hover:text-primary transition-colors">{dictionary.nav.about}</Link></li>
                            <li><Link href={`/${lang}/faq`} className="hover:text-primary transition-colors">{dictionary.nav.faq}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-lg">{dictionary.common.contact}</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-primary" />
                                <span>Montréal, Québec, Canada</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-primary" />
                                <a href="mailto:info@drcharge.ca" className="hover:text-white transition-colors">info@drcharge.ca</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-primary" />
                                <span>514-369-3699</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-lg">App</h3>
                        <div className="flex flex-col gap-3">
                            {/* Placeholders for App Store buttons */}
                            <div className="bg-gray-800 h-10 w-32 rounded flex items-center justify-center text-xs text-gray-400 border border-gray-700">App Store</div>
                            <div className="bg-gray-800 h-10 w-32 rounded flex items-center justify-center text-xs text-gray-400 border border-gray-700">Google Play</div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                    <p>© 2025 Dr. Charge. {dictionary.footer.rights}</p>
                    <p>{dictionary.footer.credit}</p>
                </div>
            </div>
        </footer>
    );
}
