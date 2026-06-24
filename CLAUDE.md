# CLAUDE.md

Guide for Claude Code working in this repo.

## What this is

**Tarot Huyền Bí** — a Vietnamese-language Tarot reading website. Pure static HTML/CSS/JS (no build step, no framework, no package.json). 22 Major Arcana cards, 6 topics, 2 spread types (1-card / 3-card).

UI strings, card meanings, and code comments are in Vietnamese. Keep it that way when editing user-facing text.

## Running locally

No install step. Either double-click `index.html` or:

```
npx serve .
```

## Architecture at a glance

Three pages, all sharing a global header + donate footer that are injected at runtime:

- `index.html` — pick a topic + spread, then go to reading page
- `reading.html` — draws cards based on `?topic=<id>&spread=<id>` query params
- `about.html` — static info page

Page navigation passes state via URL query string only — there is no router and no localStorage.

### Script loading order matters

Scripts are loaded as plain `<script>` tags (no modules, no `defer`). Each page lists them in dependency order; data files must come before logic files that read their globals (`TOPICS`, `SPREADS`, `TAROT_CARDS`, `CARD_ICONS`). When adding a new script, mirror the order used in [reading.html](reading.html).

All JS uses old-school globals (no `import`/`export`). Functions and constants defined at top level (`TOPICS`, `drawCards`, `renderCardFrameSVG`, etc.) are accessed by name from other files.

### Header + footer injection

[js/partials.js](js/partials.js) defines `SITE_HEADER_HTML` and `SITE_FOOTER_HTML` as string constants. [js/partials-inject.js](js/partials-inject.js) writes them into `#site-header` and `#site-footer-donate` divs on `DOMContentLoaded`. To change the nav or footer, edit `partials.js` once — it propagates to all 3 pages.

## File map

```
index.html / reading.html / about.html   the 3 pages
css/
  variables.css      design tokens (colors, spacing, fonts, radii)
  base.css           resets + typography
  layout.css         page containers, grids, header/footer layout
  components.css     buttons, topic/spread cards, tarot card visuals, meaning panel
  animations.css     card flip + fade-in keyframes
js/
  data/
    topics-data.js   TOPICS[] + SPREADS[] + getTopicById / getSpreadById
    cards-data.js    TAROT_CARDS[] — 22 cards with general + per-topic upright/reversed text
    card-icons.js    CARD_ICONS{} — SVG primitives per card (drawn in local coords ~-24..24)
  partials.js        SITE_HEADER_HTML / DONATE_SECTION_HTML / SITE_FOOTER_HTML strings
  partials-inject.js injects header + footer on DOMContentLoaded
  home.js            index.html — topic/spread selection + start button
  reading.js         reading.html — reads URL params, draws cards, renders meanings
  deck.js            shuffleArray (Fisher–Yates utility used by reading.js)
  svg-render.js      renderCardFrameSVG (face-up & face-down) + name wrapping
assets/
  favicon.svg
  qr/donate-qr.png   donate QR — placeholder image, see README
```

## Data model

A card in [js/data/cards-data.js](js/data/cards-data.js):

```js
{
  id, number, numeral,
  nameVi, nameTraditional,
  keywords: [...],
  general:  { upright, reversed },
  topics: {
    love:    { upright, reversed },
    career:  { upright, reversed },
    money:   { upright, reversed },
    health:  { upright, reversed },
    study:   { upright, reversed },
    general: { upright, reversed }
  },
  icon  // key into CARD_ICONS
}
```

Every card must have entries for **all 6 topic ids** defined in `TOPICS` (`love`, `career`, `money`, `health`, `study`, `general`). [reading.js](js/reading.js) indexes `card.topics[topic.id][orientation]` directly — a missing topic key will throw.

When adding a new topic: add it to `TOPICS` in [topics-data.js](js/data/topics-data.js) **and** add the matching key to `topics` on every card in [cards-data.js](js/data/cards-data.js).

When adding a new card icon: add the glyph to `CARD_ICONS` in [card-icons.js](js/data/card-icons.js) using SVG primitives in local coords centered at (0,0), spanning roughly -24..24. The render layer translates to (70, 108) within the card frame.

## Styling conventions

- All colors, spacing, radii, transitions are CSS variables defined in [variables.css](css/variables.css). Use the tokens rather than hardcoding values.
- Dark mystical palette: deep purple bg, gold accents, muted text. `--color-reversed-tint` is the pink used for reversed-card chips.
- Heading font is **Cambria** first, deliberately — Georgia/Times New Roman lack glyphs for some Vietnamese double-diacritic characters (e.g. "ề", "ố"). See the comment in [variables.css](css/variables.css). Don't reorder the heading stack without re-testing Vietnamese rendering.
- Mobile-first; the only breakpoint is `@media (min-width: 640px)`.

## Donate / QR

The footer's donate section is currently using placeholder bank info and a placeholder QR image. The README documents how to replace them. If the user asks to "update donate info", they likely mean editing the three `[Tên ngân hàng]` / `[Số tài khoản]` / `[Tên chủ tài khoản]` placeholders in `DONATE_SECTION_HTML` in [js/partials.js](js/partials.js) and overwriting `assets/qr/donate-qr.png`.

## Things to avoid

- Don't introduce a build step, bundler, or framework — the project is intentionally zero-dependency.
- Don't switch to ES modules; everything relies on global names across script tags.
- Don't reorder the heading font stack (see Cambria note above).
- Don't add a topic without backfilling all 22 cards' `topics` entries.
