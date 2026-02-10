import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

const baseUrl = siteConfig.url;

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages (English has no prefix, Bosnian has /bs prefix)
  const staticPages = ["", "/projects", "/services", "/contact"];

  const staticEntries = staticPages.flatMap((page) => [
    {
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: page === "" ? 1 : 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}${page}`,
          bs: `${baseUrl}/bs${page}`,
        },
      },
    },
    {
      url: `${baseUrl}/bs${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: page === "" ? 0.9 : 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}${page}`,
          bs: `${baseUrl}/bs${page}`,
        },
      },
    },
  ]);

  // Project detail pages
  const projectEntries = projects.flatMap((project) => [
    {
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          en: `${baseUrl}/projects/${project.slug}`,
          bs: `${baseUrl}/bs/projects/${project.slug}`,
        },
      },
    },
    {
      url: `${baseUrl}/bs/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
      alternates: {
        languages: {
          en: `${baseUrl}/projects/${project.slug}`,
          bs: `${baseUrl}/bs/projects/${project.slug}`,
        },
      },
    },
  ]);

  return [...staticEntries, ...projectEntries];
}
