import React from "react";

export default function Navbar() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
      <nav className="
        flex items-center justify-between
        px-6 py-3
        rounded-full
        bg-[#0A0A11]/60
        backdrop-blur-xl
        border border-white/10
        shadow-[0_0_30px_rgba(255,255,255,0.04)]
      ">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2v20M2 12h20" />
            <circle cx="12" cy="12" r="4" />
          </svg>
          <span className="text-white font-medium text-lg">Content Pilot</span>
        </div>

        {/* Right: Links */}
        <div className="flex items-center gap-6">
          <a href="#" className="text-white/80 hover:text-white text-sm font-medium">
            Home
          </a>
          <a href="#" className="text-white/80 hover:text-white text-sm font-medium">
            Docs
          </a>
        </div>

      </nav>
    </header>
  );
}
