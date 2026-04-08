import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative mt-4">
      {/* ── DESKTOP (md+) ── */}
      <div className="hidden md:flex items-center justify-between px-6 py-4">
        {/* Left: Logo + Pill Nav */}
        <div className="flex items-center flex-1">
          {/* Green Logo Circle */}
          <div className="w-[60px] h-[60px] lg:w-[70px] lg:h-[70px] rounded-full bg-[#7AB641] flex items-center justify-center shrink-0 z-10 md:ml-8 lg:ml-30">
            <img
              src="/navLEFTLogo.png"
              alt="Logo"
              className="w-[40px] h-[40px] lg:w-[48px] lg:h-[48px] object-contain"
            />
          </div>

          {/* Black Pill Nav */}
          <div className="flex items-center bg-black rounded-full border border-white px-5 lg:px-8 py-3 gap-4 lg:gap-8 ml-6 lg:ml-16">
            <Link to="/" className="text-white text-sm font-medium tracking-wide whitespace-nowrap" style={{ fontFamily: "Satoshi" }}>
              Home
            </Link>
            <a href="#gym-location" className="text-white text-sm font-medium tracking-wide whitespace-nowrap" style={{ fontFamily: "Satoshi" }}>
              Our gym location
            </a>
            <span className="text-white/30 text-lg">|</span>

            {/* Search */}
            <div className="flex items-center bg-[#FFFFFF40] border border-white/20 rounded-full px-8 py-1.5 gap-6">
              <span className="text-white text-sm font-medium" style={{ fontFamily: "Satoshi" }}>Search</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </div>
          </div>
        </div>

        {/* Register Button */}
        <Link to="/register" className="bg-[#7AB641] hover:bg-[#6DA033] text-white font-bold text-base lg:text-lg tracking-wider py-3 lg:py-3.5 px-8 lg:px-16 rounded-full transition-colors uppercase md:mr-8 lg:mr-32 text-center">
          Register
        </Link>
      </div>

      {/* ── MOBILE (< md) ── */}
      <div className="md:hidden flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="w-[52px] h-[52px] rounded-full bg-[#7AB641] flex items-center justify-center shrink-0">
          <img src="/navLEFTLogo.png" alt="Logo" className="w-[34px] h-[34px] object-contain" />
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col justify-center items-center gap-[5px] w-10 h-10"
          aria-label="Toggle menu"
        >
          <span className={`block h-[2px] w-6 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block h-[2px] w-6 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-[2px] w-6 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black border border-white/20 rounded-2xl mx-4 px-6 py-5 flex flex-col gap-4 z-50">
          <Link to="/" className="text-white text-sm font-medium tracking-wide" style={{ fontFamily: "Satoshi" }}>Home</Link>
          <a href="#gym-location" className="text-white text-sm font-medium tracking-wide" style={{ fontFamily: "Satoshi" }}>Our gym location</a>

          {/* Search */}
          <div className="flex items-center bg-[#FFFFFF40] border border-white/20 rounded-full px-4 py-2 gap-2 w-fit">
            <span className="text-white text-sm font-medium" style={{ fontFamily: "Satoshi" }}>Search</span>
            <svg width="24" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </div>

          <Link to="/register" className="bg-[#7AB641] hover:bg-[#6DA033] text-white font-bold text-sm tracking-wider py-3 px-8 rounded-full transition-colors uppercase w-full mt-1 text-center">
            Register
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
