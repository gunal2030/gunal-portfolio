"use client";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28 border-t border-[rgba(255,255,255,0.04)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-px h-4 bg-[#2dd4bf]" />
              <span className="text-xs font-mono text-[#2dd4bf] tracking-widest uppercase">About</span>
            </div>

            <h2
              className="font-[var(--font-display)] font-bold text-[#f0f0f5] leading-tight mb-6"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
            >
              Building AI Systems
              <br />
              <span style={{
                background: "linear-gradient(135deg, #2dd4bf, #4f8ef7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>That Actually Work.</span>
            </h2>

            <div className="space-y-4 text-[#8888a0] text-sm leading-relaxed">
              <p>
                I'm Gunal K — an AI Systems Architect based in Bengaluru, India,
                building automation systems for businesses in the US, UK, and beyond.
              </p>
              <p>
                I don't sell AI tools. I design and deploy operational systems — voice
                agents that answer missed calls, outreach engines that run overnight,
                CRM layers that update themselves, and follow-up sequences that close
                deals while founders sleep.
              </p>
              <p>
                My background spans machine learning, workflow automation, computer
                vision, analytics, and systems thinking. But what I sell isn't
                technology — it's operational leverage.
              </p>
              <p>
                Every system I build is engineered to run reliably, fail gracefully,
                and improve over time. Not prototypes. Not demos. Production systems.
              </p>
            </div>

            {/* Links */}
            <div className="flex items-center gap-4 mt-8">
              <a
                href="https://www.linkedin.com/in/gunal-krishnamurthi-54a272350/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-[#8888a0] hover:text-[#f0f0f5] transition-colors group"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="1" y="1" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M4 6V10M4 4.5V4M6.5 10V7.5C6.5 6.7 7.2 6 8 6C8.8 6 9.5 6.7 9.5 7.5V10M6.5 6V10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
                LinkedIn
                <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </a>
              <a
                href="https://github.com/gunal2030"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-[#8888a0] hover:text-[#f0f0f5] transition-colors group"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1C3.69 1 1 3.69 1 7C1 9.66 2.73 11.91 5.13 12.71C5.43 12.77 5.54 12.58 5.54 12.42V11.26C3.92 11.62 3.57 10.52 3.57 10.52C3.3 9.82 2.9 9.63 2.9 9.63C2.35 9.26 2.94 9.27 2.94 9.27C3.55 9.31 3.87 9.9 3.87 9.9C4.41 10.82 5.28 10.55 5.56 10.39C5.62 10 5.78 9.73 5.95 9.58C4.68 9.43 3.35 8.94 3.35 6.76C3.35 6.1 3.58 5.56 3.88 5.14C3.82 4.99 3.61 4.38 3.94 3.55C3.94 3.55 4.45 3.39 5.54 4.17C5.97 4.04 6.49 3.97 7 3.97C7.51 3.97 8.03 4.04 8.46 4.17C9.55 3.39 10.06 3.55 10.06 3.55C10.39 4.38 10.18 4.99 10.12 5.14C10.42 5.56 10.65 6.1 10.65 6.76C10.65 8.95 9.31 9.43 8.04 9.58C8.25 9.76 8.44 10.11 8.44 10.65V12.42C8.44 12.58 8.55 12.77 8.86 12.71C11.27 11.91 13 9.66 13 7C13 3.69 10.31 1 7 1Z" fill="currentColor"/>
                </svg>
                GitHub
                <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Vision */}
          <div className="space-y-4">
            {/* Current focus */}
            <div className="rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(12,12,16,0.6)] p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf] animate-pulse" />
                <span className="text-xs font-mono text-[#2dd4bf]">Current Focus</span>
              </div>
              <p className="text-sm text-[#8888a0] leading-relaxed">
                Building and deploying AI receptionist systems for home service businesses
                in the US. One niche. One offer. Measurable results.
              </p>
            </div>

            {/* Long-term vision */}
            <div className="rounded-2xl border border-[rgba(232,197,71,0.15)] bg-[rgba(232,197,71,0.04)] p-6">
              <div className="flex items-center gap-2 mb-3">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 1L7.5 4.5H11L8.25 6.75L9.25 10.5L6 8.5L2.75 10.5L3.75 6.75L1 4.5H4.5L6 1Z" stroke="#e8c547" strokeWidth="1.2" strokeLinejoin="round"/>
                </svg>
                <span className="text-xs font-mono text-[#e8c547]">The Long-Term Vision</span>
              </div>
              <h4 className="font-[var(--font-display)] font-semibold text-[#f0f0f5] mb-2">
                Personal AI Operating System
              </h4>
              <p className="text-sm text-[#8888a0] leading-relaxed">
                I'm building toward a master-agent architecture — a voice-controlled
                command plane that orchestrates specialized agents across leads, sales,
                operations, and reporting. One voice command replaces an entire
                administrative layer.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Layer 1: AI Receptionist", "Layer 2: CRM Memory", "Layer 3: Multi-Channel", "Layer 4: Dashboard", "Layer 5: Master Orchestrator"].map((layer, i) => (
                  <span
                    key={layer}
                    className="text-xs px-2.5 py-1 rounded-md border font-mono"
                    style={{
                      borderColor: i === 0 ? "rgba(232,197,71,0.4)" : "rgba(255,255,255,0.06)",
                      color: i === 0 ? "#e8c547" : "#555568",
                      backgroundColor: i === 0 ? "rgba(232,197,71,0.08)" : "transparent",
                    }}
                  >
                    {layer}
                  </span>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(12,12,16,0.6)] p-6">
              <p className="text-xs font-mono text-[#555568] mb-3 uppercase tracking-wider">Technical Depth</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "AI Agent Architecture", "n8n", "LangGraph", "Gemini API",
                  "Python", "Workflow Automation", "Voice Agents", "CRM Systems",
                  "API Integration", "Prompt Engineering", "Google Sheets API",
                  "Twilio", "Cal.com",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-md border border-[rgba(255,255,255,0.06)] text-[#8888a0] hover:border-[rgba(255,255,255,0.12)] hover:text-[#f0f0f5] transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
