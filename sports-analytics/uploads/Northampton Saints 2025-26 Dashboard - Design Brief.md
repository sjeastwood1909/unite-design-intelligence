# Design Brief: Northampton Saints 2025/26 Season Analytics Dashboard

**Prepared for:** Claude Design
**Project:** Unite – Northampton Saints Analytics
**Date:** 7 July 2026

## 1. Overview

Build an analytical dashboard covering Northampton Saints' 2025/26 rugby season — a title-winning campaign in which the club topped the Premiership regular season, won the Gallagher PREM Rugby Final, and reached the Champions Cup quarter-finals. The dashboard should let a fan, analyst, or club stakeholder understand at a glance how the season unfolded: results, league position, player performance, and the story behind the numbers (tries, conversions, and other attacking output).

**Audience:** Saints supporters and internal analytics stakeholders who want a fast, visual read on the season — not a raw stats dump.

**Tone:** Connected, clear, efficient, informative. No hype copy — let the results and numbers carry the story.

## 2. Brand & Visual System

Built on the Unite design system — reference `styles.css` and design tokens directly rather than inventing new visual language.

- **Colour:** Gray-backbone neutrals with Blue 60 (`#0f62fe`) as the single interactive/accent colour. Reserve Saints' own claret/black only as a subtle secondary accent (e.g. result badges — win/loss), not as the dominant palette.
- **Shape & spacing:** Square corners, 8px spacing scale, flat and border-delineated (no heavy shadows or gradients).
- **Type:** IBM Plex Sans (UI/body), IBM Plex Mono (stats/numerals — good for scoreboards and tabular figures).
- **Theme:** Support both White and Gray-100 (`data-theme="g100"`) themes.
- **Overall feel:** Quiet, data-forward, efficient — the design should get out of the way of the numbers.

## 3. Dashboard Structure

### 3.1 Season Summary (top-level hero)
The headline section — answers "how did the season go?" in one glance.

- Final status: **Premiership Champions 2025/26**
- Regular season finish: **1st place** — 14W–1D–3L from 18 matches, 74 points
- Final result: **Northampton Saints 26–17 Exeter Chiefs** (Allianz Stadium, Twickenham)
- Champions Cup: reached the **quarter-finals**, lost 43–41 to Bath
- Headline record: **111 tries** scored in the Premiership regular season — most in the league, and the first team in PREM Rugby history to break 100 tries in a regular season (Bath 2nd on 102, Saracens 3rd)

Suggested components: large scorecard/stat tiles, a trophy/status badge, a compact league-position sparkline across the season.

### 3.2 League Table & Standing
- Full Premiership table with Saints' row highlighted, showing P/W/D/L/Pts and points-for/against
- Position-over-time trend line (weekly league position across the season)
- Playoff bracket view: semi-final and final results

Reference results:
| Stage | Fixture | Score | Notes |
|---|---|---|---|
| Semi-final | Northampton Saints v Leicester Tigers | **45–31** | Tom Litchfield hat-trick, George Furbank brace |
| Final | Northampton Saints v Exeter Chiefs | **26–17** | Henry Pollock named Player of the Match; George Hendy scored twice in a 4-minute second-half spell |

### 3.3 Match Center (Results & Fixtures)
A filterable list/grid of every match played across competitions (Premiership + Champions Cup), each showing score, venue, competition, and W/D/L status. Should support filtering by competition and by home/away.

Champions Cup Pool 4 results for reference:
| Round | Fixture | Score | Result |
|---|---|---|---|
| R1 | Section Paloise v Northampton Saints | 27–35 | Win |
| R2 | Northampton Saints v Vodacom Bulls | 50–5 | Win |
| R3 | Union Bordeaux Bègles v Northampton Saints | 50–28 | Loss |
| R4 | Northampton Saints v Scarlets | 43–28 | Win |
| R16 | Northampton Saints v Castres Olympique | Win | Advanced |
| QF | Northampton Saints v Bath | 41–43 | Loss (eliminated) |

Saints finished 2nd in Pool 4 before exiting at the quarter-final stage.

### 3.4 Player Stats & News
Player-level view combining performance data with squad news, since both were significant storylines this season.

**Performance data to surface (pull live from source of record, not hardcoded):**
- Points, tries, conversions, assists per player, filterable by competition
- Leading try scorer: **Tommy Freeman**, including standout games (e.g. hat-trick v Bath)
- Squad appearance/minutes-played view for rotation analysis

