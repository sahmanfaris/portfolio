"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLocale } from "@/lib/locale-context";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { siteConfig } from "@/data/site";
import { locales, type Locale } from "@/lib/i18n";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { t, getLocalizedHref } = useLocale();

  const navLinks = [
    { href: getLocalizedHref("/"), label: t.nav.home },
    { href: getLocalizedHref("/projects"), label: t.nav.projects },
    { href: getLocalizedHref("/services"), label: t.nav.services },
    { href: getLocalizedHref("/contact"), label: t.nav.contact },
  ];

  const isActive = (href: string) => {
    // Get path without locale for comparison
    const segments = pathname.split("/").filter(Boolean);
    const firstSegment = segments[0];
    const hasLocalePrefix = locales.includes(firstSegment as Locale);
    const pathWithoutLocale = hasLocalePrefix 
      ? "/" + segments.slice(1).join("/") 
      : pathname;
    
    // Get href without locale for comparison
    const hrefSegments = href.split("/").filter(Boolean);
    const hrefFirstSegment = hrefSegments[0];
    const hrefHasLocalePrefix = locales.includes(hrefFirstSegment as Locale);
    const hrefWithoutLocale = hrefHasLocalePrefix 
      ? "/" + hrefSegments.slice(1).join("/") 
      : href;

    if (hrefWithoutLocale === "/" || hrefWithoutLocale === "") {
      return pathWithoutLocale === "/" || pathWithoutLocale === "";
    }
    return pathWithoutLocale.startsWith(hrefWithoutLocale);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100 dark:bg-zinc-950/80 dark:border-zinc-800">
      <nav className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href={getLocalizedHref("/")}
            className="text-xl font-bold text-zinc-900 dark:text-white"
          >
            {siteConfig.name.split(" ")[0]}
            <span className="text-zinc-400">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-zinc-900 dark:hover:text-white",
                  isActive(link.href)
                    ? "text-zinc-900 dark:text-white"
                    : "text-zinc-600 dark:text-zinc-400"
                )}
              >
                {link.label}
              </Link>
            ))}
            <LanguageSwitcher />
            <Link
              href="/cv.pdf"
              target="_blank"
              className="inline-flex h-9 items-center justify-center rounded-lg bg-zinc-900 px-4 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
            >
              {t.nav.downloadCV}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher />
            <button
              className="p-2 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950"
          >
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block py-2 text-base font-medium transition-colors",
                    isActive(link.href)
                      ? "text-zinc-900 dark:text-white"
                      : "text-zinc-600 dark:text-zinc-400"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/cv.pdf"
                target="_blank"
                onClick={() => setIsOpen(false)}
                className="block py-2 text-base font-medium text-zinc-900 dark:text-white"
              >
                {t.nav.downloadCV}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
