"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function GlassCard({ children, className, hover = true, glow = false }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "glass-card rounded-2xl p-6 transition-all duration-300",
        hover && "cursor-pointer hover:border-indigo-500/30 dark:hover:border-indigo-500/30",
        glow && "hover:shadow-glow",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

// end of GlassCard
