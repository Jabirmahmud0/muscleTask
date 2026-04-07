function Navbar() {
  return (
    <nav className="relative flex items-center justify-between px-6 py-4 mt-4">
      {/* Left Logo + Center Nav Pill */}
      <div className="flex items-center flex-1">
        {/* Green Logo Circle */}
        <div className="w-[70px] h-[70px] rounded-full bg-[#7AB641] flex items-center justify-center shrink-0 z-10 ml-24">
          <img
            src="/navLEFTLogo.png"
            alt="Logo"
            className="w-[48px] h-[48px] object-contain"
          />
        </div>

        {/* Black Pill Nav Container */}
        <div className="flex items-center bg-black rounded-full border border-white px-8 py-3 gap-8 ml-10">
          <a href="#" className="text-white text-sm font-medium tracking-wide whitespace-nowrap">
            Home
          </a>
          <a href="#" className="text-white text-sm font-medium tracking-wide whitespace-nowrap">
            Our gym location
          </a>
          <span className="text-white/30 text-lg">|</span>

          {/* Search Box */}
          <div className="flex items-center bg-white/10 border border-white/20 rounded-full px-4 py-1.5 gap-2">
            <span className="text-white text-sm font-medium">Search</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </div>
        </div>
      </div>

      {/* Register Button */}
      <button className="bg-[#7AB641] hover:bg-[#6DA033] text-white font-bold text-lg tracking-wider py-3.5 px-12 rounded-full transition-colors uppercase mr-32">
        Register
      </button>
    </nav>
  );
}

export default Navbar;
