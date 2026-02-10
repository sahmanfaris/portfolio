"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, Globe, Check } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import { cn } from "@/lib/utils";
import { locales, localeNames, defaultLocale, type Locale } from "@/lib/i18n";

export function LanguageSwitcher() {
  const { locale } = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (newLocale: Locale) => {
    // Get the path without locale prefix
    const segments = pathname.split("/").filter(Boolean);
    const firstSegment = segments[0];
    
    // Check if first segment is a locale
    const hasLocalePrefix = locales.includes(firstSegment as Locale);
    const pathWithoutLocale = hasLocalePrefix 
      ? "/" + segments.slice(1).join("/") 
      : pathname;
    
    // Build new pathname
    let newPathname: string;
    if (newLocale === defaultLocale) {
      // Default locale has no prefix
      newPathname = pathWithoutLocale || "/";
    } else {
      // Non-default locale has prefix
      newPathname = `/${newLocale}${pathWithoutLocale}`;
    }
    
    router.push(newPathname);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <Globe className="h-4 w-4" />
        <span>{localeNames[locale]}</span>
        <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 py-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-lg z-50">
          {locales.map((loc) => (
            <button
              key={loc}
              onClick={() => handleSelect(loc)}
              className={cn(
                "flex items-center justify-between w-full px-4 py-2 text-sm transition-colors",
                locale === loc
                  ? "text-zinc-900 dark:text-white bg-zinc-50 dark:bg-zinc-800"
                  : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800"
              )}
              role="option"
              aria-selected={locale === loc}
            >
              <span>{localeNames[loc]}</span>
              {locale === loc && <Check className="h-4 w-4" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
