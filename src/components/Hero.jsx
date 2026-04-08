import { ArrowRight } from 'lucide-react';

const socials = [
  { name: 'Facebook', icon: '/facebook-app-symbol-1@2x.png' },
  { name: 'Instagram', icon: '/instagram-4-1@2x.png' },
  { name: 'Twitter', icon: '/twitter-3-1@2x.png' },
  { name: 'LinkedIn', icon: '/linkedin-1-1@2x.png' },
];

const specialties = [
  { label: 'Ground running', icon: '/yoga-1-2@2x.png' },
  { label: 'Yoga Assistance', icon: '/yoga-1-1@2x.png' },
  { label: 'Personal Trainer', icon: '/yoga-1-3@2x.png' },
];

const DotGrid = ({ cols, count, className, dotClassName = 'opacity-50', excludeIndex, rowGap = 'gap-y-2', colGap = 'gap-x-3' }) => (
  <div className={`grid w-fit ${colGap} ${rowGap} ${cols} ${className}`}>
    {Array.from({ length: count }).map((_, i) => (
      <img key={i} src="/Polygon-132.svg" alt="" className={`h-2 w-4 object-contain ${i === excludeIndex ? 'invisible' : dotClassName}`} />
    ))}
  </div>
);

function Hero() {
  return (
    <section className="w-full">

      {/* ── DESKTOP lg+ ── */}
      <div className="hidden lg:grid items-end gap-4 px-10 py-10
        lg:min-h-[620px] lg:grid-cols-[400px_minmax(0,1fr)]">

        {/* Left Column: Follow On + Dot Grid + Specialty Card */}
        <div className="flex flex-col">
          {/* Follow On */}
          <div className="flex items-center gap-5 text-white ml-28 mb-2">
            <span className="text-[16px] font-semibold whitespace-nowrap">Follow On:</span>
            <div className="flex items-center gap-4">
              {socials.map((s) => <img key={s.name} src={s.icon} alt={s.name} className="h-4 w-5 object-contain" />)}
            </div>
          </div>

          {/* Dot Grid */}
          <DotGrid cols="grid-cols-5" count={20} className="ml-28 mb-6" dotClassName="opacity-80" excludeIndex={15} />

          {/* Specialty Card */}
          <div className="relative ml-8 lg:ml-28 translate-y-[40px] lg:translate-y-[60px] lg:translate-x-0">
            <DotGrid cols="grid-cols-5" count={9} className="absolute top-10 left-8 z-10" />
            <img src="/special_offerBG.svg" alt="" className="w-[280px]" />
            <div className="absolute inset-0 flex flex-col justify-center px-6 py-8">
              <p className="text-white text-sm tracking-widest uppercase mb-4" style={{ fontFamily: 'Tilt Warp', fontWeight: 400 }}>Our Specialty</p>
              {specialties.map((item) => (
                <div key={item.label} className="flex items-center gap-3 rounded-xl border border-white/30 bg-white/10 px-3 py-2.5 mb-3 max-w-[220px]">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/20">
                    <img src={item.icon} alt={item.label} className="h-5 w-5 object-contain" />
                  </div>
                  <span className="text-white text-sm font-medium" style={{ fontFamily: 'Satoshi' }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Hero */}
        <div className="relative ml-auto mr-auto w-fit">
          <DotGrid cols="grid-cols-3" count={12} className="absolute right-[4%] top-[12%] z-10" />
          <DotGrid cols="grid-cols-4" count={11} className="absolute left-[84%] top-[-8%] z-10" />
          <img src="/power-your-potential.png" alt="Power your potential"
            className="absolute left-1/2 top-[48%] z-10 w-full max-w-[640px] -translate-x-1/2 object-contain" />
          <img src="/hero_img.png" alt="Hero"
            className="w-full max-w-[780px] -mt-60 translate-x-[28px] object-contain" />
          <div className="absolute bottom-[8%] left-[10%] z-20 flex items-stretch gap-3">
            <div className="flex items-center gap-2 rounded-[10px] border border-white px-6 py-3 shadow-lg">
              <span className="text-white text-[20px] font-medium" style={{ fontFamily: 'Satoshi' }}>SHOP NOW</span>
              <ArrowRight className="h-5 w-5 text-white" strokeWidth={2} />
            </div>
            <div className="flex items-center rounded-[10px] border border-white px-3 shadow-lg">
              <img src="/maps-and-flags-1.png" alt="Location" className="h-5 w-5 object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* ── TABLET md ── */}
      <div className="hidden md:flex lg:hidden flex-col items-center px-0 gap-0 w-full">
        {/* Hero image block */}
        <div className="relative w-full overflow-hidden">
          <img src="/power-your-potential.png" alt="Power your potential"
            className="absolute left-1/2 top-[68%] z-10 w-[80%] max-w-[420px] -translate-x-1/2 object-contain" />
          <img src="/hero_img.png" alt="Hero" className="w-full object-cover" />
          <div className="flex justify-center gap-2 pb-6 pt-2">
            <div className="flex items-center gap-2 rounded-[10px] border border-white px-5 py-2.5 shadow-lg">
              <span className="text-white text-base font-medium" style={{ fontFamily: 'Satoshi' }}>SHOP NOW</span>
              <ArrowRight className="h-4 w-4 text-white" strokeWidth={2} />
            </div>
            <div className="flex items-center rounded-[10px] border border-white px-2.5 py-2.5 shadow-lg">
              <img src="/maps-and-flags-1.png" alt="Location" className="h-4 w-4 object-contain" />
            </div>
          </div>
        </div>

        {/* Specialty card horizontal */}
        <div className="w-full bg-[#7AB641] p-5">
          <p className="text-white text-sm tracking-widest uppercase mb-3" style={{ fontFamily: 'Tilt Warp', fontWeight: 400 }}>Our Specialty</p>
          <div className="flex gap-3">
            {specialties.map((item) => (
              <div key={item.label} className="flex flex-1 items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-3 py-2.5">
                <img src={item.icon} alt={item.label} className="h-6 w-6 object-contain" />
                <span className="text-white text-xs font-medium" style={{ fontFamily: 'Satoshi' }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-4">
          <span className="text-white text-sm font-semibold">Follow On:</span>
          <div className="flex items-center gap-3">
            {socials.map((s) => <img key={s.name} src={s.icon} alt={s.name} className="h-4 w-5 object-contain" />)}
          </div>
        </div>
      </div>

      {/* ── MOBILE sm ── */}
      <div className="flex md:hidden flex-col items-center px-0 gap-0 w-full">
        {/* Hero image */}
        <div className="relative w-full overflow-hidden">
          <img src="/power-your-potential.png" alt="Power your potential"
            className="absolute left-1/2 top-[64%] z-10 w-[90%] max-w-[280px] -translate-x-1/2 object-contain" />
          <img src="/hero_img.png" alt="Hero" className="w-full object-cover" />
          <div className="flex justify-center gap-2 pb-5 pt-1">
            <div className="flex items-center gap-2 rounded-[10px] border border-white px-4 py-2 shadow-lg">
              <span className="text-white text-sm font-medium" style={{ fontFamily: 'Satoshi' }}>SHOP NOW</span>
              <ArrowRight className="h-4 w-4 text-white" strokeWidth={2} />
            </div>
            <div className="flex items-center rounded-[10px] border border-white px-2.5 py-2 shadow-lg">
              <img src="/maps-and-flags-1.png" alt="Location" className="h-4 w-4 object-contain" />
            </div>
          </div>
        </div>

        {/* Specialty card stacked */}
        <div className="w-full bg-[#7AB641] p-5">
          <p className="text-white text-xs tracking-widest uppercase mb-3" style={{ fontFamily: 'Tilt Warp', fontWeight: 400 }}>Our Specialty</p>
          <div className="flex flex-col gap-2">
            {specialties.map((item) => (
              <div key={item.label} className="flex items-center gap-3 rounded-xl border border-white/30 bg-white/10 px-3 py-2.5">
                <img src={item.icon} alt={item.label} className="h-6 w-6 object-contain" />
                <span className="text-white text-sm font-medium" style={{ fontFamily: 'Satoshi' }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-3">
          <span className="text-white text-sm font-semibold">Follow On:</span>
          <div className="flex items-center gap-3">
            {socials.map((s) => <img key={s.name} src={s.icon} alt={s.name} className="h-4 w-5 object-contain" />)}
          </div>
        </div>
      </div>

    </section>
  );
}

export default Hero;
