---
id: marketguard
name: Market Guard (마켓가드)
country: KR
category: fintech-market-coach
homepage: ""
primary_color: "#04c584"
logo:
  type: wordmark
  slug: "marketguard"
verified: "2026-06-12"
omd: "0.1"
ds:
  name: Market Guard Personal Design System
  url: ""
  type: brandfit
  description: A personal market-risk briefing and action-guard design system adapted from the reference visual language while preserving the original color, spacing, typography, density, radius, shadow, and motion choices.
  og_image: ""
runtime_deps:
  icons: lucide-react
  fonts: [Pretendard, "BM JUA"]
tokens:
  source: prose-derived
  extracted: "2026-06-08"
  colors:
    primary: "#04c584"
    primary-hover: "#10df99"
    brand: "#04c584"
    canvas: "#ffffff"
    foreground: "#2b2b2b"
    muted: "#7b7b7b"
    on-primary: "#ffffff"
    surface-alt: "#fbfbfb"
    surface-neutral: "#f5f5f5"
    body: "#434444"
    placeholder: "#999999"
    disabled: "#acacac"
    hairline: "#e1e1e1"
    mint-tint: "#f3fdfa"
    error: "#fe493d"
    error-soft: "#ff8a84"
    warning: "#fd8700"
    warning-deep: "#f56200"
    info: "#0099ff"
    success: "#04c584"
    chart-1: "#34464b"
    chart-2: "#5c818a"
    chart-3: "#1c6c73"
    chart-4: "#a7c7cf"
  typography:
    family: { sans: "Pretendard", display: "BM JUA" }
    hero-display:     { size: 52, weight: 700, lineHeight: 1.23, tracking: -1, use: "Largest landing headline; sometimes Jua" }
    display-lg:       { size: 48, weight: 700, lineHeight: 1.2, tracking: -1, use: "Secondary hero" }
    display:          { size: 44, weight: 700, lineHeight: 1.25, tracking: -1, use: "Section-opening figures (risk scores, exposure totals)" }
    section-heading:  { size: 36, weight: 700, lineHeight: 1.3, tracking: -0.5, use: "Marketing section titles" }
    h1:               { size: 28, weight: 700, lineHeight: 1.14, use: "In-app section titles" }
    h2:               { size: 24, weight: 700, lineHeight: 1.17, use: "Card titles, panel headings" }
    h3:               { size: 20, weight: 700, lineHeight: 1.2, use: "Sub-card headings" }
    subhead:          { size: 18, weight: 700, lineHeight: 1.3, use: "Featured-button text, key callouts" }
    body-lg:          { size: 16, weight: 500, lineHeight: 1.5, use: "Standard reading text on data screens" }
    body:             { size: 14, weight: 500, lineHeight: 1.34, use: "Default body text; 500 not 400" }
    body-tight:       { size: 13, weight: 500, lineHeight: 1.34, use: "Compact labels" }
    caption:          { size: 12, weight: 500, lineHeight: 1.34, use: "Metadata, helper text" }
    caption-sm:       { size: 10, weight: 500, lineHeight: 1, use: "Disclosures, smallest labels" }
    button:           { size: 16, weight: 700, lineHeight: 1, tracking: -1, use: "All CTAs are 700" }
    financial-amount: { size: 24, weight: 700, lineHeight: 1, use: "Comma-grouped market values; unit follows in 500" }
  spacing: { xs: 4, sm: 8, md: 16, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 2, md: 4, lg: 8, full: 9999 }
  shadow:
    soft: "rgba(0,0,0,0.08) 0px 1px 1px 0px"
    standard: "rgba(0,0,0,0.12) 0px 2px 5px 0px"
    elevated: "rgba(0,0,0,0.15) 0px 4px 9px 0px"
    modal: "rgba(0,0,0,0.19) 0px 17px 50px 0px"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#04c584", fg: "#ffffff", radius: "2px", height: "42px", padding: "12px 24px", font: "16px / 700", hover: "bg #10df99 (lightens)", use: "Primary CTA on briefing and guardrail flows" }
    button-primary-large: { type: button, bg: "#04c584", fg: "#ffffff", radius: "2px", height: "56px", padding: "16px 32px", font: "18px / 700", hover: "bg #10df99", use: "Hero CTA on landing surfaces" }
    button-ghost: { type: button, bg: "#ffffff", fg: "#04c584", border: "1px solid #04c584", radius: "2px", padding: "12px 24px", font: "16px / 700", hover: "bg #f3fdfa mint tint", use: "Secondary action paired with primary" }
    button-neutral: { type: button, bg: "#f5f5f5", fg: "#434444", radius: "2px", padding: "12px 24px", font: "16px / 700", hover: "bg #e1e1e1", use: "Cancel / dismiss" }
    button-disabled: { type: button, bg: "#e1e1e1", fg: "#acacac", radius: "2px", font: "16px / 700", use: "Disabled state" }
    input-text: { type: input, bg: "#ffffff", fg: "#434444", border: "1px solid #e1e1e1", radius: "2px", height: "48px", padding: "0 16px", font: "16px / 500", focus: "border #10df99 + bg #f3fdfa", use: "Default text input" }
    input-amount: { type: input, bg: "#ffffff", fg: "#2b2b2b", border: "2px solid #f5f5f5", radius: "2px", height: "56px", padding: "0 16px", font: "22px / 700", focus: "border #10df99 + bg #f3fdfa", use: "Portfolio value or cash-ratio input, right-aligned, amount as heading" }
    card-data: { type: card, bg: "#ffffff", border: "1px solid #e1e1e1", radius: "2px", padding: "20px 24px", shadow: "rgba(0,0,0,0.12) 0px 2px 5px 0px", use: "Briefing, signal, and guardrail summary cards" }
    card-highlight: { type: card, bg: "#f3fdfa", border: "1px solid #10df99", radius: "2px", padding: "20px 24px", use: "Selected guardrail or user-exposure highlight" }
    status-pill: { type: badge, bg: "#f3fdfa", fg: "#04c584", radius: "41px", padding: "4px 10px", font: "12px / 500", use: "Filter chips on recommendation pages" }
    badge-warning: { type: badge, bg: "#ffffff", fg: "#f56200", border: "1px solid #fd8700", radius: "2px", padding: "2px 8px", font: "12px / 700", use: "Market-warning, stale-data, attention-needed indicators" }
    badge-negative: { type: badge, bg: "#ffffff", fg: "#fe493d", border: "1px solid #fe493d", radius: "2px", padding: "2px 8px", font: "12px / 700", use: "Blocking risk and failed-data indicators" }
    table-row: { type: listItem, bg: "#ffffff", fg: "#434444", border: "1px solid #e1e1e1 bottom", padding: "12px 16px", font: "14px / 500", use: "Signal rows; alternates #fbfbfb, values right-aligned 14px/700 #2b2b2b neutral #fe493d risk" }
