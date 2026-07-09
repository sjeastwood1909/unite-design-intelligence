# Unite UX Principles

**Version:** 1.2  
**Owner:** Stuart  
**Last updated:** June 2026  
**Load alongside:** `unite-intelligence-context.md` for every session

---

## Purpose

This file captures the UX reasoning layer of the Unite Design Intelligence OS. It does not duplicate design tokens, components, or patterns — those live in `unite-intelligence-context.md` and `unite-reference-patterns.md`. This file answers a different question: **when two design approaches are both technically valid, which one is right for Unite, and why?**

Load this file at the start of every design or generation session. It is the thinking behind the making.

---

## 01 — UX Philosophy

Six principles govern every Unite design decision. When in conflict, the order below is the tiebreaker.

---

**1. Time is the primary UX dimension.**

Every Unite interface exists in the context of market hours, countdowns, deadlines, and latency. Design is not neutral to time. A Risk Officer's interface at 07:58 (two minutes before desks open) has different requirements than the same interface at 14:30 on a quiet afternoon. A Trader's RFQ queue at 30 seconds remaining is not the same surface as a Portfolio Manager's attribution review. Time-sensitivity must shape layout, information priority, and interaction model — not just be a data field in a table.

*Implication for generation:* always consider the time context of the workflow. Fast-moving, time-constrained flows get fewer panels, larger data, fewer clicks. Analytical, reflective flows allow more depth and progressive disclosure.

---

**2. The user's attention is the scarcest resource.**

Capital markets professionals monitor multiple systems simultaneously. They do not read interfaces — they scan them. Every element added to a view competes for attention that has a finite daily budget. Irrelevant information is not neutral; it is a tax on the user's ability to find what matters.

*Implication for generation:* default to showing less, not more. If a data point does not drive a decision within this workflow, it does not belong in the primary view. Availability via drill-down is not the same as cluttering the primary surface.

---

**3. Exceptions must surface themselves.**

No Unite user should have to hunt for a problem. Breaches, fails, mismatches, and anomalies must come to the user — sorted by severity, with enough context to act immediately. The default sort order of any queue is always urgency, not time of entry or alphabetical order.

*Implication for generation:* exception queues sort by urgency score by default. Breaches always produce an `InlineNotification kind="error"`. Warnings produce `kind="warning"`. Informational status never interrupts — it lives in a passive panel the user can check when they choose.

---

**4. Data communicates direction, not just state.**

A number without direction is incomplete. £1.2m of VaR is meaningless without knowing whether the limit is £1.5m (fine) or £1.1m (breach). P&L of +£45,000 is meaningless without knowing whether that is above or below yesterday, above or below the month's trend, or above or below the benchmark. Every primary metric must carry a directional indicator — a delta, a percentage change, a limit bar, a benchmark comparison.

*Implication for generation:* never render a standalone number in a KPI tile. Always pair it with context: vs yesterday, vs limit, vs benchmark, vs target. If the context is unavailable, show a stale indicator, not a bare number.

---

**5. Trust is built through precision.**

A wrong number is worse than no number. A stale price displayed as current is worse than a stale indicator. Capital markets users will catch errors immediately — and a single incorrect value in a Unite interface destroys the credibility of every other value on the screen.

*Implication for generation:* always use the correct decimal precision for the asset class (see §13 of `unite-intelligence-context.md`). Always surface data staleness explicitly. Never render `null`, `undefined`, or `NaN` — use `—` (em dash). Never invent or approximate data; use realistic canonical sample data.

---

**6. The interface should recede when the user is acting.**

When a user is executing — submitting an order, resolving an exception, responding to an RFQ — the interface should focus entirely on that task and remove everything else from the interaction surface. Modals, drawers, and focused workflows exist precisely to narrow the user's world to the decision at hand. The richness of the surrounding workspace is a distraction during execution.

*Implication for generation:* execution flows use `<Modal>` or detail drawers — never inline expansion that keeps the full workspace visible. The modal is not a compromise; it is the correct choice for high-stakes, single-task interactions.

---

## 02 — Information Hierarchy

### The four levels of information

Unite interfaces organise information across four distinct levels. Each level has a defined purpose and interaction pattern. Do not skip levels or collapse them.

| Level | Purpose | Pattern | Interaction |
|---|---|---|---|
| **L1 — Status** | Is everything OK? What needs attention now? | KPI tiles, exception count, breach indicators | Passive scan — no click required |
| **L2 — Context** | What is happening and why? | Summary panels, attribution charts, position grids | Click to expand or filter |
| **L3 — Detail** | What are the specifics of this item? | Selected row detail, exception card, order record | Click a row / item to populate |
| **L4 — Action** | What do I need to do about it? | Modal, drawer, order ticket, resolution workflow | Explicit trigger — button or keyboard shortcut |

A well-designed Unite interface makes L1 immediately visible without any interaction. L2 is the primary working surface. L3 appears on selection. L4 is triggered by the user, never auto-opened.

---

### Data density rules

