import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader } from "@/components/Loader";
import { PixelCursor } from "@/components/PixelCursor";
import { SideNav } from "@/components/SideNav";
import { Reveal } from "@/components/Reveal";
import { HorizontalCanvas } from "@/components/HorizontalCanvas";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { LayoutGuard } from "@/components/LayoutGuard";
import { useIsMobile } from "@/hooks/use-mobile";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pixels & Grid — Digital Design Agency" },
      { name: "description", content: "Pixels & Grid is a futuristic digital design studio crafting brands, products, and motion experiences." },
      { property: "og:title", content: "Pixels & Grid — Digital Design Agency" },
      { property: "og:description", content: "Brand · Product · Motion · Web. An editorial studio for ambitious teams." },
    ],
  }),
  component: Home,
});

const WORK = [
  { n: "01", title: "Helio", sub: "Capital", tag: "Brand · Web", year: "2025", grad: "from-neutral-200 to-neutral-400" },
  { n: "02", title: "Northbound", sub: "OS", tag: "Product · System", year: "2025", grad: "from-stone-300 to-stone-500" },
  { n: "03", title: "Atlas", sub: "Motion", tag: "Identity · Film", year: "2024", grad: "from-zinc-200 to-zinc-500" },
  { n: "04", title: "Mono", sub: "Studio", tag: "Editorial · Web", year: "2024", grad: "from-neutral-300 to-neutral-600" },
];

const uiVideo = new URL("./videos/ui.mp4", import.meta.url).href;

const SERVICES = [
  { title: "PRODUCT & GTM", video: uiVideo },
  { title: "UX UI DESIGN", video: uiVideo },
  { title: "TRANSFORMATION", video: uiVideo },
  { title: "TECHNOLOGY", video: uiVideo },
  { title: "TECHNOLOGY", video: uiVideo },
  { title: "TECHNOLOGY", video: uiVideo },
  { title: "TECHNOLOGY", video: uiVideo },
  { title: "TECHNOLOGY", video: "/videos/technology.mp4" },
  { title: "TECHNOLOGY", video: "/videos/technology.mp4" },
  { title: "TECHNOLOGY", video: "/videos/technology.mp4" },
];

const PROCESS = [
  { n: "01", t: "Discover", it: "listen", d: "Audit, research, stakeholder interviews.", visual: "mesh-discover",   tone: "light" as const },
  { n: "02", t: "Define",   it: "frame",  d: "Strategy, positioning, creative direction.", visual: "gradient-define", tone: "dark"  as const },
  { n: "03", t: "Design",   it: "craft",  d: "Systems, interfaces, identity, motion.",     visual: "mesh-design",     tone: "dark"  as const },
  { n: "04", t: "Deliver",  it: "ship",   d: "Build, launch, iterate, measure.",           visual: "bitmap-deliver",  tone: "dark"  as const },
];

const TESTIMONIALS = [
  { q: "Pixels & Grid rebuilt our brand from first principles. Unmistakable.", a: "Maya Okafor", r: "VP Brand, Helio" },
  { q: "A rare studio that ships systems, not screenshots. Quietly transformational.", a: "Daniel Reyes", r: "CPO, Northbound" },
  { q: "Editorial taste, engineering rigor. We hired them three times in a year.", a: "Inès Laurent", r: "Founder, Atlas" },
];

function Home() {
  const [loading, setLoading] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (loading) document.body.style.overflow = "hidden";
  }, [loading]);

  return (
    <div className="relative bg-paper text-ink">
      {loading && <Loader onDone={() => setLoading(false)} />}
      {!isMobile && <PixelCursor />}
      {isMobile ? <MobileView /> : <DesktopView />}
      <LayoutGuard />
    </div>
  );
}

/* ============================== DESKTOP ============================== */

