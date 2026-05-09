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

const navLinkClass =
  "relative rounded-full px-3 py-2 text-sm font-semibold text-neutral-800 outline-none transition-colors duration-200 after:pointer-events-none after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-sky-500 after:transition-transform after:duration-200 hover:bg-sky-50/90 hover:text-sky-700 hover:after:scale-x-100 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let ticking = false;
    const update = () => {
      setIsScrolled(window.scrollY > 20);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  const motionSafe = !reduceMotion;

  return (
    <motion.header
      initial={false}
      className={cn(
        "sticky top-0 z-50 border-b backdrop-blur-md transition-[background-color,box-shadow,border-color,backdrop-filter] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
        isScrolled
          ? "border-sky-100 bg-white/93 shadow-[0_10px_40px_-18px_rgba(15,23,42,0.18)] backdrop-blur-xl"
          : "border-sky-100/50 bg-white/62 shadow-none backdrop-blur-md",
      )}
    >
      <Container
        className={cn(
          "grid w-full grid-cols-[auto_1fr_auto] items-center gap-3 transition-[min-height,padding-top,padding-bottom] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] sm:gap-4 lg:gap-6",
          isScrolled
            ? "min-h-[68px] py-2 sm:min-h-[72px] lg:min-h-[76px] lg:py-2.5"
            : "min-h-[88px] py-3 sm:min-h-[92px] lg:min-h-[112px] lg:py-4",
        )}
      >
        <Link
          href="#home"
          className="flex shrink-0 items-center justify-self-start focus-visible:rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2"
        >
          <Logo
            priority
            boxClassName={cn(
              "transition-[width,height] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
              isScrolled
                ? "h-12 w-12 sm:h-[52px] sm:w-[52px]"
                : "h-16 w-16 sm:h-[72px] sm:w-[72px] lg:h-[76px] lg:w-[76px]",
            )}
          />
        </Link>

        <nav className="hidden min-w-0 items-center justify-center lg:flex" aria-label="Primary">
          <ul className="flex flex-wrap items-center justify-center gap-1 xl:gap-2">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={navLinkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center justify-end justify-self-end gap-2 xl:gap-3">
          <div className="hidden items-center gap-2 lg:flex xl:gap-3">
            <Link
              href="#admission"
              className="rounded-full bg-sky-500 px-4 py-2 text-sm font-bold text-white shadow-soft transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-sky-600 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 active:translate-y-0"
            >
              Apply Now
            </Link>
            <Link
              href="#contact"
              className="rounded-full border border-neutral-900 px-4 py-2 text-sm font-bold text-neutral-900 transition-colors duration-200 hover:bg-neutral-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2"
            >
              Contact Us
            </Link>
          </div>
          <button
            type="button"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-sky-200/90 bg-white/95 p-2 text-neutral-900 shadow-sm transition-[background-color,box-shadow,transform] duration-200 hover:bg-sky-50 hover:shadow-md lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle menu</span>
            {open ? <X className="h-6 w-6 shrink-0" aria-hidden /> : <Menu className="h-6 w-6 shrink-0" aria-hidden />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={motionSafe ? { opacity: 0, height: 0 } : false}
            animate={{ opacity: 1, height: "auto" }}
            exit={motionSafe ? { opacity: 0, height: 0 } : undefined}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "overflow-hidden border-t lg:hidden",
              isScrolled ? "border-sky-100 bg-white/98 backdrop-blur-xl" : "border-sky-100/70 bg-white/95 backdrop-blur-lg",
            )}
          >
            <Container className="flex flex-col gap-1 py-4 pb-5">
              {LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={motionSafe ? { opacity: 0, x: -12 } : false}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: motionSafe ? 0.04 * i : 0 }}
                >
                  <Link
                    href={link.href}
                    className="block rounded-xl px-4 py-3.5 text-base font-semibold text-neutral-900 transition-colors hover:bg-sky-50 active:bg-sky-100"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-3 flex flex-col gap-3 pt-1">
                <Link
                  href="#admission"
                  className="rounded-xl bg-sky-500 px-4 py-3.5 text-center text-base font-bold text-white shadow-soft transition-colors hover:bg-sky-600"
                  onClick={() => setOpen(false)}
                >
                  Apply Now
                </Link>
                <Link
                  href="#contact"
                  className="rounded-xl border-2 border-neutral-900 px-4 py-3.5 text-center text-base font-bold text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
