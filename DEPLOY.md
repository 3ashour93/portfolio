# Deploying Omar Ashour Portfolio

## Quick Start (Local Dev)

```bash
cd astro-portfolio
npm install
npm run dev
# → opens at http://localhost:4321
```

---

## Hosting: Netlify (Free — Recommended)

This is the cheapest and easiest option. Netlify's free tier covers everything a portfolio needs:
- Free HTTPS
- Custom domain (e.g. oashour.me)
- Automatic deploys from GitHub

### Step-by-Step

**1. Push to GitHub**

```bash
# In the astro-portfolio folder:
git init
git add .
git commit -m "Initial portfolio build"
# Create a new repo at github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

**2. Connect to Netlify**

1. Go to [netlify.com](https://netlify.com) and sign up (free)
2. Click **"Add new site" → "Import an existing project"**
3. Connect your GitHub account and select your portfolio repo
4. Netlify auto-detects the settings from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click **Deploy site** — it goes live in ~60 seconds

**3. Custom Domain**

1. In Netlify: Site settings → Domain management → Add custom domain
2. Enter `oashour.me`
3. Follow the DNS instructions (update your domain's nameservers to Netlify's)
4. Free HTTPS is automatically provisioned

---

## Adding Project Images

Each project has its own folder in `public/images/projects/`:

```
public/images/projects/
├── dlf-2026/          ← Doha Legal Forum 2026
│   ├── hero.jpg       (main image, 1600×900px recommended)
│   ├── img-1.jpg
│   ├── img-2.jpg
│   ├── img-3.jpg
│   └── img-4.jpg      (optional, only dlf-2026 and qicdrc-brand use 4 images)
├── qicdrc-brand/
├── afc-asian-cup/
├── design-doha/
├── ecourt/
├── sifocc/
├── ar-anniversary/
├── recyq/
├── vitalife/
└── qatar-law-forum/
```

**Image naming** — always use these exact filenames:
- `hero.jpg` — shown in the project hero section and as a hover preview on the homepage
- `img-1.jpg`, `img-2.jpg`, `img-3.jpg`, `img-4.jpg` — shown in the project gallery grid

**Recommended sizes:**
- `hero.jpg`: 1600 × 900px (16:9)
- `img-1.jpg`, `img-2.jpg`, `img-4.jpg`: 800 × 600px (4:3)
- `img-3.jpg`: 600 × 800px (3:4 — displays taller in the grid)

**Format:** JPG is best. Keep files under 300KB each using tools like [squoosh.app](https://squoosh.app) (free).

---

## Adding or Editing Projects

All project content lives in one file: `src/data/projects.ts`

To add a new project:
1. Copy an existing project object
2. Give it a unique `id` (this becomes the URL slug, e.g. `my-project` → `/projects/my-project`)
3. Add images to `public/images/projects/YOUR-ID/`
4. Update the `next` field on the previous project to point to your new project's id

---

## Updating Live Site

Any time you push to GitHub, Netlify automatically rebuilds and redeploys. Usually takes under 2 minutes.

```bash
git add .
git commit -m "Add project images"
git push
```
