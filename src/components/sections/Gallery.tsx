import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { excludeLeadershipPortraits, listPublicAssets } from "@/lib/listPublicAssets";
import { GalleryClient } from "./GalleryClient";

export function Gallery() {
  const images = excludeLeadershipPortraits(listPublicAssets("assets"));

  return (
    <Section id="gallery" mutedBg>
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
            Moments from our school
          </h2>
          <p className="mt-3 text-neutral-600 sm:text-lg">
            Warm smiles, colorful classrooms, and celebrations that feel like family.
          </p>
        </Reveal>

        <div className="mt-12">
          <GalleryClient images={images} />
        </div>
      </Container>
    </Section>
  );
}