| Situation | Density level | Rationale |
|---|---|---|
| Trader / Sales Trader workspace | Maximum — 12px type, compact rows, minimal whitespace | Latency-sensitive; more data = fewer context switches |
| Portfolio Manager overview | High — 14px type, standard row height, moderate whitespace | Decision-making context; needs breathing room between KPIs |
| Research Analyst coverage monitor | High — 14px body, compact table rows | Scan-oriented; many names, minimal depth per row |
| Risk Officer exception queue | Medium-high — readable at a glance under stress | Clarity under pressure matters more than density |
| Operations exception queue | Medium — 14px, comfortable row height | Sustained focus over 8 hours; reduce eye strain |
| Investment Banker pipeline | Medium — spacious rows, deal names readable at a glance | Occasional use; clarity over density |

**Rule:** match density to the frequency of use and time pressure of the role. High-frequency, time-pressured roles tolerate and benefit from higher density. Lower-frequency, analytical roles benefit from more space.

---

### When to abbreviate vs show full precision

| Context | Show | Hide behind tooltip |
|---|---|---|
| KPI tile headline value | Abbreviated (£1.3m, £42.5m, £1.8bn) | Full precision |
| Table / blotter cell | Full precision per asset class convention | — |
| Chart axis label | Abbreviated | Full on tooltip hover |
| Alert / notification | Full precision — ambiguity in a breach is unacceptable | — |
| Column header | Never abbreviate column headers | — |

**Rule:** abbreviate for visual scanning; show full precision for decision-making. When a user is about to act on a number, they must see the exact value.

---

## 03 — Interaction Patterns

### Panel relationships and context flow

Unite workspaces are multi-panel surfaces where panels are not independent — they share context. When a user selects an item in one panel, the other panels update to reflect that selection. This is the core interaction model.

**Master → detail:** clicking a row in the primary grid (blotter, exception queue, deal pipeline) populates the detail panel on the right. The primary grid never navigates away — the detail panel updates in place.

**Filter → narrow:** selecting a filter in the left panel narrows the centre panel. The left panel is always the scope selector; the centre panel is always the primary data surface.

**Drill-down:** clicking a chart data point, a KPI tile, or a summary metric opens a drill-down within the centre or right panel. The breadcrumb updates. The back navigation returns to the previous level, not to a different page.

**Context sharing (FDC3):** when a user selects an instrument in any panel, that instrument context is broadcast to all other panels in the workspace. The chart updates to show that instrument. The detail panel shows that instrument's data. The order ticket pre-populates with that instrument. The user never has to type the same instrument name twice.

---

### Click behaviours — explicit rules

| User action | Correct behaviour | Wrong behaviour |
|---|---|---|
| Click a blotter/queue row | Populates right detail panel — no navigation | Opens a new page or route |
| Click a KPI tile | Expands to drill-down view in centre panel | Opens a modal |
| Click a chart data point | Shows tooltip on hover; click triggers drill-down | Navigates to a new page |
| Click a column header | Sorts the column | Nothing (every sortable column must respond) |
| Right-click a row | Opens context menu with row-specific actions | Opens a generic menu |
| Double-click a row | Opens the item in a detail drawer (slide-over) | Same as single click |
| Click outside a modal | Does NOT close the modal (user may have filled a form) | Closes and discards the form |
| Press Escape | Closes modal, drawer, dropdown, or tooltip | — |

---

### State transitions

Every interactive element must have four defined states: **default, hover, active/selected, disabled.** Generate all four — never omit disabled states. A disabled state that looks identical to a default state is a design error.

For data rows in AG Grid:
- **Default:** `var(--background)` / `var(--layer-01)` alternating
- **Hover:** `var(--layer-hover-01)`
- **Selected:** `var(--layer-selected-01)` with left border `var(--interactive)`
- **Flashing (price update):** `price-flash-up` or `price-flash-down` class (400ms, then returns to default)

---

## 04 — Notification and Alert Hierarchy

Interruptions cost attention. Every notification must justify its interruption cost. Use this hierarchy strictly — escalating or conflating levels is a common source of alert fatigue.

| Level | Pattern | When to use | Behaviour |
|---|---|---|---|
| **Critical — breach** | `<InlineNotification kind="error">` + `role="alert"` + `aria-live="assertive"` | VaR limit breached, settlement fail imminent, feed disconnected, margin call threshold crossed | Interrupts immediately. Always visible. Cannot be dismissed without action. |
| **Warning — approaching** | `<InlineNotification kind="warning">` + `aria-live="polite"` | 80% of limit reached, stale data, reconnecting feed, cutoff approaching | Surfaced in the exception queue or a dedicated alert panel. Does not interrupt active work. |
| **Informational — status** | `<Tag>` status indicator or passive panel tile | Order filled, affirmation received, compliance check passed, feed reconnected | Passive — user sees it when they look at that area. Never `aria-live="assertive"`. |
| **Success — confirmation** | `<ToastNotification kind="success">` | Order submitted, exception resolved, note published, margin call resolved | Transient — auto-dismisses after 5 seconds. Bottom-right position. Does not block the workspace. |

**Never use `assertive` live regions for anything other than a breach, failure, or critical disconnection.** Using assertive for routine updates trains users to ignore critical alerts.

**Toast notifications are for confirmations of actions the user just took** — not for system events. A margin call being issued by another team member is not a toast; it is an exception queue item.

---

## 05 — UI Copy Standards

### Labels and column headers

