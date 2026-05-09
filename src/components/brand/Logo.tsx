"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

const INTRINSIC = 256;

type LogoProps = {
  className?: string;
  /**
   * Square box edge (px). Used when `boxClassName` does not set dimensions.
   * @default 56
   */
  size?: number;
  /**
   * When set, dimensions come from Tailwind classes here (e.g. responsive h-/w-).
   * Overrides `size` for layout.
   */
  boxClassName?: string;
  priority?: boolean;
};

export function Logo({
  className,
  size = 56,
  boxClassName,
  priority = false,
}: LogoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        className={cn(
          "inline-flex items-center rounded-full border border-sky-200 bg-white/80 px-3 py-2 text-sm font-bold text-sky-700 shadow-sm backdrop-blur sm:text-base",
          boxClassName,
          className,
        )}
      >
        Sahin School
      </span>
    );
  }

  const boxStyle =
    boxClassName === undefined ? ({ width: size, height: size } as const) : undefined;

  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center overflow-visible",
        boxClassName,
      )}
      style={boxStyle}
    >
      <Image
        src="/assets/logo.png"
        alt="Sahin School, Bagerhat logo"
        width={INTRINSIC}
        height={INTRINSIC}
        priority={priority}
        sizes="(max-width: 640px) 72px, (max-width: 1024px) 80px, 84px"
        className={cn("h-full w-full object-contain object-center p-0.5", className)}
        onError={() => setFailed(true)}
      />
    </span>
  );
}
