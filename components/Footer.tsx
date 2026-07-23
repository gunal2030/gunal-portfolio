export default function Footer() {
  return (
    <footer className="relative px-6 py-12 border-t border-[rgba(255,255,255,0.04)]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full overflow-hidden border border-[rgba(79,142,247,0.3)]">
            <img src="/gunal-profile-4.png" alt="Gunal K" className="w-full h-full object-cover" />
          </div>
          <span className="text-xs text-[#555568] font-mono">
            Gunal K — AI Systems Architect · Bengaluru, India
          </span>
        </div>

        {/* Center */}
        <p className="text-xs text-[#333345] font-mono text-center">
          Building AI systems that work while you sleep.
        </p>

        {/* Right */}
        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/gunal-krishnamurthi-54a272350/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#555568] hover:text-[#f0f0f5] transition-colors font-mono"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/gunal2030"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#555568] hover:text-[#f0f0f5] transition-colors font-mono"
          >
            GitHub
          </a>
          <a
            href="mailto:gunalkrish8@gmail.com"
            className="text-xs text-[#555568] hover:text-[#f0f0f5] transition-colors font-mono"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
