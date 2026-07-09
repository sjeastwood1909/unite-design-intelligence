# Unite Reference Workspace Patterns
**Version:** 1.4  **Owner:** Stuart  **Last updated:** July 2026  
**Purpose:** UI pattern library extracted from 30+ reference screens across capital markets products.  
Each pattern is mapped to Unite components with a ready-to-use prompt template.

Attach alongside `unite-intelligence-context.md` when generating screens in these domains.

### Pattern tiers

**Component Patterns (01–12, 15–18)** are individual UI building blocks. Use them to assemble panels, tiles, and widgets.

**Workspace Blueprints (13–14)** are validated full-workspace designs with confirmed working implementations. Prefer these as starting points when generating complete trading or analytics workspaces. Component patterns are documented within each blueprint so you can drill into specifics.

**Draft Blueprints (19–20)** are unvalidated workspace blueprints derived from persona profiles and layout archetypes. Use as strong starting points but expect to refine details during prototype validation.

---

## Sources Analysed

| Product | Domain | Theme | What it shows |
|---|---|---|---|
| Unite Fixed Income Dashboard | Sales / Client Intelligence | Dark | KPI tiles, donut charts, treemap, blotter |
| Unite Client Flow / Analytics | Trading analytics | Dark | Flow metrics, volume charts, live blotter |
| Unite Interactions / iB Insight | Client Intelligence | Dark | Activity tracking, securities treemap |
| Unite I&CB Client Coverage | Coverage analytics | Dark | Revenue, pipeline, banker leaderboard |
| Unite Insight (Operations) | Risk / Compliance | Dark | Exception monitoring, project status |
| EBS Trade | FX Electronic Trading | Dark | Live price tiles, order management |
| Aiden (AllianceBernstein) | Algo execution | Dark | Algorithm status cards, live monitoring |
| GFI Flow | Fixed Income flow | Dark | Trade flow blotter, donut KPIs |
| ClientFirst (RBC) | CRM / Client 360 | Dark/Navy | Client profile, revenue, interactions |
| ICAP FUSION (multiple) | IDB / Rates / Equities | Dark | Matching, depth, watchlist, swaption matrix |
| P&L Insight / Dashboard | Risk / P&L | Dark | Multi-panel P&L live view |
| **Unite FX Spot Workspace** *(Pattern 13)* | FX Trading | Dark | Full validated prototype — tile grid, AG Grid blotter, depth ladder |
| **Credit Bonds Sales Trader Workspace** *(Pattern 14)* | Credit Sales Trading | Dark | Full validated prototype — 5-layer intelligence stack, client panel, opportunity rail |
| **Portfolio Manager Workspace** *(Pattern 19)* | Buy-side Portfolio Management | Dark | Draft blueprint — attribution waterfall, mandate compliance, order prep |
| **Risk Officer Exception Dashboard** *(Pattern 20)* | Market Risk / FRTB | Dark | Draft blueprint — exception queue, VaR drill-down, FRTB attribution, escalation workflow |

---

## Component Patterns

---

## Pattern 01 — Large Live Price Tile (FX / Rates)

**Seen in:** EBS Trade, ICAP CNH Hub, ICAP EM Bonds  
**Use for:** FX spot, rates, any streaming bid/offer display  
**Used in:** Pattern 13 (FX Spot Workspace — tile grid)  
**Related:** Pattern 05 (depth ladder), Pattern 11 (news feed)

**What it looks like:** Large currency pair label + bid price (left, dark bg) + offer price (right, green fill) + quantity + timestamp. Colour-coded: green = offer taken, red = bid hit.

**Unite mapping:**
```tsx
// Clickable Tile with monospace pricing — no Unite chart component needed
<Tile kind="clickable" style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'var(--spacing-01)', background:'var(--layer-01)'}}>
  {/* Header */}
  <div style={{gridColumn:'1/-1', display:'flex', justifyContent:'space-between'}}>
    <span className="unite-type-label-01" style={{color:'var(--text-secondary)'}}>EUR/USD</span>
    <span className="unite-type-label-01" style={{color:'var(--text-secondary)'}}>1,000,000</span>
  </div>
  {/* Bid */}
  <div style={{background:'var(--layer-02)', padding:'var(--spacing-05)', textAlign:'center'}}>
    <p className="unite-type-label-01" style={{color:'var(--text-secondary)'}}>BID</p>
    <p style={{fontFamily:'var(--font-mono)', fontSize:'var(--type-heading-05-size)', color:'var(--text-primary)'}}>1.1240</p>
  </div>
  {/* Offer — highlighted */}
  <div style={{background:'var(--support-success)', padding:'var(--spacing-05)', textAlign:'center'}}>
    <p className="unite-type-label-01" style={{color:'var(--text-on-color)'}}>OFFER</p>
    <p style={{fontFamily:'var(--font-mono)', fontSize:'var(--type-heading-05-size)', color:'var(--text-on-color)'}}>1.1245</p>
  </div>
</Tile>
```

**Prompt template:**
```
CONTEXT: FX dealer workspace showing live streaming prices for multiple currency pairs.
ROLE: Trader
WORKFLOW: Monitor live bid/offer, click to trade at current price.
REQUIREMENTS:
  - Show: currency pair, notional, bid price, offer price, last trade direction
  - Colour: offer tile highlights green on activity, bid highlights red
  - Layout: grid of tiles, 3 across, scrollable
  - Theme: g100 dark
  - Monospace for all prices
OUTPUT: rationale + spec + React TSX
```

---

## Pattern 02 — KPI Ring / Donut Tile

**Seen in:** Unite Fixed Income Dashboard, Unite Client Flow, GFI Flow, ClientFirst  
**Use for:** Done/missed trade counts, volume totals, client coverage metrics  
**Used in:** Pattern 14 (Credit Workspace — KPI Command Bar), Pattern 09, Pattern 10  
**Related:** Pattern 04 (blotter), Pattern 09 (exception monitoring)

**What it looks like:** Donut ring with large central value + label. Supporting breakdown legend beside or below. Often paired in a row of 4.

**Unite mapping:**
```tsx
// Tile wrapping a custom SVG donut — Unite has no chart component, use inline SVG or a charting lib
<Tile kind="base" style={{padding:'var(--spacing-05)'}}>
  <div style={{display:'flex', alignItems:'center', gap:'var(--spacing-06)'}}>
    {/* SVG donut — build with d3 or recharts PieChart */}
    <svg width="80" height="80">{/* donut arc */}</svg>
    <div>
      <p className="unite-type-label-01" style={{color:'var(--text-secondary)'}}>DONE</p>
      <p style={{fontFamily:'var(--font-mono)', fontSize:'var(--type-heading-04-size)', color:'var(--text-primary)'}}>803</p>
      <p className="unite-type-label-01" style={{color:'var(--text-secondary)'}}>41.10% · 330</p>
    </div>
  </div>
</Tile>
```

**Prompt template:**
```
CONTEXT: Trading analytics summary showing done vs missed trade ratios.
ROLE: Trading Analyst
WORKFLOW: At-a-glance check of execution quality at the start of the day.
REQUIREMENTS:
  - 4 KPI tiles in a row: Done, Missed, Buy, Sell
  - Each tile: donut ring chart + central count + percentage + notional
  - Done = green, Missed = red, Buy = blue, Sell = orange
  - All values monospace
  - Date range filter above tiles
  - Theme: g100 dark
OUTPUT: rationale + spec + React TSX using recharts PieChart
```

---

## Pattern 03 — Algorithm Execution Status Card Grid

**Seen in:** Aiden (AllianceBernstein)  
**Use for:** Algo monitoring, execution quality alerts, active order surveillance  
**Related:** Pattern 02 (KPI summary above card grid), Pattern 04 (blotter below)

**What it looks like:** Card grid (4–5 across), each card shows: ticker + algo status headline + sparkline chart + account/trader names + thumbs up/down feedback buttons. Status in title: "Beating VWAP", "Price Being Moved", "52.6% Chance to Complete".

**Unite mapping:**
```tsx
<div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(200px, 1fr))', gap:'var(--spacing-03)'}}>
  {algos.map(algo => (
    <Tile key={algo.id} kind="base" style={{padding:'var(--spacing-04)'}}>
      {/* Status headline */}
      <Tag type={algo.status === 'beating' ? 'green' : 'red'} size="sm">{algo.statusLabel}</Tag>
      <p className="unite-type-heading-01" style={{marginTop:'var(--spacing-02)'}}>{algo.ticker}</p>
      {/* Mini sparkline — inline SVG */}
      <svg width="100%" height="40">{/* path */}</svg>
      {/* Metadata */}
      <div style={{marginTop:'var(--spacing-03)'}}>
        {algo.traders.map(t => (
          <p key={t} className="unite-type-label-01" style={{color:'var(--text-secondary)'}}>{t}</p>
        ))}
      </div>
      {/* Feedback */}
      <div style={{display:'flex', gap:'var(--spacing-02)', marginTop:'var(--spacing-03)'}}>
        <Button kind="ghost" size="sm" icon="checkmark-filled" iconOnly />
        <Button kind="ghost" size="sm" icon="delete" iconOnly />
      </div>
    </Tile>
  ))}
</div>
```

**Prompt template:**
```
CONTEXT: Algorithmic execution monitoring dashboard for a buy-side trading desk.
ROLE: Trader
WORKFLOW: Monitor all active algos in real time, identify those needing intervention, approve or flag.
REQUIREMENTS:
  - Card grid: 5 cards per row, scrollable
  - Each card: ticker, algo type (VWAP/TWAP/POV), status label, price sparkline (buy in green, sell in red), notional, account name, trader name, feedback buttons
  - Status tags: green="Beating", amber="At Risk", red="Needs Attention"
  - Header bar: total notional, open orders count, might-not-complete count, schedule adherence %, VWAP cost, spread cost
  - Theme: g100 dark
OUTPUT: rationale + spec + React TSX
```

---

## Pattern 04 — Dense Trade Blotter with Row-Level Status Colouring

**Seen in:** Unite Client Flow, GFI Flow, Unite Fixed Income Dashboard  
**Use for:** Live order flow, fixed income blotter, voice trade log  
**Used in:** Pattern 13 (bottom DEALS blotter), Pattern 14 (AG Grid RFQ monitor)  
**Related:** Pattern 02 (KPI summary), Pattern 05 (depth ladder alongside)  
**Note:** For production blotters with live data, column resizing, and virtual scrolling, Pattern 13 and 14 use AG Grid in place of Unite DataTable — see Implementation Gotchas.

**What it looks like:** Full-width DataTable with 10–15 columns. Rows colour-coded by status: green row = done, red row = missed/cancelled, amber = amend. Status badge in first cell. Left panel shows aggregate donuts.

**Unite mapping:**
```tsx
<DataTable
  title="Today's Flow"
  headers={[
    { key: 'status', header: '' },
    { key: 'time', header: 'Time', sortable: true },
    { key: 'venue', header: 'Venue' },
    { key: 'client', header: 'Client', sortable: true },
    { key: 'notional', header: 'Notional', sortable: true },
    { key: 'description', header: 'Security', sortable: true },
    { key: 'side', header: 'Side' },
    { key: 'price', header: 'Price' },
    { key: 'cosPrice', header: 'Cos Price' },
    { key: 'trader', header: 'Trader' },
    { key: 'settle', header: 'Settle' },
  ]}
  rows={trades.map(t => ({
    ...t,
    // Row-level status: apply background via className
    // status cell:
    status: <Tag type={statusTagType(t.status)} size="sm">{t.status}</Tag>,
    // Highlight active/selected row with --layer-selected-01
  }))}
  sortable
  selectable
  toolbar={
    <div style={{display:'flex', gap:'var(--spacing-03)'}}>
      <ContentSwitcher options={['Flow','Gilts','My Team']} />
      <Search placeholder="Search..." size="sm" />
    </div>
  }
/>
```

**Prompt template:**
```
CONTEXT: Fixed income sales trading blotter showing all trade flow for the day.
ROLE: Sales Trader
WORKFLOW: Monitor incoming RFQs and completed trades, filter by venue, identify missed items.
REQUIREMENTS:
  - Full-width blotter with columns: status tag, time (with timezone), venue, client, notional, security description, quote type, side, price, cos price, trader, settle date, tenor
  - Row colours: done=subtle green tint, missed=subtle red tint, amend=subtle amber tint (use background on tr, not Tag colour alone)
  - ContentSwitcher: Flow / Gilts / My Team / My Clients
  - Search + column filter in toolbar
  - Row count shown below table
  - Left sidebar optional: aggregate donuts (done %, missed %)
  - Theme: g100 dark
OUTPUT: rationale + spec + React TSX
```

---

## Pattern 05 — Market Depth / Order Book Ladder

**Seen in:** ICAP FUSION Equities, ICAP EM Bonds  
**Use for:** Equity/bond depth, rates ladders, limit order book  
**Used in:** Pattern 13 (Analytics panel — depth ladder with proportional bars)  
**Related:** Pattern 01 (price tiles alongside), Pattern 06 (rates matrix in same workspace)

**What it looks like:** Two-column table (BID | OFFER) with size. Rows progressively further from mid. Active bid row highlighted green, active offer highlighted red. Instrument label above.

**Unite mapping:**
```tsx
// StructuredList is too simple — use DataTable with custom cell styling
<DataTable
  title="FTSE 100 · Jun-16"
  headers={[
    { key: 'bidSize', header: 'Size' },
    { key: 'bid', header: 'Bid' },
    { key: 'offer', header: 'Offer' },
    { key: 'offerSize', header: 'Size' },
  ]}
  rows={depthLevels.map((level, i) => ({
    id: i,
    bidSize: <span style={{fontFamily:'var(--font-mono)', color:'var(--text-secondary)'}}>{level.bidSize}</span>,
    bid: <span style={{fontFamily:'var(--font-mono)', color: i===0 ? 'var(--support-success)' : 'var(--text-primary)'}}>{level.bid}</span>,
    offer: <span style={{fontFamily:'var(--font-mono)', color: i===0 ? 'var(--support-error)' : 'var(--text-primary)'}}>{level.offer}</span>,
    offerSize: <span style={{fontFamily:'var(--font-mono)', color:'var(--text-secondary)'}}>{level.offerSize}</span>,
  }))}
  size="sm"
/>
```

**Prompt template:**
```
CONTEXT: Order book depth panel within an equity trading workspace.
ROLE: Trader
WORKFLOW: Read depth to understand liquidity before sizing an order.
REQUIREMENTS:
  - 10-level bid/offer ladder
  - Best bid: green highlight, best offer: red highlight
  - All prices and sizes in monospace
  - Instrument name + last price in panel header
  - Compact (size="sm"), no toolbar, no pagination
  - Theme: g100 dark
OUTPUT: rationale + spec + React TSX
```

---

## Pattern 06 — Swaption / Rates Matrix Table

**Seen in:** ICAP Swaption Forward Premiums  
**Use for:** IR swaption premiums, vol surface, tenor/expiry grids, FX forward points  
**Related:** Pattern 05 (depth ladder as right panel), Pattern 01 (price tiles as entry point)

**What it looks like:** Dense grid table where rows = option tenor, columns = swap tenor (1Y–30Y). Cells are prices. Selected cell highlighted blue. Right panel: order entry + spreads list.

