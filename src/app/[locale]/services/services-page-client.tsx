"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/locale-context";
import { services, type Service } from "@/data/services";
import { cn } from "@/lib/utils";

const serviceGradients = [
  { bg: "from-purple-500 to-violet-600", light: "purple" },
  { bg: "from-blue-500 to-cyan-600", light: "blue" },
  { bg: "from-cyan-500 to-teal-600", light: "cyan" },
  { bg: "from-emerald-500 to-green-600", light: "emerald" },
  { bg: "from-orange-500 to-amber-600", light: "orange" },
  { bg: "from-pink-500 to-rose-600", light: "pink" },
];

function ServiceCard({
  service,
  index,
  isHovered,
  onHover,
}: {
  service: Service;
  index: number;
  isHovered: boolean;
  onHover: (id: string | null) => void;
}) {
  const { t } = useLocale();
  const Icon = service.icon;
  const serviceData =
    t.servicesList[service.titleKey as keyof typeof t.servicesList];
  const gradient = serviceGradients[index % serviceGradients.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => onHover(service.id)}
      onMouseLeave={() => onHover(null)}
      className="relative group h-full"
    >
      {/* Animated glow effect */}
      <motion.div
        className={cn(
          "absolute -inset-0.5 rounded-3xl bg-linear-to-r opacity-0 blur transition-all duration-500",
          gradient.bg,
        )}
        animate={{ opacity: isHovered ? 0.6 : 0 }}
      />

      <div className="relative h-full bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
        {/* Top gradient bar */}
        <div className={cn("h-1 bg-linear-to-r", gradient.bg)} />

        {/* Spotlight effect on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 pointer-events-none"
            >
              <div
                className={cn(
                  "absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full blur-3xl opacity-20",
                  `bg-${gradient.light}-500`,
                )}
                style={{
                  background: `radial-gradient(circle, ${
                    gradient.light === "purple"
                      ? "#a855f7"
                      : gradient.light === "blue"
                        ? "#3b82f6"
                        : gradient.light === "cyan"
                          ? "#06b6d4"
                          : gradient.light === "emerald"
                            ? "#10b981"
                            : gradient.light === "orange"
                              ? "#f97316"
                              : "#ec4899"
                  }40, transparent 70%)`,
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative p-8">
          {/* Icon with gradient background */}
          <motion.div
            className={cn(
              "w-16 h-16 rounded-2xl bg-linear-to-br flex items-center justify-center text-white shadow-lg",
              gradient.bg,
            )}
            animate={{
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? [0, -5, 5, 0] : 0,
            }}
            transition={{ duration: 0.4 }}
          >
            <Icon className="h-8 w-8" />
          </motion.div>

          {/* Title */}
          <motion.h2
            className="mt-6 text-2xl font-bold text-zinc-900 dark:text-white"
            animate={{ x: isHovered ? 4 : 0 }}
          >
            {serviceData.title}
          </motion.h2>

          {/* Description */}
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {serviceData.description}
          </p>

          {/* Features list */}
          <ul className="mt-6 space-y-3">
            {serviceData.features.map(
              (feature: string, featureIndex: number) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                  className="flex items-start gap-3 text-sm"
                >
                  <span
                    className={cn(
                      "mt-0.5 p-1 rounded-full bg-linear-to-r text-white shrink-0",
                      gradient.bg,
                    )}
                  >
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-zinc-600 dark:text-zinc-400">
                    {feature}
                  </span>
                </motion.li>
              ),
            )}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export function ServicesPageClient() {
  const { t, getLocalizedHref } = useLocale();
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <div className="pt-24 pb-16 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-60 h-60 bg-pink-500/15 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            title={t.services.title}
            subtitle={t.services.pageSubtitle}
          />
        </motion.div>

        {/* Services grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              isHovered={hoveredService === service.id}
              onHover={setHoveredService}
            />
          ))}
        </div>

        {/* Enhanced CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-20"
        >
          <div className="relative">
            {/* Animated border */}
            <div className="absolute -inset-1 bg-linear-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-3xl blur opacity-30 animate-pulse" />

            <div className="relative bg-white dark:bg-zinc-900 rounded-3xl p-12 text-center overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#8881_1px,transparent_1px),linear-gradient(to_bottom,#8881_1px,transparent_1px)] bg-size-[2rem_2rem]" />

              {/* Floating sparkles */}
              <motion.div
                className="absolute top-8 left-12 text-purple-500"
                animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Sparkles className="h-6 w-6" />
              </motion.div>
              <motion.div
                className="absolute bottom-8 right-12 text-blue-500"
                animate={{ y: [0, 10, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Sparkles className="h-6 w-6" />
              </motion.div>
              <motion.div
                className="absolute top-12 right-20 text-cyan-500"
                animate={{ y: [0, -8, 0], rotate: [0, 15, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
              >
                <Sparkles className="h-4 w-4" />
              </motion.div>

              <div className="relative">
                <motion.h2
                  className="text-3xl md:text-4xl font-bold bg-linear-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  {t.services.needSpecific}
                </motion.h2>
                <motion.p
                  className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  {t.services.needSpecificDesc}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="mt-8"
                >
                  <Link href={getLocalizedHref("/contact")}>
                    <Button
                      size="lg"
                      className="group bg-linear-to-r from-purple-600 via-blue-600 to-cyan-600 hover:from-purple-500 hover:via-blue-500 hover:to-cyan-500 border-0 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300"
                    >
                      {t.cta.contactMe}
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
