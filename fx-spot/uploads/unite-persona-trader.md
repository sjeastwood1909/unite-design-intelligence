# Unite Persona — Trader / Dealer (Sell-Side)

**Version:** 1.0  
**Owner:** Stuart  
**Last updated:** June 2026  
**Load alongside:** `unite-intelligence-context.md` · `unite-reference-patterns.md`

---

## Role Overview

**Title:** Trader / Dealer (Sell-Side)  
**Also known as:** Sales Trader, Market Maker, Execution Trader, Prop Trader, Flow Trader  
**Seniority range:** Junior Trader → Trader → Senior Trader → Head of Desk  
**Firm types:** Investment banks (Goldman Sachs, Barclays, Deutsche Bank), agency brokers, electronic trading desks

Sell-side traders execute orders and make markets across one or more asset classes. They price client RFQs, manage inventory risk, and hedge positions. Latency is the core design constraint — every system switch adds milliseconds and risk when markets are moving. The validated workspace blueprints in `unite-reference-patterns.md` (Pattern 13: FX Spot, Pattern 14: Credit Sales Trader) are the ground-truth starting points for this persona.

**Desk types:** FX Spot/Forward, Rates/Swaps, Credit (IG/HY), Equities, Fixed Income, Multi-Asset, Options/Derivatives

---

## Typical Day

| Time | Activity |
|---|---|
| Pre-market (06:30–08:00) | Review overnight positions handed over from APAC/EMEA. Check risk limits and pre-approved hedges. Prep for expected client flow based on yesterday's pipeline. |
| Market open (08:00–10:00) | Monitor live order flow. Respond to client RFQs (FX: 30–60s; credit: 2–5 min for voice). Manage intraday inventory against risk limits. Hedge delta/gamma on options books. |
| Throughout day (10:00–16:30) | Price and execute client orders. Manage skew in order flow. Escalate large orders needing structured response or multi-venue liquidity sourcing. |
| Post-market / handoff (16:30–18:00) | Position handoff to next timezone desk. End-of-day risk reconciliation. Review fill quality (TCA for equities; spread capture for FI/FX). Update pricing models for next day. |

---

## Primary Tools & Platforms

### Order & Execution Management

| Platform | Use |
|---|---|
| **Bloomberg FXGO** | FX electronic trading — RFQ distribution to clients, single-dealer and multi-dealer |
| **Bloomberg EMSX** | Equity execution management — algo routing, DMA, order management |
| **Bloomberg TSOX** | Fixed income and structured product order management |
| **Bloomberg TOMS** | Trade and order management system — cross-asset blotter and lifecycle management |
| **Trading Technologies (TT)** | Market-leading OMS/EMS for listed derivatives and exchange-traded products. Won Best Sell-Side OMS at TradingTech Insight Europe Awards 2026. Processes ~$50 trillion in traded principal annually via TT TCA. |

### Electronic Trading Platforms (Multi-Dealer / Venue)

| Platform | Asset class | Use |
|---|---|---|
| **Tradeweb** | Fixed income, rates, credit | RFQ, portfolio trading. SNAP IOI connects clients with dealers holding untraded positions. $3bn+ notional submitted daily via Sweep auctions. |
| **MarketAxess** | Corporate bonds, IG/HY credit | Electronic credit trading. ~17% market share US corporate bonds (2025). Acquired RFQ-hub (May 2025) for bilateral multi-dealer RFQ. |
| **360T (Deutsche Börse)** | FX spot/forward/swaps | Multi-dealer FX platform. Common for voice/electronic hybrid desks. |
| **EBS (CME Group)** | FX spot | Interdealer FX platform — primary for USD/JPY and EUR/USD spot |
| **Trumid** | US credit | Data-driven all-to-all corporate bond trading |
| **BGC / Fenics** | Rates, FX options | Interdealer broker electronic platform |

### Pricing & Risk Systems

| Platform | Use |
|---|---|
| **Bloomberg MARS** | Embedded real-time risk, Greeks, VaR, scenario analysis — integrated into trader desktop |
| **Murex (MX.3)** | Front-to-back trading platform at large sell-side banks. Pricing, risk, P&L, position management. |
| **Calypso (now part of Broadridge)** | Multi-asset trading and risk management. Common at mid-size sell-side and structured products desks. |
| **Internal pricing engines** | Proprietary models for exotic derivatives, structured credit, and complex FX products |

### Transaction Cost Analysis

| Platform | Use |
|---|---|
| **TT TCA (Trading Technologies)** | Best-in-class TCA tool (TradingTech Europe Awards 2026). Post-trade analytics, algo performance benchmarking. |
| **Bloomberg BTCA** | Bloomberg's integrated TCA for pre-trade and post-trade analytics and reports |
| **ITG / Virtu Analytics** | Independent TCA benchmarking — common for equities |

### Interoperability

