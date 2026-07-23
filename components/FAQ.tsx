"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Are these system metrics based on real client work?",
    a: "Yes. The HVAC lead recovery numbers reflect actual 14-day deployment pilots in US metro markets. Other metrics represent verified client-side benchmarks and live n8n production uptime logs.",
  },
  {
    q: "How fast can an AI Receptionist or Lead Recovery agent be deployed?",
    a: "A pilot system can be built and deployed in 5 to 7 days. Full production integrations with custom CRM schemas take 10 to 14 days.",
  },
  {
    q: "What happens if an API provider (like Gemini or OpenAI) goes down?",
    a: "All systems are built with failover logic. If the primary model API fails, the execution router automatically fails over to a secondary provider (e.g., GPT-4o-mini) and dispatches a Slack alert to the operator.",
  },
  {
    q: "Will the AI agent make mistakes with my customers?",
    a: "We implement strict Human Handoff rules. High-risk, ambiguous, or emergency leads are immediately flagged and escalated to a human team member via SMS/WhatsApp with complete context.",
  },
  {
    q: "What is your current project availability?",
    a: "I am currently accepting 2 Pilot Deployments for Q3 2026 to ensure personalized, white-glove engineering support for each client.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="relative px-6 py-28 border-t border-[rgba(255,255,255,0.06)] bg-[#07070a]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-[rgba(45,212,191,0.2)] bg-[rgba(45,212,191,0.05)]">
            <span className="text-xs font-mono text-[#2dd4bf] tracking-widest uppercase">
              Frequently Asked Questions & Availability
            </span>
          </div>
          <h2
            className="font-[var(--font-display)] font-bold text-[#f0f0f5] leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Clear Answers for Founders & Operators.
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={faq.q}
              className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(12,12,18,0.8)] overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full p-5 text-left flex justify-between items-center text-sm font-semibold text-white hover:text-[#4f8ef7] transition-colors"
              >
                <span>{faq.q}</span>
                <span className="text-xs font-mono text-[#555568] ml-4">
                  {openIdx === idx ? "−" : "+"}
                </span>
              </button>

              {openIdx === idx && (
                <div className="px-5 pb-5 text-xs text-[#8888a0] leading-relaxed border-t border-[rgba(255,255,255,0.04)] pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
