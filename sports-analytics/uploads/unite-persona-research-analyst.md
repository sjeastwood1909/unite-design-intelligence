# Unite Persona — Research Analyst (Sell-Side)

**Version:** 1.0  
**Owner:** Stuart  
**Last updated:** June 2026  
**Load alongside:** `unite-intelligence-context.md` · `unite-reference-patterns.md`

---

## Role Overview

**Title:** Research Analyst (Sell-Side)  
**Also known as:** Equity Analyst, Credit Analyst, Macro Analyst, Sector Analyst  
**Seniority range:** Associate Analyst → Analyst → Senior Analyst → Head of Research  
**Firm types:** Investment banks (Goldman Sachs, JPMorgan, Barclays Research), independent research firms, macro research boutiques

Sell-side research analysts produce written research — morning notes, sector updates, earnings models, rating changes — for internal sales desks and institutional clients. Coverage spans equities, credit, macro, or commodities. The dominant constraint is the hard 7am morning call deadline. Context-switching across 4+ tools daily is the defining friction of the role. AI-powered research tools are rapidly changing the workflow as of 2025–2026, compressing weeks of analysis into hours.

**Coverage types:** Single-name equities (sector specialist), credit (IG/HY issuer), macro (rates, FX, commodities), thematic/cross-asset

---

## Typical Day

| Time | Activity |
|---|---|
| 05:30–07:00 | Digest overnight flow (Bloomberg NEWS, LSEG Workspace alerts). Update models for any price-sensitive events. Write or approve morning note; route through supervisory analyst for compliance sign-off. |
| 07:00 | Present on morning call; field questions from the sales desk. |
| 08:00–12:00 | Monitor coverage universe for breaks vs thesis. Respond to client/sales calls. Update models on earnings, guidance changes, macro prints. |
| 12:00–18:00 | Longer-form notes, thematic pieces, earnings previews. Model distribution to sales. Competitor research monitoring. |

---

## Primary Tools & Platforms

### Financial Data Terminals

| Platform | Use |
|---|---|
| **Bloomberg Terminal** | Primary data and news platform. BN (news), NOTE (research management), SRCH (precedent search), BQNT (quant analytics). AI-powered Document Search & Analysis launched late 2025. ASKB (conversational agentic AI interface, beta as of 2025) accelerates multi-step research workflows. ~$24,000/seat/year. |
| **LSEG Workspace** (formerly Refinitiv Eikon, fully rebranded 2025) | News, company financials, consensus estimates, analytics — strong Bloomberg alternative for some functions. Common at European banks and buy-side firms. |
| **FactSet Workstation** | Company financials, estimates, sector analysis, portfolio attribution. Strong competitor to Bloomberg for fundamental research. Commonly used alongside Bloomberg. |
| **S&P Capital IQ Pro** | Company financials, M&A comps, private company data, credit research — particularly strong for M&A screening and deal comparables. |

### AI-Powered Research & Intelligence

| Platform | Use |
|---|---|
| **AlphaSense** | AI-powered search across sell-side research, earnings transcripts, expert networks, regulatory filings. As of October 2025, launched Financial Data module combining structured quantitative data with qualitative insights — enables natural language queries blending both. 6,500+ organisations, 88% of S&P 100. Workflow agents automate primers, market landscapes, and competitive analysis. |
| **Bloomberg ASKB** | Conversational agentic AI interface (beta, 2025) embedded in Bloomberg Terminal for multi-step research queries without manual data aggregation. |
| **Visible Alpha** | Consensus estimate modelling — aggregates detailed analyst model assumptions (beyond just EPS), enables comparison of underlying assumptions across analysts. Widely used for earnings preview work. |
| **Sentieo / Tegus** | Document search, earnings transcript analysis, expert call notes. Merged into Tegus in 2024–2025. Used for qualitative research alongside Bloomberg. |

### Research Management & Distribution

| Platform | Use |
|---|---|
| **Bloomberg RMS** (Research Management Solution) | Internal research note management, compliance review, distribution to clients and sales — standard at most sell-side banks |
| **Substantive Research** | Research spend analytics and payment tracking (MiFID II compliance for research payments). Common at banks managing research budgets. |
| **BriefingBook / Iridescent** | Research portal tools for distributing sell-side content to institutional clients. |

### Modelling & Production

| Platform | Use |
|---|---|
| **Microsoft Excel** | Financial modelling — DCF, earnings models, comps, sensitivity tables. Remains the primary modelling environment. No current replacement. |
| **PowerPoint** | Research note formatting and client presentation slides. Often templated by firm's brand standards. |
| **Capital IQ Excel Plugin** | Pulls live financial data into Excel models from CapIQ — common for fundamental analysts. |
| **Bloomberg Excel Add-In (BDH/BDP)** | Live Bloomberg data feeds into Excel models — used by most equity/credit analysts. |

