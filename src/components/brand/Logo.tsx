"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  height = 44,
}: {
  className?: string;
  height?: number;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        className={cn(
          "inline-flex items-center rounded-full border border-sky-200 bg-white/80 px-3 py-1 text-sm font-bold text-sky-700 shadow-sm backdrop-blur sm:text-base",
          className,
        )}
      >
        Sahin School
      </span>
    );
  }

  const width = Math.round(height * 3);

  return (
    <Image
      src="/assets/logo.png"
      alt="Sahin School, Bagerhat logo"
      width={width}
      height={height}
      className={cn("h-auto w-auto max-h-[44px] object-contain sm:max-h-[52px]", className)}
      priority
      onError={() => setFailed(true)}
    />
  );
}
