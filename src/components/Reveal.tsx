import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({ children, delay = 0, as: As = "div", className = "" }: { children: ReactNode; delay?: number; as?: any; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setShown(true)),
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <As
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0) scale(1)" : "translateY(28px) scale(0.98)",
        filter: shown ? "blur(0)" : "blur(8px)",
        transition: `opacity .9s ease ${delay}ms, transform .9s cubic-bezier(.7,0,.2,1) ${delay}ms, filter .9s ease ${delay}ms`,
      }}
    >
      {children}
    </As>
  );
}
