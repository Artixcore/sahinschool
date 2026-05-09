import { Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { GOOGLE_MAPS_EMBED_SRC, GOOGLE_MAPS_PLACE_URL } from "@/lib/site";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <Section id="contact">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
            Contact Sahin School
          </h2>
          <p className="mt-3 text-neutral-600 sm:text-lg">
            We would love to welcome your family — reach out for admissions or a campus visit.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
          <Reveal delay={0.05}>
            <div className="space-y-6 rounded-3xl border border-sky-100 bg-sky-50/40 p-6 shadow-inner sm:p-8">
              <div>
                <h3 className="text-lg font-extrabold text-neutral-900">Sahin School, Bagerhat</h3>
                <p className="mt-2 inline-flex items-start gap-2 text-neutral-700">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-sky-600" aria-hidden />
                  <a
                    href={GOOGLE_MAPS_PLACE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-sky-700 underline-offset-2 hover:text-sky-800 hover:underline"
                  >
                    Bagerhat, Bangladesh
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-sky-600" aria-hidden />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-neutral-500">Phone</p>
                  <p className="mt-1 font-semibold text-neutral-800">
                    Phone number will be updated soon
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-sky-600" aria-hidden />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-neutral-500">Email</p>
                  <p className="mt-1 font-semibold text-neutral-800">
                    Email will be updated soon
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-sky-200 bg-white shadow-inner">
                <div className="aspect-video w-full">
                  <iframe
                    title="Sahin School on Google Maps"
                    src={GOOGLE_MAPS_EMBED_SRC}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full border-0"
                  />
                </div>
                <p className="border-t border-sky-100 bg-sky-50/60 px-4 py-3 text-center">
                  <a
                    href={GOOGLE_MAPS_PLACE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-sky-700 underline-offset-2 hover:text-sky-900 hover:underline"
                  >
                    Open in Google Maps
                  </a>
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
