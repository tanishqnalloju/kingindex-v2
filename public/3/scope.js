/* KingIndex /3 — Phosphor oscilloscope: GSAP signal sweep reacts to income/dest. */
(function () {
  "use strict";

  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn, { once: true });
    } else {
      fn();
    }
  }

  function prefersReduced() {
    try {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch (_) {
      return false;
    }
  }

  function fmtMultiple(n) {
    if (n == null || !isFinite(n)) return "—";
    if (n >= 100) return Math.round(n) + "×";
    if (n >= 10) return n.toFixed(1) + "×";
    return n.toFixed(2) + "×";
  }

  function buildPath(amp, phase, w, h) {
    const mid = h * 0.55;
    const pts = [];
    const n = 48;
    for (let i = 0; i <= n; i++) {
      const t = i / n;
      const x = t * w;
      const wave =
        Math.sin(t * Math.PI * 2.2 + phase) * amp * 0.55 +
        Math.sin(t * Math.PI * 5.1 + phase * 1.7) * amp * 0.22 +
        Math.sin(t * Math.PI * 0.7) * amp * 0.18;
      const envelope = Math.sin(t * Math.PI) * 0.85 + 0.15;
      const y = mid - wave * envelope;
      pts.push((i === 0 ? "M" : "L") + x.toFixed(1) + "," + y.toFixed(1));
    }
    return pts.join(" ");
  }

  function init() {
    if (typeof gsap === "undefined") return;
    const canvas = document.getElementById("scopeCanvas");
    const trace = document.getElementById("scopeTrace");
    const beam = document.getElementById("scopeBeam");
    const glow = document.getElementById("scopeGlow");
    const readout = document.getElementById("scopeReadout");
    const sub = document.getElementById("scopeSub");
    const scan = document.getElementById("scopeScan");
    if (!canvas || !trace) return;

    const W = 640;
    const H = 220;
    let lastMult = null;
    let phase = 0;
    let sweepTween = null;
    let ambientCtx = null;
    let entered = false;

    function setStaticTrace(amp) {
      const d = buildPath(amp, phase, W, H);
      trace.setAttribute("d", d);
      if (glow) glow.setAttribute("d", d);
      if (beam) gsap.set(beam, { attr: { x1: W * 0.92, x2: W * 0.92 }, opacity: 0.35 });
      if (scan) gsap.set(scan, { xPercent: 0, opacity: 0.12 });
    }

    function ampFromMultiple(m) {
      if (m == null || !isFinite(m)) return 28;
      const capped = Math.min(80, Math.max(1, m));
      return 18 + Math.log10(capped + 1) * 38;
    }

    function runSweep(amp) {
      if (prefersReduced()) {
        setStaticTrace(amp);
        return;
      }
      phase += 0.85;
      const d = buildPath(amp, phase, W, H);
      trace.setAttribute("d", d);
      if (glow) glow.setAttribute("d", d);

      if (sweepTween) sweepTween.kill();
      const tl = gsap.timeline();
      if (beam) {
        gsap.set(beam, { attr: { x1: 0, x2: 0 }, opacity: 0.85 });
        tl.to(beam, {
          attr: { x1: W, x2: W },
          duration: 0.85,
          ease: "power2.inOut",
          opacity: 0.25
        }, 0);
      }
      if (scan) {
        gsap.set(scan, { xPercent: -110, opacity: 0.28 });
        tl.to(scan, { xPercent: 110, duration: 0.9, ease: "power1.inOut", opacity: 0.08 }, 0);
      }
      gsap.fromTo(trace, { opacity: 0.35 }, { opacity: 1, duration: 0.45, ease: "power2.out" });
      if (glow) gsap.fromTo(glow, { opacity: 0.15 }, { opacity: 0.45, duration: 0.5, ease: "power2.out" });
      sweepTween = tl;
    }

    function updateReadout(payload) {
      const m = payload.hasDest ? payload.destMultiple : payload.homeMult;
      const label = payload.hasDest ? "× local median" : "× home median";
      if (readout) readout.textContent = fmtMultiple(m);
      if (sub) {
        sub.textContent = payload.hasDest
          ? label + " · class signal"
          : "Home channel · pick a destination";
      }
      const amp = ampFromMultiple(m);
      const changed =
        lastMult == null ||
        m == null ||
        Math.abs((m || 0) - (lastMult || 0)) > 0.001 ||
        payload.destIso !== updateReadout._dest;
      updateReadout._dest = payload.destIso;
      if (changed) runSweep(amp);
      else if (prefersReduced()) setStaticTrace(amp);
      lastMult = m;
    }

    function entrance() {
      if (entered || prefersReduced()) {
        gsap.set(".enter", { opacity: 1, y: 0, clearProps: "transform" });
        return;
      }
      entered = true;
      const els = gsap.utils.toArray(".enter");
      gsap.set(els, { opacity: 0, y: 12 });
      gsap.to(els, {
        opacity: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.06,
        ease: "power2.out",
        clearProps: "transform"
      });
    }

    function ambient() {
      if (ambientCtx) ambientCtx.revert();
      ambientCtx = gsap.context(() => {
        const mm = gsap.matchMedia();
        mm.add("(prefers-reduced-motion: reduce)", () => {
          setStaticTrace(ampFromMultiple(lastMult));
          gsap.set(".phosphor-glow", { opacity: 0.35 });
          gsap.set(".grid-drift", { xPercent: 0, yPercent: 0 });
          return () => {};
        });
        mm.add("(prefers-reduced-motion: no-preference)", () => {
          const glows = gsap.utils.toArray(".phosphor-glow");
          glows.forEach((el, i) => {
            gsap.to(el, {
              opacity: i % 2 ? 0.55 : 0.4,
              xPercent: i % 2 ? 10 : -8,
              yPercent: i % 2 ? -7 : 9,
              scale: 1.08,
              duration: 14 + i * 2.5,
              yoyo: true,
              repeat: -1,
              ease: "sine.inOut"
            });
          });
          const grids = gsap.utils.toArray(".grid-drift");
          grids.forEach((el, i) => {
            gsap.to(el, {
              xPercent: i ? 3 : -2,
              yPercent: i ? -2 : 2,
              duration: 18,
              yoyo: true,
              repeat: -1,
              ease: "sine.inOut"
            });
          });
          if (scan) {
            gsap.to(scan, {
              opacity: 0.14,
              duration: 2.4,
              yoyo: true,
              repeat: -1,
              ease: "sine.inOut"
            });
          }
          return () => {};
        });
      });
    }

    window.__phosphorScope = {
      onSignal: function (payload) {
        updateReadout(payload || {});
      }
    };

    setStaticTrace(28);
    entrance();
    ambient();
    window.addEventListener("kingindex:themechange", () => {
      ambient();
    });
  }

  ready(init);
})();
