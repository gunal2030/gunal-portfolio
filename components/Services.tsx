"use client";

const services = [
  {
    title: "AI Receptionist System",
    price: "From $1,500",
    recurring: "$500/mo maintenance",
    description: "Never miss a lead again. An always-on voice and SMS receptionist that qualifies every inbound inquiry and books appointments automatically.",
    outcomes: [
      "60-second response time, 24/7",
      "Automatic appointment booking",
      "Urgent job escalation to owner",
      "Weekly performance report",
    ],
    idealFor: "HVAC, Plumbing, Cleaning, Legal, Dental",
    accentColor: "#4f8ef7",
  },
  {
    title: "Lead Recovery & Follow-up",
    price: "From $1,000",
    recurring: "$400/mo maintenance",
    description: "Recover the 60–70% of leads that go cold because nobody followed up fast enough. Automated sequences that run for 7 days without manual effort.",
    outcomes: [
      "Instant personalized reply to new leads",
      "Day 1, 3, 7 follow-up sequences",
      "HOT/WARM/COLD scoring",
      "Calendar booking integrated",
    ],
    idealFor: "Coaches, Consultants, Agencies, SaaS",
    accentColor: "#2dd4bf",
  },
  {
    title: "CRM & Sales Workflow",
    price: "From $1,200",
    recurring: "$450/mo maintenance",
    description: "Stop losing deals to bad data and forgotten follow-ups. A full pipeline management system with zero manual data entry and automatic stage progression.",
    outcomes: [
      "Automatic lead logging from all channels",
      "7-stage pipeline tracking",
      "Invoice and payment follow-up",
      "Monthly revenue summary report",
    ],
    idealFor: "Service businesses, Small law firms, Accountants",
    accentColor: "#818cf8",
  },
  {
    title: "AI Architect Consulting",
    price: "From $800",
    recurring: "Per session or retainer",
    description: "Bring me in to map your operations, identify automation opportunities, and design the architecture for your future AI system. Strategy before implementation.",
    outcomes: [
      "Operational workflow audit",
      "Custom automation architecture",
      "Tool selection and integration plan",
      "30-day implementation roadmap",
    ],
    idealFor: "Founders, Operators, Growth-stage startups",
    accentColor: "#e8c547",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative px-6 py-28 border-t border-[rgba(255,255,255,0.04)]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-px h-4 bg-[#e8c547]" />
            <span className="text-xs font-mono text-[#e8c547] tracking-widest uppercase">Services</span>
          </div>
          <h2
            className="font-[var(--font-display)] font-bold text-[#f0f0f5] leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            What I Build
            <br />
            <span style={{
              background: "linear-gradient(135deg, #e8c547, #f5d87a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>For Clients.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(12,12,16,0.6)] p-6 hover:border-[rgba(255,255,255,0.12)] transition-all duration-400"
            >
              {/* Price tag */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <span
                    className="text-lg font-bold font-[var(--font-display)]"
                    style={{ color: service.accentColor }}
                  >
                    {service.price}
                  </span>
                  <span className="text-xs text-[#555568] ml-2">+ {service.recurring}</span>
                </div>
              </div>

              <h3 className="font-[var(--font-display)] font-semibold text-[#f0f0f5] text-lg mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-[#8888a0] leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Outcomes */}
              <div className="space-y-2 mb-5">
                {service.outcomes.map((outcome) => (
                  <div key={outcome} className="flex items-center gap-2">
                    <div
                      className="w-1 h-1 rounded-full shrink-0"
                      style={{ backgroundColor: service.accentColor }}
                    />
                    <span className="text-xs text-[#8888a0]">{outcome}</span>
                  </div>
                ))}
              </div>

              {/* Ideal for */}
              <div className="pt-4 border-t border-[rgba(255,255,255,0.04)]">
                <span className="text-xs text-[#555568] font-mono">Ideal for: </span>
                <span className="text-xs text-[#8888a0]">{service.idealFor}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
