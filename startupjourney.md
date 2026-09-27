# Startup Journey: CompanyOS

## 1. Current Snapshot

- **Project name:** CompanyOS
- **Local folder:** `/Users/joshuadavis/startups/companyos`
- **Live URL:** https://companyos.noaerth.com (portfolio subdomain pattern)
- **Live site status:** HTTP **200**
- **Product:** Founder command center OS — operating rhythm, priorities, risks, and weekly brief from company chaos
- **Framework:** Next.js App Router, TypeScript, Tailwind, Prisma (SQLite dev)
- **Build command:** `pnpm build`
- **Local review command:** `pnpm dev` → http://localhost:3000
- **Current build status:** **PASS** (2026-05-14)
- **GitHub remote:** **None** — no project-level git configured
- **GitHub push status:** N/A
- **Deployment:** **Not run** this loop
- **Last updated:** 2026-05-14

- Overall reality label: **VERIFIED (local build) + DEMO (product flows)**
- Launch readiness: **NOT READY**
- Proof ladder level: **4 — Local build proof**

## 2. Portfolio Score

| Dimension | Score (0–10) | Notes |
|-----------|----------------|-------|
| Product clarity | 8 | Founder command center positioning is clear |
| MVP reality | 8 | Demo, dashboard, brief, `/api/runs` |
| Visual quality | 8 | Cohesive dark founder OS aesthetic |
| Build health | 8 | **PASS** |
| Customer urgency | 8 | Founders drowning in tools and meetings |
| Market potential | 8 | Operating system wedge for startups |
| Monetization potential | 8 | Pricing + team seat path |
| Growth potential | 7 | Brief output is shareable internally |
| Investor story | 8 | “Command center OS” narrative |
| Local review readiness | 8 | `/demo` → `/dashboard` → `/brief` path |

- **Total score:** **79 / 100**
- **Classification:** **Strong venture** — credible founder OS surface; needs git + deeper dashboard persistence story
- **Best next loop type:** **Data credibility loop** (seeded runs) + **GitHub**

## 3. 10-Second Startup Explanation

- **What this startup is:** A founder command center that turns messy company inputs into priorities, risks, owners, and a weekly operating brief.
- **Who it is for:** Founders and small leadership teams who run the company across Slack, docs, and ad-hoc dashboards.
- **What pain it solves:** Too many updates, too many tools, too many meetings — not enough execution clarity.
- **What the user can do:** Run demo flows, open dashboard, generate brief, explore pricing.
- **Why it matters:** When priorities live only in the founder’s head, the company moves without purpose.
- **Primary CTA:** Open demo (`/demo`)

## 4. Founder Thesis

- **Core belief:** Founders need an operating system, not another dashboard per function.
- **Why this should exist:** Every team added software; nobody unified priorities, risks, and rhythm.
- **Why now:** AI can synthesize chaos — but only if the product enforces owners and cadence.
- **Market wedge:** Brief generator + risk radar + priority stack on one surface.
- **Expansion path:** Integrations (Slack, CRM), team workspaces, investor updates.
- **What this can become:** System of record for how the company actually runs week to week.
- **1000x opportunity:** Cross-company operating pattern intelligence (aggregated, consented).
- **Biggest strategic risk:** Perceived as “another AI summary tool” without durable run history.
- **Next founder decision:** Git init + label demo vs persisted runs on dashboard.

## 5. Live Website Diagnosis

Based on live site (HTTP **200**):

- **Status code or load status:** **200**
- **What visitors currently see:** Founder command center positioning, demo and dashboard entry, pricing, brief.
- **Current headline:** CompanyOS / founder operating system framing (verify live hero).
- **Current CTA:** Demo (`/demo`).
- **What works:** Route depth matches product story; build **PASS**; mobile `SiteNav`.
- **What feels weak:** First-time dashboard may feel empty without seeded company run.
- **What feels generic:** “AI operating system” without showing sample brief output above fold.
- **What feels confusing:** Which flows persist vs illustrative — label explicitly.
- **What feels unfinished:** `/command` and `/rhythm` depth vs homepage promise.
- **What feels premium:** Risk radar, priority stack, and brief modules on landing.
- **What is missing:** Git backup; export for board/investor rhythm.
- **Highest leverage live-site fix:** Auto-load sample run on dashboard + brief preview on homepage.

