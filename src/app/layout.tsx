import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sahin School, Bagerhat",
  description:
    "Official website of Sahin School, Bagerhat. A joyful kindergarten school established in 2023.",
  openGraph: {
    title: "Sahin School, Bagerhat",
    description:
      "Official website of Sahin School, Bagerhat. A joyful kindergarten school established in 2023.",
    locale: "en_BD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahin School, Bagerhat",
    description:
      "Official website of Sahin School, Bagerhat. A joyful kindergarten school established in 2023.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#e0f2fe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} scroll-smooth`}>
      <body className="relative font-sans antialiased">
        <a
          href="#main-content"
          className="absolute left-[-9999px] top-0 z-[200] rounded-full bg-white px-4 py-2 text-sm font-bold text-neutral-900 shadow-lg outline-none ring-2 ring-sky-400 focus:left-4 focus:top-4"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
