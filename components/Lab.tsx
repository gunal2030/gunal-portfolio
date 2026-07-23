"use client";

const agents = [
  {
    id: "voice-agent",
    title: "Voice Receptionist Agent",
    status: "Active",
    statusColor: "#2dd4bf",
    description: "Handles inbound calls, qualifies leads by urgency and job type, and routes to booking or human escalation.",
    input: "Missed call / voicemail",
    output: "SMS reply + booked slot + owner alert",
    businessValue: "Zero leads lost after hours",
    architecture: `CALL → Whisper STT → Gemini classify
  → urgent? → SMS owner
  → routine? → Cal.com booking link
  → LOG → Google Sheets`,
  },
  {
    id: "lead-qual",
    title: "Lead Qualification Agent",
    status: "Active",
    statusColor: "#2dd4bf",
    description: "Scores every inbound web lead as HOT, WARM, or COLD using LLM reasoning and sends personalized instant replies.",
    input: "Web form submission",
    output: "JSON score + personalized email reply",
    businessValue: "5x faster response than human",
    architecture: `FORM → n8n webhook → Gemini prompt
  → score: HOT/WARM/COLD
  → draft reply → Gmail send
  → update CRM status`,
  },
  {
    id: "followup-agent",
    title: "Follow-up Sequence Agent",
    status: "Active",
    statusColor: "#2dd4bf",
    description: "Monitors CRM for non-responders and triggers timed, context-aware follow-up messages across email and SMS.",
    input: "CRM: lead status = 'contacted, no reply'",
    output: "Day 1/3/7 follow-up messages",
    businessValue: "30% more booked calls from cold leads",
    architecture: `CRON trigger → query Sheets
  → filter: no reply > 24hrs
  → Gemini: draft follow-up
  → Gmail/Twilio send → update status`,
  },
  {
    id: "crm-memory",
    title: "CRM Memory Agent",
    status: "In Build",
    statusColor: "#e8c547",
    description: "Logs every interaction automatically, maintains full contact history, and flags leads needing attention.",
    input: "Any agent event",
    output: "Structured CRM entry + status update",
    businessValue: "Zero manual data entry forever",
    architecture: `ANY event → n8n router
  → parse contact data
  → Sheets: upsert row
  → tag: stage/priority/last_touch`,
  },
  {
    id: "briefing-agent",
    title: "Daily Briefing Agent",
    status: "In Build",
    statusColor: "#e8c547",
    description: "Every morning at 9AM, reads the full CRM state and delivers an owner briefing via WhatsApp or email.",
    input: "Daily CRON at 09:00",
    output: "WhatsApp/email: leads, bookings, actions",
    businessValue: "Owner always knows what happened overnight",
    architecture: `CRON 09:00 → fetch Sheets data
  → Gemini: summarize + prioritize
  → format briefing
  → WhatsApp/Gmail send`,
  },
  {
    id: "master-orchestrator",
    title: "Master Orchestrator",
    status: "Concept",
    statusColor: "#818cf8",
    description: "The control plane. A voice-activated agent that receives natural language commands and delegates to specialized sub-agents.",
    input: "Voice command (\"What happened with leads yesterday?\")",
    output: "Spoken briefing + triggered agent actions",
    businessValue: "One voice command runs an entire business function",
    architecture: `VOICE → Whisper STT → Gemini intent classify
  → route to: voice / qual / followup / crm / brief
  → aggregate results → ElevenLabs TTS → speak`,
  },
];

export default function Lab() {
  return (
    <section id="lab" className="relative px-6 py-28 border-t border-[rgba(255,255,255,0.04)]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-px h-4 bg-[#2dd4bf]" />
            <span className="text-xs font-mono text-[#2dd4bf] tracking-widest uppercase">Systems Lab</span>
          </div>
          <h2
            className="font-[var(--font-display)] font-bold text-[#f0f0f5] leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Active Agents &
            <br />
            <span style={{
              background: "linear-gradient(135deg, #2dd4bf, #4f8ef7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>Architecture Modules.</span>
          </h2>
          <p className="mt-4 text-[#8888a0] max-w-lg">
            Each agent has a defined input, output, and measurable business value.
            This is the R&D layer of the operating system.
          </p>
        </div>

        {/* Agent Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="group relative rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(12,12,16,0.6)] p-5 hover:border-[rgba(255,255,255,0.12)] hover:bg-[rgba(16,16,22,0.8)] transition-all duration-400"
            >
              {/* Status */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1.5">
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      backgroundColor: agent.statusColor,
                      boxShadow: `0 0 6px ${agent.statusColor}`,
                    }}
                  />
                  <span
                    className="text-xs font-mono"
                    style={{ color: agent.statusColor }}
                  >
                    {agent.status}
                  </span>
                </div>
                <span className="text-xs font-mono text-[#333345] uppercase tracking-wider">
                  {String(agents.indexOf(agent) + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-[var(--font-display)] font-semibold text-[#f0f0f5] text-base mb-2">
                {agent.title}
              </h3>
              <p className="text-xs text-[#8888a0] leading-relaxed mb-4">
                {agent.description}
              </p>

              {/* I/O */}
              <div className="space-y-2 mb-4 border border-[rgba(255,255,255,0.04)] rounded-lg p-3 bg-[rgba(255,255,255,0.02)]">
                <div className="flex gap-2">
                  <span className="text-xs font-mono text-[#555568] w-12 shrink-0">IN</span>
                  <span className="text-xs text-[#8888a0]">{agent.input}</span>
                </div>
                <div className="w-full h-px bg-[rgba(255,255,255,0.04)]" />
                <div className="flex gap-2">
                  <span className="text-xs font-mono text-[#555568] w-12 shrink-0">OUT</span>
                  <span className="text-xs text-[#8888a0]">{agent.output}</span>
                </div>
              </div>

              {/* Architecture */}
              <div className="rounded-lg bg-[rgba(0,0,0,0.4)] p-3 border border-[rgba(255,255,255,0.04)] mb-4">
                <pre className="text-[10px] font-mono text-[#555568] leading-relaxed whitespace-pre-wrap">
                  {agent.architecture}
                </pre>
              </div>

              {/* Business value */}
              <div className="flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6L5 9L10 3" stroke="#2dd4bf" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-xs text-[#555568]">{agent.businessValue}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