## 6. Local Codebase Diagnosis

- **Framework:** Next.js App Router, TypeScript, Tailwind, Prisma
- **App structure:** Marketing + demo + dashboard + brief + API runs
- **Current routes:** `/`, `/demo`, `/dashboard`, `/pricing`, `/brief`, `/about`, `/command`, `/rhythm`, `/dashboard/runs/[id]`, `/api/runs`, `/api/runs/[id]`
- **Current pages:** Home (`CompanyOSLanding`), demo, dashboard, pricing, brief, about, command, rhythm
- **Current components:** `SiteNav` (mobile drawer), `FounderCommandCenter`, `RiskRadar`, `PriorityStack`, `CustomerSignalFeed`, marketing sections
- **Current data files:** `founderDashboardDemo.ts`, `briefGenerator.ts`, Prisma `companyRun` model
- **Current styling system:** Tailwind dark zinc/violet founder aesthetic
- **Technical risks:** No git — off-machine backup missing
- **Build risks:** None — **PASS** (with Prisma prebuild)
- **Env var risks:** `DATABASE_URL` for production DB before deploy
- **API risks:** `/api/runs` validation and error shapes
- **Mobile risks:** Mitigated via mobile `SiteNav` with scroll lock
- **GitHub risks:** **No repo**
- **Local review risks:** Test demo → dashboard → brief on mobile width

## 7. Company Role Analysis

### CEO / Founder

- **Thesis:** Own the founder operating layer, not another Notion template.
- **Wedge:** Weekly brief + risk radar as default leadership cadence.
- **Biggest opportunity:** Become default command center for seed-stage CEOs.
- **Biggest risk:** Summaries without owners and follow-through feel hollow.
- **Next decision:** Git + persisted run story on dashboard.

### Chief Product Officer

- **MVP:** Demo, dashboard, brief, pricing, runs API.
- **Primary workflow:** `/demo` → ingest → `/dashboard` → `/brief`.
- **Dashboard:** Priorities, risks, signals (per implementation).
- **Onboarding:** Homepage explains chaos → clarity transformation.
- **Retention loop:** Weekly brief regeneration on cadence (backlog).

### Customer Researcher

- **Buyer:** Founder, COO, chief of staff at 10–80 person startups.
- **User:** Founder pasting weekly inputs; ops lead maintaining dashboard.
- **Pain:** Silent priority shifts, risk surprises, meeting debt.
- **Alternatives:** Notion, EOS tools, chief-of-staff decks, generic AI chat.
- **Objections:** “Will this stick after week two?”
- **Trust builders:** Sample run, owner labels, exportable brief.

### JTBD Strategist

- **Job-to-be-done:** “Give me one place to see what actually matters this week.”
- **Trigger:** Board prep, missed commitment, team confusion on P0.
- **Desired outcome:** Named owners, mitigations, and a brief leadership can circulate.
- **Old way:** Founder-maintained doc + scattered Slack pins.
- **New way:** Demo run → dashboard → weekly brief on rhythm.

### UX Designer

- **UX issue:** Mobile nav to demo/dashboard/brief — **addressed** via `SiteNav`.
- **Homepage flow:** Problem → modules → demo CTA.
- **App flow:** Demo input → dashboard surfaces → brief output.
- **Mobile flow:** Drawer nav to primary routes with body scroll lock.
- **Friction removed:** Unreachable dashboard on phone (fixed).

### Visual Design Director

- **Visual identity:** Dark, decisive — founder war room, not consumer SaaS pastel.
- **Type:** Clear hierarchy for P0/P1 and risk tiers.
- **Color:** Violet/indigo accents on zinc; accessible risk labels.
- **Motion:** CSS-only transitions in nav; no invalid motion JSX.
- **Component style:** Cards, radar, stack consistent across routes.

### Brand Strategist

- **Category:** Founder command center / company operating system.
- **Enemy:** Tool sprawl without execution clarity.
- **Memorable phrase:** “Turn company chaos into operating rhythm.”
- **Voice:** Direct, operator-trusted, no magic CEO coach tone.

