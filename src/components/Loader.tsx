import { useEffect, useState } from "react";

const WORDS = ["Design", "Systems", "Experience", "Motion", "Future", "Portfolio", "Creative Agency"];

export function Loader({ onDone }: { onDone: () => void }) {
  const [i, setI] = useState(0);
  const [out, setOut] = useState(false);

  useEffect(() => {
    if (i >= WORDS.length) {
      const t = setTimeout(() => { setOut(true); setTimeout(onDone, 700); }, 250);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setI(i + 1), 520);
    return () => clearTimeout(t);
  }, [i, onDone]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-paper transition-opacity duration-700 ${
        out ? "opacity-0" : "opacity-100"
      }`}
      style={{ pointerEvents: out ? "none" : "auto" }}
    >
      <div className="absolute inset-0 grid-bg grid-drift flicker opacity-60" />
      <div className="absolute left-6 top-6 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
        Pixels & Grid — Loading
      </div>
      <div className="absolute right-6 top-6 font-mono text-[11px] tabular-nums text-muted-foreground">
        {String(Math.min(100, Math.round((i / WORDS.length) * 100))).padStart(3, "0")}
      </div>

      <div className="relative h-[1.2em] overflow-hidden">
        {WORDS.map((w, idx) => (
          <h1
            key={w}
            className="font-display text-[clamp(2.5rem,9vw,9rem)] leading-none transition-all duration-500"
            style={{
              position: idx === 0 ? "relative" : "absolute",
              inset: 0,
              opacity: idx === i ? 1 : 0,
              transform:
                idx === i
                  ? "translateY(0) scale(1)"
                  : idx < i
                  ? "translateY(-30%) scale(0.96)"
                  : "translateY(30%) scale(1.04)",
              filter: idx === i ? "blur(0)" : "blur(14px)",
            }}
          >
            {w}
          </h1>
        ))}
      </div>

      <div className="absolute bottom-6 left-6 right-6 flex justify-between text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
        <span>EST. 2019</span>
        <span>Index / {String(i + 1).padStart(2, "0")} — {String(WORDS.length).padStart(2, "0")}</span>
      </div>
    </div>
  );
}
