import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Products from '../components/Products';
import TrainChamp from '../components/TrainChamp';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

function LandingPage() {
  return (
    <div
      className="w-full min-h-screen
        lg:bg-[url('/hero_bg.svg')] lg:bg-top lg:bg-no-repeat lg:bg-[length:85%]"
    >
      <div className="hidden lg:block">
        <Navbar />
      </div>

      <div className="lg:hidden bg-black rounded-t-[20px]">
        <Navbar />
        <Hero />
      </div>

      <div className="hidden lg:block">
        <Hero />
      </div>
      <Products />
      <TrainChamp />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default LandingPage;