### Copy Chief

- **Headline:** Command center OS, not “AI for founders.”
- **Subheadline:** Priorities, risks, owners, weekly brief — one surface.
- **CTA:** “Run the demo” / “Open dashboard.”
- **Copy rules:** Distinguish illustrative demo data vs saved runs.

### Staff Engineer

- **Architecture:** Next + Prisma SQLite dev + `/api/runs`.
- **Build:** **PASS**
- **Env strategy:** Document `DATABASE_URL` for Postgres before production.
- **Dependency plan:** Version runs API schema early.

### Frontend Engineer

- **Pages:** Landing, demo, dashboard, brief primary surfaces.
- **Components:** `SiteNav` mobile drawer this loop.
- **Interactions:** Demo forms, dashboard fetches, brief display.
- **Mobile fixes:** Nav + readable priority/risk blocks on narrow screens.

### Full-Stack Architect

- **Data:** `companyRun` via Prisma; brief generator lib.
- **Future database:** Postgres multi-tenant workspaces.
- **Future auth:** Team roles (founder, COS, functional lead).
- **Future API:** Webhooks on risk tier changes.
- **Future billing:** Seats + run history tiers.

### AI Product Architect

- **AI use:** Brief and priority synthesis from pasted inputs — rules + templates OK for MVP.
- **Safe boundaries:** Decision support; human owns commitments.
- **Future plan:** LLM summaries with citations to ingested snippets only.

### Data Moat Strategist

- **Data loop:** Weekly brief outcomes × priority completion (aggregated).
- **Feedback loop:** “Was this brief accurate?” after week close.
- **Benchmark:** Risk distribution by stage (anonymized).

### Growth Marketer

- **Hook:** “Your company has ten dashboards and zero operating system.”
- **SEO:** founder operating system, weekly brief generator startup.
- **Distribution:** Founder communities, accelerator newsletters.
- **Share loop:** PDF brief export (backlog).

### Sales Operator

- **Buyer pain:** Board meetings without a crisp operating picture.
- **Proof:** Live demo + dashboard on **200** site.
- **Pricing:** Team seats (hypothesis on `/pricing`).
- **Objections:** Stickiness — counter with rhythm + run history.

### Pricing Strategist

- **Model:** SaaS seats per leadership team.
- **Free tier:** Limited demo runs (hypothesis).
- **Paid tier:** Unlimited runs, exports, integrations.
- **Upgrade trigger:** Second functional lead needs shared dashboard.

### Investor Analyst

- **Venture thesis:** Command center layer wins before ERP/Notion replace founder spreadsheets.
- **Market:** Founder ops / chief-of-staff software.
- **Expansion:** Integrations, investor update mode, multi-company holding cos.
- **Moat:** Outcome-labeled operating patterns across consented runs.
- **Metrics:** Weekly brief generations, dashboard return rate, risk mitigations closed.

### Competitive Intelligence Analyst

- **Category pattern:** Notion/EOS templates vs purpose-built founder OS.
- **Differentiation:** Risk radar + brief + runs API as integrated cadence, not docs.

### Experiment Designer

- **Tests:** Homepage brief preview vs text-only hero.
- **Success metric:** Demo completion → dashboard visit → brief page.
- **Feedback loop:** Brief usefulness rating (1–5).

### QA Engineer

- **Build:** **PASS**
- **Routes:** `/`, `/demo`, `/dashboard`, `/pricing`, `/brief`, `/api/runs`.
- **Mobile:** `SiteNav` all primary links.

### Security / Trust Reviewer

- **Risks:** Company inputs may contain confidential strategy — encrypt at rest in production.
- **Disclaimers:** Decision support; leadership owns commitments.
- **Data handling:** No logging of full pasted inputs in plaintext analytics.

### Legal / Policy Framing Reviewer

- **Risk category:** Low — business operations, not regulated advice.
- **Safe framing:** Operating intelligence, not legal/financial counsel.
- **Required disclaimers:** Demo data labels on dashboard and brief outputs.

### GitHub Release Operator

- **Remote:** **None**
- **Commit / push:** Not run

