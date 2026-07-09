# Unite Design System Prompt

## Core files — always read both before generating
- `unite-intelligence-context.md` — design system tokens, component library, domain knowledge, personas, output conventions, accessibility rules, canonical sample data
- `unite-reference-patterns.md` — 20 validated UI patterns and workspace blueprints; use Patterns 13 and 14 as starting points for full trading workspaces

## Design rules
- Theme: g100 dark (`#161616` background) unless explicitly told otherwise
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
- Default persona: Trader / Sales Trader
- Always use canonical sample data from `unite-intelligence-context.md` — no Lorem ipsum, no `[placeholder]`, no `TODO` comments in delivered output
- For full workspace requests, prefer validated blueprints (Patterns 13/14) over building from scratch
