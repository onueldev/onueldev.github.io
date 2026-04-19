import { useEffect, useRef } from "react";

interface Snowflake {
  x: number;
  phase: number;
  speed: number;
  size: number;
  opacity: number;
  drift: number;
  isGold: boolean;
}

export default function SnowField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let flakes: Snowflake[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initFlakes();
    };

    const initFlakes = () => {
      const total = 48;
      const goldCount = 8;
      flakes = Array.from({ length: total }, (_, i) => {
        const isGold = i >= total - goldCount;
        return {
          x: Math.random(),
          phase: Math.random(),
          speed: 0.35 + Math.random() * 0.65,
          size: isGold
            ? 1.2 + Math.random() * 1.0
            : 1.0 + Math.random() * 2.0,
          opacity: isGold
            ? 0.25 + Math.random() * 0.35
            : 0.20 + Math.random() * 0.45,
          drift: (Math.random() - 0.5) * 0.05,
          isGold,
        };
      });
    };

    const duration = 18; // seconds
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000;
      const t = (elapsed % duration) / duration;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const snowAreaHeight = canvas.height * 0.38;

      for (const flake of flakes) {
        const y = ((flake.phase + t * flake.speed) % 1.0) * snowAreaHeight;
        const x =
          flake.x * canvas.width +
          flake.drift * canvas.width *
            Math.sin(t * 2 * Math.PI + flake.phase * 2 * Math.PI);

        const yRatio = y / snowAreaHeight;
        const fade = yRatio > 0.8 ? 1.0 - (yRatio - 0.8) / 0.2 : 1.0;
        const alpha = flake.opacity * fade;

        if (alpha <= 0) continue;

        const color = flake.isGold
          ? `rgba(253, 230, 138, ${alpha})`
          : `rgba(255, 255, 255, ${alpha})`;

        // glow for larger flakes
        if (flake.size > 1.8) {
          const grad = ctx.createRadialGradient(x, y, 0, x, y, flake.size * 2.5);
          grad.addColorStop(0, flake.isGold
            ? `rgba(253, 230, 138, ${alpha * 0.3})`
            : `rgba(255, 255, 255, ${alpha * 0.25})`);
          grad.addColorStop(1, "rgba(0,0,0,0)");
          ctx.beginPath();
          ctx.arc(x, y, flake.size * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(x, y, flake.size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    resize();
    animationId = requestAnimationFrame(animate);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
