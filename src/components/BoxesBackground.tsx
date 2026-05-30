import { useMemo } from "react";

/**
 * Hover-reactive grid of boxes (Rauno-style).
 * Pure CSS: cells flash to `accent` instantly on hover, then fade back
 * over `fade` ms. No JS per-cell — scales to thousands of cells.
 */
export function BoxesBackground({
  size = 56,
  accent = "var(--ink)",
  line = "oklch(0 0 0 / 0.06)",
  fade = 1800,
  className = "",
}: {
  size?: number;
  accent?: string;
  line?: string;
  fade?: number;
  className?: string;
}) {
  // generate a viewport-filling grid; CSS handles responsive count
  const cells = useMemo(() => Array.from({ length: 600 }), []);
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ ["--bx-accent" as any]: accent, ["--bx-line" as any]: line, ["--bx-fade" as any]: `${fade}ms` }}
    >
      <div
        className="pointer-events-auto grid h-full w-full"
        style={{
          gridTemplateColumns: `repeat(auto-fill, minmax(${size}px, 1fr))`,
          gridAutoRows: `${size}px`,
        }}
      >
        {cells.map((_, i) => (
          <div key={i} className="bx-cell" />
        ))}
      </div>
      <style>{`
        .bx-cell {
          border-right: 1px solid var(--bx-line);
          border-bottom: 1px solid var(--bx-line);
          background: transparent;
          transition: background-color var(--bx-fade) ease-out;
        }
        .bx-cell:hover {
          background: var(--bx-accent);
          transition: background-color 0s;
        }
      `}</style>
    </div>
  );
}
