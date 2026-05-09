import { Crown, School } from "lucide-react";
import { HoverLift } from "@/components/motion/HoverLift";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";
import { AvatarPlaceholder } from "./AvatarPlaceholder";
import { TeacherAvatar } from "./TeacherAvatar";

export type TeacherCardProps = {
  role: string;
  subtitle?: string;
  imageSrc?: string | null;
  badge?: "crown" | "school";
  featured?: boolean;
  isLeadership?: boolean;
  highlight?: boolean;
  delay?: number;
};

export function TeacherCard({
  role,
  subtitle,
  imageSrc,
  badge,
  featured,
  isLeadership,
  highlight,
  delay = 0,
}: TeacherCardProps) {
  const isLead = Boolean(isLeadership || featured);

  return (
    <Reveal delay={delay}>
      <HoverLift>
        <article
          className={cn(
            "flex flex-col items-center text-center shadow-card transition-shadow hover:shadow-soft",
            isLead
              ? cn(
                  "rounded-3xl border bg-white p-7 sm:p-8",
                  highlight ? "border-sky-200 ring-2 ring-sky-100" : "border-sky-100",
                )
              : "rounded-2xl border border-white/80 bg-white/90 p-3 backdrop-blur-sm",
          )}
        >
          <div className="relative">
            <div
              className={cn(
                "relative overflow-hidden rounded-full shadow-inner",
                isLead
                  ? "h-[120px] w-[120px] ring-4 ring-sky-50 sm:h-[135px] sm:w-[135px] md:h-[140px] md:w-[140px]"
                  : "mx-auto h-14 w-14 ring-2 ring-sky-50",
              )}
            >
              {imageSrc ? (
                <TeacherAvatar src={imageSrc} alt={`${role} portrait`} />
              ) : (
                <AvatarPlaceholder className="h-full w-full" />
              )}
            </div>
            {isLead && badge === "crown" ? (
              <span className="absolute -right-1 -top-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 text-amber-100 shadow-md ring-2 ring-white">
                <Crown className="h-5 w-5" aria-hidden />
              </span>
            ) : null}
            {isLead && badge === "school" ? (
              <span className="absolute -right-1 -top-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-600 text-white shadow-md ring-2 ring-white">
                <School className="h-5 w-5" aria-hidden />
              </span>
            ) : null}
          </div>
          <h3
            className={cn(
              "text-neutral-900",
              isLead ? "mt-4 text-lg font-extrabold" : "mt-2 text-xs font-bold sm:text-sm",
            )}
          >
            {role}
          </h3>
          {subtitle ? (
            <p
              className={cn(
                "font-medium text-neutral-500",
                isLead ? "mt-1 text-sm" : "mt-0.5 text-[10px] sm:text-xs",
              )}
            >
              {subtitle}
            </p>
          ) : null}
        </article>
      </HoverLift>
    </Reveal>
  );
}
