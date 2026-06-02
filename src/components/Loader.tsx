import { useEffect, useState } from "react";

const WORDS = ["Design", "Systems", "Experience", "Motion", "Future", "Portfolio", "Creative Agency"];

export function Loader({ onDone }: { onDone: () => void }) {
  const [i, setI] = useState(0);
  const [out, setOut] = useState(false);

  useEffect(() => {
    if (i >= WORDS.length - 1) {
      const t = setTimeout(() => { setOut(true); setTimeout(onDone, 800); }, 650);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setI(i + 1), 480);
    return () => clearTimeout(t);
  }, [i, onDone]);

  const progress = Math.round(((i + 1) / WORDS.length) * 100);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-paper transition-all duration-700 ${
        out ? "opacity-0 scale-[1.02] blur-md" : "opacity-100"
      }`}
      style={{ pointerEvents: out ? "none" : "auto" }}
    >
      <div className="absolute inset-0 grid-bg-fine grid-drift opacity-70" />
      <div className="absolute inset-0 flicker"
        style={{ background: "radial-gradient(ellipse at center, transparent 30%, var(--paper) 90%)" }} />

      {/* top bar */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 md:px-10 py-6 text-[10px] uppercase tracking-[0.3em] text-ink">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 bg-ink" />
          <span>Pixels &amp; Grid</span>
        </div>
        <span className="hidden md:inline opacity-50">Booting interface</span>
        <span className="font-mono tabular-nums">{String(progress).padStart(3, "0")}%</span>
      </div>

      {/* center word */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
        <div className="text-[10px] uppercase tracking-[0.4em] text-[#838383] mb-8">
          [ {String(i + 1).padStart(2, "0")} / {String(WORDS.length).padStart(2, "0")} ]
        </div>
        <div className="relative w-full flex items-center justify-center" style={{ minHeight: "clamp(4rem, 14vw, 12rem)" }}>
          <h1
            key={i}
            className="font-display text-ink leading-none text-center"
            style={{
              fontSize: "clamp(3rem, 12vw, 11rem)",
              letterSpacing: "-0.05em",
              animation: "wordIn 0.55s cubic-bezier(.7,0,.2,1) both",
            }}
          >
            {WORDS[i]}
          </h1>
        </div>

        {/* progress bar */}
        <div className="mt-12 w-[min(420px,80vw)]">
          <div className="h-px w-full bg-[#DADADA] relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 bg-ink transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
          </div>
          <div className="mt-2 flex justify-between text-[9px] font-mono uppercase tracking-[0.3em] text-[#838383]">
            <span>LOAD</span>
            <span>{progress.toString().padStart(3, "0")} / 100</span>
          </div>
        </div>
      </div>

      {/* corners */}
      <Corner pos="top-6 left-6" />
      <Corner pos="top-6 right-6" flip />
      <Corner pos="bottom-6 left-6" />
      <Corner pos="bottom-6 right-6" flip />

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-[#9B9B9B]">
        EST. MMXIX · Lisbon · NY · Tokyo
      </div>

      <style>{`
        @keyframes wordIn {
          0%   { opacity: 0; transform: translateY(40%) scale(1.08); filter: blur(18px); }
          60%  { opacity: 1; filter: blur(0); }
          100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }
      `}</style>
    </div>
  );
}

function Corner({ pos, flip }: { pos: string; flip?: boolean }) {
  return (
    <div className={`absolute ${pos} w-3 h-3 pointer-events-none`}>
      <div className={`absolute ${flip ? "right-0" : "left-0"} top-0 h-full w-px bg-[#6A6A6A]`} />
      <div className={`absolute left-0 ${flip ? "right-0" : ""} top-0 w-full h-px bg-[#6A6A6A]`} />
    </div>
  );
}
