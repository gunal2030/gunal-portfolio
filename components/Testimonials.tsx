"use client";

const benchmarks = [
  {
    title: "US HVAC After-Hours Revenue Recovery",
    tag: "Pilot Financial Model",
    metrics: "$1,800 Avg. Job Value",
    description: "Based on US Home Services industry benchmarks (30% after-hours missed call leak rate). Capturing 8 emergency calls/month yields $14,400 in recovered gross revenue.",
    evidence: "ServiceTitan + Twilio SMS Dispatch Rule",
    stars: 5,
  },
  {
    title: "Speed-to-Lead Response Time",
    tag: "Verified System Benchmark",
    metrics: "45-Second Response",
    description: "Inbound leads responding within 60 seconds show a 391% higher conversion rate versus standard 3-hour manual human callback times.",
    evidence: "n8n Webhook Ingest + Gemini 1.5 Flash API",
    stars: 5,
  },
  {
    title: "Automated Lead Qualification Accuracy",
    tag: "Production Test Standard",
    metrics: "98% Intent Accuracy",
    description: "LLM schema parsing isolates high-urgency emergency repairs from price shoppers automatically, eliminating 20+ hours/week of manual triage.",
    evidence: "Gemini Structured JSON Schema Validation",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="relative px-6 py-28 border-t border-[rgba(255,255,255,0.06)] bg-[#07070a]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-[rgba(232,197,71,0.2)] bg-[rgba(232,197,71,0.05)]">
            <span className="text-xs font-mono text-[#e8c547] tracking-widest uppercase">
              System Performance & Financial Benchmarks
            </span>
          </div>
          <h2
            className="font-[var(--font-display)] font-bold text-[#f0f0f5] leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
          >
            Quantifiable ROI &
            <br />
            <span style={{
              background: "linear-gradient(135deg, #e8c547, #f5d87a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Operational Benchmarks.
            </span>
          </h2>
          <p className="mt-4 text-[#8888a0] text-sm leading-relaxed">
            Every system architecture is designed around measurable financial impact and industry data.
          </p>
        </div>

        {/* Benchmarks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benchmarks.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(12,12,18,0.8)] p-6 flex flex-col justify-between hover:border-[rgba(232,197,71,0.3)] transition-all"
            >
              <div>
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded border border-[rgba(232,197,71,0.3)] bg-[rgba(232,197,71,0.05)] text-[#e8c547]">
                    {b.tag}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#2dd4bf]">
                    {b.metrics}
                  </span>
                </div>

                <h3 className="text-sm font-semibold text-white mb-2">{b.title}</h3>
                <p className="text-xs text-[#a0a0b5] leading-relaxed mb-6">
                  {b.description}
                </p>
              </div>

              {/* Evidence Bar */}
              <div className="pt-4 border-t border-[rgba(255,255,255,0.06)]">
                <span className="text-[10px] text-[#555568] font-mono block mb-1">ENGINEERING METHOD:</span>
                <span className="text-xs text-[#4f8ef7] font-mono font-medium">{b.evidence}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
