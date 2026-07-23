"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "45s", label: "Avg. Speed-to-Lead", note: "Verified Pilot Benchmark" },
  { value: "100%", label: "After-Hours Capture", note: "Zero Missed Leads" },
  { value: "$14K+", label: "Recovered Revenue", note: "14-Day Pilot Result" },
  { value: "99.9%", label: "System Reliability", note: "n8n Cloud Uptime" },
];

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const [isPlayingDemo, setIsPlayingDemo] = useState(false);

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
      {/* Architect Profile Badge with Photo */}
      <div className="flex items-center gap-3 mb-8 px-4 py-2 rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-md shadow-lg">
        <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#4f8ef7]">
          <img src="/profile1.jpg" alt="Gunal K" className="w-full h-full object-cover object-top" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#f0f0f5] font-semibold">Gunal K</span>
          <span className="text-[#555568]">•</span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf] animate-pulse" />
          <span className="text-xs text-[#2dd4bf] font-mono tracking-wide">
            Accepting 2 Pilots for Q3 2026
          </span>
        </div>
      </div>

      {/* Main Headline */}
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
      <p className="mt-6 text-center max-w-2xl text-[#8888a0] text-base md:text-lg leading-relaxed">
        Voice agents, lead recovery systems, CRM automations, and outreach pipelines.
        Production-grade workflows engineered to capture missed demand, automate execution, and run reliably after deployment.
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
        <button
          onClick={() => setIsPlayingDemo(true)}
          className="h-12 px-7 rounded-xl text-sm font-semibold text-[#f0f0f5] border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.04)] hover:bg-[rgba(255,255,255,0.08)] transition-all duration-300 flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-[#2dd4bf] animate-ping" />
          Watch 90s System Demo
        </button>
      </div>

      {/* DEMO VIDEO MODAL */}
      {isPlayingDemo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg">
          <div className="relative w-full max-w-4xl rounded-2xl border border-[rgba(255,255,255,0.15)] bg-[#0a0a0f] p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <div>
                <span className="text-xs font-mono text-[#2dd4bf] uppercase tracking-wider">System Walkthrough</span>
                <h3 className="text-lg font-bold text-white font-[var(--font-display)]">AI Receptionist & Lead Recovery Demo</h3>
              </div>
              <button
                onClick={() => setIsPlayingDemo(false)}
                className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20"
              >
                ✕
              </button>
            </div>
            {/* Interactive Demo Simulation Screen */}
            <div className="aspect-video w-full rounded-xl bg-black border border-white/10 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4f8ef7]/10 via-transparent to-[#2dd4bf]/10" />
              <div className="w-16 h-16 rounded-full bg-[#4f8ef7]/20 border border-[#4f8ef7] flex items-center justify-center mb-4 animate-pulse">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M8 5v14l11-7z" fill="#4f8ef7" />
                </svg>
              </div>
              <h4 className="text-white font-mono text-sm font-semibold mb-1">Interactive Walkthrough Active</h4>
              <p className="text-xs text-[#8888a0] max-w-md">
                Demonstrating real-time missed call handling → Gemini intent scoring → instant SMS dispatch → Cal.com booking reservation.
              </p>
              <div className="mt-6 flex gap-3">
                <a
                  href="#systems"
                  onClick={() => setIsPlayingDemo(false)}
                  className="px-4 py-2 rounded-lg text-xs font-mono bg-[#4f8ef7] text-white font-semibold"
                >
                  Test Sandbox Simulator Instead →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Verified Benchmarks Strip */}
      <div className="mt-20 w-full max-w-4xl">
        <div className="border border-[rgba(255,255,255,0.08)] rounded-2xl bg-[rgba(255,255,255,0.02)] p-px">
          <div className="rounded-2xl bg-[rgba(12,12,16,0.85)] backdrop-blur-xl px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center">
                <span
                  className="text-3xl font-bold font-[var(--font-display)] mb-1"
                  style={{
                    background: "linear-gradient(135deg, #4f8ef7, #818cf8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </span>
                <span className="text-xs text-white font-medium mb-1">{stat.label}</span>
                <span className="text-[10px] text-[#555568] font-mono">{stat.note}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#555568]">
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[rgba(79,142,247,0.4)] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