---

## 1. Visual Theme & Atmosphere

Market Guard (마켓가드) is the design language of a **personal market-risk coach that runs on evidence, not adrenaline**. Where consumer-investing apps often turn volatility into excitement, Market Guard insists that *risk clearly named, then translated into action limits*, is the actual brand promise. The app opens on a white canvas (`#ffffff`/`#fbfbfb`) with warm near-black text (`#2b2b2b` for headings, `#434444` for body — never pure `#000`), anchored by a saturated mint-green `#04c584` that does all the interactive work. The green becomes **guard mint**: calm enough for defensive decisions, still visible enough for the user's next action.

The single most distinctive geometric choice is the radius scale. The reference system is **almost-flat**: 2px is just enough to take the harshness off a corner without softening anything into "app-friendly" plumpness. Market Guard keeps that geometry because it tells the user: this is a decision surface, not a hype feed. The tabular density follows from the same conviction — signal rows, sector exposure, and risk drivers stay tightly visible, and the 700-weight Pretendard digits never apologize for taking up space.

Typography pairs **Pretendard** (the de-facto Korean modern sans, designed by Kil Hyun-jin, weight-axis variable) with **BM JUA** ("배민 주아체", Battle Grounds Jua — a rounded, friendly Korean display face) as an accent. Pretendard does 99% of the work; Jua appears only for rare landing/display moments where Market Guard wants to feel approachable without weakening the data-tool tone. The default weight is **700** for judgments, numbers, and action labels, with 500 as the secondary "emphasis on body" weight. Light weights are reserved for the largest hero numerals where the size carries the authority.

**Key Characteristics:**
- Pretendard + Apple SD Gothic Neo + Noto Sans KR font stack — Korean-native typography first
- "BM JUA" as accent display font for landing/promotional moments only
- Signature green `#04c584` (guard mint) for all interactive moments
- Hover/focus green `#10df99` (one shade brighter) — interaction makes things *lighter*, not darker
- 2px radius dominance — the brand reads as data-tool, not consumer-app
- Warm near-black `#2b2b2b`/`#434444` for type instead of `#000000`
- Mint focus tint `#f3fdfa` on input backgrounds — the only branded background tint in the system
- 700 weight as default for headings and financial figures; 500 for body emphasis
- Subtle single-layer shadows `0 2px 5px rgba(0,0,0,.12)` — never colored, never theatrical
- Teal-gray data palette (`#34464b`/`#5c818a`/`#1c6c73`/`#a7c7cf`) for chart series — cool, advisor-grade

## 2. Color Palette & Roles

### Primary
- **Guard Mint** (`#04c584`): Primary brand color, CTA backgrounds, links, accent rules, and selected personal-exposure accents. Mint with a touch of grass — readable on white, energetic but not playful.
- **Hover Green** (`#10df99`): Brighter mint applied on hover, focus border, and the resting state of less-prominent CTAs. Market Guard lightens to indicate interaction (opposite of the conventional darken-on-hover pattern).
- **Mint Tint** (`#f3fdfa`): Focus background on inputs, success surface fill. The only branded tint in the system.

### Heading & Body
- **Heading** (`#2b2b2b`): Warm near-black for headlines, prominent labels, and financial amounts. Never `#000`.
- **Body** (`#434444`): Standard reading text. Filled-input text color.
- **Body Light** (`#7b7b7b`): Captions, secondary descriptions.
- **Placeholder** (`#999999`): Input placeholders, muted metadata.
- **Disabled** (`#acacac` / `#c0c0c0`): Disabled text and icons.

### Surface & Border
- **Page** (`#ffffff`): Default canvas.
- **Surface Light** (`#fbfbfb`): Soft surface alternation, panel fills.
- **Surface Neutral** (`#f5f5f5`): Dividers, separator backgrounds, content shelf fills (most-used neutral after green).
- **Border Input** (`#e1e1e1`): Default input border, divider line.
- **Surface Mint** (`#f3fdfa`): Success-state surface fill.

