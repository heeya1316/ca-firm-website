# Design Brief

## Aesthetic Direction

Clean, airy, finance + growth vibe. Soft green tint throughout. Light mode: pastel white + soft green. Dark mode: deep green-tinted surfaces (NOT black/grey). The palette conveys financial trustworthiness and growth — premium but approachable.

## Differentiation

Execution through **layered depth** (elevated cards, subtle shadows, consistent border treatments) and **motion choreography** (smooth transitions on interactions). Service icons via Lucide React reinforce professionalism without clutter.

## Palette (Light Mode)

| Token                  | L    | C    | H   | Usage                                        |
| ---------------------- | ---- | ---- | --- | -------------------------------------------- |
| Primary (Soft Green)   | 0.65 | 0.10 | 150 | Headers, main buttons, authority elements    |
| Accent (Mint)          | 0.75 | 0.08 | 155 | CTAs, highlights, growth signals             |
| Background             | 0.98 | 0.01 | 120 | Slight warm white — not harsh                |
| Foreground             | 0.20 | 0.02 | 140 | Soft dark green text                         |
| Card                   | 0.99 | 0.01 | 120 | Barely off-white card surfaces               |
| Muted                  | 0.95 | 0.02 | 130 | Section backgrounds, subtle depth            |
| Border                 | 0.90 | 0.02 | 140 | Subtle dividers, card boundaries             |
| Secondary              | 0.92 | 0.03 | 140 | Secondary backgrounds                        |
| Muted Foreground       | 0.45 | 0.04 | 140 | Supporting text                              |

## Palette (Dark Mode)

| Token           | L    | C    | H   | Usage                                        |
| --------------- | ---- | ---- | --- | -------------------------------------------- |
| Primary         | 0.70 | 0.12 | 150 | Buttons, links                               |
| Accent          | 0.72 | 0.10 | 155 | Highlights                                   |
| Background      | 0.18 | 0.03 | 140 | Soft dark green (NOT black)                  |
| Card            | 0.22 | 0.03 | 140 | Slightly elevated surfaces                   |
| Foreground      | 0.92 | 0.01 | 120 | Soft white text                              |
| Muted           | 0.25 | 0.03 | 140 | Secondary dark backgrounds                   |
| Border          | 0.30 | 0.04 | 140 | Dividers in dark mode                        |

## Typography

| Role    | Font           | Usage                                   |
| ------- | -------------- | --------------------------------------- |
| Display | Inter          | Headlines, section titles, hero         |
| Body    | Inter          | Body copy, labels, UI text              |
| Mono    | System default | Code blocks, technical content          |

## Structural Zones

| Zone             | Treatment                                                                   |
| ---------------- | --------------------------------------------------------------------------- |
| Header           | `bg-primary` soft green background, white text, `shadow-elevated`           |
| Hero Sections    | Soft green gradient (primary → accent direction), white text overlay        |
| Content Sections | Alternating `bg-background` and `bg-muted/40` for visual rhythm             |
| Card Grid        | `bg-card`, `border border-border`, `shadow-subtle`                          |
| Footer           | `navy-dark-section` utility — deep green-tinted dark background, white text |

## Component Patterns

- **Buttons**: Primary (soft green bg), Secondary (mint accent), neutral (muted bg). All with `transition-smooth` and hover state at 90% opacity.
- **Cards**: `card-elevated` utility — card bg, border, subtle shadow. Hover lifts with `shadow-elevated`.
- **Typography**: Hero text via `.text-hero`, section titles via `.text-section-title`, labels via `.text-label`.
- **Icons**: Lucide React, sized relative to context. Green for interactive, mint for active/primary actions.
- **Category Badges**: Semantic on-brand colors — `bg-primary/10 text-primary`, `bg-accent/10 text-accent`, `bg-secondary text-secondary-foreground`, etc.

## Spacing & Rhythm

Tailwind default `4px` scale maintained. Sections spaced via padding: `py-16 md:py-24` for major sections. Interior card padding: `p-6` for standard, `p-8` for spacious. Dense information (service lists) use `space-y-4`.

## Motion

Single default transition: `transition-smooth` (0.3s cubic-bezier). Applied to all interactive elements: button backgrounds, card shadows, hover states. No animations on page load — focus on interaction-driven motion for premium feel.

## Constraints

- **Both light and dark mode** supported. Dark mode uses deep green-tinted surfaces for a cohesive brand experience.
- **Soft green gradients** for hero/CTA sections: `linear-gradient(135deg, oklch(0.65 0.10 150) 0%, oklch(0.72 0.10 155) 100%)`.
- **No hardcoded Tailwind color utilities** (no `bg-blue-50`, `text-emerald-700`, etc.) — all colors via CSS variables.
- **Minimal icon usage** — one icon per service, clear and minimal Lucide React set.
- **Responsive breakpoints**: mobile-first design, `sm:`, `md:`, `lg:` for progressive enhancement.

## Signature Detail

Hover state choreography: buttons + cards scale subtly (via shadow elevation) while text remains stable. Creates sense of depth and premium interaction polish without animation overhead. The consistent green tint palette reinforces brand identity across light and dark modes.
