import { UserRound } from "lucide-react";
import { cn } from "@/lib/utils";

export function AvatarPlaceholder({ className }: { className?: string }) {
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