- Always sentence case. Never title case. Column headers: "Settlement date" not "Settlement Date".
- Never abbreviate column headers. Cells can abbreviate; headers must be unambiguous.
- Use the user's language, not the system's. "Position size" not "notional_quantity_usd". "Settlement date" not "value_dt".
- Units go in the header, not the cell. "P&L (£)" in the header; "124,500" in the cell — not "£124,500" repeated in every row.
- Timestamps include timezone in the column header when all values are in the same timezone. If mixed timezones, include timezone in every cell value.

---

### Empty states

Every panel, table, and queue must have a designed empty state. Empty states are not an edge case — new users, filtered views, and quiet trading days all produce empty states.

**Structure of an empty state:** short heading (what is empty) + one sentence explaining why + one call to action (if applicable).

| Context | Heading | Body | CTA |
|---|---|---|---|
| Exception queue, no exceptions | "No exceptions" | "All trades are matched and on track for settlement." | — |
| Blotter, no orders | "No orders today" | "Orders submitted today will appear here." | "New order" |
| Coverage monitor, no moves | "Nothing moving" | "No coverage names have moved more than 2% overnight." | — |
| Search results, no match | "No results" | "No instruments match your search." | "Clear search" |
| Deal pipeline, empty | "No active mandates" | "Add your first deal to start tracking pipeline." | "Add deal" |

**Never use:** "No data available", "N/A", or a blank space. These are design failures.

---

### Error messages

Error messages must explain what went wrong and, wherever possible, what the user should do next. They are not system logs for developers.

| Pattern | Wrong ❌ | Correct ✓ |
|---|---|---|
| Feed disconnected | "WebSocket error: connection refused" | "Live feed disconnected. Prices are not updating. Reconnecting…" |
| Order rejected | "Error 4023: insufficient margin" | "Order rejected — insufficient margin for this position size. Reduce quantity or add margin." |
| Compliance fail | "PRE_TRADE_COMPLIANCE_FAIL" | "Compliance check failed: single-name concentration would exceed 5% mandate limit." |
| Loading timeout | "Request timeout" | "This is taking longer than expected. Try refreshing, or contact support if the problem continues." |
| Form validation | "Invalid input" | "Enter a valid quantity. Minimum order size is 1,000 shares." |

**Rule:** always include the specific constraint or value that caused the error. "Insufficient margin" is not an error message — "Position size of $5m exceeds available margin of $3.2m" is.

---

### Confirmation dialogs

Use confirmation dialogs only for **irreversible or high-consequence actions.** Do not use them for reversible actions — optimistic UI with an undo toast is better UX for low-stakes actions.

| Confirmation type | Primary button | Secondary button |
|---|---|---|
| Cancel an order | "Cancel order" (danger) | "Keep order" |
| Submit a large order (>$x notional) | "Submit order — $250m" (include size in button label) | "Review" |
| Issue a margin call | "Issue margin call — £1.2m" | "Cancel" |
| Resolve an exception | "Mark resolved" | "Keep open" |
| Publish a research note | "Publish to clients" | "Save draft" |

**Rule:** the primary button in a confirmation dialog must state the action, not just "OK" or "Confirm". "Cancel order" is unambiguous. "OK" is not.

---

### Tooltips

Tooltips exist to define jargon, expand abbreviations, and show full precision for abbreviated values. They are not for discoverability of features — if a feature needs a tooltip to explain that it is a button, the button needs a better label.

| Use tooltip for | Do not use tooltip for |
|---|---|
| Expanding an abbreviated value (£1.3m → £1,324,500.00) | Explaining what a button does (use a clear label) |
| Defining a financial term (VaR, RTPL, DV01, TCA) | Showing a feature discovery prompt |
| Showing full precision for a truncated field | Documenting an entire workflow |
| Showing the last-update timestamp for a data field | Long-form instructional content |

**Tooltip copy:** one sentence maximum. Definition first, example second if space allows. "Value at Risk — the maximum expected loss over one day at 95% confidence. Current: £1.8m."

---

## 06 — Progressive Disclosure Framework

Unite interfaces reveal information at three depths. Generate all three — not just the surface.

### Depth 0 — The scan layer (always visible, no interaction required)

What the user sees when they first open the workspace, before any click. Must answer: "Is anything wrong? What needs my attention right now?"

- KPI tiles with directional context (P&L with delta, VaR with limit bar, margin utilisation %)
- Exception count badges
- Breach / alert indicators
- Feed connection status

**Rule:** depth 0 must be comprehensible in under 3 seconds. If a user needs to read to understand the current state, depth 0 has failed.

---

### Depth 1 — The work layer (primary panel, selected state)

What the user sees after clicking into their primary task. Must answer: "What is the full picture of this item or queue?"

- Full blotter / exception queue with all relevant columns
- Attribution charts with breakdowns
- Position grids with P&L and limit data
- Deal pipeline with stage and size

**Rule:** depth 1 is the working environment. It is persistent throughout the session — users return to it between depth 2 actions.

---

### Depth 2 — The action layer (modal, drawer, or detail panel)

What the user sees when they are about to act on a specific item. Must answer: "Everything I need to make this specific decision or take this specific action."

- Order ticket (all fields to submit an order)
- Exception resolution workflow (fail reason, action buttons, audit trail)
- Margin call detail (call amount, collateral summary, client contact log)
- Escalation workflow (metric, limit, rationale, approver)