### Data / Chart Palette (teal-slate family)
- **Deep Slate** (`#0b0c0c`): Maximum-depth axis labels.
- **Teal-Slate 900** (`#333a44`): Primary chart series.
- **Teal-Slate 800** (`#34464b`): Secondary chart series, table headers.
- **Teal-Slate 700** (`#436068`): Tertiary chart.
- **Teal 600** (`#1c6c73`): Highlighted data point.
- **Teal-Gray 500** (`#5c818a`): Subdued data, legend.
- **Teal 400** (`#318b93`): Mid-range fills.
- **Pale Teal** (`#a7c7cf`): Background fills for chart bands.

The teal-slate family is intentionally **cooler than the brand green**, so that chart series read as neutral data rather than as branded surfaces. Market Guard's green is for interaction and the user's own exposure; teal-slate is for market information.

### Semantic
- **Error Red** (`#fe493d`): Strong error states, blocking validation.
- **Error Soft** (`#ff8a84`): Light error tint, secondary error indicators.
- **Warning Orange** (`#fd8700`): Warning emphasis (rate spikes, expiry).
- **Warning Deep** (`#f56200`): Highest-severity warning.
- **Warning Light** (`#ff9900`): Soft warning highlights.
- **Info Blue** (`#0099ff`): External links, info notices (used sparingly — green is the default link color).
- **Success Green** (`#04c584` / `#10df99` / `#13bd7e`): Success uses brand green; there is no separate success hue.

## 3. Typography Rules

### Font Family
- **Primary**: `Pretendard, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif`
- **Display Accent**: `"BM JUA", sans-serif` — reserved for marketing-landing headlines where a warm, rounded Korean voice is wanted (rare; default to Pretendard)
- Variable-axis Pretendard supplies 300/400/500/700/800/900 weights as needed; subset woff2 files for ExtraBold (800), Bold (700), Medium (500), Regular (400) are preloaded on the home page

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|---|---|---|---|---|---|---|
| Hero Display | Pretendard | 52px | 700 | 64px (1.23) | -1px | Largest landing headline; sometimes Jua for marketing warmth |
| Display Large | Pretendard | 48px | 700 | 1.2 | -1px | Secondary hero |
| Display | Pretendard | 38–44px | 700 | 1.25 | -1px | Section-opening figures (risk scores, exposure totals) |
| Section Heading | Pretendard | 32–36px | 700 | 1.3 | -0.5px | Marketing section titles |
| Heading 1 | Pretendard | 28px | 700 | 32px | normal | In-app section titles |
| Heading 2 | Pretendard | 22–24px | 700 | 28px | normal | Card titles, panel headings |
| Heading 3 | Pretendard | 20px | 700 | 24px | normal | Sub-card headings |
| Subhead | Pretendard | 18px | 700 | 1.3 | normal | Featured-button text, key callouts |
| Body Large | Pretendard | 16px | 500 | 1.5 | normal | Standard reading text on data screens (700 for emphasis) |
| Body | Pretendard | 14px | 500 | 1.34 | normal | Default body text; 500 weight, not 400 |
| Body Tight | Pretendard | 13px | 500 | 1.34 | normal | Compact labels |
| Caption | Pretendard | 12px | 500 | 1.34 | normal | Metadata, helper text |
| Caption Small | Pretendard | 10px | 500 | 1 | normal | Disclosures, smallest labels |
| Button | Pretendard | 16–18px | 700 | tight | -1px on display CTAs | All CTAs are 700 |
| Financial Amount | Pretendard | 20–36px | 700 | 1 | normal | Always 700, comma-grouped, won unit follows in 500 |

### Principles
- **700 is the default for everything that matters.** Headings, CTAs, and financial amounts. 500 is for body text. 400 is rare. There is no "400 headline" in Market Guard.
- **Pretendard everywhere.** Market Guard does not mix sans families. Jua is a *single* exception, only for warm marketing display.
- **Korean and Latin are co-equal.** Pretendard's optical metrics align Korean (한글) and Latin in the same line; never assume English is primary.
- **Tight letter-spacing at display.** Hero headlines and 18px+ CTAs use `-1px` tracking to compress for density.
- **Numerals as headings.** Financial amounts at 20–36px / 700 are treated as headings, not body — they get the same hierarchical weight as page titles.
- **Lightweight body is forbidden.** 300 only appears on display sizes where the size itself carries hierarchy (52px hero numerals); never on body text.

## 4. Component Stylings

### Buttons

**Primary CTA (Guard Mint)**
- Background: `#04c584`
- Text: `#ffffff`
- Border: none
- Radius: 2px
- Padding: 12px 24px
- Height: 42px (line-height-driven)
- Font: 16px / 700 / Pretendard
- Hover: background `#10df99` (lightens — opposite of convention)
- Use: Primary CTA on data tables, briefing rows, and guardrail flows (`오늘 위험 확인`, `비중 다시 보기`)

**Primary CTA — Large Display**
- Background: `#04c584`
- Text: `#ffffff`
- Border: none
- Radius: 2px
- Padding: 16px 32px
- Height: 56px
- Font: 18px / 700 / Pretendard
- Letter-spacing: -1px
- Hover: `#10df99`
- Use: Hero CTA on landing surfaces (`오늘 위험 확인`, `마켓가드 시작하기`)

**Primary CTA — Hover-Inverted (Retry)**
- Background: `#10df99` (default lighter)
- Text: `#ffffff`
- Border: none
- Radius: 2px
- Padding: 10px 20px
- Font: 14px / 500 / Pretendard
- Hover: background `#04c584` (darkens — the one place Market Guard uses the darken pattern)
- Use: Secondary retry / "다시 시도" actions where the resting state is a softer mint

