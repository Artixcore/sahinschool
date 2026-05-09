import { Reveal } from "@/components/motion/Reveal";
import { TeacherCard } from "@/components/teachers/TeacherCard";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const leadership = [
  {
    role: "Principal",
    subtitle: "School leadership",
    imageSrc: "/assets/principal.jpeg",
    badge: "school" as const,
  },
  {
    role: "Chairman",
    subtitle: "Leadership & vision",
    imageSrc: "/assets/chairman.jpeg",
    badge: "crown" as const,
  },
];

export function Teachers() {
  const teachers = Array.from({ length: 28 }, (_, i) => i + 1);

  return (
    <Section id="teachers" mutedBg className="overflow-hidden">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
            Our team
          </h2>
          <p className="mt-3 text-neutral-600 sm:text-lg">
            Dedicated educators guiding every smile, step, and milestone.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          {leadership.map((person, index) => (
            <TeacherCard
              key={person.role}
              role={person.role}
              subtitle={person.subtitle}
              imageSrc={person.imageSrc}
              badge={person.badge}
              featured
              isLeadership
              highlight
              delay={index === 0 ? 0 : 0.05}
            />
          ))}
        </div>

        <Reveal delay={0.08}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm font-semibold text-sky-800">
            Teacher profiles will be updated soon.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {teachers.map((n, index) => (
            <TeacherCard key={n} role="Teacher" delay={0.02 * (index % 8)} />
          ))}
        </div>

        <Reveal delay={0.06}>
          <p className="mt-10 text-center text-sm text-neutral-600">
            <span className="font-semibold text-neutral-900">28 teachers</span> nurturing joyful
            learning across every classroom.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
