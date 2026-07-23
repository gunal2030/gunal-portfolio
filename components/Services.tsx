"use client";

const services = [
  {
    title: "AI Receptionist & Emergency Dispatch",
    price: "From $1,500 Setup",
    recurring: "$500/mo retainer",
    description: "Always-on voice & SMS receptionist for US trade businesses (HVAC, Plumbing, Roofing). Captures after-hours calls, categorizes urgency, dispatches SMS to technicians, and syncs directly into ServiceTitan or Housecall Pro.",
    outcomes: [
      "Sub-60s speed-to-lead response, 24/7",
      "Emergency job creation in ServiceTitan/Housecall Pro",
      "Twilio SMS alert to on-call technician",
      "Weekly revenue audit log",
    ],
    idealFor: "HVAC, Plumbing, Electrical, Roofing Contractors",
    accentColor: "#4f8ef7",
  },
  {
    title: "Lead Recovery & Multi-Channel Sequence",
    price: "From $1,200 Setup",
    recurring: "$400/mo retainer",
    description: "Automated sequence engine that re-engages non-responding leads across SMS, email, and LinkedIn over 7 days with context-aware LLM follow-ups.",
    outcomes: [
      "Instant personalized response to new leads",
      "Day 1, 3, 7 automated follow-up logic",
      "HubSpot / Salesforce pipeline status update",
      "Direct calendar booking integration",
    ],
    idealFor: "B2B Agencies, Consultants, SaaS, Growth Teams",
    accentColor: "#2dd4bf",
  },
  {
    title: "CRM Memory & Pipeline Orchestration",
    price: "From $1,800 Setup",
    recurring: "$450/mo retainer",
    description: "End-to-end sales pipeline memory layer built on n8n and PostgreSQL. Eliminates manual CRM data entry and automatically advances deals through 7 stages.",
    outcomes: [
      "Zero manual data entry for reps",
      "7-stage automated deal tracking",
      "Stale lead detection & Slack alert triggers",
      "Executive monthly KPI summary",
    ],
    idealFor: "Service Companies, Mid-market Sales Teams, Law Firms",
    accentColor: "#818cf8",
  },
  {
    title: "AI System Architecture Audit",
    price: "From $800 / Session",
    recurring: "Strategy & Blueprint",
    description: "A comprehensive 1-on-1 operational audit to map your manual workflows, identify revenue leaks, and design a custom AI system blueprint before building.",
    outcomes: [
      "Workflow leak audit & bottleneck analysis",
      "Custom system architecture diagram (Mermaid/SVG)",
      "Tool selection (ServiceTitan, HubSpot, Vapi, n8n)",
      "30-day implementation roadmap",
    ],
    idealFor: "Founders, CTOs, Operators, Growth Executives",
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
            <span className="text-xs font-mono text-[#e8c547] tracking-widest uppercase">Productized Services</span>
          </div>
          <h2
            className="font-[var(--font-display)] font-bold text-[#f0f0f5] leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Engineering Deliverables &
            <br />
            <span style={{
              background: "linear-gradient(135deg, #e8c547, #f5d87a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>Retainer Architecture.</span>
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