### Local Review Director

- **Command:** `cd /Users/joshuadavis/startups/companyos && pnpm dev`
- **URL:** http://localhost:3000
- **Test flow:** `/demo` → `/dashboard` → `/brief` → mobile nav

### Speed / Token Efficiency Operator

- **Scope:** Mobile `SiteNav` + journey doc; build verified **PASS**.
- **Blockers:** None.

### Taste Reviewer

- **Quality diagnosis:** Strong founder OS feel; brief module is differentiator.
- **Premium fix:** Homepage live brief snippet with severity chips.

### Contrarian Strategist

- **Angle:** Sell to accelerators as portfolio operating cockpit.
- **Wedge:** “Board week mode” — 72h brief-only SKU.

### Community / Ecosystem Builder

- **Community:** Founder rhythm office hours (weekly brief templates).
- **Public artifact:** Operating cadence checklist (informational).

### Automation Architect

- **Safe automation:** CI build; human approves brief emails to leadership.
- **Future:** Slack ingest with validation queue before synthesis.

## 8. Product Strategy

- **MVP definition:** Demo + dashboard + brief + pricing + runs API.
- **Primary workflow:** Ingest chaos → see priorities/risks → generate brief.
- **Input:** Pasted updates, goals, blockers (per demo).
- **Output:** Priority stack, risk radar, weekly brief, run records.
- **First aha moment:** One risk surfaced that team had not named an owner for.
- **Dashboard purpose:** Ongoing operating picture across runs.
- **Retention loop:** Weekly brief on cadence.
- **Monetization path:** Leadership team seats + integration tier.

## 9. Roadmap

### Loop 1: Make It Understandable

- Homepage + demo CTA — **strong**.

### Loop 2: Make It Real

- Mobile `SiteNav` — **done**; seeded dashboard run next.

### Loop 3: Make It Premium

- Brief export styling; risk visualization hierarchy.

### Loop 4: Make It Useful

- Slack/doc ingest stubs with source labels.

### Loop 5: Make It Monetizable

- Pricing aligned to seats and run history.

### Loop 6: Make It Fundable

- Metrics: brief generations, weekly return rate.

### Loop 7: Make It Compound

- Integration ingest with validation queue.

### Loop 8: Make It Defensible

- Anonymized operating benchmarks by stage.

### Loop 9: Make It Distributable

- Accelerator partnerships; founder newsletter content.

### Loop 10: Make It Operationally Scalable

- Postgres, auth, SSO, encrypted inputs, audit logs.

## 10. Work Completed This Loop

### Loop Entry: 2026-05-14

- **Loop type:** Mobile navigation
- **Loop goal:** Mobile `SiteNav` for `/`, `/demo`, `/dashboard`, `/pricing`, `/brief`; maintain **PASS** build
- **Changes made:** Client `SiteNav` with mobile drawer, body scroll lock, and primary route links.
- **Files changed:** `components/SiteNav.tsx`, root layout (typical touch points)
- **Routes added:** none
- **Routes improved:** All layout pages reachable via mobile nav
- **Components added:** none
- **Components improved:** `SiteNav`
- **MVP interactions added:** Mobile navigation to demo, dashboard, pricing, brief
- **Demo data added:** none
- **Copy improved:** none major this loop
- **Design improved:** Sticky mobile nav pattern
- **Mobile improved:** Full primary link list in drawer
- **Engineering fixed:** Build remains **PASS**
- **Build result:** **PASS**
- **GitHub commit:** N/A — no project git
- **GitHub push result:** N/A
- **Deployment:** **Not run**
- **Local review command:** `pnpm dev`
- **Local review URL:** http://localhost:3000
- **What improved:** Mobile IA to core founder routes
- **What still needs work:** Git remote; seeded run on dashboard; demo vs persisted labels

## 11. Next Loop Plan

