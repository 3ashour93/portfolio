# Omar Ashour — Portfolio

Personal portfolio site for Omar Ashour, Creative Director & Brand Designer based in Doha, Qatar.

Built with [Astro](https://astro.build/) — a static site that compiles to plain HTML/CSS/JS.

## Local development

```bash
npm install
npm run dev
```

Site runs at `http://localhost:4321`.

## Build for production

```bash
npm run build
```

Outputs static files to `dist/`. Deploy that folder to any static host.

## Project structure

```
src/
  data/projects.ts          ← all project content (overviews, services, images)
  pages/index.astro         ← homepage (hero, about, work grid, contact)
  pages/projects/[id].astro ← individual project pages
  layouts/Layout.astro      ← shared shell
  styles/global.css         ← brand tokens (paper, ink, accent green)
public/
  images/projects/<id>/     ← project images
  Omar-Ashour-Portfolio-2026.pdf
```

## Editing content

All copy lives in `src/data/projects.ts`. Each project has its own object with fields for title, services, overview, brief, approach, outcome, services pills, and CTA. Edit the strings, save, and the site reloads.

## Hosting

Deployed to Cloudflare Pages. Pushes to `main` trigger automatic deploys.

---

© 2026 Omar Ashour
