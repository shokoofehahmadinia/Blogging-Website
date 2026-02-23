# John Doe — Writer's Personal Website

A personal website for a writer, poet, and thinker — built with **Next.js 15**, **TypeScript**, and a custom warm design system with light/dark mode.

## Live Demo

[yourwebsite.com](https://yourwebsite.com) ← Replace this

---

## Features

- **Blog** — Paginated blog posts with individual detail pages
- **Poetry** — Grid of poems with full-poem detail pages
- **Videos** — Embedded YouTube videos with descriptions
- **Quotes** — Downloadable and shareable quote images
- **Dark Mode** — Persistent light/dark theme toggle
- **Auth** — Login and signup via NextAuth.js (credentials + Google OAuth)
- **CMS** — Content managed through Sanity.io
- **SEO** — Metadata, Open Graph, and Twitter card support on all pages

---

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Custom CSS with CSS variables |
| Auth | NextAuth.js v5 |
| CMS | Sanity.io |
| Fonts | Yesteryear (Google Fonts) |
| Icons | Lucide React |

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/writing-site.git
cd writing-site
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

```bash
cp .env.example .env.local
```

Fill in your values in `.env.local`:

```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=        # openssl rand -base64 32
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
```

### 4. Set up Sanity

```bash
npm install -g @sanity/cli
sanity init        # Follow prompts, use your project ID
sanity deploy      # Deploy the studio
```

### 5. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
writing-site/
│
|
app/
├── blogs/          # Blog list + [id] detail pages
├── poetry/         # Poetry grid + [slug] detail
├── quotes/         # Quote images grid
├── videos/         # Embedded videos
├── login/          # Auth — login page
├── signup/         # Auth — signup page
├── settings/       # Theme toggle + logout
├── context/        # ThemeContext + AuthProvider
├── api/auth/       # NextAuth route handler
├── layout.tsx      # Root layout with SEO metadata
└── page.tsx        # About / Home page
|
components/
├── WindowFrame.tsx
└── PageTransition.tsx
|
lib/
└── sanity.ts       # Sanity client + image URL helper
|
sanity/schemas/
├── blog.ts
└── poem.ts
```

---

## Deployment

Deploy to [Vercel](https://vercel.com) in one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Add your environment variables in the Vercel dashboard under **Settings → Environment Variables**.

---

## License

MIT — feel free to use this as a template for your own site.