# Inkio Agency — Marketing Website

This repository contains the source for the Inkio Agency marketing website — a modern, component-driven Next.js site built with the App Router and TypeScript.

**Quick overview**

- Purpose: company marketing site for services and case studies.
- Framework: Next.js (app directory) with React and TypeScript.

## Features

- Component-driven layout using React + TypeScript
- Tailwind CSS for utility-first styling
- Accessible, responsive UI components in `components/` and `sections/`
- Simple modal audit flow in `components/ui/AuditModal.tsx`

## Tech stack

- Next.js 16.x (App Router)
- React 19
- TypeScript
- Tailwind CSS
- ESLint
- Small utilities: `clsx`, `lucide-react`, `tailwind-merge`

## Quick start

Prerequisites: Node.js (recommended 18+), npm.

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
npm start
```

Lint the code:

```bash
npm run lint
```

Open http://localhost:3000 to view the site locally.

## Project structure

- `app/` — Next.js App Router pages and layout
- `components/` — shared components (`layout/Header.tsx`, `layout/Footer.tsx`)
- `sections/` — page sections used to compose pages (Hero, Results, Solutions, etc.)
- `public/` — static assets
- `next.config.ts`, `tsconfig.json`, `postcss.config.mjs` — configuration

## Development notes

- Edit pages in `app/` and components in `components/` or `sections/`.
- The project uses Tailwind CSS (see `postcss.config.mjs`).

## Deployment

The app is ready to deploy to Vercel or any platform that supports Next.js. For Vercel, connect the repository and use the default build command `npm run build`.

## Contributing

- Open an issue to discuss changes or create a PR with a clear description and tests where applicable.

## License

This project is provided under the MIT License. Update the license section as needed for your project.

## Contact

For questions about the project or deployment, contact the maintainers.

- Email: [ebunarimoro@gmail.com](mailto:ebunarimoro@gmail.com)

---

Generated README for the Inkio Agency Next.js site.