- **Highest leverage next move:** `git init`; auto-load sample `companyRun` on dashboard; brief preview on homepage.
- **Product:** `/command` and `/rhythm` aligned to weekly cadence story.
- **Design:** Risk severity hierarchy with accessible labels.
- **Engineering:** Document `/api/runs` schema; Postgres migration path.
- **Growth:** One founder case study (when data allows).
- **Sales:** Pilot narrative for seed CEOs + chiefs of staff.
- **Monetization:** Align `/pricing` with seats and run tiers.
- **Investor story:** Weekly brief generation rate and dashboard retention.
- **Trust/safety:** Clear demo labels; no overclaim on automation.
- **GitHub:** Create repo when user approves.
- **Biggest risk:** Perceived as generic AI summary without operating discipline.
- **Suggested next command:** `cd /Users/joshuadavis/startups/companyos && pnpm dev`

## 12. 1000x Backlog

### Product

- Slack/CRM ingest; investor update mode; multi-company workspaces

### Design

- Brief PDF export; executive one-pager template

### Engineering

- Postgres; auth; encrypted run storage; API versioning

### Growth

- Founder community content; accelerator partnerships

### Sales

- Enterprise pilot for portfolio operators

### Monetization

- Seats + integration tiers

### Investor Narrative

- “Founder command center OS”

### Data Moat

- Aggregated operating benchmarks by stage (consented)

### Automation

- Ingest validation queue before synthesis

### Partnerships

- Accelerators; fractional COS networks

### SEO / Content

- Founder operating rhythm guides

### User Retention

- Weekly brief reminders; quarterly board export

### Demo Quality

- Seed runs for SaaS, marketplace, and hardware founder stories

### Mobile Experience

- Dashboard and brief readable on phone

### Trust and Safety

- Demo labels; no legal/financial advice framing

### Real API Integrations

- Slack, Linear, HubSpot read-only where licensed

### Enterprise Features

- SSO; RBAC; audit logs

### Future AI Features

- Brief narratives with citations to ingested snippets only

### Community

- Founder rhythm office hours

### Distribution

- Embed brief widget for partner sites

### Templates

- Standard weekly brief sections per company stage

### Analytics

- Funnel: demo → dashboard → brief → return next week

### Internal Tools

- Copy linter for over-automation claims

### Public Artifacts

- Operating cadence checklist for founders

## Work completed this loop
### Portfolio loop (2026-05-16)

- Graphics kit, TrustStrip, SubpageVisual, LOCAL_REVIEW, PROOF_LOOP in place.
- Build status: see `.noaerth_full_build_status.tsv` at portfolio root.
- Claim level: DEMO for public metrics unless marked PROVEN below.


## 8. Work Completed This Loop (Hyperion v6 — 2026-05-18)
- Mode: REALITY LABELS + portfolio memory
- Build matrix: **PASS** (portfolio TSV)
- Reality labels: snapshot + evidence map normalized
- Git: see per-project safe commit

## 8. Work Completed This Loop (BlackDiamond v7 — 2026-05-18)
- Mode: CLAIM REGISTER + FAILURE REGISTER
- Build matrix: **PASS** (portfolio TSV)
- Claim register: created/updated
- Failure register: created/updated
- Launch gate: LOCAL REVIEW READY if build PASS (not PUBLIC READY)
- Git: see per-project safe commit

## 8. Work Completed This Loop (EverestKernel v8 — 2026-05-18)
- Mode: LAUNCH READINESS + REVIEW QUEUE
- LAUNCH_READINESS.md: installed/updated
- Build matrix: **PASS**
- Launch gate: **NOT READY**
- Review queue: see NOAERTH_REVIEW_QUEUE.md if P1 demo project
- Deployment: none

## 8. Work Completed This Loop (SovereignCompiler v9 — 2026-05-18)
- Mode: DECISION RECORD + launch governance
- DECISION_RECORD.md: installed/updated
- Build matrix: **PASS** (TSV; spot-build after code changes)
- AI boundary: no deploy, no vercel --prod

## 8. Work Completed This Loop (SingularityForge v11 — 2026-05-18)
- Mode: PROOF LADDER + claim safety batch
- Proof ladder: **4 — Local build proof**
- Build matrix: **PASS** (TSV; spot-build after code changes)
- No deploy

## TitanAtlas v13 patch (2026-05-18)
- Scored total: 68/100 · stage: dashboard MVP · priority: P2
- Recommended action: local review + claim safety
