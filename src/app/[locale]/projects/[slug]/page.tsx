import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { ProjectDetailClient } from "./project-detail-client";
import { getTranslations, defaultLocale, type Locale } from "@/lib/i18n";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const t = getTranslations(locale as Locale);
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Not Found" };
  }

  const projectData =
    t.projectsList[project.titleKey as keyof typeof t.projectsList];
  const title = projectData.title;
  const description = projectData.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url:
        locale === defaultLocale
          ? `/projects/${slug}`
          : `/${locale}/projects/${slug}`,
    },
    alternates: {
      canonical:
        locale === defaultLocale
          ? `/projects/${slug}`
          : `/${locale}/projects/${slug}`,
      languages: {
        en: `/projects/${slug}`,
        bs: `/bs/projects/${slug}`,
      },
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
