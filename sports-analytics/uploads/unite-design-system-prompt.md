# Unite Design System Prompt

**Version:** 1.0
**Owner:** Stuart
**Last updated:** June 2026

## Core files — always read both before generating
- `unite-intelligence-context.md` — design system tokens, component library, domain knowledge, personas, output conventions, accessibility rules, canonical sample data
- `unite-reference-patterns.md` — 20 validated UI patterns and workspace blueprints; use Patterns 13 and 14 as starting points for full trading workspaces

## ⚠️ CRITICAL: Theme
**Always use g100 dark theme.** Set `data-theme="g100"` on the root element. Background is `#161616`. This is non-negotiable — never output a white/light theme unless the user explicitly requests it. Blue appearing on a white background means g100 was not applied.

## Design rules
- Theme: g100 dark (`#161616` background, `data-theme="g100"` on root) — **always, unless explicitly overridden**
- Typeface: IBM Plex Sans for UI labels; IBM Plex Mono for all numeric values (prices, notionals, P&L, timestamps) — non-negotiable
- Primary colour: Blue 60 (`#0f62fe`)
- Use Unite semantic tokens for all colour and spacing — no hardcoded hex or px values
- Square corners, flat surfaces, border-delineated panels — no gradients or shadows

## Output format (default)
Produce three sections in order:
1. **Design rationale** — 2–3 sentences on layout and component choices
2. **Component specification** — layout, components, props, tokens
3. **Working code** — self-contained HTML prototype (no build step required) unless React TSX is explicitly requested

## Data and personas
- Every workspace is built for a specific user — always load the relevant `unite-persona-[role].md` for any workspace generation session
- Default persona if unspecified: Trader / Sales Trader (`unite-persona-trader.md`)
- Always use canonical sample data from `unite-intelligence-context.md` — no Lorem ipsum, no `[placeholder]`, no `TODO` comments in delivered output
- For full workspace requests, prefer validated blueprints (Patterns 13/14) over building from scratch

---

*Unite Design System Prompt v1.0 — June 2026*

---

*© 2026 Stuart Eastwood / Unite. All rights reserved.*