function DesktopView() {
  return (
    <>
      <SideNav />
      <HorizontalCanvas>
        <IntroPanel />
        <WorkPanel />
        <AboutPanel />
        <ServicesPanel />
        <ProcessPanel />
        <VoicesPanel />
        <ContactPanel />
      </HorizontalCanvas>
    </>
  );
}

function Panel({ children, dark = false, width = "100vw", id }: { children: React.ReactNode; dark?: boolean; width?: string; id?: string }) {
  return (
    <section
      id={id}
      className={`relative h-screen shrink-0 ${dark ? "bg-ink text-paper" : "bg-paper text-ink"}`}
      style={{ width }}
    >
      <div className={`absolute inset-0 ${dark ? "grid-bg-dark" : "grid-bg-fine"} opacity-60 pointer-events-none`} />
      {children}
    </section>
  );
}

function IntroPanel() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const turbulenceRef = useRef<SVGFETurbulenceElement | null>(null);
  const [activeWord, setActiveWord] = useState<number | null>(null);

  const activateWord = (index: number) => {
    const turbulence = turbulenceRef.current;
    if (turbulence) turbulence.setAttribute("seed", `${Math.floor(Math.random() * 1000)}`);
    setActiveWord(index);
  };

  const resetWord = () => setActiveWord(null);

  return (
    <Panel id="intro" width="100vw">
      <svg width="0" height="0" aria-hidden="true" className="absolute">
        <filter id="pixelate-texture" x="0" y="0" width="100%" height="100%" filterUnits="userSpaceOnUse" primitiveUnits="userSpaceOnUse">
          <feTurbulence
            ref={turbulenceRef}
            type="fractalNoise"
            baseFrequency="0.02"
            numOctaves="1"
            seed="0"
            result="noise"
          />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="18" xChannelSelector="R" yChannelSelector="G" />
          <feComponentTransfer>
            <feFuncR type="discrete" tableValues="0 1" />
            <feFuncG type="discrete" tableValues="0 1" />
            <feFuncB type="discrete" tableValues="0 1" />
          </feComponentTransfer>
        </filter>
      </svg>
      {/* Top frame */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-14 py-6 text-[10px] uppercase tracking-[0.3em]">
        <span className="font-display text-base tracking-tight normal-case">Pixels<span className="opacity-40">/</span>Grid</span>
        <span className="opacity-50">Index — MMXXVI</span>
        <a href="#contact" className="border border-ink px-3 py-2 hover:bg-ink hover:text-paper transition-colors">Start a project →</a>
      </div>

      {/* Hero grid: 12-col layout, clearly separated zones */}
      <div className="absolute inset-0 pt-28 pb-20 pl-32 pr-14 grid grid-cols-12 grid-rows-6 gap-x-8">
        {/* meta */}
        <Reveal className="col-span-12 row-span-1 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#6A6A6A]">
          <span className="h-2 w-2 bg-ink" />
          <span>A futurist design studio · Est. 2019</span>
          {/* <span className="ml-auto">N 38.72 / W 9.13 — Lisbon</span> */}
        </Reveal>

        {/* HEADLINE — cols 1-8, leaves 9-12 free for side column */}
        <h1
          ref={headingRef}
          data-guard="hero-headline"
          className="pixelate-heading col-span-8 row-span-4 font-display text-balance leading-[0.86] tracking-[-0.05em] self-center"
          style={{ fontSize: "clamp(2.5rem, 7.5vw, 8rem)" }}
        >
          <Reveal
            as="span"
            className={`block pixelate-word${activeWord === 0 ? " pixelate-active" : ""}`}
            onPointerEnter={() => activateWord(0)}
            onPointerLeave={resetWord}
            onPointerDown={() => activateWord(0)}
            onPointerUp={resetWord}
            onPointerCancel={resetWord}
            onTouchEnd={resetWord}
          >
            Design for
          </Reveal>
          <Reveal
            as="span"
            delay={120}
            className={`block pixelate-word${activeWord === 1 ? " pixelate-active" : ""}`}
            onPointerEnter={() => activateWord(1)}
            onPointerLeave={resetWord}
            onPointerDown={() => activateWord(1)}
            onPointerUp={resetWord}
            onPointerCancel={resetWord}
            onTouchEnd={resetWord}
          >
            the systems
          </Reveal>
          <Reveal
            as="span"
            delay={240}
            className={`block pixelate-word italic font-light${activeWord === 2 ? " pixelate-active" : ""}`}
            onPointerEnter={() => activateWord(2)}
            onPointerLeave={resetWord}
            onPointerDown={() => activateWord(2)}
            onPointerUp={resetWord}
            onPointerCancel={resetWord}
            onTouchEnd={resetWord}
          >
            that come next.
          </Reveal>
        </h1>


        {/* SIDE description — separate column, no overlap */}
        <Reveal delay={380} className="flex col-span-4 row-span-4 row-start-2 col-start-9 flex-col justify-end gap-5">
          <div data-guard="hero-side" className="text-[10px] uppercase tracking-[0.3em] text-[#838383]">[ Manifest 001 ]</div>
          <p className="text-sm text-[#383838] leading-relaxed">
            An independent studio engineering brands, products, and motion experiences for teams reshaping their categories.
          </p>
          <div className="flex flex-col gap-2">
            <a href="#work" className="bg-ink text-paper px-5 py-3 text-[10px] uppercase tracking-[0.3em] text-center hover:opacity-90">View Work →</a>
            <a href="#contact" className="border border-ink px-5 py-3 text-[10px] uppercase tracking-[0.3em] text-center hover:bg-ink hover:text-paper transition-colors">Get in touch</a>
          </div>
        </Reveal>

        {/* bottom bar */}
        <div className="col-span-12 row-span-1 self-end flex justify-between text-[10px] uppercase tracking-[0.3em] text-[#6A6A6A]">
          <span className="flex items-center gap-2"><span className="inline-block animate-pulse">→</span> Scroll horizontally</span>
          {/* <span>Brand · Product · Motion · Web</span> */}
          <span>01 / 07</span>
        </div>
      </div>
    </Panel>
  );
}

