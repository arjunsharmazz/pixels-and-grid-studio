import { useEffect, useRef } from "react";

export function PixelCursor({ dark = false }: { dark?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const particles: { x: number; y: number; vx: number; vy: number; life: number; size: number }[] = [];
    const mouse = { x: -9999, y: -9999, px: -9999, py: -9999 };

    const onMove = (e: MouseEvent) => {
      mouse.px = mouse.x; mouse.py = mouse.y;
      mouse.x = e.clientX; mouse.y = e.clientY;
      const dx = mouse.x - mouse.px, dy = mouse.y - mouse.py;
      const speed = Math.min(Math.hypot(dx, dy), 40);
      const count = Math.floor(speed / 2) + 1;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: mouse.x + (Math.random() - 0.5) * 8,
          y: mouse.y + (Math.random() - 0.5) * 8,
          vx: dx * 0.05 + (Math.random() - 0.5) * 0.6,
          vy: dy * 0.05 + (Math.random() - 0.5) * 0.6,
          life: 1,
          size: Math.random() < 0.2 ? 6 : Math.random() < 0.5 ? 4 : 2,
        });
      }
    };
    const onResize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", onResize);

    let raf = 0;
    const loop = () => {
      ctx.clearRect(0, 0, w, h);
      const color = dark ? "255,255,255" : "0,0,0";
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy; p.life -= 0.018;
        if (p.life <= 0) { particles.splice(i, 1); continue; }
        const px = Math.round(p.x / 2) * 2;
        const py = Math.round(p.y / 2) * 2;
        ctx.fillStyle = `rgba(${color},${p.life.toFixed(3)})`;
        ctx.fillRect(px, py, p.size, p.size);
      }
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
    };
  }, [dark]);

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-40" />;
}
