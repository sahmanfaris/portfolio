"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/locale-context";
import { services, type Service } from "@/data/services";

const iconColors = [
  "from-purple-500 to-purple-600",
  "from-blue-500 to-blue-600",
  "from-cyan-500 to-cyan-600",
  "from-green-500 to-green-600",
  "from-orange-500 to-orange-600",
  "from-pink-500 to-pink-600",
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const { t } = useLocale();
  const Icon = service.icon;
  const colorClass = iconColors[index % iconColors.length];
  const serviceData =
    t.servicesList[service.titleKey as keyof typeof t.servicesList];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-transparent transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 relative overflow-hidden"
    >
      {/* Gradient border on hover */}
      <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-purple-500 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
      <div className="absolute inset-px rounded-2xl bg-white dark:bg-zinc-900 -z-10" />

      <motion.div
        className={`w-12 h-12 rounded-xl bg-linear-to-r ${colorClass} flex items-center justify-center text-white shadow-lg`}
        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        <Icon className="h-6 w-6" />
      </motion.div>

      <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-white">
        {serviceData.title}
      </h3>

      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {serviceData.description}
      </p>
    </motion.div>
  );
}

export function ServicesPreview() {
  const { t, getLocalizedHref } = useLocale();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-linear-to-r from-purple-500/5 via-blue-500/5 to-cyan-500/5 rounded-full blur-3xl -z-10" />

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionHeading
            title={t.services.title}
            subtitle={t.services.subtitle}
          />
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link href={getLocalizedHref("/services")}>
            <Button
              variant="outline"
              className="group border-zinc-300 dark:border-zinc-700"
            >
              {t.services.viewMore}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
