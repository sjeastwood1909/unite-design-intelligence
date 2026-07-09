# Unite Design System

Unite is the foundation that connects products, people, and experiences through a
shared design language. It creates clarity in complexity, letting teams build with
consistency, confidence, and efficiency across a connected product ecosystem
serving **Sales, Trading, Brokerage, Analytics, Research, Client Intelligence, and
Operations** teams.

This project is the Unite design system: tokens, typography, color, components, and
product UI kits, packaged so design agents and engineers can build well-branded
Unite interfaces.

---

## Provenance & sources

- **Primary source:** the Figma file *"Unite Design System POC"* (mounted as a
  read-only virtual filesystem during authoring). It contains 507 component sets and
  39 Figma Variable collections (3,187 variables).
- Unite's foundations are built on the **Carbon** design language (open-source,
  Apache-2.0) and set in **IBM Plex Sans / IBM Plex Mono** (SIL OFL). Token values,
  the type scale, and component anatomy were extracted from the Figma file and
  verified against the Carbon specification.
- A second upload, *"Unite UI Icon Library DS.fig"*, was referenced but arrived
  empty at author time — see **Caveats** in the chat. Icons were instead copied as
  real SVGs from the primary Figma file (`assets/icons/`).

> The reader is not assumed to have access to these sources; they are recorded here
> for traceability.

---

## CONTENT FUNDAMENTALS — how Unite writes

Unite's voice is **Connected, Clear, Efficient, and Informative**. Copy serves
professional users who value their time and need to act with confidence.

**Principles**
- Prioritize clarity over cleverness; plain, professional language.
- Be concise and purposeful — every word earns its place.
- Guide users toward confident decisions; focus on outcomes, not system complexity.
- Present information in a structured, logical way; stay consistent across products.

**Mechanics**
- **Voice:** address the user as *you*; the system is implicit (avoid "we/I").
- **Casing:** sentence case everywhere — buttons, labels, titles, menu items
  ("New order", "Items per page", not "New Order" / "ITEMS PER PAGE"). Tags and
  micro-labels may use ALL-CAPS sparingly for table captions (e.g. "BID" / "ASK").
- **Tone examples:**
  - Empty/clear: *"You are all caught up."*
  - Success: *"Order submitted."* + concise detail *"Buy EURUSD"*.
  - Error: *"Trade rejected."* + cause *"Counterparty credit check failed."*
  - Helper: *"Visible to your desk."*
- **Numbers & data** are first-class: prices, quantities and timestamps are set in
  IBM Plex Mono and never abbreviated past clarity.
- **No emoji.** No exclamation-heavy marketing tone. Punctuation is restrained.

---

## VISUAL FOUNDATIONS

**Overall vibe.** Productive, dense, and quiet. Unite is a low-chrome, information-
first system. Structure comes from **1px borders and flat layers**, not decoration.
The interface gets out of the way of the data.

- **Color.** A neutral gray backbone (`--gray-10 … --gray-100`) carries every
  surface; **Blue 60 `#0f62fe`** is the single interactive/brand color (links,
  primary buttons, focus, selection). Status uses red `#da1e28`, green `#24a148`,
  yellow `#f1c21b`, blue `#0043ce`. An extended categorical palette (teal, cyan,
  purple, magenta, etc.) is reserved for tags, charts and data viz. Two themes ship:
  **White** (default light) and **Gray 100** (dark), toggled with
  `[data-theme="g100"]`.
- **Type.** IBM Plex Sans for all UI; IBM Plex Mono for numerics, code and data.
  A productive scale (body 14/20 default) with semibold (600) for headings/emphasis
  and light (300) reserved for large display sizes. Letter-spacing is tuned per step
  (0.16px body, 0.32px labels).
- **Spacing.** A strict mini-token scale (`spacing-01` 2px … `spacing-13` 160px,
  base unit 8px). Control heights are standardized: sm 32 / md 40 / lg 48 / xl 64.
- **Corners.** **Square by default** (`--radius-00: 0`). Only pills (tags, toggles)
  and the avatar are rounded. This squared geometry is a defining Unite trait.
- **Borders.** 1px subtle borders (`--border-subtle-01`) divide surfaces; inputs use
  a single 1px **bottom** border (`--border-strong-01`) that becomes a 2px focus
  outline. Selected rows/items get a 2px inset accent bar in Blue 60.
- **Elevation.** Shadows are **reserved for overlays** (menus, popovers, modals,
  toasts) — `--shadow-sm/md/lg`. Flat surfaces never carry a drop shadow; they are
  separated by background-layer steps and borders instead.
- **Backgrounds.** Solid flat fills only. **No gradients, no imagery, no textures**
  in chrome. Layering is communicated by stepping between `--background`,
  `--layer-01`, `--layer-accent-01`.
