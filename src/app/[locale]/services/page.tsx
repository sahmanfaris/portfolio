import type { Metadata } from "next";
import { ServicesPageClient } from "./services-page-client";
import { getTranslations, defaultLocale, type Locale } from "@/lib/i18n";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);

  const title = t.services.title;
  const description = t.services.pageSubtitle;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: locale === defaultLocale ? "/services" : `/${locale}/services`,
    },
    alternates: {
      canonical: locale === defaultLocale ? "/services" : `/${locale}/services`,
      languages: {
        en: "/services",
        bs: "/bs/services",
      },
    },
  };
}

export default function ServicesPage() {
  return <ServicesPageClient />;
}
