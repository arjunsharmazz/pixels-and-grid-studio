const NAV_ITEMS = ["Home", "Work", "About", "Services", "Process", "Contact"];

export function TopNav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 hidden md:flex items-center justify-between px-10 lg:px-14 py-4"
      style={{
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        backgroundColor: "rgba(253, 253, 253, 0.85)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      {/* Logo */}
      <a
        href="#intro"
        className="font-display text-lg tracking-tight normal-case text-ink shrink-0"
      >
        Pixels <span className="opacity-40">&</span> Grid
      </a>

      {/* Nav Links */}
      <div className="flex items-center gap-6 lg:gap-8">
        {NAV_ITEMS.map((item) => {
          const target = item.toLowerCase() === "home" ? "#intro" : `#${item.toLowerCase()}`;
          return (
            <a
              key={item}
              href={target}
              className="relative text-[10px] uppercase tracking-[0.25em] text-ink transition-colors duration-200 hover:text-black group"
            >
              <span>{item}</span>
              <span
                className="absolute left-0 -bottom-1 h-px w-0 bg-ink transition-all duration-300 group-hover:w-full"
              />
            </a>
          );
        })}
      </div>

      {/* CTA */}
      <button
        onClick={() => window.dispatchEvent(new Event("open-start-project"))}
        className="shrink-0 border border-ink px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-ink hover:bg-ink hover:text-paper transition-colors duration-200 cursor-pointer"
      >
        Start a project →
      </button>
    </nav>
  );
}
