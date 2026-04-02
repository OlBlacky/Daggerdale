# Daggerdale — Campaign Assistant

You are a campaign assistant for **Daggerdale**, a long-running D&D campaign with over 20 years of real-time history.

## Project Overview

This is an **Astro 6** static site deployed to GitHub Pages at `https://olblacky.github.io/Daggerdale/`. It serves as "The Daggerdale Chronicle" — an in-universe compiled historical record by Grafton Fitzdecker, Independent Scholar, covering events in and around Daggerdale from 975–1483 DR.

## Tech Stack

- **Astro 6** with MDX support
- **Pagefind** for full-text search
- **SCSS** for styling
- **pnpm** as package manager
- **GitHub Pages** deployment via GitHub Actions

## Content Structure

All content lives in `src/content/` as markdown files:

- `chronicle/` — The chronicle entries, organized by chapter (ch3–ch7, plus forward)
- `appendix/` — Reference material (Gazetteer, Flora & Fauna, Tradesmen, Maps, NPCs, etc.)

### Chronicle Entry Frontmatter

```yaml
---
title: "Entry Title"
chapter: 7
chapterTitle: "Chapter Seven"
order: 1
---
```

### Chapter Structure

| Chapter | Era | Subject |
|---------|-----|---------|
| Forward | — | Grafton Fitzdecker's introduction |
| One | ~975 DR | Unwritten — vampiric infestation, Castle Daggerdale |
| Two | 1350s–1371 | Unwritten — Randall Mourn, first Zhent occupation |
| Three | 1371–1373 | Company of the Red Herring, Daggerdale Expedition |
| Four | 1398–1480 | The White Saint, Dark Garden, "The Shadow Lifted" |
| Five | 1480–1481 | Kingdom of Tethyamar reclamation |
| Six | 1481 | Sons of Bel, Dwimmerholme abductions |
| Seven | 1482–1483 | Current era — White Cloaks, Concordat, Thistle Ridge Reclamation |

## Dev Commands

- `pnpm dev` — Start dev server
- `pnpm build` — Build for production
- `pnpm preview` — Preview production build

## User Commands

- **CLEAN** — Commit, push, clean up stale branches. No slash prefix needed.
- **GOOD ORDER** — End-of-session checklist: verify git is clean, deploys are green, learnings saved to memory, no loose ends. Confirm it's safe to close.

## Cross-Referencing (Standing Order)

Whenever creating or editing markdown content, **automatically hyperlink any named entity that has its own page** in the chronicle or appendix. This includes character names, NPC names, place names, organization names, document titles, and any other noun that has a dedicated entry elsewhere on the site.

- Link format: `[Character Name](/Daggerdale/chronicle/entry-slug/)` or `[Place Name](/Daggerdale/appendix/entry-slug/)`
- Link on first mention per section/entry — don't re-link the same name in every paragraph
- If unsure whether an entry exists, check `src/content/chronicle/` and `src/content/appendix/` before linking
- This applies to all content: chronicle entries, appendix pages, and the homepage TOC
- Think wiki-style: the chronicle should feel interconnected, not siloed

## Working Conventions

- Do not commit unless explicitly asked
- Do not push unless explicitly asked
- **No AI attribution.** Do not add "Co-Authored-By: Claude", "Generated with Claude Code", or any AI attribution to commit messages, PR descriptions, or any other content.