**Unite mapping:**
```tsx
// DataTable with monospace cells — headers are tenors
<DataTable
  title="EUR Swaption Forward Premiums"
  headers={['', '1Y', '2Y', '3Y', '4Y', '5Y', '7Y', '10Y', '15Y', '20Y', '25Y', '30Y'].map(h => ({key:h||'label', header:h}))}
  rows={tenorRows.map(row => ({
    id: row.label,
    label: <span className="unite-type-label-01" style={{color:'var(--text-secondary)'}}>{row.label}</span>,
    ...Object.fromEntries(row.values.map((v, i) => [
      swapTenors[i],
      <span
        key={i}
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--type-label-01-size)',
          background: selectedCell?.row===row.label && selectedCell?.col===swapTenors[i] ? 'var(--layer-selected-01)' : 'transparent',
          padding: '2px 4px',
          cursor: 'pointer',
          color: v < 0 ? 'var(--support-error)' : 'var(--text-primary)',
        }}
        onClick={() => setSelectedCell({row:row.label, col:swapTenors[i]})}
      >{v}</span>
    ]))
  }))}
  size="sm"
/>
```

**Prompt template:**
```
CONTEXT: Interest rate swaption premiums matrix for a rates trading desk.
ROLE: Rates Trader
WORKFLOW: Scan the volatility surface, select a point to trade, enter an order.
REQUIREMENTS:
  - Matrix: rows = option tenors (1M to 20Y), columns = swap tenors (1Y to 30Y)
  - Cells: monospace prices, clickable to populate order entry
  - Selected cell: highlighted with interactive colour
  - Right sidebar: order entry panel (size input, BUY/SELL buttons in primary colour), spreads list, skews list
  - Tabs below matrix: Orders / My Firm's Trades / Posted Trades
  - Theme: g100 dark
OUTPUT: rationale + spec + React TSX
```

---

## Pattern 07 — Client 360 Profile View

**Seen in:** ClientFirst (RBC), Unite I&CB Client Coverage  
**Use for:** Client profile, account overview, relationship management  
**Used in:** Pattern 14 (Client Intelligence Panel — Layer 4)  
**Related:** Pattern 08 (treemap for securities view), Pattern 10 (P&L panels), Pattern 11 (call reports feed)

**What it looks like:** Left nav (client list, entity hierarchy), main area splits into quadrants: revenue chart (YTD bar), revenue by client table, banker coverage list, interactions sparkline, deals table, call reports list.

**Unite mapping:**
```tsx
// Master layout: two-column grid within main content area
<div style={{display:'grid', gridTemplateColumns:'260px 1fr', height:'100vh'}}>
  {/* Left: client nav */}
  <div style={{background:'var(--layer-01)', borderRight:'1px solid var(--border-subtle-01)', overflowY:'auto'}}>
    <Search placeholder="Search company or symbol..." size="sm" />
    <Accordion items={entityHierarchy} />
  </div>
  {/* Right: 360 panels */}
  <div style={{padding:'var(--spacing-05)', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'var(--spacing-05)', overflowY:'auto'}}>
    <Tile kind="base">{/* Revenue by Product — bar chart */}</Tile>
    <Tile kind="base">{/* Revenue by Client — DataTable */}</Tile>
    <Tile kind="base">{/* Banker Coverage — StructuredList */}</Tile>
    <Tile kind="base">{/* Interactions sparkline + count */}</Tile>
    <Tile kind="base" style={{gridColumn:'1/-1'}}>{/* Deals — DataTable */}</Tile>
    <Tile kind="base" style={{gridColumn:'1/-1'}}>{/* Call Reports — DataTable */}</Tile>
  </div>
</div>
```

**Prompt template:**
```
CONTEXT: Client 360 view for a coverage banker reviewing a key institutional client.
ROLE: Relationship Manager / Coverage Banker
WORKFLOW: Review revenue performance, recent interactions, deals, and analyst coverage before a client meeting.
REQUIREMENTS:
  - Left nav: client list (scrollable), entity hierarchy (expandable), search
  - Header: client name, CDR ID, region, ticker, loan status
  - 2-column grid panels: Revenue by Product (YTD bar chart, grouped by year), Revenue by Client (expandable table with % change), Banker Coverage (StructuredList), Interactions (sparkline + last contact date), Deals (DataTable), Call Reports (DataTable)
  - All monetary values: monospace, colour-coded change (green/red)
  - Bottom nav tabs: Clients / Team / Corporate 360 / Perspective
  - Theme: g100 dark
OUTPUT: rationale + spec + React TSX
```

---

## Pattern 08 — Treemap Visualisation

**Seen in:** Unite iB Insight, ClientFirst Perspective  
**Use for:** Securities discussed by clients, supplier spend ranking, portfolio allocation by sector  
**Related:** Pattern 07 (client 360 Perspective tab), Pattern 02 (KPI tiles pairing above)

**What it looks like:** Rectangular blocks sized by value, labelled with entity name + metric. Colour indicates direction (blue = interest, green = positive, red = negative) or category.

**Unite mapping:**
```tsx
// No Unite treemap component — use d3 or recharts Treemap
// Wrap in a Tile with ContentSwitcher for Chart/Table view toggle
<Tile kind="base">
  <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'var(--spacing-04)'}}>
    <span className="unite-type-heading-01">Securities discussed by Clients</span>
    <ContentSwitcher options={['Treemap','Table']} onChange={setView} />
  </div>
  {view === 'Treemap'
    ? <Treemap data={securities} colorScale={blueRamp} labelKey="name" valueKey="inquiries" />
    : <DataTable headers={treemapHeaders} rows={securities} size="sm" />
  }
</Tile>
```

**Prompt template:**
```
CONTEXT: Securities intelligence dashboard showing which securities clients are discussing most.
ROLE: Research Analyst / Coverage Banker
WORKFLOW: Identify trending securities to prioritise outreach and research production.
REQUIREMENTS:
  - Treemap: block size = number of client inquiries, colour intensity = inquiry growth
  - Labels: security name + ISIN + inquiry count
  - ContentSwitcher to toggle Treemap / Table views
  - Search to filter securities
  - Tooltip on hover: security name, total inquiries, % of clients, last discussed date
  - Theme: g100 dark
OUTPUT: rationale + spec + React TSX using recharts Treemap or d3
```

---

## Pattern 09 — Exception / Operations Monitoring Dashboard

**Seen in:** Unite Insight (Operations / Compliance)  
**Use for:** Regulatory exception tracking, settlement fails, data quality monitoring  
**Related:** Pattern 02 (KPI row at top), Pattern 04 (exception blotter), Pattern 11 (news/alert feed)

**What it looks like:** Top row: KPI counts with YoY/QoQ deltas. Middle: multi-line exception trend chart per jurisdiction. Bottom: project status panels (On Track / At Risk / Slippage counts + mini DataTable). Alert notification overlay (toast-style).

**Unite mapping:**
```tsx
{/* Alert notification — overlay */}
<ToastNotification
  kind="warning"
  title="Challenge Management"
  subtitle="FCA inquiry on [subject matter] due 10/04/23"
  caption="13:45 PM"
  onClose={dismiss}
/>

{/* KPI row */}
<div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'var(--spacing-04)'}}>
  {kpis.map(kpi => (
    <Tile key={kpi.label}>
      <p className="unite-type-label-01" style={{color:'var(--text-secondary)'}}>{kpi.label}</p>
      <p style={{fontFamily:'var(--font-mono)', fontSize:'var(--type-heading-04-size)'}}>{kpi.value}</p>
      <Tag type={kpi.trend > 0 ? 'red' : 'green'} size="sm">{kpi.trendLabel}</Tag>
    </Tile>
  ))}
</div>

{/* Project status panels */}
<div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'var(--spacing-04)'}}>
  {projects.map(cat => (
    <Tile key={cat.name}>
      <p className="unite-type-heading-01">{cat.name}</p>
      <div style={{display:'flex', gap:'var(--spacing-04)'}}>
        <Tag type="green">On Track {cat.onTrack}</Tag>
        <Tag type="yellow">At Risk {cat.atRisk}</Tag>
        <Tag type="red">Slippage {cat.slippage}</Tag>
      </div>
      <DataTable rows={cat.projects} headers={projectHeaders} size="sm" />
    </Tile>
  ))}
</div>
```

**Prompt template:**
```
CONTEXT: Regulatory operations dashboard for a compliance team monitoring exception workflows.
ROLE: Operations / Compliance Analyst
WORKFLOW: Morning review of open exceptions, at-risk projects, and regulatory deadlines.
REQUIREMENTS:
  - Personalised greeting: "Hi Stuart, here's your insight"
  - KPI row: Received / Processed / Sent counts with on-time vs exception breakdown
  - Exception trend charts: multi-line (on time, exceptions, late) per jurisdiction (CFTC, SEC, FCA, ESMA)
  - Project status panels: Regulatory Change / Business Change / Efficiency Change / Challenge Resolution — each shows On Track/At Risk/Slippage counts + scrollable project table with due dates and status tags
  - Toast notification for overdue items
  - Theme: g100 dark
OUTPUT: rationale + spec + React TSX
```

---

## Pattern 10 — P&L Live Summary Panel

**Seen in:** P&L Insight, Unite Fixed Income Dashboard  
**Use for:** Real-time P&L by strategy, desk, or product  
**Related:** Pattern 02 (strategy selector uses donut tiles), Pattern 04 (trade viewer blotter in right panel)

**What it looks like:** Left column: stacked strategy cards each with a donut ring + P&L value + sparkline. Centre: summary table with product rows (FX, Repo, Futures, Cash) and multiple P&L columns (brokerage, funding, target, etc.). Right: detail panels (client value, trade viewer).

**Unite mapping:**
```tsx
<div style={{display:'grid', gridTemplateColumns:'200px 1fr 320px', height:'100%', gap:'var(--spacing-03)'}}>
  {/* Left: strategy list */}
  <div style={{overflowY:'auto', display:'flex', flexDirection:'column', gap:'var(--spacing-02)'}}>
    {strategies.map(s => (
      <Tile key={s.name} kind="selectable" selected={selected===s.name} onClick={()=>setSelected(s.name)}>
        <p className="unite-type-label-01">{s.name}</p>
        <p style={{fontFamily:'var(--font-mono)', color: s.pnl >= 0 ? 'var(--support-success)' : 'var(--support-error)'}}>
          {formatPnl(s.pnl)}
        </p>
      </Tile>
    ))}
  </div>
  {/* Centre: P&L summary table */}
  <DataTable
    title="P&L Dashboard — All Products"
    headers={pnlHeaders}
    rows={pnlRows}
    size="sm"
    toolbar={<Dropdown items={['USD','GBP','EUR']} label="Currency" size="sm" />}
  />
  {/* Right: detail */}
  <div style={{display:'flex', flexDirection:'column', gap:'var(--spacing-03)'}}>
    <Tile kind="base">{/* Daily report */}</Tile>
    <Tile kind="base">{/* Trade viewer */}</Tile>
  </div>
</div>
```

**Prompt template:**
```
CONTEXT: Real-time P&L monitoring workspace for a rates/repo trading desk.
ROLE: Risk Manager / Head of Trading
WORKFLOW: Monitor live P&L across strategies, drill into product-level breakdown, review individual trades.
REQUIREMENTS:
  - Left panel: strategy selector tiles — each shows strategy name, live P&L, mini sparkline
  - Centre: P&L summary table — rows by product (All, FX, Repo, Futures, Cash), columns (Live, Brokerage, Funding, Target, Change, Notional, Asset Limit, Liability Limit)
  - All P&L values: monospace, green/red based on sign
  - Right: day 1 report panel (client table with asset CV, liability CV, total CV, % change) + trade viewer panel (trade detail StructuredList)
  - Currency dropdown in toolbar
  - Theme: g100 dark
OUTPUT: rationale + spec + React TSX
```

---

## Pattern 11 — News / Market Activity Feed

**Seen in:** ICAP CNH Hub  
**Use for:** News headlines, market activity log, audit trail, settlement narrative  
**Used in:** Pattern 13 (Order Management — activity feed panel)  
**Related:** Pattern 01 (price tiles in same hub workspace), Pattern 12 (AI panel as alternative feed)

**What it looks like:** Timestamped list of text items (headlines, trade notifications). Newest at top. Each item: relative time + headline text + "More" link. Optional category filter tabs.

**Unite mapping:**
```tsx
// StructuredList is ideal for this pattern
<Tile kind="base">
  <p className="unite-type-heading-01" style={{marginBottom:'var(--spacing-04)'}}>CNH News</p>
  <StructuredList
    rows={newsItems.map(item => ({
      cells: [
        <span className="unite-type-label-01" style={{color:'var(--text-secondary)', whiteSpace:'nowrap'}}>{item.relativeTime}</span>,
        <div>
          <p className="unite-type-body-compact-01">{item.headline}</p>
          <Link href={item.url}>More</Link>
        </div>
      ]
    }))}
    border={false}
  />
</Tile>
```

**Prompt template:**
```
CONTEXT: Market news feed panel within a FX/rates trading hub.
ROLE: Trader / Sales
WORKFLOW: Scan latest market news affecting current positions while managing the blotter.
REQUIREMENTS:
  - Scrollable news feed: relative timestamp + headline text + More link
  - Optional: category filter (All / Macro / Credit / FX / Rates)
  - Compact — designed to sit in a column alongside price panels
  - No pagination — infinite scroll
  - Theme: g100 dark
OUTPUT: rationale + spec + React TSX
```

---

## Pattern 12 — AI Assistant Panel

**Seen in:** Unite multi-screen workspace concept (p10)  
**Use for:** Natural language query interface embedded within trading workspace  
**Related:** Pattern 07 (client 360 as data source), Pattern 11 (feed as alternative right-panel occupant)

**What it looks like:** Chat-style panel with user messages (blue bubble), AI responses (structured: text + data table + action chips). Suggested next actions shown as button chips below AI response.

**Unite mapping:**
```tsx
<Tile kind="base" style={{display:'flex', flexDirection:'column', height:'100%'}}>
  <p className="unite-type-heading-01">Claude Assistant</p>
  {/* Message thread */}
  <div style={{flex:1, overflowY:'auto', display:'flex', flexDirection:'column', gap:'var(--spacing-04)'}}>
    {messages.map(msg => (
      <div key={msg.id} style={{alignSelf: msg.role==='user' ? 'flex-end' : 'flex-start', maxWidth:'85%'}}>
        {msg.role === 'user'
          ? <div style={{background:'var(--button-primary)', color:'var(--text-on-color)', padding:'var(--spacing-03) var(--spacing-04)', borderRadius:'4px 4px 0 4px'}}>
              <p className="unite-type-body-compact-01">{msg.content}</p>
            </div>
          : <div style={{background:'var(--layer-02)', padding:'var(--spacing-04)'}}>
              <p className="unite-type-body-compact-01">{msg.content}</p>
              {msg.data && <DataTable rows={msg.data.rows} headers={msg.data.headers} size="sm" />}
              {msg.actions && (
                <div style={{display:'flex', gap:'var(--spacing-02)', marginTop:'var(--spacing-03)', flexWrap:'wrap'}}>
                  {msg.actions.map(a => <Button key={a} kind="tertiary" size="sm">{a}</Button>)}
                </div>
              )}
            </div>
        }
      </div>
    ))}
  </div>
  {/* Input */}
  <div style={{display:'flex', gap:'var(--spacing-02)', marginTop:'var(--spacing-04)'}}>
    <TextInput placeholder="Ask about your clients, orders, P&L..." size="md" style={{flex:1}} />
    <Button kind="primary" icon="send" iconOnly />
  </div>
</Tile>
```

