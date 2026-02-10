"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/locale-context";
import { type Project } from "@/data/projects";

interface Props {
  project: Project;
}

export function ProjectDetailClient({ project }: Props) {
  const { t, getLocalizedHref } = useLocale();
  const projectData =
    t.projectsList[project.titleKey as keyof typeof t.projectsList];

  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Back link */}
        <Link
          href={getLocalizedHref("/projects")}
          className="inline-flex items-center text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t.projects.backToProjects}
        </Link>

        {/* Project image */}
        <div className="relative overflow-hidden rounded-2xl aspect-video mb-8">
          <Image
            src={project.image}
            alt={projectData.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Project info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
              {projectData.title}
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              {projectData.description}
            </p>
          </div>

          {/* Tech stack */}
          <div>
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-white mb-3">
              {t.projects.technologies}
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-sm font-medium px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  {t.projects.viewLive}
                </Button>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline">
                  <Github className="mr-2 h-4 w-4" />
                  {t.projects.sourceCode}
                </Button>
              </a>
            )}
          </div>

          {/* Long description */}
          <div className="pt-8 border-t border-zinc-100 dark:border-zinc-800">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">
              {t.projects.aboutProject}
            </h2>
            <div className="prose prose-zinc dark:prose-invert max-w-none">
              <p className="text-zinc-600 dark:text-zinc-400">
                {projectData.longDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
