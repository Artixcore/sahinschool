# Sahin School, Bagerhat — Website

Official marketing site for **Sahin School, Bagerhat** — a joyful kindergarten landing page built with **Next.js (App Router)**, **Tailwind CSS**, and **Framer Motion**.

## Prerequisites

- Node.js **18.18+** (recommended: current LTS)
- npm (comes with Node.js)

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production build:

```bash
npm run build
npm start
```

## Deploy on Vercel

1. Push this repo to GitHub (for example `Artixcore/sahinschool`).
2. Open [Vercel](https://vercel.com/new) and **Import** the repository.
3. Use defaults: **Framework Preset** Next.js, **Build Command** `npm run build`, **Install Command** `npm install`.
4. No environment variables are required for this project.
5. Deploy. Later pushes to the connected branch trigger new deployments automatically.

Gallery and hero images are resolved at **build time** from files committed under **`public/`** (see Assets below). Ensure `hero.png` and gallery images are in the repo if you want them on production.

## Assets

Place your images and logo under **`public/assets/`** so they are served at **`/assets/...`**:

- **Logo (required for branding):** `public/assets/logo.png`
- **Dedicated hero (optional, takes priority):** `public/hero.png` at the project root’s `public` folder
- **Photos:** any `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`, or `.avif` files in the same folder

The homepage automatically:

- Uses **`public/hero.png`** for the hero if that file exists; otherwise picks a **hero** image if filenames contain words like `hero`, `banner`, or `cover`
- Picks an **about** image if filenames suggest `about`, `school`, or `building`
- Builds the **gallery** from all images except `logo.png`

If you initially keep images in a root-level `assets/` folder, copy them into **`public/assets/`** for Next.js to serve them.

## Stack

- Next.js, React, TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React (icons)

## Credits

Footer attribution is included per school requirements.
