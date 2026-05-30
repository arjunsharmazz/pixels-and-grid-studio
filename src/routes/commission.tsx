import { createFileRoute, Link } from "@tanstack/react-router";
import { BoxesBackground } from "@/components/BoxesBackground";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/commission")({
  head: () => ({
    meta: [
      { title: "Commission a Project — Pixels & Grid" },
      { name: "description", content: "Commission Pixels & Grid for brand identity, digital product, web experiences, motion, and strategy work." },
      { property: "og:title", content: "Commission a Project — Pixels & Grid" },
      { property: "og:description", content: "Start a project with an independent studio engineering brands, products, and motion experiences." },
    ],
  }),
  component: CommissionPage,
});

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

function CommissionPage() {
  return (
    <div className="relative min-h-screen bg-paper text-ink overflow-x-hidden">
      {/* Single, subtle, page-wide animated background — sits behind everything */}
      <div className="fixed inset-0 z-0">
        <BoxesBackground size={28} fade={2200} line="oklch(0 0 0 / 0.05)" />
      </div>

      {/* Content stack — opaque cards so animation never visually collides with text */}
      <div className="relative z-10">
        {/* Top frame */}
        <header className="border-b border-ink/10 bg-paper/95 backdrop-blur-sm">
          <div className="max-w-[1400px] mx-auto px-8 lg:px-14 py-5 flex items-center justify-between text-[10px] uppercase tracking-[0.3em]">
            <Link to="/" className="font-display text-base tracking-tight normal-case">
              Pixels<span className="opacity-40">/</span>Grid
            </Link>
            <span className="opacity-50 hidden md:inline">Bulletin № 014 — MMXXVI</span>
            <Link to="/" className="border border-ink px-3 py-2 hover:bg-ink hover:text-paper transition-colors">
              ← Back to index
            </Link>
          </div>
        </header>

        {/* Hero card */}
        <section className="max-w-[1400px] mx-auto px-8 lg:px-14 pt-20 pb-16">
          <div className="bg-paper border border-ink/10 p-10 lg:p-16">
            <Reveal className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-ink/60 mb-10">
              <span className="h-2 w-2 bg-ink" />
              <span>[ 07 ] Let's build</span>
              <span className="ml-auto">Commission · Open intake</span>
            </Reveal>

            <Reveal>
              <h1 className="font-display text-balance leading-[0.85] tracking-[-0.05em]"
                  style={{ fontSize: "clamp(3rem, 9vw, 9rem)" }}>
                Start a<br />
                <span className="italic font-light">project →</span>
              </h1>
            </Reveal>

            <Reveal delay={180} className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8">
              <p className="md:col-span-7 text-base lg:text-lg text-ink/80 leading-relaxed max-w-[58ch]">
                A small studio drawing interfaces, identities, and motion artifacts for founders who treat product as a publication — not a deliverable.
              </p>
              <div className="md:col-span-5 flex flex-col gap-2 md:items-end">
                <a href="mailto:studio@pixelsandgrid.co" className="bg-ink text-paper px-6 py-4 text-[10px] uppercase tracking-[0.3em]">
                  studio@pixelsandgrid.co →
                </a>
                <a href="tel:+12125550144" className="border border-ink px-6 py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-ink hover:text-paper transition-colors">
                  +1 (212) 555 0144
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Services */}
        <section className="max-w-[1400px] mx-auto px-8 lg:px-14 pb-16">
          <div className="bg-ink text-paper p-10 lg:p-16">
            <div className="mb-12">
              <div className="text-[10px] uppercase tracking-[0.3em] opacity-60 mb-3">[ 04 ] Services</div>
              <h2 className="font-display text-5xl lg:text-6xl tracking-tight">What we do.</h2>
            </div>
            <div>
              {SERVICES.map((s, i) => (
                <Reveal key={s.n} delay={i * 50}>
                  <div className="group grid grid-cols-12 items-center gap-6 border-t border-paper/20 py-5 last:border-b">
                    <div className="col-span-2 md:col-span-1 font-mono text-xs opacity-60">{s.n}</div>
                    <h3 className="col-span-10 md:col-span-7 font-display tracking-tight"
                        style={{ fontSize: "clamp(1.6rem,3vw,3.5rem)" }}>{s.t}</h3>
                    <div className="col-span-12 md:col-span-4 text-sm opacity-70">{s.d}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="max-w-[1400px] mx-auto px-8 lg:px-14 pb-16">
          <div className="bg-paper border border-ink/10 p-10 lg:p-16">
            <div className="mb-12">
              <div className="text-[10px] uppercase tracking-[0.3em] text-ink/60 mb-3">[ 05 ] Process</div>
              <h2 className="font-display text-5xl lg:text-6xl tracking-tight">How we work.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 border-t border-ink">
              {PROCESS.map((p, i) => (
                <Reveal key={p.n} delay={i * 80} className={`p-8 ${i < 3 ? "md:border-r border-b md:border-b-0" : ""} border-ink flex flex-col min-h-[220px]`}>
                  <div className="font-mono text-[10px] tracking-widest text-ink/60">{p.n} / 04</div>
                  <h3 className="font-display text-4xl mt-auto">{p.t}</h3>
                  <p className="text-sm text-ink/60 mt-3">{p.d}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact footer */}
        <section className="max-w-[1400px] mx-auto px-8 lg:px-14 pb-20">
          <div className="bg-ink text-paper p-10 lg:p-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-paper/20 pt-10">
              <div className="md:col-span-4">
                <div className="text-[10px] uppercase tracking-[0.3em] opacity-60 mb-3">Contact</div>
                <a href="mailto:studio@pixelsandgrid.co" className="block text-xl hover:underline">studio@pixelsandgrid.co</a>
                <a href="tel:+1" className="block text-xl opacity-70">+1 (212) 555 0144</a>
              </div>
              <div className="md:col-span-2">
                <div className="text-[10px] uppercase tracking-[0.3em] opacity-60 mb-3">Studio</div>
                <p className="text-sm opacity-70">Lisbon<br />New York<br />Tokyo</p>
              </div>
              <div className="md:col-span-3">
                <div className="text-[10px] uppercase tracking-[0.3em] opacity-60 mb-3">Index</div>
                <ul className="text-sm space-y-1 opacity-70">
                  <li><Link to="/">Home</Link></li>
                  <li><a href="/#work">Work</a></li>
                  <li><a href="/#about">About</a></li>
                  <li><a href="/#process">Process</a></li>
                </ul>
              </div>
              <div className="md:col-span-3">
                <div className="text-[10px] uppercase tracking-[0.3em] opacity-60 mb-3">Social</div>
                <ul className="text-sm space-y-1 opacity-70">
                  <li><a href="#">Instagram ↗</a></li>
                  <li><a href="#">Are.na ↗</a></li>
                  <li><a href="#">Read.cv ↗</a></li>
                </ul>
              </div>
              <div className="md:col-span-12 mt-6 flex flex-wrap gap-4 justify-between text-[10px] uppercase tracking-[0.3em] opacity-50">
                <span>© MMXXVI Pixels & Grid Studio</span>
                <span>All systems nominal</span>
                <span>v 4.0.1</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