function WorkPanel() {
  return (
    <Panel id="work" width="100vw">
      <div className="absolute inset-0 pt-20 pb-28 pl-28 pr-20 flex flex-col" style={{ backgroundColor: '', color: '#0A0A0A' }}>
        <div className="flex items-end justify-between mb-6">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#000000] mb-3">[ 02 ] Selected Work</div>
            <h2 data-guard="work-h2" className="font-display text-6xl tracking-tight text-black">Recent <span className="serif-italic text-7xl">projects.</span></h2>
          </Reveal>
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#CFCFCF]">2024 — 2025</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
          {WORK.map((w, idx) => (
            <Reveal key={w.n} delay={idx * 80} className="flex flex-col group">
              <a href="#" className="block border border-transparent overflow-hidden transform transition-transform duration-300 group-hover:scale-105 group-hover:border-[#ffffff]">
                <div className="relative aspect-[3/4] overflow-hidden bg-[#00000077]">
                  <div className="absolute inset-0 opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
                  <div className="absolute top-4 left-4 text-[10px] font-mono uppercase tracking-widest text-[#D4AF37]">{w.n}</div>
                  <div className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-widest text-[#D4AF37]">{w.year}</div>
                  <div className="absolute inset-x-0 bottom-0 p-5 transition-transform duration-300 group-hover:-translate-y-2">
                    <div className="font-display text-white leading-none" style={{ fontSize: "clamp(2rem,3.5vw,4rem)" }}>
                      {w.title}
                    </div>
                    <div className="font-display italic font-light text-white leading-none opacity-80" style={{ fontSize: "clamp(1.4rem,2.4vw,2.6rem)" }}>
                      {w.sub}
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-between text-[10px] uppercase tracking-[0.25em] text-[#CFCFCF]">
                  <span>{w.tag}</span>
                  <span className="group-hover:translate-x-1 transition-transform">View ↗</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </Panel>
  );
}

function AboutPanel() {
  return (
    <Panel id="about" width="120vw">
      <div className="absolute inset-0 pt-20 pb-20 pl-28 pr-20 grid grid-cols-12 gap-8">
        <div className="col-span-3">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#6A6A6A] mb-3">[ 03 ] About</div>
          <p className="text-sm text-[#515151] leading-relaxed max-w-[28ch]">
            Nine designers, two writers, four engineers. One discipline: editorial craft applied to interactive systems.
          </p>
        </div>
        <div className="col-span-9 flex flex-col justify-between">
          <Reveal>
            <h2 className="font-display text-balance leading-[0.95] tracking-[-0.04em]" style={{ fontSize: "clamp(2.5rem,5vw,6rem)" }}>
              We design at the intersection of <span className="italic font-light">craft, code, and consequence.</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-3 gap-10">
            {[{ k: "127", v: "Projects shipped" }, { k: "12", v: "Awwwards & FWA" }, { k: "9", v: "Designers in studio" }].map((s) => (
              <Reveal key={s.k} className="border-t border-ink pt-4">
                <div className="font-display text-6xl">{s.k}</div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.25em] text-[#6A6A6A]">{s.v}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Panel>
  );
}

function ServicesPanel() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (  
    <Panel id="services" dark width="130vw">
      <div className="absolute inset-0 " />
      <div className="absolute inset-0 pt-20 pb-20 pl-28 pr-20 flex flex-col">
        <div className="mb-12 text-center">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] opacity-80 mb-3">[ 04 ] Services</div>
          <h2
            data-guard="services-h2"
            className="mx-auto max-w-4xl font-display uppercase tracking-tight text-white"
            style={{ fontSize: "clamp(3rem,6vw,5.5rem)" }}
          >
            What we <span className="serif-italic text-[#D4AF37]">craft.</span>
          </h2>
        </div>

        <div className="relative flex-1 flex flex-col justify-center items-center gap-6">
          {SERVICES.map((service, index) => {
            const active = hoverIndex === index;
            const itemOpacity = hoverIndex === null ? 1 : active ? 1 : 0.2;
            const fontWeight = active ? 700 : 500;

            return (
              <div key={service.title} className="relative inline-block text-center">
                <motion.a
                  href="#contact"
                  className="inline-block"
                  onPointerEnter={() => setHoverIndex(index)}
                  onPointerLeave={() => setHoverIndex(null)}
                  onFocus={() => setHoverIndex(index)}
                  onBlur={() => setHoverIndex(null)}
                  animate={{ scale: active ? 1.02 : 1, opacity: itemOpacity }}
                  transition={{ type: "spring", stiffness: 260, damping: 24, duration: 0.3 }}
                  style={{ color: "#FFFFFF" }}
                >
                  <span
                    className="font-display uppercase tracking-tight leading-tight"
                    style={{ fontSize: "clamp(3rem,7vw,5.5rem)", fontWeight }}
                  >
                    {service.title}
                  </span>
                </motion.a>

                <AnimatePresence>
                  {active && (
                    <motion.div
                      className="pointer-events-none absolute left-1/2 bottom-full mb-4 z-50 rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.45)] w-[240px] lg:w-[300px]"
                      initial={{ opacity: 0, scale: 0.95, y: 16 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: 16 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      style={{ transform: "translateX(-50%)" }}
                    >
                      <div className="bg-[#111] px-4 py-3 text-left">
                        <div className="text-[9px] uppercase tracking-[0.3em] text-[#D4AF37]">Preview</div>
                        <div className="mt-2 font-display text-sm uppercase tracking-tight text-white">{service.title}</div>
                      </div>
                      <div className="h-[140px] lg:h-[180px] bg-black">
                        <video
                          src={service.video}
                          className="w-full h-full object-cover"
                          autoPlay
                          playsInline
                          muted
                          loop
                          preload="none"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </Panel>
  );
}

function ProcessPanel() {
  return (
    <Panel id="process" width="140vw">
      <div className="absolute inset-0 pt-20 pb-20 pl-28 pr-20 flex flex-col">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#6A6A6A] mb-3">[ 05 ] Process</div>
            <h2 data-guard="process-h2" className="font-display text-6xl tracking-tight leading-[0.9]">
              How we <span className="serif-italic text-7xl">work.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm text-[#6A6A6A] leading-relaxed">
            A four-act <span className="serif-italic">method</span> — each stage owns a texture, a tempo, and an artifact.
          </p>
        </div>

        <div className="flex-1 grid grid-cols-4 gap-6">
          {PROCESS.map((p, i) => {
            const fg = p.tone === "dark" ? "text-paper" : "text-ink";
            const sub = p.tone === "dark" ? "text-[#B3B3B3]" : "text-[#6A6A6A]";
            const border = p.tone === "dark" ? "border-[#373737]" : "border-[#CDCDCD]";
            return (
              <ProcessCard key={p.n} delay={i * 90} className={`${p.visual} ${fg}`}>
                <div className="relative z-10 flex h-full flex-col p-7">
                  <div className="flex items-center justify-between">
                    <span className={`font-mono text-[10px] tracking-widest ${sub}`}>{p.n} / 04</span>
                    <span className={`serif-italic text-base ${sub}`}>— {p.it}</span>
                  </div>

                  <div className="mt-auto">
                    <h3 className="font-display leading-[0.9] tracking-[-0.04em]" style={{ fontSize: "clamp(2.25rem,3.4vw,3.6rem)" }}>
                      {p.t.slice(0, -2)}<span className="serif-italic">{p.t.slice(-2)}</span>
                    </h3>
                    <div className={`mt-5 h-px w-10 ${p.tone === "dark" ? "bg-[#828282]" : "bg-[#838383]"}`} />
                    <p className={`mt-4 text-sm leading-relaxed ${sub}`}>{p.d}</p>
                  </div>

                  <div className={`mt-6 flex items-center justify-between text-[10px] uppercase tracking-[0.25em] ${sub} border-t ${border} pt-3`}>
                    <span>Phase</span>
                    <span className="font-mono">·····</span>
                  </div>
                </div>
              </ProcessCard>
            );
          })}
        </div>
      </div>
    </Panel>
  );
}

function ProcessCard({ delay, className, children }: { delay: number; className: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const target = el.parentElement; // the Reveal root carrying proc-anim
    if (!target) return;
    const io = new IntersectionObserver(
      ([entry]) => target.classList.toggle("in-view", entry.isIntersecting && entry.intersectionRatio > 0.1),
      { threshold: [0, 0.1, 0.5, 1], root: null }
    );
    io.observe(target);
    return () => io.disconnect();
  }, []);
  return (
    <Reveal delay={delay} className={`relative overflow-hidden noise group proc-anim flex flex-col ${className}`}>
      <div ref={ref} className="contents" />
      {children}
    </Reveal>
  );
}


function VoicesPanel() {
  return (
    <Panel id="voices" width="140vw">
      <div className="absolute inset-0 pt-20 pb-20 pl-28 pr-20 flex flex-col">
        <div className="mb-12">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#6A6A6A] mb-3">[ 06 ] Voices</div>
          <h2 data-guard="voices-h2" className="font-display text-6xl tracking-tight">In their <span className="serif-italic text-7xl">words.</span></h2>
        </div>
        <div className="flex-1 grid grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.a} delay={i * 100} className="border border-ink p-8 flex flex-col justify-between">
              <p className="font-display text-2xl leading-tight tracking-tight">"{t.q}"</p>
              <div className="mt-10 flex justify-between text-[10px] uppercase tracking-[0.25em]">
                <span>{t.a}</span>
                <span className="text-[#6A6A6A]">{t.r}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Panel>
  );
}

function ContactPanel() {
  return (
    <Panel id="contact" dark width="120vw">
      <div className="absolute inset-0 pt-20 pb-16 pl-28 pr-20 flex flex-col justify-between">
        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] opacity-60 mb-6">[ 07 ] Let's build</div>
          <h2 className="font-display text-balance leading-[0.85] tracking-[-0.05em]" style={{ fontSize: "clamp(4rem,12vw,13rem)" }}>
            Start a<br />
            <span className="italic font-light">project →</span>
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-6 border-t border-[#373737] pt-8">
          <div className="col-span-4">
            <div className="text-[10px] uppercase tracking-[0.3em] opacity-60 mb-3">Contact</div>
            <a href="mailto:studio@pixelsandgrid.co" className="block text-xl hover:underline">studio@pixelsandgrid.co</a>
            <a href="tel:+1" className="block text-xl opacity-70">+1 (212) 555 0144</a>
          </div>
          <div className="col-span-2">
            <div className="text-[10px] uppercase tracking-[0.3em] opacity-60 mb-3">Studio</div>
            <p className="text-sm opacity-70">Lisbon<br />New York<br />Tokyo</p>
          </div>
          <div className="col-span-3">
            <div className="text-[10px] uppercase tracking-[0.3em] opacity-60 mb-3">Index</div>
            <ul className="text-sm space-y-1 opacity-70">
              <li><a href="#work">Work</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#process">Process</a></li>
            </ul>
          </div>
          <div className="col-span-3">
            <div className="text-[10px] uppercase tracking-[0.3em] opacity-60 mb-3">Social</div>
            <ul className="text-sm space-y-1 opacity-70">
              <li><a href="#">Instagram ↗</a></li>
              <li><a href="#">Are.na ↗</a></li>
              <li><a href="#">Read.cv ↗</a></li>
            </ul>
          </div>
          <div className="col-span-12 mt-6 flex justify-between text-[10px] uppercase tracking-[0.3em] opacity-50">
            <span>© MMXXVI Pixels & Grid Studio</span>
            <span>All systems nominal</span>
            <span>v 4.0.1</span>
          </div>
        </div>
      </div>
    </Panel>
  );
}

/* ============================== MOBILE ============================== */

function MobileView() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const turbulenceRef = useRef<SVGFETurbulenceElement | null>(null);
  const [activeWord, setActiveWord] = useState<number | null>(null);

  const activateWord = (index: number) => {
    const turbulence = turbulenceRef.current;
    if (turbulence) turbulence.setAttribute("seed", `${Math.floor(Math.random() * 1000)}`);
    setActiveWord(index);
  };

  const resetWord = () => setActiveWord(null);

  return (
    <div className="pb-28">
      <MobileBottomNav />

      {/* HERO */}
      <section id="intro" className="relative min-h-[100svh] px-5 pt-8 pb-10 flex flex-col">
        <svg width="0" height="0" aria-hidden="true" className="absolute">
          <filter id="pixelate-texture" x="0" y="0" width="100%" height="100%" filterUnits="userSpaceOnUse" primitiveUnits="userSpaceOnUse">
            <feTurbulence
              ref={turbulenceRef}
              type="fractalNoise"
              baseFrequency="0.02"
              numOctaves="1"
              seed="0"
              result="noise"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="18" xChannelSelector="R" yChannelSelector="G" />
            <feComponentTransfer>
              <feFuncR type="discrete" tableValues="0 1" />
              <feFuncG type="discrete" tableValues="0 1" />
              <feFuncB type="discrete" tableValues="0 1" />
            </feComponentTransfer>
          </filter>
        </svg>
        <div className="absolute inset-0 grid-bg-fine opacity-50 pointer-events-none" />
        <div className="relative flex items-center justify-between text-[10px] uppercase tracking-[0.3em]">
          <span className="font-display text-base tracking-tight normal-case">Pixels<span className="opacity-40">/</span>Grid</span>
          <span className="opacity-50">MMXXVI</span>
        </div>
        <div className="relative flex-1 flex flex-col justify-center py-10">
          <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-[#6A6A6A] mb-6">
            <span className="h-1.5 w-1.5 bg-ink" /><span>A futurist design studio</span>
          </div>
          <h1
            ref={headingRef}
            className="pixelate-heading font-display leading-[0.88] tracking-[-0.04em]"
            style={{ fontSize: "clamp(3rem,15vw,5.5rem)" }}
          >
            <span
              className={`pixelate-word block${activeWord === 0 ? " pixelate-active" : ""}`}
              onPointerEnter={() => activateWord(0)}
              onPointerLeave={resetWord}
              onPointerDown={() => activateWord(0)}
              onPointerUp={resetWord}
              onPointerCancel={resetWord}
              onTouchEnd={resetWord}
            >
              Design for
            </span>
            <span
              className={`pixelate-word block${activeWord === 1 ? " pixelate-active" : ""}`}
              onPointerEnter={() => activateWord(1)}
              onPointerLeave={resetWord}
              onPointerDown={() => activateWord(1)}
              onPointerUp={resetWord}
              onPointerCancel={resetWord}
              onTouchEnd={resetWord}
            >
              the systems
            </span>
            <span
              className={`pixelate-word block italic font-light${activeWord === 2 ? " pixelate-active" : ""}`}
              onPointerEnter={() => activateWord(2)}
              onPointerLeave={resetWord}
              onPointerDown={() => activateWord(2)}
              onPointerUp={resetWord}
              onPointerCancel={resetWord}
              onTouchEnd={resetWord}
            >
              that come next.
            </span>
          </h1>
          <p className="mt-8 text-sm text-[#515151] max-w-[34ch]">
            Brand, product, and motion experiences for teams reshaping their categories.
          </p>
        </div>
        <div className="relative text-[10px] uppercase tracking-[0.3em] text-[#838383]">
          ← Swipe horizontal galleries · Tap nav below
        </div>
      </section>

      {/* WORK — horizontal swipe */}
      <MobileSection num="02" title="Selected Work" id="work">
        <div className="-mx-5 px-5 overflow-x-auto snap-x snap-mandatory flex gap-4 pb-2 scrollbar-none">
          {WORK.map((w) => (
            <a key={w.n} href="#" className="snap-start shrink-0 w-[78vw]">
              <div className={`relative aspect-[4/5] overflow-hidden bg-gradient-to-br ${w.grad}`}>
                <div className="absolute inset-0 grid-bg-fine opacity-30" />
                <div className="absolute top-3 left-3 text-[10px] font-mono text-paper mix-blend-difference">{w.n}</div>
                <div className="absolute top-3 right-3 text-[10px] font-mono text-paper mix-blend-difference">{w.year}</div>
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div className="font-display text-paper leading-none mix-blend-difference text-4xl">{w.title}</div>
                  <div className="font-display italic font-light text-paper mix-blend-difference text-2xl">{w.sub}</div>
                </div>
              </div>
              <div className="mt-2 flex justify-between text-[10px] uppercase tracking-[0.25em]">
                <span>{w.tag}</span><span>↗</span>
              </div>
            </a>
          ))}
        </div>
      </MobileSection>

      <MobileSection num="03" title="About" id="about">
        <h3 className="font-display text-3xl leading-tight tracking-tight">
          We design at the intersection of <span className="italic font-light">craft, code, and consequence.</span>
        </h3>
        <div className="mt-8 grid grid-cols-3 gap-4">
          {[{ k: "127", v: "Shipped" }, { k: "12", v: "Awards" }, { k: "9", v: "Designers" }].map((s) => (
            <div key={s.k} className="border-t border-ink pt-3">
              <div className="font-display text-3xl">{s.k}</div>
              <div className="mt-1 text-[9px] uppercase tracking-[0.25em] text-[#6A6A6A]">{s.v}</div>
            </div>
          ))}
        </div>
      </MobileSection>

      {/* SERVICES dark */}
      <section id="services" className="relative bg-ink text-paper px-5 py-16">
        <div className="absolute inset-0 grid-bg-dark opacity-40" />
        <div className="relative">
          <div className="text-[10px] uppercase tracking-[0.3em] opacity-60 mb-3">[ 04 ] Services</div>
          <h2 className="font-display text-4xl tracking-tight mb-8">What we do.</h2>
          {SERVICES.map((s, idx) => (
            <a key={s.title} href="#contact" className="block border-t border-[#373737] py-5 last:border-b">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs opacity-60">{String(idx + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-3xl tracking-tight">{s.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      <MobileSection num="05" title="Process" id="process">
        <div className="space-y-0">
          {PROCESS.map((p, i) => (
            <div key={p.n} className={`py-5 ${i < PROCESS.length - 1 ? "border-b border-ink" : ""}`}>
              <div className="font-mono text-[10px] tracking-widest text-[#6A6A6A]">{p.n} / 04</div>
              <h3 className="font-display text-3xl mt-1">{p.t}</h3>
              <p className="text-sm text-[#6A6A6A] mt-1">{p.d}</p>
            </div>
          ))}
        </div>
      </MobileSection>

      <MobileSection num="06" title="Voices">
        <div className="-mx-5 px-5 overflow-x-auto snap-x snap-mandatory flex gap-4 pb-2">
          {TESTIMONIALS.map((t) => (
            <div key={t.a} className="snap-start shrink-0 w-[82vw] border border-ink p-6 flex flex-col justify-between min-h-[240px]">
              <p className="font-display text-xl leading-tight tracking-tight">"{t.q}"</p>
              <div className="mt-6 flex justify-between text-[10px] uppercase tracking-[0.25em]">
                <span>{t.a}</span><span className="text-[#6A6A6A]">{t.r}</span>
              </div>
            </div>
          ))}
        </div>
      </MobileSection>

      {/* CONTACT */}
      <section id="contact" className="relative bg-ink text-paper px-5 pt-20 pb-12">
        <div className="absolute inset-0 grid-bg-dark opacity-30" />
        <div className="relative">
          <div className="text-[10px] uppercase tracking-[0.3em] opacity-60 mb-4">[ 07 ] Let's build</div>
          <h2 className="font-display leading-[0.88] tracking-[-0.05em]" style={{ fontSize: "clamp(3.5rem,18vw,7rem)" }}>
            Start a<br /><span className="italic font-light">project →</span>
          </h2>
          <div className="mt-10 border-t border-[#373737] pt-6 space-y-6">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] opacity-60 mb-2">Contact</div>
              <a href="mailto:studio@pixelsandgrid.co" className="block text-lg">studio@pixelsandgrid.co</a>
              <a href="tel:+1" className="block text-lg opacity-70">+1 (212) 555 0144</a>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] opacity-60 mb-2">Studio</div>
                <p className="text-sm opacity-70">Lisbon · NY · Tokyo</p>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] opacity-60 mb-2">Social</div>
                <p className="text-sm opacity-70">Instagram · Are.na · Read.cv</p>
              </div>
            </div>
            <div className="text-[10px] uppercase tracking-[0.3em] opacity-50 pt-4 border-t border-[#373737]">
              © MMXXVI Pixels & Grid · v 4.0.1
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function MobileSection({ num, title, id, children }: { num: string; title: string; id?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="px-5 py-16 border-t border-ink">
      <div className="text-[10px] uppercase tracking-[0.3em] text-[#6A6A6A] mb-3">[ {num} ] {title}</div>
      <h2 className="font-display text-4xl tracking-tight mb-8">{title}.</h2>
      {children}
    </section>
  );
}
