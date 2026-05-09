import Image from "next/image";
import {
  BookMarked,
  Gamepad2,
  HeartHandshake,
  Mic2,
  MoonStar,
  Palette,
  PartyPopper,
  PenLine,
  Users,
} from "lucide-react";
import { HoverLift } from "@/components/motion/HoverLift";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { assetPublicPath } from "@/lib/assetPublicPath";
import { cn } from "@/lib/utils";

const ACTIVITIES = [
  { title: "Drawing", icon: Palette },
  { title: "Rhymes", icon: Mic2 },
  { title: "Storytelling", icon: MoonStar },
  { title: "Reading", icon: BookMarked },
  { title: "Writing", icon: PenLine },
  { title: "Games", icon: Gamepad2 },
  { title: "Group activities", icon: Users },
  { title: "Cultural programs", icon: PartyPopper },
  { title: "Moral education", icon: HeartHandshake },
] as const;

export function Activities({ activityImages }: { activityImages: string[] }) {
  return (
    <Section id="activities">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
            Activities we love
          </h2>
          <p className="mt-3 text-neutral-600 sm:text-lg">
            Days filled with creativity, rhythm, stories, and friendships.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ACTIVITIES.map((item, index) => {
            const img = activityImages[index % Math.max(activityImages.length, 1)] ?? null;
            return (
              <Reveal key={item.title} delay={0.04 * index}>
                <HoverLift className="h-full">
                  <article className="group h-full overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-card transition-shadow hover:shadow-soft">
                    <div className="relative aspect-[16/10] w-full bg-sky-50">
                      {activityImages.length > 0 && img ? (
                        <Image
                          src={assetPublicPath(img)}
                          alt={`${item.title} activity at Sahin School`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-sky-50 via-white to-accent-sun/40">
                          <item.icon className="h-12 w-12 text-sky-300" aria-hidden />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/55 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-neutral-900 shadow-md backdrop-blur">
                        <item.icon className={cn("h-4 w-4 text-sky-600")} aria-hidden />
                        {item.title}
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm font-semibold text-neutral-700">
                        Celebrating {item.title.toLowerCase()} with age-friendly routines and cheerful
                        participation.
                      </p>
                    </div>
                  </article>
                </HoverLift>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
