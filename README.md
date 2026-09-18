# Opeyemi Samuel Muhammed — Developer Portfolio

Personal portfolio site built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4.

## Stack

- Next.js 16 (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- lucide-react (icons)

## Structure

- `lib/data.ts` — single source of truth for profile info, skills, and projects. Edit this file to update content.
- `components/` — page sections (hero, skills, projects, about, contact) and shared UI.
- `public/projects/` — real project screenshots.

## Development

```bash
npm install
npm run dev
```

## Adding a new project

Add an entry to the `projects` array in `lib/data.ts`. Projects with `status: "case-study"` render the full screenshot gallery and highlights; `status: "coming-soon"` renders a lighter placeholder card until real screenshots/details are ready.

## Deployment

Deployed on Vercel — connect this repo at [vercel.com/new](https://vercel.com/new) and it will build with zero configuration.
