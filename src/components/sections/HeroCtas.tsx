"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export function HeroCtas() {
  const reduceMotion = useReducedMotion();

  const bounceProps = reduceMotion
    ? {}
    : {
        whileHover: { scale: 1.03, y: -2 },
        whileTap: { scale: 0.98 },
        transition: { type: "spring" as const, stiffness: 400, damping: 18 },
      };

  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <motion.span {...bounceProps}>
        <Link
          href="#programs"
          className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-bold text-white shadow-soft hover:bg-sky-600 sm:text-base"
        >
          Explore Programs
        </Link>
      </motion.span>
      <motion.span {...bounceProps}>
        <Link
          href="#contact"
          className="inline-flex items-center justify-center rounded-full border-2 border-neutral-900 bg-white px-6 py-3 text-sm font-bold text-neutral-900 hover:bg-neutral-900 hover:text-white sm:text-base"
        >
          Contact Us
        </Link>
      </motion.span>
    </div>
  );
}
