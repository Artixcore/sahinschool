import { Crown, School, UserRound } from "lucide-react";
import { HoverLift } from "@/components/motion/HoverLift";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

function AvatarPlaceholder({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-sky-100 to-white ring-2 ring-white",
        className,
      )}
    >
      <UserRound className="h-8 w-8 text-sky-400 sm:h-10 sm:w-10" aria-hidden />
    </div>
  );
}

function RoleCard({
  role,
  subtitle,
  highlight,
  badge,
  delay,
}: {
  role: string;
  subtitle: string;
  highlight?: boolean;
  badge?: "crown" | "school";
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <HoverLift>
        <article
          className={cn(
            "flex flex-col items-center rounded-3xl border bg-white p-6 text-center shadow-card transition-shadow hover:shadow-soft",
            highlight ? "border-sky-200 ring-2 ring-sky-100" : "border-sky-100",
          )}
        >
          <div className="relative h-24 w-24 overflow-hidden rounded-full shadow-inner ring-4 ring-sky-50 sm:h-28 sm:w-28">
            <AvatarPlaceholder />
            {badge === "crown" ? (
              <span className="absolute -right-1 -top-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 text-amber-100 shadow-md ring-2 ring-white">
                <Crown className="h-5 w-5" aria-hidden />
              </span>
            ) : null}
            {badge === "school" ? (
              <span className="absolute -right-1 -top-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-600 text-white shadow-md ring-2 ring-white">
                <School className="h-5 w-5" aria-hidden />
              </span>
            ) : null}
          </div>
          <h3 className="mt-4 text-lg font-extrabold text-neutral-900">{role}</h3>
          <p className="mt-1 text-sm font-medium text-neutral-500">{subtitle}</p>
        </article>
      </HoverLift>
    </Reveal>
  );
}

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

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
          <RoleCard
            role="Chairman"
            subtitle="Leadership & vision"
            highlight
            badge="crown"
            delay={0}
          />
          <RoleCard
            role="Principal"
            subtitle="School leadership"
            highlight
            badge="school"
            delay={0.05}
          />
        </div>

        <Reveal delay={0.08}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm font-semibold text-sky-800">
            Teacher profiles will be updated soon.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {teachers.map((n, index) => (
            <Reveal key={n} delay={0.02 * (index % 8)}>
              <HoverLift>
                <article className="rounded-2xl border border-white/80 bg-white/90 p-3 text-center shadow-card backdrop-blur-sm transition-shadow hover:shadow-soft">
                  <div className="mx-auto h-14 w-14 overflow-hidden rounded-full ring-2 ring-sky-50">
                    <AvatarPlaceholder />
                  </div>
                  <h3 className="mt-2 text-xs font-bold text-neutral-900 sm:text-sm">Teacher</h3>
                </article>
              </HoverLift>
            </Reveal>
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
