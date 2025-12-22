import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "./i18n-config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string | undefined {
    // Negotiator expects plain object so we need to transform headers
    const negotiatorHeaders: Record<string, string> = {};
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

    // Use negotiator and intl-localematcher to get best locale
    // @ts-ignore
    let languages: string[] | undefined;
    try {
        languages = new Negotiator({ headers: negotiatorHeaders }).languages();
    } catch (e) {
        languages = [i18n.defaultLocale];
    }

    // @ts-ignore
    const locales: string[] = i18n.locales;
    try {
        return matchLocale(languages || [i18n.defaultLocale], locales, i18n.defaultLocale);
    } catch (e) {
        return i18n.defaultLocale;
    }
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // Check if the file is a public asset (image, video, etc)
    // Next.js automatically serves files in public folder, but middleware intercepts them if regex is missing them
    if (
        pathname.endsWith(".jpg") ||
        pathname.endsWith(".jpeg") ||
        pathname.endsWith(".png") ||
        pathname.endsWith(".svg") ||
        pathname.endsWith(".mp4") ||
        pathname.endsWith(".ico")
    ) {
        return NextResponse.next();
    }

    // Check if there is any supported locale in the pathname
    const pathnameIsMissingLocale = i18n.locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request);

        // e.g. incoming request is /products
        // The new URL is now /en-US/products
        return NextResponse.redirect(
            new URL(
                `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
                request.url
            )
        );
    }
}

export const config = {
    // Matcher excluding API, static, image and specific file extensions
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)"],
};
