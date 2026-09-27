# Design audit: /2 Improved

**Mode:** Redesign - preserve. Same IA and chrome as production; targeted quality upgrades.

## Audit fixes applied
1. **Typography** - tighter display tracking; tabular-nums reinforced on metrics/table/summary
2. **Theme control** - System / Light / Dark select (not sun/moon toggle only); listens to `prefers-color-scheme`
3. **Dark theme quality** - tinted charcoal surfaces (`#0e1117` / `#151a22`), stronger muted contrast (`#9aa8bc`)
4. **Focus** - `focus-visible` rings; mouse focus not outlined
5. **Skip-link** - keyboard skip to `#controls`
6. **Em-dash cleanup** - visible titles/copy use periods or hyphens (skill ban)
7. **Hairlines / staging** - staging badge; `noindex, follow`; canonical → production
8. **Viewport** - `min-height: 100dvh`

## Unchanged
- Math, data, band filter tags, primary metric = × median, scatter lab secondary
- Share URL params and query behavior on `/2/`
