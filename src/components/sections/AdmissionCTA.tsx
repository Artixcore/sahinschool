"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function AdmissionCTA() {
  const reduceMotion = useReducedMotion();
  const tapProps = reduceMotion
    ? {}
    : { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 } };

  return (
    <Section id="admission" className="relative overflow-hidden py-20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-100 via-white to-sky-50" />
      <div className="pointer-events-none absolute -left-10 top-10 h-40 w-40 rounded-full bg-accent-sun/70 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-52 w-52 rounded-full bg-sky-200/60 blur-3xl" />

      <Container className="relative">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-sky-100 bg-white/90 p-8 text-center shadow-soft backdrop-blur-md sm:p-12">
            <h2 className="text-balance text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
              Start Your Child&apos;s Learning Journey With Us
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-neutral-600 sm:text-lg">
              Enroll your child at Sahin School, Bagerhat and give them a joyful beginning to
              education.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <motion.span {...tapProps}>
                <Link
                  href="#contact"
                  className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-bold text-white shadow-soft hover:bg-sky-600 sm:text-base"
                >
                  Contact for Admission
                </Link>
              </motion.span>
              <motion.span {...tapProps}>
                <Link
                  href="#contact"
                  className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border-2 border-neutral-900 bg-white px-6 py-3 text-sm font-bold text-neutral-900 hover:bg-neutral-900 hover:text-white sm:text-base"
                >
                  Visit Our School
                </Link>
              </motion.span>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