**Rule:** depth 2 always closes and returns the user to depth 1. It never navigates to a new surface. All data entered at depth 2 is either committed (on submit) or discarded (on cancel/Escape). No partial saves without explicit autosave indication.

---

## 07 — Environment Context

### Where Unite lives on a typical desk

Unite does not replace Bloomberg, Murex, or any primary system. It sits alongside them. Understanding this shapes every layout decision.

**Typical setup:**
- 3–6 monitors per desk. More for traders, fewer for bankers and analysts.
- Bloomberg Terminal occupies one dedicated screen — always.
- Internal risk system (MARS, Murex) may occupy a second screen.
- Unite occupies one primary screen — occasionally a second for extended workspaces.
- Voice (Bloomberg IB, Teams) runs in a separate window or device.

**Implication:** Unite must be self-sufficient for the workflows it is designed for. A user should not need to switch to Bloomberg to complete a task that Unite owns. But Unite should complement, not compete with, what Bloomberg does better. Market data depth-of-book, news terminals, and charting workstations are Bloomberg territory. Workflow orchestration, exception management, client intelligence, and integrated decision-making are Unite territory.

---

### Multi-monitor workspace conventions

When generating a full workspace, the primary Unite panel is designed for a **1440×900 minimum viewport at 100% scaling** — matching a common trading monitor configuration. The target is **1920×1080 or wider** for the default layout.

| Layout | Target screen | Minimum viable width |
|---|---|---|
| 3-panel trading workspace | Primary Unite screen | 1440px |
| 2-panel analytics workspace | Primary Unite screen | 1280px |
| Exception queue workspace | Primary Unite screen | 1280px |
| Detail drawer (slide-over) | Overlays primary screen | 480px width over any layout |

**Do not design for mobile.** Capital markets workflows require precision input (number entry, order tickets), data density, and multi-panel layouts that cannot function on a phone or tablet. If a mobile view is required, it is a notification-and-alert-only surface, not a full workspace.

---

### Latency expectations by role

The interface must reflect the latency expectations of the user's role. A trader expects tick-by-tick updates. An investment banker does not need live data at all for most workflows.

| Role | Data update expectation | UI implication |
|---|---|---|
| Trader / Sales Trader | Tick-by-tick (< 100ms render rate) | Price flash animations, AG Grid streaming, countdown timers |
| Portfolio Manager | Intraday (every 1–5 minutes) | Sparklines, refresh indicator, not streaming |
| Research Analyst | Near real-time for coverage monitor | 5-second poll sufficient — not tick-by-tick |
| Risk Officer | Intraday with immediate breach alerts | Limit breach alerts are immediate; VaR refresh every 5 minutes |
| Operations | Batch updates + intraday exceptions | Countdown timers for cutoffs; exception queue polling |
| Prime Broker | Intraday margin (every 5–15 minutes) | Margin utilisation bars update on poll; breach = immediate |
| Investment Banker | Daily or on-demand | No streaming required; manual refresh acceptable |

---

## 08 — Design Decision Framework

When two approaches are both valid, use this sequence to choose.

**Step 1: Which approach serves the most time-pressured version of this workflow?**
Design for the Monday morning open with a volatility spike, not the quiet Tuesday afternoon. If both approaches work under normal conditions, the one that works better under stress is correct.

**Step 2: Which approach requires fewer actions to complete the user's primary task?**
Count clicks and keystrokes from task start to task completion. The approach with fewer steps is correct, provided it does not sacrifice necessary context.

**Step 3: Which approach is more scannable without interaction?**
The approach that communicates more at depth 0 — before the user has clicked anything — is preferred. Surfaces that require interaction to reveal their state are always less preferable.

**Step 4: Which approach makes the error state more obvious?**
Design for failure, not the happy path. The approach where a problem is impossible to miss is always better than the approach where a problem can be overlooked.

**Step 5: Which approach is more consistent with existing validated patterns?**
If a validated pattern (from `unite-reference-patterns.md`) already solves this problem, use it. Do not invent a new pattern when a working one exists.

---

## 09 — Layout Selection Guide

| Workflow type | Layout | Primary panel | Key indicator |
|---|---|---|---|
| Live trading, order management, market making | Standard 3-panel trading workspace | Centre: live blotter (AG Grid) | Blotter is the primary surface |
| Portfolio monitoring, performance review | Standard 3-panel trading workspace | Centre: KPI tiles + charts | No blotter — position grid in centre instead |
| Research, analytics, attribution | 2-panel analytics workspace | Left: filter/list; Right: detail/chart | No blotter; no fixed right panel |
| Exception management (settlement, risk, margin) | Exception queue workspace | Left: queue (AG Grid); Right: detail + action | Queue is the primary surface |
| Single-task execution (order, escalation, resolution) | Modal over any workspace | n/a | Full focus; workspace recedes |
| Item detail without modal (extended review) | Detail drawer (slide-over, 480px) | Overlays right side of workspace | Does not navigate away |

**Rule:** if the primary task is reviewing a list and acting on items within it, use the exception queue layout. If the primary task is monitoring live data and placing orders, use the trading workspace. If the primary task is analysis and exploration, use the 2-panel analytics workspace.

---

## 10 — Anti-Patterns

These patterns appear reasonable but are wrong for Unite. Do not generate them.

---

**Alphabetical sort as default.** Exception queues, blotters, and pipelines sorted alphabetically are a usability failure. Default sort must always reflect urgency, recency, or risk — never name, ticker, or ID.

