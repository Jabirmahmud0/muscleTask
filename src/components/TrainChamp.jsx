/* ─── Decorative Polygon Dot ─── */
const Dot = ({ className = '' }) => (
  <img
    className={`h-[37px] w-[22px] relative object-contain ${className}`}
    style={{ filter: 'brightness(0)', opacity: 0.4 }}
    alt=""
    src="/Polygon-132.svg"
  />
);

/* ─── Training Focus Card ─── */
const FocusCard = ({ title, description }) => (
  <div className="flex flex-col gap-2.5">
    <p className="!m-0 text-[20px] font-bold text-white leading-tight" style={{ fontFamily: 'Satoshi, sans-serif' }}>
      {title}
    </p>
    <p className="!m-0 text-[16px] font-normal leading-[1.5] text-white/70" style={{ fontFamily: 'Satoshi, sans-serif' }}>
      {description}
    </p>
  </div>
);

/* ─── Main TrainChamp Section ─── */
function TrainChamp({ className = '' }) {
  return (
    <section className={`w-full px-5 md:px-10 lg:px-24 pt-0 pb-0 font-[Satoshi] relative ${className}`}>

      {/* Header Row */}
      <div className="flex flex-col items-start gap-2 max-w-full text-black/75">

        {/* Top row: left dots + right dots — lg only */}
        <div className="hidden lg:flex w-full justify-between items-start mb-2">
          <div className="flex flex-col gap-1 ml-8" style={{ transform: 'rotate(165deg)' }}>
            {/* Row 1: 1 dot */}
            <div className="flex items-center gap-0">
              <Dot />
            </div>
            {/* Row 2: 3 dots (2nd is gap) */}
            <div className="flex items-center gap-0">
              <Dot /><div className="w-[22px] h-[37px] invisible" /><Dot /><div className="w-[22px] h-[37px] invisible" /><Dot />
            </div>
            {/* Row 3: 3 dots (2nd is gap) */}
            <div className="flex items-center gap-0">
              <Dot /><div className="w-[22px] h-[37px] invisible" /><Dot /><div className="w-[22px] h-[37px] invisible" /><Dot />
            </div>
            {/* Row 4: 2nd and 4th dot only */}
            <div className="flex items-center gap-0">
              <div className="w-[22px] h-[37px] invisible" /><Dot /><div className="w-[22px] h-[37px] invisible" /><Dot />
            </div>
          </div>

          <div className="flex flex-col gap-1 mr-8" style={{ transform: 'rotate(90deg)' }}>
            {/* Row 1: 1 dot */}
            <div className="flex items-center gap-0">
              <Dot />
            </div>
            {/* Row 2: 3 dots (2nd is gap) */}
            <div className="flex items-center gap-0">
              <Dot /><div className="w-[22px] h-[37px] invisible" /><Dot /><div className="w-[22px] h-[37px] invisible" /><Dot />
            </div>
            {/* Row 3: 3 dots (2nd is gap) */}
            <div className="flex items-center gap-0">
              <Dot /><div className="w-[22px] h-[37px] invisible" /><Dot /><div className="w-[22px] h-[37px] invisible" /><Dot />
            </div>
            {/* Row 4: 2nd and 4th dot only */}
            <div className="flex items-center gap-0">
              <div className="w-[22px] h-[37px] invisible" /><Dot /><div className="w-[22px] h-[37px] invisible" /><Dot />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-5 w-full">
          <h2
            className="text-[32px] md:text-[36px] font-bold leading-[44px] md:leading-[49px] !m-0 text-black whitespace-nowrap"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            Train Like a Champion
          </h2>
        </div>

        <h3
          className="text-[20px] md:text-[24px] font-medium leading-[28px] md:leading-[32px] !m-0 text-black/75"
          style={{ fontFamily: 'Satoshi, sans-serif' }}
        >
          Unleash Your Power with Expert Boxing Training
        </h3>
      </div>

      {/* Main Content Card */}
      <div className="relative rounded-[30px] md:rounded-[40px] bg-black overflow-hidden p-6 md:p-10 lg:p-12 mt-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

          {/* Left: Image */}
          <div className="w-full lg:w-[400px] shrink-0">
            <div className="relative rounded-[20px] overflow-hidden">
              <img
                className="w-full h-auto object-cover"
                loading="lazy"
                alt="Boxing trainer"
                src="/portrait-anime-character-doing-fitness-exercising-2-1@2x.png"
              />
            </div>
          </div>

          {/* Center: Training Focus Areas */}
          <div className="flex-1 flex flex-col gap-8">
            <h4
              className="!m-0 text-[22px] md:text-[24px] font-bold text-white leading-[30px]"
              style={{ fontFamily: 'Satoshi, sans-serif' }}
            >
              Training Focus Areas:
            </h4>
            <div className="flex flex-col gap-6">
              <FocusCard
                title="Strength & Conditioning"
                description="Develop knockout power with a mix of strength training and explosive movements."
              />
              <FocusCard
                title="Speed & Agility"
                description="Sharpen your reflexes and footwork with dynamic drills that improve speed and coordination."
              />
              <FocusCard
                title="Endurance Training"
                description="Boost your stamina with high-intensity circuits that keep you fighting strong till the final round."
              />
            </div>
          </div>

          {/* Right: Why Train With Us */}
          <div className="flex-1 flex flex-col gap-8">
            <h4
              className="!m-0 text-[22px] md:text-[24px] font-bold text-white leading-[30px]"
              style={{ fontFamily: 'Satoshi, sans-serif' }}
            >
              Why Train With Us:
            </h4>
            <div className="flex flex-col gap-8">
              <FocusCard
                title="Expert Coaches"
                description="Our experienced boxing trainers have worked with amateur and professional athletes, ensuring you get the best training tailored to your goals."
              />
              <FocusCard
                title="Flexible Programs"
                description="Whether you're a beginner or seasoned boxer, we offer flexible programs that fit your schedule and needs."
              />

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-start gap-6 mt-2">
                <button
                  className="bg-[#57B233] text-white font-bold text-[18px] md:text-[22px] leading-[30px] rounded-[16px] md:rounded-[20px] px-8 md:px-12 py-4 md:py-5 hover:bg-[#4fa02c] transition-colors whitespace-nowrap"
                  style={{ fontFamily: 'Satoshi, sans-serif' }}
                >
                  Punch Now
                </button>
                <div className="h-[56px] md:h-[70px] w-[56px] md:w-[70px] relative shrink-0">
                  <img
                    className="absolute inset-0 w-full h-full rounded-full object-contain"
                    alt=""
                    src="/Ellipse-4-Stroke.svg"
                  />
                  <img
                    className="absolute top-[30%] left-[30%] w-[40%] h-[40%] object-contain"
                    alt="Play"
                    src="/playIcon.png"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default TrainChamp;