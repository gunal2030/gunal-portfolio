"use client";

const systems = [
  {
    id: "hvac-receptionist",
    tag: "Home Services · Live",
    title: "AI Receptionist & Lead Recovery",
    subtitle: "HVAC & Plumbing — US Market",
    description:
      "An always-on voice + SMS receptionist that answers missed calls, qualifies leads by urgency and job type, books appointments into Google Calendar, and escalates emergencies to the owner in under 60 seconds.",
    metrics: ["60s response time", "24/7 uptime", "$0 missed calls"],
    stack: ["Gemini API", "n8n", "Twilio", "Google Sheets", "Cal.com"],
    gradient: "from-[rgba(79,142,247,0.12)] to-[rgba(79,142,247,0.03)]",
    accentColor: "#4f8ef7",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 5C3 3.9 3.9 3 5 3H7.5L9 7L7 8.5C7.8 10.2 9.8 12.2 11.5 13L13 11L17 12.5V15C17 16.1 16.1 17 15 17C8.4 17 3 11.6 3 5Z" stroke="#4f8ef7" strokeWidth="1.3" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "outreach-engine",
    tag: "Sales Automation · Template",
    title: "Sales Outreach Automation Engine",
    subtitle: "Multi-Channel Lead Acquisition",
    description:
      "An orchestrated outreach system that runs LinkedIn DMs, cold email sequences, and follow-up logic simultaneously. Qualifies responses with LLM scoring and routes hot leads directly to calendar booking.",
    metrics: ["50 daily touchpoints", "Auto-qualification", "Multi-channel"],
    stack: ["Gemini API", "n8n", "Gmail API", "LinkedIn API", "Google Sheets"],
    gradient: "from-[rgba(45,212,191,0.1)] to-[rgba(45,212,191,0.02)]",
    accentColor: "#2dd4bf",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M2 10L18 10M18 10L13 5M18 10L13 15" stroke="#2dd4bf" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="6" cy="10" r="2" stroke="#2dd4bf" strokeWidth="1.3"/>
      </svg>
    ),
  },
  {
    id: "crm-intelligence",
    tag: "Operations · Blueprint",
    title: "CRM + Follow-up Intelligence Layer",
    subtitle: "Automated Pipeline Management",
    description:
      "A full CRM memory system that tracks every lead, updates status across stages, triggers timed follow-up sequences, and generates weekly performance reports — without manual data entry.",
    metrics: ["Zero manual entry", "7-stage pipeline", "Weekly reports"],
    stack: ["n8n", "Airtable", "Gemini API", "Gmail API", "Notion"],
    gradient: "from-[rgba(129,140,248,0.1)] to-[rgba(129,140,248,0.02)]",
    accentColor: "#818cf8",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="3" width="6" height="4" rx="1" stroke="#818cf8" strokeWidth="1.3"/>
        <rect x="11" y="3" width="6" height="4" rx="1" stroke="#818cf8" strokeWidth="1.3"/>
        <rect x="3" y="13" width="6" height="4" rx="1" stroke="#818cf8" strokeWidth="1.3"/>
        <rect x="11" y="13" width="6" height="4" rx="1" stroke="#818cf8" strokeWidth="1.3"/>
        <path d="M6 7V10H14V7M10 10V13" stroke="#818cf8" strokeWidth="1.3" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "paios",
    tag: "Vision · In Development",
    title: "Personal AI Operating System",
    subtitle: "Master Orchestrator — Layer 5",
    description:
      "A voice-controlled master agent that orchestrates 5 specialized sub-agents simultaneously: lead capture, outreach, CRM, invoicing, and daily briefings. One voice command. Full business intelligence in real time.",
    metrics: ["Voice-controlled", "5 concurrent agents", "Real-time briefings"],
    stack: ["LangGraph", "Gemini API", "Whisper", "ElevenLabs", "n8n", "Custom Orchestrator"],
    gradient: "from-[rgba(232,197,71,0.1)] to-[rgba(232,197,71,0.02)]",
    accentColor: "#e8c547",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="3" stroke="#e8c547" strokeWidth="1.3"/>
        <circle cx="10" cy="3" r="1.5" stroke="#e8c547" strokeWidth="1.3"/>
        <circle cx="10" cy="17" r="1.5" stroke="#e8c547" strokeWidth="1.3"/>
        <circle cx="3" cy="10" r="1.5" stroke="#e8c547" strokeWidth="1.3"/>
        <circle cx="17" cy="10" r="1.5" stroke="#e8c547" strokeWidth="1.3"/>
        <path d="M10 6.5V7M10 13V13.5M6.5 10H7M13 10H13.5" stroke="#e8c547" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function Systems() {
  return (
    <section id="systems" className="relative px-6 py-28">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-px h-4 bg-[#4f8ef7]" />
            <span className="text-xs font-mono text-[#4f8ef7] tracking-widest uppercase">Selected Systems</span>
          </div>
          <h2
            className="font-[var(--font-display)] font-bold text-[#f0f0f5] leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            AI Systems Built to
            <br />
            <span style={{
              background: "linear-gradient(135deg, #4f8ef7, #818cf8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>Move Revenue.</span>
          </h2>
          <p className="mt-4 text-[#8888a0] max-w-lg">
            Not demos. Not concepts. Systems designed around real operational problems
            with measurable business outcomes.
          </p>
        </div>

        {/* Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {systems.map((system, i) => (
            <div
              key={system.id}
              className={`group relative rounded-2xl border border-[rgba(255,255,255,0.06)] bg-gradient-to-br ${system.gradient} p-6 hover:border-[rgba(255,255,255,0.12)] transition-all duration-500 cursor-pointer overflow-hidden ${i === 3 ? "md:col-span-2" : ""}`}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{ boxShadow: `inset 0 0 60px ${system.accentColor}08` }}
              />

              {/* Tag */}
              <div className="flex items-center justify-between mb-5">
                <span
                  className="text-xs font-mono px-2.5 py-1 rounded-full border"
                  style={{
                    color: system.accentColor,
                    borderColor: `${system.accentColor}30`,
                    backgroundColor: `${system.accentColor}10`,
                  }}
                >
                  {system.tag}
                </span>
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center border"
                  style={{ borderColor: `${system.accentColor}20`, backgroundColor: `${system.accentColor}10` }}
                >
                  {system.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-[var(--font-display)] font-semibold text-[#f0f0f5] text-xl mb-1">
                {system.title}
              </h3>
              <p className="text-sm text-[#555568] mb-4">{system.subtitle}</p>
              <p className="text-sm text-[#8888a0] leading-relaxed mb-6">{system.description}</p>

              {/* Metrics */}
              <div className="flex flex-wrap gap-2 mb-6">
                {system.metrics.map((m) => (
                  <span
                    key={m}
                    className="text-xs px-2.5 py-1 rounded-md border border-[rgba(255,255,255,0.08)] text-[#8888a0]"
                  >
                    {m}
                  </span>
                ))}
              </div>

              {/* Stack */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs text-[#555568] font-mono">Stack:</span>
                {system.stack.map((s) => (
                  <span key={s} className="text-xs font-mono text-[#555568]">
                    {s}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M9 4L13 8L9 12" stroke={system.accentColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
