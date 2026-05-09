"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#teachers", label: "Teachers" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-sky-100/80 bg-white/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-[72px]">
        <Link href="#home" className="flex shrink-0 items-center gap-2 focus-visible:rounded-lg">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm font-semibold text-neutral-800 transition-colors hover:bg-sky-50 hover:text-sky-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="#admission"
            className="rounded-full bg-sky-500 px-4 py-2 text-sm font-bold text-white shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-sky-600 focus-visible:rounded-full active:translate-y-0"
          >
            Apply Now
          </Link>
          <Link
            href="#contact"
            className="rounded-full border border-neutral-900 px-4 py-2 text-sm font-bold text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white focus-visible:rounded-full"
          >
            Contact Us
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-sky-100 bg-white p-2 text-neutral-900 shadow-sm lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          {open ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduceMotion ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-sky-100 bg-white lg:hidden"
          >
            <Container className="flex flex-col gap-2 py-4">
              {LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: reduceMotion ? 0 : 0.04 * i }}
                >
                  <Link
                    href={link.href}
                    className="block rounded-xl px-3 py-3 text-base font-semibold text-neutral-900 hover:bg-sky-50"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-2 flex flex-col gap-2">
                <Link
                  href="#admission"
                  className="rounded-xl bg-sky-500 px-4 py-3 text-center text-base font-bold text-white shadow-soft"
                  onClick={() => setOpen(false)}
                >
                  Apply Now
                </Link>
                <Link
                  href="#contact"
                  className={cn(
                    "rounded-xl border border-neutral-900 px-4 py-3 text-center text-base font-bold text-neutral-900",
                  )}
                  onClick={() => setOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
