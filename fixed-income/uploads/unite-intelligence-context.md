# Unite Design Intelligence OS — Intelligence Context File
**Version:** 2.8  **Owner:** Stuart  **Organisation:** Unite  
**Purpose:** Reusable context block for Claude sessions. Attach to every generation request so Claude inherits the full Unite design system, domain knowledge, and output conventions without re-explanation.

---

## HOW TO USE THIS FILE

Paste or attach this file at the start of any Claude / Claude Design session. It replaces the need to explain the design system, tokens, or domain context each time.

For persistent sessions, upload it as **Project Knowledge** in a Claude Project named "Unite Design Intelligence" — every conversation in that project will automatically inherit this context.

---

## COMPANION FILES

This file is part of a four-layer knowledge system. Load the appropriate files for each session.

| File | Purpose | Load when |
|---|---|---|
| `unite-intelligence-context.md` *(this file)* | Design system tokens, component library, domain context, personas, generation rules, accessibility, formatting, real-time patterns | Always — every session |
| `unite-ux-principles.md` | UX philosophy, information hierarchy, interaction patterns, notification hierarchy, UI copy standards, progressive disclosure, anti-patterns | Always — every session |
| `unite-reference-patterns.md` | Pattern library (14 validated patterns), workspace blueprints (Patterns 13 & 14), pattern composition guide, implementation gotchas, quick-reference lookup table | Any session involving full workspace generation, pattern selection, or pattern authoring |
| `unite-persona-[role].md` | Role-specific goals, workflows, tools, pain points, task flows, and generation prompt template | Any workspace generation session — every workspace is built for a specific user |

**Quick rule:** Always load `unite-intelligence-context.md` + `unite-ux-principles.md` together — they are the base layer. Add `unite-reference-patterns.md` for workspace generation. Always add the relevant persona file for workspace generation — a workspace without a user has no design rationale.

---

## 00 — USER CONTEXT

**Name:** Stuart Eastwood  
**Role:** Product Design Lead  
**Organisation:** Unite  
**Domain:** Cross-domain — FX, Rates, Credit, Fixed Income, Client Intelligence, Operations. Designs across all desks and product areas.

### Default output format

Always produce: **design rationale** (2–3 sentences) + **component specification** (layout, components, props, tokens) + **working code**.

Default code output is **self-contained HTML prototype** unless the request explicitly asks for React TSX. The HTML prototype must run immediately in a browser with no build step — inline all styles and scripts.

### Generation preferences

- Use validated workspace blueprints (Patterns 13 and 14 in `unite-reference-patterns.md`) as starting points for full trading workspace requests — do not build from scratch when a validated pattern exists.
- Always include realistic sample data — no "Lorem ipsum", no `[placeholder]`, no `TODO` comments in delivered output.
- Default theme is **g100 dark** (`#161616` background) unless explicitly told otherwise.
- All numeric values (prices, notionals, P&L, timestamps) must use IBM Plex Mono — this is non-negotiable.
- When in doubt about which role to design for, default to **Trader / Sales Trader** — the most data-dense, latency-sensitive user in the system.

### Canonical Sample Data

Use this data in all generated prototypes. Consistent names across sessions make demos recognisable and professional. Never invent fictional instruments, counterparties, or desk names.

#### Instruments by asset class

| Asset class | Instruments to use |
|---|---|
| FX Spot | EUR/USD · GBP/USD · USD/JPY · EUR/GBP · AUD/USD · USD/CHF |
| FX Forward | EUR/USD 1M · GBP/USD 3M · USD/JPY 6M |
| Rates / Swaps | GBP 5Y IRS · EUR 10Y IRS · USD 2Y Swap · GBP 30Y Gilt |
| Credit (IG) | BP 2026 · HSBC 2028 · Vodafone 2030 · Shell 2027 · BT 2029 |
| Credit (HY) | Rolls-Royce 2026 · Marks & Spencer 2027 · Barratt 2028 |
| Equities | BP.L · HSBA.L · VOD.L · SHEL.L · LLOY.L · RIO.L (LSE) |
| Equity (US) | AAPL · MSFT · JPM · BAC · GS |
| Bonds (Govt) | UKT 4.25% 2034 · DBR 2.50% 2035 · UST 4.625% 2026 |

#### Counterparties

| Tier | Names to use |
|---|---|
| Tier 1 (bulge bracket) | Goldman Sachs · JPMorgan · Morgan Stanley · Barclays · Deutsche Bank |
| Tier 2 (regional) | Société Générale · Nomura · BNP Paribas · UBS · HSBC |
| Buy-side clients | BlackRock · Fidelity · Schroders · Legal & General · Aviva Investors |
| Prime brokerage clients | Citadel · Man Group · Winton · Brevan Howard · Millennium |

#### Desks and traders

| Desk | Trader names |
|---|---|
| FX Spot | A. Chen · R. Patel · S. Müller |
| Credit Sales | J. Morrison · C. Walsh · D. Okafor |
| Rates | T. Nakamura · L. García · P. Dubois |
| Risk | M. Thompson · K. van den Berg |
| Research | J. Morrison · A. Kapoor · F. Adeyemi |

#### Realistic numeric ranges

| Field | Typical range |
|---|---|
| FX Spot notional | $5m – $250m |
| Credit bond notional | £1m – £50m |
| Equity order size | 10,000 – 500,000 shares |
| Daily P&L (desk) | −£2m to +£2m |
| VaR (desk) | £500k – £5m |
| Settlement value | $500k – $50m |

---

### Terminology

| Stuart says | Claude should interpret as |
|---|---|
| "workspace" | Full multi-panel trading layout (3+ panels + blotter) |
| "tile" | Single KPI or price component — not a full panel |
| "blotter" | AG Grid live data table, not Unite DataTable |
| "spec" | Full design specification document (layout, states, data model, UX rationale) |
| "prototype" | Working self-contained HTML file with simulated live data |
| "validated" | Pattern has a working prototype confirmed by Stuart — treat as ground truth |

---

## 01 — MISSION & PHILOSOPHY

Transform design systems from static libraries into intelligent operating systems capable of generating, validating, and delivering production-ready product experiences.

**Replace** the traditional workflow:  
`Research → Requirements → Figma → Reviews → Handoffs → Development`

**With** the intelligence workflow:  
`Knowledge → Intelligence → Generation → Validation → Implementation`

The objective is not to create more design artefacts. The objective is to create **implementation-ready intelligence**.

---

## 02 — UNITE DESIGN SYSTEM

### Identity

Unite is the foundation connecting products, people, and experiences across:  
**Sales · Trading · Brokerage · Analytics · Research · Client Intelligence · Operations**

Built on the Carbon design language (IBM). Voice: **Connected, Clear, Efficient, Informative.**  
Write in sentence case. Address the user as "you". No emoji. Concise and outcome-focused.

---

### Themes

| Theme | Attribute | Background | Use |
|---|---|---|---|
| White (default light) | `:root` / `[data-theme="white"]` | `#ffffff` | Standard UI |
| Gray 10 (elevated light) | `[data-theme="g10"]` | `#f4f4f4` | Sidebars, panels |
| **Gray 100 (dark)** | `[data-theme="g100"]` | `#161616` | **Capital Markets default** |

**Rule:** Always use semantic tokens (e.g. `--background`, `--text-primary`). Never hardcode hex values or raw palette tokens (e.g. `--gray-100`) in components.

---

### Semantic Colour Tokens (use these in all generated code)

**Backgrounds & Layers**
```
--background              /* page background */
--layer-01                /* card / tile surface */
--layer-02                /* elevated panel within a card */
--layer-03                /* nested element within layer-02 */
--layer-hover-01          /* hover state on layer-01 surfaces */
--layer-selected-01       /* selected row / item */
```

**Text**
```
--text-primary            /* headings, primary body */
--text-secondary          /* labels, captions, helper text */
--text-placeholder        /* input placeholder */
--text-on-color           /* text on coloured backgrounds */
--text-disabled
--text-error              /* validation errors */
--text-inverse            /* text on dark-inverse surfaces */
```

**Interactive**
```
--interactive             /* focus rings, active indicators */
--button-primary          /* blue-60 = #0f62fe */
--button-secondary
--button-tertiary
--button-danger-primary   /* red-60 */
--border-interactive      /* blue-60 (light) / blue-50 (dark) */
--focus                   /* keyboard focus ring */
```

**Status / Support**
```
--support-error           /* red-60 light / red-50 dark */
--support-success         /* green-50 light / green-40 dark */
--support-warning         /* yellow-30 */
--support-info            /* blue-70 light / blue-50 dark */
--support-caution-major   /* orange-40 */
```

**Borders & Fields**
```
--border-subtle-01        /* dividers, card edges */
--border-strong-01        /* prominent borders */
--field-01                /* input background */
--field-02                /* input background on elevated surface */
```

---

### Data Visualisation Colours

For charts, heatmaps, and sparklines use the dataviz palette (never semantic UI tokens):
- Categorical: `--data-viz-01` through `--data-viz-14`  
- Sequential and diverging ramps available in `tokens/colors.css` dataviz section.

---

### Asset Class Colour Conventions

Two distinct colour conventions exist in Unite for side/direction indicators. **These must never be mixed.** Using the wrong convention for an asset class is a design error.

#### FX & Rates — Bid / Offer

| Side | Token | Hex | Usage |
|---|---|---|---|
| Bid (buy from client) | `--color-fx-bid` | `#42be65` (green-40) | FX spot tiles, rates ladders, any FX/Rates price display |
| Offer (sell to client) | `--color-fx-offer` | `#4589ff` (blue-40) | FX spot tiles, rates ladders, any FX/Rates price display |

The green/blue convention reflects FX market convention where bid is the left-side (green) price and offer is the right-side (blue) price. Both are neutral from a trade perspective — neither is inherently "good" or "bad".

#### Credit & Fixed Income — Buy / Sell (Done / Missed)

| Side | Token | Hex | Usage |
|---|---|---|---|
| Buy / Done | `--color-credit-buy` | `#00C896` (teal) | Credit RFQ blotters, bond trade confirmations, done deals |
| Sell / Missed | `--color-credit-sell` | `#FF4D6D` (crimson) | Credit RFQ blotters, bond trade confirmations, missed/lost RFQs |

The teal/crimson convention reflects outcome — a Done trade (won) is positive (teal); a Missed trade (lost) is negative (crimson).

```tsx
// FX tile — bid/offer
<span style={{ color: '#42be65', fontFamily: 'var(--font-mono)' }}>1.2641</span>  {/* Bid */}
<span style={{ color: '#4589ff', fontFamily: 'var(--font-mono)' }}>1.2643</span>  {/* Offer */}

// Credit blotter — done/missed
<Tag style={{ background: '#00C896', color: '#000' }}>Done</Tag>   {/* Buy / Won */}
<Tag style={{ background: '#FF4D6D', color: '#fff' }}>Missed</Tag>  {/* Sell / Lost */}
```

**Rule:** If the asset class is FX or Rates → use Bid/Offer colours. If the asset class is Credit, Bonds, or Fixed Income → use Buy(Done)/Sell(Missed) colours. Equities use the standard `--support-success` / `--support-error` green/red for buy/sell.

---

### Typography

**Typefaces**
- UI text: `IBM Plex Sans` — weights: 300 Light · 400 Regular · 500 Medium · 600 SemiBold · 700 Bold
- Data & code: `IBM Plex Mono` — use for numeric values, ticker symbols, prices, P&L figures, timestamps

**Type scale tokens**
```
--type-label-01-size / -lh    /* 12px / 16px — field labels, column headers */
--type-body-compact-01-size   /* 14px / 18px — dense UI, table cells */
--type-body-01-size / -lh     /* 14px / 20px — standard body */
--type-body-02-size / -lh     /* 16px / 24px — comfortable reading */
--type-heading-01             /* 14px SemiBold — section headings */
--type-heading-02             /* 16px SemiBold — card titles */
--type-heading-03             /* 20px Regular — page section titles */
--type-heading-04             /* 28px Regular — page titles */
--type-heading-05             /* 32px Regular — hero headings */
```

**Utility classes:** `.unite-type-body-01`, `.unite-type-heading-02`, etc.

---

### Spacing Scale

```
--spacing-01:  2px    --spacing-05: 16px    --spacing-09: 48px
--spacing-02:  4px    --spacing-06: 24px    --spacing-10: 64px
--spacing-03:  8px    --spacing-07: 32px    --spacing-11: 80px
--spacing-04: 12px    --spacing-08: 40px    --spacing-13: 160px
```

**Component sizes (heights):** `--size-sm` 32px · `--size-md` 40px · `--size-lg` 48px (default) · `--size-xl` 64px

---

### Grid

16-column, 32px gutter, 1px condensed gutter option. Max width 1584px.  
Breakpoints: sm 320px · md 672px · lg 1056px · xl 1312px · max 1584px

---

### Icons (available names for `<Icon name="..." />`)

```
analytics · catalog · checkmark-filled · delete · error-filled · folder
help · in-progress · information-filled · information · list · menu · moon
pending-filled · renew · search · send · view-off · view · warning-filled
```

---

## 03 — COMPONENT LIBRARY

**Import:** All components from `window.UniteDesignSystem_429d79`  
**React + TypeScript.** Load `styles.css` for all token and component CSS.

### Buttons (`components/buttons/`)

```tsx
<Button
  kind="primary" | "secondary" | "tertiary" | "ghost" | "danger" | "danger-tertiary" | "danger-ghost"
  size="sm" | "md" | "lg" | "xl" | "2xl"   // default: lg (48px)
  icon="search"          // Icon name or ReactNode — shown trailing
  iconOnly={false}       // square icon-only button
  fullWidth={false}
  href="..."             // render as anchor
  disabled={false}
/>
```

**Rule:** One `primary` button per view. Use `ghost` for table toolbar actions. Use `danger` for destructive confirmations.

---

### Controls (`components/controls/`)

```tsx
<Checkbox checked={bool} onChange={fn} label="..." disabled />
<RadioButton value="..." checked={bool} onChange={fn} label="..." />
<Slider min={0} max={100} value={n} onChange={fn} step={1} />
<Toggle checked={bool} onChange={fn} label="Dark theme" labelA="Off" labelB="On" size="sm" | "md" />
```

