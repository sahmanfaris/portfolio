"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/locale-context";
import { featuredProjects, type Project } from "@/data/projects";

const projectColors = [
  "from-purple-500 to-blue-500",
  "from-blue-500 to-cyan-500",
  "from-cyan-500 to-green-500",
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t, getLocalizedHref } = useLocale();
  const colorClass = projectColors[index % projectColors.length];
  const projectData =
    t.projectsList[project.titleKey as keyof typeof t.projectsList];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl p-4 h-full hover:shadow-xl transition-all duration-300 hover:border-transparent relative overflow-hidden">
        {/* Gradient border on hover */}
        <div
          className={`absolute inset-0 rounded-2xl bg-linear-to-r ${colorClass} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
        />
        <div className="absolute inset-px rounded-2xl bg-white dark:bg-zinc-900 -z-10" />

        <div
          className="relative overflow-hidden rounded-xl aspect-video mb-5"
        >
          {/* Project image */}
          <Image
            src={project.image}
            alt={projectData.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Gradient overlay */}
          <div className={`absolute inset-0 bg-linear-to-br ${colorClass} opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white text-zinc-900 hover:bg-zinc-100 transition-colors"
                aria-label="View live site"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="h-5 w-5" />
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white text-zinc-900 hover:bg-zinc-100 transition-colors"
                aria-label="View source code"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="h-5 w-5" />
              </motion.a>
            )}
          </div>
        </div>

        <Link href={getLocalizedHref(`/projects/${project.slug}`)}>
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {projectData.title}
          </h3>
        </Link>

        <p className="mt-2 text-zinc-600 dark:text-zinc-400 line-clamp-2 text-sm">
          {projectData.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function FeaturedProjects() {
  const { t, getLocalizedHref } = useLocale();

  return (
    <section className="py-24 bg-zinc-50/50 dark:bg-zinc-900/50">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionHeading
            title={t.projects.title}
            subtitle={t.projects.subtitle}
          />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link href={getLocalizedHref("/projects")}>
            <Button className="group bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 border-0">
              {t.projects.viewAll}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
