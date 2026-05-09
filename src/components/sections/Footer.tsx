import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#teachers", label: "Teachers" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-sky-100 bg-neutral-950 text-sky-50">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <Logo />
            <p className="text-lg font-extrabold text-white">Sahin School, Bagerhat</p>
            <p className="text-sm text-sky-100/90">Established 2023</p>
            <p className="max-w-xs text-sm leading-relaxed text-sky-100/80">
              A joyful kindergarten experience rooted in care, creativity, and confident beginnings.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">Quick links</h3>
            <ul className="mt-4 space-y-2">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-semibold text-sky-100/85 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm font-semibold text-sky-100/85">
              <li>Bagerhat, Bangladesh</li>
              <li>Phone number will be updated soon</li>
              <li>Email will be updated soon</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">Follow</h3>
            <p className="mt-3 text-sm text-sky-100/75">
              Social links will be updated soon — placeholders below.
            </p>
            <div className="mt-4 flex gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sky-100">
                <Facebook className="h-5 w-5" aria-hidden />
                <span className="sr-only">Facebook (placeholder)</span>
              </span>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sky-100">
                <Instagram className="h-5 w-5" aria-hidden />
                <span className="sr-only">Instagram (placeholder)</span>
              </span>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sky-100">
                <Youtube className="h-5 w-5" aria-hidden />
                <span className="sr-only">YouTube (placeholder)</span>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs leading-relaxed text-sky-100/70 sm:text-sm">
          <p>
            All rights reserved by Sahin School. Developed by  
            <a
              href="https://artixcore.com/"
              className="font-semibold text-white underline-offset-4 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Artixcore LLC, USA
            </a>
            
          </p>
        </div>
      </Container>
    </footer>
  );
}