---

## Pain Points

1. **No unified view of "what's moving in my coverage universe right now"** — coverage names are scattered across Bloomberg watchlists, personal Excel sheets, and mental models. There is no single panel showing all coverage names with overnight moves, news flags, and model status.

2. **Manual data aggregation into Excel models** — scraping values from multiple terminal windows into models under a pre-7am deadline is the single largest source of operational risk and error in the role.

3. **Pre-7am model update under time pressure** — when an overnight event (earnings miss, macro print, M&A announcement) breaks the thesis, the analyst must update their model, run new scenarios, and write the note before the morning call. This is often done in under 90 minutes with multiple tools open simultaneously.

4. **Research note distribution and version control** — routing a note through compliance, versioning it correctly, and distributing it to the right clients via Bloomberg, email, and the firm's research portal requires multiple manual steps with no audit trail in most systems.

5. **Competitor research monitoring** — tracking when a competitor analyst changes their rating, target price, or earnings estimate on a shared coverage name is a manual process. A consensus shift that the analyst isn't aware of before a client call is a credibility risk.

6. **Context-switching overhead** — 95% of sell-side research teams use 4+ tools daily. The mental load of maintaining context across Bloomberg, CapIQ, Excel, and RMS is the dominant hidden cost of the role.

---

## Decision Triggers

| Trigger | Response |
|---|---|
| Stock in coverage moving >2% vs consensus without a known catalyst | Investigate — potential note or client update required |
| Earnings release lands overnight | Model update before morning call is mandatory |
| Rating change from a competitor analyst | Response or monitoring of consensus shift required |
| Macro print breaks a sector thesis (e.g. CPI miss for rate-sensitive sector) | Rapid note update or client alert |
| Client call requesting colour on a specific position | Pull latest model, check news — respond with conviction |
| M&A announcement in coverage universe | Update target, comps, and model; publish note before market open if possible |

---

## Core Task Flows

### Flow 1: Overnight Event → Morning Note (05:30–07:00)
**Trigger:** Material overnight event affecting a coverage stock — earnings, M&A, macro print, policy change, or analyst upgrade/downgrade  
**Duration:** 60–90 minutes

1. Scan Bloomberg NEWS / LSEG Workspace alerts at 05:30 — filter to coverage universe only. Identify the event and how large the overnight price move is.
2. Determine if an update is required — is the event material enough to warrant a note, or is it noise? Rule of thumb: if a client would reasonably call to ask about it, write about it.
3. Open existing Excel model — locate the line item most affected by the event (revenue, margin, guidance, rate assumption, etc.).
4. Update model assumptions — input new actuals or guidance. Recalculate forward estimates and target price.
5. Decide whether a rating change is warranted — if new target price diverges materially from current price vs old target, upgrade or downgrade.
6. Draft the morning note — 200–400 words maximum. Structure: (1) what happened, (2) model impact (new EPS estimate vs prior estimate vs consensus), (3) our view and rationale, (4) action (maintain Buy / add on weakness / downgrade). No equivocation — be directional.
7. Submit to supervisory analyst for compliance review — FINRA requires analyst views to be in a published report before speaking to clients. This review must be complete before the 07:00 call.
8. Supervisory analyst approves — submit to Bloomberg RMS for distribution. Note goes to sales desk and client portal simultaneously.
9. Brief sales desk before the morning call — key message in one sentence. "We're upgrading X from Hold to Buy — target moves from 450p to 520p — earnings beat driven by margin expansion."
10. Present on morning call at 07:00 if it is the day's priority story.

**Handoff:** Note to Bloomberg RMS → sales desk and client portal. Rating change flagged to compliance. Model update saved.

---

### Flow 2: Earnings Model Update
**Trigger:** Company in coverage reports earnings (quarterly or half-year)  
**Duration:** 2–4 hours

1. Pull earnings release — from Bloomberg (EA `<ticker>`), company IR website, or SEC EDGAR. Have the prior model open simultaneously.
2. Extract key financials from the release — revenue, gross margin, EBITDA, EPS, free cash flow. Record actual vs prior estimate vs consensus for each.
3. Identify the key beats/misses — which lines moved vs expectations, and which lines management chose to highlight in guidance.
4. Update Excel model — replace estimates with actuals for the reported period. Update forward estimates based on new guidance.
5. Run scenario analysis — what happens to the target price in a bear, base, and bull case for the next 12 months?
6. Update target price and rating — if the new target implies >20% upside from current price, consider upgrading. If <5% upside, consider downgrading.
7. Draft earnings note — include: actuals vs estimate vs consensus table (key metrics only), key beats and misses with management commentary, updated model summary (next year EPS estimate, target price), rating and action.
8. Supervisory analyst review — fact-check every figure, date, and attribution against the source release before the analyst signs.
9. Compliance sign-off — submit to Bloomberg RMS.
10. Sales desk and client calls — respond to questions with colour beyond what's in the note. Consensus data (Visible Alpha) shows how the street is moving estimates.

