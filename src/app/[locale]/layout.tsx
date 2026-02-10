import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LocaleProvider } from "@/lib/locale-context";
import { locales, defaultLocale, type Locale, isValidLocale } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    alternates: {
      canonical: locale === defaultLocale ? "/" : `/${locale}`,
      languages: {
        en: "/",
        bs: "/bs",
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  return (
    <LocaleProvider locale={locale as Locale}>
      <Header />
      <main className="min-h-screen" lang={locale}>
        {children}
      </main>
      <Footer />
    </LocaleProvider>
  );
}
