import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import VideoCard from './VideoCard';

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
            Your profile growth is only<br />a few edits away.
          </h2>
          <p className="text-gray-400 text-lg max-w-lg mx-auto mb-8">
            Join 500+ creators and brands who turned raw footage into revenue-driving content. Start today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="group flex items-center gap-2 bg-white text-black font-bold px-8 py-4 rounded-xl hover:bg-gray-100 active:scale-95 transition-all shadow-xl shadow-white/10 text-sm">
              Get started today
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="text-gray-400 font-semibold px-8 py-4 rounded-xl border border-gray-700 hover:border-gray-500 hover:text-white transition-all text-sm">
              Book a demo call
            </button>
          </div>
        </div>

        {/* Three video cards */}
        <div ref={videosRef} className="reveal">
          <div className="flex items-end justify-center gap-4 lg:gap-6">
            <div className="w-36 sm:w-44 lg:w-52 flex-shrink-0 card-tilt-left opacity-80">
              <VideoCard index={3} aspect="vertical" />
            </div>
            <div className="w-40 sm:w-48 lg:w-56 flex-shrink-0 -mt-8 z-10">
              <VideoCard index={4} aspect="vertical" />
            </div>
            <div className="w-36 sm:w-44 lg:w-52 flex-shrink-0 card-tilt-right opacity-80">
              <VideoCard index={5} aspect="vertical" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
