import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/sections/About";
import { Activities } from "@/components/sections/Activities";
import { AdmissionCTA } from "@/components/sections/AdmissionCTA";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { Programs } from "@/components/sections/Programs";
import { Teachers } from "@/components/sections/Teachers";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import {
  listPublicAssets,
  pickFeaturedImages,
  resolveHeroImageSrc,
} from "@/lib/listPublicAssets";

export default function HomePage() {
  const galleryFilenames = listPublicAssets("assets");
  const featured = pickFeaturedImages(galleryFilenames);

  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero heroImageSrc={resolveHeroImageSrc(featured.hero)} />
        <About aboutImage={featured.about} />
        <WhyChooseUs />
        <Programs />
        <Teachers />
        <Activities activityImages={featured.activities} />
        <Gallery />
        <AdmissionCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
