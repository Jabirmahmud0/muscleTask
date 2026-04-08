/* ─── Dot helper ─── */
import { motion } from 'framer-motion';
import { fadeUp, softReveal } from '../lib/motion';

const Dot = ({ className = '' }) => (
  <img
    className={`h-[37px] w-[22px] relative object-contain ${className}`}
    style={{ filter: 'brightness(0)', opacity: 0.4 }}
    alt=""
    src="/Polygon-132.svg"
  />
);

/* ─── Main Newsletter Section ─── */
function Newsletter({ className = '' }) {
  return (
    <motion.section {...fadeUp} className={`w-full px-5 md:px-10 lg:px-24 pt-0 pb-0 font-[Satoshi] relative ${className}`}>
      {/* Decorative dots — top right */}
      <div className="hidden lg:flex w-full justify-end mb-0">
        {/* Right: same pattern, rotated 90° */}
        <div className="flex flex-col gap-0" style={{ transform: 'rotate(90deg)' }}>
          <div className="flex items-center gap-px">
            <Dot /><div className="w-[22px] h-[37px] invisible" /><Dot /><div className="w-[22px] h-[37px] invisible" /><div className="w-[22px] h-[37px] invisible" />
          </div>
          <div className="flex items-center gap-px">
            <Dot /><div className="w-[22px] h-[37px] invisible" /><Dot /><div className="w-[22px] h-[37px] invisible" /><Dot />
          </div>
          <div className="flex items-center gap-px">
            <div className="w-[22px] h-[37px] invisible" /><Dot /><Dot /><Dot /><div className="w-[22px] h-[37px] invisible" />
          </div>
          <div className="flex items-center gap-px">
            <div className="w-[22px] h-[37px] invisible" /><div className="w-[22px] h-[37px] invisible" /><div className="w-[22px] h-[37px] invisible" /><Dot /><div className="w-[22px] h-[37px] invisible" />
          </div>
        </div>
      </div>

      {/* Main Card */}
      <motion.div {...softReveal} className="relative rounded-[30px] md:rounded-[45px] bg-black overflow-hidden px-6 md:px-12 lg:px-20 py-10 md:py-12">
        <div className="flex flex-col items-center text-center gap-6">
          {/* "Join our community" */}
          <p
            className="!m-0 text-[22px] md:text-[28px] font-medium text-white"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            Join our community
          </p>

          {/* "Subscribe to our Newsletter" */}
          <div className="relative flex flex-col items-start">
            <h2
              className="!m-0 text-[32px] md:text-[40px] lg:text-[48px] font-normal text-white leading-[1.2]"
              style={{ fontFamily: 'Satoshi, sans-serif' }}
            >
              Subscribe to our Newsletter
            </h2>
            <img
              className="w-[150px] md:w-[200px] h-auto object-contain mt-[-12px] self-end"
              alt=""
              src="/below_newsletter.svg"
            />
          </div>

          {/* Description */}
          <p
            className="!m-0 text-[16px] md:text-[18px] font-medium leading-[1.5] text-white/75 max-w-[600px]"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            Join our community of fitness enthusiasts and athletes! By subscribing
            to our newsletter, you'll receive expert training tips, nutrition guides.
          </p>

          {/* Email Input + Subscribe */}
          <div
            className="flex flex-col md:flex-row items-center gap-4 w-full max-w-[600px]
              border-[2px] md:border-[3px] border-white rounded-[50px] md:rounded-[60px]
              px-6 md:px-8 py-3 md:py-4"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent text-white text-[16px] md:text-[18px] font-medium placeholder-white/75
                outline-none border-none w-full text-center md:text-left"
              style={{ fontFamily: 'Satoshi, sans-serif' }}
            />
            <button
              className="bg-white text-black font-semibold text-[16px] md:text-[18px]
                rounded-[30px] px-8 py-2.5 md:py-3 hover:bg-white/90 transition-colors whitespace-nowrap shrink-0"
              style={{ fontFamily: 'Satoshi, sans-serif' }}
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Newsletter;