---

### Data (`components/data/`)

**DataTable vs AG Grid — when to use which:**

| Requirement | Use |
|---|---|
| Standard list, < ~500 rows, simple sort/filter/select | `<DataTable>` (Unite component) |
| Trading blotter, position grid, order book | **AG Grid** |
| Real-time streaming rows (prices updating in place) | **AG Grid** |
| Row grouping, pivoting, tree data, aggregation | **AG Grid** |
| Inline cell editing | **AG Grid** |
| Column pinning, virtualised columns, > 20 columns | **AG Grid** |

AG Grid reference and demos: [ag-grid.com/example](https://www.ag-grid.com/example/) · Finance grid demo: [ag-grid.com/example-finance](https://www.ag-grid.com/example-finance/)

```tsx
// DataTable — sortable, selectable, with optional toolbar
<DataTable
  title="Holdings"
  description="Current portfolio positions"
  headers={[{ key: 'instrument', header: 'Instrument', sortable: true }, ...]}
  rows={[{ id: '1', instrument: 'AAPL', quantity: 500, value: 87500 }, ...]}
  size="sm" | "md" | "lg"
  selectable={true}
  sortable={true}
  toolbar={<Button kind="ghost" icon="search">Search</Button>}
/>

// Tile — content container
<Tile kind="base" | "clickable" | "selectable" href="..." selected={bool}>
  {children}
</Tile>

// StructuredList — key/value pairs, settlement details, order metadata
<StructuredList
  headers={['Field', 'Value']}
  rows={[{ cells: ['Counterparty', 'Barclays'] }, { cells: ['Settlement', 'T+2'] }]}
  selection={false}
  border={true}
/>

// Badge — count indicator
<Badge count={12} dot={false} max={99} />

// Avatar — user / entity representation
<Avatar name="Stuart Eastwood" size="sm" | "md" | "lg" />
```

---

### Feedback (`components/feedback/`)

```tsx
// InlineNotification — anchored status message
<InlineNotification
  kind="error" | "success" | "warning" | "info"
  title="Order rejected"
  subtitle="Insufficient margin for this position size."
  onClose={fn}
  lowContrast={false}
/>

// ToastNotification — transient overlay notification
<ToastNotification kind="success" title="Order submitted" subtitle="Working order added to blotter." caption="09:42:17 BST" onClose={fn} />

// Modal — focused task or confirmation
<Modal
  open={bool}
  onClose={fn}
  size="sm" | "md" | "lg"
  title="New Order"
  label="Order Management"
  primaryText="Submit order"
  secondaryText="Cancel"
  onPrimary={fn}
  danger={false}    // true for destructive actions
/>

// Tag — status label, category
<Tag type="green" | "red" | "blue" | "gray" | "cyan" | "teal" | "purple" | "magenta" | "yellow" | "high-contrast" | "outline" size="sm" | "md" icon="checkmark-filled" filter={false} onClose={fn} />

// Tooltip
<Tooltip label="30-day value at risk"><span>VaR</span></Tooltip>

// Loading
<Loading description="Loading positions..." small={false} />

// ProgressBar
<ProgressBar value={72} max={100} label="Compliance check" helperText="72% complete" status="active" | "finished" | "error" />
```

---

### Forms (`components/forms/`)

```tsx
<TextInput label="Instrument" size="sm" | "md" | "lg" invalid={bool} invalidText="Required" helperText="ISIN or ticker" />
<TextArea label="Notes" rows={4} />
<NumberInput label="Quantity" min={0} step={100} value={n} onChange={fn} />
<Select label="Account" size="md">
  <option value="eq">Equities</option>
</Select>
<Dropdown label="Order type" items={['Market','Limit','Stop']} selectedItem="Market" onChange={fn} size="md" />
<MultiSelect label="Asset class" items={['Equities','Fixed Income','FX']} />
<ComboBox label="Search instrument" items={instruments} onChange={fn} />
<Search placeholder="Search orders..." size="md" />
<DatePicker label="Settlement date" />
```

---

### Navigation (`components/navigation/`)

```tsx
// Tabs — primary view switcher
<Tabs
  tabs={['Markets', 'Blotter', 'Research']}
  selectedIndex={0}
  onChange={fn}
  contained={false}    // true for filled/contained style
>
  <MarketsPanel />
  <BlotterPanel />
  <ResearchPanel />
</Tabs>

// ContentSwitcher — alternate views of same content (e.g. Chart / Table)
<ContentSwitcher options={['Chart', 'Table', 'Heat Map']} selectedIndex={0} onChange={fn} />

// Pagination
<Pagination totalItems={247} page={1} pageSize={25} pageSizes={[10, 25, 50, 100]} onPageChange={fn} onPageSizeChange={fn} />

// Breadcrumb
<Breadcrumb items={[{ label: 'Portfolios', href: '/portfolios' }, { label: 'UK Equity Growth' }]} />

// Accordion
<Accordion items={[{ title: 'Risk metrics', content: <RiskPanel /> }]} allowMultiple={false} />

// OverflowMenu — ellipsis action menu for table rows
<OverflowMenu items={[{ label: 'Edit order' }, { label: 'Cancel order', danger: true }]} />

// Link
<Link href="..." target="_blank">View detail</Link>
```

---

## 04 — CAPITAL MARKETS DOMAIN CONTEXT

### User Roles & Primary Goals

| Role | Primary Goal | Critical Information |
|---|---|---|
| Portfolio Manager | Monitor performance, manage risk, execute rebalances | P&L (daily/MTD/YTD), allocation vs benchmark, VaR, concentration flags |
| Trader / Dealer | Execute orders efficiently, manage blotter | Live prices, bid/ask, order status, fill rate, market depth |
| Research Analyst | Surface insights, publish notes | Data tables, charts, annotation tools, export |
| Risk Officer | Identify and escalate risk breaches | Threshold alerts, heatmaps, drill-down, audit trail |
| Compliance Analyst | Monitor regulatory adherence | Rule breach status, timestamps (with timezone), counterparty, audit log |
| Operations | Settlement, reconciliation, reporting | Status tags, structured lists, exception queues |
| Broker / Prime Broker | Manage client margin, collateral, securities lending | Margin utilisation bars, collateral summary, short availability, client P&L |
| Investment Banker | Originate and execute capital markets transactions | Deal pipeline, live comps, yield/spread monitor, roadshow tracker |

### Extended Persona Profiles

These profiles expand the role table above for the three roles without a validated workspace blueprint (compare: Trader/Sales Trader are covered by Patterns 13 & 14). Use these when generating workspaces, specs, or prototypes for these roles.

---

#### Portfolio Manager (Buy-Side)

**Role context:** Manages a portfolio of assets against a benchmark or mandate — equities, fixed income, multi-asset, or alternatives. Responsible for investment decisions from idea generation through portfolio construction, execution, and performance attribution. Measured against absolute return or benchmark-relative performance, typically daily and monthly.

**Typical day:**

- Pre-market — Review overnight P&L vs benchmark. Check any factor exposure breaches or concentration flags. Read overnight sell-side research on holdings.
- Market open — Monitor live positions and intraday P&L. Track factor attribution (interest rate, credit spread, FX, sector) as markets move. Review cash flows from subscriptions/redemptions.
- During day — Investment committee prep or attendance. Respond to sell-side research. Model rebalancing trades for mandate drift. Pre-trade compliance check before sending orders to the execution desk.
- Post-market — Performance attribution (which factors drove today's P&L). Investor reporting inputs. Risk review against mandate limits. Next-day order preparation.

**Primary tools:** Bloomberg PORT (portfolio and risk analytics), Bloomberg AIM (order management, pre-trade compliance), Bloomberg MARS/MAC3 (factor risk modelling), Bloomberg RMS (research management), BlackRock Aladdin or Charles River (at larger firms), Excel for attribution. ESG data increasingly integrated from MSCI or Sustainalytics.

**Biggest pain points:**
- Fragmented data: research in RMS, risk in PORT, orders in AIM — no single view from idea to execution
- Attribution latency: accurate factor attribution is often T+1 in batch systems; live attribution during volatile sessions requires a separate tool or manual calculation
- Pre-trade compliance slows execution: compliance holds block time-sensitive trades — PMs want to see potential compliance flags before an order is submitted, not as a blocker after
- ESG data quality: multiple rating agencies give contradictory scores for the same issuer; reconciling ESG exposures against mandate limits is manual

**Decision triggers (what makes them act in the UI):**
- Portfolio drift >x% from target allocation — triggers a rebalancing review
- Single-name concentration approaching mandate limit — immediate alert, not end-of-day report
- Factor exposure exceeds risk budget — may require partial position reduction or hedging
- New sell-side research changes conviction on a holding — update model, review weighting
- Benchmark rebalancing or index event requiring a corresponding portfolio action
- Client redemption or large subscription — cash management and rebalancing simultaneously

**What "good UI" looks like for this role:**
- Portfolio overview as the default landing panel: total return vs benchmark (daily/MTD/YTD), factor attribution waterfall, top contributors/detractors, cash position
- Mandate compliance dashboard: live view of all constraints with current % utilisation — not a list of breach alerts but a continuous progress bar showing headroom
- Idea-to-order workflow: research note → model adjustment → proposed trade → compliance check → order — without leaving the system
- Attribution detail drill-down: factor → sector → individual holding — progressive disclosure, not nested tabs
- Historical performance chart overlaid with benchmark, with event annotations (market events, model changes)

---

#### Trader / Dealer (Sell-Side)

**Role context:** Executes orders and makes markets in one or more asset classes. On the sell-side this means pricing client RFQs, managing inventory risk, and hedging positions. On the buy-side execution desk, the focus shifts to sourcing liquidity, algorithm selection, and minimising market impact. See also: **Pattern 13 (FX Spot Workspace)** — the validated blueprint for the FX Spot Trader specifically. This profile covers the broader role.

**Typical day:**

- Pre-market — Review overnight positions handed over from APAC/EMEA. Check risk limits and any pre-approved hedges. Prep for expected client flow based on yesterday's pipeline.
- Market open — Monitor live order flow. Respond to client RFQs (milliseconds for electronic FX/rates; minutes for voice credit). Manage intraday inventory against risk limits. Hedge delta/gamma on options books.
- Throughout day — Price and execute client orders. Manage skew in order flow (if all clients are selling, widen spreads or reduce risk appetite). Escalate large orders that need structured response or multi-venue liquidity sourcing.
- Post-market / handoff — Position handoff to the next timezone desk. End-of-day risk reconciliation. Review fill quality (TCA for equities; spread capture for FI/FX). Update pricing models for next day.

**Primary tools:** Bloomberg Trade EMS / FXGO (FX) / EMSX (equities) / TSOX (fixed income); Bloomberg TOMS (order management); Bloomberg MARS (embedded real-time risk, Greeks); Bloomberg IB (voice flow integration); internal pricing engines (Murex, Calypso); multi-dealer platforms (Tradeweb, MarketAxess for FI; 360T, EBS for FX). FDC3 2.2 (FINOS) increasingly used for cross-system context sharing on the desktop.

**Biggest pain points:**
- Latency is the core constraint: every system switch (pricing engine → OMS → risk system → hedging desk) adds milliseconds and risk when the market is moving
- Inventory visibility: need a live view of own inventory across all venues before pricing a client request — stale inventory data leads to mispriced quotes
- Voice + electronic integration: hybrid desks (client calls on the phone while electronic flow arrives via API simultaneously) require both to be visible in one surface without constant switching
- Low-touch flow efficiency: high-volume small-ticket flow should be auto-routed with no trader touch; manual intervention capacity must be reserved for large or complex orders

**Decision triggers (what makes them act in the UI):**
- Client RFQ arrives — must respond within the platform's timeout (FX: 30–60 seconds; credit: 2–5 minutes for voice)
- Position approaches risk limit — reduce or seek approval immediately, not at end of day
- Market moves >x bps vs held inventory — recalculate hedge requirements, price risk of holding
- Order size >$n requires senior trader sign-off or structured response
- Skew in flow suggests informed order — widen spread or reduce size
- End-of-period position reconciliation flag — must be resolved before handoff

**What "good UI" looks like for this role:**
- Live blotter as the primary panel: all orders, fills, and open positions in a single AG Grid view — colour-coded by status (live/filled/cancelled), side (bid/offer using the correct asset-class colour convention), and time-to-expiry for RFQs
- Inventory panel pinned beside the blotter: current position by instrument, delta-adjusted, with P&L vs cost and proximity to limit — updates on tick
- RFQ queue with countdown timers: each unanswered client request shown as a card with remaining response time, instrument, size, client tier — sorted by urgency
- One-click hedge: from a position breach alert directly to a hedging order ticket, pre-populated with the offsetting instrument and quantity
- Analytics inline: spread capture, fill rate, order toxicity flag — not in a separate TCA report downloaded at end of day

---

#### Research Analyst (Sell-Side)

**Role context:** Produces written research — morning notes, sector updates, earnings models, rating changes — for internal sales desks and institutional clients. Covers equities, credit, or macro. Works against a hard 7am morning call deadline.

**Typical day:**

- 05:30–07:00 — Digest overnight flow (Bloomberg NEWS, LSEG Workspace alerts). Update models for any price-sensitive events. Write or approve morning note; route through supervisory analyst for compliance sign-off.
- 07:00 — Present on morning call; field questions from the sales desk.
- Market hours — Monitor coverage universe for breaks vs thesis. Respond to client/sales calls. Update models on earnings, guidance changes, macro prints.
- Post-market — Longer-form notes, thematic pieces, earnings previews. Model distribution to sales.

**Primary tools:** Bloomberg Terminal (BN/NOTE/SRCH), LSEG Workspace (formerly Refinitiv Eikon, rebranded 2025), S&P Capital IQ Pro, AlphaSense, Excel. 95% of sell-side research teams use 4+ tools daily — context-switching is the dominant friction.

**Biggest pain points:**
- No unified view of "what's moving in my coverage universe right now"
- Manual data aggregation into Excel models — scraping values from multiple terminal windows
- Pre-7am model update under time pressure when an overnight event breaks the thesis
- Research note distribution/version control across channels (Bloomberg, email, RMS)

**Decision triggers (what makes them act in the UI):**
- Stock in coverage moving >2% vs consensus without a known catalyst — needs investigation
- Earnings release lands overnight — model update before morning call is mandatory
- Rating change from a competitor analyst — requires response or monitoring of consensus shift
- Client call requesting colour on a specific position

**What "good UI" looks like for this role:**
- Coverage universe monitor as the default landing panel: name, last price, change vs close, change vs model target, last note date, next event
- News feed scoped to coverage names only — no global noise
- Model → note workflow in one surface, not three apps
- Research note card with status (Draft / In Review / Published) and distribution log
- Export to Bloomberg/RMS in one click — not a manual copy-paste step

---

#### Risk Officer (Market Risk)

**Role context:** Monitors and controls market risk across trading desks. Owns VaR, Greeks, stress testing, and limit management. Since FRTB went live in January 2025, is also responsible for daily P&L attribution and enhanced backtesting at desk level — failures force a desk to the more capital-intensive Standardised Approach.

**Typical day:**

- Pre-market — Review overnight risk snapshot: P&L, VaR by desk, any limit proximity flags (amber = 80% of limit, red = breach).
- Market open — Live monitoring of VaR and Greeks vs limits across desks. Watch for approaching breaches. Any desk hitting amber gets a call.
- Throughout day — Exception escalation workflow. Stress scenario monitoring (parallel shifts, curve twists, credit spread widening). Intraday P&L attribution.
- Post-market — End-of-day VaR calculation. FRTB backtesting check: does the risk model's P&L (RTPL) match actual P&L (HPL) within tolerance? Limit review. Regulatory reporting pack.

**Primary tools:** Bloomberg MARS (Multi-Asset Risk System), Bloomberg PORT, internal risk systems (Murex, Calypso, or bespoke VaR engine), Excel. All siloed — aggregating across asset classes is a manual daily step.

**Biggest pain points:**
- Cross-asset aggregation: FX desk, Rates desk, and Credit desk each have separate risk systems; portfolio-level VaR requires a nightly batch run, not live
- Latency: risk numbers are often 15–30 minutes stale during fast markets when they matter most
- FRTB P&L attribution failures: a single desk failure generates a significant regulatory capital penalty — the attribution gap needs to be diagnosed and explained quickly
- Audit trail: every escalation and limit override must be timestamped with approver, reason, and resolution

**Decision triggers (what makes them act in the UI):**
- VaR approaching 80% of limit (amber) — call desk head proactively
- VaR at 100% of limit (breach) — mandatory escalation, position reduction discussion
- P&L attribution failure under FRTB — diagnose gap between RTPL and HPL; determine if model or data issue
- Single-name concentration spike (position > n% of desk VaR)
- Stress scenario breach: tail event simulations exceed capital buffer
- Positive P&L + VaR breach simultaneously — commercially justified but technically a breach; requires senior sign-off and detailed rationale

**What "good UI" looks like for this role:**
- Exception queue as the primary panel: sorted by severity (breach > amber > green), showing desk, metric, limit, current value, and time since trigger
- Drill-down path: enterprise total → asset class → desk → individual instrument — each level adds granularity without leaving context
- Inline escalation workflow attached to each exception: assign, add note, request override, mark resolved — full audit trail visible
- FRTB attribution panel: RTPL vs HPL by desk, daily backtesting pass/fail, rolling 250-day exception count
- Greeks dashboard: Delta, Gamma, Vega, DV01 by desk with limit bars — not just raw numbers

---

#### Operations / Compliance Analyst

**Role context:** Manages post-trade processing — trade confirmations, affirmations, settlement, reconciliation, and exception resolution. Under T+1 settlement (US adopted May 2024; UK/EU following), has a 2–5 hour window from trade execution to resolve exceptions before a trade fails to settle. Settlement fails cost an average of $25–50K per incident (penalties, financing costs, reputational impact with counterparties).

**Typical day:**

- Start of day — Exception queue review: all unmatched or failed items from the overnight batch. Triage by settlement date × value × counterparty tier.
- Pre-cutoff window — Race to resolve highest-priority exceptions. Failure causes: lack of securities (most common), lack of cash/credit, SSI instruction errors, data issues (~21% of fails).
- Mid-day — Confirmations and affirmations for today's new trades. Match against counterparty confirmations (typically via SWIFT or electronic matching platform). Any unmatched item becomes tomorrow's exception.
- Afternoon — Final pre-cutoff sweep. Any remaining breaks escalate to supervisor. Counterparty outreach for unresolved breaks.
- End of day — Reconciliation sign-off. Settlement fail report. Next-day exception volume forecast based on today's unaffirmed trades.

**Primary tools:** Internal OMS/post-trade systems (Fidessa, Murex back office), SWIFT Alliance, custodian portals (BNY Mellon, State Street), reconciliation platforms (Smartstream, Xceptor), Excel.

**Biggest pain points:**
- 60–80% of time historically spent on manual matching and break resolution — batch systems built for T+2 cannot handle the real-time demands of T+1
- Multiple disconnected systems: exception discovered in OMS, investigated via custodian portal, resolved via SWIFT, logged in another system
- Counterparty friction: resolving a break often requires a phone call or message exchange — no structured in-workflow communication channel
- Prioritisation: with 200+ exceptions in a queue, identifying the 5 that will fail today if not resolved in the next 2 hours requires manual sorting

**Decision triggers (what makes them act in the UI):**
- Settlement date = today AND unresolved — immediate, regardless of value
- Exception value > threshold (e.g. >$1M) — escalation path, not standard queue
- Repeat failing counterparty on same ISIN — systemic issue, needs escalation to relationship manager
- Data error vs instruction error — different resolution paths; wrong classification wastes time
- Cutoff T-minus 1 hour — any remaining open exceptions trigger supervisor notification

**What "good UI" looks like for this role:**
- Exception queue as the primary panel: sorted by urgency score (settlement date proximity × value × counterparty tier) — not alphabetically or by entry time
- Each exception card shows: ISIN, counterparty, settlement date, value, fail reason category, time to cutoff (countdown), and resolution status
- Inline resolution workflow: update SSI, trigger affirmation, escalate, add note, mark resolved — without leaving the queue
- Reconciliation summary panel: matched %, unmatched %, failed %, trend vs prior week — for end-of-day sign-off
- Audit log per exception: every status change with timestamp, user, and action — required for regulatory examination

---

#### Broker / Prime Broker

**Role context:** A Prime Broker provides integrated services to institutional clients (primarily hedge funds): securities financing, margin lending, securities lending for short positions, clearing, custody, and execution. The role sits at the intersection of credit risk (the firm's exposure to the client) and client service (keeping the client funded and operational). At smaller brokers, execution brokers route orders on behalf of clients across venues, focused on achieving best execution under MiFID II/SEC obligations.

**Typical day:**

- Start of day — Review overnight margin positions. Identify any clients approaching margin threshold. Check securities lending inventory for short positions required by clients.
- Pre-market — Process overnight corporate actions affecting client portfolios. Confirm collateral values. Flag any margin calls to be issued before market open.
- Market open — Monitor live client P&L and portfolio risk. As markets move, margin requirements change in real time — significant moves can trigger intraday margin calls.
- Throughout day — Respond to client requests for securities borrows. Price financing terms for new trades. Manage collateral substitutions (clients requesting to swap one asset for another as collateral).
- Post-market — End-of-day margin calculation. Net exposure reporting. Securities lending returns and rerates. Regulatory reporting (SFTR for securities financing).

**Primary tools:** Internal prime brokerage platform, Bloomberg Terminal (market data, corporate actions), collateral management systems (Clearstream, Euroclear, EquiLend for securities lending), internal margin systems, SWIFT for settlement instructions.

**Biggest pain points:**
- Intraday margin calls require immediate client contact and often phone calls — there is no clean workflow for issuing, tracking, and confirming margin call resolution in one system
- Short locate requests: clients request to short a security; the prime broker must confirm availability and pricing from the lending desk — often done via phone/chat with no systematic audit trail
- Collateral haircut disputes: clients and the prime broker often disagree on the value assigned to non-cash collateral; resolving this manually across spreadsheets is error-prone
- Concentration risk: a client with a large concentrated position creates disproportionate credit exposure; identifying concentration before it becomes a forced unwind is the preventative goal

**Decision triggers (what makes them act in the UI):**
- Client margin utilisation crosses amber threshold (e.g. 80%) — proactive call before a forced margin call
- Market move >x% in a concentrated position — recalculate client exposure immediately
- Short inventory for a security drops below client's existing short — potential buy-in risk
- Client requests a large new short — locate and price before confirming availability
- Collateral value drops due to credit event — reassess haircut, potential collateral top-up required

**What "good UI" looks like for this role:**
- Client portfolio dashboard: total NAV, margin utilisation (as a % progress bar, not just a number), top 5 concentrated positions, overnight P&L — one row per client, sortable by risk
- Margin call workflow: issue a call → log client response → track collateral delivery → mark resolved — with full audit trail and timestamps
- Securities lending panel: security → total inventory available → on loan to clients → free to lend → current rate — updated in near real-time
- Collateral summary: what assets are held as collateral per client, their market value, applied haircuts, and net collateral value vs margin requirement
- Alerts sorted by urgency: margin breach > concentration > locate failure > collateral shortfall

---

#### Investment Banker (Coverage / Capital Markets)

**Role context:** Investment bankers originate and execute transactions — ECM (IPOs, follow-ons, rights issues, convertibles), DCM (bonds, loans, securitisations), and M&A advisory. Coverage bankers maintain client relationships and identify opportunities; product bankers (ECM, DCM, M&A, Leveraged Finance) execute the transactions. Unlike traders, bankers operate on a deal timeline of weeks to months, not seconds. The UI challenge is deal pipeline management, live market monitoring for execution windows, and document-heavy workflows.

**Typical day:**

- Morning — Market check: read relevant overnight news, check credit spreads / equity indices / IPO activity. Assess whether the market window is open for a pending transaction.
- Daytime — Client meetings and calls: pitch new business, update on live deals, gather information for valuations. Prepare or review pitch materials and models.
- Live deal execution — During bookbuilding (ECM) or roadshow (DCM/ECM): monitor order book in real time, communicate demand to the syndicate, take calls from investors, update pricing guidance.
- Admin / compliance — Engagement letter management, Chinese wall logging (tracking who knows about live deals), regulatory filing coordination (prospectus, filings with FCA/SEC).

**Primary tools:** Bloomberg Terminal (comps, yield curves, M&A news, equity screening, SRCH for precedent transactions), PitchBook/CapIQ (comparable transactions, private company data), Excel (financial models — DCF, LBO, accretion/dilution), PowerPoint (pitch books), Intralinks/Ansarada (deal data room). CRM for client interaction tracking.

**Biggest pain points:**
- Pitch book preparation: 60–70% of time on a pitch is reformatting data from previous pitches, not generating new insights. Comparable transactions need to be refreshed manually every time.
- Market window timing: bankers need to monitor live spreads, equity volatility (VIX), and competitor deal activity simultaneously to judge if "now" is the right execution window — this requires real-time data not typically integrated into their workflow
- Precedent transaction search: finding relevant comps across asset classes, geographies, and time periods requires Bloomberg + CapIQ + internal deal databases — no single source of truth
- Regulatory workflow: keeping track of what information has been shared with which clients (wall-crossing logs) is a compliance requirement with no good systematic tooling at most banks

**Decision triggers (what makes them act in the UI):**
- Credit spreads tighten or equity markets rally — execution window opens; accelerate deal preparation
- Competitor deal announced in the same sector — potential demand pull-forward; must advise client on timing
- Investor order book >50% covered during bookbuilding — signal to tighten pricing guidance
- Order book pulls back or anchor investors drop out — consider postponement or repricing
- M&A target share price moves significantly — update fairness opinion; remodel deal economics
- Regulatory approval received — deal can proceed to completion; trigger signing/closing workflow

**What "good UI" looks like for this role:**
- Deal pipeline as the primary panel: deal name, client, type (ECM/DCM/M&A), stage (origination/mandate/live/closed), expected close date, deal size, coverage banker — sortable and filterable
- Market conditions monitor: live equity index, VIX, IG/HY spread index, recent competitor deal activity — the "is the window open?" view in one glance
- Comps workspace: for a given deal type and sector, pull live comparable transaction data (pricing, yield/spread at issue, size, date) — refreshed from Bloomberg/CapIQ, not a static table
- Bookbuilding tracker (during live execution): current order book size vs deal size, investor breakdown by type (fund vs insurance vs bank), demand by price/yield level — updated in near real-time during roadshow
- Regulatory log: Chinese wall crossing record per client per deal — timestamped, user-attributed, exportable for compliance audit

---

### Capital Markets UI Patterns → Unite Component Mapping

**KPI / Metric Tile** (P&L summary, AUM, VaR, fill rate)
```tsx
<Tile kind="base">          // or "clickable" for drill-down
  <p className="unite-type-label-01" style={{color: 'var(--text-secondary)'}}>Daily P&L</p>
  <p className="unite-type-heading-04" style={{fontFamily: 'var(--font-mono)', color: 'var(--support-success)'}}>+£124,500</p>
  <p className="unite-type-label-01" style={{color: 'var(--text-secondary)'}}>+1.24% vs yesterday</p>
</Tile>
```

**Trading Blotter** (order list, position list)

Use **AG Grid** for blotters — not `<DataTable>`. Blotters require real-time row updates, row flashing on tick, column pinning, and large virtualised datasets that `<DataTable>` is not designed for. See [ag-grid.com/example-finance](https://www.ag-grid.com/example-finance/) for a reference finance implementation.

```tsx
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
// Apply Unite dark theme via AG Grid theme API or CSS overrides targeting var(--background) etc.

const BlotterGrid: React.FC<{ orders: Order[] }> = ({ orders }) => {
  const colDefs: ColDef<Order>[] = [
    { field: 'time',       headerName: 'Time',       pinned: 'left', cellStyle: { fontFamily: 'var(--font-mono)' } },
    { field: 'instrument', headerName: 'Instrument', pinned: 'left', sortable: true, filter: true },
    { field: 'side',       headerName: 'Side',       cellRenderer: SideCellRenderer },
    { field: 'quantity',   headerName: 'Qty',        sortable: true, type: 'numericColumn', cellStyle: { fontFamily: 'var(--font-mono)' } },
    { field: 'price',      headerName: 'Price',      sortable: true, type: 'numericColumn', cellStyle: { fontFamily: 'var(--font-mono)' }, enableCellChangeFlash: true },
    { field: 'status',     headerName: 'Status',     cellRenderer: StatusTagRenderer },
    { field: 'actions',    headerName: '',           cellRenderer: ActionsRenderer, width: 48 },
  ];

  return (
    <div style={{ height: 500, background: 'var(--background)' }}>
      <AgGridReact
        rowData={orders}
        columnDefs={colDefs}
        rowSelection="multiple"
        enableCellChangeFlash={true}   // flashes cells on value change
        getRowId={r => r.data.id}      // required for streaming updates
        suppressMovableColumns={false}
      />
    </div>
  );
};
```

**AG Grid + Unite theming:** Override AG Grid CSS custom properties to match Unite tokens. Key mappings:
```css
.ag-theme-unite {
  --ag-background-color:        var(--background);
  --ag-foreground-color:        var(--text-primary);
  --ag-header-background-color: var(--layer-01);
  --ag-odd-row-background-color: var(--layer-01);
  --ag-row-hover-color:         var(--layer-hover-01);
  --ag-selected-row-background-color: var(--layer-selected-01);
  --ag-border-color:            var(--border-subtle-01);
  --ag-font-family:             var(--font-sans);
  --ag-font-size:               14px;
}
```

**Order Ticket** (new order modal)
```tsx
<Modal open={isOpen} title="New Order" size="md" primaryText="Submit order" secondaryText="Cancel" onPrimary={submitOrder} onClose={close}>
  <Dropdown label="Instrument" items={instruments} />
  <RadioButtonGroup legend="Side" items={['Buy', 'Sell']} />
  <NumberInput label="Quantity" min={0} step={100} />
  <Dropdown label="Order type" items={['Market', 'Limit', 'Stop']} />
  <TextInput label="Limit price" helperText="Required for Limit orders" />
  <Select label="Account" />
</Modal>
```

**Market Quote Grid** (live prices)
```tsx
// Use DataTable with font-mono for numeric columns, Tag for change direction
<DataTable
  headers={[
    { key: 'ticker', header: 'Ticker', sortable: true },
    { key: 'last', header: 'Last' },
    { key: 'bid', header: 'Bid' },
    { key: 'ask', header: 'Ask' },
    { key: 'change', header: 'Chg%', sortable: true },
    { key: 'volume', header: 'Volume', sortable: true },
  ]}
  // Numeric cells: fontFamily: var(--font-mono)
  // Change: <Tag type="green"> for positive, <Tag type="red"> for negative
/>
```

**Research Note Card**
```tsx
<Tile kind="clickable" href="/research/note-id">
  <Tag type="blue">Equity</Tag>
  <h3 className="unite-type-heading-02">UK Banks — Q2 Outlook</h3>
  <p className="unite-type-body-compact-01" style={{color: 'var(--text-secondary)'}}>Analyst: J. Morrison · 23 Jun 2026</p>
</Tile>
```

**Alert / Breach Notification**
```tsx
<InlineNotification kind="error" title="VaR limit breached" subtitle="Portfolio VaR £2.1M exceeds mandate limit of £1.8M. Action required." />
```

**Settlement / Detail Panel** (structured data, not tabular)
```tsx
<StructuredList
  headers={['Field', 'Value']}
  rows={[
    { cells: ['ISIN', 'GB0002634946'] },
    { cells: ['Counterparty', 'Barclays Capital'] },
    { cells: ['Settlement date', 'T+2 · 26 Jun 2026'] },
    { cells: ['Custodian', 'BNY Mellon'] },
    { cells: ['Status', <Tag type="cyan">Pending</Tag>] },
  ]}
/>
```

**View Navigation** (workspace shell)
```tsx
// Top-level: Tabs (contained) for Trading / Analytics / Client Intelligence
// Side nav: separate nav rail pattern
// Within a view: ContentSwitcher for Chart / Table / Heatmap alternatives
// Drill-down: Breadcrumb + back navigation
```

### Business Rules for Generated Outputs

- All timestamps must display **timezone** (e.g. `09:42:17 BST`)
- Price and P&L values must use **IBM Plex Mono** (`var(--font-mono)`)
- Positive P&L: `--support-success` / `<Tag type="green">`
- Negative P&L: `--support-error` / `<Tag type="red">`
- Concentration flags (position > 5% of portfolio): `<Tag type="red">` + `<InlineNotification kind="warning">`
- Risk breaches: always `<InlineNotification kind="error">` — never silently hidden
- Regulatory fields (e.g. LEI, ISIN, counterparty name): always visible, never truncated
- Role-gated data: comment with `{/* ROLE-GATE: visible to Risk Officer+ only */}`

---

## 04.5 — WORKSPACE LAYOUT PATTERNS

Use these canonical layout patterns for any full-workspace request. Do not invent new layouts — select from these archetypes and adapt data to the role.

### Standard 3-Panel Trading Workspace

The default layout for trading workspaces. Applies to Trader, Sales Trader, Portfolio Manager, and Risk Officer views.

```
┌─────────────────────────────────────────────────────────────┐
│  GLOBAL HEADER  (56px) — wordmark · nav · user · status     │
├──────────────┬───────────────────────────────┬──────────────┤
│              │                               │              │
│  LEFT PANEL  │       CENTRE PANEL            │ RIGHT PANEL  │
│  ~280px      │       flex-grow (1fr)         │  ~320px      │
│  (fixed)     │                               │  (fixed)     │
│              │                               │              │
│  Context /   │  Primary data surface         │  Detail /    │
│  instrument  │  (blotter, chart, grid)       │  ticket /    │
│  selector    │                               │  RFQ queue   │
│              │                               │              │
├──────────────┴───────────────────────────────┴──────────────┤
│  BLOTTER PANEL  (~280px) — full-width, resizable            │
│  AG Grid live orders / positions / trades                   │
└─────────────────────────────────────────────────────────────┘
```

**Column ratios:** Left 280px fixed · Centre flex (`1fr`) · Right 320px fixed.  
**Blotter height:** Default 280px; user-resizable via drag handle. Min 160px, max 50% of viewport height.  
**Global header:** 56px fixed, `var(--layer-01)` background, `var(--border-subtle-01)` bottom border.

```tsx
<div data-theme="g100" style={{
  display: 'grid',
  gridTemplate: '"header header header" 56px "left centre right" 1fr "blotter blotter blotter" 280px / 280px 1fr 320px',
  height: '100vh',
  background: 'var(--background)',
}}>
  <header style={{ gridArea: 'header', background: 'var(--layer-01)', borderBottom: '1px solid var(--border-subtle-01)' }} />
  <aside  style={{ gridArea: 'left',   background: 'var(--layer-01)', borderRight: '1px solid var(--border-subtle-01)' }} />
  <main   style={{ gridArea: 'centre', background: 'var(--background)', overflow: 'hidden' }} />
  <aside  style={{ gridArea: 'right',  background: 'var(--layer-01)', borderLeft: '1px solid var(--border-subtle-01)' }} />
  <section style={{ gridArea: 'blotter', background: 'var(--layer-01)', borderTop: '1px solid var(--border-subtle-01)' }} />
</div>
```

---

### 2-Panel Analytics Workspace

For Research Analyst, Risk Officer (drill-down), and Portfolio Manager (attribution). No blotter.

```
┌─────────────────────────────────────────────────────────────┐
│  GLOBAL HEADER  (56px)                                      │
├─────────────────────────────────┬───────────────────────────┤
│                                 │                           │
│   LEFT PANEL  (~420px fixed)    │   RIGHT PANEL (flex)      │
│                                 │                           │
│   Filter / coverage / list      │   Charts, tables,         │
│   (scrollable)                  │   detail panels           │
│                                 │   (tabbed or stacked)     │
│                                 │                           │
└─────────────────────────────────┴───────────────────────────┘
```

**Column ratios:** Left 420px fixed · Right `1fr`.

---

### Exception Queue Workspace

For Operations / Compliance and Broker / Prime Broker. Queue-primary layout.

```
┌─────────────────────────────────────────────────────────────┐
│  GLOBAL HEADER  (56px)                                      │
├───────────────────────────┬─────────────────────────────────┤
│                           │                                 │
│  QUEUE PANEL  (~480px)    │   DETAIL PANEL  (flex)          │
│                           │                                 │
│  AG Grid exception list   │   Selected item detail          │
│  Sorted by urgency score  │   Resolution workflow           │
│  Filter / search toolbar  │   Audit trail                   │
│                           │   Action buttons                │
└───────────────────────────┴─────────────────────────────────┘
```

**Column ratios:** Left 480px fixed · Right `1fr`. No blotter or bottom panel — the queue IS the primary data surface.

---

### Panel Interaction Rules

| Interaction | Behaviour |
|---|---|
| Click a blotter row | Populates the right detail panel — no navigation |
| Click a queue item | Populates the right detail panel — no navigation |
| Click a chart data point | Tooltip first; click-to-drill goes to `<Modal>` or expands right panel |
| Panel resize handle | Drag to resize; persist new size to `localStorage` (or React state if in artifact) |
| Panel collapse | Left and right panels can collapse to icon-only rail (40px) via toggle |
| Keyboard shortcut | `]` / `[` to expand/collapse left/right panels; `Escape` to close detail drawer |

---

### Detail Drawer (slide-over)

For item detail that doesn't need a full right panel — use a slide-over drawer anchored to the right edge:

```tsx
// Drawer overlay — appears over the right panel or the full workspace
<div style={{
  position: 'fixed', inset: '56px 0 0 auto',   // below header, right edge
  width: 480,
  background: 'var(--layer-01)',
  borderLeft: '1px solid var(--border-subtle-01)',
  transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
  transition: 'transform 200ms ease-out',
  zIndex: 200,
  overflow: 'auto',
}} role="complementary" aria-label="Detail panel">
  {/* content */}
</div>
```

---

## 05 — STANDARD GENERATION WORKFLOW

When generating any interface with Claude:

1. **Start with domain context** — not wireframes, not Figma
2. Identify the user role and their primary workflow
3. Map the workflow to Unite component patterns (see section 04)
4. Apply theme: `[data-theme="g100"]` for capital markets (dark)
5. Generate the concept
6. Validate against Unite rules (semantic tokens, correct components)
7. Refine
8. Produce implementation output (spec + React/TSX code)

---

## 06 — PROMPT FRAMEWORK

Every generation request should follow this structure:

```
CONTEXT: [What problem is being solved?]
ROLE: [Portfolio Manager | Trader | Risk Officer | Compliance | Operations | Research]
WORKFLOW: [What is the user trying to accomplish?]
REQUIREMENTS:
  - Must show: [key data / metrics]
  - Business rules: [constraints]
  - Regulatory: [compliance requirements]
  - Theme: [g100 dark / white light]
OUTPUT:
  1. Design rationale (2–3 sentences)
  2. Component specification (layout, components, props, tokens)
  3. React + TypeScript production component
```

**Example — Trading Blotter view:**
```
CONTEXT: Traders need to monitor and manage live orders across all asset classes.
ROLE: Trader
WORKFLOW: View open orders, search/filter by status, cancel or amend individual orders.
REQUIREMENTS:
  - Must show: order time (with timezone), instrument, side (Buy/Sell), quantity, limit price, fill status, actions
  - Business rules: filled orders cannot be cancelled; partial fills show progress bar
  - Theme: g100 dark
OUTPUT: rationale + spec + React TSX
```

**Example — Portfolio Manager dashboard:**
```
CONTEXT: Portfolio manager needs a morning view of fund performance and key risk metrics before the market open.
ROLE: Portfolio Manager
WORKFLOW: Review overnight P&L vs benchmark, check factor attribution, identify any mandate breaches, prepare orders for rebalancing.
REQUIREMENTS:
  - Must show: total return vs benchmark (daily/MTD/YTD), top 5 contributors/detractors, mandate compliance bars (% utilisation per constraint), cash position, VaR vs limit
  - Business rules: concentration >5% of portfolio shows warning; mandate breach triggers InlineNotification kind="error"
  - Sample data: BlackRock-managed fund, instruments from LSE equities list (BP.L, HSBA.L, VOD.L etc.)
  - Theme: g100 dark
OUTPUT: rationale + spec + HTML prototype with simulated data
```

**Example — Research Analyst coverage monitor:**
```
CONTEXT: Sell-side analyst needs a real-time view of their coverage universe before the 7am morning call.
ROLE: Research Analyst
WORKFLOW: Scan coverage names for overnight moves, identify what needs to be addressed on the morning call, check if any news breaks the thesis.
REQUIREMENTS:
  - Must show: instrument name, last price, overnight change (% and abs), change vs 12m target price, last note date, next scheduled event, news flag (if any overnight headline)
  - Business rules: moves >2% vs close flag amber; moves vs target >10% adverse flag red; no price data = stale indicator
  - Sample data: UK equities coverage (BP.L, HSBA.L, VOD.L, SHEL.L, LLOY.L)
  - Theme: g100 dark
OUTPUT: rationale + spec + HTML prototype
```

**Example — Risk Officer exception queue:**
```
CONTEXT: Market risk officer starts the day by triaging overnight limit exceptions before desks begin trading.
ROLE: Risk Officer
WORKFLOW: Review all desks with limit proximity flags, drill into any breaches, escalate or approve overrides.
REQUIREMENTS:
  - Must show: desk name, VaR current vs limit, utilisation % (progress bar), amber/red status, time of last update, escalation status
  - Business rules: >80% utilisation = amber warning; 100% = red breach requiring action; FRTB P&L attribution failures show separately
  - Sample data: rates desk (T. Nakamura), FX desk (A. Chen), credit desk (J. Morrison)
  - Theme: g100 dark
OUTPUT: rationale + spec + HTML prototype
```

**Example — Operations exception queue (T+1):**
```
CONTEXT: Operations analyst needs to clear settlement exceptions before the T+1 cutoff window closes.
ROLE: Operations / Compliance Analyst
WORKFLOW: Triage exception queue by urgency, resolve highest-priority breaks, escalate unresolvable items.
REQUIREMENTS:
  - Must show: exception ID, ISIN, counterparty, settlement date, notional value, fail reason category, urgency score, time to cutoff (countdown), status
  - Business rules: settlement date = today always top of queue; value >£5m escalation flag; cutoff <1hr triggers supervisor alert
  - Sample data: counterparties from Tier 1/2 list; instruments from Bonds (Govt) list; values in realistic range £1m–£50m
  - Theme: g100 dark
OUTPUT: rationale + spec + HTML prototype
```

**Example — Prime Broker client margin dashboard:**
```
CONTEXT: Prime broker needs a live view of all hedge fund client margin positions to catch approaching calls before market open.
ROLE: Broker / Prime Broker
WORKFLOW: Scan client portfolio for margin threshold approaches, review concentrated positions, issue margin calls where needed.
REQUIREMENTS:
  - Must show: client name, total NAV, margin utilisation (progress bar), top concentrated position, overnight P&L, call status
  - Business rules: >80% utilisation = amber; >100% = red (call to be issued); concentrated position >15% of NAV = flag
  - Sample data: clients from Prime brokerage list (Citadel, Man Group, Winton); instruments from equities and bonds lists
  - Theme: g100 dark
OUTPUT: rationale + spec + HTML prototype
```

**Example — Investment Banker deal pipeline:**
```
CONTEXT: Investment banker needs a deal pipeline view to track live mandates and monitor market conditions for execution windows.
ROLE: Investment Banker
WORKFLOW: Review deal pipeline status, check whether market conditions are suitable to launch a pending transaction, monitor bookbuilding for a live deal.
REQUIREMENTS:
  - Must show: deal name, client, type (ECM/DCM/M&A), stage, deal size, expected close, coverage banker, days in stage
  - Market conditions panel: IG credit spread index, FTSE 100, VIX, last 5 comparable deals (issuer, size, yield/spread)
  - Business rules: deals stalled in same stage >30 days flag amber; live deals show countdown to bookbuilding close
  - Sample data: clients from Tier 1 counterparty list; realistic deal sizes £200m–£2bn
  - Theme: g100 dark
OUTPUT: rationale + spec + HTML prototype
```

---

## 07 — OUTPUT FORMAT FOR CODE GENERATION

All generated React components must follow this structure:

```tsx
// [ComponentName].tsx
import React, { useState } from 'react';
const { DataTable, Pagination, Search, Tag, OverflowMenu, Button } = window.UniteDesignSystem_429d79;

// ---- Types ----
interface [Entity] {
  id: string;
  // ... typed fields
}

interface [ComponentName]Props {
  // ... props with defaults documented
}

// ---- Component ----
export const [ComponentName]: React.FC<[ComponentName]Props> = ({ ... }) => {
  // state
  // handlers
  return (
    <div data-theme="g100" style={{ background: 'var(--background)', color: 'var(--text-primary)', fontFamily: 'var(--font-sans)' }}>
      {/* layout */}
    </div>
  );
};

export default [ComponentName];
```

**Rules for generated code:**
- No hardcoded hex colours — semantic tokens only
- No hardcoded pixel values — spacing tokens only
- All numeric/price/time values: `fontFamily: 'var(--font-mono)'`
- Loading state: always include `<Loading />`
- Error state: always include `<InlineNotification kind="error" />`
- Empty state: always include a message + call-to-action

---

## 08 — HUMAN GOVERNANCE MODEL

AI generates. Humans decide.

Every output must be:
1. **Reviewed** — does it correctly represent the domain and user workflow?
2. **Validated** — does it follow Unite design system rules?
3. **Approved** — confirmed by the Product Design Lead before implementation

The intelligence OS supports decision making. It does not replace ownership.

---

## 09 — EXISTING UI KIT REFERENCE

The **Trading Workspace UI Kit** (`ui_kits/trading-workspace/`) is a working reference implementation showing:
- Dark global header with Unite wordmark + header navigation
- Side navigation rail with active state
- Markets view: KPI tiles + ContentSwitcher + live quote DataTable
- Blotter view: sortable/selectable DataTable + status Tags + Search toolbar
- Order ticket: Modal composed of Dropdown + RadioButton + NumberInput + TextInput + Select
- Research view: InlineNotification + clickable Tile cards
- Toast notification on order submission

Reference this kit when asked to generate any capital markets workspace view.

---

---

## 10 — DATA VISUALISATION

### Libraries

Two charting libraries are approved for use in Unite. Choose based on complexity:

**Carbon Charts** (`@carbon/charts-react`) — use for standard business charts that should inherit Carbon's visual language automatically. Design reference: [carbondesignsystem.com/data-visualization/simple-charts](https://carbondesignsystem.com/data-visualization/simple-charts). Interactive demos: [carbon-design-system.github.io/carbon-charts](https://carbon-design-system.github.io/carbon-charts/).

Supported chart types: Area (simple / stacked), Bar (simple / floating / grouped / stacked), Boxplot, Bubble, Bullet, Combo, Donut, Gauge, Histogram, Line, Lollipop, Pie, Meter, Radar, Scatter, **Sparkline**, Step, Word Cloud.

**Apache ECharts** (`echarts`) — use for high-performance, complex, or highly customised charts (heatmaps, candlestick/OHLC, large dataset rendering, custom series). ECharts supports Canvas and SVG rendering and can handle millions of data points in real time. Reference: [echarts.apache.org](https://echarts.apache.org/en/index.html).

Use ECharts for: candlestick / OHLC price charts, risk heatmaps, order book depth charts, correlation matrices, large tick-data line charts.

### Chart Usage Rules

- Always apply Unite dataviz colour tokens (`--data-viz-01` through `--data-viz-14`) — never hardcode chart colours.
- Positive/negative series: use `--support-success` (green) and `--support-error` (red) consistently with the rest of the UI.
- All axis labels and tick values: `IBM Plex Mono` (`var(--font-mono)`).
- Tooltips must show the timezone for any time-series data.
- Charts must include a loading state and an empty/no-data state.
- Pair every chart with a `<ContentSwitcher>` offering a Table fallback for accessibility.

### Carbon Charts — Quick Reference

```tsx
import { LineChart, BarChartSimple, DonutChart, SparklineChart } from '@carbon/charts-react';
import '@carbon/charts/styles.css';

// Sparkline — inline price trend in a KPI tile or table cell
<SparklineChart
  data={[{ group: 'Price', date: new Date('2026-06-01'), value: 142.5 }, ...]}
  options={{ height: '50px', color: { scale: { Price: 'var(--support-success)' } } }}
/>

// Line — time-series P&L or NAV
<LineChart
  data={seriesData}
  options={{
    title: 'Portfolio NAV',
    axes: { bottom: { title: 'Date', mapsTo: 'date', scaleType: 'time' },
             left:   { title: 'NAV (£)', mapsTo: 'value' } },
    height: '300px',
  }}
/>

// Bar (simple) — sector allocation, volume by instrument
<BarChartSimple
  data={barData}
  options={{ title: 'Sector Allocation', axes: { left: { mapsTo: 'value' }, bottom: { mapsTo: 'key' } }, height: '300px' }}
/>

// Donut — portfolio composition
<DonutChart
  data={compositionData}
  options={{ title: 'Asset Mix', resizable: true, donut: { center: { label: 'Total AUM' } }, height: '300px' }}
/>
```

### ECharts — Quick Reference (OHLC / Heatmap)

```tsx
import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

// Candlestick / OHLC price chart
const CandlestickChart: React.FC<{ data: OHLCBar[] }> = ({ data }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const chart = echarts.init(ref.current!, 'dark');
    chart.setOption({
      backgroundColor: 'var(--background)',
      xAxis: { type: 'category', data: data.map(d => d.date) },
      yAxis: { type: 'value', axisLabel: { fontFamily: 'IBM Plex Mono' } },
      series: [{
        type: 'candlestick',
        data: data.map(d => [d.open, d.close, d.low, d.high]),
        itemStyle: { color: '#42be65', color0: '#fa4d56', borderColor: '#42be65', borderColor0: '#fa4d56' },
      }],
    });
    return () => chart.dispose();
  }, [data]);
  return <div ref={ref} style={{ width: '100%', height: 400 }} />;
};

// Risk Heatmap — correlation matrix or sector/factor exposure
chart.setOption({
  visualMap: { min: -1, max: 1, inRange: { color: ['#fa4d56', '#161616', '#42be65'] } },
  series: [{ type: 'heatmap', data: matrixData, label: { show: true, fontFamily: 'IBM Plex Mono' } }],
});
```

---

## 11 — REAL-TIME DATA PATTERNS

Capital markets UIs receive continuous live data. Follow these conventions when generating components that consume streaming data.

---

### 11.1 — WebSocket Connection Management

Never open a raw WebSocket directly in a component. Centralise connection logic in a singleton service or custom hook so reconnection, subscriptions, and cleanup are managed in one place.

```tsx
// useFeed.ts — reusable WebSocket hook
type FeedStatus = 'connecting' | 'connected' | 'reconnecting' | 'disconnected';

export function useFeed(url: string) {
  const [status, setStatus]   = useState<FeedStatus>('connecting');
  const [messages, setMessages] = useState<unknown[]>([]);
  const wsRef    = useRef<WebSocket | null>(null);
  const retryRef = useRef<ReturnType<typeof setTimeout>>();
  const attempt  = useRef(0);

  const connect = useCallback(() => {
    const ws = new WebSocket(url);
    wsRef.current = ws;

    ws.onopen  = () => { setStatus('connected'); attempt.current = 0; };
    ws.onclose = () => {
      setStatus('reconnecting');
      // Exponential back-off: 1s, 2s, 4s, 8s … capped at 30s
      const delay = Math.min(1000 * 2 ** attempt.current, 30_000);
      attempt.current += 1;
      retryRef.current = setTimeout(connect, delay);
    };
    ws.onerror = () => ws.close();
    ws.onmessage = (e) => setMessages(prev => [...prev, JSON.parse(e.data)]);
  }, [url]);

  useEffect(() => {
    connect();
    return () => {
      clearTimeout(retryRef.current);
      wsRef.current?.close();
      setStatus('disconnected');
    };
  }, [connect]);

  const send = useCallback((msg: unknown) => {
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify(msg));
    }
  }, []);

  return { status, messages, send };
}
```

**Always surface connection state** — never silently show stale data:

```tsx
const { status } = useFeed(MARKET_DATA_URL);

{status === 'disconnected'  && <InlineNotification kind="error"   title="Live feed disconnected"   subtitle="Prices are not updating. Reconnecting…" />}
{status === 'reconnecting'  && <InlineNotification kind="warning" title="Reconnecting to market data feed…" />}
{status === 'connecting'    && <InlineNotification kind="info"    title="Connecting to market data…" />}
```

---

### 11.2 — Message Throttling & Batching

High-frequency feeds (bid/ask, depth-of-book) can emit hundreds of messages per second. Rendering on every message will cause jank. Batch updates into a fixed render interval:

```tsx
// Accumulate incoming ticks in a ref; flush to state on a fixed interval
const buffer = useRef<Map<string, PriceTick>>(new Map());

ws.onmessage = (e) => {
  const tick: PriceTick = JSON.parse(e.data);
  buffer.current.set(tick.symbol, tick);   // latest tick per symbol; older ones dropped
};

useEffect(() => {
  const interval = setInterval(() => {
    if (buffer.current.size === 0) return;
    setPrices(prev => ({ ...prev, ...Object.fromEntries(buffer.current) }));
    buffer.current.clear();
  }, 100);  // render at most 10× per second
  return () => clearInterval(interval);
}, []);
```

**Throttle thresholds by component type:**

| Component | Max render rate | Rationale |
|---|---|---|
| Market quote grid (bid/ask) | 10 fps (100ms) | Readable without flicker |
| P&L / NAV tile | 2 fps (500ms) | Aggregated values; no need for every tick |
| Candlestick chart | 1 fps (1000ms) | Bar formation, not tick-by-tick |
| Order status | Immediate | Low frequency; status changes matter |
| Risk breach notification | Immediate | Critical; always assertive |

---

### 11.3 — Price Flash Animation

Highlight price changes with a brief colour flash on tick. Use CSS classes — not inline style mutations — so the animation can be suppressed by `prefers-reduced-motion`:

```css
@keyframes flash-positive { 0%,100% { background: transparent; } 50% { background: var(--support-success); opacity: 0.2; } }
@keyframes flash-negative { 0%,100% { background: transparent; } 50% { background: var(--support-error);   opacity: 0.2; } }
.price-flash-up   { animation: flash-positive 400ms ease-out; }
.price-flash-down { animation: flash-negative 400ms ease-out; }
@media (prefers-reduced-motion: reduce) {
  .price-flash-up, .price-flash-down { animation: none; }
}
```

```tsx
const usePriceFlash = (price: number) => {
  const prev = useRef(price);
  const [flashClass, setFlashClass] = useState('');

  useEffect(() => {
    if (price === prev.current) return;
    const cls = price > prev.current ? 'price-flash-up' : 'price-flash-down';
    prev.current = price;
    setFlashClass(cls);
    const t = setTimeout(() => setFlashClass(''), 400);
    return () => clearTimeout(t);
  }, [price]);

  return flashClass;
};

// Usage
const flashClass = usePriceFlash(price);
<span className={flashClass} style={{ fontFamily: 'var(--font-mono)' }}>{fmt.price(price)}</span>
```

---

### 11.4 — Stale Data Indicator

If a feed has not ticked within a threshold, surface staleness explicitly rather than silently showing old values:

```tsx
const STALE_THRESHOLDS = {
  equity:  5_000,   // 5s — equities trade continuously
  fx:      3_000,   // 3s — FX is even more active
  default: 10_000,
};

function useStale(lastUpdated: number, assetClass: keyof typeof STALE_THRESHOLDS = 'default') {
  const [isStale, setIsStale] = useState(false);
  useEffect(() => {
    const check = () => setIsStale(Date.now() - lastUpdated > STALE_THRESHOLDS[assetClass]);
    check();
    const interval = setInterval(check, 1000);
    return () => clearInterval(interval);
  }, [lastUpdated, assetClass]);
  return isStale;
}

// Usage in a price cell
const isStale = useStale(tick.lastUpdated, 'equity');
<span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--spacing-02)' }}>
  <span className={flashClass} style={{ fontFamily: 'var(--font-mono)', color: isStale ? 'var(--text-secondary)' : 'var(--text-primary)' }}>
    {fmt.price(price)}
  </span>
  {isStale && <Tag type="gray" icon="warning-filled">Stale</Tag>}
</span>
```

---

### 11.5 — Per-Instrument Subscriptions

Subscribe and unsubscribe at the instrument level so the feed only delivers data the current view needs:

```tsx
// Send subscription messages on mount; unsubscribe on unmount
useEffect(() => {
  send({ action: 'subscribe',   symbols: instruments });
  return () => send({ action: 'unsubscribe', symbols: instruments });
}, [instruments]);
```

When the viewed instrument list changes (e.g. user filters the blotter), diff the old and new sets to minimise churn:

```tsx
useEffect(() => {
  const added   = instruments.filter(s => !prevInstruments.current.includes(s));
  const removed = prevInstruments.current.filter(s => !instruments.includes(s));
  if (added.length)   send({ action: 'subscribe',   symbols: added });
  if (removed.length) send({ action: 'unsubscribe', symbols: removed });
  prevInstruments.current = instruments;
}, [instruments]);
```

---

### 11.6 — AG Grid Streaming Row Updates

For blotters receiving live order updates, use AG Grid's transaction API to update individual rows without re-rendering the entire grid:

```tsx
// Process incoming order updates as AG Grid transactions
const applyUpdate = useCallback((update: OrderUpdate) => {
  gridRef.current?.api.applyTransactionAsync({
    update: [update],   // rows with matching getRowId are updated in place
  });
}, []);

// Batch multiple updates arriving in the same tick
const applyBatch = useCallback((updates: OrderUpdate[]) => {
  gridRef.current?.api.applyTransactionAsync({ update: updates });
}, []);

// Flash changed cells (AG Grid built-in — pairs with enableCellChangeFlash on ColDef)
// Cells flash automatically when their value changes via applyTransaction
```

---

### 11.7 — Virtual Scrolling for Large Datasets

Blotters or position lists with > 200 rows must use virtualised rendering. AG Grid handles this automatically. For `<DataTable>` or custom lists, use `react-window`:

```tsx
{/* PERF: Use AG Grid or react-window FixedSizeList for datasets > 200 rows */}
import { FixedSizeList } from 'react-window';

<FixedSizeList
  height={500}
  itemCount={rows.length}
  itemSize={40}       // matches --size-lg (48px) or dense --size-sm (32px)
  width="100%"
>
  {({ index, style }) => (
    <div style={{ ...style, display: 'flex', alignItems: 'center', borderBottom: '1px solid var(--border-subtle-01)' }}>
      <Row data={rows[index]} />
    </div>
  )}
</FixedSizeList>
```

---

### 11.8 — Industry Standards & References

The throttle rates, subscription patterns, and connection management in §11 align with industry practices codified in the following publicly accessible standards. Developers building against vendor platforms (TT, Bloomberg, LSEG) should consult those providers' authenticated portals directly.

#### FIX Protocol — Message Urgency Taxonomy

The [FIX Protocol](https://fixtrading.org/standards/fix-protocol/) (FIX Trading Community) is the industry's dominant application-layer standard for financial message exchange. It defines *what* business information is communicated—not *how* it travels—so the same FIX messages can be carried over TCP/IP, multicast, or WebSockets.

FIX message types directly inform UI rendering urgency:

| FIX MsgType | Message | UI urgency |
|---|---|---|
| `35=W` | MarketDataSnapshotFullRefresh | Batchable — sent once on subscription; throttle display updates |
| `35=X` | MarketDataIncrementalRefresh | Buffer per-symbol; render at controlled framerate (see §11.2) |
| `35=8` | ExecutionReport | **Immediate** — trade confirmation; low-frequency, never delay |
| `35=9` | OrderCancelReject | **Immediate** — error state; render assertive notification |
| `35=j` | BusinessMessageReject | **Immediate** — protocol-level error; render assertive notification |

The render-rate table in §11.2 maps directly to this taxonomy: snapshot/incremental market data is throttled; order and risk events are never deferred. FIX Technical Guidelines and the Automated Trading & Risk Management guidelines at [fixtrading.org/guidelines](https://fixtrading.org/guidelines/automated-trading-and-risk-mgt/) cover risk-control triggers — corresponding to the "immediate + assertive" notification pattern in §12.3.

Use **FIX Latest** (continuously updated via extension packs). Legacy versions 4.2 and 4.4 remain supported; all earlier versions are archived.

#### FINOS FDC3 — Financial Desktop Interoperability

[FDC3 2.2](https://fdc3.finos.org/docs/fdc3-standard) (FINOS, adopted April 2025) is the open standard for application interoperability on the financial desktop. It is directly relevant to Unite as a multi-product workspace: FDC3 enables instruments, positions, and contexts selected in one Unite module to flow automatically into another without bespoke point-to-point wiring.

FDC3 context types applicable to Unite components:

| Context type | Description | Example use |
|---|---|---|
| `fdc3.instrument` | Single instrument with identifiers (ticker, ISIN, FIGI) | Blotter row → chart drill-down |
| `fdc3.instrumentList` | Multiple instruments | Portfolio selector → analytics grid |
| `fdc3.position` | Instrument + quantity + side | Position blotter → risk tile |
| `fdc3.portfolio` | Collection of positions | Portfolio selector → P&L aggregation |
| `fdc3.order` | Order details | Order blotter → execution history panel |

FDC3 intents applicable to Unite workflows:

| Intent | Trigger | Target |
|---|---|---|
| `ViewChart` | Right-click instrument row | Chart module |
| `ViewInstrument` | Click ticker link | Instrument detail panel |
| `PlaceOrder` | Click "Trade" CTA | Order ticket modal |
| `ViewAnalysis` | Click "Research" link | Analytics / research module |

When a Unite component broadcasts or listens for context, prefer FDC3 context types over ad hoc custom event buses to remain interoperable with the broader financial desktop ecosystem. FDC3 is in production at JPMorgan Chase, Morgan Stanley, NatWest, BlackRock, LSEG, and Wellington Management.

```tsx
// Broadcast instrument context when user selects a blotter row
import { fdc3 } from '@finos/fdc3';

async function onRowSelect(instrument: { ticker: string; isin: string }) {
  await fdc3.broadcast({
    type: 'fdc3.instrument',
    name: instrument.ticker,
    id: { ticker: instrument.ticker, ISIN: instrument.isin },
  });
}

// Listen for instrument context in a dependent panel
useEffect(() => {
  const listener = fdc3.addContextListener('fdc3.instrument', (context) => {
    setSelectedInstrument(context.id);
  });
  return () => listener.unsubscribe();
}, []);
```

#### Vendor Platform APIs

Both TT and LSEG docs require authentication; Bloomberg BLPAPI is available to API subscribers only. The throttle rates, reconnection behaviour, and subscription diffing in §11.1–11.5 are consistent with the documented patterns of all three platforms.

| Platform | Access | Notes |
|---|---|---|
| Trading Technologies (TT) REST + WebSocket APIs | Authenticated — library.tradingtechnologies.com | Order routing, market data subscription/unsubscription |
| LSEG Real-Time WebSocket API | Authenticated — developers.lseg.com | Streaming price updates, refresh-on-reconnect model |
| Bloomberg BLPAPI / B-PIPE | Bloomberg API subscribers only | Subscription and throttling model for real-time data delivery |

---

## 12 — ACCESSIBILITY (WCAG 2.1 AA)

All generated interfaces must target **WCAG 2.1 Level AA**. The Carbon design system provides a compliant foundation; the rules below address capital markets–specific requirements.

### 12.1 — Contrast & Colour

Minimum contrast ratios (WCAG 1.4.3 / 1.4.11):
- Body text (< 18pt / < 14pt bold): **4.5:1**
- Large text (≥ 18pt / ≥ 14pt bold): **3:1**
- UI components and graphical objects (borders, icons, chart lines): **3:1**

Carbon semantic tokens satisfy these ratios within each theme by default. Never override token values with raw hex colours — doing so may silently break contrast.

**Colour must never be the sole indicator of meaning.** Always pair colour with a label, icon, or pattern:

```tsx
// BAD — colour only
<span style={{ color: 'var(--support-error)' }}>−£3,200</span>

// GOOD — colour + explicit sign + screen-reader context
<span style={{ color: 'var(--support-error)', fontFamily: 'var(--font-mono)' }} aria-label="Loss: minus £3,200">
  −£3,200
</span>

// GOOD — Tag with icon
<Tag type="red" icon="error-filled">Breach</Tag>

// GOOD — Buy/Sell side indicator uses tag + text, never colour alone
<Tag type="green">Buy</Tag>
<Tag type="red">Sell</Tag>
```

---

### 12.2 — Keyboard Navigation

Every interactive element must be reachable and operable by keyboard alone.

**Standard key bindings:**

| Key | Action |
|---|---|
| `Tab` / `Shift+Tab` | Move focus between interactive elements |
| `Enter` / `Space` | Activate buttons, checkboxes, toggles |
| `Arrow keys` | Navigate within a component (tabs, radio groups, menus, grid rows) |
| `Escape` | Close modal, dropdown, or tooltip; cancel inline edit |
| `Home` / `End` | Jump to first/last item in a list or grid |
| `Page Up` / `Page Down` | Scroll virtualised grid by viewport |

Never use `tabindex` values > 0. Use `tabindex="0"` only to make a non-interactive element focusable when necessary.

**Focus ring:** Never suppress `outline`. Apply `var(--focus)` for custom components:

```css
.custom-cell:focus-visible {
  outline: 2px solid var(--focus);
  outline-offset: -2px;
}
```

**Trader keyboard shortcuts** — document application-level shortcuts with `aria-keyshortcuts` and a visible key hint:

```tsx
<Button kind="primary" aria-keyshortcuts="b" onClick={submitBuy}>
  Buy <kbd style={{ marginLeft: 'var(--spacing-02)', opacity: 0.7 }}>B</kbd>
</Button>

// Register global handler — guard against active input fields
useEffect(() => {
  const handler = (e: KeyboardEvent) => {
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
    if (e.key === 'b') openBuyTicket();
    if (e.key === 's') openSellTicket();
    if (e.key === 'Escape') closeActiveModal();
  };
  window.addEventListener('keydown', handler);
  return () => window.removeEventListener('keydown', handler);
}, []);
```

---

### 12.3 — Screen Reader & ARIA

**Page landmarks** — always include landmark roles so screen reader users can navigate by region:

```tsx
<header role="banner">…</header>
<nav role="navigation" aria-label="Main navigation">…</nav>
<main role="main">
  <section aria-labelledby="blotter-heading">
    <h2 id="blotter-heading">Order Blotter</h2>
    …
  </section>
</main>
<aside role="complementary" aria-label="Order detail">…</aside>
```

**Live regions for streaming data:**

```tsx
// POLITE — non-urgent: prices, status changes. Announced after current speech finishes.
<span aria-live="polite" aria-atomic="true" style={{ fontFamily: 'var(--font-mono)' }}>
  {formattedPrice}
</span>

// ASSERTIVE — critical only: risk breaches, feed disconnections, rejected orders.
// Interrupts the screen reader immediately — use sparingly.
<div role="alert" aria-live="assertive">
  <InlineNotification kind="error" title="VaR limit breached" subtitle="Portfolio VaR £2.1M exceeds mandate limit of £1.8M." />
</div>

// OFF — suppress for cells that tick too frequently (e.g. bid/ask).
// Announce only on user-initiated focus:
<td aria-live="off" onFocus={() => announcePrice(price)}>{formattedPrice}</td>
```

**Tables:**

```tsx
// Unite's <DataTable> handles caption and header associations automatically.
// For AG Grid:
<AgGridReact aria-label="Order blotter — 247 orders" />

// For custom tables:
<table>
  <caption className="sr-only">Portfolio positions, sorted by P&L descending</caption>
  <thead>
    <tr>
      <th scope="col">Instrument</th>
      <th scope="col">Quantity</th>
      <th scope="col" aria-sort="descending">P&L</th>
    </tr>
  </thead>
</table>
```

**Visually hidden text** — use `.sr-only`, not `display:none`:

```css
.sr-only {
  position: absolute; width: 1px; height: 1px;
  padding: 0; margin: -1px; overflow: hidden;
  clip: rect(0,0,0,0); white-space: nowrap; border: 0;
}
```

```tsx
// Icon-only button must have a text label
<Button kind="ghost" iconOnly icon="delete" aria-label="Cancel order OD-00421" />

// Status indicator with colour meaning paired with text
<span className="status-dot" aria-hidden="true" />
<span className="sr-only">Filled</span>
```

---

### 12.4 — Forms & Validation

```tsx
// Every input must have a visible label — never use placeholder as label
<TextInput
  label="Instrument"
  helperText="ISIN or ticker"
  invalid={!!errors.instrument}
  invalidText={errors.instrument}  // Carbon announces this automatically
/>

// Grouped controls must use fieldset + legend
<fieldset>
  <legend>Order side</legend>
  <RadioButton value="buy" label="Buy" name="side" />
  <RadioButton value="sell" label="Sell" name="side" />
</fieldset>

// Required fields — indicate in label, not colour alone
<TextInput label="Quantity (required)" aria-required="true" />

// On submission with errors — move focus to error summary
const errorSummaryRef = useRef<HTMLDivElement>(null);
const handleSubmit = () => { if (hasErrors) errorSummaryRef.current?.focus(); };
<div ref={errorSummaryRef} tabIndex={-1} role="alert">
  {errors.map(e => <p key={e.field}>{e.message}</p>)}
</div>
```

---

### 12.5 — Modal & Focus Management

```tsx
// Carbon's <Modal> handles focus trapping and restoration automatically.
// For any custom dialog:
// 1. On open: move focus to first focusable element inside
// 2. Trap Tab / Shift+Tab within the dialog
// 3. On close: return focus to the trigger element

const triggerRef = useRef<HTMLButtonElement>(null);
const [open, setOpen] = useState(false);
const close = () => { setOpen(false); triggerRef.current?.focus(); };

<Button ref={triggerRef} onClick={() => setOpen(true)}>New Order</Button>
<Modal open={open} onClose={close} aria-label="New order entry" />
```

---

### 12.6 — Charts & Data Visualisation

```tsx
// Carbon Charts generates accessible descriptions automatically from the title + data.
<LineChart data={data} options={{ title: 'Portfolio NAV — June 2026' }} />

// ECharts — add aria attributes on the container
<div ref={chartRef} role="img" aria-label="Candlestick chart: AAPL 3-month price. Range: $168–$201." />

// Always pair charts with a table fallback
<ContentSwitcher options={['Chart', 'Table']} selectedIndex={viewIndex} onChange={setViewIndex} />
{viewIndex === 0 ? <LineChart … /> : <DataTable headers={headers} rows={rows} />}
```

---

### 12.7 — Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  .price-flash-up, .price-flash-down { animation: none; }
  * { transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; }
}
```

```tsx
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
chart.setOption({ animation: !prefersReducedMotion });  // ECharts
if (!prefersReducedMotion) setFlashClass(cls);          // price flash
```

---

### 12.8 — Role-Gated Content

Hidden content must be **removed from the DOM** — not hidden with CSS:

```tsx
// BAD — still in DOM, readable by screen readers
<div style={{ display: 'none' }}><RiskMetricsPanel /></div>

// GOOD
{/* ROLE-GATE: visible to Risk Officer+ only */}
{userRole >= Role.RiskOfficer && <RiskMetricsPanel />}
```

---

### 12.9 — Accessibility Testing Checklist

Before marking any component complete, verify:

- [ ] All interactive elements reachable and operable by keyboard alone
- [ ] Focus ring visible on every focusable element; tab order follows visual order
- [ ] No colour-only meaning — every status has a label or icon
- [ ] All form inputs have visible labels; required fields marked `aria-required`
- [ ] Error messages associated with their input (`invalidText` in Carbon)
- [ ] Live regions: `polite` for prices, `assertive` for critical alerts only
- [ ] Tables have captions and `scope` on headers
- [ ] Charts have `aria-label` + table fallback via `ContentSwitcher`
- [ ] Modals trap focus and restore it on close
- [ ] `prefers-reduced-motion` respected for all animations
- [ ] Role-gated content removed from DOM, not hidden with CSS
- [ ] Page has correct landmark regions (`banner`, `main`, `navigation`, etc.)

---

## 13 — NUMBER & CURRENCY FORMATTING

Financial data must be formatted consistently. Do not use raw `toString()` or uncontrolled `toFixed()`. The conventions below align with the following authoritative sources:

- **[FDC3 Context Data 2.2](https://fdc3.finos.org/docs/context/spec)** — prescribes ISO 4217 for currency codes, ISO 8601 for dates/timestamps, ISIN/CUSIP/FIGI for instrument identifiers
- **[ISO 4217](https://www.iso.org/iso-4217-currency-codes.html)** — 3-character alphabetic currency codes (GBP, USD, EUR, JPY…)
- **[ISO 8601-1:2019](https://www.iso.org/standard/70907.html)** — date and time encoding including timezone indicator
- **[FIX Time Precision Addendum](https://fixtrading.org/packages/time-precision-technical-addendum/)** (FIX Trading Community) — extends FIX timestamps to picosecond precision; MiFID II requires microsecond precision for algorithmic trades, millisecond for other trades

---

### 13.1 — Price Precision by Asset Class

Price precision is determined by market convention, not developer preference. Using the wrong decimal places is a genuine trade error risk.

| Asset class | Precision | Notes | Example |
|---|---|---|---|
| Equities (LSE, NYSE) | 2 d.p. | Pence/cents per share | `142.50p` · `$23.40` |
| Equities (sub-penny markets) | 4 d.p. | Dark pools, some US venues | `142.5025` |
| FX major pairs (non-JPY) | 4 d.p. | EUR/USD, GBP/USD, etc. | `1.2643` |
| FX JPY pairs | 2 d.p. | USD/JPY, EUR/JPY | `155.34` |
| FX forward points (pips) | Integer pips | Offset from spot | `+50 pips` |
| Bonds (% of par) | 3 d.p. | Government and corporate | `98.750` |
| Bond yield | 3–4 d.p. | Yield-to-maturity | `4.235%` |
| Rates / swaps | 3–4 d.p. | Mid-market rate | `4.125%` |
| Options (equity) | 2–4 d.p. | Premium per share | `2.35` |
| Crypto | 2–8 d.p. | Bitcoin 2 d.p.; altcoins up to 8 | `42,350.00` · `0.00003421` |
| Commodities (oil, gold) | 2 d.p. | USD per barrel/ounce | `$2,315.50` |

**FX pip convention** — display the fourth decimal place enlarged ("big figure" + "pips") in dealer-facing UIs:

```tsx
// EUR/USD 1.2643 → "1.264" + "3" (pip highlighted)
<span style={{ fontFamily: 'var(--font-mono)' }}>
  <span>1.264</span>
  <span style={{ fontSize: '1.25em', fontWeight: 600 }}>3</span>
</span>
```

---

### 13.2 — Currency Codes

Use **ISO 4217 3-character alphabetic codes** (as mandated by FDC3 context types). Never use currency symbols alone as identifiers — they are display-only and ambiguous (`$` = USD, CAD, AUD, HKD, etc.).

```tsx
// CORRECT — ISO 4217 in data; symbol in display only
interface MonetaryValue {
  amount: number;
  CURRENCY_ISOCODE: string; // 'GBP' | 'USD' | 'EUR' | 'JPY' etc. — ISO 4217
}

// Resolved symbol map for display
const CURRENCY_SYMBOL: Record<string, string> = {
  GBP: '£', USD: '$', EUR: '€', JPY: '¥', CHF: 'Fr', CAD: 'C$', AUD: 'A$',
};

function formatMoney(amount: number, currency: string, dp = 2): string {
  const symbol = CURRENCY_SYMBOL[currency] ?? currency;
  return `${symbol}${Math.abs(amount).toLocaleString('en-GB', {
    minimumFractionDigits: dp,
    maximumFractionDigits: dp,
  })}`;
}
```

---

### 13.3 — P&L and Sign Convention

P&L values **must always show an explicit sign**. Use the Unicode minus `−` (U+2212) for negative values, not a hyphen-minus `-` — they differ in width and alignment in monospace fonts.

```tsx
// Sign convention — explicit + or − prefix; never parentheses in digital UIs
const fmt = {
  pnl:    (v: number, ccy = 'GBP', dp = 2) =>
    `${v >= 0 ? '+' : '−'}${formatMoney(Math.abs(v), ccy, dp)}`,
  pnlPct: (v: number) =>
    `${v >= 0 ? '+' : '−'}${Math.abs(v).toFixed(2)}%`,
  bps:    (v: number) =>
    `${v >= 0 ? '+' : '−'}${Math.abs(Math.round(v))} bps`,
};

// Examples
fmt.pnl(124500, 'GBP')   // '+£124,500.00'
fmt.pnl(-3200, 'GBP')    // '−£3,200.00'
fmt.pnlPct(-0.87)         // '−0.87%'
fmt.bps(25)               // '+25 bps'
fmt.bps(-12.5)            // '−13 bps'
```

---

### 13.4 — Large Number Abbreviation

For KPI tiles, risk summaries, and notional displays where space is constrained, abbreviate using SI-style suffixes. Always show at least 1 d.p. when abbreviating.

| Value | Full display | Abbreviated |
|---|---|---|
| 1,250,000 | `£1,250,000.00` | `£1.3m` |
| 42,500,000 | `£42,500,000.00` | `£42.5m` |
| 1,750,000,000 | `£1,750,000,000.00` | `£1.8bn` |

```tsx
function abbreviateMoney(value: number, ccy = 'GBP'): string {
  const symbol = CURRENCY_SYMBOL[ccy] ?? ccy;
  const abs = Math.abs(value);
  const sign = value < 0 ? '−' : '';
  if (abs >= 1e9) return `${sign}${symbol}${(abs / 1e9).toFixed(1)}bn`;
  if (abs >= 1e6) return `${sign}${symbol}${(abs / 1e6).toFixed(1)}m`;
  if (abs >= 1e3) return `${sign}${symbol}${(abs / 1e3).toFixed(1)}k`;
  return `${sign}${symbol}${abs.toFixed(2)}`;
}
```

Full precision must always be available via tooltip or expanded view when abbreviated values are shown.

---

### 13.5 — Timestamps and Dates

Follow **ISO 8601** encoding for all data transfer (FDC3-compliant). Display format is separate from storage/transfer format.

| Context | Encoding / Display | Example |
|---|---|---|
| Data transfer / FDC3 context | ISO 8601 with TZ | `"2026-06-25T09:42:17.123+01:00"` |
| Trade timestamp (display) | `HH:MM:SS.mmm TZ` | `09:42:17.123 BST` |
| Market data tick (display) | `HH:MM:SS.mmm` | `09:42:17.456` |
| Order blotter date+time | `DD Mon YYYY HH:MM:SS` | `25 Jun 2026 09:42:17` |
| Date only | `DD Mon YYYY` | `25 Jun 2026` |
| Settlement date | `DD Mon YYYY` | `27 Jun 2026` |

**MiFID II timestamp precision (per FIX Time Precision Addendum):** algorithmic/HFT trades must record timestamps to microsecond precision (`HH:MM:SS.mmmmmm`). For display, millisecond (`HH:MM:SS.mmm`) is sufficient unless the UI explicitly serves compliance/audit use cases.

```tsx
const fmt = {
  // Display only — do not use for data storage or FDC3 context payloads
  ts:        (d: Date) => d.toLocaleTimeString('en-GB', { hour12: false, timeZoneName: 'short' }),
  tsMs:      (d: Date) => `${d.toLocaleTimeString('en-GB', { hour12: false })}.${String(d.getMilliseconds()).padStart(3, '0')} ${Intl.DateTimeFormat('en-GB', { timeZoneName: 'short' }).formatToParts(d).find(p => p.type === 'timeZoneName')?.value ?? 'UTC'}`,
  dateShort: (d: Date) => d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),

  // ISO 8601 — use for FDC3 context payloads and API calls
  iso:       (d: Date) => d.toISOString(),
};
```

---

### 13.6 — Null / Missing Value Display

Never render `null`, `undefined`, `NaN`, or `0` ambiguously. Use an em dash `—` for genuinely absent values and a dedicated stale indicator (see §11.4) for data that exists but has expired.

```tsx
// NULL HANDLING — centralised guard, never inline
function safePrice(v: number | null | undefined, dp = 2): string {
  if (v === null || v === undefined || isNaN(v)) return '—';
  return v.toLocaleString('en-GB', { minimumFractionDigits: dp, maximumFractionDigits: dp });
}

// In JSX
<span style={{ fontFamily: 'var(--font-mono)' }} aria-label={price == null ? 'No price available' : undefined}>
  {safePrice(price)}
</span>
```

Treat `0` as a valid value — do not replace it with `—`. A zero P&L and a missing P&L are meaningfully different.

---

### 13.7 — Column Alignment and Typography

| Rule | Rationale |
|---|---|
| All numeric columns: **right-aligned** | Decimal points and digit columns line up vertically — industry standard in Bloomberg, LSEG Workspace, and AG Grid `type: 'numericColumn'` |
| All price/P&L/quantity values: **`var(--font-mono)`** | Fixed-width characters ensure column alignment holds even without right-alignment; prevents layout shift on value change |
| Colour **always paired with sign or label** | Red/green alone is inaccessible (WCAG 1.4.1) and ambiguous for multi-currency books |
| Ticker symbols: **uppercase, `var(--font-mono)`** | Matches exchange convention; ISIN/CUSIP/FIGI in same style |

```tsx
// AG Grid numericColumn type automatically right-aligns
const colDefs: ColDef[] = [
  { field: 'price',    type: 'numericColumn', cellStyle: { fontFamily: 'var(--font-mono)' },
    valueFormatter: p => safePrice(p.value, 4) },        // FX: 4 d.p.
  { field: 'quantity', type: 'numericColumn', cellStyle: { fontFamily: 'var(--font-mono)' },
    valueFormatter: p => safePrice(p.value, 0) },         // equity qty: integer
  { field: 'pnl',      type: 'numericColumn',
    cellStyle: p => ({
      fontFamily: 'var(--font-mono)',
      color: p.value > 0 ? 'var(--support-success)' : p.value < 0 ? 'var(--support-error)' : 'var(--text-primary)',
    }),
    valueFormatter: p => fmt.pnl(p.value) },
];
```

---

### 13.8 — Full Utility Object

```tsx
// Centralise ALL formatting — never format inline in JSX
const CURRENCY_SYMBOL: Record<string, string> = {
  GBP: '£', USD: '$', EUR: '€', JPY: '¥', CHF: 'Fr', CAD: 'C$', AUD: 'A$', HKD: 'HK$',
};

const fmt = {
  // Prices — pass dp per asset class (2 equities, 4 FX non-JPY, 2 FX JPY, 3 bonds)
  price:    (v: number | null | undefined, dp = 2): string =>
    v == null || isNaN(v as number) ? '—'
    : (v as number).toLocaleString('en-GB', { minimumFractionDigits: dp, maximumFractionDigits: dp }),

  // Monetary P&L with explicit sign and ISO 4217 currency
  pnl:      (v: number | null | undefined, ccy = 'GBP', dp = 2): string => {
    if (v == null || isNaN(v as number)) return '—';
    const sym = CURRENCY_SYMBOL[ccy] ?? ccy;
    return `${(v as number) >= 0 ? '+' : '−'}${sym}${Math.abs(v as number).toLocaleString('en-GB', { minimumFractionDigits: dp, maximumFractionDigits: dp })}`;
  },

  // Percentage P&L
  pnlPct:   (v: number | null | undefined): string =>
    v == null || isNaN(v as number) ? '—'
    : `${(v as number) >= 0 ? '+' : '−'}${Math.abs(v as number).toFixed(2)}%`,

  // Basis points
  bps:      (v: number | null | undefined): string =>
    v == null || isNaN(v as number) ? '—'
    : `${(v as number) >= 0 ? '+' : '−'}${Math.abs(Math.round(v as number))} bps`,

  // Quantities (integers for equities; pass dp for bond face values)
  quantity: (v: number | null | undefined, dp = 0): string =>
    v == null || isNaN(v as number) ? '—'
    : (v as number).toLocaleString('en-GB', { minimumFractionDigits: dp, maximumFractionDigits: dp }),

  // Large-number abbreviation for KPI tiles
  abbrev:   (v: number, ccy = 'GBP'): string => abbreviateMoney(v, ccy),

  // Timestamp display (millisecond precision)
  ts:       (d: Date | null | undefined): string =>
    d == null ? '—'
    : `${d.toLocaleTimeString('en-GB', { hour12: false })}.${String(d.getMilliseconds()).padStart(3, '0')}`,

  // Date display
  date:     (d: Date | null | undefined): string =>
    d == null ? '—'
    : d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),

  // ISO 8601 — for FDC3 context payloads and API calls only (not display)
  iso:      (d: Date): string => d.toISOString(),
};
```

---

## 14 — SKELETON & LOADING STATES

### 14.1 — When to Use Each Pattern

| Pattern | Use when |
|---|---|
| `<Loading />` (full spinner, overlay) | Initial page or view load; no layout to show yet |
| Skeleton rows in `<DataTable>` or AG Grid | Table data is fetching; column structure is known |
| Skeleton tiles | KPI / metric tiles loading; tile dimensions are known |
| Inline `<Loading small />` | A single value, button, or field is refreshing |
| `<ProgressBar />` | Long-running operation with measurable progress (e.g. bulk export, compliance check) |
| Optimistic UI (no skeleton) | Mutations with near-instant server response; show result immediately, roll back on error |

**Rule:** Prefer skeletons over full-page spinners whenever the layout is known. Spinners give no spatial context; skeletons reduce perceived load time by anchoring the user in the correct layout.

---

### 14.2 — Skeleton Anatomy

Skeleton shapes must mirror the dimensions of the real content they replace. Use `var(--layer-02)` as the fill on `var(--layer-01)` surfaces, and `var(--layer-03)` on `var(--layer-02)` surfaces. Apply a shimmer animation to communicate active loading:

```css
@keyframes skeleton-shimmer {
  0%   { background-position: -400px 0; }
  100% { background-position: 400px 0; }
}
.skeleton {
  background: linear-gradient(90deg, var(--layer-02) 25%, var(--layer-03) 50%, var(--layer-02) 75%);
  background-size: 800px 100%;
  animation: skeleton-shimmer 1.4s ease-in-out infinite;
  border-radius: 2px;
}
@media (prefers-reduced-motion: reduce) {
  .skeleton { animation: none; }
}
```

Reusable primitive:

```tsx
const SkeletonBlock: React.FC<{ width?: string | number; height?: number; style?: React.CSSProperties }> = (
  { width = '100%', height = 14, style }
) => (
  <div className="skeleton" style={{ width, height, ...style }} aria-hidden="true" />
);
```

---

### 14.3 — Skeleton Patterns by Component

**KPI / Metric Tile**

```tsx
const SkeletonKPITile = () => (
  <Tile kind="base" style={{ minHeight: 100 }}>
    <SkeletonBlock width="45%" height={12} style={{ marginBottom: 'var(--spacing-03)' }} />
    <SkeletonBlock width="65%" height={28} style={{ marginBottom: 'var(--spacing-02)' }} />
    <SkeletonBlock width="40%" height={12} />
  </Tile>
);

{isLoading ? <SkeletonKPITile /> : (
  <Tile kind="base">
    <p className="unite-type-label-01" style={{ color: 'var(--text-secondary)' }}>Daily P&L</p>
    <p className="unite-type-heading-04" style={{ fontFamily: 'var(--font-mono)', color: 'var(--support-success)' }}>+£124,500</p>
    <p className="unite-type-label-01" style={{ color: 'var(--text-secondary)' }}>+1.24% vs yesterday</p>
  </Tile>
)}
```

**DataTable (Unite component)**

```tsx
const makeSkeletonRows = (count = 8) =>
  Array.from({ length: count }, (_, i) => ({
    id: `sk-${i}`,
    time:       <SkeletonBlock width="80px" />,
    instrument: <SkeletonBlock width="90%" />,
    side:       <SkeletonBlock width="40px" height={20} />,
    quantity:   <SkeletonBlock width="60%" />,
    price:      <SkeletonBlock width="70%" />,
    status:     <SkeletonBlock width="56px" height={20} />,
    actions:    <SkeletonBlock width={16} height={16} />,
  }));

<div aria-busy={isLoading} aria-live="polite">
  <DataTable headers={headers} rows={isLoading ? makeSkeletonRows() : rows} />
</div>
```

**AG Grid Blotter**

Override AG Grid's built-in overlay to match Unite styling:

```tsx
const UniteLoadingOverlay = () => (
  <div style={{
    display: 'flex', alignItems: 'center', gap: 'var(--spacing-03)',
    background: 'var(--layer-01)', padding: 'var(--spacing-05)',
    border: '1px solid var(--border-subtle-01)',
  }}>
    <Loading small description="Loading orders…" />
    <span className="unite-type-body-compact-01" style={{ color: 'var(--text-secondary)' }}>Loading orders…</span>
  </div>
);

<AgGridReact
  loadingOverlayComponent={UniteLoadingOverlay}
  ref={gridRef}
  onGridReady={() => { if (isLoading) gridRef.current?.api.showLoadingOverlay(); }}
/>
```

**Chart Skeleton**

```tsx
{isLoading ? (
  <div style={{ position: 'relative', height: 300 }}>
    <SkeletonBlock height={300} style={{ borderRadius: 0 }} />
    <div style={{ position: 'absolute', bottom: 24, left: 48, right: 0, borderTop: '1px solid var(--border-subtle-01)' }} />
    <div style={{ position: 'absolute', top: 0, bottom: 24, left: 48, borderRight: '1px solid var(--border-subtle-01)' }} />
  </div>
) : <LineChart data={data} options={chartOptions} />}
```

**Inline value refresh**

```tsx
<span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--spacing-02)' }}>
  <span style={{ fontFamily: 'var(--font-mono)' }}>{price ?? '—'}</span>
  {isRefreshing && <Loading small description="Refreshing price…" />}
</span>
```

---

### 14.4 — Timeout & Error States

Never leave a skeleton showing indefinitely. Apply a timeout and transition to an error state:

```tsx
const SKELETON_TIMEOUT_MS = 5000;

useEffect(() => {
  if (!isLoading) return;
  const t = setTimeout(() => setTimedOut(true), SKELETON_TIMEOUT_MS);
  return () => clearTimeout(t);
}, [isLoading]);

// Render priority: error > timeout > skeleton > content
if (error || timedOut) return (
  <InlineNotification
    kind="error"
    title={error ? 'Failed to load data' : 'Request timed out'}
    subtitle={error?.message ?? 'The server is taking too long to respond.'}
    actions={<Button kind="ghost" onClick={retry}>Retry</Button>}
  />
);
if (isLoading) return <SkeletonKPITile />;
return <KPITile data={data} />;
```

---

### 14.5 — Optimistic UI (Mutations)

For low-latency actions (order cancellation, status change), apply the result immediately and roll back on error rather than showing a loading state:

```tsx
const cancelOrder = async (orderId: string) => {
  const snapshot = orders;
  setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status: 'Cancelled' } : o));
  try {
    await api.cancelOrder(orderId);
  } catch (err) {
    setOrders(snapshot);
    showToast({ kind: 'error', title: 'Cancel failed', subtitle: err.message });
  }
};
```

---

### 14.6 — Loading State Accessibility

```tsx
// aria-busy on the container
<div aria-busy={isLoading} aria-live="polite" aria-label="Order blotter">
  {isLoading ? <SkeletonTable /> : <DataTable rows={rows} headers={headers} />}
</div>

// Spinner must always have a description
<Loading description="Loading portfolio positions…" />
<Loading small description="Refreshing price…" />

// Announce when loading completes
const [announcement, setAnnouncement] = useState('');
useEffect(() => {
  if (!isLoading && data) setAnnouncement(`${data.length} orders loaded.`);
}, [isLoading, data]);
<span role="status" aria-live="polite" className="sr-only">{announcement}</span>
```

---

## 15 — DEPENDENCY VERSIONS

### 15.1 — Runtime Dependencies

| Dependency | Version | Licence | Notes |
|---|---|---|---|
| `react` + `react-dom` | 18.x | MIT | Concurrent mode, `useTransition` for deferred state |
| `typescript` | 5.x | Apache-2.0 | Enable `strict: true` in `tsconfig.json` |
| `window.UniteDesignSystem_429d79` | Bundled (internal) | Proprietary | Import all Unite components from this global; do not install via npm |
| `@carbon/charts-react` | Latest stable | Apache-2.0 | Peer dep: D3 v7 — install separately |
| `d3` | 7.x | ISC | Required peer for Carbon Charts; do not import directly unless building custom charts |
| `ag-grid-community` + `ag-grid-react` | 33.x | MIT | Free tier; sufficient for most blotter/grid use cases |
| `ag-grid-enterprise` | 33.x | Commercial | Required for: row grouping, pivoting, server-side row model, Excel export, range selection |
| `echarts` | 6.x (6.1+) | Apache-2.0 | Use tree-shaken import from `echarts/core` in production |
| `react-window` | 1.x | MIT | Virtual scrolling for non-AG-Grid lists > 200 rows |
| `@ibm/plex` | Latest | OFL-1.1 | IBM Plex Sans + Mono font files; alternative to CDN |

### 15.2 — Development Dependencies

| Dependency | Version | Purpose |
|---|---|---|
| `vite` | 5.x | Build tool; preferred over CRA |
| `@vitejs/plugin-react` | Latest | React fast refresh |
| `eslint` + `@typescript-eslint` | Latest | Linting; use `@typescript-eslint/recommended` ruleset |
| `prettier` | 3.x | Formatting; format on save |
| `vitest` | Latest | Unit testing; compatible with Vite |
| `@testing-library/react` | Latest | Component testing |
| `@testing-library/user-event` | Latest | Realistic user interaction simulation |
| `axe-core` / `jest-axe` | Latest | Automated accessibility testing |
| `msw` (Mock Service Worker) | 2.x | Mock WebSocket and REST feeds in tests and Storybook |

### 15.3 — Import Patterns

**Unite Design System:**
```tsx
// All Unite components come from the global bundle — never from npm
const {
  Button, DataTable, Modal, InlineNotification,
  Tag, Tile, Loading, ProgressBar,
  Tabs, ContentSwitcher, Pagination,
  TextInput, Dropdown, NumberInput,
} = window.UniteDesignSystem_429d79;
```

**Carbon Charts:**
```tsx
import { LineChart, BarChartSimple, DonutChart, SparklineChart } from '@carbon/charts-react';
import '@carbon/charts/styles.css';
```

**AG Grid (community — tree-shaken):**
```tsx
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
// Do NOT import ag-theme CSS — use Unite CSS variable overrides instead (see §03)
```

**AG Grid (enterprise — additional modules):**
```tsx
import { LicenseManager } from 'ag-grid-enterprise';
LicenseManager.setLicenseKey(process.env.AG_GRID_LICENSE_KEY!);
import { RowGroupingModule, ExcelExportModule } from 'ag-grid-enterprise';
import { ModuleRegistry } from 'ag-grid-community';
ModuleRegistry.registerModules([RowGroupingModule, ExcelExportModule]);
```

**ECharts (tree-shaken — required for production builds):**
```tsx
import * as echarts from 'echarts/core';
import { CandlestickChart, HeatmapChart, LineChart, BarChart } from 'echarts/charts';
import { GridComponent, TooltipComponent, VisualMapComponent, DataZoomComponent, LegendComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([
  CandlestickChart, HeatmapChart, LineChart, BarChart,
  GridComponent, TooltipComponent, VisualMapComponent, DataZoomComponent, LegendComponent,
  CanvasRenderer,
]);
```

**IBM Plex fonts (CDN — use in standalone HTML prototypes):**
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
```

### 15.4 — TypeScript Configuration

Minimum `tsconfig.json` settings for Unite components:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "jsx": "react-jsx",
    "baseUrl": ".",
    "paths": { "@/*": ["src/*"] }
  }
}
```

`noUncheckedIndexedAccess: true` is important for financial data — it forces null checks on array and object index access, catching undefined price/quantity values at compile time.

### 15.5 — Version Pinning

- Pin `ag-grid-community` and `ag-grid-enterprise` to the **same exact version**. Minor version mismatches cause runtime errors.
- Pin `@carbon/charts-react` and `d3` together — Carbon Charts is sensitive to D3 major versions.
- `window.UniteDesignSystem_429d79` is a versioned global; do not attempt to `npm install` it.
- Use `package-lock.json` or `pnpm-lock.yaml` — never `npm install --legacy-peer-deps` in production.

---

*Unite Design Intelligence OS — Context File v2.8 — July 2026*

---

*© 2026 Stuart Eastwood / Unite. All rights reserved.*
