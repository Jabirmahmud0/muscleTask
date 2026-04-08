import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Search, X } from "lucide-react";
import { fadeUp } from "../lib/motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav {...fadeUp} className="relative mt-4">
      {/* ── DESKTOP (md+) ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="hidden md:flex items-center justify-between px-6 py-4"
      >
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
              <Search size={14} strokeWidth={2.5} className="text-white" />
            </div>
          </div>
        </div>

        {/* Register Button */}
        <Link to="/register" className="bg-[#7AB641] hover:bg-[#6DA033] text-white font-bold text-base lg:text-lg tracking-wider py-3 lg:py-3.5 px-8 lg:px-16 rounded-full transition-colors uppercase md:mr-8 lg:mr-32 text-center">
          Register
        </Link>
      </motion.div>

      {/* ── MOBILE (< md) ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="md:hidden flex items-center justify-between px-4 py-4"
      >
        {/* Logo */}
        <div className="w-[52px] h-[52px] rounded-full bg-[#7AB641] flex items-center justify-center shrink-0">
          <img src="/navLEFTLogo.png" alt="Logo" className="w-[34px] h-[34px] object-contain" />
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center justify-center w-10 h-10 text-white"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} strokeWidth={2.2} /> : <Menu size={24} strokeWidth={2.2} />}
        </button>
      </motion.div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden absolute top-full left-0 right-0 bg-black border border-white/20 rounded-2xl mx-4 px-6 py-5 flex flex-col gap-4 z-50"
          >
            <Link to="/" className="text-white text-sm font-medium tracking-wide" style={{ fontFamily: "Satoshi" }}>Home</Link>
            <a href="#gym-location" className="text-white text-sm font-medium tracking-wide" style={{ fontFamily: "Satoshi" }}>Our gym location</a>

            {/* Search */}
            <div className="flex items-center bg-[#FFFFFF40] border border-white/20 rounded-full px-4 py-2 gap-2 w-fit">
              <span className="text-white text-sm font-medium" style={{ fontFamily: "Satoshi" }}>Search</span>
              <Search size={18} strokeWidth={2.5} className="text-white" />
            </div>

            <Link to="/register" className="bg-[#7AB641] hover:bg-[#6DA033] text-white font-bold text-sm tracking-wider py-3 px-8 rounded-full transition-colors uppercase w-full mt-1 text-center">
              Register
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
