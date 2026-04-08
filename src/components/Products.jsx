const products = [
  {
    id: 1,
    name: 'Mint flavor chocolate',
    price: '₹399.00',
    rating: 4,
    image: '/1.png',
  },
  {
    id: 2,
    name: 'Mint flavor chocolate',
    price: '₹399.00',
    rating: 4,
    image: '/2.png',
  },
  {
    id: 3,
    name: 'Mint flavor chocolate',
    price: '₹399.00',
    rating: 4,
    image: '/3.png',
  },
  {
    id: 4,
    name: 'Mint flavor chocolate',
    price: '₹399.00',
    rating: 4,
    image: '/4.png',
  },
  {
    id: 5,
    name: 'Mint flavor chocolate',
    price: '₹399.00',
    rating: 4,
    image: '/5.png',
  },
  {
    id: 6,
    name: 'Mint flavor chocolate',
    price: '₹399.00',
    rating: 4,
    image: '/6.png',
  },
];

/* ─── Star Rating Component ─── */
const StarRating = ({ rating, total = 5 }) => (
  <div className="flex items-start gap-1.5">
    {Array.from({ length: total }).map((_, i) => (
      <img
        key={i}
        className="h-[15px] w-[15px] relative"
        alt={i < rating ? 'filled star' : 'empty star'}
        src={i < rating ? '/Stars-Filled1.svg' : '/Star-18.svg'}
      />
    ))}
  </div>
);

/* ─── Decorative Polygon Dot ─── */
const Dot = ({ className = '' }) => (
  <img
    className={`h-[37px] w-[22px] relative object-contain ${className}`}
    alt=""
    src="/Polygon-132.svg"
  />
);

