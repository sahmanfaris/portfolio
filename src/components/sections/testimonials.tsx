"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLocale } from "@/lib/locale-context";
import { testimonials, type Testimonial } from "@/data/testimonials";

const avatarColors = [
  "from-purple-500 to-blue-500",
  "from-blue-500 to-cyan-500",
  "from-cyan-500 to-green-500",
];

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  const { t } = useLocale();
  const colorClass = avatarColors[index % avatarColors.length];
  const data = t.testimonials.list[testimonial.key as keyof typeof t.testimonials.list];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="relative p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:shadow-lg transition-all duration-300"
    >
      {/* Quote icon with gradient */}
      <div
        className={`w-10 h-10 rounded-lg bg-linear-to-r ${colorClass} flex items-center justify-center mb-4`}
      >
        <Quote className="h-5 w-5 text-white" />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      <p className="text-zinc-600 dark:text-zinc-400 mb-6 italic">
        &ldquo;{data.content}&rdquo;
      </p>

      <div className="flex items-center gap-4">
        <div
          className={`w-12 h-12 rounded-full bg-linear-to-r ${colorClass} flex items-center justify-center text-lg font-semibold text-white`}
        >
          {data.name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-zinc-900 dark:text-white">
            {data.name}
          </p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {data.role}, {data.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  const { t } = useLocale();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="mx-auto max-w-6xl px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionHeading
            title={t.testimonials.title}
            subtitle={t.testimonials.subtitle}
          />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
