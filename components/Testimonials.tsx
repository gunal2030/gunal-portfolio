"use client";

const testimonials = [
  {
    quote: "Gunal's AI receptionist captured 14 after-hours emergency calls in our first 14 days. We recovered over $14,000 in plumbing service jobs that would have gone straight to our competitors.",
    author: "Dave M.",
    role: "Operations Director",
    company: "Dallas Plumbing & HVAC (US Pilot)",
    stars: 5,
    tag: "Verified 14-Day Pilot Result",
    metrics: "$14,000 Recovered",
  },
  {
    quote: "Our speed-to-lead response time dropped from 3 hours to 45 seconds. The automated qualification scoring isolates high-intent leads instantly and books them straight to my calendar.",
    author: "Sarah K.",
    role: "Founder & Principal Consultant",
    company: "B2B Growth Advisory (UK Pilot)",
    stars: 5,
    tag: "Verified System Benchmark",
    metrics: "45s Response Time",
  },
  {
    quote: "No fluff, no generic chatbots. Gunal built a production n8n workflow connected to our CRM. Zero manual entry for our sales team since deployment.",
    author: "Marcus T.",
    role: "Head of Revenue Ops",
    company: "Apex Services Group",
    stars: 5,
    tag: "Production Retainer Client",
    metrics: "20+ Hours Saved/Wk",
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
              Social Proof & Testimonials
            </span>
          </div>
          <h2
            className="font-[var(--font-display)] font-bold text-[#f0f0f5] leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
          >
            Proven Outcomes &
            <br />
            <span style={{
              background: "linear-gradient(135deg, #e8c547, #f5d87a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Pilot Results.
            </span>
          </h2>
          <p className="mt-4 text-[#8888a0] text-sm leading-relaxed">
            Real feedback from deployment pilots and systems architecture clients.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(12,12,18,0.8)] p-6 flex flex-col justify-between hover:border-[rgba(232,197,71,0.3)] transition-all"
            >
              <div>
                {/* Stars & Tag */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex gap-1 text-[#e8c547]">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-[rgba(232,197,71,0.3)] bg-[rgba(232,197,71,0.05)] text-[#e8c547]">
                    {t.tag}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-xs text-[#d0d0e5] leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author & Metric */}
              <div className="pt-4 border-t border-[rgba(255,255,255,0.06)] flex justify-between items-end">
                <div>
                  <h4 className="text-sm font-semibold text-white">{t.author}</h4>
                  <p className="text-[11px] text-[#8888a0] font-mono">{t.role}</p>
                  <p className="text-[10px] text-[#555568]">{t.company}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-[#2dd4bf] block">
                    {t.metrics}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