**Ghost / Outlined**
- Background: `#ffffff`
- Text: `#04c584`
- Border: 1px solid `#04c584`
- Radius: 2px
- Padding: 12px 24px
- Font: 16px / 700 / Pretendard
- Hover: background `#f3fdfa` (mint tint)
- Use: Secondary actions paired with a Primary CTA

**Neutral / Cancel**
- Background: `#f5f5f5`
- Text: `#434444`
- Border: none
- Radius: 2px
- Padding: 12px 24px
- Font: 16px / 700 / Pretendard
- Hover: background `#e1e1e1`
- Use: Cancel / "취소" / dismiss actions

**Disabled**
- Background: `#e1e1e1`
- Text: `#acacac`
- Border: none
- Radius: 2px
- Font: 16px / 700 / Pretendard
- Use: Disabled state (form incomplete, retry cooling down)

**Link Button (Inline Text Link)**
- Background: transparent
- Text: `#04c584`
- Border: none
- Padding: 0
- Font: 14px / 500 / Pretendard
- Hover: text-decoration: underline
- Use: Inline links within content ("자세히 보기"), table-row jump links

### Cards & Containers

**Data Card (Default)**
- Background: `#ffffff`
- Border: 1px solid `#e1e1e1` (some surfaces use no border + shadow only)
- Radius: 2px
- Padding: 20px 24px
- Shadow: `0 2px 5px rgba(0, 0, 0, 0.12)`
- Use: Briefing rows, market-signal cards, portfolio summary blocks

**Card — Soft Variant**
- Background: `#fbfbfb`
- Border: none
- Radius: 8px
- Padding: 24px
- Shadow: `0 2px 8px rgba(0, 0, 0, 0.1)`
- Use: Marketing/landing feature cards (the rare 8px-radius case)

**Card — Highlight (Selected)**
- Background: `#f3fdfa`
- Border: 1px solid `#10df99`
- Radius: 2px
- Padding: 20px 24px
- Use: Selected state in briefing or guardrail lists; user's active defensive rule highlight

### Inputs & Forms

**Text Input (Default)**
- Background: `#ffffff`
- Text: `#999999` (placeholder) / `#434444` (filled)
- Border: 1px solid `#e1e1e1`
- Radius: 2px
- Padding: 0 16px
- Height: 48px
- Font: 16px / 500 / Pretendard

**Text Input — Focus**
- Background: `#f3fdfa`
- Text: `#434444`
- Border: 1px solid `#10df99`
- Radius: 2px
- Use: Active typing state — the mint tint is the only branded background fill in the system

**Text Input — Error**
- Background: `#ffffff`
- Text: `#434444`
- Border: 1px solid `#fe493d`
- Radius: 2px
- Error message below: 12px / 500 / `#fe493d`
- Use: Validation failure state

**Amount Input (Financial / Portfolio)**
- Background: `#ffffff`
- Text: `#2b2b2b`
- Border: 2px solid `#f5f5f5`
- Radius: 2px
- Padding: 0 16px
- Height: 56px
- Font: 22px / 700 / Pretendard (right-aligned)
- Use: Specialized input for entering portfolio value, cash amount, or exposure size — heavier border (2px), bigger type, right-aligned, 700 weight; treats the number as a heading not a form field

### Badges & Tags

**Status Pill (Brand)**
- Background: `#f3fdfa`
- Text: `#04c584`
- Border: none
- Radius: 41px (rare pill — used only on tag chips, not buttons)
- Padding: 4px 10px
- Font: 12px / 500 / Pretendard
- Use: Filter chips (`위험`, `중립`, `양호`) on market-briefing pages

**Status Badge (Warning)**
- Background: `#ffffff`
- Text: `#f56200`
- Border: 1px solid `#fd8700`
- Radius: 2px
- Padding: 2px 8px
- Font: 12px / 700 / Pretendard
- Use: Rate-warning, expiry, attention-needed indicators

**Status Badge (Negative)**
- Background: `#ffffff`
- Text: `#fe493d`
- Border: 1px solid `#fe493d`
- Radius: 2px
- Padding: 2px 8px
- Font: 12px / 700 / Pretendard
- Use: Overdue, declined, blocking-issue indicators

### Tables (Market Data)

**Table Header Row**
- Background: `#f5f5f5`
- Text: `#7b7b7b`
- Border-bottom: 1px solid `#e1e1e1`
- Padding: 12px 16px
- Font: 13px / 700 / Pretendard / uppercase letter-spacing 0.05em
- Use: Column headers on signal lists, exposure tables, and risk-driver summaries

**Table Body Row**
- Background: `#ffffff` (alternates with `#fbfbfb` on dense tables)
- Text: `#434444`
- Border-bottom: 1px solid `#e1e1e1`
- Padding: 12px 16px
- Font: 14px / 500 / Pretendard
- Values right-aligned: 14px / 700 / `#2b2b2b` (neutral) or `#fe493d` (risk)
- Use: Market-signal rows, exposure rows, line-item risk drivers

### Charts & Data Viz

