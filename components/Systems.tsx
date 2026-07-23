"use client";

import { useState } from "react";

const systems = [
  {
    id: "hvac-receptionist",
    tag: "Home Services · Production",
    title: "AI Receptionist & Lead Recovery System",
    subtitle: "HVAC & Plumbing — US Market",
    description:
      "An always-on voice + SMS receptionist that answers missed calls, qualifies leads by urgency and job type, books appointments into Google Calendar, and escalates emergencies to the owner in under 60 seconds.",
    metrics: ["60s response time", "24/7 uptime", "$0 missed calls"],
    stack: ["Gemini 1.5 Flash API", "n8n Orchestrator", "Twilio Voice/SMS", "Google Sheets CRM", "Cal.com API"],
    gradient: "from-[rgba(79,142,247,0.15)] to-[rgba(79,142,247,0.02)]",
    accentColor: "#4f8ef7",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 5C3 3.9 3.9 3 5 3H7.5L9 7L7 8.5C7.8 10.2 9.8 12.2 11.5 13L13 11L17 12.5V15C17 16.1 16.1 17 15 17C8.4 17 3 11.6 3 5Z" stroke="#4f8ef7" strokeWidth="1.3" strokeLinejoin="round"/>
      </svg>
    ),
    payloadSnippet: `{
  "agent_id": "hvac_receptionist_v2",
  "inbound_call_sid": "CA8f912a74c10...",
  "caller_number": "+12145550192",
  "transcript": "Emergency: AC unit completely stopped working in Dallas",
  "gemini_analysis": {
    "intent": "EMERGENCY_REPAIR",
    "lead_score": "HOT",
    "urgency": 95,
    "parsed_zip": "75201"
  },
  "triggered_action": {
    "sms_dispatch": true,
    "owner_alert_sent": true,
    "cal_slot_reserved": "2026-07-24T08:00:00Z"
  }
}`,
    pythonSnippet: `import urllib.request
import json

def process_inbound_lead(transcript, api_key):
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key={api_key}"
    prompt = f"Analyze lead: {transcript}. Return JSON with intent, score, urgency."
    payload = json.dumps({"contents": [{"parts": [{"text": prompt}]}]}).encode('utf-8')
    req = urllib.request.Request(url, data=payload, headers={"Content-Type": "application/json"})
    with urllib.request.urlopen(req) as resp:
        return json.loads(resp.read().decode('utf-8'))
`,
  },
  {
    id: "outreach-engine",
    tag: "Sales Automation · Production",
    title: "Multi-Channel Outreach Engine",
    subtitle: "Lead Acquisition Pipeline",
    description:
      "An orchestrated outreach system that runs LinkedIn DMs, cold email sequences, and follow-up logic simultaneously. Qualifies responses with LLM scoring and routes hot leads directly to calendar booking.",
    metrics: ["50 daily touchpoints", "Auto-qualification", "Multi-channel"],
    stack: ["Gemini API", "n8n", "Gmail API", "LinkedIn API", "Google Sheets"],
    gradient: "from-[rgba(45,212,191,0.12)] to-[rgba(45,212,191,0.02)]",
    accentColor: "#2dd4bf",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M2 10L18 10M18 10L13 5M18 10L13 15" stroke="#2dd4bf" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="6" cy="10" r="2" stroke="#2dd4bf" strokeWidth="1.3"/>
      </svg>
    ),
    payloadSnippet: `{
  "campaign_id": "outreach_cold_email_v1",
  "target_prospect": "john.smith@dallashvac.com",
  "llm_personalization": "Noticed your Dallas service area has 150+ reviews...",
  "sequence_status": {
    "day_1_sent": true,
    "day_3_followup": "scheduled",
    "reply_detected": false
  }
}`,
    pythonSnippet: `# Cold Outreach Personalization Loop
prospect_data = {"company": "Dallas HVAC", "reviews": 150}
email_body = f"Hi {prospect_data['company']}, noticed your {prospect_data['reviews']} reviews..."
`,
  },
  {
    id: "crm-intelligence",
    tag: "Operations · Production",
    title: "CRM + Follow-up Intelligence Layer",
    subtitle: "Automated Pipeline Management",
    description:
      "A full CRM memory system that tracks every lead, updates status across stages, triggers timed follow-up sequences, and generates weekly performance reports — without manual data entry.",
    metrics: ["Zero manual entry", "7-stage pipeline", "Weekly reports"],
    stack: ["n8n", "Airtable", "Gemini API", "Gmail API", "Notion"],
    gradient: "from-[rgba(129,140,248,0.12)] to-[rgba(129,140,248,0.02)]",
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
    payloadSnippet: `{
  "pipeline_stage": "STAGE_3_QUALIFIED",
  "last_touchpoint": "2026-07-23T18:30:00Z",
  "automated_actions": ["LOG_SHEETS", "TRIGGER_SMS_REMINDER"],
  "health_status": "OPTIMAL"
}`,
    pythonSnippet: `# CRM Stage Auto-Advancement
if lead['score'] == 'HOT':
    update_crm(lead_id, stage="QUALIFIED", trigger_notification=True)
`,
  },
  {
    id: "paios",
    tag: "Master Architecture · Vision",
    title: "Personal AI Operating System (PAIOS)",
    subtitle: "Master Orchestrator — Layer 5",
    description:
      "A voice-controlled master agent that orchestrates 5 specialized sub-agents simultaneously: lead capture, outreach, CRM, invoicing, and daily briefings. One voice command. Full business intelligence in real time.",
    metrics: ["Voice-controlled", "5 concurrent agents", "Real-time briefings"],
    stack: ["LangGraph", "Gemini API", "Whisper STT", "ElevenLabs TTS", "n8n", "Custom Orchestrator"],
    gradient: "from-[rgba(232,197,71,0.12)] to-[rgba(232,197,71,0.02)]",
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
    payloadSnippet: `{
  "orchestrator_status": "ONLINE",
  "active_subagents": ["LeadCatcher", "OutreachEngine", "CRMUpdater", "InvoiceChaser", "DailyBriefing"],
  "voice_input_sample": "Summarize yesterday's revenue and send payment reminders",
  "execution_graph": "LangGraph_LinearChain_v5"
}`,
    pythonSnippet: `# Master Orchestrator Dispatcher
def handle_voice_command(audio_bytes):
    intent = whisper_and_gemini_parse(audio_bytes)
    return delegate_to_subagents(intent.target_agent, intent.params)
`,
  },
];

