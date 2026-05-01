# Sentinel Website

Production-ready Next.js marketing website for Sentinel — AI-powered sports analysis app.

## Stack

- **Next.js 15** (App Router)
- **React 18**
- **TypeScript 5**
- **Tailwind CSS v3**
- **DM Sans** (Google Fonts)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build & Deploy

```bash
npm run build
npm run start
```

Deploy to Vercel: push to GitHub and import the repo. No environment variables required for the static marketing site.

## Pages

| Route | File | Description |
|---|---|---|
| `/` | `app/page.tsx` | Marketing homepage |
| `/privacy` | `app/privacy/page.tsx` | Privacy Policy |
| `/terms` | `app/terms/page.tsx` | Terms of Use |

## Project Structure

```
sentinel-website/
├── app/
│   ├── globals.css          # Tailwind + custom utility classes
│   ├── layout.tsx           # Root layout + metadata
│   ├── page.tsx             # Homepage
│   ├── privacy/
│   │   └── page.tsx         # Privacy Policy
│   └── terms/
│       └── page.tsx         # Terms of Use
├── components/
│   ├── Nav.tsx              # Sticky navbar (scroll-aware)
│   ├── Footer.tsx           # Site footer with Privacy/Terms links
│   ├── LegalNav.tsx         # Simplified nav for legal pages
│   ├── LegalFooter.tsx      # Footer with active state for legal pages
│   ├── HeroSection.tsx      # Hero with headline, CTAs, phone mockup
│   ├── FeaturesSection.tsx  # Five feature cards
│   ├── PreviewSection.tsx   # App screenshot preview cards
│   └── CTASection.tsx       # Final CTA band
├── public/
│   └── images/
│       ├── sentinel-lock.jpg
│       └── screenshots/     # Real Sentinel app screenshots
├── tailwind.config.ts       # Sentinel design tokens
├── next.config.ts
├── tsconfig.json
└── package.json
```

## Design System

All design tokens are in `tailwind.config.ts`:

- **Colors:** `sentinel.black/ink/navy`, `purple.300–950`, `green.300–500`
- **Gradients:** `gradient-cta`, `gradient-purple-text`, `gradient-page`
- **Shadows:** `card`, `card-hover`, `btn`, `purple-glow`, `green-glow`
- **Radii:** `card` (22px), `btn` (16px), `pill` (9999px)
- **Font:** DM Sans only — imported via Google Fonts in `globals.css`

Shared CSS utility classes in `globals.css`:
- `.glass-card` — glassmorphism card base
- `.glass-card-hover` — hover lift + glow
- `.legal-card` — legal content card variant
- `.gradient-text` — purple gradient text treatment
- `.page-bg` — layered radial gradient page background
- `.bg-orbit` — faint purple grid overlay

## App Store Badge

The CTAs use an Apple icon glyph. **Replace with the official App Store badge** before launch — add it to `public/images/app-store-badge.svg` and update `Nav.tsx`, `HeroSection.tsx`, and `CTASection.tsx`.

## Legal Copy

Legal content in `/privacy` and `/terms` is sourced from the Sentinel legal documents. Do not modify without legal review.

Contact: legal@sentinelprops.com
