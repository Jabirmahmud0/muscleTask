import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div
      style={{
        backgroundImage: 'url(/hero_bg.svg)',
        backgroundSize: '85% auto',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}
    >
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