export default function Systems() {
  const [selectedSystem, setSelectedSystem] = useState<typeof systems[0] | null>(null);
  const [activeSnippetTab, setActiveSnippetTab] = useState<"payload" | "python">("payload");

  return (
    <section id="systems" className="relative px-6 py-28 border-t border-[rgba(255,255,255,0.04)]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-px h-4 bg-[#4f8ef7]" />
            <span className="text-xs font-mono text-[#4f8ef7] tracking-widest uppercase">Production Systems</span>
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
            }}>Move Real Revenue.</span>
          </h2>
          <p className="mt-4 text-[#8888a0] max-w-lg text-sm">
            Click any system below to inspect its live JSON payload, underlying code architecture, and operational stack.
          </p>
        </div>

        {/* Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {systems.map((system, i) => (
            <div
              key={system.id}
              onClick={() => setSelectedSystem(system)}
              className={`group relative rounded-2xl border border-[rgba(255,255,255,0.08)] bg-gradient-to-br ${system.gradient} p-6 hover:border-[rgba(255,255,255,0.2)] transition-all duration-400 cursor-pointer overflow-hidden ${
                i === 3 ? "md:col-span-2" : ""
              }`}
            >
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
              <h3 className="font-[var(--font-display)] font-semibold text-[#f0f0f5] text-xl mb-1 group-hover:text-white transition-colors">
                {system.title}
              </h3>
              <p className="text-xs text-[#555568] font-mono mb-4">{system.subtitle}</p>
              <p className="text-sm text-[#8888a0] leading-relaxed mb-6">{system.description}</p>

              {/* Metrics */}
              <div className="flex flex-wrap gap-2 mb-6">
                {system.metrics.map((m) => (
                  <span
                    key={m}
                    className="text-xs font-mono px-2.5 py-1 rounded-md border border-[rgba(255,255,255,0.08)] text-[#8888a0] bg-[rgba(0,0,0,0.3)]"
                  >
                    {m}
                  </span>
                ))}
              </div>

              {/* Action Hint */}
              <div className="flex items-center justify-between pt-4 border-t border-[rgba(255,255,255,0.06)] text-xs font-mono text-[#555568]">
                <span>Click to inspect code & architecture →</span>
                <span className="text-white group-hover:translate-x-1 transition-transform">🔍 Inspect</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DETAILED ARCHITECTURE MODAL */}
      {selectedSystem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-3xl rounded-2xl border border-[rgba(255,255,255,0.15)] bg-[#0a0a0f] p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <span
                  className="text-xs font-mono px-2.5 py-1 rounded-full border mb-2 inline-block"
                  style={{
                    color: selectedSystem.accentColor,
                    borderColor: `${selectedSystem.accentColor}30`,
                    backgroundColor: `${selectedSystem.accentColor}10`,
                  }}
                >
                  {selectedSystem.tag}
                </span>
                <h3 className="text-2xl font-bold font-[var(--font-display)] text-white">
                  {selectedSystem.title}
                </h3>
                <p className="text-xs text-[#8888a0] mt-1">{selectedSystem.subtitle}</p>
              </div>
              <button
                onClick={() => setSelectedSystem(null)}
                className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.08)] text-[#8888a0] hover:text-white flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            {/* Code / Payload Selector */}
            <div className="mb-4 flex gap-2 border-b border-[rgba(255,255,255,0.06)] pb-2">
              <button
                onClick={() => setActiveSnippetTab("payload")}
                className={`text-xs font-mono px-3 py-1.5 rounded-lg ${
                  activeSnippetTab === "payload"
                    ? "bg-[#4f8ef7] text-white"
                    : "text-[#8888a0] hover:text-white"
                }`}
              >
                JSON Payload Schema
              </button>
              <button
                onClick={() => setActiveSnippetTab("python")}
                className={`text-xs font-mono px-3 py-1.5 rounded-lg ${
                  activeSnippetTab === "python"
                    ? "bg-[#4f8ef7] text-white"
                    : "text-[#8888a0] hover:text-white"
                }`}
              >
                Python Integration Logic
              </button>
            </div>

            {/* Code Block */}
            <div className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#030305] p-4 mb-6 font-mono text-xs text-[#2dd4bf] overflow-x-auto">
              <pre>
                {activeSnippetTab === "payload"
                  ? selectedSystem.payloadSnippet
                  : selectedSystem.pythonSnippet}
              </pre>
            </div>

            {/* Stack Tags */}
            <div className="mb-6">
              <label className="text-xs font-mono text-[#555568] uppercase tracking-wider block mb-2">
                Tech Stack Components:
              </label>
              <div className="flex flex-wrap gap-2">
                {selectedSystem.stack.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-mono px-3 py-1 rounded-md border border-[rgba(255,255,255,0.1)] text-[#8888a0] bg-[rgba(255,255,255,0.02)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-[rgba(255,255,255,0.06)]">
              <button
                onClick={() => setSelectedSystem(null)}
                className="px-5 py-2 rounded-xl text-xs font-mono text-[#8888a0] border border-[rgba(255,255,255,0.1)] hover:text-white"
              >
                Close Inspection
              </button>
              <a
                href="#contact"
                onClick={() => setSelectedSystem(null)}
                className="px-5 py-2 rounded-xl text-xs font-mono font-bold text-white bg-[#4f8ef7] hover:bg-[#3b72d9] transition-all"
              >
                Request Custom Architecture →
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
