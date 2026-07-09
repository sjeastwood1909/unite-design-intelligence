# Design Brief: Fixed Income European Corporate Bond Trader Workspace

## Overview

Design a professional, dark-themed desktop trading workspace for a **European Corporate Bond Dealer/Trader** at a major investment bank or dealer-broker. The trader operates in the secondary market, responding to client RFQs (Requests for Quote) across electronic venues (MarketAxess, Tradeweb, Bloomberg TSOX) and voice channels, trading investment-grade and high-yield EUR/GBP/USD-denominated corporate bonds.

This workspace must feel **information-dense but scannable** — every pixel earns its place. Think Bloomberg Terminal meets modern fintech: dark, purposeful, real-time.

---

## Visual & UX Aesthetic

- **Theme**: Dark mode — near-black backgrounds (`#0D0F14` or similar), with dark navy panel borders
- **Accent palette**:
  - Done / Buy: Electric green (`#00C566`) or teal
  - Missed / Sell: Amber/orange (`#F5A623`)
  - Pending / Alert: Blue (`#2D7DD2`)
  - Rejected / Risk: Red (`#E8392B`)
  - Amend / Info: Purple or lavender
  - Neutral data: Light grey text on dark backgrounds
- **Typography**: Monospaced or tabular-numeric fonts for prices, yields, spreads (e.g. IBM Plex Mono or Roboto Mono). Clean sans-serif for labels
- **Data density**: Tables should be compact — 14px rows, tight padding. Financial data must align numerically
- **Status pills/chips**: Color-coded inline status labels (Done, Missed, Pending, Dealer Timeout, Customer Timeout, Amend, Process)
- **Iconography**: Minimal — use directional arrows for price movement, small buy/sell B/S badges, venue icons
- **Layout**: Modular tile/panel grid. Panels are resizable and reorderable. A workspace toolbar at the top allows saving layouts

---

## Workspace Layout

The workspace is divided into a **primary grid** with the following tile zones. Suggested default layout (adjustable):

