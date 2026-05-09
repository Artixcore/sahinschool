import { cn } from "@/lib/utils";

export function Section({
  id,
  className,
  children,
  mutedBg,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
  mutedBg?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-20 py-16 sm:py-20 lg:py-24",
        mutedBg && "bg-sky-50/60",
        className,
      )}
    >
      {children}
    </section>
  );
}
