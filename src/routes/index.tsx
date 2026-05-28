import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Loader } from "@/components/Loader";
import { PixelCursor } from "@/components/PixelCursor";
import { SideNav } from "@/components/SideNav";
import { Reveal } from "@/components/Reveal";

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
  { n: "01", title: "Helio Capital", tag: "Brand · Web", year: "2025", grad: "from-neutral-200 to-neutral-400" },
  { n: "02", title: "Northbound OS", tag: "Product · System", year: "2025", grad: "from-stone-300 to-stone-500" },
  { n: "03", title: "Atlas Motion", tag: "Identity · Film", year: "2024", grad: "from-zinc-200 to-zinc-500" },
  { n: "04", title: "Mono / Studio", tag: "Editorial · Web", year: "2024", grad: "from-neutral-300 to-neutral-600" },
];

const SERVICES = [
  { n: "01", t: "Brand Identity", d: "Marks, systems, guidelines, motion identities." },
  { n: "02", t: "Digital Product", d: "Interface design, design systems, prototyping." },
  { n: "03", t: "Web Experiences", d: "Editorial sites, marketing, interactive stories." },
  { n: "04", t: "Motion & Film", d: "Title sequences, product films, brand motion." },
  { n: "05", t: "Strategy", d: "Positioning, naming, narrative, voice." },
];

const PROCESS = [
  { n: "01", t: "Discover", d: "Audit, research, stakeholder interviews." },
  { n: "02", t: "Define", d: "Strategy, positioning, creative direction." },
  { n: "03", t: "Design", d: "Systems, interfaces, identity, motion." },
  { n: "04", t: "Deliver", d: "Build, launch, iterate, measure." },
];

const TESTIMONIALS = [
  { q: "Pixels & Grid rebuilt our brand from first principles. The result is unmistakable.", a: "Maya Okafor", r: "VP Brand, Helio" },
  { q: "A rare studio that ships systems, not screenshots. Quietly transformational.", a: "Daniel Reyes", r: "CPO, Northbound" },
  { q: "Editorial taste, engineering rigor. We hired them three times in a year.", a: "Inès Laurent", r: "Founder, Atlas" },
];

const FAQ = [
  { q: "How do projects typically start?", a: "With a two-week discovery sprint — audits, interviews, and a creative direction document." },
  { q: "What does an engagement cost?", a: "Most engagements range from $40k to $300k. Retainers from $15k/mo." },
  { q: "Do you work with in-house teams?", a: "Yes. We embed with brand, product, and engineering teams across timezones." },
  { q: "Where are you based?", a: "Distributed studio — Lisbon, New York, Tokyo." },
];

