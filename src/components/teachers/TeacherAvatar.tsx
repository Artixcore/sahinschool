"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { cn } from "@/lib/utils";
import { AvatarPlaceholder } from "./AvatarPlaceholder";

export function TeacherAvatar({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const onError = useCallback(() => {
    setFailed(true);
  }, []);

  if (failed) {
    return (
      <div className={cn("relative h-full w-full overflow-hidden rounded-full", className)}>
        <AvatarPlaceholder className="h-full w-full" />
      </div>
    );
  }

  return (
    <div className={cn("relative h-full w-full overflow-hidden rounded-full", className)}>
      <Image src={src} alt={alt} fill className="object-cover" sizes="140px" onError={onError} />
    </div>
  );
}
