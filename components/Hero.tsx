"use client";

import { useEffect, useRef } from "react";

const stats = [
  { value: "60s", label: "Lead Response Time" },
  { value: "3", label: "Systems in Production" },
  { value: "$0", label: "Missed Calls After Deploy" },
  { value: "24/7", label: "Agent Uptime" },
];

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    setTimeout(() => {
      el.style.transition = "opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 200);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-20 overflow-hidden">
      {/* Profile Avatar Badge */}
      <div className="flex items-center gap-3 mb-8 px-4 py-2 rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] backdrop-blur-md">
        <div className="relative w-7 h-7 rounded-full overflow-hidden border border-[#4f8ef7]">
          <img src="/gunal-profile-4.png" alt="Gunal K" className="w-full h-full object-cover" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#f0f0f5] font-medium">Gunal K</span>
          <span className="text-[#555568]">•</span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf] animate-pulse" />
          <span className="text-xs text-[#8888a0] font-mono tracking-wide uppercase">
            Bengaluru, India — Working Globally
          </span>
        </div>
      </div>

      {/* Headline */}
      <h1
        ref={headlineRef}
        className="text-center max-w-4xl font-[var(--font-display)] font-bold leading-[1.05] tracking-tight"
        style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}
      >
        <span className="text-[#f0f0f5]">I Build AI Systems</span>
        <br />
        <span
          style={{
            background: "linear-gradient(135deg, #4f8ef7 0%, #818cf8 50%, #2dd4bf 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          That Work While You Sleep.
        </span>
      </h1>

      {/* Sub-copy */}
      <p className="mt-6 text-center max-w-xl text-[#8888a0] text-lg leading-relaxed">
        Voice agents, lead recovery systems, CRM automations, outreach pipelines.
        Intelligent workflows that capture demand, execute operations, and create
        compounding leverage for serious businesses.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-center gap-3 mt-10">
        <a
          href="https://cal.com/gunal-krish-fmtsqv"
          target="_blank"
          rel="noopener noreferrer"
          className="group h-12 px-7 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all duration-300 text-white"
          style={{
            background: "linear-gradient(135deg, #4f8ef7, #6366f1)",
            boxShadow: "0 0 32px rgba(79,142,247,0.3)",
          }}
        >
          Book a Strategy Call
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 16 16" fill="none">
            <path d="M3 8H13M9 4L13 8L9 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
        <a
          href="#systems"
          className="h-12 px-7 rounded-xl text-sm font-semibold text-[#8888a0] hover:text-[#f0f0f5] border border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.2)] transition-all duration-300 flex items-center gap-2"
        >
          View Systems
        </a>
      </div>

      {/* Social proof strip */}
      <div className="mt-20 w-full max-w-3xl">
        <div className="border border-[rgba(255,255,255,0.06)] rounded-2xl bg-[rgba(255,255,255,0.02)] p-px">
          <div className="rounded-2xl bg-[rgba(12,12,16,0.8)] backdrop-blur-xl px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <span
                  className="text-2xl font-bold font-[var(--font-display)]"
                  style={{
                    background: "linear-gradient(135deg, #4f8ef7, #818cf8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </span>
                <span className="text-xs text-[#555568] text-center">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#555568]">
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[rgba(79,142,247,0.4)] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
