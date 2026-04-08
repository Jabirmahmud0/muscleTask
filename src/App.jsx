import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import TrainChamp from './components/TrainChamp';

function App() {
  return (
    <div className="w-full min-h-screen
        lg:bg-[url('/hero_bg.svg')] lg:bg-top lg:bg-no-repeat lg:bg-[length:85%]">

      {/* lg: Navbar sits outside (handled by SVG bg) */}
      <div className="hidden lg:block">
        <Navbar />
      </div>

      {/* sm/md: Navbar is INSIDE the dark hero container */}
      <div className="lg:hidden bg-black rounded-t-[20px]">
        <Navbar />
        <Hero />
      </div>

      {/* lg: Hero is outside the dark wrapper */}
      <div className="hidden lg:block">
        <Hero />
      </div>
      <Products />
      <TrainChamp />
    </div>
  );
}

export default App;
