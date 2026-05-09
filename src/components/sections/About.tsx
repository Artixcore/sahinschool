import Image from "next/image";
import { HeartHandshake } from "lucide-react";
import { HoverLift } from "@/components/motion/HoverLift";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { assetPublicPath } from "@/lib/assetPublicPath";

export function About({ aboutImage }: { aboutImage: string | null }) {
  return (
    <Section id="about">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-sky-800 ring-1 ring-sky-100">
              <HeartHandshake className="h-4 w-4" aria-hidden />
              Our story
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
              About Sahin School
            </h2>
            <p className="mt-5 text-base leading-relaxed text-neutral-600 sm:text-lg">
              Sahin School, Bagerhat was established in 2023 with a vision to create a safe,
              joyful, and inspiring learning environment for young children. The school focuses on
              early childhood education, discipline, creativity, confidence, moral values, and
              foundational academic skills.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <HoverLift className="mx-auto max-w-md lg:max-w-none">
              <div className="relative overflow-hidden rounded-[2rem] border border-sky-100 bg-white shadow-card transition-shadow hover:shadow-soft">
                {aboutImage ? (
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={assetPublicPath(aboutImage)}
                      alt="Sahin School campus and learning environment in Bagerhat"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-sky-50 to-white p-8 text-center">
                    <p className="text-sm font-semibold text-sky-800">
                      School photo placeholder — add images to{" "}
                      <code className="rounded bg-white px-1.5 py-0.5 text-xs ring-1 ring-sky-100">
                        public/assets
                      </code>
                    </p>
                  </div>
                )}
                <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-white/85 p-4 text-sm font-semibold text-neutral-800 shadow-glass backdrop-blur-md ring-1 ring-white/60">
                  Warm classrooms • Caring mentors • Bright beginnings
                </div>
              </div>
            </HoverLift>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
