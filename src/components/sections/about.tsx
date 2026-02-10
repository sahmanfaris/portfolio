"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLocale } from "@/lib/locale-context";

const skills = [
  { name: "JavaScript/TypeScript", color: "from-yellow-500 to-yellow-600" },
  { name: "React & Next.js", color: "from-cyan-500 to-blue-600" },
  { name: "Node.js", color: "from-green-500 to-green-600" },
  { name: "PostgreSQL", color: "from-blue-500 to-indigo-600" },
  { name: "MongoDB", color: "from-green-600 to-emerald-600" },
  { name: "Docker", color: "from-blue-400 to-blue-600" },
  { name: "AWS", color: "from-orange-500 to-orange-600" },
  { name: "GraphQL", color: "from-pink-500 to-pink-600" },
];

export function About() {
  const { t } = useLocale();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950" />

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionHeading title={t.about.title} subtitle={t.about.subtitle} />
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-4">
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {t.about.p1}
              </p>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {t.about.p2}
              </p>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {t.about.p3}
              </p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-6">
              {t.about.techTitle}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-linear-to-r ${skill.color} text-white shadow-lg shadow-${skill.color.split("-")[1]}-500/25 cursor-default`}
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="text-3xl font-bold bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  7+
                </div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                  {t.about.stats.years}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <div className="text-3xl font-bold bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  10+
                </div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                  {t.about.stats.projects}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <div className="text-3xl font-bold bg-linear-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent">
                  10+
                </div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                  {t.about.stats.clients}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
