import { useEffect, useRef } from "react";
import { useTheme } from "../contexts/ThemeContext";

interface Star {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  speed: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  colorIdx: number;
}

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  opacity: number;
  life: number;
  maxLife: number;
}

// 색상당 공유 스프라이트 1개 (별마다 생성 X)
function createGlowSprite(color: string): HTMLCanvasElement {
  const size = 24;
  const oc = document.createElement("canvas");
  oc.width = size;
  oc.height = size;
  const ctx = oc.getContext("2d")!;
  const cx = size / 2;
  const grad = ctx.createRadialGradient(cx, cx, 0, cx, cx, cx);
  grad.addColorStop(0, `rgba(${color},0.6)`);
  grad.addColorStop(1, `rgba(${color},0)`);
  ctx.beginPath();
  ctx.arc(cx, cx, cx, 0, Math.PI * 2);
  ctx.fillStyle = grad;
  ctx.fill();
  return oc;
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let animationId: number;
    let stars: Star[] = [];
    let shootingStars: ShootingStar[] = [];
    let nextShootingTime = 0;

    const starColors = isDark
      ? ["248,250,252", "186,230,253", "165,163,255"]
      : ["15,23,42", "2,132,193", "99,102,241"];
    const colorWeights = [0.7, 0.9];
    const opacityRange = isDark ? { min: 0.2, spread: 0.55 } : { min: 0.06, spread: 0.18 };
    const shootingColor = isDark ? "186,230,253" : "2,132,193";

    // 색상 3개에 대한 스프라이트만 생성 (모바일에서는 사용 안 함)
    const glowSprites = isMobile ? [] : starColors.map(createGlowSprite);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      const divisor = isMobile ? 4500 : 2200;
      const count = Math.floor((canvas.width * canvas.height) / divisor);
      stars = Array.from({ length: count }, () => {
        const rnd = Math.random();
        const colorIdx =
          rnd < colorWeights[0] ? 0 : rnd < colorWeights[1] ? 1 : 2;
        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.4 + 0.2,
          opacity: Math.random() * opacityRange.spread + opacityRange.min,
          speed: Math.random() * 0.08 + 0.01,
          twinkleSpeed: Math.random() * 0.012 + 0.003,
          twinkleOffset: Math.random() * Math.PI * 2,
          colorIdx,
        };
      });
    };

    const spawnShootingStar = () => {
      if (prefersReducedMotion) return;
      const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.4;
      const speed = 6 + Math.random() * 4;
      shootingStars.push({
        x: Math.random() * canvas.width * 0.7,
        y: Math.random() * canvas.height * 0.4,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        length: 80 + Math.random() * 60,
        opacity: isDark ? 1 : 0.4,
        life: 0,
        maxLife: 60 + Math.random() * 40,
      });
    };

    let time = 0;
    // 모바일 15fps 캡 → CPU/GPU 부하 및 발열 크게 감소
    const frameInterval = isMobile ? 1000 / 15 : 0;
    let lastFrame = 0;
    const animate = (now?: number) => {
      animationId = requestAnimationFrame(animate);
      if (frameInterval > 0 && now !== undefined) {
        if (now - lastFrame < frameInterval) return;
        lastFrame = now;
      }
      time += 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const star of stars) {
        const twinkle =
          Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.3 + 0.7;
        const alpha = star.opacity * twinkle;

        if (star.radius > 1.0 && !isMobile) {
          const sprite = glowSprites[star.colorIdx];
          const drawSize = star.radius * 6;
          ctx.globalAlpha = alpha * 0.7;
          ctx.drawImage(sprite, star.x - drawSize / 2, star.y - drawSize / 2, drawSize, drawSize);
          ctx.globalAlpha = 1;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${starColors[star.colorIdx]},${alpha})`;
        ctx.fill();

        star.y -= star.speed;
        if (star.y < -2) {
          star.y = canvas.height + 2;
          star.x = Math.random() * canvas.width;
        }
      }

      if (time >= nextShootingTime) {
        spawnShootingStar();
        nextShootingTime = time + 200 + Math.random() * 300;
      }

      shootingStars = shootingStars.filter((s) => s.life < s.maxLife);
      for (const s of shootingStars) {
        const progress = s.life / s.maxLife;
        const alpha = s.opacity * (1 - progress);
        const grad = ctx.createLinearGradient(
          s.x, s.y,
          s.x - s.vx * (s.length / 8),
          s.y - s.vy * (s.length / 8)
        );
        grad.addColorStop(0, `rgba(${shootingColor},${alpha})`);
        grad.addColorStop(1, `rgba(${shootingColor},0)`);
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - (s.vx / 8) * s.length, s.y - (s.vy / 8) * s.length);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        s.x += s.vx;
        s.y += s.vy;
        s.life += 1;
      }

    };

    let raf1: number;
    let raf2: number;
    let running = false;
    const start = () => {
      if (running) return;
      running = true;
      lastFrame = 0;
      animate();
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(animationId);
    };
    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    const startDelay = isMobile ? 600 : 0;
    const timerId = setTimeout(() => {
      raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(() => {
          resize();
          start();
        });
      });
    }, startDelay);

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      clearTimeout(timerId);
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      cancelAnimationFrame(animationId);
      running = false;
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        willChange: "transform",
        transform: "translateZ(0)",
      }}
      aria-hidden="true"
    />
  );
}
