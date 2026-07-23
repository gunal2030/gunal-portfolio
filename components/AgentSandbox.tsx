"use client";

import { useState } from "react";

const scenarios = [
  {
    label: "🚨 Emergency HVAC",
    text: "My AC unit completely died and it's 95°F in Dallas. Need someone out here tonight if possible! - Mark (Dallas, TX 75201)",
    intent: "EMERGENCY_REPAIR",
    score: "HOT",
    confidence: 98,
    action: "IMMEDIATE_SMS_OWNER + CALENDAR_BOOK",
  },
  {
    label: "📅 Routine Maintenance",
    text: "Hi, looking to get a price estimate for annual plumbing inspection next Tuesday afternoon.",
    intent: "ROUTINE_INQUIRY",
    score: "WARM",
    confidence: 85,
    action: "SEND_CALENDLY_LINK",
  },
  {
    label: "💰 Price Shopping",
    text: "What is your hourly rate for installing a new water heater?",
    intent: "GENERAL_QUOTE",
    score: "COLD",
    confidence: 72,
    action: "SEND_PRICING_GUIDE_EMAIL",
  },
];

export default function AgentSandbox() {
  const [activeTab, setActiveTab] = useState<"receptionist" | "qualifier" | "nodeGraph">("receptionist");
  const [selectedScenario, setSelectedScenario] = useState(scenarios[0]);
  const [customText, setCustomText] = useState(scenarios[0].text);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simStep, setSimStep] = useState(0);
  const [simLogs, setSimLogs] = useState<string[]>([]);

  // Qualifier state
  const [leadBudget, setLeadBudget] = useState(1500);
  const [leadUrgency, setLeadUrgency] = useState(80);

  const runSimulation = () => {
    setIsSimulating(true);
    setSimStep(0);
    setSimLogs([]);

    const steps = [
      `[00:00.02] ⚡ WEBHOOK_INGEST: Received lead payload (${customText.length} bytes)`,
      `[00:00.15] 🧠 GEMINI_LLM_PARSE: Extracting intent, location, urgency...`,
      `[00:00.42] 📊 CLASSIFICATION: Intent='${selectedScenario.intent}' | Score='${selectedScenario.score}' (${selectedScenario.confidence}% confidence)`,
      selectedScenario.intent.includes("EMERGENCY")
        ? `[00:00.68] 🚨 CRITICAL_RULE_MATCH: Emergency detected! Dispatching SMS alert to owner (+1 214-555-0192)...`
        : `[00:00.68] 📩 ROUTINE_RULE_MATCH: Generating personalized email & booking link...`,
      `[00:00.89] 💾 CRM_SYNC: Logged to Google Sheets database (Row #148 updated)`,
      `[00:01.05] ✅ EXECUTION_COMPLETE: Response time 1.05 seconds. Status 200 OK.`,
    ];

    steps.forEach((log, idx) => {
      setTimeout(() => {
        setSimStep(idx + 1);
        setSimLogs((prev) => [...prev, log]);
        if (idx === steps.length - 1) setIsSimulating(false);
      }, (idx + 1) * 400);
    });
  };

  return (
    <section className="relative px-6 py-28 border-t border-[rgba(255,255,255,0.06)] bg-[#07070a]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-[rgba(45,212,191,0.2)] bg-[rgba(45,212,191,0.05)]">
            <div className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf] animate-ping" />
            <span className="text-xs font-mono text-[#2dd4bf] tracking-widest uppercase">
              Interactive Systems Sandbox
            </span>
          </div>
          <h2
            className="font-[var(--font-display)] font-bold text-[#f0f0f5] leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
          >
            Test Live AI Agent Logic
            <br />
            <span style={{
              background: "linear-gradient(135deg, #2dd4bf, #4f8ef7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Right in Your Browser.
            </span>
          </h2>
          <p className="mt-4 text-[#8888a0] text-sm leading-relaxed">
            Click any scenario below to trigger our client-side AI execution simulator and inspect real-time log outputs, classification scoring, and automated decision rules.
          </p>
        </div>

        {/* Console Container */}
        <div className="rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[rgba(12,12,18,0.9)] backdrop-blur-2xl overflow-hidden shadow-2xl">
          {/* Console Header / Tabs */}
          <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.06)] bg-[rgba(5,5,8,0.8)] px-6 py-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <span className="text-xs font-mono text-[#555568] ml-2">agent_runtime_v2.6.4</span>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-1 bg-[rgba(255,255,255,0.04)] p-1 rounded-lg border border-[rgba(255,255,255,0.06)]">
              <button
                onClick={() => setActiveTab("receptionist")}
                className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all ${
                  activeTab === "receptionist"
                    ? "bg-[#4f8ef7] text-white font-semibold"
                    : "text-[#8888a0] hover:text-white"
                }`}
              >
                1. Voice & Lead Receptionist
              </button>
              <button
                onClick={() => setActiveTab("qualifier")}
                className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all ${
                  activeTab === "qualifier"
                    ? "bg-[#4f8ef7] text-white font-semibold"
                    : "text-[#8888a0] hover:text-white"
                }`}
              >
                2. Real-Time Lead Scoring
              </button>
              <button
                onClick={() => setActiveTab("nodeGraph")}
                className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all ${
                  activeTab === "nodeGraph"
                    ? "bg-[#4f8ef7] text-white font-semibold"
                    : "text-[#8888a0] hover:text-white"
                }`}
              >
                3. Multi-Agent Graph
              </button>
            </div>
          </div>

          {/* TAB 1: RECEPTIONIST SIMULATOR */}
          {activeTab === "receptionist" && (
            <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Controls */}
              <div className="lg:col-span-5 space-y-4">
                <label className="text-xs font-mono text-[#8888a0] uppercase tracking-wider block">
                  Select Preset Scenario:
                </label>
                <div className="flex flex-col gap-2">
                  {scenarios.map((s) => (
                    <button
                      key={s.label}
                      onClick={() => {
                        setSelectedScenario(s);
                        setCustomText(s.text);
                      }}
                      className={`text-left p-3 rounded-xl border text-xs transition-all ${
                        selectedScenario.label === s.label
                          ? "border-[#4f8ef7] bg-[rgba(79,142,247,0.1)] text-white font-semibold"
                          : "border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] text-[#8888a0] hover:border-[rgba(255,255,255,0.12)]"
                      }`}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold text-white">{s.label}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[rgba(255,255,255,0.06)]">
                          Score: {s.score}
                        </span>
                      </div>
                      <p className="line-clamp-2 text-[11px] text-[#8888a0]">{s.text}</p>
                    </button>
                  ))}
                </div>

                <div>
                  <label className="text-xs font-mono text-[#8888a0] uppercase tracking-wider block mb-2">
                    Inbound Customer Message Payload:
                  </label>
                  <textarea
                    rows={3}
                    value={customText}
                    onChange={(e) => setCustomText(e.target.value)}
                    className="w-full p-3 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(0,0,0,0.5)] text-xs font-mono text-[#f0f0f5] focus:outline-none focus:border-[#4f8ef7]"
                  />
                </div>

                <button
                  onClick={runSimulation}
                  disabled={isSimulating}
                  className="w-full h-12 rounded-xl text-xs font-mono font-bold tracking-wider uppercase text-white flex items-center justify-center gap-2 transition-all"
                  style={{
                    background: isSimulating
                      ? "#333345"
                      : "linear-gradient(135deg, #4f8ef7 0%, #6366f1 100%)",
                    boxShadow: isSimulating ? "none" : "0 0 24px rgba(79,142,247,0.3)",
                  }}
                >
                  {isSimulating ? (
                    <>
                      <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Executing Pipeline...
                    </>
                  ) : (
                    <>
                      ▶ Run Agent Execution
                    </>
                  )}
                </button>
              </div>

              {/* Live Terminal Log Output */}
              <div className="lg:col-span-7 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#030305] p-4 font-mono text-xs flex flex-col justify-between min-h-[360px]">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-[rgba(255,255,255,0.06)] text-[#555568]">
                    <span>TERMINAL_OUTPUT // LOG_STREAM</span>
                    <span>STATUS: {isSimulating ? "RUNNING" : simLogs.length ? "IDLE_COMPLETE" : "WAITING"}</span>
                  </div>

                  {simLogs.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-48 text-[#555568]">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mb-2 opacity-50">
                        <path d="M4 17l6-6-6-6M12 19h8" />
                      </svg>
                      <p>Click "Run Agent Execution" to see live LLM decision logs</p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {simLogs.map((log, idx) => (
                        <div
                          key={idx}
                          className={`p-2 rounded border text-[11px] leading-relaxed transition-all ${
                            log.includes("EMERGENCY") || log.includes("CRITICAL")
                              ? "bg-[rgba(239,68,68,0.1)] border-[rgba(239,68,68,0.3)] text-red-400"
                              : log.includes("COMPLETE")
                              ? "bg-[rgba(45,212,191,0.1)] border-[rgba(45,212,191,0.3)] text-[#2dd4bf]"
                              : "bg-[rgba(255,255,255,0.02)] border-[rgba(255,255,255,0.04)] text-[#a0a0b5]"
                          }`}
                        >
                          {log}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Status Bar */}
                {simStep > 0 && (
                  <div className="pt-3 mt-3 border-t border-[rgba(255,255,255,0.06)] flex justify-between text-[10px] text-[#555568]">
                    <span>PIPELINE: Gemini 1.5 Flash API</span>
                    <span>LATENCY: 1050ms</span>
                    <span>RELIABILITY: 99.98%</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: LEAD SCORING */}
          {activeTab === "qualifier" && (
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="font-[var(--font-display)] font-semibold text-lg text-white">
                  Interactive Lead Scoring Calculator
                </h3>
                <p className="text-xs text-[#8888a0]">
                  Adjust the client budget and urgency parameters below to see how our LLM scoring rules categorize leads in real-time.
                </p>

                {/* Budget Slider */}
                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-[#8888a0]">Est. Project Budget:</span>
                    <span className="text-[#4f8ef7] font-bold">${leadBudget}</span>
                  </div>
                  <input
                    type="range"
                    min="300"
                    max="5000"
                    step="100"
                    value={leadBudget}
                    onChange={(e) => setLeadBudget(Number(e.target.value))}
                    className="w-full accent-[#4f8ef7]"
                  />
                </div>

                {/* Urgency Slider */}
                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-[#8888a0]">Urgency Index:</span>
                    <span className="text-[#2dd4bf] font-bold">{leadUrgency}%</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={leadUrgency}
                    onChange={(e) => setLeadUrgency(Number(e.target.value))}
                    className="w-full accent-[#2dd4bf]"
                  />
                </div>
              </div>

              {/* Scoring Gauge Output */}
              <div className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#030305] p-6 flex flex-col justify-center items-center text-center">
                <div className="text-xs font-mono text-[#555568] uppercase tracking-widest mb-2">
                  Computed Classification Score
                </div>
                <div
                  className="text-4xl font-bold font-[var(--font-display)] mb-2"
                  style={{
                    color:
                      leadBudget > 2000 || leadUrgency > 70
                        ? "#2dd4bf"
                        : leadBudget > 800
                        ? "#e8c547"
                        : "#ef4444",
                  }}
                >
                  {leadBudget > 2000 || leadUrgency > 70
                    ? "HOT LEAD (Tier 1)"
                    : leadBudget > 800
                    ? "WARM LEAD (Tier 2)"
                    : "COLD LEAD (Nurture)"}
                </div>
                <p className="text-xs text-[#8888a0] max-w-xs mt-2">
                  {leadBudget > 2000 || leadUrgency > 70
                    ? "Action: Auto-assign senior rep & dispatch instant Calendly booking link via SMS."
                    : leadBudget > 800
                    ? "Action: Send standard pricing overview & 3-day automated email follow-up sequence."
                    : "Action: Add to newsletter list and route to general self-service FAQ page."}
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: MULTI-AGENT GRAPH */}
          {activeTab === "nodeGraph" && (
            <div className="p-8 flex flex-col items-center text-center">
              <h3 className="font-[var(--font-display)] font-semibold text-lg text-white mb-2">
                Multi-Agent Architecture Workflow
              </h3>
              <p className="text-xs text-[#8888a0] max-w-lg mb-8">
                Data packets flow continuously between autonomous sub-agents. Click any node to inspect data passing.
              </p>

              {/* Node Diagram */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 w-full max-w-4xl">
                {[
                  { title: "1. Webhook Ingest", desc: "Twilio / Form API", color: "#4f8ef7" },
                  { title: "2. Intent Brain", desc: "Gemini 1.5 Flash", color: "#2dd4bf" },
                  { title: "3. Action Router", desc: "SMS / Cal.com", color: "#818cf8" },
                  { title: "4. CRM Sync", desc: "Google Sheets / Airtable", color: "#e8c547" },
                ].map((node, i) => (
                  <div
                    key={node.title}
                    className="p-4 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] hover:border-white/20 transition-all text-left relative"
                  >
                    <div
                      className="w-2 h-2 rounded-full mb-3"
                      style={{ backgroundColor: node.color, boxShadow: `0 0 8px ${node.color}` }}
                    />
                    <div className="font-mono text-xs text-white font-bold mb-1">{node.title}</div>
                    <div className="text-[11px] text-[#8888a0]">{node.desc}</div>
                    {i < 3 && (
                      <div className="hidden sm:block absolute -right-3 top-1/2 -translate-y-1/2 text-xs text-[#555568] z-10">
                        →
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
