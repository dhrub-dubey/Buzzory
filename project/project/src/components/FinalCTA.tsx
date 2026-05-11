import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import VideoCard from './VideoCard';
import vid7 from '../assets/our-work-vid7.mp4';
import vid2 from '../assets/our-work-vid2.mp4';
import vid5 from '../assets/our-work-vid5.mp4';

export default function FinalCTA() {
  const textRef = useRef<HTMLDivElement>(null);
  const videosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [textRef.current, videosRef.current];
    els.forEach((el, i) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) { setTimeout(() => el.classList.add('visible'), i * 120); observer.disconnect(); } },
        { threshold: 0.1 }
      );
      observer.observe(el);
      return () => observer.disconnect();
    });
  }, []);

  return (
    <section className="bg-gray-950 py-28 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div ref={textRef} className="reveal mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4 block">Get Started</span>
          <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6">
            Enough watching others go viral.<br />It's your turn.
          </h2>
          <p className="text-gray-400 text-lg max-w-lg mx-auto mb-8">
          Most influencer campaigns fail because there’s no system behind them. 
          We handle everything — creators, content, execution — so you get results, 
          not just posts.  
          </p>
          {/* <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="group flex items-center gap-2 bg-white text-black font-bold px-8 py-4 rounded-xl hover:bg-gray-100 active:scale-95 transition-all shadow-xl shadow-white/10 text-sm">
              Get started today
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
            onClick={() => {
              const phoneNumber = "918170913636"; // replace with your WhatsApp number
          
              const message = encodeURIComponent(
                "Hi! I want to book a demo call with your agency."
              );
          
              window.open(
                `https://wa.me/${phoneNumber}?text=${message}`,
                "_blank"
              );
            }}
            className="text-gray-400 font-semibold px-8 py-4 rounded-xl border border-gray-700 hover:border-gray-500 hover:text-white transition-all text-sm">
              Book a demo call
            </button>
          </div>
        </div> */}
        <div className="flex items-center justify-center">
          <button
            onClick={() => {
              const phoneNumber = "918170913636";

              const message = encodeURIComponent(
                "Hi! I want to book a demo call with your agency."
              );

              window.open(
                `https://wa.me/${phoneNumber}?text=${message}`,
                "_blank"
              );
            }}
            className="group flex items-center gap-2 bg-white text-black font-bold px-8 py-4 rounded-xl hover:bg-gray-100 active:scale-95 transition-all shadow-xl shadow-white/10 text-sm"
          >
            Book a demo call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        </div>

        {/* Three video cards */}
        <div ref={videosRef} className="reveal">
        <div className="flex items-end justify-center gap-5 lg:gap-8">
        <div className="w-44 sm:w-52 lg:w-64 flex-shrink-0 card-tilt-left opacity-80">
          <VideoCard src={vid7} index={3} aspect="vertical" />
        </div>

        <div className="w-48 sm:w-60 lg:w-72 flex-shrink-0 -mt-10 z-10">
          <VideoCard src={vid2} index={4} aspect="vertical" />
        </div>

        <div className="w-44 sm:w-52 lg:w-64 flex-shrink-0 card-tilt-right opacity-80">
          <VideoCard src={vid5} index={5} aspect="vertical" />
        </div>
      </div>
      </div>
      </div>
    </section>
  );
}
