# Design Read: /1 Alternative

**Reading this as:** economics lab tool page for analysts comparing × median, with a Nord night + brighter frost/aurora language, leaning toward taste-skill ambient motion (variance ~7 / motion ~6 / density ~4) while staying a usable calculator - not a marketing landing.

## Dials
- DESIGN_VARIANCE: 7 (asymmetric masthead, dest-weighted cards, ambient depth planes)
- MOTION_INTENSITY: 6 (slow aurora orbs + light CSS 3D wireframes; hover/active on controls)
- VISUAL_DENSITY: 4 (lab density without cockpit clutter)

## Overrides (taste / minimalist)
- Follow redesign + taste + minimalist under `ppp-calculator-v2-design/skills/taste/`
- **Override** minimalist’s “no gradients / no motion spectacle” where ambient aurora / soft 3D depth was explicitly requested
- Still ban: Inter/Roboto, AI-purple mesh, emoji, em-dash spam in titles

## Visual system (not prod, not PPP Calculator)
- Light: warm bone canvas `#f7f5f0` / ink `#1c1b18` / teal `#1f5c56`
- Dark: Nord polar night surfaces (`#2E3440` family) with vivid frost/aurora
  - Ink `#FFFFFF` / `#ECEFF4`; muted `#E5E9F0` / `#D8DEE9` (AA on `#2E3440`)
  - Accents `#8FBCBB` / `#88C0D0`; hero × median `#A3BE8C`; emphasis gold `#EBCB8B`
- Type: Outfit (UI/display) + IBM Plex Mono (numbers, `tabular-nums`)
- Theme UI: segmented buttons Light | Dark | System + compact icon cycle toggle
- Persist: `kingindex-v2-1-theme`
- Atmosphere: fixed `pointer-events: none` aurora orbs + perspective grid + wireframes; light = quiet warm glow + soft grain
- `prefers-reduced-motion: reduce` disables ambient motion/3D animation
- a11y: skip-link, strengthened `:focus-visible`, `aria-pressed` on theme controls
- Staging SEO: `noindex, follow` + canonical → production apex

## Preserved
- Full prod IA and math (household stepper, × median, PPP/FX/cost, scatter lab, band filter = real tags)
- Share params: income, home, type, dest, household_size
- Scope: `/1` only (not `/2`, chooser, prod, or PPP)
