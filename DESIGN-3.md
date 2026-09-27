# Design Read: /3 Phosphor

**Reading this as:** economics lab tool page for analysts comparing × median, with a CRT / phosphor instrument-room language (cyan-green on polar night), leaning toward taste-skill ambient motion (variance ~8 / motion ~7–8 / density ~5) while staying a usable calculator — not a marketing landing and not an aurora-blob twin of `/1`.

## Dials
- DESIGN_VARIANCE: 8 (asymmetric inputs | scope | stats; hard-edge instrument panels; tick marks)
- MOTION_INTENSITY: 7–8 (GSAP scope sweep on income/dest change; ambient phosphor glows ±8–12%; grid drift; one-shot entrance stagger ~60ms; reduced-motion → static trace)
- VISUAL_DENSITY: 5 (lab density: left controls, center scope, right telemetry)

## Overrides (taste / minimalist)
- Follow redesign + taste + minimalist under `ppp-calculator-v2-design/skills/taste/`
- **Override** minimalist's "no gradients / no motion spectacle" where CRT phosphor atmosphere and oscilloscope sweep were explicitly requested
- Still ban: Inter/Roboto, AI-purple mesh, emoji in UI chrome (prod ☾/☀ theme icons OK), em-dash spam in titles

## Visual system
- Dark (default CRT): polar night `#0a1014` / panels `#121b22`; phosphor `#3dffa8` + cyan `#5ce1e6`; amber accent `#d4b483`
- Light: paper instrument `#e8ebe4` / ink `#1a2218` / green `#0d7a52` — readable, not broken contrast
- Type: Outfit (UI) + IBM Plex Mono (readouts, metrics, `tabular-nums`)
- Atmosphere: scanline veil, perspective grid, phosphor glow planes (`pointer-events: none`); GSAP only `transform`/`opacity`
- Hero: oscilloscope bezel with **three-signal** compare (CH-H home × median, CH-D dest × local, CH-P PPP Calculator equiv) + GSAP multi-trace sweep (`scope.js`, CDN `gsap@3.13.0`)
- Theme UI: **production pattern only** — `#themeToggle` with ☾/☀ + Dark/Light label; persist `kingindex-v2-3-theme` as `light`|`dark` only. No System mode, no segmented Light|Dark|System
- Staging SEO: `noindex, follow` + canonical → production apex
- Staging badge: `Staging /3 Phosphor`
- Link: PPP Calculator → `https://ppp.tanishqnalloju.com` (`target="_blank"` `rel="noopener noreferrer"`)

## Preserved IA / math
- Same as prod / `/2`: income, net/gross, home, dest, household size; share params `income`, `home`, `type`, `dest`, `household_size`
- Home telemetry (lead first): Income (local), × home median (or Per-capita PPP if no median), then secondary PPP / price level
- Dest telemetry (lead first): × local median, PPP equivalent (household = PPP Calculator), then FX / cost vs home
- Scatter lab + country table + band filters
- Scope: `/3` only — three phosphor traces (frost cyan / phosphor green / gold); reduced-motion → static traces (not `/1`, `/2`, chooser math, or production apex)
