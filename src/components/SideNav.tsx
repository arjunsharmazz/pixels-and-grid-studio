const ITEMS = ["Work", "About", "Services", "Process", "Contact"];

export function SideNav({ dark = false }: { dark?: boolean }) {
  return (
    <nav
      className={`fixed left-6 top-1/2 z-50 -translate-y-1/2 hidden md:flex flex-col gap-5 ${
        dark ? "text-paper" : "text-ink"
      }`}
    >
      <div className="mb-6 flex items-center gap-2">
        <div className={`h-2 w-2 ${dark ? "bg-paper" : "bg-ink"}`} />
        <span className="text-[10px] uppercase tracking-[0.3em]">P&G</span>
      </div>
      {ITEMS.map((it, i) => (
        <a
          key={it}
          href={`#${it.toLowerCase()}`}
          className="group relative flex items-center gap-3 text-[11px] uppercase tracking-[0.25em]"
        >
          <span className="font-mono opacity-50">0{i + 1}</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            {it}
          </span>
          <span
            className={`absolute left-0 -bottom-1 h-px w-0 transition-all duration-500 group-hover:w-12 ${
              dark ? "bg-paper" : "bg-ink"
            }`}
          />
        </a>
      ))}
    </nav>
  );
}