function Home() {
  const [loading, setLoading] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    if (loading) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [loading]);

  return (
    <div className="relative bg-paper text-ink">
      {loading && <Loader onDone={() => setLoading(false)} />}
      <PixelCursor />
      <SideNav />

      {/* HERO */}
      <section id="work-anchor" className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-70" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 70% 30%, transparent 0%, var(--paper) 80%)" }} />

        {/* Top bar */}
        <div className="relative z-10 flex items-center justify-between px-6 md:px-14 pt-6 text-[11px] uppercase tracking-[0.25em]">
          <span className="font-display text-base tracking-tight">Pixels<span className="opacity-40">/</span>Grid</span>
          <span className="hidden md:inline">Index — MMXXVI</span>
          <a href="#contact" className="border border-ink px-3 py-2 hover:bg-ink hover:text-paper transition-colors">Start a project →</a>
        </div>

        <div className="relative z-10 px-6 md:px-24 pt-24 md:pt-36">
          <Reveal>
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-10">
              <span className="h-2 w-2 bg-ink" />
              <span>A futurist design studio · Est. 2019</span>
            </div>
          </Reveal>

          <h1 className="font-display text-balance text-[clamp(3rem,12vw,11.5rem)] leading-[0.88] tracking-[-0.05em]">
            <Reveal as="span" className="block">Design for</Reveal>
            <Reveal as="span" delay={120} className="block">the systems</Reveal>
            <Reveal as="span" delay={240} className="block italic font-light">that come next.</Reveal>
          </h1>

          <div className="mt-16 grid grid-cols-12 gap-6">
            <Reveal delay={300} className="col-span-12 md:col-span-5 md:col-start-7">
              <p className="text-base md:text-lg text-muted-foreground max-w-md">
                Pixels & Grid is an independent studio engineering brands, products, and motion experiences for ambitious teams reshaping their categories.
              </p>
              <div className="mt-8 flex gap-3">
                <a href="#work" className="bg-ink text-paper px-5 py-3 text-[11px] uppercase tracking-[0.25em] hover:opacity-90">View Work</a>
                <a href="#contact" className="border border-ink px-5 py-3 text-[11px] uppercase tracking-[0.25em] hover:bg-ink hover:text-paper transition-colors">Get in touch</a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Footer of hero */}
        <div className="absolute bottom-6 left-6 right-6 z-10 flex justify-between text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <span>↓ Scroll · Featured Work</span>
          <span>52.5200° N / 13.4050° E</span>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section id="work" className="relative px-6 md:px-24 py-32 border-t border-ink">
        <div className="flex justify-between items-end mb-16">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-3">[ 01 ] Selected Work</div>
            <h2 className="font-display text-5xl md:text-7xl tracking-tight">Recent projects.</h2>
          </Reveal>
          <span className="hidden md:inline text-[11px] uppercase tracking-[0.3em] text-muted-foreground">2024 — 2025</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {WORK.map((w, idx) => (
            <Reveal
              key={w.n}
              delay={idx * 80}
              className={
                idx % 4 === 0 ? "md:col-span-7" :
                idx % 4 === 1 ? "md:col-span-5" :
                idx % 4 === 2 ? "md:col-span-5 md:col-start-2" :
                "md:col-span-6"
              }
            >
              <a href="#" className="group block">
                <div className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${w.grad}`}>
                  <div className="absolute inset-0 grid-bg opacity-40 group-hover:opacity-70 transition-opacity duration-700" />
                  <div className="absolute inset-0 flex items-end p-6 transition-transform duration-700 group-hover:scale-[1.02]">
                    <span className="font-display text-paper text-[clamp(2rem,5vw,5rem)] mix-blend-difference leading-none">{w.title}</span>
                  </div>
                  <div className="absolute top-4 left-4 text-[10px] font-mono uppercase tracking-widest text-paper mix-blend-difference">{w.n}</div>
                  <div className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-widest text-paper mix-blend-difference">{w.year}</div>
                </div>
                <div className="mt-4 flex justify-between text-[11px] uppercase tracking-[0.25em]">
                  <span>{w.tag}</span>
                  <span className="group-hover:translate-x-1 transition-transform">View case ↗</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative px-6 md:px-24 py-32 border-t border-ink">
        <div className="grid grid-cols-12 gap-6">
          <Reveal className="col-span-12 md:col-span-3">
            <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">[ 02 ] About</div>
          </Reveal>
          <div className="col-span-12 md:col-span-9">
            <Reveal>
              <h2 className="font-display text-balance text-[clamp(2.5rem,6vw,6rem)] leading-[0.95] tracking-[-0.04em]">
                We are a small studio that designs at the intersection of <span className="italic font-light">craft, code, and consequence.</span>
              </h2>
            </Reveal>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
              {[
                { k: "127", v: "Projects shipped" },
                { k: "12", v: "Awwwards & FWA" },
                { k: "9", v: "Designers in studio" },
              ].map((s) => (
                <Reveal key={s.k} className="border-t border-ink pt-4">
                  <div className="font-display text-5xl">{s.k}</div>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">{s.v}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES — dark */}
      <section id="services" className="relative bg-ink text-paper px-6 md:px-24 py-32">
        <div className="absolute inset-0 grid-bg-dark opacity-50" />
        <div className="relative">
          <div className="flex justify-between items-end mb-20">
            <Reveal>
              <div className="text-[11px] uppercase tracking-[0.3em] opacity-60 mb-3">[ 03 ] Services</div>
              <h2 className="font-display text-5xl md:text-7xl tracking-tight">What we do.</h2>
            </Reveal>
          </div>

          <div>
            {SERVICES.map((s, i) => (
              <Reveal key={s.n} delay={i * 60}>
                <a href="#contact" className="group grid grid-cols-12 items-center gap-6 border-t border-paper/20 py-10 last:border-b">
                  <div className="col-span-2 md:col-span-1 font-mono text-sm opacity-60">{s.n}</div>
                  <div className="col-span-10 md:col-span-6">
                    <h3 className="font-display text-3xl md:text-6xl tracking-tight transition-transform duration-500 group-hover:translate-x-3">
                      {s.t}
                    </h3>
                  </div>
                  <div className="col-span-12 md:col-span-4 text-sm opacity-70">{s.d}</div>
                  <div className="hidden md:flex col-span-1 justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="grid grid-cols-3 gap-0.5">
                      {Array.from({ length: 9 }).map((_, k) => (
                        <span key={k} className="h-1 w-1 bg-paper" />
                      ))}
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="px-6 md:px-24 py-32 border-t border-ink">
        <div className="flex justify-between items-end mb-20">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-3">[ 04 ] Process</div>
            <h2 className="font-display text-5xl md:text-7xl tracking-tight">How we work.</h2>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-t border-ink">
          {PROCESS.map((p, i) => (
            <Reveal key={p.n} delay={i * 80} className={`border-b border-ink p-8 ${i < 3 ? "md:border-r" : ""} relative group`}>
              <div className="font-mono text-[11px] tracking-widest text-muted-foreground">{p.n} / 04</div>
              <h3 className="font-display text-3xl mt-10">{p.t}</h3>
              <p className="text-sm text-muted-foreground mt-3">{p.d}</p>
              <div className="absolute bottom-4 right-4 h-2 w-2 bg-ink opacity-0 group-hover:opacity-100 transition-opacity" />
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-6 md:px-24 py-32 border-t border-ink">
        <div className="flex justify-between items-end mb-16">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-3">[ 05 ] Testimonials</div>
            <h2 className="font-display text-5xl md:text-7xl tracking-tight">In their words.</h2>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-ink">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.a} delay={i * 100} className={`border-b border-ink p-8 ${i < 2 ? "md:border-r" : ""}`}>
              <p className="font-display text-2xl leading-tight tracking-tight">"{t.q}"</p>
              <div className="mt-10 flex justify-between text-[11px] uppercase tracking-[0.25em]">
                <span>{t.a}</span>
                <span className="text-muted-foreground">{t.r}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-24 py-32 border-t border-ink">
        <div className="grid grid-cols-12 gap-6">
          <Reveal className="col-span-12 md:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-3">[ 06 ] FAQ</div>
            <h2 className="font-display text-5xl md:text-6xl tracking-tight">Questions, answered.</h2>
          </Reveal>
          <div className="col-span-12 md:col-span-8">
            {FAQ.map((f, i) => (
              <Reveal key={f.q} delay={i * 60}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left border-t border-ink last:border-b py-6 group"
                >
                  <div className="flex justify-between items-center gap-6">
                    <span className="font-display text-2xl md:text-3xl tracking-tight">{f.q}</span>
                    <span className="font-mono text-2xl transition-transform" style={{ transform: openFaq === i ? "rotate(45deg)" : "none" }}>+</span>
                  </div>
                  <div
                    className="grid transition-all duration-500"
                    style={{ gridTemplateRows: openFaq === i ? "1fr" : "0fr", opacity: openFaq === i ? 1 : 0 }}
                  >
                    <div className="overflow-hidden">
                      <p className="text-muted-foreground pt-4 max-w-xl">{f.a}</p>
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="relative bg-ink text-paper px-6 md:px-24 pt-32 pb-10 overflow-hidden">
        <div className="absolute inset-0 grid-bg-dark opacity-30" />
        <div className="relative">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.3em] opacity-60 mb-6">[ — ] Let's build</div>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-balance text-[clamp(3rem,14vw,14rem)] leading-[0.85] tracking-[-0.05em]">
              Start a<br />
              <span className="italic font-light">project →</span>
            </h2>
          </Reveal>

          <div className="mt-24 grid grid-cols-12 gap-6 border-t border-paper/20 pt-10">
            <div className="col-span-12 md:col-span-4">
              <div className="text-[11px] uppercase tracking-[0.3em] opacity-60 mb-3">Contact</div>
              <a href="mailto:studio@pixelsandgrid.co" className="block text-xl hover:underline">studio@pixelsandgrid.co</a>
              <a href="tel:+1" className="block text-xl opacity-70 hover:opacity-100">+1 (212) 555 0144</a>
            </div>
            <div className="col-span-6 md:col-span-2">
              <div className="text-[11px] uppercase tracking-[0.3em] opacity-60 mb-3">Studio</div>
              <p className="text-sm opacity-70">Lisbon<br />New York<br />Tokyo</p>
            </div>
            <div className="col-span-6 md:col-span-3">
              <div className="text-[11px] uppercase tracking-[0.3em] opacity-60 mb-3">Sitemap</div>
              <ul className="text-sm space-y-1 opacity-70">
                <li><a href="#work">Work</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#process">Process</a></li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-3">
              <div className="text-[11px] uppercase tracking-[0.3em] opacity-60 mb-3">Social</div>
              <ul className="text-sm space-y-1 opacity-70">
                <li><a href="#">Instagram ↗</a></li>
                <li><a href="#">Are.na ↗</a></li>
                <li><a href="#">Read.cv ↗</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-20 flex flex-wrap justify-between text-[10px] uppercase tracking-[0.3em] opacity-50">
            <span>© MMXXVI Pixels & Grid Studio</span>
            <span>All systems nominal</span>
            <span>v 4.0.1</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
