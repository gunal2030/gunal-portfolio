"use client";

const engineeringSpecs = [
  {
    title: "Failover & Retry Architecture",
    tag: "RESILIENCE",
    icon: "🛡️",
    desc: "Exponential backoff retry loops on all API calls. Secondary LLM fallback (Gemini Flash → GPT-4o-mini) if primary provider experiences downtime.",
  },
  {
    title: "Observability & Structured Logging",
    tag: "LOGGING",
    icon: "📊",
    desc: "Every execution emits structured JSON logs with execution time, token usage, and status codes. Instant webhook alerts to Slack for unhandled exceptions.",
  },
  {
    title: "Human Handoff & Escalation Rules",
    tag: "SAFETY",
    icon: "🚨",
    desc: "Rule-based thresholds for high-urgency or ambiguous inputs. High-risk leads are automatically escalated to a human operator via SMS/WhatsApp with conversation history.",
  },
  {
    title: "Security & Data Privacy",
    tag: "SECURITY",
    icon: "🔒",
    desc: "Zero persistent customer data retention on intermediate servers. API keys stored as encrypted environment variables. End-to-end HTTPS webhook pipelines.",
  },
];

export default function Engineering() {
  return (
    <section className="relative px-6 py-28 border-t border-[rgba(255,255,255,0.06)] bg-[#050508]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-[rgba(79,142,247,0.2)] bg-[rgba(79,142,247,0.05)]">
            <span className="text-xs font-mono text-[#4f8ef7] tracking-widest uppercase">
              Engineering & Reliability Standards
            </span>
          </div>
          <h2
            className="font-[var(--font-display)] font-bold text-[#f0f0f5] leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
          >
            Built for Production Reliability,
            <br />
            <span style={{
              background: "linear-gradient(135deg, #4f8ef7, #818cf8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Not Just Demos.
            </span>
          </h2>
          <p className="mt-4 text-[#8888a0] text-sm leading-relaxed">
            Technical buyers care about system stability. Here is how our AI agent architectures handle error recovery, security, and observability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {engineeringSpecs.map((spec) => (
            <div
              key={spec.title}
              className="rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(12,12,18,0.8)] p-6 hover:border-[#4f8ef7]/40 transition-all"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-mono px-2.5 py-1 rounded border border-[#4f8ef7]/30 bg-[#4f8ef7]/10 text-[#4f8ef7]">
                  {spec.tag}
                </span>
                <span className="text-lg">{spec.icon}</span>
              </div>
              <h3 className="font-[var(--font-display)] font-semibold text-white text-base mb-2">
                {spec.title}
              </h3>
              <p className="text-xs text-[#8888a0] leading-relaxed">
                {spec.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