- **Transparency & blur.** Minimal. Overlays use a flat scrim (`--overlay`,
  rgba black). No glassmorphism / backdrop blur.
- **Motion.** Fast and purposeful. Productive easing
  `cubic-bezier(0.2,0,0.38,0.9)`, durations 70–240ms for UI feedback. Transitions
  are **fades and short slides — never bounces**. Decorative looping animation is
  avoided in product chrome.
- **Hover / press.** Hover = a subtle darker wash (`--background-hover`, a low-alpha
  gray) or a one-step-darker fill on solid buttons; primary button hover `#0353e9`,
  active `#002d9c`. Press deepens the color (no scale/shrink). Focus is always a
  visible 2px Blue 60 outline (inset on filled controls).
- **Cards / tiles.** A "tile" is a flat `--layer-01` rectangle with 16px padding and
  **no border or shadow** in its base state; grids of tiles are separated by 1px
  gaps that read as hairlines. Clickable tiles add a hover wash; selectable tiles add
  a 1px Blue 60 inset outline when selected.

---

## ICONOGRAPHY

- Unite uses a **functional, geometric icon set on a 16px grid** (Carbon-derived):
  monoline shapes with squared terminals, solid (filled) status glyphs, and
  consistent 1–2px optical weight. Icons are single-color and inherit
  `currentColor`.
- Icons are delivered two ways:
  1. **Real SVG assets** copied from the Figma file into `assets/icons/` (e.g.
     `search`, `view`, `menu`, `folder`, `checkmark-filled`, `error-filled`,
     `warning-filled`, `information-filled`, `renew`, `delete`, …).
  2. The **`Icon` React component** (`components/icons/Icon.jsx`) bundles those
     glyphs plus canonical navigation glyphs (`chevron-*`, `close`, `add`,
     `overflow-vertical`, `arrow-right`, `filter`, `settings`, `user`,
     `notification`, etc.) as an inline registry, normalized into a 16-unit grid.
     Use `<Icon name="search" size={16} />` — see `ICON_NAMES` for the full list.
- **No emoji** and no Unicode-glyph icons in product UI. Status meaning is carried by
  the filled status icons + support colors, never by emoji.
- Need a glyph that isn't bundled? The full Carbon icon library
  (`@carbon/icons`, 16/20/24/32px) is the canonical superset; copy the SVG into
  `assets/icons/` and register it the same way.

---

## INDEX — what's in this system

**Root**
- `styles.css` — global entry point (import this). `@import`s everything below.
- `readme.md` — this guide. · `SKILL.md` — Agent Skill manifest.

**`tokens/`** — foundations, each `@import`ed by `styles.css`
- `colors.css` — full base palette + semantic **White**, **Gray 10** and **Gray 100** theme layers.
- `typography.css` — type scale tokens + `.unite-type-*` utilities.
- `spacing.css` — spacing scale, control sizes, grid. · `effects.css` — radius,
  elevation, motion. · `fonts.css` — IBM Plex webfonts. · `base.css` — reset.

**`components/`** — reusable React primitives (`<Name>.jsx` + `.d.ts` + card).
Styling lives in `components/css/*.css` (consumed via `unite-*` classes).
- `icons/` — **Icon** · `buttons/` — **Button**
- `forms/` — **TextInput, TextArea, Select, Search, NumberInput, Dropdown, ComboBox, MultiSelect, DatePicker**
- `controls/` — **Checkbox, RadioButton, RadioButtonGroup, Toggle, Slider**
- `feedback/` — **Tag, InlineNotification, ToastNotification, Loading,
  InlineLoading, ProgressBar, Modal, Tooltip**
- `navigation/` — **Link, Tabs, Breadcrumb, ContentSwitcher, Pagination, Accordion, OverflowMenu**
- `data/` — **Tile, Badge, DataTable, Avatar, StructuredList**

**`foundations/`** — specimen cards shown in the Design System tab (Colors, Type,
Spacing, Brand). Includes color palettes, themes, typography scale, spacing,
motion tokens, interactive states, and brand wordmark.

**`ui_kits/trading-workspace/`** — interactive product recreation (shell, markets,
blotter, order-ticket, research). Open `index.html`.

**`assets/icons/`** — real SVG icon assets.

---

## Using the system

Consumers link one file:

```html
<link rel="stylesheet" href="styles.css" />
```

Then mount components from the compiled bundle:

```js
const { Button, DataTable, Tag } = window.UniteDesignSystem_429d79;
```

Set a theme by adding `data-theme="g10"` or `data-theme="g100"` to any container element. Themes scope cleanly — you can mix a `g100` sidebar inside a `white` page, for example.
