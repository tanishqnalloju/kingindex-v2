# KingIndex v2 (staging)

**Staging:** [v2.kingindex.tanishqnalloju.com](https://v2.kingindex.tanishqnalloju.com/)  
**Production (frozen):** [kingindex.tanishqnalloju.com](https://kingindex.tanishqnalloju.com/)

Worker name: `kingindex-v2` (never `ppp-index-calculator`).

## Paths
| Path | Role |
|------|------|
| `/` | Chooser |
| `/1/` | Alternative visual system (same math/IA) |
| `/2/` | Improved production UI (audit fixes, same math) |

Share params (on `/1/` and `/2/`): `income`, `home`, `type`, `dest`, `household_size`.

Example: `/1/?income=800000&home=IND&type=net&dest=BGD&household_size=1`

## Commands
```bash
npm install
npm run parity
npx wrangler deploy   # Worker kingindex-v2 only
```

## Fixture (IND → BGD, hh=1, ₹800k)
| Metric | Value |
|--------|-------|
| PPP equiv (BDT) | 1,408,973 |
| FX (BDT) | 1,119,073 |
| Cost % vs home | +25.9% |
| × BGD median | 17.89× |

See `DESIGN-1.md` and `DESIGN-2.md`.
