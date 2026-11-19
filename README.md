# [floza.dev](https://floza.dev)

Personal site and portfolio for **Florian Vallen** — software engineer based in Leipzig. Single-page layout with bio, skills, experience, selected projects, and contact links. Built to be fast, accessible, and easy to update from one content file.

## Tech stack

- [Next.js](https://nextjs.org) 16 (App Router)
- [React](https://react.dev) 19
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) 4 (Turbopack integration)

## Getting started

**Requirements:** Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The dev server uses Turbopack.

### Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Development server       |
| `npm run build`| Production build         |
| `npm run start`| Serve production build   |
| `npm run lint` | ESLint (Next.js config)  |

## Project layout

```
app/
  components/     # UI sections (hero, experience, projects, …)
  globals.css     # Global styles and Tailwind theme
  layout.tsx      # Metadata, fonts (Geist)
  page.tsx        # Home page composition
lib/
  site-content.ts # Profile, skills, experience, projects, nav
public/           # Static assets (CV PDF, images)
```

Most copy and links live in **`lib/site-content.ts`**. Edit that file to change the hero, about text, résumé entries, project cards, or in-page navigation — no need to hunt through components unless you change layout or styling.

Components read from that module and stay presentational: `Hero`, `ExperienceList`, `ProjectList`, `SocialLinks`, etc. on `app/page.tsx`.

## Content notes

- **CV:** `public/Florian_Vallen_CV.pdf` — linked via `profile.cvHref` in site content.
- **Profile image:** `public/profile.jpg` — used in metadata / Open Graph (`app/layout.tsx`).
- **Project images:** under `public/projects/` where referenced in `projects` entries.

## Deployment

The site is configured for [floza.dev](https://floza.dev) (`metadataBase` in `app/layout.tsx`). A standard Next.js deploy (e.g. [Vercel](https://vercel.com)) works: connect the repo, use `npm run build`, and set the production domain.

## License

Private project (`package.json`). The live site content is personal; the codebase is not published as open source unless stated otherwise.