**Prompt template:**
```
CONTEXT: AI assistant panel embedded in a capital markets trading workspace.
ROLE: Any (Trader / Analyst / Relationship Manager)
WORKFLOW: Natural language query of live data — "what are my top 5 clients by revenue?", "show me open orders above 10M".
REQUIREMENTS:
  - Chat interface: user messages right-aligned (primary blue), AI responses left-aligned (layer-02)
  - AI responses can contain: text paragraph, Unite DataTable for structured data, action chip buttons
  - Suggested actions: chips for follow-up actions (e.g. "Create a call report", "Open in Revenue by Client")
  - Text input + send button at bottom
  - Compact — designed as a side panel (320–400px wide)
  - Theme: g100 dark
OUTPUT: rationale + spec + React TSX
```

---

## Workspace Blueprints

---

## Pattern 13 — FX Spot Trading Workspace ✅ VALIDATED

**Source:** `unite-fxspot-workspace.html` + `unite-fxspot-workspace.md` (Stuart's Claude Design output — working prototype v2)  
**Status:** Validated — live interactions, price simulation, AG Grid blotter confirmed working. Updated July 2026.  
**Use for:** Any FX, rates, or multi-instrument live pricing workspace

---

### What makes this design work

This is the most complete, production-closest pattern in the library. Every UX decision below has been validated through the working prototype.

**Three-panel + bottom drawer architecture**
```
[Tile Grid — resizable] | [Analytics Panel — resizable] | [Order Management]
                    [Bottom Blotter — resizable drawer]
```
- Resize handles between columns (4px, turns blue on hover) and above blotter
- Panel sizes persisted to `localStorage` — survive page refresh
- `position:fixed;inset:0` full-viewport layout, `overflow:hidden` on root

**Colour conventions (FX-specific, validated)**
- Bid = `#42be65` (green-40) — SELL side
- Offer = `#4589ff` (blue-50) — BUY side
- This is intentional: green = you sell at bid, blue = you buy at offer
- Differs from generic red/green — use these exact values for FX workspaces

**FX price typography (big figure / pips / fraction)**
```
[big figure small secondary] [PIPS large bold coloured] [fraction medium coloured]
         1.08                        46                          1
```
Implemented via CSS custom properties on the tile grid container:
```css
--price-big:  11px   /* big figure — var(--text-secondary) */
--price-pips: 60px   /* pips — bid green / offer blue, font-weight: 700 */
--price-frac: 20px   /* fraction — same colour, align-self: flex-end */
```
Switch S/M/L card sizes by changing these vars on the grid container.

**Price flash animation** (on every tick)
```css
@keyframes priceBid   { 0% { background: rgba(66,190,101,0.22); } 100% { background: transparent; } }
@keyframes priceOffer { 0% { background: rgba(69,137,255,0.22); } 100% { background: transparent; } }
.flash-bid   { animation: priceBid   0.4s ease-out forwards; }
.flash-offer { animation: priceOffer 0.4s ease-out forwards; }
```
Apply class to the price area div on tick, remove after 400ms.

**Card size system (S / M / L)**
```js
// S: --card-min-width:140px; --card-row-height:160px; --price-pips:36px
// M: --card-min-width:200px; --card-row-height:200px; --price-pips:52px  (default)
// L: --card-min-width:280px; --card-row-height:240px; --price-pips:64px
```
Set as CSS custom properties on `#fx-tile-grid`. Grid uses `repeat(auto-fill, minmax(var(--card-min-width),1fr))`.

**Tile anatomy (validated)**
```
[drag grip] [PAIR mono bold] [VENUE tag] ........... [● LIVE] [✕]   ← header 32px
[──────────── BID (green) ──────] [SPD | ↑] [────── OFFER (blue) ──────]   ← price area flex:1
[LIQ: FULL  VOL: MED] ............... [−] [size] [+]                       ← indicators 32px
[SELL ──────────────] [RFQ] [──────────────── BUY]                          ← actions 32px
```
- Drag-to-reorder via HTML5 drag API, order persisted to localStorage
- Pair searchable/addable via search dropdown (⌘K shortcut)
- Removable via ✕ button

**AG Grid blotter with Unite dark theme**

The blotter uses AG Grid Community (not Unite's DataTable) because Unite's DataTable lacks column resizing, virtual scrolling, and sort indicators needed for a live trading blotter.

Unite dark theme overrides for AG Grid:
```css
.unite-grid.ag-theme-alpine-dark {
  --ag-background-color: #262626;           /* --gray-90 */
  --ag-odd-row-background-color: #262626;
  --ag-header-background-color: #393939;    /* --gray-80 */
  --ag-header-foreground-color: #a8a8a8;    /* --gray-40 */
  --ag-foreground-color: #f4f4f4;           /* --gray-10 */
  --ag-row-hover-color: rgba(255,255,255,0.04);
  --ag-selected-row-background-color: rgba(69,137,255,0.12);
  --ag-border-color: #525252;               /* --gray-70 */
  --ag-row-border-color: #393939;
  --ag-font-family: 'IBM Plex Sans', sans-serif;
  --ag-font-size: 12px;
  --ag-row-height: 24px;
  --ag-header-height: 32px;
  --ag-cell-horizontal-padding: 4px;
}
```
Add `class="ag-theme-alpine-dark unite-grid"` to the grid container div.

**Blotter KPI footer bar (validated pattern)**
```
DEALS | BUYS | SELLS || TOTAL NOTIONAL | AVG SIZE | BUY RATIO || SESSION VOLUME | SESSION P&L
```
- 40px height, `background: var(--layer-02)`, `border-top: 1px solid var(--border-subtle-01)`
- Each cell: label (8px, secondary, letter-spacing 0.8px) + value (11px mono, bold)
- Grouped with 1px dividers: counts group | notional group | session group
- SESSION P&L: green if positive, red if negative

**Order fill progress bar**
```html
<div style="height:3px; background:var(--layer-02); overflow:hidden;">
  <div style="height:100%; background:#4589ff; width:62%; transition:width 0.5s ease;"></div>
</div>
```
Used in both Order Management sidebar and Orders blotter tab.

**Market depth ladder (center panel)**
- Bid side (green): right-aligned prices, proportional bar right→left
- Offer side (blue): left-aligned prices, proportional bar left→right
- Bars: `rgba(66,190,101,0.5)` bid / `rgba(69,137,255,0.5)` offer — 4px height, 50px max width
- 8px center divider

**Header conventions (validated)**
- Unite logo + FX product label + `|` divider (1px border-subtle)
- Workspace tabs: ALL CAPS, 11px, font-weight 600, letter-spacing 0.5px, active = `border-bottom: 2px solid #4589ff`
- Search: `⌘K` shortcut shown as `<kbd>` element
- Market status: 6px green dot + "LONDON" + UTC clock in `font-mono`
- User: 26px square avatar (blue bg, white initials) + trader code

---

### Prompt template for FX Spot Workspace

```
CONTEXT: FX spot trading workspace for an FX dealer managing multiple currency pairs simultaneously.
ROLE: FX Trader / Dealer
WORKFLOW: Monitor live streaming prices across 8–14 pairs, execute spot trades via tile click, track active orders and session performance, review deal blotter.

REQUIREMENTS:
Layout:
  - 3-column + bottom drawer: tile grid (resizable) | analytics (resizable) | order management
  - Bottom blotter: resizable, tabs DEALS / POSITIONS / ORDERS
  - Header: Unite logo, FX nav, workspace tabs (SPOT FX / OPTIONS / NDF / +), ⌘K search, market status, UTC clock, user

Tile grid:
  - Cards per row: auto-fill based on card size (S/M/L switcher)
  - Each tile: pair + venue tag + market state | BID (green) | SPD | OFFER (blue) | LIQ/VOL indicators | size stepper | SELL / RFQ / BUY actions
  - Draggable to reorder
  - Search to add pairs

Analytics panel:
  - Selected pair: large BID / SPD / OFFER display
  - Session stats: HIGH / LOW / VWAP / SPREAD / VOL
  - Intraday sparkline chart
  - Day range bar with current price marker
  - Market depth ladder (5–10 levels, proportional bars)

Order Management:
  - Active orders with fill progress bars
  - Alerts section
  - Activity feed (timestamped)

Blotter:
  - AG Grid with Unite dark theme overrides
  - Columns: TIME / PAIR / SIDE (BUY blue, SELL green) / NOTIONAL / PRICE / TRADER / VENUE / STATUS
  - Footer KPI bar: DEALS | BUYS | SELLS | TOTAL NOTIONAL | AVG SIZE | BUY RATIO | SESSION VOLUME | SESSION P&L

Conventions:
  - ALL prices: IBM Plex Mono
  - Bid = #42be65 (green), Offer = #4589ff (blue) throughout
  - Price flash animation on tick (0.4s)
  - Resize handles persist to localStorage
  - Theme: g100 dark (#161616 background)

OUTPUT: rationale + spec + React TSX (or self-contained HTML using Unite bundle)
```

---

## Pattern 14 — Credit Bonds Sales Trader Workspace ✅ VALIDATED

**Source:** Credit Bonds Sales Trader Workspace (Stuart's Claude Design output — working prototype + full spec)  
**Status:** Validated — working HTML prototype + 670-line design specification document  
**Use for:** Any sales trading desk workspace: Credit, Rates, EM, Equity — any domain where the trader is both executing and managing client relationships simultaneously

---

### What makes this design fundamentally different from Pattern 13 (FX)

Pattern 13 (FX) is an **execution workspace** — the trader's primary job is to watch prices and trade fast. The information hierarchy flows from price → action.

Pattern 14 (Credit) is an **intelligence workspace** — the trader's primary job is to manage relationships, respond to RFQs, and surface opportunity. The information hierarchy flows from signal → context → action. This architectural difference drives every design decision.

---

### The 5-Layer Intelligence Stack

This is the core architectural pattern — a vertical stack where each layer feeds the next:

```
Layer 1 — KPI Command Bar       (always visible, 80px)
           ↓ click to filter
Layer 2 — Market Analytics Row  (collapsible, 240px)
           ↓ click to load client
Layer 3 — Operational Grid      (72% width, flex height)
           ↓ row click auto-populates
Layer 4 — Client Intelligence   (28% width, persistent)
           ↓ signals surface in
Layer 5 — Opportunity Rail      (bottom of panel, sticky CTA)
```

**The key insight:** every layer is an entry point into the next. Clicking a KPI tile filters the grid. Clicking a grid row loads the client panel. Clicking a client in the analytics tile loads the client panel. The workspace is a single connected intelligence loop, not a set of isolated panels.

---

### Layer 1 — KPI Command Bar (interactive, not read-only)

6 tiles always visible. Each tile is **clickable and applies a filter to the grid** — turning a metric into an action queue.

```
┌──────────────────────────┐
│  LABEL            [i] [⋮]│  ← label + info tooltip + overflow menu
│  342                     │  ← primary value (large, monospace)
│  ▲ +12%  vs MTD         │  ← delta + direction + context
│  ░░░░░░████████          │  ← 14px sparkline
└──────────────────────────┘
```

| Tile | Primary Value | Click Behaviour |
|---|---|---|
| Done Trades | Count | Grid → filter Status=DONE |
| Missed Trades | Count | Grid → filter Status=MISSED |
| Done Notional | USD | Grid → filter Status=DONE |
| Missed Notional | USD | Grid → filter Status=MISSED |
| Buy/Sell Ratio | Split bar | Grid → group by Side |
| Revenue | P&L | Revenue analytics view |

**Implementation note:** Delta colour convention for credit — positive = `--support-success` (green), negative = `--support-error` (red). Opposite to FX where bid=green, offer=blue.

---

### Layer 2 — Analytics Row (collapsible)

5 horizontally laid out chart tiles. State persisted per user. Collapsible to 40px chevron strip.

| Tile | Chart | Interaction |
|---|---|---|
| Product Flow | Grouped bar (IG/HY/EM/Fin × Done/Missed) | Click bar → filter grid by product |
| Client Segments | Donut (Tier 1 / Tier 2 / HF / Real Money) | Click segment → filter grid |
| Venue Flow | Heatmap (venue × time of day) | Click cell → filter grid |
| Counterparty | Horizontal bar (top 20 by notional) | Click row → load client panel |
| Market Trend | Multi-line (price × volume) | Date range brush |

**Analytics tile anatomy:**
```tsx
<Tile kind="base">
  <div style={{display:'flex', alignItems:'center', marginBottom:'var(--spacing-03)'}}>
    <span className="unite-type-heading-01">Product Flow</span>
    <Dropdown items={['Today','MTD','YTD']} size="sm" style={{marginLeft:'auto', width:80}} />
    <Button kind="ghost" size="sm" icon="analytics" iconOnly />
    <OverflowMenu items={['Export','Expand','Settings']} />
  </div>
  {/* chart area — 180px */}
  <div style={{height:180}}>{/* recharts BarChart */}</div>
  {/* compact legend */}
  <div style={{display:'flex', gap:'var(--spacing-04)', marginTop:'var(--spacing-03)'}}>
    {segments.map(s => <Tag key={s.label} type={s.colour} size="sm">{s.label}</Tag>)}
  </div>
</Tile>
```

---

### Layer 3 — Operational Grid (AG Grid, 6 saved views)

AG Grid Enterprise with Unite dark theme. Column groups, floating filters, row grouping panel always shown.

**Left border row status colouring** — the key visual differentiator from Pattern 13:
```javascript
getRowStyle: (params) => {
  if (params.data.status === 'OPEN')    return { borderLeft: '3px solid #F59E0B' }; // amber
  if (params.data.status === 'DONE')    return { borderLeft: '3px solid #00C896' }; // teal
  if (params.data.status === 'MISSED')  return { borderLeft: '3px solid #FF4D6D' }; // crimson
  if (params.data.status === 'EXPIRED') return { borderLeft: '3px solid #4B5563', opacity: 0.6 };
}
```

**RFQ Monitor column schema (default view):**
```
[status] | RFQ ID | Time | Client | ISIN | Security | Product | Side | Notional | Price | Spread (bps) | Status | Coverage | Venue | [Actions]
```

**Cell renderers:**
```javascript
// Side: colour pill — BUY teal (#00C896), SELL crimson (#FF4D6D)
// Notional: compact ($1.2M, $450K) — right-aligned, monospace
// Spread: +XX bps — monospace, green if tightening
// Status: chip (OPEN=amber, DONE=teal, MISSED=crimson)
// Actions: [Quote] [Miss] [View] — inline ghost buttons
// Flash on update: 1500ms yellow (#FDE68A → transparent)
```

**Grid config highlights:**
```javascript
{ rowHeight: 32, headerHeight: 36, groupDefaultExpanded: 1,
  animateRows: true, enableRangeSelection: true,
  rowGroupPanelShow: 'always',
  sideBar: { toolPanels: ['columns', 'filters'] },
  statusBar: { /* row count, selected count, aggregation */ },
  defaultColDef: { resizable: true, sortable: true, filter: true, floatingFilter: true }
}
```

**6 saved views** (persistent per user, instantly accessible from toolbar):
```
Live RFQs  |  Done Today  |  Missed Today  |  My Book  |  High Value (>$5M)  |  IG Corporate
```

---

### Layer 4 — Client Intelligence Panel (persistent, 28% width)

Auto-populates on grid row selection. Target: < 200ms. Pre-fetch top 20 visible rows.

**Panel state machine:**
```
EMPTY → (row click) → LOADING → POPULATED → (pin icon) → PINNED
                                POPULATED → (alert detected) → ALERT (amber header)
```

**Panel anatomy:**
```tsx
<div style={{width:'28%', display:'flex', flexDirection:'column', borderLeft:'1px solid var(--border-subtle-01)'}}>
  {/* Sticky header */}
  <div style={{padding:'var(--spacing-04) var(--spacing-05)', borderBottom:'1px solid var(--border-subtle-01)', position:'sticky', top:0, background:'var(--layer-01)', zIndex:1}}>
    <div style={{display:'flex', alignItems:'center', gap:'var(--spacing-03)'}}>
      <Avatar name={client.name} size="sm" />
      <div>
        <p className="unite-type-heading-02">{client.name}</p>
        <Tag type="blue" size="sm">{client.segment}</Tag>
      </div>
      <Button kind="ghost" size="sm" icon="catalog" iconOnly style={{marginLeft:'auto'}} />
    </div>
  </div>
  {/* Scrollable content */}
  <div style={{flex:1, overflowY:'auto', padding:'var(--spacing-04) var(--spacing-05)'}}>
    {/* Revenue summary */}
    <StructuredList rows={[
      { cells: ['MTD Revenue', <span style={{fontFamily:'var(--font-mono)', color:'var(--support-success)'}}>$840K ▲22%</span>] },
      { cells: ['YTD Revenue', <span style={{fontFamily:'var(--font-mono)'}}>$6.2M</span>] },
      { cells: ['Hit Rate', <span style={{fontFamily:'var(--font-mono)'}}>67%</span>] },
      { cells: ['Last Trade', <span style={{fontFamily:'var(--font-mono)'}}>2h ago</span>] },
      { cells: ['Open RFQs', <Badge count={3} />] },
    ]} />
    {/* Product interest bars */}
    {/* Trading history mini-timeline */}
    {/* Opportunity Rail — Layer 5 */}
  </div>
</div>
```

**Relationship score display:**
```
80–100 → Tag type="green"  + "Platinum"
60–79  → Tag type="blue"   + "Gold"
40–59  → Tag type="gray"   + "Silver"
< 40   → Tag type="red"    + "At Risk"
```

---

### Layer 5 — Opportunity Intelligence Rail

Co-located with client panel. Scored signals, sorted by urgency → score → recency.

**Signal types and actions:**

| Signal | Visual | Primary Action |
|---|---|---|
| MISSED_TRADE | Red left border + score badge | "Send Axes" |
| INACTIVITY | Amber left border | "Schedule Call" |
| CROSS_SELL | Blue left border | "Send Research" |
| HIGH_INTENT | Red + pulsing dot | "Call Now" |
| COMPETITOR_WIN | Red left border | "Review Pricing" |
| REVENUE_GAP | Amber left border | "Review Coverage" |

**Rail item anatomy:**
```tsx
<div style={{borderLeft:'3px solid var(--support-error)', padding:'var(--spacing-03) var(--spacing-04)', marginBottom:'var(--spacing-02)', background:'var(--layer-02)'}}>
  <div style={{display:'flex', alignItems:'center', marginBottom:'var(--spacing-02)'}}>
    <span className="unite-type-heading-01">{signal.clientName}</span>
    <Badge count={signal.score} style={{marginLeft:'auto', background:'var(--support-error)'}} />
  </div>
  <p className="unite-type-body-compact-01" style={{color:'var(--text-secondary)', marginBottom:'var(--spacing-03)'}}>{signal.description}</p>
  <Button kind="primary" size="sm">{signal.recommendedAction}</Button>
</div>
```

---

### Credit-specific colour conventions (validated)

| Concept | Colour | Token |
|---|---|---|
| Buy / Done / Positive | Teal `#00C896` | Use `--support-success` approx |
| Sell / Missed / Negative | Crimson `#FF4D6D` | Use `--support-error` approx |
| Open / Alert / Pending | Amber `#F59E0B` | Use `--support-warning` approx |
| OPEN RFQ row border | `#F59E0B` (amber) | — |
| DONE row border | `#00C896` (teal) | — |
| MISSED row border | `#FF4D6D` (crimson) | — |

Note: This is a different convention to FX (bid=green/offer=blue). Credit uses teal/crimson for done/missed, not bid/offer.

---

### Key UX decisions (from validated spec)

**Persistent panel, not drawer** — eliminates 2 clicks per client lookup. Auto-populates on row click, pinnable to prevent override.

**5-layer stack, not tabs** — all layers visible simultaneously. Traders use peripheral vision across layers. Tabs hide data; stacks surface it.

**Opportunities co-located with client panel** — trader sees the signal and its context simultaneously. No context switch needed.

**KPI tiles are entry points, not metrics** — clicking any KPI tile immediately filters the grid to those records.

**Analytics row is collapsible** — traders collapse during peak RFQ volume, expand for morning review or EOD analysis.

---

### What this design generates that Pattern 13 doesn't

1. The **design spec document itself** — 670 lines covering workflows, data models, scoring algorithms, column schemas, UX rationale, and priority recommendations. This is reusable as a template for generating any trading workspace spec.
2. The **opportunity scoring model** — confidence-weighted signals with expiry, urgency bands, and next-best-action framework.
3. The **client intelligence data model** — full entity with revenue metrics, trading profile, activity signals, and intelligence flags.
4. The **relationship score algorithm** — weighted formula combining revenue attainment, trade frequency, hit rate, recency, and product breadth.

---

### Prompt template for Credit Bonds Sales Trader Workspace

```
CONTEXT: Credit bonds sales trading workspace for a sales trader managing client relationships and responding to RFQs across IG, HY, and EM credit.
ROLE: Credit Sales Trader
WORKFLOW: Morning market open scan → analytics review → live RFQ management → client intelligence → opportunity response.

REQUIREMENTS:
Layout: 5-layer intelligence stack
  - Layer 1: KPI Command Bar (always visible, 80px) — 6 tiles, each click filters grid
  - Layer 2: Analytics Row (collapsible, 240px) — 5 chart tiles
  - Layer 3: AG Grid (72% width, flex) — 6 saved views, left border row status colouring
  - Layer 4: Client Intelligence Panel (28% width, persistent) — auto-populates on row click
  - Layer 5: Opportunity Rail (bottom of panel) — scored signals with one-click actions

KPI tiles: Done Trades, Missed Trades, Done Notional, Missed Notional, Buy/Sell Ratio, Revenue
Analytics tiles: Product Flow (bar), Client Segments (donut), Venue Flow (heatmap), Counterparty (horizontal bar), Market Trend (line)

Grid columns (RFQ Monitor): RFQ ID, Time, Client, ISIN, Security, Product chip, Side (BUY teal/SELL crimson), Notional, Price, Spread (bps), Status chip, Coverage, Venue, Actions
Row borders: OPEN=amber, DONE=teal, MISSED=crimson, EXPIRED=gray+opacity

Client panel: Avatar + name + segment tag | Revenue (MTD/YTD + delta) | Product interest bars | Trading history | Alerts | Relationship score (Platinum/Gold/Silver/At Risk)
Opportunity rail: MISSED_TRADE, INACTIVITY, CROSS_SELL, HIGH_INTENT, COMPETITOR_WIN, REVENUE_GAP — each with score badge and one-click action button

Colour conventions: BUY/DONE=teal (#00C896), SELL/MISSED=crimson (#FF4D6D), OPEN/ALERT=amber (#F59E0B)
All prices and notionals: IBM Plex Mono
Theme: g100 dark

OUTPUT: rationale + spec + React TSX (or self-contained HTML)
```

---

## Pattern 15 — Order Ticket / Trade Confirmation Modal

**Seen in:** Unite FX Spot Workspace (Pattern 13 — SELL/RFQ/BUY tile actions), Credit Bonds Sales Trader Workspace (Pattern 14 — Quote grid action), Unite Trading Workspace UI Kit  
**Use for:** Any asset class order entry — spot FX, forwards, bonds, equities, derivatives  
**Used in:** Pattern 13 (tile BUY/SELL actions), Pattern 14 (Quote/Miss grid row actions), Pattern 10 (order initiation from P&L panel)  
**Related:** Pattern 16 (RFQ queue feeds into this ticket), Pattern 04 (blotter receives confirmed orders)

**What it looks like:** A centred modal overlaying the workspace in four sequential states:
1. **Entry** — instrument pre-populated from calling context, editable side/quantity/price fields, "Review order" button
2. **Confirmation** — read-only StructuredList summary before commitment, Confirm + Back buttons
3. **Submitted** — spinner + "Sending to execution…", auto-advances on ExecutionReport (FIX 35=8)
4. **Terminal** — Filled (InlineNotification success) or Rejected (InlineNotification error + rejection reason)

**Unite mapping:**
```tsx
type OrderState = 'entry' | 'confirm' | 'submitted' | 'filled' | 'rejected';

const OrderTicketModal: React.FC<{ open: boolean; instrument: string; onClose: () => void }> = ({
  open, instrument, onClose,
}) => {
  const [state, setState]   = useState<OrderState>('entry');
  const [form, setForm]     = useState({ side: 'Buy', quantity: '', orderType: 'Market', limitPrice: '', account: 'Spot Trading — Main' });
  const [orderRef, setOrderRef] = useState('');
  const [fillPrice, setFillPrice] = useState('');

  const submit = async () => {
    setState('submitted');
    try {
      const { ref } = await api.placeOrder(form);
      setOrderRef(ref);
      // Terminal state arrives via WebSocket ExecutionReport (FIX 35=8) — handled in useEffect
    } catch { setState('rejected'); }
  };

  const modalTitle: Record<OrderState, string> = {
    entry:     'New Order',
    confirm:   'Confirm Order',
    submitted: 'Order Submitted',
    filled:    'Order Filled',
    rejected:  'Order Rejected',
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      size="sm"
      title={modalTitle[state]}
      label={instrument}
      primaryText={state === 'entry' ? 'Review order' : state === 'confirm' ? 'Submit order' : undefined}
      secondaryText={state === 'entry' || state === 'confirm' ? 'Cancel' : undefined}
      onPrimary={state === 'entry' ? () => setState('confirm') : submit}
      danger={state === 'confirm' && form.side === 'Sell'}
    >
      {state === 'entry' && (
        <>
          <fieldset style={{ border: 'none', padding: 0, marginBottom: 'var(--spacing-05)' }}>
            <legend className="unite-type-label-01" style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-02)' }}>Side</legend>
            <div style={{ display: 'flex', gap: 'var(--spacing-02)' }}>
              {['Buy', 'Sell'].map(s => (
                <Button
                  key={s}
                  kind={form.side === s ? (s === 'Sell' ? 'danger' : 'primary') : 'secondary'}
                  size="md"
                  onClick={() => setForm(f => ({ ...f, side: s }))}
                >{s}</Button>
              ))}
            </div>
          </fieldset>
          <NumberInput
            label="Quantity"
            min={0} step={1_000_000} value={form.quantity}
            onChange={v => setForm(f => ({ ...f, quantity: String(v) }))}
          />
          <Dropdown
            label="Order type" items={['Market', 'Limit', 'Stop']} selectedItem={form.orderType}
            onChange={v => setForm(f => ({ ...f, orderType: v }))} size="md"
            style={{ marginTop: 'var(--spacing-04)' }}
          />
          {form.orderType !== 'Market' && (
            <TextInput
              label={form.orderType === 'Stop' ? 'Stop price' : 'Limit price'}
              value={form.limitPrice}
              onChange={e => setForm(f => ({ ...f, limitPrice: e.target.value }))}
              style={{ marginTop: 'var(--spacing-04)', fontFamily: 'var(--font-mono)' }}
            />
          )}
          <Select label="Account" style={{ marginTop: 'var(--spacing-04)' }}>
            <option>Spot Trading — Main</option>
            <option>Spot Trading — Hedge</option>
          </Select>
        </>
      )}

      {state === 'confirm' && (
        <StructuredList
          border={false}
          rows={[
            { cells: ['Instrument', <span style={{ fontFamily: 'var(--font-mono)' }}>{instrument}</span>] },
            { cells: ['Side',       <Tag type={form.side === 'Buy' ? 'green' : 'red'}>{form.side}</Tag>] },
            { cells: ['Quantity',   <span style={{ fontFamily: 'var(--font-mono)' }}>{Number(form.quantity).toLocaleString('en-GB')}</span>] },
            { cells: ['Order type', form.orderType] },
            ...(form.orderType !== 'Market'
              ? [{ cells: [form.orderType === 'Stop' ? 'Stop price' : 'Limit price', <span style={{ fontFamily: 'var(--font-mono)' }}>{form.limitPrice}</span>] }]
              : []),
            { cells: ['Account',    form.account] },
            { cells: ['Settlement', 'T+2 · ' + fmt.date(addBusinessDays(new Date(), 2))] },
          ]}
        />
      )}

      {state === 'submitted' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-05)', padding: 'var(--spacing-07) 0' }}>
          <Loading description="Submitting order…" />
          <p className="unite-type-body-compact-01" style={{ color: 'var(--text-secondary)' }}>Sending to execution…</p>
        </div>
      )}

      {state === 'filled' && (
        <InlineNotification
          kind="success" title="Order filled"
          subtitle={`Ref: ${orderRef} · Fill price: ${fillPrice} · ${fmt.ts(new Date())} BST`}
        />
      )}

      {state === 'rejected' && (
        <InlineNotification
          kind="error" title="Order rejected"
          subtitle={`Ref: ${orderRef} · Reason: Insufficient margin for this position size.`}
        />
      )}
    </Modal>
  );
};
```

**Prompt template:**
```
CONTEXT: [Asset class] order entry for a [Trader / Sales Trader / Portfolio Manager].
ROLE: [Role]
WORKFLOW: User clicks [Buy/Sell/Quote] → enters order parameters → reviews summary → confirms → receives fill or rejection notification.
REQUIREMENTS:
  - Modal: 4 states — Entry (form), Confirm (read-only summary), Submitted (spinner), Terminal (filled / rejected)
  - Entry: Side toggle (Buy=primary blue, Sell=danger red), Quantity (NumberInput), Order type dropdown (Market/Limit/Stop), conditional Limit/Stop price TextInput, Account selector
  - Confirm: StructuredList — all fields read-only, settlement date shown (T+2 bonds/equities, T+1 FX)
  - Submitted: Loading spinner, no dismiss until terminal state arrives via execution feed
  - Terminal: InlineNotification kind="success" for fills (with fill price + timestamp BST); kind="error" for rejects (with rejection reason)
  - Pre-populate instrument and default side from calling context (tile click, RFQ queue, grid row)
  - Keyboard: Enter advances at each stage, Escape cancels, Tab navigates fields
  - danger={true} on Modal when side = Sell at the Confirm stage
  - Theme: g100 dark
OUTPUT: rationale + spec + React TSX
```

---

## Pattern 16 — RFQ Queue with Countdown Timers

**Seen in:** EBS Trade (response deadline display), referenced in Trader/Dealer persona profile (§04 of intelligence context); present in Pattern 13 Order Management sidebar  
**Use for:** Unanswered client RFQs with hard response deadlines — FX (30–60s), Credit/Fixed Income (2–5 min), Rates  
**Used in:** Pattern 13 (Order Management sidebar — active RFQs section), Pattern 14 (client panel Open RFQs badge count)  
**Related:** Pattern 15 (Quote action opens order ticket pre-populated), Pattern 04 (completed RFQs flow into blotter history)

**What it looks like:** A compact card stack in a right sidebar or dedicated panel. Each card: countdown timer (seconds remaining) + draining progress bar + client name + instrument + side + notional. Cards sorted by time remaining, most urgent first. Timer turns amber at ≤30s, red at ≤10s with a slow pulse. Quote and Miss actions inline. Expired cards collapse and dim. An open-count Badge in the panel header gives peripheral visibility from anywhere in the workspace.

**Unite mapping:**
```tsx
interface RFQ {
  id: string; client: string; instrument: string;
  side: 'Buy' | 'Sell'; notional: number;
  createdAt: number; expiresAt: number;   // ms timestamps
  status: 'open' | 'quoted' | 'expired' | 'missed';
}

const RFQCard: React.FC<{ rfq: RFQ; onQuote: (id: string) => void; onMiss: (id: string) => void }> = ({
  rfq, onQuote, onMiss,
}) => {
  const [remaining, setRemaining] = useState(rfq.expiresAt - Date.now());

  useEffect(() => {
    const iv = setInterval(() => {
      const r = rfq.expiresAt - Date.now();
      setRemaining(r);
      if (r <= 0) clearInterval(iv);
    }, 250);
    return () => clearInterval(iv);
  }, [rfq.expiresAt]);

  const seconds  = Math.max(0, Math.ceil(remaining / 1000));
  const totalMs  = rfq.expiresAt - rfq.createdAt;
  const pct      = Math.max(0, Math.min(1, remaining / totalMs));
  const isUrgent = seconds <= 10 && seconds > 0;
  const isExpired = seconds === 0;

  const borderColour = isExpired ? 'var(--border-subtle-01)'
                     : isUrgent  ? 'var(--support-error)'
                     : remaining <= 30_000 ? 'var(--support-warning)'
                     :                       'var(--border-subtle-01)';

  return (
    <div style={{
      borderLeft: `3px solid ${borderColour}`,
      background: 'var(--layer-02)',
      padding: 'var(--spacing-04)',
      marginBottom: 'var(--spacing-02)',
      opacity: isExpired ? 0.45 : 1,
      animation: isUrgent ? 'rfq-pulse 1.2s ease-in-out infinite' : 'none',
    }}>
      {/* Header: client + countdown */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 'var(--spacing-02)' }}>
        <span className="unite-type-heading-01" style={{ flex: 1 }}>{rfq.client}</span>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--type-label-01-size)',
          fontWeight: isUrgent || remaining <= 30_000 ? 700 : 400,
          color: isUrgent ? 'var(--support-error)' : remaining <= 30_000 ? 'var(--support-warning)' : 'var(--text-secondary)',
          minWidth: 32, textAlign: 'right',
        }}>
          {isExpired ? '—' : `${seconds}s`}
        </span>
      </div>

      {/* Countdown bar */}
      <div style={{ height: 2, background: 'var(--layer-03)', marginBottom: 'var(--spacing-03)', overflow: 'hidden' }}>
        <div style={{
          height: '100%',
          width: `${pct * 100}%`,
          background: isUrgent ? 'var(--support-error)' : remaining <= 30_000 ? 'var(--support-warning)' : 'var(--support-info)',
          transition: 'width 0.25s linear, background 0.3s',
        }} />
      </div>

      {/* Instrument + side + notional */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-03)', marginBottom: 'var(--spacing-03)' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600 }}>{rfq.instrument}</span>
        <Tag type={rfq.side === 'Buy' ? 'green' : 'red'} size="sm">{rfq.side}</Tag>
        <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', fontSize: 'var(--type-label-01-size)', marginLeft: 'auto' }}>
          {abbreviateMoney(rfq.notional)}
        </span>
      </div>

      {/* Actions */}
      {!isExpired && rfq.status === 'open' ? (
        <div style={{ display: 'flex', gap: 'var(--spacing-02)' }}>
          <Button kind="primary" size="sm" style={{ flex: 1 }} onClick={() => onQuote(rfq.id)}>Quote</Button>
          <Button kind="danger-ghost" size="sm" onClick={() => onMiss(rfq.id)}>Miss</Button>
        </div>
      ) : (
        <Tag type="gray" size="sm">{rfq.status === 'quoted' ? 'Quoted' : rfq.status === 'missed' ? 'Missed' : 'Expired'}</Tag>
      )}
    </div>
  );
};

// Pulse CSS: @keyframes rfq-pulse { 0%,100% { background: var(--layer-02); } 50% { background: rgba(250,77,86,0.08); } }

const RFQQueue: React.FC<{ rfqs: RFQ[]; onQuote: (id: string) => void; onMiss: (id: string) => void }> = ({
  rfqs, onQuote, onMiss,
}) => {
  const open    = [...rfqs].filter(r => r.status === 'open').sort((a, b) => a.expiresAt - b.expiresAt);
  const history = [...rfqs].filter(r => r.status !== 'open').sort((a, b) => b.expiresAt - a.expiresAt).slice(0, 5);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ padding: 'var(--spacing-04) var(--spacing-05)', borderBottom: '1px solid var(--border-subtle-01)', display: 'flex', alignItems: 'center' }}>
        <span className="unite-type-heading-01" style={{ flex: 1 }}>Live RFQs</span>
        <Badge count={open.length} />
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: 'var(--spacing-04)' }}>
        {open.length === 0 && (
          <p className="unite-type-body-compact-01" style={{ color: 'var(--text-secondary)', textAlign: 'center', marginTop: 'var(--spacing-07)' }}>
            No open RFQs
          </p>
        )}
        {open.map(r => <RFQCard key={r.id} rfq={r} onQuote={onQuote} onMiss={onMiss} />)}
        {history.length > 0 && (
          <>
            <p className="unite-type-label-01" style={{ color: 'var(--text-secondary)', margin: 'var(--spacing-04) 0 var(--spacing-02)', letterSpacing: '0.08em' }}>
              RECENT
            </p>
            {history.map(r => <RFQCard key={r.id} rfq={r} onQuote={onQuote} onMiss={onMiss} />)}
          </>
        )}
      </div>
    </div>
  );
};
```

**Prompt template:**
```
CONTEXT: RFQ response queue for a [FX / Credit / Rates] dealer receiving live client enquiries.
ROLE: Trader / Sales Trader
WORKFLOW: Client RFQ arrives → card appears at top of queue sorted by urgency → trader quotes or misses before timer expires → completed cards move to RECENT section.
REQUIREMENTS:
  - Card stack sorted by time remaining (soonest expiry first), re-sorted on each tick
  - Each card: client name, instrument (mono bold), side Tag (Buy=green/Sell=red), notional (abbreviated mono), countdown timer (seconds), draining progress bar
  - Timer colours: normal = info blue, ≤30s = warning amber, ≤10s = error red + pulse animation
  - Actions: [Quote] primary full-width → opens Pattern 15 order ticket pre-populated; [Miss] danger-ghost
  - Post-action: card shows Tagged status (Quoted / Missed / Expired), no interactive buttons
  - RECENT section: last 5 completed/expired cards shown dimmed below a label divider
  - Panel header: "Live RFQs" label + Badge showing open count
  - Timeout thresholds passed as props (not hardcoded): FX default 60s, Credit default 300s
  - Timer updates every 250ms for smooth drain; debounce re-sorts to every 1s to avoid layout thrash
  - prefers-reduced-motion: disable pulse animation
  - Theme: g100 dark
OUTPUT: rationale + spec + React TSX
```

---

## Pattern 17 — OHLC Candlestick + Volume Chart Panel

**Seen in:** Referenced in §10 (ECharts section) of intelligence context; standard in Bloomberg EMSX, EBS Trade analytics, ICAP FUSION Equities view; simplified variant in Pattern 13 (Analytics panel sparkline)  
**Use for:** Intraday and multi-day price analysis — equities, FX, bonds, futures, any OHLC data  
**Used in:** Pattern 13 (Analytics panel — replace sparkline with this for full chart view), Pattern 14 (Market Trend analytics tile)  
**Related:** Pattern 05 (depth ladder as companion right-panel), Pattern 01 (live price tile as the entry point), Pattern 10 (P&L chart is a line-only variant of this pattern)

**What it looks like:** Two vertically stacked ECharts areas sharing an x-axis. Top (62%): OHLC candlesticks — green body for up bars, red for down. Bottom (26%): volume histogram colour-matched to each candle. Header strip: instrument + current close (large, coloured) + day % change + day High/Low. ContentSwitcher to toggle Candle / Line / Area views. DataZoom slider below for time range selection, defaulting to the current session.

**Unite mapping:**
```tsx
// Requires: echarts/core + CandlestickChart + BarChart + LineChart + GridComponent
// + TooltipComponent + DataZoomComponent + CanvasRenderer (see §15.3 for tree-shaken import)

interface OHLCBar { date: string; open: number; high: number; low: number; close: number; volume: number; }

const CandlestickPanel: React.FC<{ data: OHLCBar[]; instrument: string }> = ({ data, instrument }) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const [view, setView]   = useState(0); // 0=Candle 1=Line 2=Area
  const chartInst = useRef<echarts.ECharts | null>(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current!, null, { renderer: 'canvas' });
    chartInst.current = chart;
    const dates   = data.map(d => d.date);
    const candles = data.map(d => [d.open, d.close, d.low, d.high]);
    const volumes = data.map(d => d.volume);
    const closes  = data.map(d => d.close);

    chart.setOption({
      backgroundColor: 'transparent',
      animation: !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      tooltip: {
        trigger: 'axis', axisPointer: { type: 'cross' },
        backgroundColor: 'var(--layer-02)', borderColor: 'var(--border-subtle-01)',
        textStyle: { color: 'var(--text-primary)', fontFamily: 'IBM Plex Mono', fontSize: 12 },
      },
      axisPointer: { link: [{ xAxisIndex: 'all' }] },
      grid: [
        { top: 8,    left: 64, right: 12, height: '60%' },
        { top: '74%', left: 64, right: 12, bottom: 40 },
      ],
      xAxis: [
        { type: 'category', data: dates, gridIndex: 0,
          axisLabel: { show: false }, axisLine: { lineStyle: { color: 'var(--border-subtle-01)' } }, splitLine: { show: false } },
        { type: 'category', data: dates, gridIndex: 1,
          axisLabel: { color: '#a8a8a8', fontFamily: 'IBM Plex Mono', fontSize: 11 },
          axisLine: { lineStyle: { color: 'var(--border-subtle-01)' } }, splitLine: { show: false } },
      ],
      yAxis: [
        { scale: true, gridIndex: 0,
          splitLine: { lineStyle: { color: 'var(--border-subtle-01)', type: 'dashed' } },
          axisLabel: { color: '#a8a8a8', fontFamily: 'IBM Plex Mono', fontSize: 11 } },
        { scale: true, gridIndex: 1, splitNumber: 2,
          axisLabel: { color: '#a8a8a8', fontFamily: 'IBM Plex Mono', fontSize: 11,
            formatter: (v: number) => v >= 1e6 ? `${(v / 1e6).toFixed(1)}M` : v >= 1e3 ? `${(v / 1e3).toFixed(0)}K` : String(v) },
          splitLine: { show: false } },
      ],
      dataZoom: [
        { type: 'inside',  xAxisIndex: [0, 1], start: 60, end: 100 },
        { type: 'slider',  xAxisIndex: [0, 1], start: 60, end: 100, height: 24, bottom: 8,
          fillerColor: 'rgba(69,137,255,0.1)', borderColor: 'var(--border-subtle-01)',
          textStyle: { color: '#a8a8a8', fontFamily: 'IBM Plex Mono', fontSize: 11 } },
      ],
      series: view === 0 ? [
        { name: 'Price', type: 'candlestick', xAxisIndex: 0, yAxisIndex: 0, data: candles,
          itemStyle: { color: '#42be65', color0: '#fa4d56', borderColor: '#42be65', borderColor0: '#fa4d56' } },
        { name: 'Volume', type: 'bar', xAxisIndex: 1, yAxisIndex: 1,
          data: volumes.map((v, i) => ({
            value: v,
            itemStyle: { color: data[i].close >= data[i].open ? 'rgba(66,190,101,0.55)' : 'rgba(250,77,86,0.55)' },
          })) },
      ] : [
        { name: 'Price', type: 'line', xAxisIndex: 0, yAxisIndex: 0, data: closes, showSymbol: false,
          lineStyle: { color: '#4589ff', width: 1.5 },
          areaStyle: view === 2
            ? { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [
                  { offset: 0, color: 'rgba(69,137,255,0.28)' },
                  { offset: 1, color: 'rgba(69,137,255,0)'    },
                ] } }
            : undefined },
        { name: 'Volume', type: 'bar', xAxisIndex: 1, yAxisIndex: 1,
          data: volumes.map(v => ({ value: v, itemStyle: { color: 'rgba(69,137,255,0.4)' } })) },
      ],
    });

    const resize = () => chart.resize();
    window.addEventListener('resize', resize);
    return () => { window.removeEventListener('resize', resize); chart.dispose(); };
  }, [data, view]);

  const latest = data[data.length - 1];
  const dayHigh = Math.max(...data.map(d => d.high));
  const dayLow  = Math.min(...data.map(d => d.low));
  const dayPct  = ((latest.close - data[0].open) / data[0].open) * 100;

  return (
    <Tile kind="base" style={{ padding: 0, display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Header */}
      <div style={{ padding: 'var(--spacing-04) var(--spacing-05)', borderBottom: '1px solid var(--border-subtle-01)', display: 'flex', alignItems: 'center', gap: 'var(--spacing-05)', flexWrap: 'wrap' }}>
        <span className="unite-type-heading-02">{instrument}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--type-heading-03-size)', color: dayPct >= 0 ? 'var(--support-success)' : 'var(--support-error)' }}>
          {latest.close.toFixed(4)}
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--type-label-01-size)', color: dayPct >= 0 ? 'var(--support-success)' : 'var(--support-error)' }}>
          {dayPct >= 0 ? '+' : ''}{dayPct.toFixed(2)}%
        </span>
        <span className="unite-type-label-01" style={{ color: 'var(--text-secondary)', marginLeft: 'auto' }}>
          H <span style={{ fontFamily: 'var(--font-mono)' }}>{dayHigh.toFixed(4)}</span>
          {'  '}L <span style={{ fontFamily: 'var(--font-mono)' }}>{dayLow.toFixed(4)}</span>
        </span>
        <ContentSwitcher options={['Candle', 'Line', 'Area']} selectedIndex={view} onChange={i => setView(i)} />
      </div>
      {/* Chart */}
      <div
        ref={chartRef} style={{ flex: 1, minHeight: 300 }}
        role="img"
        aria-label={`${instrument} price chart. Close: ${latest.close.toFixed(4)}. Day range: ${dayLow.toFixed(4)} – ${dayHigh.toFixed(4)}.`}
      />
    </Tile>
  );
};
```

**Prompt template:**
```
CONTEXT: Intraday price analytics panel for a [FX / Equity / Fixed Income] trading workspace.
ROLE: Trader / Analyst
WORKFLOW: Examine intraday price action and volume to inform trade sizing and timing; zoom into specific time windows; toggle chart type.
REQUIREMENTS:
  - Two stacked chart areas (shared x-axis): price top (60% height) + volume histogram bottom (26%)
  - Candlestick: up bar = #42be65 (green), down bar = #fa4d56 (red) — FX/Rates colour convention
  - Volume bars: colour-matched to corresponding candle at 55% opacity
  - Header: instrument name, current close (large mono, coloured vs day open), day % change, day High / Low labels
  - ContentSwitcher: Candle / Line / Area — same volume chart below all three
  - DataZoom slider: scrub to zoom time range; default to last 40% of data (morning open → now)
  - Tooltip: O / H / L / C in monospace + volume on hover; shared crosshair across both charts
  - Axis labels: IBM Plex Mono, secondary colour
  - Transparent tile background — inherits workspace layer colour
  - prefers-reduced-motion: disable ECharts animation
  - Accessibility: role="img" + aria-label on chart container; ContentSwitcher offers Table fallback
  - Theme: g100 dark
OUTPUT: rationale + spec + React TSX using ECharts
```

---

## Pattern 18 — Risk / Margin Utilisation Tile

**Seen in:** Referenced in Risk Officer persona profile (VaR vs limit bars) and Broker/Prime Broker persona profile (margin utilisation progress) in §04 of intelligence context; limit bars visible in P&L Insight workspace  
**Use for:** Any limit/headroom display — VaR vs limit, margin utilisation %, mandate compliance, credit line usage, DV01 headroom  
**Used in:** Pattern 19 (Portfolio Manager — mandate compliance panel), Pattern 20 (Risk Officer — desk-level VaR utilisation row)  
**Related:** Pattern 09 (exception monitoring KPI row is a simpler non-bar variant), Pattern 10 (desk P&L uses this tile format without the bar)

**What it looks like:** A tile with a label, the utilisation % as the primary value (large, coloured), a current/limit sub-label, and a horizontal ProgressBar with a visible 80% threshold marker. Three states: safe (green, < 80%), warning (amber, 80–99%), breach (red, ≥ 100%) — each with a status Tag. Optional delta vs prior period. Designed to sit in a horizontal row of 4–6 for simultaneous multi-constraint scanning.

**Unite mapping:**
```tsx
type RiskLevel = 'safe' | 'warning' | 'breach';

interface UtilisationTileProps {
  label: string;
  current: number;
  limit: number;
  unit?: string;          // display unit suffix — 'GBP' | 'USD' | '%' | 'bps'
  delta?: number;         // pp change vs prior period (positive = worsening)
  deltaLabel?: string;    // default 'vs yesterday'
  warningPct?: number;    // threshold for amber — default 0.80
  onDrillDown?: () => void;
}

const UtilisationTile: React.FC<UtilisationTileProps> = ({
  label, current, limit, unit = 'GBP', delta, deltaLabel = 'vs yesterday',
  warningPct = 0.80, onDrillDown,
}) => {
  const utilisationPct = current / limit;
  const barValue       = Math.min(utilisationPct * 100, 100);

  const level: RiskLevel = utilisationPct >= 1.0 ? 'breach' : utilisationPct >= warningPct ? 'warning' : 'safe';

  const statusColour: Record<RiskLevel, string> = {
    safe:    'var(--support-success)',
    warning: 'var(--support-warning)',
    breach:  'var(--support-error)',
  };
  const tagType: Record<RiskLevel, 'green' | 'yellow' | 'red'> = {
    safe: 'green', warning: 'yellow', breach: 'red',
  };

  const fmtValue = (v: number) =>
    unit === 'bps' ? `${Math.round(v)} bps`
    : unit === '%'  ? `${(v * 100).toFixed(1)}%`
    :                 abbreviateMoney(v, unit);

  return (
    <Tile kind={onDrillDown ? 'clickable' : 'base'} onClick={onDrillDown} style={{ padding: 'var(--spacing-05)' }}>
      {/* Label + status tag */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 'var(--spacing-03)' }}>
        <p className="unite-type-label-01" style={{ color: 'var(--text-secondary)', flex: 1 }}>{label.toUpperCase()}</p>
        {level !== 'safe' && (
          <Tag type={tagType[level]} size="sm" icon={level === 'breach' ? 'error-filled' : 'warning-filled'}>
            {level === 'breach' ? 'BREACH' : 'WARNING'}
          </Tag>
        )}
      </div>

      {/* Utilisation % — primary value */}
      <p style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--type-heading-04-size)',
        color: statusColour[level],
        marginBottom: 'var(--spacing-01)',
      }}>
        {(utilisationPct * 100).toFixed(1)}%
      </p>

      {/* Current vs limit */}
      <p className="unite-type-label-01" style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-04)' }}>
        <span style={{ fontFamily: 'var(--font-mono)' }}>{fmtValue(current)}</span>
        {' / '}
        <span style={{ fontFamily: 'var(--font-mono)' }}>{fmtValue(limit)}</span>
        {' limit'}
      </p>

      {/* Progress bar + 80% threshold marker */}
      <div style={{ position: 'relative' }}>
        <ProgressBar
          value={barValue} max={100}
          label={`${label} utilisation`}
          helperText={
            level === 'breach'
              ? `Limit exceeded by ${((utilisationPct - 1) * 100).toFixed(1)}pp`
              : `${(100 - barValue).toFixed(1)}% headroom remaining`
          }
          status={level === 'breach' ? 'error' : 'active'}
        />
        {/* 80% marker line */}
        <div style={{
          position: 'absolute',
          left: `${warningPct * 100}%`,
          top: 0, bottom: 18,
          width: 1,
          background: 'var(--support-warning)',
          opacity: 0.7,
          pointerEvents: 'none',
        }} />
      </div>

      {/* Delta */}
      {delta !== undefined && (
        <p className="unite-type-label-01" style={{
          color: delta > 0 ? 'var(--support-error)' : 'var(--support-success)',
          marginTop: 'var(--spacing-03)',
        }}>
          {delta > 0 ? '▲' : '▼'} {Math.abs(delta * 100).toFixed(1)}pp {deltaLabel}
        </p>
      )}
    </Tile>
  );
};

// Typical row usage (mandate compliance / VaR dashboard)
const UtilisationRow: React.FC<{ constraints: UtilisationTileProps[] }> = ({ constraints }) => (
  <div style={{ display: 'grid', gridTemplateColumns: `repeat(${constraints.length}, 1fr)`, gap: 'var(--spacing-04)' }}>
    {constraints.map(c => <UtilisationTile key={c.label} {...c} />)}
  </div>
);
```

**Prompt template:**
```
CONTEXT: Limit / headroom monitoring row for a [Risk Officer / Portfolio Manager / Prime Broker].
ROLE: [Role]
WORKFLOW: Scan all active limits at a glance each morning; identify amber/red tiles; click to drill into breakdown.
REQUIREMENTS:
  - Row of utilisation tiles: one per constraint (e.g. VaR, DV01, Single-name concentration, Cash %, Credit line)
  - Each tile: label (all-caps label-01), utilisation % (large mono, coloured), current / limit in abbreviated currency, ProgressBar
  - Threshold states: < 80% = green (safe), 80–99% = amber + WARNING tag + warning-filled icon, ≥ 100% = red + BREACH tag + error-filled icon + ProgressBar status="error"
  - 80% warning marker line drawn on the bar at correct position
  - Delta vs prior period shown below bar (positive delta = worsening = error colour; negative = improving = success colour)
  - InlineNotification kind="error" appears above the row when any tile is in breach state
  - Clicking a tile triggers drill-down (right panel detail or Modal with instrument/desk breakdown)
  - Theme: g100 dark
OUTPUT: rationale + spec + React TSX
```

---

## Workspace Blueprints (continued)

---

## Pattern 19 — Portfolio Manager Workspace ⚠ DRAFT

**Source:** Persona profile §04 of intelligence context; §04.5 2-Panel Analytics Workspace layout archetype  
**Status:** Draft — not yet validated with working prototype. Use as a starting point; validate before treating as ground truth.  
**Use for:** Buy-side portfolio management — performance review, attribution, mandate compliance, rebalancing order prep

---

### What makes this design architecturally different from Patterns 13 and 14

Patterns 13 and 14 are **real-time reactive** — the data pushes, the trader responds. Pattern 19 is **analytical and deliberate** — the PM reviews, decides, then acts. This changes everything:

- No streaming prices as a primary surface — P&L updates at 2fps max, not tick-by-tick
- The workflow moves **top-down** (total → attribution → trade), not sideways (blotter ↔ client)
- **Attribution is the primary navigation mechanism** — clicking a factor drills to sector; clicking a sector drills to stock. This replaces the row-click-opens-panel pattern from P14.
- Order prep sits at the **bottom**, subordinate to analysis — PMs think before they trade

---

### 2-Panel Analytics Layout

```
┌────────────────────────────────────────────────────────────────────┐
│  GLOBAL HEADER  (56px) — Unite logo · Portfolio nav · user         │
├─────────────────────┬──────────────────────────────────────────────┤
│                     │                                              │
│  LEFT PANEL 420px   │  RIGHT PANEL (flex)                          │
│                     │                                              │
│  Fund selector      │  ┌────────────────────────────────────────┐  │
│  (list of funds     │  │ Performance Summary Strip (80px)       │  │
│   with mini P&L)    │  │ Daily · MTD · YTD vs benchmark         │  │
│                     │  └────────────────────────────────────────┘  │
│  Date range picker  │  ┌────────────────────────────────────────┐  │
│                     │  │ Attribution Waterfall (240px)          │  │
│  Attribution        │  │ Factor → Sector → Stock drill-down     │  │
│  filter chips       │  └────────────────────────────────────────┘  │
│                     │  ┌──────────────────┬─────────────────────┐  │
│                     │  │ Contributors /   │ Mandate Compliance  │  │
│                     │  │ Detractors table │ (Pattern 18 tiles)  │  │
│                     │  └──────────────────┴─────────────────────┘  │
│                     │  ┌────────────────────────────────────────┐  │
│                     │  │ Order Prep Panel (collapsible)         │  │
│                     │  │ Proposed rebalancing trades            │  │
│                     │  └────────────────────────────────────────┘  │
└─────────────────────┴──────────────────────────────────────────────┘
```

---

### Performance Summary Strip (always visible, 80px)

Six metrics in a horizontal row. No sparklines — the attribution waterfall below provides the time dimension.

```
┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐
│ DAILY RTN  │ │ MTD RETURN │ │ YTD RETURN │ │  VS BENCH  │ │    VaR     │ │    CASH    │
│ +0.42%     │ │  +2.1%     │ │  +8.7%     │ │  +124 bps  │ │  £1.2m     │ │   4.3%     │
│ +£124.5k   │ │  +£650k    │ │  +£2.7m    │ │ vs iBoxx   │ │ 82% limit  │ │ target 5%  │
└────────────┘ └────────────┘ └────────────┘ └────────────┘ └────────────┘ └────────────┘
```

```tsx
// Clickable tiles — clicking a performance metric opens detail drill-down
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 'var(--spacing-03)', padding: 'var(--spacing-04) var(--spacing-05)', borderBottom: '1px solid var(--border-subtle-01)' }}>
  {perfMetrics.map(m => (
    <Tile key={m.label} kind="clickable" onClick={() => setDrillTarget(m.key)} style={{ padding: 'var(--spacing-04)' }}>
      <p className="unite-type-label-01" style={{ color: 'var(--text-secondary)' }}>{m.label}</p>
      <p style={{ fontFamily: 'var(--font-mono)', color: m.value >= 0 ? 'var(--support-success)' : 'var(--support-error)', fontSize: 'var(--type-heading-02-size)' }}>
        {fmt.pnlPct(m.value)}
      </p>
      <p className="unite-type-label-01" style={{ color: 'var(--text-secondary)' }}>{m.subLabel}</p>
    </Tile>
  ))}
</div>
```

---

### Attribution Waterfall (drill-down navigation)

A Carbon Charts grouped bar chart used as the primary navigation surface. Each bar is clickable — clicking a factor bar filters the Contributors/Detractors table and replaces the waterfall with a sector breakdown. Breadcrumb above tracks drill depth.

```tsx
// Attribution levels: 'factor' → 'sector' → 'stock'
const [drillLevel, setDrillLevel] = useState<'factor' | 'sector' | 'stock'>('factor');
const [drillPath,  setDrillPath]  = useState<string[]>([]);

// Carbon Charts BarChartGrouped — bars are clickable via onClick on chart events
<Tile kind="base" style={{ padding: 'var(--spacing-05)' }}>
  <div style={{ display: 'flex', alignItems: 'center', marginBottom: 'var(--spacing-04)' }}>
    <Breadcrumb items={[
      { label: 'Total',  href: '#', onClick: () => { setDrillLevel('factor'); setDrillPath([]); } },
      ...drillPath.map((p, i) => ({ label: p, onClick: () => { setDrillPath(prev => prev.slice(0, i + 1)); setDrillLevel(i === 0 ? 'sector' : 'stock'); } })),
    ]} />
    <Dropdown label="Period" items={['Today', 'MTD', 'YTD', '3M', '1Y']} size="sm" style={{ marginLeft: 'auto', width: 90 }} />
  </div>
  <BarChartGrouped
    data={attributionData}
    options={{
      title: `Attribution — ${drillLevel === 'factor' ? 'By Factor' : drillLevel === 'sector' ? drillPath[0] : drillPath.join(' › ')}`,
      axes: {
        left:   { title: 'Contribution (bps)', mapsTo: 'value', includeZero: true },
        bottom: { mapsTo: 'key', scaleType: 'labels' },
      },
      color: { scale: { Positive: 'var(--support-success)', Negative: 'var(--support-error)' } },
      height: '220px',
    }}
    // ECharts alternative for bar click: use echarts event 'click' on series
  />
</Tile>
```

**Attribution factor categories (standard):**
```
Interest Rate Duration  ·  Credit Spread  ·  Curve  ·  FX  ·  Sector Allocation  ·  Security Selection  ·  Cash Drag
```

---

### Contributors / Detractors Table

Top 5 contributors and top 5 detractors side-by-side. Clicking a row selects the stock and populates a detail panel or opens Pattern 07 (Client 360, adapted for Holdings 360).

```tsx
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-04)' }}>
  {['Contributors', 'Detractors'].map(type => (
    <Tile key={type} kind="base" style={{ padding: 'var(--spacing-05)' }}>
      <p className="unite-type-heading-01" style={{ marginBottom: 'var(--spacing-04)' }}>{type}</p>
      <DataTable
        size="sm"
        headers={[
          { key: 'name',        header: 'Security',  sortable: false },
          { key: 'weight',      header: 'Wgt %',     sortable: true  },
          { key: 'contribution',header: 'Contrib bps',sortable: true  },
          { key: 'dailyReturn', header: 'Day Rtn',   sortable: true  },
        ]}
        rows={contributorsData[type.toLowerCase()].map(r => ({
          ...r,
          weight:       <span style={{ fontFamily: 'var(--font-mono)' }}>{r.weight.toFixed(2)}%</span>,
          contribution: <span style={{ fontFamily: 'var(--font-mono)', color: type === 'Contributors' ? 'var(--support-success)' : 'var(--support-error)' }}>{fmt.bps(r.contribution)}</span>,
          dailyReturn:  <span style={{ fontFamily: 'var(--font-mono)', color: r.dailyReturn >= 0 ? 'var(--support-success)' : 'var(--support-error)' }}>{fmt.pnlPct(r.dailyReturn)}</span>,
        }))}
        selectable
      />
    </Tile>
  ))}
</div>
```

---

### Mandate Compliance Panel (Pattern 18 row)

Uses `<UtilisationRow>` from Pattern 18. One tile per mandate constraint. Clicking any breach tile opens a detail Modal with the instrument-level breakdown contributing to the breach.

```tsx
<UtilisationRow constraints={[
  { label: 'VaR',           current: mandateState.var,     limit: mandateState.varLimit,     unit: 'GBP', delta: mandateState.varDelta },
  { label: 'Concentration', current: mandateState.topName, limit: 0.05,                      unit: '%',   deltaLabel: 'vs limit' },
  { label: 'IG Credit',     current: mandateState.igWt,    limit: mandateState.igLimit,       unit: '%' },
  { label: 'Cash',          current: mandateState.cashWt,  limit: mandateState.cashMax,       unit: '%',   warningPct: 0.9 },
  { label: 'Duration',      current: mandateState.dur,     limit: mandateState.durLimit,      unit: 'bps' },
]} />
```

---

### Order Prep Panel (collapsible)

At the bottom of the right panel. Not a live blotter — it is a staging area for proposed rebalancing trades that haven't been sent to execution yet. Toggle to show/hide to free space for analysis during review phase.

```tsx
<div style={{ borderTop: '1px solid var(--border-subtle-01)' }}>
  <button
    style={{ width: '100%', background: 'none', border: 'none', padding: 'var(--spacing-04) var(--spacing-05)', display: 'flex', alignItems: 'center', cursor: 'pointer', color: 'var(--text-primary)' }}
    onClick={() => setOrderPrepOpen(o => !o)}
    aria-expanded={orderPrepOpen}
  >
    <span className="unite-type-heading-01" style={{ flex: 1 }}>Order Prep</span>
    <Badge count={proposedOrders.length} />
    <Icon name="chevron-down" style={{ transform: orderPrepOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
  </button>
  {orderPrepOpen && (
    <div style={{ padding: '0 var(--spacing-05) var(--spacing-05)' }}>
      <DataTable
        size="sm"
        headers={[
          { key: 'instrument', header: 'Instrument' },
          { key: 'side',       header: 'Side'       },
          { key: 'quantity',   header: 'Quantity'   },
          { key: 'rationale',  header: 'Rationale'  },
          { key: 'compliance', header: 'Pre-trade'  },
          { key: 'actions',    header: ''           },
        ]}
        rows={proposedOrders.map(o => ({
          ...o,
          side:       <Tag type={o.side === 'Buy' ? 'green' : 'red'} size="sm">{o.side}</Tag>,
          quantity:   <span style={{ fontFamily: 'var(--font-mono)' }}>{o.quantity.toLocaleString('en-GB')}</span>,
          compliance: <Tag type={o.complianceStatus === 'Pass' ? 'green' : 'red'} size="sm">{o.complianceStatus}</Tag>,
          actions:    <div style={{ display: 'flex', gap: 'var(--spacing-02)' }}>
                        <Button kind="primary" size="sm" onClick={() => sendToExecution(o.id)}>Send</Button>
                        <Button kind="ghost"   size="sm" onClick={() => removeProposed(o.id)}>Remove</Button>
                      </div>,
        }))}
      />
      <Button kind="primary" size="md" style={{ marginTop: 'var(--spacing-04)' }} disabled={proposedOrders.some(o => o.complianceStatus === 'Fail')}>
        Send all to execution
      </Button>
    </div>
  )}
</div>
```

---

### Left panel — Fund selector

```tsx
<aside style={{ gridArea: 'left', background: 'var(--layer-01)', borderRight: '1px solid var(--border-subtle-01)', display: 'flex', flexDirection: 'column' }}>
  <Search placeholder="Search fund or ISIN…" size="sm" style={{ margin: 'var(--spacing-04)' }} />
  <div style={{ flex: 1, overflowY: 'auto' }}>
    {funds.map(fund => (
      <Tile
        key={fund.id} kind="selectable"
        selected={selectedFund === fund.id}
        onClick={() => setSelectedFund(fund.id)}
        style={{ margin: 'var(--spacing-02) var(--spacing-04)', padding: 'var(--spacing-04)' }}
      >
        <p className="unite-type-heading-01">{fund.name}</p>
        <p className="unite-type-label-01" style={{ color: 'var(--text-secondary)' }}>{fund.benchmark}</p>
        <p style={{ fontFamily: 'var(--font-mono)', color: fund.ytdReturn >= 0 ? 'var(--support-success)' : 'var(--support-error)', marginTop: 'var(--spacing-02)' }}>
          {fmt.pnlPct(fund.ytdReturn)} YTD
        </p>
      </Tile>
    ))}
  </div>
  {/* Date range at bottom of left panel */}
  <div style={{ padding: 'var(--spacing-04)', borderTop: '1px solid var(--border-subtle-01)' }}>
    <DatePicker label="Analysis period" />
  </div>
</aside>
```

---

### Key UX decisions

**Attribution waterfall IS the navigation** — not a summary graphic. Clicking a bar always narrows the view. Breadcrumb tracks the path and enables backtracking. This replaces tabs for a PM — the workflow IS the drill-down.

**Mandate compliance above order prep** — PMs check compliance before proposing trades, not after. Placing Pattern 18 tiles above the Order Prep panel enforces the correct workflow direction in the layout.

**Order prep is collapsible** — during morning attribution review, the PM doesn't want to see pending orders. During order entry phase, the panel expands. The default state should be collapsed at page load.

**Performance summary never scrolls off** — 56px global header + 80px performance strip = 136px pinned at top of right panel. Everything below scrolls.

---

### Prompt template for Portfolio Manager Workspace

```
CONTEXT: Buy-side portfolio manager reviewing overnight performance and preparing rebalancing orders before market open.
ROLE: Portfolio Manager
WORKFLOW: Fund selection → performance summary scan → attribution drill-down (factor → sector → stock) → mandate compliance check → order prep and pre-trade compliance → send to execution.

REQUIREMENTS:
Layout: 2-Panel Analytics Workspace
  - Header: Unite logo, Portfolio nav tabs (Overview / Positions / Orders / Research), user avatar
  - Left panel (420px): fund list (selectable tiles with YTD P&L), search, bottom date picker
  - Right panel (flex): Performance Summary Strip (80px pinned) → Attribution Waterfall (drillable) → Contributors/Detractors (side-by-side tables) → Mandate Compliance row (Pattern 18 tiles) → Order Prep (collapsible bottom panel)

Performance strip: Daily, MTD, YTD returns; vs benchmark (bps); VaR vs limit; Cash weight
Attribution: Carbon Charts grouped bar; clickable bars for drill-down (factor → sector → stock); breadcrumb navigation; period dropdown
Contributors/Detractors: side-by-side DataTable top-5 each; columns: security name, weight %, contribution bps, day return %; selectable rows
Mandate compliance: UtilisationTile row — VaR, Concentration, IG Credit weight, Cash %, Duration — Pattern 18 theming (green/amber/red thresholds)
Order prep: collapsible DataTable of proposed trades; columns: instrument, side, quantity, rationale, pre-trade compliance status (Pass/Fail tag), Send/Remove actions; "Send all" button disabled if any compliance Fail

Colour conventions: positive return = --support-success, negative = --support-error; mandate breach = --support-error + BREACH tag
All numbers: IBM Plex Mono. All returns as % with explicit + / − sign.
Sample data: BlackRock-managed UK equity fund; instruments from LSE equities list (BP.L, HSBA.L, VOD.L, SHEL.L, LLOY.L, RIO.L)
Theme: g100 dark

OUTPUT: rationale + spec + React TSX (or self-contained HTML with simulated data)
```

---

## Pattern 20 — Risk Officer Exception Dashboard ⚠ DRAFT

**Source:** Risk Officer persona profile §04 of intelligence context; §04.5 Exception Queue Workspace layout archetype  
**Status:** Draft — not yet validated with working prototype. Use as a starting point; validate before treating as ground truth.  
**Use for:** Market risk monitoring across trading desks — VaR/limit management, breach escalation, FRTB P&L attribution, Greeks overview

---

### What makes this design different from Pattern 09 (Operations)

Both use the Exception Queue Workspace archetype, but the data and workflows diverge completely:

- Pattern 09 (Operations) is **transaction-level** — each exception is a single trade or settlement instruction
- Pattern 20 (Risk) is **portfolio-level** — each exception is a desk-level metric breach, often spanning thousands of positions
- Resolution in Pattern 09 is **direct action** (update SSI, contact counterparty). Resolution in Pattern 20 is **escalation and approval** — the risk officer calls the desk head; the desk decides whether to reduce or seek override
- FRTB is specific to Pattern 20 — there is no equivalent in Operations

---

### Exception Queue Workspace Layout

```
┌─────────────────────────────────────────────────────────────────────┐
│  GLOBAL HEADER  (56px) — Unite logo · Risk nav · user               │
├───────────────────────────┬─────────────────────────────────────────┤
│                           │                                         │
│  EXCEPTION QUEUE  480px   │  DETAIL PANEL  (flex)                   │
│                           │                                         │
│  ┌─────────────────────┐  │  Tabs: VaR | Greeks | Stress | FRTB    │
│  │ BREACH   FX Spot    │  │                                         │
│  │ VaR  £2.4m / £1.8m │  │  [VaR tab] — selected desk drill-down  │
│  │ 133% · ▲22pp today │  │  Enterprise → Asset class → Desk →      │
│  └─────────────────────┘  │  Instrument breakdown                   │
│  ┌─────────────────────┐  │                                         │
│  │ WARNING  Rates      │  │  Escalation workflow panel:             │
│  │ DV01  £4.1m/£5.0m  │  │  Assign desk head · Add note ·          │
│  │ 82% · within limit │  │  Request override · Mark resolved        │
│  └─────────────────────┘  │                                         │
│  ┌─────────────────────┐  │  Audit trail — all actions              │
│  │ OK       Credit     │  │  timestamped                            │
│  │ VaR  £0.9m / £2.0m │  │                                         │
│  └─────────────────────┘  │                                         │
└───────────────────────────┴─────────────────────────────────────────┘
```

---

### Exception Queue (left panel, 480px)

Sorted by severity: BREACH (red) → WARNING (amber) → OK (green). Never alphabetically.

```tsx
interface DeskException {
  id: string; desk: string; assetClass: string;
  metric: string;           // 'VaR' | 'DV01' | 'CS01' | 'Delta' | 'Vega' | 'FRTB'
  current: number; limit: number;
  unit: string; deltaToday: number;  // pp change vs yesterday
  level: 'breach' | 'warning' | 'ok';
  lastUpdated: Date; escalationStatus: 'none' | 'assigned' | 'override_requested' | 'resolved';
}

const ExceptionQueueItem: React.FC<{ exc: DeskException; selected: boolean; onClick: () => void }> = ({
  exc, selected, onClick,
}) => {
  const utilisationPct = exc.current / exc.limit;
  const borderColour = exc.level === 'breach' ? 'var(--support-error)'
                     : exc.level === 'warning' ? 'var(--support-warning)'
                     :                            'var(--border-subtle-01)';

  return (
    <div
      role="button" tabIndex={0} onClick={onClick}
      style={{
        borderLeft: `4px solid ${borderColour}`,
        background: selected ? 'var(--layer-selected-01)' : 'var(--layer-01)',
        padding: 'var(--spacing-04) var(--spacing-05)',
        borderBottom: '1px solid var(--border-subtle-01)',
        cursor: 'pointer',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 'var(--spacing-02)' }}>
        <Tag
          type={exc.level === 'breach' ? 'red' : exc.level === 'warning' ? 'yellow' : 'green'}
          size="sm" icon={exc.level === 'breach' ? 'error-filled' : exc.level === 'warning' ? 'warning-filled' : undefined}
          style={{ marginRight: 'var(--spacing-03)' }}
        >
          {exc.level.toUpperCase()}
        </Tag>
        <span className="unite-type-heading-01" style={{ flex: 1 }}>{exc.desk}</span>
        {exc.escalationStatus !== 'none' && (
          <Tag type="blue" size="sm">{exc.escalationStatus === 'assigned' ? 'Assigned' : exc.escalationStatus === 'override_requested' ? 'Override req.' : 'Resolved'}</Tag>
        )}
      </div>
      <div style={{ display: 'flex', gap: 'var(--spacing-05)', alignItems: 'baseline' }}>
        <span className="unite-type-label-01" style={{ color: 'var(--text-secondary)' }}>{exc.metric}</span>
        <span style={{ fontFamily: 'var(--font-mono)', color: borderColour }}>
          {(utilisationPct * 100).toFixed(0)}%
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', fontSize: 'var(--type-label-01-size)' }}>
          {abbreviateMoney(exc.current, exc.unit)} / {abbreviateMoney(exc.limit, exc.unit)}
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', color: exc.deltaToday > 0 ? 'var(--support-error)' : 'var(--support-success)', fontSize: 'var(--type-label-01-size)', marginLeft: 'auto' }}>
          {exc.deltaToday > 0 ? '▲' : '▼'}{Math.abs(exc.deltaToday).toFixed(1)}pp
        </span>
      </div>
    </div>
  );
};

const ExceptionQueue: React.FC<{ exceptions: DeskException[]; selectedId: string | null; onSelect: (id: string) => void }> = ({
  exceptions, selectedId, onSelect,
}) => {
  // Sort: breach first, then warning, then ok; within each level by utilisation desc
  const sorted = [...exceptions].sort((a, b) => {
    const levelOrder = { breach: 0, warning: 1, ok: 2 };
    if (levelOrder[a.level] !== levelOrder[b.level]) return levelOrder[a.level] - levelOrder[b.level];
    return (b.current / b.limit) - (a.current / a.limit);
  });

  const breaches = sorted.filter(e => e.level === 'breach');
  const warnings = sorted.filter(e => e.level === 'warning');

  return (
    <aside style={{ width: 480, display: 'flex', flexDirection: 'column', borderRight: '1px solid var(--border-subtle-01)' }}>
      {breaches.length > 0 && (
        <InlineNotification
          kind="error"
          title={`${breaches.length} limit breach${breaches.length > 1 ? 'es' : ''} require action`}
          style={{ margin: 'var(--spacing-04)', marginBottom: 0 }}
        />
      )}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {sorted.map(exc => (
          <ExceptionQueueItem key={exc.id} exc={exc} selected={selectedId === exc.id} onClick={() => onSelect(exc.id)} />
        ))}
      </div>
    </aside>
  );
};
```

---

### Detail Panel — VaR Drill-Down Tab

```tsx
// Four tabs in the right panel: VaR | Greeks | Stress | FRTB
<Tabs tabs={['VaR', 'Greeks', 'Stress', 'FRTB']} selectedIndex={detailTab} onChange={setDetailTab} contained>
  {/* VaR TAB */}
  <div style={{ padding: 'var(--spacing-05)' }}>
    {/* Breadcrumb drill-down */}
    <Breadcrumb items={varDrillPath.map((p, i) => ({ label: p, onClick: () => setVarDrillPath(prev => prev.slice(0, i + 1)) }))} />

    {/* Pattern 18 utilisation tiles — one per sub-desk or instrument group */}
    <UtilisationRow constraints={varBreakdown} style={{ marginTop: 'var(--spacing-05)' }} />

    {/* AG Grid — position-level breakdown */}
    <div style={{ height: 300, marginTop: 'var(--spacing-05)' }}>
      <AgGridReact
        className="ag-theme-alpine-dark unite-grid"
        rowData={varPositions}
        columnDefs={[
          { field: 'instrument', headerName: 'Instrument', pinned: 'left', sortable: true },
          { field: 'varContrib', headerName: 'VaR Contrib', type: 'numericColumn', cellStyle: { fontFamily: 'var(--font-mono)' }, valueFormatter: p => abbreviateMoney(p.value, 'GBP'), sort: 'desc' },
          { field: 'varPct',     headerName: '% of Desk VaR', type: 'numericColumn', cellStyle: { fontFamily: 'var(--font-mono)' }, valueFormatter: p => `${p.value.toFixed(1)}%` },
          { field: 'delta',      headerName: 'Delta', type: 'numericColumn', cellStyle: { fontFamily: 'var(--font-mono)' } },
          { field: 'pnl',        headerName: 'Day P&L', type: 'numericColumn',
            cellStyle: p => ({ fontFamily: 'var(--font-mono)', color: p.value >= 0 ? 'var(--support-success)' : 'var(--support-error)' }),
            valueFormatter: p => fmt.pnl(p.value) },
        ]}
        rowHeight={28} headerHeight={32}
        defaultColDef={{ resizable: true, filter: true }}
      />
    </div>
  </div>
</Tabs>
```

---

### FRTB Attribution Tab

```tsx
{/* FRTB TAB — P&L attribution pass/fail by desk */}
<div style={{ padding: 'var(--spacing-05)' }}>
  <p className="unite-type-body-compact-01" style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-05)' }}>
    FRTB IMA requires daily P&L attribution. A desk fails if RTPL and HPL diverge beyond tolerance on more than 12 of the last 250 days.
  </p>
  <DataTable
    size="sm"
    headers={[
      { key: 'desk',        header: 'Desk',         sortable: true },
      { key: 'rtpl',        header: 'RTPL Today',   sortable: true },
      { key: 'hpl',         header: 'HPL Today',    sortable: true },
      { key: 'gap',         header: 'Gap (bps)',    sortable: true },
      { key: 'status',      header: 'Today',        sortable: false },
      { key: 'exceptions250',header: 'Exceptions / 250', sortable: true },
      { key: 'ima',         header: 'IMA Status',  sortable: false },
    ]}
    rows={frtbData.map(d => ({
      ...d,
      rtpl:          <span style={{ fontFamily: 'var(--font-mono)' }}>{fmt.pnl(d.rtpl)}</span>,
      hpl:           <span style={{ fontFamily: 'var(--font-mono)' }}>{fmt.pnl(d.hpl)}</span>,
      gap:           <span style={{ fontFamily: 'var(--font-mono)', color: Math.abs(d.gap) > 5 ? 'var(--support-error)' : 'var(--text-primary)' }}>{fmt.bps(d.gap)}</span>,
      status:        <Tag type={d.todayPass ? 'green' : 'red'} size="sm">{d.todayPass ? 'Pass' : 'Fail'}</Tag>,
      exceptions250: <span style={{ fontFamily: 'var(--font-mono)', color: d.exceptions250 > 12 ? 'var(--support-error)' : d.exceptions250 > 9 ? 'var(--support-warning)' : 'var(--text-primary)' }}>
                       {d.exceptions250} / 250
                     </span>,
      ima:           <Tag type={d.imaStatus === 'Green' ? 'green' : d.imaStatus === 'Amber' ? 'yellow' : 'red'} size="sm">{d.imaStatus}</Tag>,
    }))}
  />
</div>
```

---

### Escalation Workflow Panel

Below the detail tabs. Inline workflow — no modal needed. Full audit trail visible.

```tsx
<div style={{ borderTop: '1px solid var(--border-subtle-01)', padding: 'var(--spacing-05)' }}>
  <p className="unite-type-heading-01" style={{ marginBottom: 'var(--spacing-04)' }}>Escalation</p>

  {/* Assign */}
  <div style={{ display: 'flex', gap: 'var(--spacing-03)', marginBottom: 'var(--spacing-04)' }}>
    <Dropdown label="Assign to" items={deskHeads} selectedItem={assignee} onChange={setAssignee} size="sm" style={{ flex: 1 }} />
    <Button kind="secondary" size="sm" onClick={assign}>Assign</Button>
  </div>

  {/* Note */}
  <TextArea label="Note" rows={2} value={note} onChange={e => setNote(e.target.value)} style={{ marginBottom: 'var(--spacing-04)' }} />

  {/* Actions */}
  <div style={{ display: 'flex', gap: 'var(--spacing-03)', marginBottom: 'var(--spacing-05)' }}>
    <Button kind="secondary"      size="sm" onClick={requestOverride}>Request override</Button>
    <Button kind="primary"        size="sm" onClick={markResolved}>Mark resolved</Button>
  </div>

  {/* Audit trail */}
  <p className="unite-type-label-01" style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-03)', letterSpacing: '0.08em' }}>AUDIT TRAIL</p>
  <StructuredList border={false} rows={auditTrail.map(a => ({
    cells: [
      <span className="unite-type-label-01" style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>{fmt.ts(a.timestamp)} BST</span>,
      <div>
        <span className="unite-type-body-compact-01">{a.action}</span>
        <span className="unite-type-label-01" style={{ color: 'var(--text-secondary)' }}> · {a.user}</span>
        {a.note && <p className="unite-type-label-01" style={{ color: 'var(--text-secondary)', marginTop: 2 }}>{a.note}</p>}
      </div>,
    ],
  }))} />
</div>
```

---

### Key UX decisions

**Sort by severity, not by desk or metric** — a risk officer scans top-to-bottom. A breach buried under 10 green items is a near-miss waiting to happen.

**Inline escalation, not a separate app** — the audit trail is co-located with the exception. Every action (assign, note, override request, resolve) is logged in context. No ticket system required.

**FRTB as a dedicated tab** — FRTB attribution failures have materially different consequences from limit utilisation. They require a different diagnostic workflow (compare RTPL vs HPL; identify the model divergence) and are shown in a dedicated tab rather than mixed into the exception queue.

**Drill-down via breadcrumb, not tabs** — enterprise → asset class → desk → instrument is a navigational depth, not a set of parallel views. Breadcrumb correctly models the hierarchical nature of risk aggregation.

---

### Prompt template for Risk Officer Exception Dashboard

```
CONTEXT: Market risk officer triaging overnight limit exceptions and monitoring live desk exposure before trading begins.
ROLE: Risk Officer
WORKFLOW: Open dashboard → scan exception queue (breach first) → select most severe → drill into VaR breakdown → review FRTB attribution → escalate or approve override → work down queue.

REQUIREMENTS:
Layout: Exception Queue Workspace
  - Header: Unite logo, Risk nav tabs (Exceptions / Greeks / Stress / FRTB / Reports), market status dot, UTC clock, user
  - Left panel (480px): exception queue sorted by severity (BREACH → WARNING → OK), then utilisation % descending within each level
  - Right panel (flex): 4 tabs — VaR | Greeks | Stress | FRTB — + escalation workflow panel (always visible below tabs)

Exception queue items: left border colour (red/amber/none), BREACH/WARNING/OK tag, desk name, metric label, utilisation %, current vs limit (abbreviated mono), delta today (pp, coloured)
InlineNotification kind="error" above queue when any item is in breach

VaR tab: breadcrumb drill-down (Enterprise → Asset class → Desk → Instrument) + Pattern 18 utilisation tiles for sub-desks + AG Grid position-level breakdown (instrument, VaR contribution, % of desk VaR, delta, day P&L)

Greeks tab: DataTable — desk × Greek (Δ, Γ, V, DV01, CS01) with limit bars; Pattern 18 tiles per Greek for selected desk

FRTB tab: DataTable — desk, RTPL today, HPL today, gap (bps), today pass/fail tag, exceptions/250, IMA status (Green/Amber/Red zone)

Escalation panel (below tabs): Assign dropdown + button, TextArea for note, [Request override] [Mark resolved] buttons, Audit trail StructuredList with timestamps

Colour conventions: breach = --support-error, warning = --support-warning, ok = --support-success; all P&L mono with +/− sign
Sample data: FX desk (A. Chen), Rates desk (T. Nakamura), Credit desk (J. Morrison); VaR in GBP
Theme: g100 dark

OUTPUT: rationale + spec + React TSX (or self-contained HTML with simulated data)
```

---

## Pattern Composition Guide

Patterns combine into workspace archetypes. When a prompt implies a full workspace, use the appropriate blueprint (13 or 14) first, then pull in component patterns for specific panels.

| Workspace type | Blueprint | Component patterns inside |
|---|---|---|
| FX / Rates live pricing | Pattern 13 | 01 (tile grid), 05 (depth ladder), 04 (blotter), 11 (activity feed), 16 (RFQ queue), 15 (order ticket) |
| Credit / Fixed income sales trading | Pattern 14 | 02 (KPI bar), 04 (AG Grid blotter), 07 (client panel), 10 (P&L), 16 (RFQ queue), 15 (order ticket) |
| Portfolio management / Attribution | Pattern 19 | 02 (performance KPIs), 18 (mandate compliance), 04 (order prep blotter), 15 (order ticket), 17 (attribution chart) |
| Risk exception monitoring | Pattern 20 | 18 (VaR utilisation tiles), 09 (exception queue variant), 04 (position drill-down) |
| Client intelligence / Coverage | — | 07 + 08 + 02 + 11 + 12 |
| Algo execution monitoring | — | 03 + 02 + 04 |
| Operations / Compliance | — | 09 + 02 + 04 + 11 |
| P&L / Risk dashboard | — | 10 + 18 + 02 + 04 |
| FX / Rates matrix | — | 06 + 05 + 01 |
| Prime Broker client monitoring | — | 18 (margin bars) + 07 (client panel) + 04 (position blotter) + 02 (KPI row) |

**Rule of thumb:** If the user is describing a single panel or widget, use a component pattern. If they're describing a full trading desk workspace, start from the closest blueprint (13, 14, 19, or 20) and adapt.

---

## Implementation Gotchas

Common decisions that are easy to get wrong when generating from these patterns.

**Unite DataTable vs AG Grid for blotters**  
Unite's DataTable works for static and low-frequency data (client lists, call reports, matrix cells). It lacks column resizing, virtual scrolling, and sort indicators. For any live, high-row-count blotter — use AG Grid with Unite dark theme overrides as shown in Patterns 13 and 14. Using Unite DataTable here will produce a functional-looking but non-production-ready result.

**AG Grid Community vs Enterprise**  
Pattern 13 (FX Workspace) uses AG Grid Community — free, no licence required. Pattern 14 (Credit Workspace) assumes AG Grid Enterprise for `rowGroupPanelShow: 'always'` and the column/filter sidebar. If Enterprise isn't available, remove those config keys and the row group panel from the spec.

**FX colour convention vs Credit colour convention**  
These are different and must not be mixed. FX workspaces: Bid = `#42be65` (green), Offer = `#4589ff` (blue). Credit workspaces: Buy/Done = `#00C896` (teal), Sell/Missed = `#FF4D6D` (crimson). Applying FX colours to a credit workspace (or vice versa) breaks the semantic meaning of colour in each domain.

**`localStorage` persistence**  
Patterns 13 and 14 persist resize handles, card order, and panel state to `localStorage`. In the Claude.ai artifact environment, `localStorage` is not supported — replace with React state (useState) when generating artifacts. When generating standalone HTML or deployed apps, keep `localStorage`.

**Monospace font application**  
All prices, notionals, spreads, P&L values, and timestamps must use `font-family: var(--font-mono)` (IBM Plex Mono). Applying default IBM Plex Sans to numeric data is a common generation error that breaks visual alignment in dense tables and blotters.

**`ContentSwitcher` for view toggles, not Tabs**  
Use `ContentSwitcher` (Pattern 04, 08) for toggling between views of the same data (e.g. Flow / Gilts / Table / Treemap). Use `Tabs` for navigating between distinct sections. Using Tabs where ContentSwitcher is specified produces correct output but wrong semantics and spacing.

---

## Quick Reference — Pattern → Prompt Trigger

| When the user says... | Use pattern |
|---|---|
| "live prices", "streaming quotes", "FX tiles", "bid/offer" | Pattern 01 — Live Price Tile |
| "done vs missed", "trade counts", "execution quality", "donut KPI" | Pattern 02 — KPI Ring Tile |
| "algo monitoring", "VWAP", "execution cards", "active orders" | Pattern 03 — Algo Status Card Grid |
| "blotter", "trade flow", "color coded rows", "voice trades" | Pattern 04 — Dense Trade Blotter |
| "order book", "depth", "bid ladder", "market depth" | Pattern 05 — Market Depth Ladder |
| "swaption matrix", "vol surface", "rates grid", "tenor/expiry" | Pattern 06 — Rates Matrix Table |
| "client 360", "client profile", "coverage", "relationship view" | Pattern 07 — Client 360 Profile |
| "treemap", "securities discussed", "allocation by sector" | Pattern 08 — Treemap Visualisation |
| "exceptions", "operations dashboard", "regulatory monitoring" | Pattern 09 — Exception Monitoring |
| "P&L", "live pnl", "strategy performance", "desk summary" | Pattern 10 — P&L Live Summary |
| "news feed", "market activity", "headlines", "audit log" | Pattern 11 — News / Activity Feed |
| "AI assistant", "chat panel", "natural language query" | Pattern 12 — AI Assistant Panel |
| "FX workspace", "spot trading", "price tiles", "multi-pair", "dealer workspace" | **Pattern 13 — FX Spot Workspace ✅** |
| "credit workspace", "sales trader", "RFQ monitor", "client intelligence", "opportunity rail", "credit bonds" | **Pattern 14 — Credit Bonds Sales Trader ✅** |
| "order ticket", "trade confirmation", "order entry", "buy/sell modal", "order form" | Pattern 15 — Order Ticket Modal |
| "RFQ queue", "response timer", "countdown", "open enquiries", "quote or miss" | Pattern 16 — RFQ Queue with Countdowns |
| "candlestick", "OHLC", "price chart", "volume chart", "intraday chart" | Pattern 17 — OHLC Candlestick Panel |
| "VaR limit", "margin utilisation", "mandate compliance", "headroom", "limit bar" | Pattern 18 — Risk Utilisation Tile |
| "portfolio manager", "PM workspace", "attribution", "fund performance", "benchmark", "mandate" | **Pattern 19 — Portfolio Manager Workspace ⚠ draft** |
| "risk officer", "VaR dashboard", "limit breach", "FRTB", "Greeks", "exception escalation" | **Pattern 20 — Risk Officer Dashboard ⚠ draft** |

---

*Unite Reference Workspace Patterns v1.4 — July 2026*

---

*© 2026 Stuart Eastwood / Unite. All rights reserved.*