| Standard | Use |
|---|---|
| **FINOS FDC3 2.2** | Cross-application context sharing on the financial desktop — instrument selected in blotter flows to chart, risk system, and order ticket automatically. In production at JPMorgan, Morgan Stanley, Barclays, LSEG. |
| **Bloomberg IB (Instant Bloomberg)** | Integrated voice and electronic messaging — voice flow integration on hybrid desks |

---

## Pain Points

1. **Latency is the core constraint** — every system switch (pricing engine → OMS → risk system → hedging desk) adds milliseconds and risk when the market is moving. A unified desktop is not a convenience; it is a commercial necessity.

2. **Inventory visibility** — need a live view of own inventory across all venues before pricing a client request. Stale inventory data leads to mispriced quotes and potential P&L leakage.

3. **Voice + electronic integration** — hybrid desks (client calls on the phone while electronic flow arrives via API simultaneously) require both to be visible in one surface without constant switching.

4. **Low-touch flow efficiency** — high-volume small-ticket flow should be auto-routed with no trader touch. Manual intervention capacity must be reserved for large or complex orders. The split between auto and manual is an ongoing calibration.

5. **RFQ timeout management** — FX RFQs expire in 30–60 seconds. A missed RFQ due to a slow system or screen clutter is a direct revenue loss.

6. **Post-trade TCA pressure** — buy-side clients increasingly demand TCA reports showing execution quality. Traders need inline analytics, not a separate end-of-day report.

---

## Decision Triggers

| Trigger | Response |
|---|---|
| Client RFQ arrives | Respond within platform timeout (FX: 30–60s; credit: 2–5 min for voice) |
| Position approaches risk limit | Reduce or seek approval immediately — not at end of day |
| Market moves >x bps vs held inventory | Recalculate hedge requirements, price risk of holding |
| Order size >$n requires senior sign-off | Escalation to structured response or multi-venue sourcing |
| Skew in flow suggests informed order | Widen spread or reduce size |
| End-of-period position reconciliation flag | Must be resolved before handoff |
| FRTB P&L attribution failure | Diagnose gap between RTPL and HPL immediately |

---

## Core Task Flows

### Flow 1: Client RFQ → Electronic Execution (FX)
**Trigger:** Client sends RFQ via Bloomberg FXGO, 360T, or EBS  
**Duration:** 15–60 seconds (FX); 2–5 minutes (credit voice)

1. RFQ arrives in queue — displayed as a card with countdown timer, instrument, notional, client name, and client tier.
2. Check live inventory panel — does the desk hold this instrument or a correlated position? What is current net delta and P&L on inventory?
3. Check the market — current spot rate, recent tick direction, bid/ask spread on interdealer market.
4. Apply spread — adjust bid/offer from mid-market based on: client tier (tighter for top-tier), notional size (wider for large), current market volatility, and inventory skew (if already long, tighten the offer; if short, tighten the bid).
5. Submit quote via platform before timer expires. If timer runs out without submission, the RFQ is automatically missed — logged for TCA.
6. If client accepts: trade executes. Position updates in blotter. Inventory panel updates on tick.
7. If client rejects: log as missed. No action required unless the miss suggests the spread was too wide.
8. Hedging decision: if the new position creates net exposure approaching the risk limit → initiate Flow 2 immediately.
9. Update fill quality log — spread captured vs mid-market. Used in daily TCA report.

**Handoff:** Trade confirmation to operations for settlement. Position to risk system (MARS). TCA log to analytics.

---

### Flow 2: Position Limit Breach → Hedge
**Trigger:** Risk alert fires as position approaches or breaches limit in MARS or internal risk system  
**Duration:** 2–15 minutes

1. Alert appears — InlineNotification in risk panel showing desk, metric (VaR / DV01 / delta), limit, current value, and % utilisation.
2. Open inventory panel — identify which position or combination of positions is driving the breach.
3. Calculate hedge requirement — how much exposure needs to be offset? Which instrument hedges it most efficiently (e.g. interest rate futures for duration risk, index for single-name concentration)?
4. Check hedging instrument — is it available electronically or does it need to go to the voice desk?
5. Open one-click hedge order ticket — pre-populated with offsetting instrument and calculated size. Review and confirm.
6. Submit hedge order — confirm execution and fill price.
7. Monitor hedge fill — ensure fill prices are acceptable and don't create a new net exposure in the hedging instrument.
8. Confirm risk limit is back within bounds — check risk panel shows utilisation returning to green.
9. If still breaching after hedge: escalate to senior trader or Risk Officer for override approval.
10. Log the hedge against the original position — required for P&L attribution and audit trail.

**Handoff:** Hedge execution to operations for settlement. Risk position update to MARS. Override request to Risk Officer if needed.

---

### Flow 3: End-of-Day P&L Reconciliation and Desk Handoff
**Trigger:** Market close / shift end  
**Duration:** 30–60 minutes

