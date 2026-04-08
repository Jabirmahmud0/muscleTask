/* ─── Dot helper ─── */
import { motion } from 'framer-motion';
import { fadeUp } from '../lib/motion';

const Dot = ({ className = '' }) => (
  <img
    className={`h-[37px] w-[22px] relative object-contain ${className}`}
    style={{ filter: 'brightness(0)', opacity: 0.4 }}
    alt=""
    src="/Polygon-132.svg"
  />
);

/* ─── Footer Links ─── */
const FooterLinks = () => {
  const linkClass = 'text-[18px] font-normal text-black/75 cursor-pointer hover:text-black transition-colors';

  return (
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-[80px] w-full text-left" style={{ fontFamily: 'Satoshi, sans-serif' }}>
      {/* About */}
      <div className="w-full lg:w-[502px]">
        <h3 className="!m-0 text-[22px] font-medium text-black" style={{ fontFamily: 'Satoshi, sans-serif' }}>About</h3>
        <p className="text-[18px] font-normal text-black/75 leading-[1.5] mt-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>
          At MuscleForge, we believe in the power of dedication and hard work.
          Our mission is to provide you with the tools, resources, and community
          you need to build the body of your dreams
        </p>
        <hr className="w-[160px] border-[rgba(0,0,0,0.3)] my-[20px]" />
        <div className="flex items-center gap-3">
          <span className="text-[18px] font-medium text-black/75" style={{ fontFamily: 'Satoshi, sans-serif' }}>Social Media:</span>
          <span className={`${linkClass} font-bold text-black`} style={{ fontFamily: 'Satoshi, sans-serif' }}>Fb</span>
          <span className={`${linkClass} font-bold text-black`} style={{ fontFamily: 'Satoshi, sans-serif' }}>In</span>
          <span className={`${linkClass} font-bold text-black`} style={{ fontFamily: 'Satoshi, sans-serif' }}>Tw</span>
        </div>
      </div>

      {/* Quick Links */}
      <div className="flex flex-col gap-[12px]">
        <h3 className="!m-0 text-[22px] font-medium text-black" style={{ fontFamily: 'Satoshi, sans-serif' }}>Quick Links</h3>
        {['Home', 'Our gym location', 'Contact Us', 'Privacy policy'].map((item) => (
          <span key={item} className={linkClass} style={{ fontFamily: 'Satoshi, sans-serif' }}>{item}</span>
        ))}
      </div>

      {/* Our Service */}
      <div className="flex flex-col gap-[12px]">
        <h3 className="!m-0 text-[22px] font-medium text-black" style={{ fontFamily: 'Satoshi, sans-serif' }}>Our Service</h3>
        {['Indoor gym', 'Outdoor gym', 'On ground gym', 'Yoga class'].map((item) => (
          <span key={item} className={linkClass} style={{ fontFamily: 'Satoshi, sans-serif' }}>{item}</span>
        ))}
      </div>

      {/* Contact Info */}
      <div className="flex flex-col gap-[12px]">
        <h3 className="!m-0 text-[22px] font-medium text-black" style={{ fontFamily: 'Satoshi, sans-serif' }}>Contact Info</h3>
        <p className={`${linkClass} !m-0`} style={{ fontFamily: 'Satoshi, sans-serif' }}><b>Mail:</b> info@example.com</p>
        <p className={`${linkClass} !m-0`} style={{ fontFamily: 'Satoshi, sans-serif' }}><b>Call:</b> +91 9876543210</p>
        <p className={`${linkClass} !m-0`} style={{ fontFamily: 'Satoshi, sans-serif' }}><b>Location:</b> New York, 235 Lane, 10001</p>
        <p className={`${linkClass} !m-0`} style={{ fontFamily: 'Satoshi, sans-serif' }}><b>Time:</b> Workout Hours: 5AM - 8PM</p>
      </div>
    </div>
  );
};

/* ─── Main Footer Section ─── */
function Footer({ className = '' }) {
  return (
    <motion.section
      {...fadeUp}
      id="gym-location"
      className={`w-full px-5 md:px-10 lg:px-24 pt-0 pb-12 font-[Satoshi] relative ${className}`}
    >
      {/* Decorative dots — above left */}
      <div className="hidden lg:flex w-full justify-start mb-4">
        <div className="flex flex-col gap-0">
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

      {/* Top divider */}
      <hr className="w-full border-[rgba(0,0,0,0.2)]" />

      {/* Footer Links */}
      <div className="pt-[20px] pb-[30px]">
        <FooterLinks />
      </div>

      {/* Bottom divider */}
      
      <hr className="w-[180px] mx-auto mt-[10px] border-[rgba(0,0,0,0.2)]" />

      {/* Copyright */}
      <p
        className="text-center pt-[18px] text-[18px] font-normal text-black/75"
        style={{ fontFamily: 'Satoshi, sans-serif' }}
      >
        websitename.com©2024 all right reserve
      </p>
    </motion.section>
  );
}

export default Footer;
