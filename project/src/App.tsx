import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClientTestimonials from './components/ClientTestimonials';
import FestiveOffer from './components/FestiveOffer';
import FestiveCampaignPage from './components/FestiveCampaignPage';
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
  const festivePage = window.location.pathname.replace(/\/+$/, '') === '/festive-offer';

  useEffect(() => {
    if (festivePage || !window.location.hash) return;
    const frame = window.requestAnimationFrame(() => {
      const target = document.querySelector(window.location.hash);
      if (!target) return;
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [festivePage]);

  if (festivePage) {
    return <FestiveCampaignPage />;
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ClientTestimonials />
      <FestiveOffer />
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
