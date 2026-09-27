# Design Read: /1 Alternative

**Reading this as:** economics lab tool page for analysts comparing × median, with a Nord night + brighter frost/aurora language, leaning toward taste-skill ambient motion (variance ~7 / motion ~7 / density ~4) while staying a usable calculator - not a marketing landing.

## Dials
- DESIGN_VARIANCE: 7 (asymmetric masthead, dest-weighted cards, ambient depth planes)
- MOTION_INTENSITY: 7 (claimed = shown via **GSAP atmosphere**: shaped lights ±9–12% travel over 12–17s, depth-grid + vignette pulse, wireframe float, one-shot UI entrance stagger ~60ms, soft card/CTA hover; still lab ambient, not cinematic scroll choreography)
- VISUAL_DENSITY: 4 (lab density without cockpit clutter)

## Overrides (taste / minimalist)
- Follow redesign + taste + minimalist under `ppp-calculator-v2-design/skills/taste/`
- **Override** minimalist's "no gradients / no motion spectacle" where ambient aurora / soft 3D depth was explicitly requested
- Still ban: Inter/Roboto, AI-purple mesh, emoji, em-dash spam in titles

## Visual system (not prod, not PPP Calculator)
- Light: warm bone canvas `#f7f5f0` / ink `#1c1b18` / teal `#1f5c56`
- Dark: Nord polar night surfaces (`#2E3440` family) with vivid frost/aurora
  - Ink `#E6E8EC`; muted `#D8DEE9` (AA on `#292E39`)
  - Accents `#8FBCBB` / `#88C0D0`; hero × median `#A3BE8C` / `#B2D89A`; emphasis gold `#EBCB8B`; frost bloom `#93E0D0`
- Type: Outfit (UI/display) + IBM Plex Mono (numbers, `tabular-nums`)
- Theme UI: segmented buttons Light | Dark | System + compact icon cycle toggle
- Persist: `kingindex-v2-1-theme`
- Atmosphere (MOTION 7, **GSAP** — scrap CSS blur-orb wallpaper):
  - Files: `public/1/atmosphere.js` + static planes in `index.html`; CDN `gsap@3.13.0` (jsDelivr)
  - Stacked planes (`pointer-events: none`): base wash → 3 shaped lights (conic/radial, blur ≤44px) → perspective depth grid → vignette → 3 wireframes → grain
  - Dark light colors from frost tokens `#88C0D0` / `#93E0D0` / `#B2D89A` / `#EBCB8B`; light theme warmer teal/gold, quieter but alive
  - GSAP animates only `transform` + `opacity` (`xPercent`/`yPercent`/`scale`/`rotate`); `gsap.context()` + cleanup
  - Independent ambient loops (lights 12–17s, depth ~18s, wires 13–18s); entrance timeline stagger 60ms (masthead → controls → hint → method)
  - Card/CTA hover lift `translateY(-2px)` ~240ms CSS; **no** looping calculator numbers
  - Theme switch dispatches `kingindex:themechange` → ambient rebuild (entrance runs once)
- `prefers-reduced-motion: reduce` via `gsap.matchMedia()`: kills ambient + entrance choreography; leaves static lighting still-frame at readable opacity (non-negotiable)
- a11y: skip-link, strengthened `:focus-visible`, `aria-pressed` on theme controls
- Staging SEO: `noindex, follow` + canonical → production apex

## Preserved
- Full prod IA and math (household stepper, × median, PPP/FX/cost, scatter lab, band filter = real tags)
- Share params: income, home, type, dest, household_size
- Scope: `/1` only (not `/2`, chooser, prod, or PPP)
