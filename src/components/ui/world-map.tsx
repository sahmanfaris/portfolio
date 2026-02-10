"use client";

import { useRef, useMemo } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";
import { cn } from "@/lib/utils";

interface MapDot {
  start: { lat: number; lng: number; label?: string };
  end: { lat: number; lng: number; label?: string };
}

interface WorldMapProps {
  dots?: MapDot[];
  lineColor?: string;
  className?: string;
}

export function WorldMap({
  dots = [],
  lineColor = "#06b6d4",
  className,
}: WorldMapProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  const svgMap = useMemo(() => {
    const map = new DottedMap({ height: 100, grid: "diagonal" });
    return map.getSVG({
      radius: 0.22,
      color: "#6b7280",
      shape: "circle",
      backgroundColor: "transparent",
    });
  }, []);

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number },
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div
      className={cn(
        "w-full aspect-2/1 rounded-2xl relative overflow-hidden",
        className,
      )}
    >
      {/* Dotted map background */}
      <div
        className="absolute inset-0 opacity-50 dark:opacity-30"
        dangerouslySetInnerHTML={{ __html: svgMap }}
        style={{
          width: "100%",
          height: "100%",
        }}
      />

      {/* Animated connections */}
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={lineColor} stopOpacity="0" />
            <stop offset="50%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor={lineColor} stopOpacity="0" />
          </linearGradient>
        </defs>

        {dots.map((dot, index) => {
          const start = projectPoint(dot.start.lat, dot.start.lng);
          const end = projectPoint(dot.end.lat, dot.end.lng);
          const path = createCurvedPath(start, end);

          return (
            <g key={`connection-${index}`}>
              {/* Animated path line */}
              <motion.path
                d={path}
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  pathLength: {
                    duration: 2,
                    delay: index * 0.5,
                    ease: "easeInOut",
                  },
                  opacity: { duration: 0.5, delay: index * 0.5 },
                }}
              />

              {/* Start dot */}
              <motion.circle
                cx={start.x}
                cy={start.y}
                r="4"
                fill={lineColor}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.5, duration: 0.3 }}
              />
              <motion.circle
                cx={start.x}
                cy={start.y}
                r="8"
                fill={lineColor}
                opacity="0.3"
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.5, 1] }}
                transition={{
                  delay: index * 0.5,
                  duration: 2,
                  repeat: Infinity,
                }}
              />

              {/* End dot */}
              <motion.circle
                cx={end.x}
                cy={end.y}
                r="4"
                fill={lineColor}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.5 + 1, duration: 0.3 }}
              />
              <motion.circle
                cx={end.x}
                cy={end.y}
                r="8"
                fill={lineColor}
                opacity="0.3"
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.5, 1] }}
                transition={{
                  delay: index * 0.5 + 1,
                  duration: 2,
                  repeat: Infinity,
                }}
              />

              {/* Moving dot along path */}
              <motion.circle
                r="3"
                fill={lineColor}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{
                  duration: 3,
                  delay: index * 0.5 + 0.5,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                <animateMotion
                  dur="3s"
                  repeatCount="indefinite"
                  path={path}
                  begin={`${index * 0.5 + 0.5}s`}
                />
              </motion.circle>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
