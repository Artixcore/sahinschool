import Image from "next/image";
import { Sparkles } from "lucide-react";
import { FloatingDecor } from "@/components/motion/FloatingDecor";
import { HeroImageFrame } from "@/components/motion/HeroImageFrame";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { HeroCtas } from "./HeroCtas";

export function Hero({ heroImageSrc }: { heroImageSrc: string | null }) {
  return (
    <div
      id="home"
      className="relative scroll-mt-28 overflow-hidden bg-sky-gradient pt-8 sm:scroll-mt-32 sm:pt-12"
    >
      <FloatingDecor />
      <Container className="relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="order-2 lg:order-1">
            <Reveal>
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/70 px-3 py-1 text-xs font-semibold text-sky-800 shadow-sm backdrop-blur sm:text-sm">
                <Sparkles className="h-4 w-4 text-sky-500" aria-hidden />
                Established in 2023
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-2 text-balance text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
                Welcome to Sahin School, Bagerhat
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-neutral-600 sm:text-lg">
                A joyful place where little minds learn, play, and grow.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <HeroCtas />
            </Reveal>
          </div>

          <Reveal delay={0.08} className="order-1 lg:order-2">
            <HeroImageFrame
              className={cn(
                "relative mx-auto max-w-lg overflow-hidden rounded-[2rem] border border-white/80 bg-white/60 shadow-soft backdrop-blur-md lg:max-w-none",
              )}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(125,211,252,0.35),transparent_45%)]" />
              {heroImageSrc ? (
                <div className="relative aspect-[5/4] w-full">
                  <Image
                    src={heroImageSrc}
                    alt="Children learning happily at Sahin School, Bagerhat"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              ) : (
                <div className="relative flex aspect-[5/4] w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-sky-100 via-white to-sky-50 p-8 text-center">
                  <span className="text-5xl" aria-hidden>
                    📚
                  </span>
                  <p className="max-w-xs text-sm font-semibold text-sky-800">
                    Add{" "}
                    <code className="rounded bg-white/80 px-1.5 py-0.5 text-xs">hero.png</code> to{" "}
                    <code className="rounded bg-white/80 px-1.5 py-0.5 text-xs">public</code>
                    , or place photos in{" "}
                    <code className="rounded bg-white/80 px-1.5 py-0.5 text-xs">public/assets</code>.
                  </p>
                </div>
              )}
              <div className="pointer-events-none absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-accent-sun/90 blur-2xl" />
              <div className="pointer-events-none absolute -left-10 top-10 h-24 w-24 rounded-full bg-accent-mint/80 blur-2xl" />
            </HeroImageFrame>
          </Reveal>
        </div>
      </Container>

      <div className="relative z-10 mt-14 h-16 rounded-t-[3rem] bg-white sm:h-20" />
    </div>
  );
}
