# Woven Logic Studio — Brand Guide

**Purpose:** Single reference for visual and verbal identity when designing in Figma, social assets, decks, and print. Values match the live site (`src/app/globals.css`, `tailwind.config.ts`).

**Related:** [Website brief](./woven-logic-studio-website-brief.md) (strategy and copy) · Source logo: `public/woven-logic-tree.svg`

---

## 1. Brand idea

**Premise:** Complex problems don’t fit neatly into boxes. Neither do the best ways of solving them.

**What Woven is:** An independent problem-solving practice. Research, strategy, design, technology, experimentation, and storytelling—used as the problem requires.

**Person + practice:**

- **Tristin** — point of view and primary collaborator.
- **Woven Logic Studio** — the practice, method, and body of work.

**Visual personality:** Connected, layered, intelligent—not literal “woven” decoration. Warm and human, still rigorous. Calm, useful, experimental; not corporate or salesy.

---

## 2. Logo and wordmark

### Mark (tree / logic graphic)

- **File:** Import `public/woven-logic-tree.svg` into Figma.
- **Concept:** Branching paths, nodes, and connections (systems + logic—not a generic tree icon).
- **Mark colors (from SVG):**
  - Olive stroke/fill: `#5D6D3E` (aligns with olive family)
  - Terracotta accent: `#AB704E` (aligns with terracotta family)

Use full-color mark on cream or sand backgrounds. On dark (`olive-800` / `#353824`), use a light treatment (site uses ~9% opacity + brighten for watermark-style use).

### Wordmark

- **Text:** `Woven Logic Studio`
- **Typeface:** Syne Bold
- **Case:** ALL CAPS (navigation and footer) or Title Case for longer-form lockups—match site header: uppercase.
- **Tracking:** +160 (0.16em) — Figma: letter spacing ~16% of font size, or ~2.2px at 14px.
- **Color:** Olive 800 `#353824` on light backgrounds; Sand 50 `#FAF7F0` on dark footer.

### Lockups

| Usage | Mark + wordmark spacing | Min clear space |
| ----- | ----------------------- | --------------- |
| Header | Mark height ≈ 40px, gap 12px to wordmark | ½ mark height around lockup |
| QR / connect card | Mark centered above or beside wordmark | 16px mobile, 24px+ desktop |
| Favicon / small | Mark only if below ~24px width | — |

**Don’t:** Stretch the SVG, add drop shadows to the mark, or outline the wordmark in a second color.

---

## 3. Color

Create Figma **color variables** (or styles) with these names so they stay in sync with code.

### Core neutrals

| Token (Figma name) | Hex | Role |
| ------------------ | --- | ---- |
| `cream` | `#F4EFE3` | Default page background |
| `sand/50` | `#FAF7F0` | Warm panels, primary button text, cards |
| `sand/100` | `#EEE5D4` | Alternate sections, borders (with opacity) |
| `sand/200` | `#DED0B9` | Footer borders on dark, subtle dividers |
| `sand/300` | `#C9B696` | Deep sand accent |
| `ink` | `#25261F` | Primary text, dark UI |
| `ink-soft` | `#5D5D50` | Body secondary, nav default links |

### Brand accents

| Token | Hex | Role |
| ----- | --- | ---- |
| `olive/500` | `#73724D` | — |
| `olive/600` | `#5E6040` | Tags, secondary labels |
| `olive/700` | `#484B31` | — |
| `olive/800` | `#353824` | Primary buttons, footer background, wordmark |
| `terracotta/400` | `#C77F62` | Underlines, accents |
| `terracotta/500` | `#AD664B` | Selection highlight, border accents |
| `terracotta/600` | `#8D4F39` | Primary hover, focus ring, action circles (contact page) |

### Semantic usage

| Element | Fill | Text | Notes |
| ------- | ---- | ---- | ----- |
| Page | `cream` + optional radial white glow top-left | `ink` | Subtle gradient in code; optional in static art |
| Section alt | `sand/100` at ~55% opacity feel | `ink` / `ink-soft` | Proof / contact list areas |
| Footer | `ink` | `sand/100`, links hover `terracotta/400` | |
| Primary CTA button | `olive/800` | `sand/50` | Hover → `terracotta/600` |
| Inverse CTA (on terracotta band) | `sand/50` | `olive/800` | Homepage contact band |
| Tag / eyebrow | — | `olive/600` | Syne, uppercase |
| Link emphasis | — | `olive/800` + underline `terracotta/400`, 2px, offset 4px | Contact in nav |
| Focus (accessibility) | — | Outline `sand/50` 2px + ring `terracotta/600` 4px offset | Required in UI mocks |

### Do not use

- **Teal / cyan** — removed from the product; do not reintroduce.
- High-saturation “tech blue” or generic consultancy gradients.
- Pure `#000000` / `#FFFFFF` for large fields (use ink and sand/cream).

---

## 4. Typography

