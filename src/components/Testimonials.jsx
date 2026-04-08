/* ─── Testimonial Card ─── */
const TestimonialCard = ({ avatar, shadow, className = '' }) => {
  const stars = [1, 2, 3, 4].fill('filled').concat(['half']);

  return (
    <div
      className={`relative rounded-[25px] bg-black text-white overflow-hidden
        w-full max-w-[450px] min-h-[320px] p-8 flex flex-col justify-between
        ${shadow ? 'shadow-[0px_20px_40px_rgba(0,0,0,0.3)]' : ''} ${className}`}
      style={{ fontFamily: 'Satoshi, sans-serif' }}
    >
      {/* Quote text */}
      <div className="flex flex-col gap-4">
        <h4
          className="!m-0 text-[20px] md:text-[22px] font-medium text-white leading-tight"
          style={{ fontFamily: 'Satoshi, sans-serif' }}
        >
          The Best Training Program!
        </h4>
        <p
          className="!m-0 text-[15px] md:text-[16px] font-normal leading-[1.6] text-white/70"
          style={{ fontFamily: 'Satoshi, sans-serif' }}
        >
          The boxing program helped me build confidence, strength, and endurance.
          The coaches are supportive and push you to be your best. Highly recommend
          for anyone serious about their fitness!
        </p>
      </div>

      {/* Author info */}
      <div className="flex items-end gap-4 mt-6">
        <img
          className="w-[56px] h-[56px] rounded-full object-cover shrink-0"
          alt=""
          src={avatar}
        />
        <div className="flex flex-col justify-end">
          <p
            className="!m-0 text-[18px] md:text-[20px] font-medium text-white"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            Stive meloni
          </p>
          <p
            className="!m-0 text-[14px] md:text-[16px] font-normal text-white/70"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            Ceo Of Miko
          </p>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          {stars.map((s, i) => (
            <img
              key={i}
              className="h-3 w-3"
              alt=""
              src={s === 'filled' ? '/Star-Icon1.svg' : '/Star-23.svg'}
            />
          ))}
          <span className="text-white text-xs font-medium" style={{ fontFamily: 'Satoshi, sans-serif' }}>(4.5)</span>
        </div>
      </div>
    </div>
  );
};

/* ─── Dot helper ─── */
const Dot = ({ className = '' }) => (
  <img
    className={`h-[37px] w-[22px] relative object-contain ${className}`}
    style={{ filter: 'brightness(0)', opacity: 0.4 }}
    alt=""
    src="/Polygon-132.svg"
  />
);

/* ─── Main Testimonials Section ─── */
function Testimonials({ className = '' }) {
  const cards = [
    { avatar: '/man-5-1@2x.png', shadow: true },
    { avatar: '/man-5-12@2x.png', shadow: false },
    { avatar: '/man-5-14@2x.png', shadow: false },
    { avatar: '/man-5-13@2x.png', shadow: false },
    { avatar: '/man-5-15@2x.png', shadow: false },
    { avatar: '/man-5-11@2x.png', shadow: true },
  ];

  return (
    <section className={`w-full px-5 md:px-10 lg:px-24 pt-0 pb-0 font-[Satoshi] relative ${className}`}>
      {/* Decorative dots — top left + top right */}
      <div className="hidden lg:flex w-full justify-between items-start mb-0">
        {/* Left: rotated 165° */}
        <div className="flex flex-col gap-0" style={{ transform: 'rotate(165deg)' }}>
          {/* Row 1: 1 and 3 */}
          <div className="flex items-center gap-px">
            <Dot /><div className="w-[22px] h-[37px] invisible" /><Dot /><div className="w-[22px] h-[37px] invisible" /><div className="w-[22px] h-[37px] invisible" />
          </div>
          {/* Row 2: 1, 2 and 4 */}
          <div className="flex items-center gap-px">
            <Dot /><div className="w-[22px] h-[37px] invisible" /><Dot /><div className="w-[22px] h-[37px] invisible" /><Dot />
          </div>
          {/* Row 3: 2, 3 and 4 */}
          <div className="flex items-center gap-px">
            <div className="w-[22px] h-[37px] invisible" /><Dot /><Dot /><Dot /><div className="w-[22px] h-[37px] invisible" />
          </div>
          {/* Row 4: just 4th */}
          <div className="flex items-center gap-px">
            <div className="w-[22px] h-[37px] invisible" /><div className="w-[22px] h-[37px] invisible" /><div className="w-[22px] h-[37px] invisible" /><Dot /><div className="w-[22px] h-[37px] invisible" />
          </div>
        </div>

        {/* Right: same pattern, no rotation */}
        <div className="flex flex-col gap-0">
          {/* Row 1: 1 and 3 */}
          <div className="flex items-center gap-px">
            <Dot /><div className="w-[22px] h-[37px] invisible" /><Dot /><div className="w-[22px] h-[37px] invisible" /><div className="w-[22px] h-[37px] invisible" />
          </div>
          {/* Row 2: 1, 2 and 4 */}
          <div className="flex items-center gap-px">
            <Dot /><div className="w-[22px] h-[37px] invisible" /><Dot /><div className="w-[22px] h-[37px] invisible" /><Dot />
          </div>
          {/* Row 3: 2, 3 and 4 */}
          <div className="flex items-center gap-px">
            <div className="w-[22px] h-[37px] invisible" /><Dot /><Dot /><Dot /><div className="w-[22px] h-[37px] invisible" />
          </div>
          {/* Row 4: just 4th */}
          <div className="flex items-center gap-px">
            <div className="w-[22px] h-[37px] invisible" /><div className="w-[22px] h-[37px] invisible" /><div className="w-[22px] h-[37px] invisible" /><Dot /><div className="w-[22px] h-[37px] invisible" />
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="flex flex-col items-start gap-2 max-w-full text-black/75 mt-4 mb-10">

        <h2
          className="text-[28px] md:text-[36px] lg:text-[42px] font-bold leading-[40px] md:leading-[49px] lg:leading-[60px] !m-0 text-black whitespace-nowrap"
          style={{ fontFamily: 'Satoshi, sans-serif' }}
        >
          What Our Clients Are Saying
        </h2>

        <p
          className="!m-0 text-[18px] md:text-[20px] font-medium leading-[28px] text-black/75"
          style={{ fontFamily: 'Satoshi, sans-serif' }}
        >
          Real Stories, Real Results — Hear From Our Athletes
        </p>
      </div>

      {/* Cards Grid */}
      <div className="bg-[rgba(0,0,0,0.05)] rounded-[30px] md:rounded-[40px] p-6 md:p-8 lg:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <TestimonialCard
              key={i}
              avatar={card.avatar}
              shadow={card.shadow}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
