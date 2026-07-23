"use client";

import { useEffect, useRef } from "react";

export default function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Particles
    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      opacity: number; size: number; pulse: number;
    }> = [];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.4 + 0.05,
        size: Math.random() * 1.5 + 0.5,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    // Orbital nodes
    const nodes = [
      { cx: 0.7, cy: 0.35, r: 120, speed: 0.0008, phase: 0 },
      { cx: 0.75, cy: 0.4, r: 200, speed: 0.0005, phase: Math.PI / 3 },
      { cx: 0.65, cy: 0.3, r: 80, speed: 0.0012, phase: Math.PI },
    ];

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 1;

      // Grid
      ctx.strokeStyle = "rgba(255,255,255,0.025)";
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Orbital rings
      nodes.forEach((node) => {
        const cx = canvas.width * node.cx;
        const cy = canvas.height * node.cy;

        ctx.strokeStyle = "rgba(79,142,247,0.06)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(cx, cy, node.r, 0, Math.PI * 2);
        ctx.stroke();

        // Orbiting dot
        const angle = time * node.speed + node.phase;
        const dotX = cx + Math.cos(angle) * node.r;
        const dotY = cy + Math.sin(angle) * node.r;

        const grd = ctx.createRadialGradient(dotX, dotY, 0, dotX, dotY, 6);
        grd.addColorStop(0, "rgba(79,142,247,0.8)");
        grd.addColorStop(1, "rgba(79,142,247,0)");
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(dotX, dotY, 6, 0, Math.PI * 2);
        ctx.fill();

        // Trailing line
        ctx.strokeStyle = `rgba(79,142,247,0.12)`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let i = 0; i < 60; i++) {
          const a = angle - (i / 60) * 0.8;
          const px = cx + Math.cos(a) * node.r;
          const py = cy + Math.sin(a) * node.r;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
      });

      // Connection lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.strokeStyle = `rgba(79,142,247,${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.02;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const pulseOpacity = p.opacity * (0.7 + 0.3 * Math.sin(p.pulse));
        ctx.fillStyle = `rgba(79,142,247,${pulseOpacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Radial gradient overlay (vignette)
      const vignette = ctx.createRadialGradient(
        canvas.width * 0.5, canvas.height * 0.5, canvas.height * 0.2,
        canvas.width * 0.5, canvas.height * 0.5, canvas.height * 0.9
      );
      vignette.addColorStop(0, "rgba(5,5,7,0)");
      vignette.addColorStop(1, "rgba(5,5,7,0.85)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  );
}
