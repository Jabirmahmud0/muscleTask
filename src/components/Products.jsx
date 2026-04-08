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
    style={{ filter: 'brightness(0)', opacity: 0.4 }}
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
    <div className="hidden lg:flex w-full justify-between items-start mb-2">
      {/* Left dots */}
      <div className="flex flex-col ml-8" style={{ transform: 'rotate(90deg)' }}>
        <div className="flex items-center gap-0">
          <Dot />
        </div>
        <div className="flex items-center gap-0 -mt-3">
          <Dot /><div className="w-[22px] h-[37px] invisible" /><Dot /><div className="w-[22px] h-[37px] invisible" /><Dot />
        </div>
        <div className="flex items-center gap-0 -mt-3">
          <Dot /><div className="w-[22px] h-[37px] invisible" /><Dot /><div className="w-[22px] h-[37px] invisible" /><Dot />
        </div>
        <div className="flex items-center gap-0 -mt-3">
          <div className="w-[22px] h-[37px] invisible" /><Dot /><div className="w-[22px] h-[37px] invisible" /><Dot />
        </div>
      </div>

      {/* Right dots */}
      <div className="flex flex-col mr-8" style={{ transform: 'rotate(90deg)' }}>
        <div className="flex items-center gap-0">
          <Dot />
        </div>
        <div className="flex items-center gap-0 -mt-3">
          <Dot /><div className="w-[22px] h-[37px] invisible" /><Dot /><div className="w-[22px] h-[37px] invisible" /><Dot />
        </div>
        <div className="flex items-center gap-0 -mt-3">
          <Dot /><div className="w-[22px] h-[37px] invisible" /><Dot /><div className="w-[22px] h-[37px] invisible" /><Dot />
        </div>
        <div className="flex items-center gap-0 -mt-3">
          <div className="w-[22px] h-[37px] invisible" /><Dot /><div className="w-[22px] h-[37px] invisible" /><Dot />
        </div>
      </div>
    </div>

    {/* Desktop title */}
    <div className="hidden lg:block">
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
  </section>
);

/* ─── Main Products Section ─── */
function Products({ className = '' }) {
  return (
    <section
      className={`w-full px-5 md:px-10 lg:px-24 pt-12 pb-2 font-[Satoshi] ${className}`}
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
