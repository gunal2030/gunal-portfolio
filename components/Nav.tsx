"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Systems", href: "#systems" },
  { label: "Lab", href: "#lab" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[rgba(5,5,7,0.85)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo with Gunal Avatar */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[rgba(79,142,247,0.4)] group-hover:border-[#4f8ef7] transition-all duration-300 shadow-[0_0_12px_rgba(79,142,247,0.3)]">
            <img
              src="/gunal-profile-4.png"
              alt="Gunal K"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-[#2dd4bf] border border-[#050507]" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-[#f0f0f5] group-hover:text-[#4f8ef7] transition-colors">
              Gunal K
            </span>
            <span className="text-[10px] text-[#8888a0] font-mono -mt-0.5">AI Architect</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-[#8888a0] hover:text-[#f0f0f5] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="mailto:gunalkrish8@gmail.com"
            className="text-sm text-[#8888a0] hover:text-[#f0f0f5] transition-colors duration-200"
          >
            gunalkrish8@gmail.com
          </a>
          <a
            href="https://cal.com/gunal-krish-fmtsqv"
            target="_blank"
            rel="noopener noreferrer"
            className="h-8 px-4 rounded-md bg-[rgba(79,142,247,0.12)] border border-[rgba(79,142,247,0.25)] text-sm text-[#4f8ef7] hover:bg-[rgba(79,142,247,0.2)] hover:border-[rgba(79,142,247,0.4)] transition-all duration-200 flex items-center"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#8888a0] hover:text-[#f0f0f5] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {menuOpen ? (
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            ) : (
              <path d="M3 6H17M3 10H17M3 14H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[rgba(5,5,7,0.95)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.06)] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-[#8888a0] hover:text-[#f0f0f5] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://cal.com/gunal-krish-fmtsqv"
            target="_blank"
            rel="noopener noreferrer"
            className="h-9 px-4 rounded-md bg-[rgba(79,142,247,0.12)] border border-[rgba(79,142,247,0.25)] text-sm text-[#4f8ef7] flex items-center justify-center"
            onClick={() => setMenuOpen(false)}
          >
            Book a Call
          </a>
        </div>
      )}
    </nav>
  );
}
