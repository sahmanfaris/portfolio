import type { Metadata } from "next";
import { ContactPageClient } from "./contact-page-client";
import { getTranslations, defaultLocale, type Locale } from "@/lib/i18n";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);

  const title = t.contact.title;
  const description = t.contact.subtitle;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: locale === defaultLocale ? "/contact" : `/${locale}/contact`,
    },
    alternates: {
      canonical: locale === defaultLocale ? "/contact" : `/${locale}/contact`,
      languages: {
        en: "/contact",
        bs: "/bs/contact",
      },
    },
  };
}

export default function ContactPage() {
  return <ContactPageClient />;
}