**Colour without a paired label.** Green text alone is not a status indicator — it is an accessibility violation (WCAG 1.4.1). Every status that uses colour must also have a text label, icon, or Tag. "Buy" in green text is wrong. `<Tag type="green">Buy</Tag>` is correct.

**Modal on modal.** Never open a second modal from within a modal. If a secondary decision is needed, use an inline section within the existing modal, or resolve the first modal before opening the second.

**Pagination for streaming data.** Blotters and live queues that use pagination break the real-time model — the user cannot see a new row appearing if it lands on page 3. Use AG Grid's virtualised infinite scroll for all streaming data tables.

**Empty notifications.** `<ToastNotification>` without a specific subtitle is incomplete. "Order submitted" is not sufficient. "Order submitted — 50,000 AAPL buy at market" tells the user what actually happened.

**Loading forever.** Skeleton states must have a timeout (5 seconds maximum) that transitions to an error state with a retry action. A skeleton that never resolves is worse than no loading state — it gives false hope and no exit.

**Hardcoded thresholds in copy.** Do not write "VaR limit of £1.5m" in a component. Write "VaR limit of {varLimit}" — thresholds are data, not static copy. This applies to all warning thresholds, concentration limits, and mandate constraints.

**Visible-only truncation.** If a value is truncated in a cell (e.g. long counterparty name), there must always be a tooltip on hover showing the full value. Truncation without a tooltip means the user has no way to see the complete information.

**Navigation that abandons the workspace.** Capital markets workflows are session-based. Every navigation event that takes the user away from their current workspace — blotter, open positions, live feed — has a cost. Prefer in-place expansion, drawers, and panels over routing to new pages. Reserve full navigation for genuinely different tools (switching from Trading to Risk mode), not for item detail.

**Auto-close on important dialogs.** Never auto-close a modal that contains form input or an active decision. Only auto-close `<ToastNotification>` — passive confirmations. Everything that contains user input, a decision, or an audit trail must require explicit user dismissal.

---

## 11 — Layout Personalisation

### The principle

The layouts in §09 are **intelligent defaults, not locked templates.** They encode best practice for each role and workflow — the layout a user should see if they haven't expressed a preference yet. But capital markets professionals have strong, idiosyncratic workspace habits built from years of muscle memory. Unite should accommodate them, not fight them.

*Implication for generation:* when generating a workspace, describe the default layout and note that all panels are user-adjustable. Never frame a layout as the only valid configuration for a role.

---

### What is customisable

Every dimension of the workspace layout is user-adjustable and persistently saved:

| Element | What the user can change |
|---|---|
| **Panel position** | Reorder left/centre/right panels; move the bottom blotter to a different position |
| **Panel size** | Resize any panel by dragging the divider — remembered per layout |
| **Panel visibility** | Show or hide any panel; collapse a panel to an icon rail to reclaim space |
| **AG Grid columns** | Reorder columns by drag-and-drop; show/hide columns; resize column widths |
| **AG Grid sort** | Default sort saved per table per user — overrides the system default sort |
| **AG Grid filters** | Saved filter sets (e.g. "my desk only", "today's exceptions") persist as named views |
| **Theme** | g10 or g100 — see §12 |

---

### Saved layouts

Users can save and name multiple layouts — for example, a Trader might have "Morning open" (full blotter focus), "Client call" (reduced density, larger chart), and "End of day" (P&L and reconciliation focus). Saved layouts are:

- Named by the user
- Persistent across sessions (not reset on refresh or logout)
- Switchable from a layout picker in the workspace toolbar
- Resettable to the system default at any time

**Default layout behaviour:** if no saved layout exists for a user, the system default for their role (from §09) loads. Once a user saves a layout, the last-used layout loads on subsequent sessions.

---

### AG Grid personalisation rules

AG Grid state — column order, widths, visibility, sort, filter — is part of the layout and saves with it. Specific rules:

- Column order changes are saved immediately (no explicit save action required)
- Default sort can be overridden per table; the user's sort preference persists
- Column visibility is per-table per-layout — not global
- **The system default sort (urgency, not alphabetical) is always the initial default.** Users can change it, but they must actively choose to do so. Never default to alphabetical.

---

## 12 — Theming (g10 and g100)

### The principle

Theme is not a cosmetic preference — it is an environment and workflow decision. The right theme depends on where the user works, who they are presenting to, and how long they will be looking at the screen. Unite supports both IBM Carbon themes. All generated interfaces must use semantic CSS variables only, so theme switching works without any redesign.

**Non-negotiable rule:** never hardcode hex colour values in generated HTML. Every colour must use a CSS variable (e.g. `var(--background)`, `var(--text-primary)`, `var(--interactive)`). This is what makes theming work at the root level with a single class swap.

---

### Default theme by role

