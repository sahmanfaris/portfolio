# Faris Sahman - Portfolio

Personal portfolio website built with modern web technologies. Showcasing my projects, services, and professional experience as a Full Stack Developer.

**Live:** [sahmanfaris.com](https://sahmanfaris.com)

## Tech Stack

- **Framework:** Next.js 16 (App Router, Server Components)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion, Aceternity UI
- **Email:** Resend
- **Deployment:** Static export on Hetzner VPS (Caddy)

## Features

- **Internationalization (i18n)** - English (default, no URL prefix) and Bosnian (`/bs`) with URL-based routing
- **SEO Optimized** - Sitemap, robots.txt, JSON-LD structured data, per-page metadata with hreflang tags
- **Server Components** - Pages are Server Components with Client Component wrappers for interactivity
- **Contact Form** - Functional email sending via Resend API
- **Responsive Design** - Mobile-first, works on all screen sizes
- **Loading States** - Skeleton UI for all pages via Next.js Suspense
- **Animations** - Smooth page transitions and interactive elements

## Project Structure

```
src/
├── app/
│   ├── [locale]/           # Locale-based routing (en, bs)
│   │   ├── projects/       # Projects listing & detail pages
│   │   ├── services/       # Services page
│   │   ├── contact/        # Contact page with form & map
│   │   ├── page.tsx        # Homepage
│   │   ├── layout.tsx      # Locale layout with i18n provider
│   │   └── loading.tsx     # Skeleton loading states
│   ├── api/contact/        # Contact form API route
│   ├── sitemap.ts          # Dynamic sitemap generation
│   ├── robots.ts           # Robots.txt configuration
│   └── layout.tsx          # Root layout with metadata
├── components/
│   ├── layout/             # Header, Footer
│   ├── sections/           # Hero, About, Projects, Services, etc.
│   ├── ui/                 # Reusable UI components
│   └── seo/                # JSON-LD structured data
├── data/                   # Projects, services, site config
└── lib/                    # i18n, locale context, utilities
```

## Getting Started

```bash
# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
# Add your RESEND_API_KEY and CONTACT_EMAIL

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment

The live site is a static export (`out/`) served by Caddy. There is no CI/CD — deploy manually when you change something (usually rare).

```bash
# Ensure .env.local has NEXT_PUBLIC_* vars (needed at build time)
pnpm build:static

# Replace USER and host with your VPS SSH target
rsync -avz --delete out/ USER@YOUR_VPS:/var/www/sahmanfaris.com/
```

`--delete` removes files on the server that are no longer in `out/`. Omit it if you prefer a non-destructive sync.

## Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_FORMSPREE_FORM_ID` | Formspree form ID (required for `pnpm build:static`) |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | reCAPTCHA v3 site key (public; secret lives in Formspree) |
| `RESEND_API_KEY` | Optional — only for local dev with `/api/contact` |
| `CONTACT_EMAIL` | Optional — paired with Resend for local API route |

## License

This project is for personal use. Feel free to use it as inspiration for your own portfolio.
