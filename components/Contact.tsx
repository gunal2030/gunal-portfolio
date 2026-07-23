"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Construct mailto link
    const subject = encodeURIComponent(`AI Systems Inquiry — ${formData.company || formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\n${formData.message}`
    );
    window.location.href = `mailto:gunalkrish8@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative px-6 py-28 border-t border-[rgba(255,255,255,0.04)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-px h-4 bg-[#4f8ef7]" />
              <span className="text-xs font-mono text-[#4f8ef7] tracking-widest uppercase">Contact</span>
            </div>

            <h2
              className="font-[var(--font-display)] font-bold text-[#f0f0f5] leading-tight mb-6"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
            >
              Ready to Build
              <br />
              <span style={{
                background: "linear-gradient(135deg, #4f8ef7, #818cf8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>Your AI System?</span>
            </h2>

            <p className="text-sm text-[#8888a0] leading-relaxed mb-8 max-w-sm">
              If you're a founder or operator spending more time on admin than on growth,
              let's talk. I'll map your operational gaps and show you exactly where an
              AI system can recover time and revenue.
            </p>

            {/* Contact methods */}
            <div className="space-y-4">
              <a
                href="mailto:gunalkrish8@gmail.com"
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(79,142,247,0.08)] flex items-center justify-center group-hover:border-[rgba(79,142,247,0.3)] transition-all">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <rect x="1" y="3" width="12" height="8" rx="1.5" stroke="#4f8ef7" strokeWidth="1.2"/>
                    <path d="M1 5L7 8L13 5" stroke="#4f8ef7" strokeWidth="1.2"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-[#555568] font-mono">Email</p>
                  <p className="text-sm text-[#f0f0f5] group-hover:text-[#4f8ef7] transition-colors">
                    gunalkrish8@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+917418096065"
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(45,212,191,0.08)] flex items-center justify-center group-hover:border-[rgba(45,212,191,0.3)] transition-all">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 3C2 2.4 2.4 2 3 2H5L6.5 5.5L4.5 7C5.3 8.7 6.8 10.2 8.5 11L10 9L13.5 10.5V12.5C13.5 13.1 13.1 13.5 12.5 13.5C7.2 13.5 2 8.3 2 3Z" stroke="#2dd4bf" strokeWidth="1.2" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-[#555568] font-mono">Phone / WhatsApp</p>
                  <p className="text-sm text-[#f0f0f5] group-hover:text-[#2dd4bf] transition-colors">
                    +91 7418096065
                  </p>
                </div>
              </a>

              <a
                href="https://cal.com/gunal-krish-fmtsqv"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(232,197,71,0.08)] flex items-center justify-center group-hover:border-[rgba(232,197,71,0.3)] transition-all">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <rect x="1" y="2" width="12" height="10" rx="1.5" stroke="#e8c547" strokeWidth="1.2"/>
                    <path d="M4 6H10M4 8H7" stroke="#e8c547" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-[#555568] font-mono">Calendar</p>
                  <p className="text-sm text-[#f0f0f5] group-hover:text-[#e8c547] transition-colors">
                    Book a 20-min strategy call →
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center rounded-2xl border border-[rgba(45,212,191,0.2)] bg-[rgba(45,212,191,0.04)] p-10 text-center">
                <div className="w-12 h-12 rounded-full border border-[rgba(45,212,191,0.3)] bg-[rgba(45,212,191,0.1)] flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10L8 14L16 6" stroke="#2dd4bf" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-[var(--font-display)] font-semibold text-[#f0f0f5] mb-2">Message sent.</h3>
                <p className="text-sm text-[#8888a0]">I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { key: "name", label: "Name", type: "text", required: true },
                  { key: "email", label: "Email", type: "email", required: true },
                  { key: "company", label: "Company / Industry", type: "text", required: false },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="block text-xs font-mono text-[#555568] mb-1.5 uppercase tracking-wider">
                      {field.label} {field.required && <span className="text-[#4f8ef7]">*</span>}
                    </label>
                    <input
                      type={field.type}
                      required={field.required}
                      value={formData[field.key as keyof typeof formData]}
                      onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                      className="w-full h-11 px-4 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] text-sm text-[#f0f0f5] placeholder-[#333345] focus:outline-none focus:border-[rgba(79,142,247,0.4)] focus:bg-[rgba(79,142,247,0.05)] transition-all duration-200"
                      placeholder={`Your ${field.label.toLowerCase()}`}
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-xs font-mono text-[#555568] mb-1.5 uppercase tracking-wider">
                    What do you need? <span className="text-[#4f8ef7]">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] text-sm text-[#f0f0f5] placeholder-[#333345] focus:outline-none focus:border-[rgba(79,142,247,0.4)] focus:bg-[rgba(79,142,247,0.05)] transition-all duration-200 resize-none"
                    placeholder="Describe your biggest operational bottleneck or what you want to automate..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full h-12 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:opacity-90 hover:scale-[1.01]"
                  style={{
                    background: "linear-gradient(135deg, #4f8ef7, #6366f1)",
                    boxShadow: "0 0 32px rgba(79,142,247,0.25)",
                  }}
                >
                  Send Message
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7H12M8 3L12 7L8 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
