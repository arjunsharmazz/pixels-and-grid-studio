import { useEffect, useState } from "react";

/**
 * Dev-only automated layout checker.
 *
 * Watches every element tagged with `data-guard` and, on every animation
 * frame, verifies two invariants:
 *
 *   1. Grid alignment — the element's left/top edge sits on the design
 *      grid (default 32px, configurable via `data-guard-grid="N"` or the
 *      `gridSize` prop). A small tolerance accounts for sub-pixel layout.
 *   2. No overlap — no two guarded elements have intersecting bounding
 *      rects. Overlapping pairs are reported together.
 *
 * Violations are surfaced two ways:
 *   - Logged to the console (throttled, deduped).
 *   - A floating badge appears bottom-right summarizing live issues.
 *
 * The guard auto-disables in production. Add `?guard=0` to the URL to
 * disable in dev, or `?guard=1` to force-enable.
 */

type Violation =
  | { kind: "align"; id: string; axis: "x" | "y"; value: number; off: number }
  | { kind: "overlap"; a: string; b: string; area: number };

const TOL = 1.5; // sub-pixel tolerance for grid snapping

function nearestOffset(value: number, grid: number) {
  const snapped = Math.round(value / grid) * grid;
  return Math.abs(value - snapped);
}

function rectsOverlap(a: DOMRect, b: DOMRect) {
  const x = Math.min(a.right, b.right) - Math.max(a.left, b.left);
  const y = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
  return x > 1 && y > 1 ? x * y : 0;
}

export function LayoutGuard({ gridSize = 32 }: { gridSize?: number }) {
  const [issues, setIssues] = useState<Violation[]>([]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const forced = params.get("guard");
    if (forced === "0") return;
    if (forced !== "1" && import.meta.env.PROD) return;

    let raf = 0;
    const seen = new Set<string>();
    let lastFlush = 0;

    const tick = () => {
      const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-guard]"));
      const rects = nodes.map((n) => ({
        id: n.dataset.guard || n.tagName.toLowerCase(),
        grid: Number(n.dataset.guardGrid) || gridSize,
        rect: n.getBoundingClientRect(),
      }));

      const v: Violation[] = [];

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
          const key =
            issue.kind === "align"
              ? `align:${issue.id}:${issue.axis}:${Math.round(issue.off)}`
              : `overlap:${issue.a}<>${issue.b}`;
          if (!seen.has(key)) {
            seen.add(key);
            if (issue.kind === "align") {
              console.warn(
                `[LayoutGuard] "${issue.id}" off-grid on ${issue.axis}: ${issue.value.toFixed(2)}px (off by ${issue.off.toFixed(2)}px)`,
              );
            } else {
              console.warn(
                `[LayoutGuard] overlap "${issue.a}" ↔ "${issue.b}" (~${Math.round(issue.area)}px²)`,
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

  return (
    <div className="fixed bottom-3 right-3 z-[9999] pointer-events-none">
      <div className="bg-ink text-paper text-[10px] uppercase tracking-[0.2em] px-3 py-2 font-mono shadow-lg">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 bg-red-500 animate-pulse" />
          <span>Layout</span>
          <span className="opacity-60">align {aligns}</span>
          <span className="opacity-60">overlap {overlaps}</span>
        </div>
      </div>
    </div>
  );
}
