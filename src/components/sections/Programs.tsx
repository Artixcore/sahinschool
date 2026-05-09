import { Baby, BookOpen, Globe2, Paintbrush, Puzzle, School } from "lucide-react";
import { HoverLift } from "@/components/motion/HoverLift";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const PROGRAMS = [
  {
    title: "Play Group",
    description: "Gentle routines, sensory play, and joyful first steps into school life.",
    icon: Baby,
  },
  {
    title: "Nursery",
    description: "Story-rich days that build listening skills and confident communication.",
    icon: Puzzle,
  },
  {
    title: "KG",
    description: "Structured joy — letters, numbers, friendship, and classroom readiness.",
    icon: School,
  },
  {
    title: "Early Learning Activities",
    description: "Movement, music, and exploration crafted for growing minds.",
    icon: BookOpen,
  },
  {
    title: "Art & Creativity",
    description: "Colors, crafts, and imagination — confidence through creation.",
    icon: Paintbrush,
  },
  {
    title: "Basic English, Bangla, Math, and General Knowledge",
    description: "Friendly foundations that prepare learners for the next chapter.",
    icon: Globe2,
  },
] as const;

export function Programs() {
  return (
    <Section id="programs">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
            Programs & classes
          </h2>
          <p className="mt-3 text-neutral-600 sm:text-lg">
            Kindergarten-level pathways designed for laughter, learning, and steady growth.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((program, index) => (
            <Reveal key={program.title} delay={0.05 * index}>
              <HoverLift className="h-full">
                <article className="flex h-full flex-col rounded-3xl border border-sky-100 bg-gradient-to-br from-white via-white to-sky-50/80 p-6 shadow-card transition-shadow duration-300 hover:shadow-soft">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500 text-white shadow-soft">
                    <program.icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-neutral-900">{program.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">
                    {program.description}
                  </p>
                </article>
              </HoverLift>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
