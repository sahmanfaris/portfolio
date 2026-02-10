"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send, Clock, Globe } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/sections/contact-form";
import { WorldMap } from "@/components/ui/world-map";
import { useLocale } from "@/lib/locale-context";
import { siteConfig } from "@/data/site";

// Define connection lines from your location (Bosnia) to different parts of the world
const mapConnections = [
  {
    start: { lat: 43.9159, lng: 17.6791, label: "Bosnia" },
    end: { lat: 51.5074, lng: -0.1278, label: "London" },
  },
  {
    start: { lat: 43.9159, lng: 17.6791, label: "Bosnia" },
    end: { lat: 40.7128, lng: -74.006, label: "New York" },
  },
  {
    start: { lat: 43.9159, lng: 17.6791, label: "Bosnia" },
    end: { lat: 52.52, lng: 13.405, label: "Berlin" },
  },
  {
    start: { lat: 43.9159, lng: 17.6791, label: "Bosnia" },
    end: { lat: 35.6762, lng: 139.6503, label: "Tokyo" },
  },
];

export function ContactPageClient() {
  const { t } = useLocale();

  return (
    <div className="pt-24 pb-16 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            title={t.contact.title}
            subtitle={t.contact.subtitle}
          />
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            {/* Contact details cards */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full" />
                {t.contact.info}
              </h2>

              {/* Email card */}
              <motion.a
                href={`mailto:${siteConfig.email}`}
                className="group flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-cyan-500/50 transition-all duration-300"
                whileHover={{ x: 4 }}
              >
                <div className="w-12 h-12 rounded-xl bg-linear-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/40 transition-shadow">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-zinc-500 dark:text-zinc-500">
                    {t.contact.email}
                  </p>
                  <p className="text-zinc-900 dark:text-white font-medium group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {siteConfig.email}
                  </p>
                </div>
                <Send className="h-5 w-5 text-zinc-400 group-hover:text-cyan-500 transition-colors" />
              </motion.a>

              {/* Location card */}
              <motion.div
                className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
                whileHover={{ x: 4 }}
              >
                <div className="w-12 h-12 rounded-xl bg-linear-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg shadow-purple-500/25">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-500">
                    {t.contact.location}
                  </p>
                  <p className="text-zinc-900 dark:text-white font-medium">
                    {t.contact.locationValue}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Availability card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-linear-to-r from-green-500 to-emerald-500 rounded-2xl opacity-0 group-hover:opacity-50 blur transition-opacity duration-300" />
              <div className="relative p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-zinc-900 dark:text-white text-sm">
                        {t.contact.availability}
                      </h3>
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                      </span>
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400">
                      {t.contact.availabilityText}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* World Map */}
            <div className="relative flex-1">
              <div className="absolute -inset-0.5 bg-linear-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl blur opacity-20" />
              <div className="relative bg-zinc-900/90 rounded-2xl p-4 border border-zinc-800 h-full">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 rounded-lg bg-linear-to-r from-cyan-500 to-blue-500">
                    <Globe className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">
                      Remote Connectivity
                    </p>
                    <p className="text-xs text-zinc-400">
                      {t.contact.remoteText}
                    </p>
                  </div>
                </div>
                <WorldMap
                  dots={mapConnections}
                  lineColor="#06b6d4"
                  className="bg-zinc-950/50 rounded-xl"
                />
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl blur opacity-20" />
            <div className="relative p-10 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl h-full">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-8 flex items-center gap-2">
                <span className="w-8 h-1 bg-linear-to-r from-cyan-500 to-purple-500 rounded-full" />
                {t.contact.sendMessage}
              </h2>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
