import type { Metadata } from "next";
import { ProjectsPageClient } from "./projects-page-client";
import { getTranslations, defaultLocale, type Locale } from "@/lib/i18n";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);

  const title = t.projects.allProjectsTitle;
  const description = t.projects.allProjectsSubtitle;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: locale === defaultLocale ? "/projects" : `/${locale}/projects`,
    },
    alternates: {
      canonical: locale === defaultLocale ? "/projects" : `/${locale}/projects`,
      languages: {
        en: "/projects",
        bs: "/bs/projects",
      },
    },
  };
}

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
