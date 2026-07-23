"use client";

import { useState } from "react";

const systems = [
  {
    id: "hvac-receptionist",
    tag: "Home Services · Production Spec",
    title: "AI Receptionist & Emergency Dispatch System",
    subtitle: "ServiceTitan & Housecall Pro Integration",
    description:
      "An always-on voice + SMS receptionist engineered for US trade businesses (HVAC, Plumbing, Electrical). Answers after-hours calls, categorizes emergency vs. routine jobs, dispatches SMS alerts to on-call technicians, and books directly into ServiceTitan or Housecall Pro.",
    metrics: ["45s avg. response", "Zero missed calls", "ServiceTitan API"],
    stack: ["Vapi.ai / Retell", "Gemini 1.5 Flash", "Twilio Voice/SMS", "n8n Cloud", "ServiceTitan API", "Housecall Pro", "PostgreSQL"],
    gradient: "from-[rgba(79,142,247,0.15)] to-[rgba(79,142,247,0.02)]",
    accentColor: "#4f8ef7",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 5C3 3.9 3.9 3 5 3H7.5L9 7L7 8.5C7.8 10.2 9.8 12.2 11.5 13L13 11L17 12.5V15C17 16.1 16.1 17 15 17C8.4 17 3 11.6 3 5Z" stroke="#4f8ef7" strokeWidth="1.3" strokeLinejoin="round"/>
      </svg>
    ),
    pipelineFlow: "Inbound Call → Twilio / Vapi STT → Gemini 1.5 Structured Output → n8n Rule Engine → ServiceTitan API / Housecall Pro → SMS Dispatch → Audit Log",
    systemPrompt: `SYSTEM_PROMPT = """
You are an AI Dispatch Assistant for a licensed US HVAC & Plumbing service contractor.
Rules:
1. Extract: Customer Name, Callback Number, Service Location (ZIP), and Problem Description.
2. Urgency Classification:
   - EMERGENCY: Active water leaks, total A/C failure in >90°F heat, gas odor.
   - ROUTINE: Maintenance quotes, non-urgent inspections, general inquiries.
3. If EMERGENCY: Instantly flag priority=CRITICAL and trigger emergency technician dispatch payload.
4. Output JSON strictly adhering to schema. No conversational filler outside JSON payload.
"""`,
    routingLogic: `def route_inbound_lead(payload):
    if payload['urgency'] == 'EMERGENCY':
        # Trigger ServiceTitan Emergency Job Creation API
        job_id = servicetitan.create_emergency_job(payload)
        # Dispatch SMS via Twilio to On-Call Technician
        twilio.send_sms(to=ON_CALL_TECH_PHONE, body=f"CRITICAL DISPATCH: Job #{job_id} at {payload['address']}")
        return {"status": "DISPATCHED", "priority": "CRITICAL", "job_id": job_id}
    else:
        # Route to standard booking queue
        return hubspot.create_deal(payload, stage="QUALIFIED_LEAD")`,
    anonymizedTranscript: `[02:14:02 AM] INBOUND CALL (+1 214-555-0192): "Hi, my main A/C compressor just failed in Dallas, it's 94 degrees inside!"
[02:14:03 AM] GEMINI PARSE: intent="EMERGENCY_REPAIR" | urgency=98 | parsed_zip="75201"
[02:14:04 AM] SERVICETITAN API: Emergency dispatch ticket #ST-89201 created.
[02:14:05 AM] TWILIO DISPATCH: Sent SMS alert to On-Call Tech (+1 214-555-9910). Status 200.`,
    payloadSnippet: `{
  "event_type": "inbound_call_completed",
  "call_sid": "CA8f912a74c1049a21",
  "contractor_id": "us_hvac_dallas_01",
  "extracted_data": {
    "customer_name": "Mark Miller",
    "phone": "+12145550192",
    "zip_code": "75201",
    "service_category": "HVAC_REPAIR",
    "urgency": "EMERGENCY"
  },
  "crm_sync": {
    "provider": "ServiceTitan",
    "job_id": "ST-89201",
    "status": "DISPATCHED"
  }
}`,
    pythonSnippet: `import os, json, requests

def servicetitan_emergency_dispatch(lead_data):
    endpoint = f"{os.getenv('SERVICETITAN_API_URL')}/jpm/v2/tenant/{os.getenv('TENANT_ID')}/jobs"
    headers = {
        "Authorization": f"Bearer {os.getenv('SERVICETITAN_TOKEN')}",
        "Content-Type": "application/json"
    }
    payload = {
        "customerId": lead_data["customer_id"],
        "jobTypeId": 1042, # Emergency Repair
        "priority": "High",
        "summary": lead_data["problem_description"]
    }
    response = requests.post(endpoint, json=payload, headers=headers, timeout=10)
    return response.json()
`,
  },
  {
    id: "outreach-engine",
    tag: "Sales Automation · Production Spec",
    title: "Multi-Channel B2B Outreach Pipeline",
    subtitle: "HubSpot & Salesforce API Integration",
    description:
      "An orchestrated multi-channel outreach engine connecting LinkedIn API, Gmail/Outlook API, and HubSpot CRM. Leverages LLM reasoning to personalize prospect messaging based on company size and market focus, then routes qualified replies to sales reps.",
    metrics: ["Multi-channel", "HubSpot Sync", "Auto-Qualification"],
    stack: ["Gemini 1.5 Flash", "n8n Cloud", "HubSpot API", "Salesforce API", "Sendgrid API", "PostgreSQL"],
    gradient: "from-[rgba(45,212,191,0.12)] to-[rgba(45,212,191,0.02)]",
    accentColor: "#2dd4bf",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M2 10L18 10M18 10L13 5M18 10L13 15" stroke="#2dd4bf" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="6" cy="10" r="2" stroke="#2dd4bf" strokeWidth="1.3"/>
      </svg>
    ),
    pipelineFlow: "Prospect Ingest → LLM Personalization → SendGrid / LinkedIn API → Reply Monitor → Intent Scoring → HubSpot Deal Creation",
    systemPrompt: `SYSTEM_PROMPT = """
Analyze incoming prospect email reply.
Categorize intent into:
1. DEMO_REQUESTED: Wants to schedule a call or demo.
2. PRICE_INQUIRY: Asks about pricing or contract terms.
3. NOT_INTERESTED: Unsubscribe or decline.
4. OUT_OF_OFFICE: OOO auto-responder.
If DEMO_REQUESTED: Extract proposed dates and generate instant Calendly invite response.
"""`,
    routingLogic: `if intent == 'DEMO_REQUESTED':
    hubspot.update_deal_stage(deal_id, "DEMO_SCHEDULED")
    send_calendar_invite(prospect_email)
elif intent == 'NOT_INTERESTED':
    hubspot.mark_unsubscribed(prospect_email)`,
    anonymizedTranscript: `[09:12:00 AM] OUTBOUND EMAIL: Sent personalized sequence to VP Ops at Apex Services.
[01:45:10 PM] INBOUND REPLY: "Sounds interesting. Let's schedule 15 mins this Thursday."
[01:45:12 PM] LLM PARSE: intent="DEMO_REQUESTED" | confidence=99%
[01:45:13 PM] HUBSPOT SYNC: Deal stage updated to 'Demo Scheduled'. Invites dispatched.`,
    payloadSnippet: `{
  "prospect_id": "hs_prospect_90812",
  "intent_classified": "DEMO_REQUESTED",
  "confidence_score": 0.99,
  "crm_update": {
    "pipeline": "b2b_sales",
    "stage": "DEMO_SCHEDULED",
    "owner": "sales_rep_01"
  }
}`,
    pythonSnippet: `# HubSpot Deal Stage Updater
def update_hubspot_stage(deal_id, new_stage_id):
    url = f"https://api.hubapi.com/crm/v3/objects/deals/{deal_id}"
    headers = {"Authorization": f"Bearer {os.getenv('HUBSPOT_API_KEY')}"}
    data = {"properties": {"dealstage": new_stage_id}}
    return requests.patch(url, json=data, headers=headers).json()
`,
  },
  {
    id: "crm-intelligence",
    tag: "Operations · Production Spec",
    title: "CRM Memory & Automated Pipeline Layer",
    subtitle: "Airtable, PostgreSQL & Webhook Integration",
    description:
      "A complete pipeline orchestration layer that logs every prospect interaction automatically, tracks status across 7 sales stages, triggers timed follow-up sequences for non-responders, and generates weekly revenue performance summaries.",
    metrics: ["Zero manual entry", "7-Stage Pipeline", "Automated Logs"],
    stack: ["n8n Cloud", "PostgreSQL", "HubSpot API", "Airtable API", "Twilio API", "Slack API"],
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
    pipelineFlow: "CRM Event → Webhook Trigger → n8n Rule Engine → Database Upsert → Timed Follow-up Scheduler → Slack Alert",
    systemPrompt: "Monitor pipeline lead freshness. Flag leads un-contacted for >24 hours and generate context-aware re-engagement prompts.",
    routingLogic: "IF days_since_last_contact > 1 AND stage == 'CONTACTED': Trigger Day-1 follow-up email via SendGrid",
    anonymizedTranscript: "[SYSTEM CRON 09:00 AM] Scanned 120 pipeline records. 4 non-responders identified. Triggered Day-3 automated follow-ups.",
    payloadSnippet: `{
  "audit_event": "pipeline_staleness_scan",
  "records_scanned": 120,
  "stale_leads_flagged": 4,
  "automated_actions_triggered": ["SENDGRID_FOLLOWUP_DAY3", "SLACK_NOTIFY_OWNER"]
}`,
    pythonSnippet: `# PostgreSQL Lead Audit Query
def fetch_stale_leads(db_cursor):
    query = """
    SELECT id, email, last_contacted_at FROM leads 
    WHERE stage = 'CONTACTED' AND last_contacted_at < NOW() - INTERVAL '24 hours';
    """
    db_cursor.execute(query)
    return db_cursor.fetchall()
`,
  },
  {
    id: "paios",
    tag: "Architecture Framework · R&D Specification",
    title: "Personal AI Operating System (PAIOS)",
    subtitle: "Master Orchestration & Control Plane",
    description:
      "A voice-controlled orchestration spec designed to govern specialized sub-agents across lead capture, CRM pipeline management, invoice reminders, and executive briefings via a unified natural language interface.",
    metrics: ["LangGraph Engine", "5 Worker Agents", "Unified Control"],
    stack: ["LangGraph", "Gemini 1.5 Pro", "Whisper STT", "ElevenLabs TTS", "n8n Orchestrator", "FastAPI"],
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
    pipelineFlow: "Voice Command → Whisper STT → Intent Dispatcher → Parallel Sub-Agent Execution → Result Synthesizer → Audio Response",
    systemPrompt: "You are a master orchestrator. Classify user voice commands into target sub-agent routing parameters.",
    routingLogic: "route_to_subagent(intent) -> [LeadCatcher, OutreachEngine, CRMUpdater, FinanceAgent, ExecutiveBriefing]",
    anonymizedTranscript: "[09:00 AM] USER: 'Give me yesterday's revenue and lead count.' [09:00 AM] PAIOS: 'Yesterday 3 emergency calls were captured and logged to ServiceTitan, generating $4,200 in booked revenue.'",
    payloadSnippet: `{
  "orchestrator_state": "ACTIVE",
  "active_nodes": ["STT_Whisper", "LLM_Dispatcher", "Worker_ServiceTitan", "TTS_ElevenLabs"],
  "execution_graph": "LangGraph_DAG_v2"
}`,
    pythonSnippet: `# LangGraph Master Orchestrator Router
from langgraph.graph import StateGraph

def route_voice_intent(state):
    intent = state['intent']
    if intent == 'CHECK_LEADS':
        return "lead_agent"
    elif intent == 'FINANCE_SUMMARY':
        return "finance_agent"
    return "general_briefing"
`,
  },
];

