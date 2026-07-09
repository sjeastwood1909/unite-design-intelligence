# Unite Design Intelligence OS — Intelligence Context File
**Version:** 2.0  **Owner:** Stuart  **Organisation:** Unite  
**Purpose:** Reusable context block for Claude sessions. Attach to every generation request so Claude inherits the full Unite design system, domain knowledge, and output conventions without re-explanation.

---

## HOW TO USE THIS FILE

Paste or attach this file at the start of any Claude / Claude Design session. It replaces the need to explain the design system, tokens, or domain context each time.

For persistent sessions, upload it as **Project Knowledge** in a Claude Project named "Unite Design Intelligence" — every conversation in that project will automatically inherit this context.

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
```tsx
<DataTable
  title="Order Blotter"
  headers={[
    { key: 'time', header: 'Time', sortable: true },
    { key: 'instrument', header: 'Instrument', sortable: true },
    { key: 'side', header: 'Side' },
    { key: 'quantity', header: 'Qty', sortable: true },
    { key: 'price', header: 'Price', sortable: true },
    { key: 'status', header: 'Status' },
    { key: 'actions', header: '' },
  ]}
  rows={orders.map(o => ({
    ...o,
    status: <Tag type={statusColour(o.status)}>{o.status}</Tag>,
    actions: <OverflowMenu items={rowActions(o)} />,
  }))}
  sortable selectable
  toolbar={<Search placeholder="Search orders..." size="sm" />}
/>
<Pagination totalItems={orders.length} pageSize={25} />
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

*Unite Design Intelligence OS — Context File v2.0 — June 2026*