**Handoff:** Updated model saved. Note to RMS. Rating/target change flagged to compliance. Consensus contribution submitted.

---

### Flow 3: Coverage Universe Morning Scan
**Trigger:** Start of day (05:30–06:30) — systematic scan before writing begins  
**Duration:** 15–20 minutes

1. Open coverage universe monitor — all covered names sorted by overnight price change (largest move first).
2. For any name moving >2%: does it have a known catalyst (news headline, competitor move, macro event) or is it unexplained?
3. Unexplained move >2%: investigate immediately — check Bloomberg NEWS, earnings calendar, insider filings, analyst activity for the name.
4. Check competitor research activity — has a competitor analyst changed their rating, target price, or estimate on a shared coverage name? A competitor upgrade on a stock you rate Hold is a credibility risk on the morning call.
5. Check earnings calendar — which covered names report this week? Is a model update needed before reporting?
6. Check news filter for coverage names — did anything break overnight that hasn't yet shown up as a price move (regulatory filing, supply chain event, channel check)?
7. Prioritise the day's work: (a) needs a note now, (b) needs a client call, (c) needs a model update later, (d) monitor and wait.
8. Brief sales desk by 06:55 on the priority story and what you're writing.

**Handoff:** Day's priorities communicated to sales desk. Morning call agenda set. Writing begins.

---

## What "Good UI" Looks Like

- **Coverage universe monitor as the default landing panel:** name, last price, overnight change (% and abs), change vs model target, last note date, next event, news flag — all in a single scannable AG Grid
- **News feed scoped to coverage names only** — no global noise. Filtered by ticker/ISIN to coverage universe. Headlines with sentiment flag (positive/negative) and relevance score.
- **Model → note workflow in one surface:** update key model inputs, see P&L / EPS estimate change propagate, draft note alongside — not three separate apps
- **Research note card with status:** Draft / In Review / Compliance Review / Published — with distribution log showing delivery to Bloomberg RMS, email, and client portal
- **Competitor research tracker:** for each coverage name, latest competitor ratings, target prices, and estimate revisions — highlighted when consensus has shifted materially since last note
- **Earnings calendar panel:** next earnings date, analyst model estimate vs consensus, prior period result — countdown to event
- **Export to Bloomberg/RMS in one click** — not a manual copy-paste step

---

## Workspace Layout

Use **2-Panel Analytics Workspace:**
- **Left panel:** Coverage universe monitor (AG Grid) — sorted by biggest overnight move by default. Filter by sector, rating, event proximity.
- **Right panel:** Selected name detail — news feed, model snapshot, note editor, event calendar

---

## Key Components

| UI Need | Unite Component |
|---|---|
| Coverage universe grid | AG Grid — `enableCellChangeFlash: true` for price updates |
| Price change indicators | `<Tag type="green">` / `<Tag type="red">` paired with value (never colour alone) |
| News feed | `<Tile kind="clickable">` cards with `<Tag type="blue">` for asset class |
| Research note status | `<Tag>` with states: Draft (gray) · In Review (cyan) · Published (green) |
| Morning call countdown | Custom countdown component in KPI tile |
| Earnings calendar | `<DataTable>` with next event date, days-to column |
| Competitor consensus shift | `<InlineNotification kind="warning">` when consensus shifts materially |
| Note draft editor | `<TextArea>` with character/word count |

---

## Sample Data Pointers

- **Coverage universe:** BP.L · HSBA.L · VOD.L · SHEL.L · LLOY.L · RIO.L (see canonical data in `unite-intelligence-context.md`)
- **Analyst:** J. Morrison (Research desk)
- **Sectors:** UK Energy, UK Banks, UK Telecoms
- **Morning call time:** 07:00 GMT/BST

---

## Generation Prompt Template

```
CONTEXT: [What research workflow problem is being solved?]
ROLE: Research Analyst (Sell-Side)
COVERAGE: [Asset class and sectors — e.g. UK Equities, Energy + Banks]
WORKFLOW: [What is the analyst trying to accomplish? e.g. pre-morning-call scan, earnings update, note distribution]
REQUIREMENTS:
  - Must show: [coverage universe / news feed / model status / note workflow]
  - Business rules: moves >2% flag amber · moves >5% flag red · stale price >5s shows indicator
  - Sample data: UK equities coverage from canonical list; analyst J. Morrison
  - Theme: g100 dark
OUTPUT: rationale + spec + HTML prototype
```

---

*Unite Persona — Research Analyst v1.0 — June 2026*

---

*© 2026 Stuart Eastwood / Unite. All rights reserved.*
