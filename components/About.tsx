"use client";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28 border-t border-[rgba(255,255,255,0.04)] bg-[#050508]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Gunal High-Res Portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-sm">
              {/* Glowing Aura */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#4f8ef7] via-[#818cf8] to-[#2dd4bf] opacity-35 blur-xl group-hover:opacity-60 transition-opacity duration-500" />

              {/* Main Photo Card */}
              <div className="relative rounded-3xl border border-[rgba(255,255,255,0.15)] bg-[#0c0c12] p-3 overflow-hidden shadow-2xl">
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#111118]">
                  <img
                    src="/gunal-portrait.png"
                    alt="Gunal K — AI Systems Architect"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent opacity-85" />

                  {/* Profile Badge Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(12,12,18,0.9)] backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-semibold text-white">Gunal K</h4>
                        <p className="text-[11px] font-mono text-[#8888a0]">AI Systems Architect</p>
                      </div>
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[rgba(45,212,191,0.3)] bg-[rgba(45,212,191,0.1)]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf] animate-ping" />
                        <span className="text-[10px] font-mono text-[#2dd4bf]">Accepting Pilots</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Exact Requested Outcome Bio */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-px h-4 bg-[#2dd4bf]" />
              <span className="text-xs font-mono text-[#2dd4bf] tracking-widest uppercase">Architect Mindset</span>
            </div>

            <h2
              className="font-[var(--font-display)] font-bold text-[#f0f0f5] leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
            >
              Outcome-Focused AI Engineering
              <br />
              <span style={{
                background: "linear-gradient(135deg, #2dd4bf, #4f8ef7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                That Replaces Repetitive Manual Work.
              </span>
            </h2>

            {/* Core Narrative */}
            <div className="space-y-4 text-[#a0a0b5] text-base leading-relaxed">
              <p className="p-4 rounded-xl border border-[rgba(79,142,247,0.2)] bg-[rgba(79,142,247,0.05)] text-white font-medium">
                "Over the past year I've focused on building AI systems that replace repetitive operational work—not just chatbots. My work combines LLMs, workflow orchestration, APIs, voice AI, and CRM automation into reliable business systems that continue operating after deployment."
              </p>
              <p>
                Whether it's capturing missed after-hours phone calls for home service businesses or running multi-channel prospect qualification, every workflow is engineered for high availability, zero silent failures, and measurable return on investment.
              </p>
            </div>

            {/* Vision Highlight Box */}
            <div className="rounded-2xl border border-[rgba(232,197,71,0.2)] bg-[rgba(232,197,71,0.05)] p-5">
              <div className="flex items-center gap-2 mb-2">
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                  <path d="M6 1L7.5 4.5H11L8.25 6.75L9.25 10.5L6 8.5L2.75 10.5L3.75 6.75L1 4.5H4.5L6 1Z" stroke="#e8c547" strokeWidth="1.2" strokeLinejoin="round"/>
                </svg>
                <span className="text-xs font-mono text-[#e8c547] uppercase tracking-wider">Product Vision</span>
              </div>
              <h4 className="font-[var(--font-display)] font-semibold text-white text-base mb-1">
                Personal AI Operating System (PAIOS)
              </h4>
              <p className="text-xs text-[#8888a0] leading-relaxed">
                Building toward a voice-controlled master agent control plane that orchestrates specialized sub-agents across lead capture, CRM synchronization, invoicing, and daily briefings.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-2">
              <a
                href="https://www.linkedin.com/in/gunal-krishnamurthi-54a272350/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-[#8888a0] hover:text-white transition-colors"
              >
                <span>→ LinkedIn Profile</span>
              </a>
              <a
                href="https://github.com/gunal2030"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-[#8888a0] hover:text-white transition-colors"
              >
                <span>→ GitHub Code Repos</span>
              </a>
              <a
                href="mailto:gunalkrish8@gmail.com"
                className="flex items-center gap-2 text-xs font-mono text-[#4f8ef7] hover:text-white transition-colors"
              >
                <span>→ Direct Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