**Chart Series Tokens**
- Series 1: `#34464b` (primary)
- Series 2: `#5c818a` (secondary)
- Series 3: `#1c6c73` (tertiary)
- Series 4: `#a7c7cf` (quaternary / pale)
- Highlight: `#04c584` (always reserved for "your value" / user's own data point)
- Negative: `#fe493d`
- Positive trend: `#04c584`

**Axis & Gridlines**
- Axis label: 10–12px / 500 / `#7b7b7b`
- Gridline: 1px dashed `#e1e1e1`
- Background: `#ffffff` or `#fbfbfb`

### Navigation

- Header: sticky white (`#ffffff`), no shadow at rest, 1px bottom border `#f5f5f5`
- Logo: left, ~24–28px tall, brand wordmark in `#04c584` (or `#2b2b2b` mono variant)
- Nav links: 14px / 500 / Pretendard / `#434444`, hover `#04c584`
- Sign-in CTA: white background, `#2b2b2b` text, 1px solid `#d8dfe6` border, 16px radius, 6px 14px padding, 14px / 400 (the home-page header uses a softer 16px radius for the auth pill — exception to the 2px default; this is the only 16px-radius live observation in the captured DOM)

### Shadows

| Level | Treatment | Use |
|---|---|---|
| Flat | none | Page background, inline elements |
| Soft (L1) | `0 1px 1px rgba(0,0,0,.08)` | Subtle row separators |
| Standard (L2) | `0 2px 5px rgba(0,0,0,.12)` | Default cards — most common (~38 occurrences) |
| Elevated (L3) | `0 4px 9px rgba(0,0,0,.15)` | Dropdowns, popovers |
| Deep (L4) | `0px 2px 8px rgba(0,0,0,.1)` | Floating panels |
| Modal (L5) | `0 17px 50px rgba(0,0,0,.19)` | Modal dialogs |
| Inset | `inset 0 1px 1px rgba(0,0,0,.12)` | Pressed-button / depressed input feel |

---

**Verified:** 2026-06-12 (brandfit mode)
**Tier 1 sources:** imported reference `docs/DESIGN.md` visual tokens, preserved for color, radius, typography, spacing, shadows, component density, responsive behavior, and motion values.
**Tier 2 sources:** local Vibe UX planning docs (`docs/idea.md`, `docs/benchmark.md`, `docs/brandvoice.md`) for Market Guard product context, voice, and UI copy direction.
**Conflicts unresolved:** none. Visual values are preserved; brand narrative and product examples are rewritten for Market Guard.
**Earlier gap:** reference-brand narrative and personas were removed because product strategy already lives in the Vibe UX planning docs.

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px
- Card internal padding: 20px / 24px. Market Guard packs more signals into view so the user can compare evidence before acting.
- Table-row vertical padding: 12px (denser than consumer apps)

### Grid & Container
- Marketing/landing: max content width ~1080–1200px, centered
- App / data surfaces: full-width with 16–24px gutters; tables go edge-to-edge on mobile
- Briefing and guardrail lists: single-column on mobile, 2–3 column grid on desktop
- Charts: full-width within their card container, never bleed outside

### Whitespace Philosophy
- **Density is the brand.** Where hype-driven trading apps spotlight one signal, Market Guard says "more evidence visible without scrolling". A market status, rate move, FX change, sector signal, and action guardrail can coexist in one card.
- **Section rhythm by surface fill.** White (`#ffffff`) and off-white (`#fbfbfb`) sections alternate quietly — not for drama, but to chunk dense data into scannable bands.
- **Tight gaps inside, generous gaps outside.** Inside a comparison card, rows sit on 12px vertical gaps. Between cards, 24–32px. The hierarchy of grouping is communicated through gap-size alone.

### Border Radius Scale
- **2px (dominant — 81 occurrences in CSS)**: Buttons, inputs, cards, badges, banners. The signature.
- 4px: Small badges, inline pills.
- 8px: Soft marketing cards (rare).
- 10–12px: Promotional banner corners (rare).
- 30–41px: Filter pills, tag chips, avatar circles.
- 50%: Avatars, icon backdrops.

Market Guard's 2px is a typographic-engineering commitment: pixel rounding sharp enough to look disciplined, soft enough to remain approachable. Any radius >= 12px feels too consumer-app-like and is reserved for explicitly marketing-warmth contexts.

## 6. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (L0) | No shadow | Page background, inline elements |
| Soft (L1) | `0 1px 1px rgba(0,0,0,.08)` | Subtle row lift, list-item separators |
| Standard (L2) | `0 2px 5px rgba(0,0,0,.12)` | Default cards — by far the most common (~38 occurrences) |
| Elevated (L3) | `0 4px 9px rgba(0,0,0,.15)` | Dropdowns, hover-elevated cards |
| Deep (L4) | `0px 2px 8px rgba(0,0,0,.1)` | Floating action panels |
| Modal (L5) | `0 17px 50px rgba(0,0,0,.19)` | Dialog modals, account-switch overlays |
| Inset (L-1) | `inset 0 1px 1px rgba(0,0,0,.12)` | Pressed button state, depressed input visual |
| Halo | `0 0 2px rgba(0,0,0,.26)` | Thin outline on overlay menus and popovers |

**Shadow Philosophy.** Shadows are **always neutral and single-layer.** No colored shadows, no parallax stacks. Market Guard sits between a flat dashboard and a consumer card app: visible enough that briefing cards lift off the surface, restrained enough that the evidence inside is what the eye lands on. The signature `0 2px 5px rgba(0,0,0,.12)` is the small, low-cost lift used across decision surfaces.

## 7. Do's and Don'ts

### Do
- Use `#04c584` for every interactive moment — CTAs, links, focus accents, "your data point" on charts
- Use `#10df99` for hover (it is *brighter* than `#04c584` — Market Guard lightens on interaction)
- Use `#f3fdfa` mint tint on input focus background — the only branded surface tint in the system
- Keep border-radius at 2px for buttons, inputs, cards, badges — the system's geometric signature
- Use Pretendard with the full Korean fallback stack; 700 as default weight for headings and CTAs
- Use `#2b2b2b`/`#434444` warm near-blacks for type instead of `#000000`
- Use the teal-slate family (`#34464b`/`#5c818a`/`#1c6c73`/`#a7c7cf`) for chart series — cooler than brand green by design
- Use `#04c584` only for "your value" on a chart — never as a generic data fill
- Right-align financial amounts in tables; use 700 weight for amounts even at 14px
- Use comma-separated won amounts with the currency unit in 500 weight (`12,400,000원`)

### Don't
- Do not use 12px+ consumer-app rounded corners — Market Guard is 2px; 8px is the soft-marketing exception
- Don't use yellow, orange, or any warm accent for primary interaction — green is the sole interactive hue
- Don't use BM JUA inside the app — Jua is for marketing-landing display moments only
- Do not use weight 400 for body — Market Guard's body weight is 500
- Don't apply colored shadows (blue, green, branded) — shadows are always neutral black
- Do not over-pad risk cards — Market Guard packs density; evidence is the aesthetic
- Don't approximate currency amounts (`약 120만원`) on primary financial surfaces — bare numerals with commas only
- Don't use `#0099ff` info-blue for default links — green is the default link color; blue is reserved for *external* references
- Don't use Pretendard 300 on body — light weights only at hero display sizes (52px+)
- Don't sprinkle the brand green on chart series — green is for interaction, teal-slate is for data

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|---|---|---|
| Mobile | <600px | Single column, full-width tables (horizontal scroll if needed), 16px gutters |
| Tablet | 600–1024px | 2-column card grids, 20px gutters |
| Desktop | 1024–1280px | Full marketing layout, 3-column feature grids |
| Large | >1280px | Centered content max-width ~1200px |

### Touch Targets
- Buttons minimum 42px height (default), 56px for hero display CTAs
- Table rows minimum 44px (slightly denser than 48px standard — Market Guard accepts a tighter tap)
- Filter pill chips: 28–32px height
- Input minimum 48px height; amount-input 56px

### Collapsing Strategy
- Hero: 52px → 36px on mobile, weight 700 maintained
- Marketing 3-col feature grids → 2-col → single column
- Comparison tables: maintain table form on tablet, switch to stacked cards on mobile (each row becomes a card with key/value pairs)
- Charts: full-width, maintain aspect ratio, axis-label font drops 12px → 10px on mobile
- Filter chip rows: horizontal scroll (no wrap) on mobile to preserve the chip rhythm

### Image Behavior
- Source, ticker, or portfolio logos: 24–40px, consistent square framing within rows
- Chart screenshots in marketing: full-width on mobile, 2-col on desktop
- Decorative illustrations: rare; when used, locked to a single accent illustration per landing surface (no illustration overload — data is the visual)

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Guard Mint (`#04c584`)
- Hover: Hover Green (`#10df99`)
- Page background: White (`#ffffff`)
- Surface alt: Off-white (`#fbfbfb`)
- Neutral surface: (`#f5f5f5`)
- Heading text: Warm near-black (`#2b2b2b`)
- Body text: (`#434444`)
- Caption: (`#7b7b7b`)
- Placeholder: (`#999999`)
- Border: (`#e1e1e1`)
- Focus background tint: Mint (`#f3fdfa`)
- Chart series: `#34464b` / `#5c818a` / `#1c6c73` / `#a7c7cf`
- Error: `#fe493d`
- Warning: `#fd8700` / `#f56200`

### Example Component Prompts
- "Create a Market Guard primary CTA: `#04c584` background, white text, 2px border-radius (not 12px), 700-weight Pretendard at 16px, 12px 24px padding, 42px height. Hover lightens to `#10df99`."
- "Design a market-briefing row: white background, 1px solid `#e1e1e1` border, 2px radius, 20px 24px padding, shadow `0 2px 5px rgba(0,0,0,.12)`. Signal icon 32px left, title 16px/700 `#2b2b2b`, three status chips below (`#f3fdfa` bg, `#04c584` text, 41px radius, 12px/500), risk value right-aligned 18px/700 with timestamp in 500."
- "Build a focused amount input: 2px border `#f5f5f5`, on focus border `#10df99` and background `#f3fdfa`. Text 22px/700 right-aligned, `#2b2b2b`, won unit in 500 weight following the digits."
- "Create a data chart: white background, axis labels 10px/500 `#7b7b7b`, gridlines 1px dashed `#e1e1e1`. Series 1 `#34464b`, series 2 `#5c818a`, series 3 `#1c6c73`. User's own data point in `#04c584` to make 'your value' pop against neutral teal-slate."
- "Design a market-signal table row: alternating `#ffffff` / `#fbfbfb` background, 12px 16px padding, 1px solid `#e1e1e1` bottom border. Time column 14px/500 `#7b7b7b`, signal name 14px/500 `#434444`, impact right-aligned 14px/700 — `#2b2b2b` for neutral, `#fe493d` for risk."

### Iteration Guide
1. **Default radius is 2px.** If the AI produces 12px or 16px corners, reject — that is not Market Guard.
2. **Default weight is 700 for anything important.** Headings, CTAs, financial amounts. 500 for body. Never 400 for body.
3. **Green is for interaction only.** Never use `#04c584` as a generic background fill or decorative element. It always means: the user can tap this, or this is the user's own data.
4. **Hover lightens.** `#04c584` → `#10df99` on hover (the opposite of conventional darken-on-hover). This is a signature.
5. **Shadows are neutral and single-layer.** `0 2px 5px rgba(0,0,0,.12)` is the workhorse. No colored shadows.
6. **Chart series are teal-slate, not green.** `#34464b` / `#5c818a` / `#1c6c73` / `#a7c7cf`. Reserve green for the user's own data point.
7. **Pretendard is non-negotiable.** Always include the full Korean fallback stack. Jua only for marketing display.

---

## 10. Voice & Tone

Market Guard (마켓가드) speaks like a **disciplined market coach who turns noisy signals into calm action guardrails**. It is direct without being loud, protective without being paternalistic, and specific enough that a user can decide what to do before the market opens, during a midday check, or near the close. The product does not predict with swagger. It names risk, explains the evidence, and narrows the next action.

Korean is the primary product voice. English labels may appear in data sources, tickers, and technical documentation, but user-facing guidance should stay in clear Korean so the warning feels close to the user's actual trading moment.

| Context | Tone |
|---|---|
| CTAs | Concrete, defensive action. `오늘 위험 확인`, `비중 다시 보기`, `신규 매수 제한`, `레버리지 축소`. Avoid vague starts or hype. |
| Section headlines | State the market condition first. `오늘은 위험 구간입니다` not `오늘의 기회를 잡아보세요`. |
| Market briefings | Give the conclusion, then the evidence. `위험 / 금리와 환율이 동시에 올라 방어 우선입니다.` |
| Personalized guidance | Tie advice to the user's holdings, sector exposure, leverage, and cash ratio. No generic market commentary. |
| Financial figures | Bare numerals with units and timestamps. `환율 1,382.40원`, `10:12 기준`. No rounded claims when precise data exists. |
| Success messages | Confirm the applied guardrail and the affected scope. `신규 매수 제한을 오늘 장 마감까지 적용했습니다.` |
| Error / validation | Specific cause + next action. `보유 종목 데이터를 불러오지 못했습니다. 포트폴리오 연결을 다시 확인하세요.` |
| Empty states | Explain why the view is empty and what the user gains by adding data. `보유 종목을 추가하면 오늘 민감한 섹터를 함께 확인할 수 있습니다.` |
| Alerts | Short, calm, and anchored in action. `위험 신호가 겹쳤습니다. 신규 매수 전 비중을 먼저 확인하세요.` |
| Disclosure | Formal `~합니다` endings. Data timing, source, and limitations are treated as product content, not footnotes. |

**Forbidden phrases.** `무조건`, `급등`, `대박`, `놓치면 안 됩니다`, `지금 사야 합니다`, `AI가 추천합니다`, `수익 보장`, `걱정하지 마세요`, `최고의 종목`, `정답`, emoji, exclamation marks on routine CTAs, and any copy that turns fear into urgency. Market Guard helps the user slow down at the exact moment the market tries to speed them up.

## 11. Principles

1. **Risk first, action second.** The first visible judgment is always `위험 / 중립 / 양호`; the next line explains what action should be limited, checked, or allowed.
2. **Show the signal stack.** A conclusion without evidence is not a guardrail. Every market status should cite the strongest 2-4 drivers, such as rates, FX, futures, sector flow, volatility, or headline risk.
3. **Density is trust.** Market context loses value when it is split across oversized panels. Keep compact rows, comparison tables, and stacked signal cards so the user can scan before acting.
4. **Green is interaction, not optimism.** `#04c584` remains the action and selection color. Do not use it to imply that the market is safe; positive or neutral market status must still be explained through labels and evidence.
5. **2px is a guardrail shape.** The sharp radius makes the interface feel disciplined and tool-like. It supports the product's promise: measured decisions before emotional trades.
6. **Personal exposure changes the advice.** A market warning is incomplete until it is translated through holdings, sector concentration, leverage, and cash ratio.
7. **No prediction without humility.** Use scenarios and current signals, not certainty. Prefer `가능성이 커졌습니다`, `확인 필요`, and `방어 우선` over absolute forecasts.
8. **Disclosures stay close to decisions.** Data source, timestamp, and uncertainty belong inside the briefing card or action panel where the user makes the decision.
9. **Approximations are a last resort.** Rounded figures are acceptable only in summaries. Primary market and portfolio values should use precise values when available.

## 12. States

| State | Treatment |
|---|---|
| **Empty (no portfolio)** | White canvas. One short paragraph in `#434444`: `보유 종목을 추가하면 오늘 민감한 섹터와 비중 위험을 함께 확인할 수 있습니다.` One primary CTA in `#04c584`, 2px radius. No illustration. |
| **Empty (no market signal yet)** | Compact neutral message in `#7b7b7b`: `아직 확인된 위험 신호가 없습니다. 장 시작 전 다시 업데이트됩니다.` |
| **Empty (filter cleared)** | Single caption: `조건에 맞는 신호가 없습니다. 필터를 조정하세요.` No CTA. |
| **Loading (first paint)** | Skeleton blocks in `#f5f5f5` matching the final briefing layout. Market-status slots show `--` rather than vague bars. 1s shimmer with 8% white highlight. |
| **Loading (refresh / in-place)** | A subtle `#04c584` 2px progress bar at the top of the section. Previous market values stay visible with timestamp dimmed. |
| **Warning (risk signal stacked)** | White banner with `#fd8700` left accent, 13px `#434444` text, and a concrete next action: `신규 매수 전 비중을 먼저 확인하세요.` |
| **Error (data fetch failed)** | Inline banner inside the briefing area. `#fe493d` left border, white background, 14px body text, and a `다시 확인` button in the retry-button style. Never a generic toast. |
| **Error (stale data)** | Non-blocking warning: `10:12 이후 데이터가 갱신되지 않았습니다. 현재 수치는 지연될 수 있습니다.` User can still read the previous values. |
| **Success (guardrail applied)** | Inline confirmation row in `#f3fdfa`, `#04c584` 16px / 700 confirmation text, and the affected rule below in 22px / 700 `#2b2b2b`: `신규 매수 제한 적용`. |
| **Success (passive update)** | 3s auto-dismiss toast at top-right. `#2b2b2b` background, white 14px / 500 text, 2px radius, neutral shadow. No emoji. |
| **Skeleton** | `#f5f5f5` blocks at exact final dimensions, 2px radius matching each component. Financial and market-value slots show `--`, not abstract bars. |
| **Disabled** | Background `#e1e1e1`, text `#acacac`, 2px radius preserved. Geometry stays identical to enabled state. |
| **Pressed (button)** | Inset shadow `inset 0 1px 1px rgba(0,0,0,.12)` + background shifts by ~5% darker for the press duration. Returns instantly on release. |

## 13. Motion & Easing

**Durations:**

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | State commits, checkbox flips, focus ring appearance |
| `motion-fast` | 150ms | Hover, focus, button press overlays, inline value updates |
| `motion-standard` | 250ms | Card expand, dropdown open, tab content switch, modal open |
| `motion-slow` | 400ms | Page-level transitions, briefing-card reveal animation |
| `motion-data` | 600ms | Chart series draw-in, risk-score count-up, exposure shifts |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Arriving: modals, dropdowns, sheets |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way transitions, chart draw-in |
| `ease-data` | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` | Risk-score count-up, chart series; eases out gradually so the final value is the calm resting state |

**Explicitly forbidden.** No spring overshoot anywhere. No bounce. No celebratory easing after a defensive action. Market Guard's motion should reduce urgency, not manufacture it.

**Signature motions.**

1. **Risk score count-up.** When a market-risk score updates, the number animates from the previous value to the new value across `motion-data` (600ms) with `ease-data`. The duration lets the user register the change before acting.
2. **Chart series draw-in.** Market and portfolio series draw left-to-right in `motion-data` with `ease-standard`. The user's own exposure (`#04c584`) draws last so the eye lands on personal risk after market context is established.
3. **Briefing card reveal.** When a fresh briefing loads, cards fade in with `motion-standard / ease-enter` from `opacity: 0; translateY(4px)`. Translate stays small; the briefing arrives, it does not perform.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. Count-ups become instant value swaps. Charts render their final state immediately.

<!--
Brandfit note (2026-06-12): visual tokens, component geometry, typography scale,
spacing, shadow, chart palette, and motion values are preserved from the imported
reference system. Brand-specific narrative, personas, and product examples were
removed or rewritten for Market Guard (마켓가드), a personal market-risk briefing
and defensive action-coaching service. Korean UI copy samples are kept in Korean
because they are the product voice.
-->
---

## Included Components

The following components are part of this design system:

- Button
- Input
- Table
- Card
- Badge
- Tabs
- Dialog


---

## Iconography & SVG Guidelines

### Icon Library

Use a single, consistent icon library throughout the project. Recommended options:

- **Lucide React** (`lucide-react`): Default for shadcn/ui projects. 1,400+ icons, tree-shakeable, consistent 24x24 grid.
- **Radix Icons** (`@radix-ui/react-icons`): 300+ icons, 15x15 grid, minimal and geometric.
- **Heroicons** (`@heroicons/react`): 300+ icons by Tailwind team, outline and solid variants.

Pick ONE library and use it everywhere. Do not mix icon libraries within the same project.

### SVG Usage Rules

- All icons must be inline SVG components (not `<img>` tags) for color and size control.
- Icon size follows the type scale: 16px (inline), 20px (buttons), 24px (standalone).
- Icon color inherits from `currentColor` -- never hard-code fill/stroke colors.
- For custom/brand icons, export as SVG components with `currentColor` fills.
- Stroke width: 1.5px-2px for outline icons. Keep consistent across the project.

### Icon Sizing Scale

| Context | Size | Usage |
|---------|------|-------|
| Inline text | 16px (1rem) | Badges, labels, breadcrumbs |
| Button icon | 18px (1.125rem) | Icon buttons, CTA icons |
| Standalone | 24px (1.5rem) | Navigation, card icons |
| Feature | 32-48px | Hero sections, empty states |

### SVG Optimization

- Run all custom SVGs through SVGO before committing.
- Remove unnecessary attributes: `xmlns`, `xml:space`, editor metadata.
- Use `viewBox` instead of fixed `width`/`height` for scalability.


---

## Document Policies

### No Emojis

This design system must not use emojis in any UI element, component, label, status indicator, or documentation.
Use SVG icons from the chosen icon library instead. Emojis render inconsistently across platforms and break visual coherence.

- Status indicators: use colored dots or icon components, not emoji.
- Section markers: use text prefixes ("DO:" / "DON'T:") or icons, not checkmark/cross emojis.
- Navigation: use icon components, not emoji.

### Format Compliance

This document follows the Google Stitch DESIGN.md 9-section format:
1. Visual Theme & Atmosphere
2. Color Palette & Roles
3. Typography Rules
4. Component Stylings
5. Layout Principles
6. Depth & Elevation
7. Do's and Don'ts
8. Responsive Behavior
9. Agent Prompt Guide

Extended with:
- Voice & Tone
- Principles
- States
- Motion & Easing
- Iconography & SVG Guidelines
- Document Policies

Total target length: 250-400 lines. Keep sections concise and actionable.


