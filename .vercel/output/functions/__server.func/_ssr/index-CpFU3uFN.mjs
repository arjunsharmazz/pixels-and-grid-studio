import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { H as House, B as Briefcase, L as Layers, U as User, M as Mail } from "../_libs/lucide-react.mjs";
const WORDS = ["Design", "Systems", "Experience", "Motion", "Future", "Portfolio", "Creative Agency"];
function Loader({ onDone }) {
  const [i, setI] = reactExports.useState(0);
  const [out, setOut] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (i >= WORDS.length - 1) {
      const t2 = setTimeout(() => {
        setOut(true);
        setTimeout(onDone, 800);
      }, 650);
      return () => clearTimeout(t2);
    }
    const t = setTimeout(() => setI(i + 1), 480);
    return () => clearTimeout(t);
  }, [i, onDone]);
  const progress = Math.round((i + 1) / WORDS.length * 100);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `fixed inset-0 z-[100] bg-paper transition-all duration-700 ${out ? "opacity-0 scale-[1.02] blur-md" : "opacity-100"}`,
      style: { pointerEvents: out ? "none" : "auto" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg-fine grid-drift opacity-70" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 flicker",
            style: { background: "radial-gradient(ellipse at center, transparent 30%, var(--paper) 90%)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-0 left-0 right-0 flex items-center justify-between px-6 md:px-10 py-6 text-[10px] uppercase tracking-[0.3em] text-ink", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 bg-ink" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Pixels & Grid" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden md:inline opacity-50", children: "Booting interface" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono tabular-nums", children: [
            String(progress).padStart(3, "0"),
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] uppercase tracking-[0.4em] text-[#838383] mb-8", children: [
            "[ ",
            String(i + 1).padStart(2, "0"),
            " / ",
            String(WORDS.length).padStart(2, "0"),
            " ]"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full flex items-center justify-center", style: { minHeight: "clamp(4rem, 14vw, 12rem)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h1",
            {
              className: "font-display text-ink leading-none text-center",
              style: {
                fontSize: "clamp(3rem, 12vw, 11rem)",
                letterSpacing: "-0.05em",
                animation: "wordIn 0.55s cubic-bezier(.7,0,.2,1) both"
              },
              children: WORDS[i]
            },
            i
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 w-[min(420px,80vw)]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-full bg-[#DADADA] relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-0 bg-ink transition-all duration-500 ease-out", style: { width: `${progress}%` } }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex justify-between text-[9px] font-mono uppercase tracking-[0.3em] text-[#838383]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "LOAD" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                progress.toString().padStart(3, "0"),
                " / 100"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Corner, { pos: "top-6 left-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Corner, { pos: "top-6 right-6", flip: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Corner, { pos: "bottom-6 left-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Corner, { pos: "bottom-6 right-6", flip: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-[#9B9B9B]", children: "EST. MMXIX · Lisbon · NY · Tokyo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @keyframes wordIn {
          0%   { opacity: 0; transform: translateY(40%) scale(1.08); filter: blur(18px); }
          60%  { opacity: 1; filter: blur(0); }
          100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }
      ` })
      ]
    }
  );
}
function Corner({ pos, flip }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `absolute ${pos} w-3 h-3 pointer-events-none`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute ${flip ? "right-0" : "left-0"} top-0 h-full w-px bg-[#6A6A6A]` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute left-0 ${flip ? "right-0" : ""} top-0 w-full h-px bg-[#6A6A6A]` })
  ] });
}
function PixelCursor(_) {
  return null;
}
const ITEMS = ["Work", "About", "Services", "Process", "Contact"];
function SideNav({ dark = false }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "nav",
    {
      className: `fixed left-6 top-1/2 z-50 -translate-y-1/2 hidden md:flex flex-col gap-5 ${dark ? "text-paper" : "text-ink"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-2 w-2 ${dark ? "bg-paper" : "bg-ink"}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.3em]", children: "P&G" })
        ] }),
        ITEMS.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: `#${it.toLowerCase()}`,
            className: "group relative flex items-center gap-3 text-[11px] uppercase tracking-[0.25em]",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono opacity-50", children: [
                "0",
                i + 1
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition-transform duration-300 group-hover:translate-x-1", children: it }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `absolute left-0 -bottom-1 h-px w-0 transition-all duration-500 group-hover:w-12 ${dark ? "bg-paper" : "bg-ink"}`
                }
              )
            ]
          },
          it
        ))
      ]
    }
  );
}
function Reveal({ children, delay = 0, as: As = "div", className = "" }) {
  const ref = reactExports.useRef(null);
  const [shown, setShown] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setShown(true)),
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    As,
    {
      ref,
      className,
      style: {
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0) scale(1)" : "translateY(28px) scale(0.98)",
        filter: shown ? "blur(0)" : "blur(8px)",
        transition: `opacity .9s ease ${delay}ms, transform .9s cubic-bezier(.7,0,.2,1) ${delay}ms, filter .9s ease ${delay}ms`
      },
      children
    }
  );
}
const MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = reactExports.useState(void 0);
  reactExports.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return !!isMobile;
}
function HorizontalCanvas({ children }) {
  const isMobile = useIsMobile();
  const wrapRef = reactExports.useRef(null);
  const trackRef = reactExports.useRef(null);
  const targetRef = reactExports.useRef(0);
  const currentRef = reactExports.useRef(0);
  const maxRef = reactExports.useRef(0);
  const [progress, setProgress] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (isMobile) return;
    const wrap = wrapRef.current;
    const track = trackRef.current;
    document.body.style.overflow = "hidden";
    const recalc = () => {
      maxRef.current = Math.max(0, track.scrollWidth - window.innerWidth);
      targetRef.current = Math.min(targetRef.current, maxRef.current);
    };
    recalc();
    const ro = new ResizeObserver(recalc);
    ro.observe(track);
    window.addEventListener("resize", recalc);
    const onWheel = (e) => {
      e.preventDefault();
      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      targetRef.current = Math.max(0, Math.min(maxRef.current, targetRef.current + delta));
    };
    wrap.addEventListener("wheel", onWheel, { passive: false });
    const onKey = (e) => {
      const step = window.innerWidth * 0.9;
      if (e.key === "ArrowRight" || e.key === "PageDown") targetRef.current = Math.min(maxRef.current, targetRef.current + step);
      if (e.key === "ArrowLeft" || e.key === "PageUp") targetRef.current = Math.max(0, targetRef.current - step);
      if (e.key === "Home") targetRef.current = 0;
      if (e.key === "End") targetRef.current = maxRef.current;
    };
    window.addEventListener("keydown", onKey);
    let raf = 0;
    const loop = () => {
      currentRef.current += (targetRef.current - currentRef.current) * 0.09;
      track.style.transform = `translate3d(${-currentRef.current}px,0,0)`;
      setProgress(maxRef.current ? currentRef.current / maxRef.current : 0);
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => {
      cancelAnimationFrame(raf);
      wrap.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", recalc);
      ro.disconnect();
      document.body.style.overflow = "";
    };
  }, [isMobile]);
  if (isMobile) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-paper", children });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: wrapRef, className: "fixed inset-0 overflow-hidden bg-paper", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: trackRef, className: "flex h-screen will-change-transform", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#6A6A6A]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono tabular-nums", children: String(Math.round(progress * 100)).padStart(3, "0") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-40 bg-[#DADADA] relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-0 bg-ink", style: { width: `${progress * 100}%` } }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-50", children: "Scroll →" })
    ] })
  ] });
}
const NAV = [
  { icon: House, label: "Home", href: "#intro" },
  { icon: Briefcase, label: "Work", href: "#work" },
  { icon: Layers, label: "Services", href: "#services" },
  { icon: User, label: "About", href: "#about" },
  { icon: Mail, label: "Contact", href: "#contact" }
];
function MobileBottomNav() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "fixed bottom-3 left-3 right-3 z-50 md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-full border border-[#DADADA] bg-[#FDFDFD] backdrop-blur-xl shadow-[0_20px_60px_-20px_#00000040]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex items-center justify-between px-2 py-2", children: NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href: n.href,
      className: "flex flex-col items-center gap-1 py-2 text-[#515151] active:text-ink active:scale-95 transition",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(n.icon, { className: "h-[18px] w-[18px]", strokeWidth: 1.5 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] uppercase tracking-[0.18em]", children: n.label })
      ]
    }
  ) }, n.label)) }) }) });
}
const TOL = 1.5;
function nearestOffset(value, grid) {
  const snapped = Math.round(value / grid) * grid;
  return Math.abs(value - snapped);
}
function rectsOverlap(a, b) {
  const x = Math.min(a.right, b.right) - Math.max(a.left, b.left);
  const y = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
  return x > 1 && y > 1 ? x * y : 0;
}
function LayoutGuard({ gridSize = 32 }) {
  const [issues, setIssues] = reactExports.useState([]);
  reactExports.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const forced = params.get("guard");
    if (forced === "0") return;
    if (forced !== "1" && true) return;
    let raf = 0;
    const seen = /* @__PURE__ */ new Set();
    let lastFlush = 0;
    const tick = () => {
      const nodes = Array.from(document.querySelectorAll("[data-guard]"));
      const rects = nodes.map((n) => ({
        id: n.dataset.guard || n.tagName.toLowerCase(),
        grid: Number(n.dataset.guardGrid) || gridSize,
        rect: n.getBoundingClientRect()
      }));
      const v = [];
      for (const { id, grid, rect } of rects) {
        if (rect.width === 0 || rect.height === 0) continue;
        const offX = nearestOffset(rect.left, grid);
        const offY = nearestOffset(rect.top, grid);
        if (offX > TOL) v.push({ kind: "align", id, axis: "x", value: rect.left, off: offX });
        if (offY > TOL) v.push({ kind: "align", id, axis: "y", value: rect.top, off: offY });
      }
      for (let i = 0; i < rects.length; i++) {
        for (let j = i + 1; j < rects.length; j++) {
          const area = rectsOverlap(rects[i].rect, rects[j].rect);
          if (area > 0) v.push({ kind: "overlap", a: rects[i].id, b: rects[j].id, area });
        }
      }
      const now = performance.now();
      if (now - lastFlush > 250) {
        lastFlush = now;
        setIssues(v);
        for (const issue of v) {
          const key = issue.kind === "align" ? `align:${issue.id}:${issue.axis}:${Math.round(issue.off)}` : `overlap:${issue.a}<>${issue.b}`;
          if (!seen.has(key)) {
            seen.add(key);
            if (issue.kind === "align") {
              console.warn(
                `[LayoutGuard] "${issue.id}" off-grid on ${issue.axis}: ${issue.value.toFixed(2)}px (off by ${issue.off.toFixed(2)}px)`
              );
            } else {
              console.warn(
                `[LayoutGuard] overlap "${issue.a}" ↔ "${issue.b}" (~${Math.round(issue.area)}px²)`
              );
            }
          }
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [gridSize]);
  if (!issues.length) return null;
  const aligns = issues.filter((i) => i.kind === "align").length;
  const overlaps = issues.filter((i) => i.kind === "overlap").length;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed bottom-3 right-3 z-[9999] pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-ink text-paper text-[10px] uppercase tracking-[0.2em] px-3 py-2 font-mono shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 bg-red-500 animate-pulse" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Layout" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "opacity-60", children: [
      "align ",
      aligns
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "opacity-60", children: [
      "overlap ",
      overlaps
    ] })
  ] }) }) });
}
const WORK = [{
  n: "01",
  title: "Helio",
  sub: "Capital",
  tag: "Brand · Web",
  year: "2025",
  grad: "from-neutral-200 to-neutral-400"
}, {
  n: "02",
  title: "Northbound",
  sub: "OS",
  tag: "Product · System",
  year: "2025",
  grad: "from-stone-300 to-stone-500"
}, {
  n: "03",
  title: "Atlas",
  sub: "Motion",
  tag: "Identity · Film",
  year: "2024",
  grad: "from-zinc-200 to-zinc-500"
}, {
  n: "04",
  title: "Mono",
  sub: "Studio",
  tag: "Editorial · Web",
  year: "2024",
  grad: "from-neutral-300 to-neutral-600"
}];
const SERVICES = [{
  n: "01",
  t: "Brand Identity",
  d: "Marks, systems, guidelines, motion identities."
}, {
  n: "02",
  t: "Digital Product",
  d: "Interface design, design systems, prototyping."
}, {
  n: "03",
  t: "Web Experiences",
  d: "Editorial sites, marketing, interactive stories."
}, {
  n: "04",
  t: "Motion & Film",
  d: "Title sequences, product films, brand motion."
}, {
  n: "05",
  t: "Strategy",
  d: "Positioning, naming, narrative, voice."
}];
const PROCESS = [{
  n: "01",
  t: "Discover",
  it: "listen",
  d: "Audit, research, stakeholder interviews.",
  visual: "mesh-discover",
  tone: "light"
}, {
  n: "02",
  t: "Define",
  it: "frame",
  d: "Strategy, positioning, creative direction.",
  visual: "gradient-define",
  tone: "dark"
}, {
  n: "03",
  t: "Design",
  it: "craft",
  d: "Systems, interfaces, identity, motion.",
  visual: "mesh-design",
  tone: "dark"
}, {
  n: "04",
  t: "Deliver",
  it: "ship",
  d: "Build, launch, iterate, measure.",
  visual: "bitmap-deliver",
  tone: "dark"
}];
const TESTIMONIALS = [{
  q: "Pixels & Grid rebuilt our brand from first principles. Unmistakable.",
  a: "Maya Okafor",
  r: "VP Brand, Helio"
}, {
  q: "A rare studio that ships systems, not screenshots. Quietly transformational.",
  a: "Daniel Reyes",
  r: "CPO, Northbound"
}, {
  q: "Editorial taste, engineering rigor. We hired them three times in a year.",
  a: "Inès Laurent",
  r: "Founder, Atlas"
}];
function Home() {
  const [loading, setLoading] = reactExports.useState(true);
  const isMobile = useIsMobile();
  reactExports.useEffect(() => {
    if (loading) document.body.style.overflow = "hidden";
  }, [loading]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-paper text-ink", children: [
    loading && /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { onDone: () => setLoading(false) }),
    !isMobile && /* @__PURE__ */ jsxRuntimeExports.jsx(PixelCursor, {}),
    isMobile ? /* @__PURE__ */ jsxRuntimeExports.jsx(MobileView, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(DesktopView, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutGuard, {})
  ] });
}
function DesktopView() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SideNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(HorizontalCanvas, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(IntroPanel, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(WorkPanel, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AboutPanel, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ServicesPanel, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProcessPanel, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(VoicesPanel, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ContactPanel, {})
    ] })
  ] });
}
function Panel({
  children,
  dark = false,
  width = "100vw",
  id
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id, className: `relative h-screen shrink-0 ${dark ? "bg-ink text-paper" : "bg-paper text-ink"}`, style: {
    width
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 ${dark ? "grid-bg-dark" : "grid-bg-fine"} opacity-60 pointer-events-none` }),
    children
  ] });
}
function IntroPanel() {
  const headingRef = reactExports.useRef(null);
  const turbulenceRef = reactExports.useRef(null);
  const timeoutRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const heading = headingRef.current;
    const turbulence = turbulenceRef.current;
    if (!heading || !turbulence) return;
    const activate = () => {
      turbulence.setAttribute("seed", `${Math.floor(Math.random() * 1e3)}`);
      heading.classList.add("pixelate-active");
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => {
        heading.classList.remove("pixelate-active");
        timeoutRef.current = null;
      }, 800);
    };
    const reset = () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      heading.classList.remove("pixelate-active");
      timeoutRef.current = null;
    };
    heading.addEventListener("pointerenter", activate);
    heading.addEventListener("pointerdown", activate);
    heading.addEventListener("pointerleave", reset);
    heading.addEventListener("pointercancel", reset);
    heading.addEventListener("touchend", reset);
    return () => {
      heading.removeEventListener("pointerenter", activate);
      heading.removeEventListener("pointerdown", activate);
      heading.removeEventListener("pointerleave", reset);
      heading.removeEventListener("pointercancel", reset);
      heading.removeEventListener("touchend", reset);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { id: "intro", width: "100vw", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "0", height: "0", "aria-hidden": "true", className: "absolute", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("filter", { id: "pixelate-texture", x: "0", y: "0", width: "100%", height: "100%", filterUnits: "userSpaceOnUse", primitiveUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("feTurbulence", { ref: turbulenceRef, type: "fractalNoise", baseFrequency: "0.02", numOctaves: "1", seed: "0", result: "noise" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("feDisplacementMap", { in: "SourceGraphic", in2: "noise", scale: "18", xChannelSelector: "R", yChannelSelector: "G" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("feComponentTransfer", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("feFuncR", { type: "discrete", tableValues: "0 1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("feFuncG", { type: "discrete", tableValues: "0 1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("feFuncB", { type: "discrete", tableValues: "0 1" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-0 left-0 right-0 flex items-center justify-between px-14 py-6 text-[10px] uppercase tracking-[0.3em]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-base tracking-tight normal-case", children: [
        "Pixels",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-40", children: "/" }),
        "Grid"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-50", children: "Index — MMXXVI" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "border border-ink px-3 py-2 hover:bg-ink hover:text-paper transition-colors", children: "Start a project →" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 pt-28 pb-20 pl-32 pr-14 grid grid-cols-12 grid-rows-6 gap-x-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "col-span-12 row-span-1 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#6A6A6A]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 bg-ink" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "A futurist design studio · Est. 2019" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { ref: headingRef, "data-guard": "hero-headline", className: "pixelate-heading col-span-8 row-span-4 font-display text-balance leading-[0.86] tracking-[-0.05em] self-center", style: {
        fontSize: "clamp(2.5rem, 7.5vw, 8rem)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { as: "span", className: "block", children: "Design for" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { as: "span", delay: 120, className: "block", children: "the systems" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { as: "span", delay: 240, className: "block italic font-light", children: "that come next." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 380, className: "flex col-span-4 row-span-4 row-start-2 col-start-9 flex-col justify-end gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-guard": "hero-side", className: "text-[10px] uppercase tracking-[0.3em] text-[#838383]", children: "[ Manifest 001 ]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-[#383838] leading-relaxed", children: "An independent studio engineering brands, products, and motion experiences for teams reshaping their categories." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#work", className: "bg-ink text-paper px-5 py-3 text-[10px] uppercase tracking-[0.3em] text-center hover:opacity-90", children: "View Work →" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "border border-ink px-5 py-3 text-[10px] uppercase tracking-[0.3em] text-center hover:bg-ink hover:text-paper transition-colors", children: "Get in touch" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 row-span-1 self-end flex justify-between text-[10px] uppercase tracking-[0.3em] text-[#6A6A6A]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block animate-pulse", children: "→" }),
          " Scroll horizontally"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "01 / 07" })
      ] })
    ] })
  ] });
}
function WorkPanel() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { id: "work", width: "100vw", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 pt-20 pb-28 pl-28 pr-20 flex flex-col", style: {
    backgroundColor: "#0A0A0A",
    color: "#FFFFFF"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.3em] text-[#CFCFCF] mb-3", children: "[ 02 ] Selected Work" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { "data-guard": "work-h2", className: "font-display text-6xl tracking-tight text-white", children: [
          "Recent ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "serif-italic text-7xl", children: "projects." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.3em] text-[#CFCFCF]", children: "2024 — 2025" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-start", children: WORK.map((w, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: idx * 80, className: "flex flex-col group", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "block border border-transparent overflow-hidden transform transition-transform duration-300 group-hover:scale-105 group-hover:border-[#D4AF37]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[3/4] overflow-hidden bg-[#0A0A0A]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-30 group-hover:opacity-60 transition-opacity duration-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 left-4 text-[10px] font-mono uppercase tracking-widest text-[#D4AF37]", children: w.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 right-4 text-[10px] font-mono uppercase tracking-widest text-[#D4AF37]", children: w.year }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 p-5 transition-transform duration-300 group-hover:-translate-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-white leading-none", style: {
            fontSize: "clamp(2rem,3.5vw,4rem)"
          }, children: w.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display italic font-light text-white leading-none opacity-80", style: {
            fontSize: "clamp(1.4rem,2.4vw,2.6rem)"
          }, children: w.sub })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex justify-between text-[10px] uppercase tracking-[0.25em] text-[#CFCFCF]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: w.tag }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "group-hover:translate-x-1 transition-transform", children: "View ↗" })
      ] })
    ] }) }, w.n)) })
  ] }) });
}
function AboutPanel() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { id: "about", width: "120vw", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 pt-20 pb-20 pl-28 pr-20 grid grid-cols-12 gap-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.3em] text-[#6A6A6A] mb-3", children: "[ 03 ] About" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-[#515151] leading-relaxed max-w-[28ch]", children: "Nine designers, two writers, four engineers. One discipline: editorial craft applied to interactive systems." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-9 flex flex-col justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-balance leading-[0.95] tracking-[-0.04em]", style: {
        fontSize: "clamp(2.5rem,5vw,6rem)"
      }, children: [
        "We design at the intersection of ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic font-light", children: "craft, code, and consequence." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-10", children: [{
        k: "127",
        v: "Projects shipped"
      }, {
        k: "12",
        v: "Awwwards & FWA"
      }, {
        k: "9",
        v: "Designers in studio"
      }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "border-t border-ink pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-6xl", children: s.k }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-[10px] uppercase tracking-[0.25em] text-[#6A6A6A]", children: s.v })
      ] }, s.k)) })
    ] })
  ] }) });
}
function ServicesPanel() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { id: "services", dark: true, width: "130vw", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 pt-20 pb-20 pl-28 pr-20 flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.3em] opacity-60 mb-3", children: "[ 04 ] Services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { "data-guard": "services-h2", className: "font-display text-6xl tracking-tight", children: [
        "What we ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "serif-italic text-7xl", children: "do." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex flex-col justify-center", children: SERVICES.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 50, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contact", className: "group grid grid-cols-12 items-center gap-6 border-t border-[#373737] py-5 last:border-b", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-1 font-mono text-xs opacity-60", children: s.n }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "col-span-7 font-display tracking-tight transition-transform duration-500 group-hover:translate-x-3", style: {
        fontSize: "clamp(1.8rem,3.4vw,4rem)"
      }, children: s.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-3 text-sm opacity-70", children: s.d }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-1 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-0.5", children: Array.from({
        length: 9
      }).map((_, k) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 bg-paper" }, k)) }) })
    ] }) }, s.n)) })
  ] }) });
}
function ProcessPanel() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { id: "process", width: "140vw", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 pt-20 pb-20 pl-28 pr-20 flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 flex items-end justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.3em] text-[#6A6A6A] mb-3", children: "[ 05 ] Process" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { "data-guard": "process-h2", className: "font-display text-6xl tracking-tight leading-[0.9]", children: [
          "How we ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "serif-italic text-7xl", children: "work." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "max-w-xs text-sm text-[#6A6A6A] leading-relaxed", children: [
        "A four-act ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "serif-italic", children: "method" }),
        " — each stage owns a texture, a tempo, and an artifact."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 grid grid-cols-4 gap-6", children: PROCESS.map((p, i) => {
      const fg = p.tone === "dark" ? "text-paper" : "text-ink";
      const sub = p.tone === "dark" ? "text-[#B3B3B3]" : "text-[#6A6A6A]";
      const border = p.tone === "dark" ? "border-[#373737]" : "border-[#CDCDCD]";
      return /* @__PURE__ */ jsxRuntimeExports.jsx(ProcessCard, { delay: i * 90, className: `${p.visual} ${fg}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex h-full flex-col p-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `font-mono text-[10px] tracking-widest ${sub}`, children: [
            p.n,
            " / 04"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `serif-italic text-base ${sub}`, children: [
            "— ",
            p.it
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display leading-[0.9] tracking-[-0.04em]", style: {
            fontSize: "clamp(2.25rem,3.4vw,3.6rem)"
          }, children: [
            p.t.slice(0, -2),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "serif-italic", children: p.t.slice(-2) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mt-5 h-px w-10 ${p.tone === "dark" ? "bg-[#828282]" : "bg-[#838383]"}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `mt-4 text-sm leading-relaxed ${sub}`, children: p.d })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `mt-6 flex items-center justify-between text-[10px] uppercase tracking-[0.25em] ${sub} border-t ${border} pt-3`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Phase" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: "·····" })
        ] })
      ] }) }, p.n);
    }) })
  ] }) });
}
function ProcessCard({
  delay,
  className,
  children
}) {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const target = el.parentElement;
    if (!target) return;
    const io = new IntersectionObserver(([entry]) => target.classList.toggle("in-view", entry.isIntersecting && entry.intersectionRatio > 0.1), {
      threshold: [0, 0.1, 0.5, 1],
      root: null
    });
    io.observe(target);
    return () => io.disconnect();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay, className: `relative overflow-hidden noise group proc-anim flex flex-col ${className}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: "contents" }),
    children
  ] });
}
function VoicesPanel() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { id: "voices", width: "140vw", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 pt-20 pb-20 pl-28 pr-20 flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.3em] text-[#6A6A6A] mb-3", children: "[ 06 ] Voices" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { "data-guard": "voices-h2", className: "font-display text-6xl tracking-tight", children: [
        "In their ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "serif-italic text-7xl", children: "words." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 grid grid-cols-3 gap-8", children: TESTIMONIALS.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: i * 100, className: "border border-ink p-8 flex flex-col justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-2xl leading-tight tracking-tight", children: [
        '"',
        t.q,
        '"'
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex justify-between text-[10px] uppercase tracking-[0.25em]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.a }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#6A6A6A]", children: t.r })
      ] })
    ] }, t.a)) })
  ] }) });
}
function ContactPanel() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { id: "contact", dark: true, width: "120vw", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 pt-20 pb-16 pl-28 pr-20 flex flex-col justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.3em] opacity-60 mb-6", children: "[ 07 ] Let's build" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-balance leading-[0.85] tracking-[-0.05em]", style: {
        fontSize: "clamp(4rem,12vw,13rem)"
      }, children: [
        "Start a",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic font-light", children: "project →" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-6 border-t border-[#373737] pt-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.3em] opacity-60 mb-3", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:studio@pixelsandgrid.co", className: "block text-xl hover:underline", children: "studio@pixelsandgrid.co" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+1", className: "block text-xl opacity-70", children: "+1 (212) 555 0144" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.3em] opacity-60 mb-3", children: "Studio" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm opacity-70", children: [
          "Lisbon",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "New York",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Tokyo"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.3em] opacity-60 mb-3", children: "Index" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1 opacity-70", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#work", children: "Work" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#about", children: "About" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#services", children: "Services" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#process", children: "Process" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.3em] opacity-60 mb-3", children: "Social" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1 opacity-70", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "Instagram ↗" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "Are.na ↗" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "Read.cv ↗" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 mt-6 flex justify-between text-[10px] uppercase tracking-[0.3em] opacity-50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "© MMXXVI Pixels & Grid Studio" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "All systems nominal" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "v 4.0.1" })
      ] })
    ] })
  ] }) });
}
function MobileView() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MobileBottomNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "intro", className: "relative min-h-[100svh] px-5 pt-8 pb-10 flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg-fine opacity-50 pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center justify-between text-[10px] uppercase tracking-[0.3em]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-base tracking-tight normal-case", children: [
          "Pixels",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-40", children: "/" }),
          "Grid"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-50", children: "MMXXVI" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 flex flex-col justify-center py-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-[#6A6A6A] mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 bg-ink" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "A futurist design studio" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display leading-[0.88] tracking-[-0.04em]", style: {
          fontSize: "clamp(3rem,15vw,5.5rem)"
        }, children: [
          "Design for",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "the systems",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic font-light", children: "that come next." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-sm text-[#515151] max-w-[34ch]", children: "Brand, product, and motion experiences for teams reshaping their categories." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative text-[10px] uppercase tracking-[0.3em] text-[#838383]", children: "← Swipe horizontal galleries · Tap nav below" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MobileSection, { num: "02", title: "Selected Work", id: "work", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "-mx-5 px-5 overflow-x-auto snap-x snap-mandatory flex gap-4 pb-2 scrollbar-none", children: WORK.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "snap-start shrink-0 w-[78vw]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative aspect-[4/5] overflow-hidden bg-gradient-to-br ${w.grad}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg-fine opacity-30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3 text-[10px] font-mono text-paper mix-blend-difference", children: w.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 right-3 text-[10px] font-mono text-paper mix-blend-difference", children: w.year }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-paper leading-none mix-blend-difference text-4xl", children: w.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display italic font-light text-paper mix-blend-difference text-2xl", children: w.sub })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex justify-between text-[10px] uppercase tracking-[0.25em]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: w.tag }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "↗" })
      ] })
    ] }, w.n)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(MobileSection, { num: "03", title: "About", id: "about", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-3xl leading-tight tracking-tight", children: [
        "We design at the intersection of ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic font-light", children: "craft, code, and consequence." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-3 gap-4", children: [{
        k: "127",
        v: "Shipped"
      }, {
        k: "12",
        v: "Awards"
      }, {
        k: "9",
        v: "Designers"
      }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-ink pt-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl", children: s.k }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[9px] uppercase tracking-[0.25em] text-[#6A6A6A]", children: s.v })
      ] }, s.k)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "services", className: "relative bg-ink text-paper px-5 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg-dark opacity-40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.3em] opacity-60 mb-3", children: "[ 04 ] Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl tracking-tight mb-8", children: "What we do." }),
        SERVICES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contact", className: "block border-t border-[#373737] py-5 last:border-b", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs opacity-60", children: s.n }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl tracking-tight", children: s.t })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm opacity-70 mt-2 pl-8", children: s.d })
        ] }, s.n))
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MobileSection, { num: "05", title: "Process", id: "process", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0", children: PROCESS.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `py-5 ${i < PROCESS.length - 1 ? "border-b border-ink" : ""}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-[10px] tracking-widest text-[#6A6A6A]", children: [
        p.n,
        " / 04"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl mt-1", children: p.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-[#6A6A6A] mt-1", children: p.d })
    ] }, p.n)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MobileSection, { num: "06", title: "Voices", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "-mx-5 px-5 overflow-x-auto snap-x snap-mandatory flex gap-4 pb-2", children: TESTIMONIALS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "snap-start shrink-0 w-[82vw] border border-ink p-6 flex flex-col justify-between min-h-[240px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-xl leading-tight tracking-tight", children: [
        '"',
        t.q,
        '"'
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex justify-between text-[10px] uppercase tracking-[0.25em]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.a }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#6A6A6A]", children: t.r })
      ] })
    ] }, t.a)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "relative bg-ink text-paper px-5 pt-20 pb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg-dark opacity-30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.3em] opacity-60 mb-4", children: "[ 07 ] Let's build" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display leading-[0.88] tracking-[-0.05em]", style: {
          fontSize: "clamp(3.5rem,18vw,7rem)"
        }, children: [
          "Start a",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic font-light", children: "project →" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 border-t border-[#373737] pt-6 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.3em] opacity-60 mb-2", children: "Contact" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:studio@pixelsandgrid.co", className: "block text-lg", children: "studio@pixelsandgrid.co" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+1", className: "block text-lg opacity-70", children: "+1 (212) 555 0144" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.3em] opacity-60 mb-2", children: "Studio" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm opacity-70", children: "Lisbon · NY · Tokyo" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.3em] opacity-60 mb-2", children: "Social" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm opacity-70", children: "Instagram · Are.na · Read.cv" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.3em] opacity-50 pt-4 border-t border-[#373737]", children: "© MMXXVI Pixels & Grid · v 4.0.1" })
        ] })
      ] })
    ] })
  ] });
}
function MobileSection({
  num,
  title,
  id,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id, className: "px-5 py-16 border-t border-ink", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] uppercase tracking-[0.3em] text-[#6A6A6A] mb-3", children: [
      "[ ",
      num,
      " ] ",
      title
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl tracking-tight mb-8", children: [
      title,
      "."
    ] }),
    children
  ] });
}
export {
  Home as component
};
