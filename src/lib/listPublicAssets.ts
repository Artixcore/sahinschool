import "server-only";

import fs from "fs";
import path from "path";
import { cache } from "react";

const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);

function safeReadDir(dir: string): string[] {
  try {
    return fs.readdirSync(dir);
  } catch {
    return [];
  }
}

/** Image filenames under `public/<segment>` (e.g. `assets` → `public/assets`). */
export const listPublicAssets = cache((segment: string): string[] => {
  const dir = path.join(process.cwd(), "public", segment);
  return safeReadDir(dir)
    .filter((name) => IMAGE_EXT.has(path.extname(name).toLowerCase()))
    .filter((name) => name.toLowerCase() !== "logo.png")
    .filter((name) => !name.startsWith("."))
    .sort((a, b) => a.localeCompare(b));
});

/** Prefer `public/hero.png`, then a hero-like file from `assets`, else null. */
export function resolveHeroImageSrc(galleryHeroFilename: string | null): string | null {
  const rootHero = path.join(process.cwd(), "public", "hero.png");
  try {
    fs.accessSync(rootHero);
    return "/hero.png";
  } catch {
    /* no root hero */
  }
  if (galleryHeroFilename) return `/assets/${galleryHeroFilename}`;
  return null;
}

/** Prefer hero/about/feature filenames; otherwise first gallery image. */
export function pickFeaturedImages(allImages: string[]) {
  const lower = (n: string) => n.toLowerCase();

  const findMatch = (patterns: string[]) =>
    allImages.find((img) => patterns.some((p) => lower(img).includes(p)));

  const hero =
    findMatch(["hero", "banner", "cover"]) ??
    allImages.find((img) => lower(img).startsWith("hero")) ??
    allImages[0] ??
    null;

  const about =
    findMatch(["about", "school", "building"]) ??
    allImages.find((img) => img !== hero) ??
    allImages[0] ??
    null;

  const activityPool = allImages.filter((img) => img !== hero && img !== about);

  return {
    hero,
    about,
    activities: activityPool.slice(0, 6),
    gallery: allImages,
  };
}
