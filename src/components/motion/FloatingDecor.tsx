"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

function Cloud({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 48"
      className={cn("text-white/90 drop-shadow-sm", className)}
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M96 28c0-11-9-20-20-20-2 0-4 .4-6 1a24 24 0 10-44 12h70z"
      />
    </svg>
  );
}

function Star({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("text-sky-300", className)} aria-hidden>
      <path
        fill="currentColor"
        d="M12 2l2.9 7.4h7.9l-6.4 4.9 2.4 7.7L12 14.9 5.2 22l2.4-7.7L1.2 9.4h7.9z"
      />
    </svg>
  );
}

export function FloatingDecor({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  const drift = reduceMotion
    ? {}
    : {
        animate: { y: [0, -10, 0], rotate: [0, 2, -2, 0] },
        transition: {
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut" as const,
        },
      };

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden
    >
      <motion.div
        className="absolute -left-8 top-10 h-72 w-72 rounded-full bg-sky-200/35 blur-3xl"
        animate={reduceMotion ? undefined : { scale: [1, 1.06, 1], opacity: [0.45, 0.65, 0.45] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-sky-100/70 blur-3xl"
        animate={reduceMotion ? undefined : { scale: [1.05, 1, 1.05], opacity: [0.5, 0.75, 0.5] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div className="absolute left-[8%] top-[18%] w-28 opacity-80" {...drift}>
        <Cloud />
      </motion.div>
      <motion.div
        className="absolute right-[12%] top-[12%] w-36 opacity-75"
        {...(reduceMotion
          ? {}
          : {
              animate: { y: [0, -14, 0] },
              transition: { duration: 9, repeat: Infinity, ease: "easeInOut" },
            })}
      >
        <Cloud />
      </motion.div>
      <motion.div
        className="absolute bottom-[22%] left-[18%] w-20 opacity-70"
        {...(reduceMotion
          ? {}
          : {
              animate: { y: [0, -8, 0], rotate: [0, -6, 0] },
              transition: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
            })}
      >
        <Cloud />
      </motion.div>

      <motion.span
        className="absolute left-[22%] top-[40%]"
        {...(reduceMotion
          ? {}
          : {
              animate: { scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] },
              transition: { duration: 5, repeat: Infinity },
            })}
      >
        <Star className="h-6 w-6" />
      </motion.span>
      <motion.span
        className="absolute right-[26%] top-[34%]"
        {...(reduceMotion
          ? {}
          : {
              animate: { scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] },
              transition: { duration: 6, repeat: Infinity, delay: 0.7 },
            })}
      >
        <Star className="h-5 w-5 text-amber-100" />
      </motion.span>
      <motion.span
        className="absolute bottom-[30%] right-[20%]"
        {...(reduceMotion
          ? {}
          : {
              animate: { rotate: [0, 15, -10, 0], y: [0, -6, 0] },
              transition: { duration: 7, repeat: Infinity },
            })}
      >
        <Star className="h-7 w-7 text-sky-200" />
      </motion.span>
    </div>
  );
}
