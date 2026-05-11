import Navbar from './components/Navbar';
import Hero from './components/Hero';
//import TrustedBy from './components/TrustedBy';
import FeatureSplit from './components/FeatureSplit';
import VideoGrid from './components/VideoGrid';
//import Testimonials from './components/Testimonials';
import Process from './components/Process';
// import Pricing from './components/Pricing';
//import Reviews from './components/Reviews';
import Services from './components/Services';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      {/* <TrustedBy /> */}
      <FeatureSplit />
      <VideoGrid />
      {/* <Testimonials /> */}
      <Process />
      {/* <Pricing /> */}
      {/* <Reviews /> */}
      <Services />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