```
┌──────────────────────────────────────────────────────────────────────────┐
│  HEADER BAR: Currency selector | Date | Venue filters | Search | Profile │
├──────────┬───────────────────────────────────────┬────────────────────────┤
│  KPI     │                                        │   NOTIFICATIONS        │
│  METRICS │       LIVE FLOW BLOTTER               │   + ALERTS             │
│  (left   │       (centre, dominant)               │   (right column)       │
│  column) │                                        │                        │
├──────────┤                                        ├────────────────────────┤
│  MARKET  │                                        │   CLIENT               │
│  ACTIVITY│                                        │   INTELLIGENCE         │
│          ├───────────────────────────────────────┤                        │
│          │       TRADE HISTORY BLOTTER            │                        │
├──────────┴───────────────────────────────────────┴────────────────────────┤
│     CHARTS (yield/spread/price)    │   INSTRUMENT INSIGHT                  │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## Tile Specifications

---

### 1. LIVE FLOW BLOTTER
**Purpose**: The trader's primary work surface — real-time stream of all incoming and live RFQs across all electronic and voice channels.

**Header**: Currency selector (CAD/EUR/GBP/USD) | Tabs: `Stream` | `Voice` | `Electronic` | Filter bar | Quick Search | Done count badge | Missed count badge

**Summary bar** (directly below header):
- Done: `68` | Cover: `0` | Missed: `34` | No. Buys: `29` | No. Sells: `39`
- Buy Vol: `222,550,000` | Sell Vol: `368,094,000`
- Hit Ratio Trade %: `66.67` | Hit Ratio Vol %: `72.28`
- DNQ Trade %: `9.33` | DNQ Vol %: `9.33` | RAP Trade %: `0.00` | RAP Vol %: `0.00`

**Table columns**:
| # | V/E | Venue | RBC State | Trading Book | RBC | Amount | Description | Series | Price | Yield | Spread | Client |
|---|-----|-------|-----------|--------------|-----|--------|-------------|--------|-------|-------|--------|--------|

- **#**: Row number
- **V/E**: Voice (V) or Electronic (E) — icon/tag
- **Venue**: MAXL (MarketAxess), MXUS, TWSWAP (Tradeweb Swap), VOIX, etc.
- **RBC State**: Color-coded pill — `Done` (green), `Missed` (amber), `Pending` (blue), `Dealer Timeout` (red-amber), `Customer Timeout` (red), `Amend` (purple), `Process` (teal), `Dealer Reject` (red)
- **Trading Book**: Internal book code (e.g. ECREIND, NCREIND1, XCMAETF, ECRECONS)
- **RBC**: Direction badge — `B` (Buy, blue/teal), `S` (Sell, orange), `I` (Internal, grey), `H` (Hedge, purple), `2W` (2-way)
- **Amount**: Notional face value (e.g. 10,000,000)
- **Description**: Bond identifier — Issuer + Coupon + Maturity (e.g. "JPM 2 3/4 08/24/22", "AAPL 3 1/4 04/03/23")
- **Series**: Bond series number
- **Price**: Clean price (decimal, e.g. 98.250)
- **Yield**: Yield to maturity (%)
- **Spread**: G-spread or ASW in bps (e.g. 83)
- **Client**: Counterparty name (truncated, e.g. "MARKETAXESS EUROPE LTD", "CAPEVIEW CAPITAL LLP", "UNION BCA-BLOCK")

**Interactions**:
- Click row → opens RFQ Detail panel (drawer or modal)
- Right-click → context menu: Price / Cover / Amend / Miss / DNQ
- Rows animate in from top when new RFQs arrive
- Highlight active/expiring RFQs with countdown timer pulse
- Rows 1,000 max; virtual scroll

---

### 2. RFQ DETAIL PANEL (Drawer/Modal — opens from Flow Blotter)
**Purpose**: Full detail view of a single RFQ trade when selected.

**Header**: `RFQ | ID 2538924` | Direction badge (`RFQ | BUY` in large green header) | Status badge (`DONE ✓`)
Top-right: `Inquiry 2023-05-07` | `Trade 2023-08-07`

**Navigation tabs**: Main | General | Product Details | Instrument Info | Reg Reporting | Pricing | History

**Main tab fields**:
- Direction | Counterparty | Security Description | Quantity | CCY | Quote Type | Price | Sales Code | Settle Date
- Sale Person | Contact Name | Venue | Trader | (blank) | Inquiry Date | Trade Date
- Comment (text field)

**Footer action buttons**: `Amend` | `Submit` | `Confirm` | `Missed` (greyed when done)

---

### 3. TRADE HISTORY BLOTTER
**Purpose**: Searchable, filterable record of all completed and attempted trades for the session and prior periods.

**Controls**: Date range picker | Currency | Venue | State | Book | Client | Direction filters | Export button

**Table columns**:
| Trade ID | Date/Time | V/E | Venue | Direction | Amount | ISIN | Description | Coupon | Maturity | Price | Yield | Spread | State | Client | Trader | Sales |
|----------|-----------|-----|-------|-----------|--------|------|-------------|--------|----------|-------|-------|--------|-------|--------|--------|-------|

- Sortable by any column
- Color-coded State column (same pills as Flow Blotter)
- Pagination + row count indicator ("Rows 1000")
- Click row → RFQ Detail panel

---

### 4. KPI METRICS
**Purpose**: At-a-glance performance summary for the session. Left-side column of donut charts + stat blocks.

**KPI Blocks** (each with circular progress gauge + key stats):

**ALL DONE/MISSED** — `2.8M` total volume
- DONE: `1,838,231` | Trades: `50`
- MISSED: `1,012,833` | Trades: `80`

**ALL ELECTRONIC/VOICE** — `2.8M`
- ELECTRONIC: `1,838,231` | Trades: `50`
- VOICE: `1,012,833` | Trades: `80`

**ALL BUY/SELL** — `2.8M`
- BUY: `1,838,231` | Trades: `50` (with dot indicator)
- SELL: `1,012,833` | Trades: `80` (with dot indicator)

**DONE** — `2.8M`
- BUY: `1,838,231` | Trades: `50`
- SELL: `1,012,833` | Trades: `80`

**MISSED** — `2.8M`
- BUY: `1,838,231` | Trades: `50`
- SELL: `1,012,833` | Trades: `80`

**Additional KPI Cards** (below gauges):
- **Hit Ratio (Trade %)**: `66.67%` — progress bar, session vs prior session delta
- **Hit Ratio (Volume %)**: `72.28%` — with trend sparkline
- **DNQ Rate**: `9.33%`
- **Avg Response Time**: `4.2s` — time from RFQ receipt to price submission
- **Active RFQs**: `12` — live count with pulse indicator
- **Top Venue**: `MAXL` — by volume done today

---

### 5. CHARTS
**Purpose**: Visual market intelligence — yields, spreads, price history for actively traded bonds and market benchmarks.

**Chart types available via tab/toggle**:

**a) Yield Curve** — EUR IG corporate bond yield curve overlay vs German Bund curve. Maturity buckets 1Y → 30Y. Interactive hover for individual points.

**b) Spread History** — Time-series chart of selected bond G-spread or ASW in bps. Default: last 30 days. Timeframe: 1D | 1W | 1M | 3M | 1Y. Shows bid/offer bands.

**c) Price History** — Candlestick chart for selected ISIN with volume bars below. OHLC data from trade prints and dealer axes. Overlays: SMA, VWAP.

**d) Sector Heatmap** — EUR IG credit heatmap by sector (Financials, Utilities, Industrials, TMT, Autos, Energy) × rating (AAA-BBB-), coloured by spread change on day (green = tighter, red = wider).

**e) Volume by Venue** — Stacked bar chart: electronic venue breakdown (MarketAxess, Tradeweb, Bloomberg, Bloomberg TSOX, Voice) by hour for current session.

**Controls**: Bond search/selector | Timeframe | Overlay toggles | Expand to full-panel | Download CSV

---

### 6. CLIENT INTELLIGENCE
**Purpose**: Know your client — recent activity, axes of interest, credit preferences, and behavioral patterns.

**Sub-panels**:

**Client Activity Feed**
- List of recent RFQs from this client (last 5–20)
- Columns: Time | Direction | Description | Amount | State | Venue
- Filter by: client name search

**Client Scorecard**:
- Win Rate (% of their RFQs where dealer won): `74%`
- Avg Trade Size: `€2.1M`
- Preferred Venue: `MarketAxess`
- Preferred Direction: `Seller (68%)`
- Typical Response Window: `30s`
- Coverage: Sales Person name

**Axes / Interest Indicators**:
- Table of bonds the client has been active in recently
- Columns: ISIN | Description | Direction | Last Qty | Date | Source
- Sourced from IOIs, voice calls, prior RFQs

**Relationship View** (mini card):
- Client name | AUM bucket | Relationship tier (Tier 1 / 2 / 3)
- Sales contact | Trader notes (editable free text)
- YTD revenue attribution

---

### 7. INSTRUMENT INSIGHT
**Purpose**: Deep dive on a specific bond — reference data, credit profile, live market data, comparable bonds.

**Bond Header**:
- Full description: e.g. "JPMorgan Chase 2.750% 08/24/2024"
- ISIN | CUSIP | Currency | Rating (Moody's / S&P / Fitch)
- Sector | Sub-sector | Country of Risk | Seniority (Senior Unsecured / Sub)

**Live Market Data**:
- Bid Price | Mid Price | Offer Price
- Bid Yield | Mid Yield | Offer Yield
- Bid Spread | Mid Spread | Offer Spread (vs benchmark)
- Benchmark: Bund / UST / Gilt | DV01 | Modified Duration | Convexity

**Reference Data panel**:
- Issue Date | Maturity Date | Coupon | Day Count | Payment Frequency
- Outstanding: €1.5B | Next Coupon Date | Accrued Interest

**Comparable Bonds table** (same issuer or sector/rating peers):
| ISIN | Description | Rating | Maturity | Mid Spread | Change |

**Axes panel**: Dealer axes currently showing for this bond (aggregated from all venues/streams)

**Recent Prints**: Last 5 trade prints from TRACE / MiFID post-trade data
- Time | Direction | Amount | Price | Yield | Spread

---

### 8. MARKET ACTIVITY
**Purpose**: Live feed of market-wide activity — IOIs, dealer axes, broker runs, new issues, and macro events.

**Sub-tabs**:

**Axes Feed**:
- Real-time dealer axes (bonds they are actively showing interest in buying/selling)
- Columns: Time | Venue | Direction | ISIN | Description | Size | Price/Spread | Dealer
- Color: Bid axes (green), Offer axes (amber)
- Filterable by sector, rating, currency, maturity bucket

**IOI Feed** (Indications of Interest):
- Incoming IOIs from buy-side clients
- Columns: Time | Client | Direction | Description | Size | Urgency
- Urgency: High (red pulse) / Normal / Low

**Broker Runs**:
- Bond lists circulated by inter-dealer brokers
- Columns: Time | Broker | ISIN | Description | Bid | Offer | Size

**New Issues Feed**:
- Primary market calendar: upcoming and live book-building deals
- Columns: Issuer | Rating | Currency | Size | IPT/Guidance | Books | Deadline
- Highlights bonds that may create secondary market hedging demand

**Macro Event Clock**:
- Countdown tiles for upcoming macro events: ECB rate decision, CPI, NFP, PMI
- Shows expected vs prior reading

---

### 9. NOTIFICATIONS & ALERTS
**Purpose**: Right-column alert feed. System and user-configured alerts plus compliance/risk flags.

**Alert Types** (each with distinct icon + color):

🟢 **Trade Confirmed**: "JPM 3/4 08/24 — €10M BUY DONE at 98.250"
🟡 **RFQ Incoming**: "New RFQ from Capeview Capital — AAPL 3 1/4 — €200K — 30s timer"
🔴 **Missed**: "RFQ #4471 MISSED — Customer Timeout — AMGN 6.9"
🔵 **Venue Alert**: "MarketAxess latency elevated — avg 350ms"
⚠️ **Risk Alert**: "Position limit 85% reached — ECREIND Book"
🟣 **Amend**: "RFQ #2538924 amended — price changed to 98.500"
📰 **News**: "ECB holds rates at 4.50% — EUR spreads tightening"
🔔 **Axes**: "Axe received: UNION BCA-BLOCK offering JPM 08/24 €15M"

**Notification panel controls**:
- Filter by type | Mark all read | Settings (configure thresholds)
- Grouped: Today / Earlier
- Unread count badge on panel header

**Alert Configuration** (via settings gear):
- Price movement threshold (e.g. alert if bond moves >5bps)
- Client-specific alerts (e.g. always alert when Tier 1 client sends RFQ)
- Position limit warnings (% of book limit)
- Venue connectivity status

---

## Component Interactions & Cross-Tile Linking

- Clicking a bond in **Market Activity → Axes** → populates **Instrument Insight** tile with that bond
- Clicking a client name in **Flow Blotter** → highlights that client's rows AND populates **Client Intelligence** tile
- Clicking a bond in **Flow Blotter Description** → populates **Instrument Insight** and adds to **Charts** watchlist
- **Notifications** RFQ alerts are clickable → jumps to that row in Flow Blotter
- All tiles respond to the global **currency filter** (CAD / EUR / GBP / USD) in the header bar

---

## Workspace Toolbar (Top Header Bar)

Left: `[App Logo]` | `[Currency: EUR ▾]` | `[Date: Today]`
Centre: Venue filter chips: `[All] [MarketAxess] [Tradeweb] [Bloomberg] [Voice]` | `[🔍 Search bond/client]`
Right: `[Layout: Save | Load]` | `[Stream: LIVE ●]` | `[Settings ⚙]` | `[User: Stuart E.]`

---

## Reference Systems (for design inspiration)

- **Flow** (as shown in reference screenshots) — primary blotter with left-side KPI gauges
- **Bloomberg Terminal** — dense tabular data, functional dark UI
- **MarketAxess LiquidityBridge** — dealer EMS with multi-venue blotter
- **Tradeweb Dealer** — RFQ management with state-based workflow
- **CMC Markets Pro** — watchlist + charting panel layout

---

## Deliverable Guidance

Create a **high-fidelity mockup** of the full workspace at **1920×1080 minimum** (widescreen desktop). Show realistic mock data — use plausible bond names (JPM, AMGN, BMW, AAPL, KDP, AXP, CARLB, RIG, LMT), real venue names, and financial quantities.

Prioritise the **Flow Blotter** as the dominant centre tile, with **KPI Metrics** anchored left and **Notifications** anchored right. **Charts** and **Instrument Insight** should sit in the lower panel. **Client Intelligence** and **Market Activity** should be accessible as resizable side panels or secondary rows.

The overall feel should be: **professional, trustworthy, fast** — a trader should be able to parse a new RFQ and make a pricing decision within seconds of seeing it on screen.