/* ─── Product Card Component ─── */
const ProductCard = ({ name, price, rating, image, className = '' }) => (
  <section
    className={`h-[420px] w-full max-w-[545px] relative text-left text-2xl text-[#fff] font-[Satoshi] rounded-[25px] bg-[#000] overflow-hidden mq900:min-w-full ${className}`}
  >
    {/* Product Image + Cart Button */}
    <div className="absolute top-[26px] left-[26px] w-[calc(100%-52px)] h-[calc(100%-52px)] flex flex-col items-end gap-[20px] max-w-full z-[2]">
      <img
        className="self-stretch flex-1 relative rounded-[20px] max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt={name}
        src={image}
      />
      {/* Add to Cart Button */}
      <div className="w-[56px] flex items-start">
        <div className="h-[56px] flex-1 relative">
          <div className="absolute top-[0px] left-[0px] rounded-[10px] bg-[#57b233] w-full h-full" />
          <img
            className="absolute top-[18px] left-[18px] w-[18px] h-[19px] z-[1]"
            alt="Add to cart"
            src="/Union.svg"
          />
        </div>
      </div>
    </div>

    {/* Product Info — bottom left */}
    <div className="absolute bottom-[10px] left-[26px] w-[227px] flex items-start z-[3]">
      <div className="flex-1 flex items-start">
        <div className="flex-1 flex items-start">
          <div className="flex-1 flex flex-col items-start gap-3">
            <p className="!m-0 self-stretch relative text-2xl font-medium mq450:text-[19px]">
              {name}
            </p>
            <div className="self-stretch flex items-start gap-[17px] text-[28px]">
              <p className="!m-0 flex-1 relative text-[28px] font-medium mq450:text-[22px]">
                {price}
              </p>
              <div className="flex flex-col items-start !pt-3 !pb-0 !pl-0 !pr-0">
                <StarRating rating={rating} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─── Products Header Component ─── */
const ProductsHeader = ({ className = '' }) => (
  <section
    className={`w-full flex flex-col items-start gap-4 max-w-full shrink-0 text-left text-2xl text-[rgba(0,0,0,0.75)] font-[Satoshi] ${className}`}
  >
    {/* Decorative dot grid — hidden on mobile, shown on lg+ */}
    <div className="self-stretch flex flex-col items-end max-w-full hidden lg:flex">
      <div className="flex items-start flex-wrap content-start !pt-0 !pb-0 !pl-5 !pr-0 box-border gap-2 shrink-0 max-w-full">
        <Dot className="z-[1]" />
        <div className="flex-1 flex flex-col items-start min-w-[816px] max-w-full mq1275:min-w-full">
          <Dot />
        </div>
        <div className="w-[52px] flex flex-col items-start !pt-2 !pb-0 !pl-0 !pr-0 box-border">
          <div className="self-stretch h-[37px] relative">
            <Dot className="absolute top-[0px] left-[30px]" />
            <Dot className="absolute top-[0px] left-[0px] z-[1]" />
          </div>
        </div>
      </div>

      {/* Decorative dot grid — Row 2 */}
      <div className="w-full flex items-start justify-end !pt-0 !pb-0 !pl-[30px] !pr-[30px] box-border max-w-full !mt-[-8px] relative">
        <div className="flex-1 flex items-start flex-wrap content-start gap-2 shrink-0 max-w-full">
          <Dot className="z-[2]" />
          <div className="flex-1 flex flex-col items-start min-w-[816px] max-w-full mq1275:min-w-full">
            <Dot />
          </div>
          <div className="w-[52px] flex flex-col items-start !pt-2 !pb-0 !pl-0 !pr-0 box-border">
            <div className="self-stretch h-[37px] relative">
              <Dot className="absolute top-[0px] left-[30px]" />
              <Dot className="absolute top-[0px] left-[0px] z-[2]" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative dot grid — Row 3 */}
      <div className="flex items-start flex-wrap content-start !pt-0 !pb-0 !pl-5 !pr-0 box-border gap-[38px] shrink-0 max-w-full !mt-[-8px] relative">
        <Dot className="z-[1]" />
        <div className="flex-1 flex flex-col items-start min-w-[777px] max-w-full mq900:min-w-full">
          <Dot />
        </div>
        <div className="w-[82px] flex flex-col items-start !pt-2 !pb-0 !pl-0 !pr-0 box-border">
          <div className="self-stretch flex items-start justify-between gap-5">
            <Dot className="z-[1]" />
            <Dot />
          </div>
        </div>
      </div>

      {/* Title + dot row */}
      <div className="self-stretch flex items-start justify-start !pt-0 !pb-0 !pl-0 !pr-0 box-border max-w-full !mt-[-8px] relative">
        <div className="flex-1 flex items-start justify-start gap-5 shrink-0 max-w-full mq450:flex-wrap mq450:gap-5">
          <div className="h-[57.5px] w-[299px] relative">
            <h2
              className="!m-0 relative z-[1] font-bold text-[36px] leading-[49px] text-black whitespace-nowrap"
              style={{
                fontFamily: 'Satoshi, sans-serif',
                width: 'auto',
                minWidth: '233px',
                height: '49px',
              }}
            >
              Our Products
            </h2>
            {/* Dots next to title */}
            <Dot className="absolute top-[0px] left-[217px]" />
            <Dot className="absolute top-[0px] left-[247px]" />
            <Dot className="absolute top-[0px] left-[277px]" />
          </div>
          <div className="flex flex-col items-start !pt-2 !pb-0 !pl-0 !pr-0">
            <div className="flex items-start gap-2">
              <Dot />
              <Dot />
              <Dot />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Mobile-friendly header */}
    <div className="lg:hidden flex flex-col items-start gap-2">
      <h2
        className="!m-0 font-bold text-[36px] leading-[49px] text-black whitespace-nowrap"
        style={{ fontFamily: 'Satoshi, sans-serif' }}
      >
        Our Products
      </h2>
      <p
        className="!m-0 text-2xl font-medium leading-[32px] text-[rgba(0,0,0,0.75)]"
        style={{ fontFamily: 'Satoshi, sans-serif' }}
      >
        Fuel Your Workouts with Protein-Packed Nutrition
      </p>
    </div>

    {/* Subtitle — desktop only */}
    <p
      className="!m-0 relative inline-block max-w-full ml-[-18px] text-2xl font-medium leading-[32px] text-[rgba(0,0,0,0.75)] desktop-only"
      style={{
        fontFamily: 'Satoshi, sans-serif',
        width: '535px',
        height: '32px',
      }}
    >
      Fuel Your Workouts with Protein-Packed Nutrition
    </p>
  </section>
);

/* ─── Main Products Section ─── */
function Products({ className = '' }) {
  return (
    <section
      className={`w-full px-5 md:px-10 lg:px-24 py-12 font-[Satoshi] ${className}`}
    >
      <ProductsHeader />

      {/* Product Grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[6px] gap-y-[6px] justify-items-center">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            rating={product.rating}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Products;