Install **Google Fonts** in Figma: [Syne](https://fonts.google.com/specimen/Syne), [Lora](https://fonts.google.com/specimen/Lora).

| Role | Family | Weight | Use |
| ---- | ------ | ------ | --- |
| Display / headings | Syne | Bold (700) | H1–H6, card titles, buttons, nav, tags |
| Body | Lora | Regular–Bold (400–700) | Paragraphs, lists, links in running text |

### Type scale (match Tailwind / site)

| Style name (Figma) | Size / line | Tracking | Example use |
| ------------------ | ----------- | -------- | ----------- |
| `display/hero` | 48–120px / ~0.94–0.98 | −5.5% to −4.5% | Hero H1 (fluid in code) |
| `heading/xl` | 60px / 68px | −4.5% | About “I’m Tristin.” |
| `heading/lg` | 48px / 52px | −3.5% | Section H2 |
| `heading/md` | 36px / 44px | −3.5% | Card titles |
| `heading/sm` | 30px / 36px | — | Subsections |
| `body/lg` | 18px / 28px | 0 | Lead paragraphs |
| `body/base` | 16px / 24px | 0 | Default body |
| `body/sm` | 14px / 20px | 0 | Footer, meta |
| `label/tag` | 12px / 16px | +18% (0.18em) | Eyebrows: “Contact Woven”, “EXPLORE” |
| `label/nav` | 12px / 16px | +10% (0.1em) | Header nav |
| `label/wordmark` | 14px / 20px | +16% (0.16em) | “Woven Logic Studio” header |

**Headlines:** Syne, tight leading, negative tracking on large sizes.  
**Body:** Lora, relaxed line height (1.5–1.75).  
**Links in body:** Lora; color transitions ~300ms in UI.

---

## 5. Layout and spacing

| Token | Value | Use |
| ----- | ----- | --- |
| Content max width | 1280px (`max-w-7xl`) | Main container |
| Horizontal padding | 20px mobile · 32px tablet · 48px desktop | Page gutters |
| Section vertical padding | 56–96px (py-14 → py-24) | Major sections |
| Border subtle | `olive/800` at 15–25% opacity | Dividers, cards |

**Grids:** 1 column mobile; 2–3 columns for proof cards and contact options at lg breakpoints. Prefer generous whitespace over dense grids.

**Corner radius (common):**

- Pills / primary buttons: **9999px** (full round)
- Cards / panels: **24px** (`rounded-3xl`)
- Images: **16–24px** (`rounded-2xl` / `rounded-3xl`)

---

## 6. UI components (Figma components)

Build these as variants for parity with the site.

### Primary button (`btn-primary`)

- Height: ~48px (padding 12px 24px)
- Fill: `olive/800`, text `sand/50`, Syne Semibold
- Radius: pill
- Hover: fill `terracotta/600`
- Optional trailing arrow `→` with slight translate on hover

### Tag / eyebrow

- Syne Semibold 12px, uppercase, tracking +18%
- Color: `olive/600`
- No background (text only)

### Navigation link

- Syne Semibold 12px, uppercase, tracking +10%
- Default: `ink-soft`; hover: `terracotta/600`
- Active Contact: `olive/800` + terracotta underline

### Contact option row (contact page)

- Container: `sand/50`, border `olive/800` 15%, radius 24px, soft shadow  
  `0 18px 50px rgba(53, 56, 36, 0.09)`
- Row min height ~112–128px; divider between rows
- Title: Syne Bold 20–24px `olive/800`
- Description: Lora 14–16px `ink-soft`
- Action circle: 44px, fill `terracotta/600`, icon `→` or `↗` in `sand/50`; hover → `olive/800`

### Footer

- Background `ink`; wordmark + links as in nav; email link with terracotta underline

---

## 7. Imagery and motion

- **Photography:** Real work, people, environments—avoid stock “innovation” clichés.
- **Proof / UI screenshots:** Rounded corners, light border `olive/800` ~15%.
- **Motion (digital):** Tree/logic animation = branching and connection, not decorative loading. Prefer reduced motion: static mark fallback.
- **Decorative graphics:** Logic tree mark at low opacity on dark panels—not busy patterns.

---

## 8. Voice and copy

**Sound like:** Intelligent, curious, practical; comfortable in complexity; outcome-focused.

**Do:** Direct, specific, warm, evidence-based, plain language when possible.

**Avoid:** “Human-centered innovation at the intersection of…”, long service menus, innovation theater, anonymous agency voice.

### Primary CTA

**Tell me what you’re trying to solve →**

Alternates: “Bring me a problem,” “Start with the problem,” “Let’s talk.”

### Engagement modes (labels)

| Mode | Focus | Visitor situation (short) |
| ---- | ----- | ------------------------- |
| **Explore** | Clarity | What’s actually going on? |
| **Prove** | Evidence | Will this work before we bet on it? |
| **Transform** | Change | Why isn’t this working anymore? |
| **Embed** | Capability | Who can help us move this forward? |

Proof cards use uppercase mode tags: `EXPLORE`, `PROVE`, `TRANSFORM`, `EMBED`.

### Capabilities (scannable list)

Research · Strategy · Design · Technology · Experimentation · Storytelling

### Contact details (production)

- Email: `contact@wovenlogic.studio`
- LinkedIn: `https://www.linkedin.com/in/tristinoldani`
- Calendly (30 min): `https://calendly.com/tristinoldani/30min`
- Site: `wovenlogic.studio`

---

## 9. Figma file setup checklist

1. **Page: Foundations** — Color variables (table §3), text styles (§4), effect style for card shadow.
2. **Page: Components** — Buttons, tags, nav, footer, contact row, card shells.
3. **Page: Templates** — Desktop 1440, mobile 390; 1280 content column centered.
4. **Import logo** — `woven-logic-tree.svg`; create horizontal and stacked lockups.
5. **Fonts** — Syne (700, 600), Lora (400, 500, 600, 700).
6. **Export** — Social: 1200×630 OG on cream; QR/connect: 390×844 artboard optional.

When you change colors or type in Figma, update `globals.css` / `tailwind.config.ts` so the site stays aligned.

---

## 10. Version

| Field | Value |
| ----- | ----- |
| Document | 1.0 |
| Aligned to site | `woven-homepage-overhaul` branch |
| Last synced from code | March 2026 |

Questions or drift between Figma and site—treat **code tokens as source of truth** for hex values.
