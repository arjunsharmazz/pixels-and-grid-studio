import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

/**
 * Horizontal scroll container. Vertical wheel/trackpad gestures translate the
 * inner track horizontally with a smooth lerp. On mobile we fall back to
 * native horizontal swipe.
 */
export function HorizontalCanvas({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef(0);
  const currentRef = useRef(0);
  const maxRef = useRef(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isMobile) return;
    const wrap = wrapRef.current!;
    const track = trackRef.current!;
    document.body.style.overflow = "hidden";

    const recalc = () => {
      maxRef.current = Math.max(0, track.scrollWidth - window.innerWidth);
      targetRef.current = Math.min(targetRef.current, maxRef.current);
    };
    recalc();
    const ro = new ResizeObserver(recalc);
    ro.observe(track);
    window.addEventListener("resize", recalc);

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      targetRef.current = Math.max(0, Math.min(maxRef.current, targetRef.current + delta));
    };
    wrap.addEventListener("wheel", onWheel, { passive: false });

    // keyboard
    const onKey = (e: KeyboardEvent) => {
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

  const scrollTo = (frac: number) => {
    targetRef.current = maxRef.current * Math.max(0, Math.min(1, frac));
  };

  if (isMobile) {
    return <div className="bg-paper">{children}</div>;
  }

  return (
    <div ref={wrapRef} className="fixed inset-0 overflow-hidden bg-paper">
      <div ref={trackRef} className="flex h-screen will-change-transform">
        {children}
      </div>
      {/* progress rail */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-ink/60">
        <span className="font-mono tabular-nums">{String(Math.round(progress * 100)).padStart(3, "0")}</span>
        <div className="h-px w-40 bg-ink/15 relative">
          <div className="absolute inset-y-0 left-0 bg-ink" style={{ width: `${progress * 100}%` }} />
        </div>
        <span className="opacity-50">Scroll →</span>
      </div>
    </div>
  );
}