1. Run end-of-day mark — mark all open positions to official closing prices. Compare system P&L to trader's own running estimate.
2. Investigate any P&L discrepancy — common causes: timing differences in fills, unbooked trades, system vs exchange closing price differences.
3. Resolve unbooked or unmatched trades — escalate to operations if a mismatch cannot be explained immediately.
4. Review fill quality for the day — TCA summary: spread capture vs mid, fill rate, any orders that filled significantly worse than expected.
5. Review risk limit status across all positions — confirm no positions are still approaching or breaching a limit overnight.
6. Prepare desk handoff pack for the next timezone — open positions by instrument, current P&L, risk limit status, pending RFQs or client follow-ups, any market events overnight (central bank decisions, data releases) that may move the book.
7. Formally log desk handoff in the system — timestamp is recorded and required for the audit trail.
8. Brief the incoming desk (APAC or Americas trader) verbally on anything requiring immediate attention.

**Handoff:** Open positions and risk status to next timezone desk. P&L to finance/accounting. TCA report to analytics and buy-side clients.

---

## What "Good UI" Looks Like

- **Live blotter as the primary panel:** all orders, fills, and open positions in a single AG Grid view — colour-coded by status (live/filled/cancelled), side (bid/offer using correct asset-class colour convention — FX: green/blue; credit: teal/crimson), and time-to-expiry for RFQs
- **Inventory panel pinned beside the blotter:** current position by instrument, delta-adjusted, with P&L vs cost and proximity to limit — updates on tick
- **RFQ queue with countdown timers:** each unanswered client request shown as a card with remaining response time, instrument, size, client tier — sorted by urgency
- **One-click hedge:** from a position breach alert directly to a hedging order ticket, pre-populated with the offsetting instrument and quantity
- **Analytics inline:** spread capture, fill rate, order toxicity flag — not in a separate TCA report downloaded at end of day
- **Connection status always visible:** feed disconnection surfaced as `<InlineNotification kind="error">` — never silent stale data

---

## Workspace Layout

Use **Pattern 13 (FX Spot Workspace)** or **Pattern 14 (Credit Sales Trader Workspace)** from `unite-reference-patterns.md` as the validated starting points.

For other asset classes, use **Standard 3-Panel Trading Workspace:**
- **Left panel:** Instrument / watchlist / position selector
- **Centre panel:** Live blotter (AG Grid), inventory grid, or market depth
- **Right panel:** RFQ queue, order ticket, deal detail
- **Bottom blotter:** Full trade history / all positions

**Colour conventions — non-negotiable:**
- FX & Rates: Bid = `--color-fx-bid` (#42be65 green) · Offer = `--color-fx-offer` (#4589ff blue)
- Credit & Fixed Income: Buy/Done = `--color-credit-buy` (#00C896 teal) · Sell/Missed = `--color-credit-sell` (#FF4D6D crimson)
- Equities: Buy = `--support-success` · Sell = `--support-error`

---

## Key Components

| UI Need | Unite Component |
|---|---|
| Live order blotter | AG Grid — `enableCellChangeFlash: true`, `getRowId` required |
| RFQ countdown timers | Custom timer cell renderer in AG Grid |
| Position P&L tiles | `<Tile kind="base">` with `var(--font-mono)` |
| Order ticket | `<Modal>` with `<Dropdown>`, `<RadioButton>`, `<NumberInput>`, `<TextInput>` |
| Risk breach | `<InlineNotification kind="error">` — `role="alert"` `aria-live="assertive"` |
| Feed status | `<InlineNotification kind="warning">` for reconnecting; `kind="error"` for disconnected |
| Spread capture chart | Carbon Charts `<SparklineChart>` in KPI tile |
| Depth of book | ECharts custom bid/offer histogram |

---

## Sample Data Pointers

- **FX Spot desk:** A. Chen · R. Patel · S. Müller (see canonical sample data in `unite-intelligence-context.md`)
- **Credit Sales desk:** J. Morrison · C. Walsh · D. Okafor
- **Instruments:** EUR/USD · GBP/USD · USD/JPY (FX); BP 2026 · HSBC 2028 · Vodafone 2030 (credit)
- **Counterparties:** BlackRock · Fidelity · Schroders (buy-side clients)
- **Numeric ranges:** FX notional $5m–$250m · Credit bond notional £1m–£50m

---

## Generation Prompt Template

```
CONTEXT: [What trading problem is being solved?]
ROLE: Trader / Sales Trader
DESK: [FX Spot | Credit | Rates | Equities | Multi-Asset]
WORKFLOW: [What is the trader trying to accomplish?]
REQUIREMENTS:
  - Must show: [live prices / blotter / inventory / RFQ queue / risk limits]
  - Business rules: correct bid/offer colour convention for asset class · filled orders cannot be cancelled · RFQ timers visible
  - Sample data: instruments and counterparties from canonical list
  - Theme: g100 dark
OUTPUT: rationale + spec + HTML prototype with simulated live data
```

---

*Unite Persona — Trader / Dealer v1.0 — June 2026*

---

*© 2026 Stuart Eastwood / Unite. All rights reserved.*
