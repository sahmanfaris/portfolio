import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { ServicesPreview } from "@/components/sections/services-preview";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";
import { PersonJsonLd, WebSiteJsonLd } from "@/components/seo/json-ld";
import { getTranslations, defaultLocale, type Locale } from "@/lib/i18n";
import { siteConfig } from "@/data/site";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);

  const title = t.hero.title;
  const description = t.hero.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: locale === defaultLocale ? "/" : `/${locale}`,
    },
    alternates: {
      canonical: locale === defaultLocale ? "/" : `/${locale}`,
      languages: {
        en: "/",
        bs: "/bs",
      },
    },
  };
}

export default function Home() {
  return (
    <>
      <PersonJsonLd />
      <WebSiteJsonLd />
      <Hero />
      <About />
      <FeaturedProjects />
      <ServicesPreview />
      <Testimonials />
      <CTA />
    </>
  );
}
