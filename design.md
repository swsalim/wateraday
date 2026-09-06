# Design — Water a Day (Taste Brief v2)

Locked visual system for the "Make Water Tangible" redesign.
Dials: VARIANCE 8 · MOTION 7 · DENSITY 4.

## Genre

Scientific × Editorial × Playful × Tactile. Not clinical wellness. Not SaaS.

## Signature

**Living Water Measure** - transparent vertical vessel whose fill level encodes volume (L / ml / glasses / bottles). Recurs across calculator, day timeline, converter, and education.

## Macrostructure (homepage)

1. Nav (minimal: Calculator · Learn · Conversions)
2. Hero + daily calculator + Living Water Measure
3. Personal result translations (cups / glasses / bottles)
4. Your Day in Water (timeline)
5. Body ~60% scrolly
6. Factors (varied compositions)
7. Balance
8. Guidelines table (SEO)
9. Converter + Measurement Wall
10. Guides + Footer

Phases 4–5 shipped on homepage. Article system + conversion landing polish remain Phase 6.

## Palette (hex → tokens)

| Role | Hex | Token |
|------|-----|-------|
| Deep Ink | `#071B2B` | `--color-deep-ink` / band |
| Ocean | `#075985` | `--color-ocean` |
| Water Blue | `#0EA5E9` | `--color-accent` |
| Aqua | `#22D3EE` | `--color-aqua` |
| Ice | `#E6F8FC` | `--color-paper-2` |
| Mist | `#F5FBFC` | `--color-paper` |
| Foam | `#FFFFFF` | `--color-surface` |
| Pulse (sparing) | `#E7FF5A` | `--color-pulse` |

Depth rhythm: bright hero → deep band sections → ice education → deep footer.

## Typography

- Display / h1–h2: Gabarito bold
- Body: Figtree
- Measure / units: ui-monospace (`--font-measure`)
- Hero display: `clamp(3.5rem, 9vw, 8rem)` stacked lines
- Stat display: `clamp(2.5rem, 6vw, 5rem)`

## Motion

Primitives: `water-level` (fill height) · `ripple` (press) · `number-swap` (opacity+y) · scroll storytelling (Phase 4)
Respect `prefers-reduced-motion`. No perpetual float spam. No em-dashes in UI copy.

## CTA

Primary: Water Blue fill, foam text, radius 4px (sharp-soft, not pill)
Secondary: ink outline on mist

## Preserve

Calculator Mifflin–St Jeor math · metrics conversion table · `/volume/[from]/[to]` SSG · JSON-LD · footer conversion links
