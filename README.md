# Hazem El-Azb · Portfolio

Personal portfolio of **Hazem Eid Abd El-Raouf El-Azb**, Backend .NET Developer.

Built with **Angular 21 + TypeScript**, standalone components, signals, and zoneless change detection.
The page is **prerendered to static HTML at build time**, so it can be hosted on any static host
(Vercel, GitHub Pages, Netlify, …) and search engines and link previews see the full content without running JavaScript.

## Requirements

- Node.js `^20.19`, `^22.12`, or `>=24`
- npm

## Run locally

```bash
npm install
npm start
```

Open http://localhost:4200. The page reloads when you save a file.

## Production build

```bash
npm run build
```

Output: `dist/hazem-portfolio/browser/`. This is a plain static site (prerendered `index.html`, JS, CSS, the CV PDF, and images).
To preview the build locally, serve that folder with any static server, for example:

```bash
npx serve dist/hazem-portfolio/browser
```

## Editing content

All CV content lives in typed data files. The components only render it, so you rarely need to touch templates.

| File | What it contains |
| --- | --- |
| `src/app/data/profile.ts` | Name, headline, summary, contact details, languages, About text, "What I work on" cards, CV file path |
| `src/app/data/experience.ts` | Roles, dates, locations, highlights, technologies, links |
| `src/app/data/projects.ts` | Selected work. Company and dates come from the linked experience entry (`experienceId`) |
| `src/app/data/skills.ts` | Tech stack groups (`featured: true` also puts a skill in the hero badges) and the hero "stack" diagram |
| `src/app/data/education.ts` | Education and certifications |
| `src/app/data/site.ts` | Page title, meta description, public URL, navigation |

Dates use `'YYYY-MM'` (or `'YYYY'` when only the year is known). `end: null` marks the current role;
durations such as "1 yr 3 mos" are calculated automatically.

### Replacing the CV

Replace `public/cv/Hazem-Eid-Abd-El-Raouf-El-Azb-CV.pdf` with the new file (same name),
or change `profile.cv.href` in `src/app/data/profile.ts`.

### Open Graph image

`public/og-image.png` (1200×630) is shown when the link is shared on LinkedIn, Slack, etc.

## Deployment

After the first deployment, set `site.url` in `src/app/data/site.ts` to the public URL
(for example `https://hazem-elazb.vercel.app`) and redeploy. It is used for the canonical link and
absolute Open Graph URLs, which LinkedIn and other link previews need.

### Vercel

1. Push the project to a GitHub repository.
2. In Vercel: **Add New… → Project**, then import the repository.
3. Deploy. `vercel.json` already sets the build command and the output directory (`dist/hazem-portfolio/browser`).

### GitHub Pages

1. Push the project to a GitHub repository (branch `main`).
2. In the repository: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Every push to `main` runs `.github/workflows/deploy-pages.yml`, which builds with a relative base href
   (`npm run build:gh-pages`) and publishes the site. It works at `https://<user>.github.io/<repo>/` and on a custom domain.

## Project structure

```
src/
  index.html                 Fonts, theme bootstrap script
  styles.scss                Design tokens (dark/light), buttons, tags, cards
  app/
    app.ts / app.html        Page shell: header, sections, footer
    data/                    CV content (edit here)
    models/                  TypeScript interfaces for the content
    core/                    Scroll-spy + smooth navigation, theme, SEO, scroll reveal, date helpers
    shared/                  Icon set, section heading
    sections/                One folder per page section (hero, about, tech-stack, experience, projects, …)
public/                      Static files copied as-is (CV PDF, favicon, OG image, robots.txt)
```

## Accessibility and UX notes

- Semantic landmarks and headings, a skip link, visible focus styles, and keyboard support for the mobile menu (Escape closes it and returns focus).
- Scroll animations are disabled when the visitor prefers reduced motion.
- Dark theme by default; the header toggle switches to light and remembers the choice.