| Role | Default theme | Reason |
|---|---|---|
| Trader / Sales Trader | **g100 dark** | Dense multi-monitor environment, long sessions under artificial light. Dark reduces eye strain and matches Bloomberg Terminal aesthetic. |
| Risk Officer | **g100 dark** | Sustained monitoring under artificial light; exception queues are easier to scan in dark mode. |
| Operations / Compliance | **g100 dark** | 8-hour sessions in a trading floor environment; dark reduces fatigue. |
| Prime Broker | **g100 dark** | Same environment as sell-side operations and trading. |
| Portfolio Manager | **g10 light** | Often works in brighter office environments; regularly shares screen in client and investment committee meetings. |
| Research Analyst | **g10 light** | Produces output for distribution — notes, models, charts. Light theme renders clearly on projectors and in printed exports. |
| Investment Banker | **g10 light** | Client-facing work in well-lit meeting rooms; pitch books and dashboards are frequently presented externally on projectors. |

---

### User override

Default theme is a starting point. Every user can switch to the other theme at any time via the workspace settings. The choice is persistent — it saves with the user's profile, not the layout, so it applies across all saved layouts. A trader who prefers light mode should be able to use it.

---

### Theme in generated HTML

When generating a workspace prototype, apply the theme at the root level using the IBM Carbon theme class:

```html
<!-- g100 dark theme -->
<body class="cds--g100">

<!-- g10 light theme -->
<body class="cds--g10">
```

All component colours, backgrounds, borders, and text will adapt automatically if semantic tokens are used throughout. Do not add separate dark/light CSS rules — let the Carbon theme class do the work.

**When a generation prompt does not specify a theme:** use the role default from the table above. If the role is also not specified, default to g100.

---

### Theme and data visualisation

Charts (Carbon Charts, ECharts) must also respect the active theme. Specific rules:

- Chart background: `var(--background)` — never a hardcoded dark or light colour
- Chart text and axis labels: `var(--text-primary)`
- Chart gridlines: `var(--border-subtle-01)`
- Data series colours: use the Carbon data visualisation palette tokens, not hardcoded hex values
- Positive P&L / up direction: `var(--support-success)` (green in both themes)
- Negative P&L / down direction: `var(--support-error)` (red in both themes)
- Warning threshold: `var(--support-warning)` (yellow/amber in both themes)

---

## 13 — Keyboard Navigation and Power User Shortcuts

### The principle

Capital markets professionals operate under time pressure with both hands active — one on the keyboard, one on the mouse, often simultaneously. Every primary workflow in Unite must be completable by keyboard alone. Keyboard navigation is not an accessibility add-on; it is the primary interaction mode for traders and operations analysts.

---

### Focus management rules

- Every interactive element — buttons, dropdowns, table rows, modal actions — must be reachable by Tab
- Tab order follows visual hierarchy: left panel → centre panel → right panel, top to bottom within each
- When a modal opens, focus moves immediately to the first interactive element inside it
- When a modal closes, focus returns to the element that triggered it — never drops to the top of the page
- AG Grid rows receive focus as a unit; arrow keys then navigate within the focused row
- Keyboard focus must always be visible — never suppress the focus ring (`outline: none` without a replacement is a design error)

---

### Standard keyboard shortcuts

Unite follows a consistent shortcut model across all workspaces. Generate these as working keyboard handlers in HTML prototypes.

| Shortcut | Action | Context |
|---|---|---|
| `N` | New order / new item | When focus is in the main workspace (not a form) |
| `Escape` | Close modal, drawer, dropdown, or tooltip | Any |
| `Enter` | Confirm / submit the focused action | When a modal or confirmation is active |
| `Space` | Select / deselect a focused row | AG Grid |
| `↑ ↓` | Navigate rows | AG Grid |
| `← →` | Navigate columns within a row | AG Grid (when cell navigation is enabled) |
| `Tab` | Move focus to next interactive element | Any |
| `Shift+Tab` | Move focus to previous interactive element | Any |
| `Ctrl+F` / `Cmd+F` | Open search / filter | Any panel with search |
| `Ctrl+Enter` / `Cmd+Enter` | Submit form (alternative to clicking Submit button) | Any form or order ticket |
| `E` | Escalate selected exception | Exception queue — when a row is selected |
| `R` | Mark selected exception as resolved | Exception queue — when a row is selected |
| `F5` | Manual refresh of current panel data | Any panel |

**Shortcut discoverability:** show available shortcuts in a tooltip on the relevant button (e.g. the New Order button tooltip reads "New order (N)"). Provide a keyboard shortcut reference accessible from the workspace settings or via `?`.

**Shortcut conflicts:** Unite shortcuts must not conflict with OS defaults (Ctrl+C, Ctrl+V, Ctrl+Z, Cmd+Q etc.) or browser defaults. Single-letter shortcuts only activate when focus is not inside a text input or form field.

---

### AG Grid keyboard behaviour

AG Grid has a rich keyboard model — always enable it:

- `↑ ↓` navigate rows; the selected row updates the detail panel in real time
- `Enter` on a selected row opens the detail drawer (same as double-click)
- `Space` toggles row selection without opening the detail
- Column headers are focusable and respond to `Enter` to sort, `Space` to toggle sort direction
- When the grid has focus, `Ctrl+A` / `Cmd+A` selects all visible rows (where multi-select is enabled)

---

## 14 — Data Staleness Standards

### The principle

Stale data displayed as current is a trust violation. In a live trading environment, a price or risk metric that is 2 minutes old can represent a materially different market than the current one. Unite must always communicate data freshness clearly — users should never have to wonder whether what they are looking at is current.

---

### Staleness thresholds by data type