**News/status feed to surface alongside stats:**
- Injuries: Alex Mitchell and Alex Coles sidelined long-term following Six Nations injuries; Trevor Davison underwent knee surgery after a match against Saracens
- Squad moves: James Martin signed as a winger ahead of the season; nine players confirmed to depart at the end of 2025/26 (Tom West, Fyn Brown, Will Glister, Emeka Atuanya, Billy Pasco, Marco Manfredi, Archie Appleby, Jack Lawrence, Siep Walta)
- Awards: Henry Pollock — Player of the Match, PREM Final

Suggested component: player card grid with a status chip (Available / Injured / Departing) plus a linked news feed panel.

### 3.5 Insights & Analytics
The "so what" layer — translate raw stats into a few clear, high-level takeaways rather than a wall of numbers.

Suggested insight modules:
- **Attacking output trend:** tries and conversions scored per match across the season, with the try-scoring record (111 tries) called out as a milestone marker on the trend line
- **Conversion accuracy:** team conversion rate over time, and by kicker if data allows
- **Points-scored vs points-conceded** trend, to visualise attacking vs defensive form
- **Competition comparison:** Premiership form vs Champions Cup form side by side (Saints were dominant domestically but fell short in Europe)
- **Home vs away split** for results and scoring output

Keep this section narrative-led: 3–5 short insight callouts (e.g. "Saints scored 2+ tries in X% of matches") paired with a supporting chart, rather than dense tables.

## 4. Data Requirements

- Dashboard should be built to pull from a live/updatable data source (fixtures, results, player stats) rather than hardcoding season data — the figures in this brief are reference points to establish scope and validate against, not the final data feed.
- Minimum fields needed: match date, competition, opponent, venue, score, tries (team + scorer), conversions (attempted/made), league table snapshot per round, player appearances, injury/availability status.

## 5. Success Criteria

- A stakeholder can identify the season's headline outcome (Premiership champions) within 5 seconds of landing on the dashboard
- League position, results, and player stats are each reachable in one click/scroll from the summary view
- Insights section reads as a narrative summary, not a raw stats export

---

## Sources

Season facts referenced above were compiled from public reporting for verification/context; the live dashboard should treat an authoritative data feed as the source of truth.

- [2025–26 Premiership Rugby – Wikipedia](https://en.wikipedia.org/wiki/2025%E2%80%9326_Premiership_Rugby)
- [League Table | Northampton Saints](https://www.northamptonsaints.co.uk/index.php/table/114)
- [Table-topping Northampton on verge of PREM try-scoring record – RugbyPass](https://www.rugbypass.com/news/table-topping-northampton-on-verge-of-prem-try-scoring-record/)
- [Northampton Saints 26-17 Exeter Chiefs recap – TNT Sports](https://www.tntsports.co.uk/rugby/premiership/2025-2026/live-northampton-saints-exeter-chiefs_mtc1628892/live-commentary.shtml)
- [Litchfield's hat-trick fires Northampton Saints into final – The42](https://www.the42.ie/northampton-saints-leicester-tigers-match-report-7069907-Jun2026/)
- [Northampton Saints v Leicester Tigers: Five takeaways – Planet Rugby](https://www.planetrugby.com/news/northampton-saints-v-leicester-tigers-five-takeaways-from-prem-rugby-semi-final-as-fin-smith-and-henry-pollock-shine)
- [Fixtures & Results | Northampton Saints – EPCR Champions Cup](https://www.epcrugby.com/champions-cup/clubs/northampton-saints/fixtures-results)
- [Champions Cup: Northampton Saints thrashed by Bordeaux-Bègles – Sky Sports](https://www.skysports.com/rugby-union/news/12332/13493090/champions-cup-northampton-saints-thrashed-by-bordeaux-begles-in-final-repeat-as-harlequins-seal-knockout-place)
- [Saints confirm nine players to depart this summer – Northampton Saints](https://www.northamptonsaints.co.uk/news/saints-confirm-players-depart-2526)
- [Saints' growing list of injured stars – RugbyPass](https://www.rugbypass.com/news/saints-growing-list-of-injured-stars-has-grave-ramifications-for-england/)
- [Winger James Martin joins Saints ahead of 2025/26 season – Northampton Saints](https://www.northamptonsaints.co.uk/news/winger-james-martin-joins-saints-ahead-of-2025-26-season)
- [Northampton Saints player ratings vs Bath – RugbyPass](https://www.rugbypass.com/news/northampton-saints-player-ratings-vs-bath-2025-26-gallagher-prem/)
