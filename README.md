# Hazem El-Azb · Portfolio

Personal portfolio of **Hazem Eid Abd El-Raouf El-Azb**, Backend .NET Developer. Built with Angular and TypeScript.

## Run locally

Requires Node.js 24.

```bash
npm install
npm start
```

Open http://localhost:4200.

## Editing content

All CV content is in `src/app/data/`:

- `profile.ts`: name, summary, contact details, languages
- `experience.ts`: roles, dates, highlights, technologies
- `projects.ts`: selected work
- `skills.ts`: tech stack
- `education.ts`: education and certifications
- `site.ts`: page title, description, public URL

To update the downloadable CV, replace `public/cv/Hazem-Eid-Abd-El-Raouf-El-Azb-CV.pdf`.

## Deployment

Deployed on Vercel from the `main` branch. `vercel.json` holds the build settings.