| Data type | Goes stale after | Examples |
|---|---|---|
| Live market prices (streaming) | 30 seconds without update | FX spot rates, equity prices, live bond prices |
| Intraday risk metrics | 5 minutes | VaR, Greeks, margin utilisation |
| Settlement and operations data | 60 minutes | Exception queue, affirmation status |
| P&L attribution | 5 minutes (intraday); next day (end-of-day batch) | Desk P&L, attribution breakdown |
| End-of-day batch data | Next business day's batch run | VaR history, FRTB backtesting record |
| Reference / static data | 24 hours | Counterparty details, instrument master data |

---

### Visual treatment for stale data

**Stale individual cell (price field):**
- Value renders in `var(--text-secondary)` instead of `var(--text-primary)`
- Clock icon (`⏱`) alongside the value
- Tooltip on hover: "Last updated: 14:32:07 — feed may be delayed"

**Stale panel (entire panel's data source is delayed):**
- `<InlineNotification kind="warning">` at the top of the panel
- Copy: "Prices last updated at 14:32. Data may not reflect current market conditions."
- Include a manual refresh button in the notification

**Disconnected feed (complete loss):**
- `<InlineNotification kind="error">` at the top of affected panels
- All price/metric values retain their last known value but render in `var(--text-secondary)`
- Em dash `—` only for values that were never loaded — never for values that were previously loaded and are now stale

---

### Timestamp display rules

- Always show an absolute timestamp, not a relative one. "Last updated: 14:32:07" not "2 minutes ago" — relative timestamps become ambiguous in a time-critical environment where 2 minutes is significant
- Timestamps always include seconds for live data; minutes only for batch data
- Timezone: show the user's local timezone by default; include the suffix (GMT, EST, JST) so there is no ambiguity when cross-border teams are involved
- The workspace header should include a persistent "as of" timestamp showing when the primary data source was last refreshed

---

### What never to do

- Never silently show stale data as if it were current
- Never hide the last-updated timestamp to make the interface look cleaner
- Never use `—` for a value that was previously loaded — use the last known value with a stale indicator instead
- Never remove a stale cell's value entirely — an empty cell looks like missing data, not stale data

---

## 15 — Feed Resilience and Graceful Degradation

### The principle

Live data feeds disconnect. APIs time out. Backend services go down for maintenance. In a capital markets environment, these events happen during market hours and cannot result in the interface becoming unusable. Unite must degrade gracefully — remaining as functional as possible, being explicit about what is and is not current, and recovering automatically without requiring a page reload.

---

### Three failure modes and UI behaviour

**Mode 1 — Partial feed loss** (one data source disconnects, others continue)

- Affected panels: show stale indicator per §14, continue displaying last known values
- Unaffected panels: continue normally — do not show a global error that implies everything is broken
- Order entry: remains available with an explicit inline warning: "Live prices unavailable for [instrument]. Confirm you want to proceed."
- The feed status indicator in the workspace header shows amber for the affected source

**Mode 2 — Complete market data loss** (all price feeds disconnect)

- All price cells freeze at last known values with stale indicators
- VaR, Greeks, and risk metrics show last calculated values with "as of" timestamps
- Exception queues and workflow panels remain fully functional — they do not depend on live prices
- Order ticket: disabled submit button with message "Live prices unavailable — orders cannot be placed until feed is restored"
- The feed status indicator shows red
- `<InlineNotification kind="error">` in the workspace header: "Market data feed disconnected. Attempting to reconnect…"

**Mode 3 — Backend / API failure** (the Unite service itself is unresponsive)

- Skeleton states replace panels that cannot load — never blank panels, never unhandled errors
- Each panel shows a retry button: "Unable to load data. Retry"
- Panels that successfully loaded before the failure retain their last state — do not wipe them on error
- Error message is specific: "Unable to connect to [service name]. Contact support if this continues." — not a generic "Something went wrong"

---

### What remains functional during feed loss

| Feature | Partial loss | Complete data loss | Backend failure |
|---|---|---|---|
| Panel navigation | ✓ Always | ✓ Always | ✓ Always |
| Viewing loaded data | ✓ | ✓ | ✓ (pre-failure data) |
| Exception resolution workflows | ✓ | ✓ | ✗ (depends on API) |
| Historical records and audit trails | ✓ | ✓ | ✗ (depends on API) |
| Order entry | ✓ with warning | ✗ disabled | ✗ disabled |
| New searches / filters | ✓ | ✗ | ✗ |

---

### Reconnection behaviour

- Automatic reconnection attempt every 30 seconds — no user action required
- Show reconnection attempt status: "Reconnecting… (attempt 2 of 5)"
- On successful reconnection: data refreshes in place — do not reload the page or reset the workspace state
- Stale indicators clear automatically when live data resumes
- `<ToastNotification kind="success">`: "Feed reconnected — prices updated as of [timestamp]"
- If reconnection fails after 5 attempts: escalate to `<InlineNotification kind="error">` with a "Contact support" link and a manual retry button

---

### Persistent feed status indicator

Every workspace must include a persistent feed status indicator in the header or toolbar — not just a one-time notification. This is always visible regardless of what panel is in focus.

| State | Indicator |
|---|---|
| Connected | Green dot + "Live" label |
| Degraded / partial | Amber dot + "Partial" label — click to see which feeds are affected |
| Disconnected | Red dot + "Offline" label — click to see reconnection status |
| Reconnecting | Pulsing amber dot + "Reconnecting…" label |

---

## 16 — Search and Filter Conventions

### The principle

Every Unite data surface — blotters, exception queues, position grids, deal pipelines — requires filtering. Without a consistent approach, each generated workspace invents its own pattern, leading to a fragmented experience where users have to re-learn filtering for every panel. This section defines the standard.

---

### Two types of filtering

**Scope filters (left panel or workspace toolbar):**
Narrow the entire workspace to a meaningful subset — by desk, asset class, currency, status, or date range. Scope filters affect all panels simultaneously. They are persistent within the session and save with the layout.

*When to use:* when the filter changes the fundamental context of the workspace (e.g. switching from "all desks" to "Rates desk only" changes what every panel shows).

**Table filters (inline, per-panel):**
Narrow a specific AG Grid table without affecting other panels. Used for searching within a result set already scoped by the workspace filter.

*When to use:* when the user wants to find a specific item within the currently visible data set.

---

### Filter control patterns by data type

| Data to filter | Control | Example |
|---|---|---|
| Single value from a fixed list | `<Dropdown>` | Status: Unresolved / In Progress / Resolved / Escalated |
| Multiple values from a fixed list | Multi-select `<Dropdown>` with active chips shown above the table | Desks: Rates, FX, Credit |
| Date (single) | Carbon `<DatePickerInput>` | Settlement date: 30 Jun 2026 |
| Date range | Carbon `<DatePickerInput range>` with presets | Period: Today / This week / MTD / YTD / Custom |
| Numeric range | Text input with operator selector (`>`, `<`, `between`) | Value: > £1,000,000 |
| Free text search | `<Search>` component — debounced 300ms, minimum 2 characters | Counterparty name, instrument name |

---

### Instrument and counterparty search

Instrument search must support all common identifier types simultaneously — the user should not need to know or specify which type they are entering:

- Ticker (AAPL, VOD.L, EUR/USD)
- ISIN (GB0002634946)
- CUSIP (037833100)
- Common name ("Apple", "Vodafone", "Euro Dollar")

Search fires after 2 characters with 300ms debounce. Results appear inline in a dropdown — maximum 10 results before "Show all results." Never navigate to a new page for search results.

Counterparty search supports name or BIC/LEI. Same debounce and inline results pattern.

---

### Active filter visibility

When any filter is active, it must be visible at all times — users must never be looking at filtered data without knowing it:

- Active filters display as chips above the table they affect: `[Desk: Rates ×]` `[Status: Unresolved ×]`
- Each chip has an `×` to remove that individual filter
- A "Clear all" link appears when more than one filter is active
- A filter count badge appears on the filter icon button when the filter panel is collapsed: `⚡ 3`
- If a scope filter is active, the workspace header shows a persistent indicator: "Filtered: Rates desk"

---

### Saved filter sets

Users can save a named combination of filters for quick reapplication:

- Save button in the filter panel: "Save as…" → user names the filter set
- Saved sets appear in a dropdown on the filter icon button
- A default filter set can be designated — this loads automatically when the workspace opens
- Saved filter sets persist permanently (not just for the session)
- Delete option available per saved set

**Examples of typical saved filter sets:**
- "My desk — today's exceptions" (Trader)
- "Settlement fails — high value" (Operations)
- "Amber limits — FX desk" (Risk Officer)
- "Live deals — ECM" (Investment Banker)

---

### Filter persistence rules

| Filter type | Persistence |
|---|---|
| Scope filters | Session — reset on workspace close unless saved as part of a named layout |
| Table filters | Saved with the layout if the user saves a layout while filters are active |
| Saved filter sets | Permanent — until the user deletes them |
| Default filter set | Loads automatically on workspace open |
| AG Grid column sort | Saved with the layout — see §11 |

---

## How to use this file in generation

Load this file at the start of every session alongside `unite-intelligence-context.md`. When generating:

1. **Before choosing a layout:** refer to §09 — Layout Selection Guide (these are defaults, not mandates — see §11)
2. **Before deciding what to show at each level:** refer to §06 — Progressive Disclosure Framework
3. **Before writing any UI copy:** refer to §05 — UI Copy Standards
4. **Before choosing between two valid approaches:** refer to §08 — Design Decision Framework
5. **Before adding any notification or alert:** refer to §04 — Notification and Alert Hierarchy
6. **Before applying a theme:** refer to §12 — if the prompt doesn't specify, use the role default from the theme table
7. **Before adding any data field:** refer to §14 — every live data field needs a staleness threshold and visual treatment
8. **Before adding search or filtering:** refer to §16 — use the standard control patterns, not ad hoc implementations
9. **When generating interactive HTML:** refer to §13 — implement the standard keyboard shortcuts and focus management rules
10. **When generating a workspace with live data:** refer to §15 — include a feed status indicator and design the disconnected state
11. **If an approach feels right but something is off:** check §10 — Anti-Patterns
12. **If designing a full workspace:** note that all layout dimensions are user-customisable per §11 — describe defaults, not fixed configurations

This file does not override the component and token rules in `unite-intelligence-context.md`. It operates alongside them as the reasoning layer.

---

*Unite UX Principles v1.2 — June 2026*

---

*© 2026 Stuart Eastwood / Unite. All rights reserved.*
