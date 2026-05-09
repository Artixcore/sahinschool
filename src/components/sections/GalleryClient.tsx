"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { assetPublicPath } from "@/lib/assetPublicPath";
import { cn } from "@/lib/utils";

export function GalleryClient({ images }: { images: string[] }) {
  const [active, setActive] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  if (images.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-sky-200 bg-sky-50/50 p-12 text-center">
        <p className="text-sm font-semibold text-sky-900 sm:text-base">
          Gallery images will be updated soon.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {images.map((src, index) => (
          <motion.button
            type="button"
            key={src}
            layout={!reduceMotion}
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: reduceMotion ? 0 : (index % 8) * 0.04 }}
            className={cn(
              "group mb-4 w-full cursor-zoom-in break-inside-avoid overflow-hidden rounded-3xl border border-white/80 bg-white shadow-card focus-visible:outline-none",
            )}
            onClick={() => setActive(index)}
          >
            <div className="relative">
              <Image
                src={assetPublicPath(src)}
                alt={`Sahin School gallery photo ${index + 1}`}
                width={800}
                height={600}
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-900/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && images[active] ? (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-neutral-950/70 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label="Gallery preview"
            initial={reduceMotion ? undefined : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            onClick={close}
          >
            <motion.div
              initial={reduceMotion ? undefined : { scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={reduceMotion ? undefined : { scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="absolute right-3 top-3 z-10 inline-flex rounded-full bg-neutral-900/85 p-2 text-white shadow-lg backdrop-blur hover:bg-neutral-900"
                onClick={close}
                aria-label="Close preview"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="relative max-h-[90vh] w-auto bg-neutral-100">
                <Image
                  src={assetPublicPath(images[active])}
                  alt={`Enlarged Sahin School gallery photo ${active + 1}`}
                  width={1400}
                  height={1050}
                  className="max-h-[85vh] w-auto object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
