# Daggerdale

A D&D campaign journal spanning 20+ years, built with [Astro](https://astro.build) and deployed to GitHub Pages.

**Live site:** https://olblacky.github.io/Daggerdale/

## Getting Started

```bash
pnpm install
pnpm dev        # Start dev server at localhost:4321
pnpm build      # Build for production
pnpm preview    # Preview production build
```

## Where to Put Your Content

All content goes in `src/content/` as markdown (`.md`) or MDX (`.mdx`) files:

### Session Recaps → `src/content/stories/`

One file per session. Name them `YYYY-MM-DD-session-title.md` so they sort chronologically.

Required frontmatter:

```yaml
---
title: "The Battle of Dagger Falls"
date: "2024-03-15"
story: "The Shadow Arc"          # optional: arc name
summary: "The party defended..." # optional: one-liner
image: "battle-of-dagger-falls.webp"  # optional
---

Your session recap in markdown here.
```

### Characters, NPCs, Places → `src/content/appendix/`

- `pcs.mdx` — Player characters (active & retired)
- `npcs.md` — Notable NPCs
- `places.md` — Locations

Add more files as needed. Each needs:

```yaml
---
title: "Page Title"
order: 1  # controls sort order in the appendix grid
---
```

### Arc Summaries → `src/content/summaries/`

High-level overviews of major story arcs.

```yaml
---
title: "Arc Name"
---
```

### Essays → `src/content/essays/`

Retrospectives, world-building deep dives, DM notes.

```yaml
---
title: "Essay Title"
date: "2024-01-01"  # optional
---
```

### Images → `public/images/`

Put images in `public/images/` and reference them in markdown as:

```markdown
![Alt text](/Daggerdale/images/your-image.webp)
```

Use `.webp` format for best performance. You can also create a `public/images/small/` directory for thumbnails.

## Project Structure

```
src/
  content/
    stories/       ← session recaps
    appendix/      ← PCs, NPCs, places
    summaries/     ← arc summaries
    essays/        ← retrospectives & notes
  layouts/         ← Base.astro, Content.astro
  pages/           ← route definitions
  styles/          ← global.scss
  lib/             ← helper functions
public/
  images/          ← campaign art & maps
.github/
  workflows/       ← GitHub Pages deploy
```

## Deployment

Pushes to `main` automatically deploy to GitHub Pages via GitHub Actions. Make sure GitHub Pages is configured to use "GitHub Actions" as the source in your repo settings.
