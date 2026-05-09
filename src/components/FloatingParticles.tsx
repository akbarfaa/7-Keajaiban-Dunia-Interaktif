import { useEffect, useRef, useState } from "react";

// Floating glowing particles using canvas — purely decorative, low cost.
export function FloatingParticles({ density = 60, color = "rgba(250, 204, 21, 0.6)" }: { density?: number; color?: string }) {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const onResize = () => setSize({ w: window.innerWidth, h: window.innerHeight });
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const cv = ref.current;
    if (!cv || size.w === 0) return;
    cv.width = size.w;
    cv.height = size.h;
    const ctx = cv.getContext("2d")!;
    const particles = Array.from({ length: density }, () => ({
      x: Math.random() * size.w,
      y: Math.random() * size.h,
      r: Math.random() * 1.6 + 0.4,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      a: Math.random() * 0.6 + 0.2,
    }));

    let raf = 0;
    const tick = () => {
      ctx.clearRect(0, 0, size.w, size.h);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = size.w;
        if (p.x > size.w) p.x = 0;
        if (p.y < 0) p.y = size.h;
        if (p.y > size.h) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = color.replace(/[\d.]+\)$/, `${p.a})`);
        ctx.shadowBlur = 8;
        ctx.shadowColor = color;
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => cancelAnimationFrame(raf);
  }, [size, density, color]);

  return <canvas ref={ref} className="pointer-events-none fixed inset-0 -z-10 opacity-70" />;
}
