"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardHoverEffectProps {
  items: {
    id: string;
    content: React.ReactNode;
  }[];
  className?: string;
}

export function CardHoverEffect({ items, className }: CardHoverEffectProps) {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

  return (
    <div className={cn("grid gap-8 md:grid-cols-2", className)}>
      {items.map((item) => (
        <div
          key={item.id}
          className="relative group block p-2"
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === item.id && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-linear-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 dark:from-purple-500/20 dark:via-blue-500/20 dark:to-cyan-500/20 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div className="relative z-10">{item.content}</div>
        </div>
      ))}
    </div>
  );
}

interface HoverBorderGradientProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export function HoverBorderGradient({
  children,
  className,
  containerClassName,
}: HoverBorderGradientProps) {
  return (
    <div className={cn("relative group", containerClassName)}>
      {/* Animated gradient border */}
      <div className="absolute -inset-0.5 bg-linear-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500 group-hover:duration-200" />
      <div
        className={cn(
          "relative bg-white dark:bg-zinc-900 rounded-2xl",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}

interface MovingBorderProps {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
  borderClassName?: string;
}

export function MovingBorder({
  children,
  duration = 2000,
  className,
  containerClassName,
  borderClassName,
}: MovingBorderProps) {
  return (
    <div
      className={cn(
        "relative p-px overflow-hidden rounded-2xl",
        containerClassName,
      )}
    >
      <div
        className={cn("absolute inset-0", borderClassName)}
        style={{
          background: `linear-gradient(90deg, transparent, transparent, #a855f7, #3b82f6, #06b6d4, transparent, transparent)`,
          backgroundSize: "200% 200%",
          animation: `movingBorder ${duration}ms linear infinite`,
        }}
      />
      <div
        className={cn(
          "relative bg-white dark:bg-zinc-900 rounded-2xl",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}
