import {
  Brush,
  GraduationCap,
  Heart,
  Palette,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { HoverLift } from "@/components/motion/HoverLift";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

const ITEMS = [
  {
    title: "Child-friendly learning environment",
    description: "Bright, calm spaces designed for curiosity and comfort every day.",
    icon: Sparkles,
    accent: "bg-accent-sun/80 text-neutral-900",
  },
  {
    title: "Caring and experienced teachers",
    description: "Patient educators who celebrate progress and nurture confidence.",
    icon: GraduationCap,
    accent: "bg-sky-100 text-sky-800",
  },
  {
    title: "Creative classroom activities",
    description: "Hands-on projects that make learning feel like joyful discovery.",
    icon: Palette,
    accent: "bg-accent-apricot/90 text-neutral-900",
  },
  {
    title: "Focus on moral values and discipline",
    description: "Gentle guidance that builds respect, kindness, and responsibility.",
    icon: Heart,
    accent: "bg-accent-mint/90 text-emerald-900",
  },
  {
    title: "Safe and supportive campus",
    description: "A welcoming place where children feel secure and families feel peace of mind.",
    icon: ShieldCheck,
    accent: "bg-sky-50 text-sky-900 ring-1 ring-sky-100",
  },
  {
    title: "Early foundation for future success",
    description: "Strong beginnings in language, numeracy, and confident communication.",
    icon: Brush,
    accent: "bg-white text-neutral-900 ring-1 ring-neutral-100",
  },
] as const;

export function WhyChooseUs() {
  return (
    <Section mutedBg className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[120%] -translate-x-1/2 bg-blob opacity-60" />
      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
            Why families choose us
          </h2>
          <p className="mt-3 text-neutral-600 sm:text-lg">
            Thoughtful care, cheerful classrooms, and a trusted start for your child’s journey.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, index) => (
            <Reveal key={item.title} delay={0.05 * index}>
              <HoverLift className="h-full">
                <article className="group relative h-full overflow-hidden rounded-3xl border border-white/70 bg-white/90 p-6 shadow-card backdrop-blur-sm transition-shadow duration-300 hover:shadow-soft">
                  <div
                    className={cn(
                      "inline-flex h-12 w-12 items-center justify-center rounded-2xl text-[1.35rem] shadow-inner",
                      item.accent,
                    )}
                  >
                    <item.icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-neutral-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{item.description}</p>
                </article>
              </HoverLift>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
