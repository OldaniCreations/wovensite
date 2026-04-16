# Woven Logic Studio — site

Single-page site for **Woven Logic Studio** (Next.js App Router, Tailwind CSS v4, DotLottie).

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm run lint
```

## Environment

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for metadata (e.g. `https://your-domain.com`). Optional locally; set on Vercel for production. |

## Deploy (Vercel)

1. Push this repository to GitHub.
2. In [Vercel](https://vercel.com/new), import the repo (Next.js defaults are fine).
3. Add `NEXT_PUBLIC_SITE_URL` under **Settings → Environment Variables** for Production.
4. Add your domain under **Settings → Domains**.
