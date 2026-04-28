import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureSplit from './components/FeatureSplit';
import VideoGrid from './components/VideoGrid';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Reviews from './components/Reviews';
import Blog from './components/Blog';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeatureSplit />
      <VideoGrid />
      <Testimonials />
      <Process />
      <Pricing />
      <Reviews />
      <Blog />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
