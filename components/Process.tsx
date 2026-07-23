"use client";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Map every manual workflow. Find where time and money leak daily.",
    detail: "Discovery call + operational audit",
  },
  {
    number: "02",
    title: "Architect",
    description: "Design the agent logic, data flows, decision trees, and failure states.",
    detail: "System design document + architecture diagram",
  },
  {
    number: "03",
    title: "Integrate",
    description: "Connect your existing tools — CRM, calendar, email, phone, payment.",
    detail: "API connections + credential setup",
  },
  {
    number: "04",
    title: "Test Failures",
    description: "Break the system intentionally. Edge cases, bad data, API downtime.",
    detail: "Stress testing + failure recovery logic",
  },
  {
    number: "05",
    title: "Deploy",
    description: "Launch on a cloud server. 24/7 uptime. Zero manual intervention.",
    detail: "VPS deployment + monitoring setup",
  },
  {
    number: "06",
    title: "Monitor & Optimize",
    description: "Weekly KPI reports. Monthly prompt tuning. Continuous improvement.",
    detail: "Dashboard + monthly retainer",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative px-6 py-28 border-t border-[rgba(255,255,255,0.04)]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-px h-4 bg-[#818cf8]" />
            <span className="text-xs font-mono text-[#818cf8] tracking-widest uppercase">How I Work</span>
          </div>
          <h2
            className="font-[var(--font-display)] font-bold text-[#f0f0f5] leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            The Hard Part is
            <br />
            <span style={{
              background: "linear-gradient(135deg, #818cf8, #c084fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>Orchestration, Not the Model.</span>
          </h2>
          <p className="mt-4 text-[#8888a0] max-w-lg">
            Anyone can call an API. Building a system that doesn't break, handles edge
            cases, and delivers consistent results — that's the actual work.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[rgba(129,140,248,0.4)] via-[rgba(79,142,247,0.2)] to-transparent hidden md:block" style={{left: "calc(2.5rem + 28px)"}} />

          <div className="space-y-4">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="group flex gap-6 items-start"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Step number */}
                <div className="relative shrink-0">
                  <div className="w-14 h-14 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(12,12,16,0.8)] flex items-center justify-center group-hover:border-[rgba(129,140,248,0.3)] transition-all duration-300">
                    <span className="text-xs font-mono text-[#555568] group-hover:text-[#818cf8] transition-colors">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-3 pb-8 border-b border-[rgba(255,255,255,0.04)] last:border-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-[var(--font-display)] font-semibold text-[#f0f0f5] text-lg mb-1 group-hover:text-white transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-sm text-[#8888a0] leading-relaxed mb-2">
                        {step.description}
                      </p>
                      <span className="text-xs font-mono text-[#555568]">→ {step.detail}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