export default function Systems() {
  const [selectedSystem, setSelectedSystem] = useState<typeof systems[0] | null>(null);
  const [activeSnippetTab, setActiveSnippetTab] = useState<"architecture" | "prompt" | "routing" | "transcript" | "payload" | "python">("architecture");

  return (
    <section id="systems" className="relative px-6 py-28 border-t border-[rgba(255,255,255,0.04)]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-px h-4 bg-[#4f8ef7]" />
            <span className="text-xs font-mono text-[#4f8ef7] tracking-widest uppercase">System Architectures</span>
          </div>
          <h2
            className="font-[var(--font-display)] font-bold text-[#f0f0f5] leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Production Engineering &
            <br />
            <span style={{
              background: "linear-gradient(135deg, #4f8ef7, #818cf8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>System Logic Teardowns.</span>
          </h2>
          <p className="mt-4 text-[#8888a0] max-w-lg text-sm">
            Click any system below to inspect its pipeline architecture, system prompts, API routing logic, anonymized call logs, and Python code payloads.
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
                <span>Inspect prompts, pipeline & code →</span>
                <span className="text-white group-hover:translate-x-1 transition-transform">🔍 Inspect Teardown</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* COMPREHENSIVE ARCHITECTURE TEARDOWN MODAL */}
      {selectedSystem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-4xl rounded-2xl border border-[rgba(255,255,255,0.15)] bg-[#0a0a0f] p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
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

            {/* Pipeline Flow Visualization */}
            <div className="mb-6 p-4 rounded-xl border border-[rgba(79,142,247,0.3)] bg-[rgba(79,142,247,0.05)]">
              <label className="text-[10px] font-mono text-[#4f8ef7] uppercase tracking-wider block mb-2">
                System Data Flow Pipeline:
              </label>
              <div className="text-xs font-mono text-white leading-relaxed font-bold">
                {selectedSystem.pipelineFlow}
              </div>
            </div>

            {/* Tab Selector */}
            <div className="mb-4 flex flex-wrap gap-2 border-b border-[rgba(255,255,255,0.06)] pb-2">
              {[
                { id: "architecture", label: "Pipeline Flow" },
                { id: "prompt", label: "System Prompt" },
                { id: "routing", label: "Routing Logic" },
                { id: "transcript", label: "Anonymized Transcript" },
                { id: "payload", label: "JSON Payload" },
                { id: "python", label: "Python Logic" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSnippetTab(tab.id as any)}
                  className={`text-xs font-mono px-3 py-1.5 rounded-lg transition-all ${
                    activeSnippetTab === tab.id
                      ? "bg-[#4f8ef7] text-white font-semibold"
                      : "text-[#8888a0] hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content Display Area */}
            <div className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#030305] p-4 mb-6 font-mono text-xs text-[#2dd4bf] overflow-x-auto min-h-[160px]">
              {activeSnippetTab === "architecture" && (
                <div className="text-white space-y-2">
                  <p className="text-[#8888a0] text-xs">Full end-to-end data packet flow:</p>
                  <pre className="text-[#2dd4bf] text-xs leading-relaxed">{selectedSystem.pipelineFlow}</pre>
                </div>
              )}
              {activeSnippetTab === "prompt" && (
                <pre className="text-amber-300 text-xs leading-relaxed">{selectedSystem.systemPrompt}</pre>
              )}
              {activeSnippetTab === "routing" && (
                <pre className="text-indigo-300 text-xs leading-relaxed">{selectedSystem.routingLogic}</pre>
              )}
              {activeSnippetTab === "transcript" && (
                <pre className="text-teal-300 text-xs leading-relaxed">{selectedSystem.anonymizedTranscript}</pre>
              )}
              {activeSnippetTab === "payload" && (
                <pre className="text-sky-300 text-xs leading-relaxed">{selectedSystem.payloadSnippet}</pre>
              )}
              {activeSnippetTab === "python" && (
                <pre className="text-emerald-300 text-xs leading-relaxed">{selectedSystem.pythonSnippet}</pre>
              )}
            </div>

            {/* Stack Tags */}
            <div className="mb-6">
              <label className="text-xs font-mono text-[#555568] uppercase tracking-wider block mb-2">
                Orchestration Stack & API Integrations:
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
                Close Teardown
              </button>
              <a
                href="https://cal.com/gunal-krish-fmtsqv"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-xl text-xs font-mono font-bold text-white bg-[#4f8ef7] hover:bg-[#3b72d9] transition-all flex items-center gap-2"
              >
                Book Architecture Audit →
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
