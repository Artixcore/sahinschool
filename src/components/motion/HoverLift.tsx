"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type HoverLiftProps = {
  children: React.ReactNode;
  className?: string;
};

export function HoverLift({ children, className }: HoverLiftProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.995 }}
      transition={{ type: "spring", stiffness: 420, damping: 24 }}
    >
      {children}
    </motion.div>
  );
}
