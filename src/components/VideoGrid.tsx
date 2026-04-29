import { useEffect, useRef } from 'react';
import VideoCard from './VideoCard';

export default function VideoGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [sectionRef.current, gridRef.current];
    els.forEach((el) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.disconnect(); } },
        { threshold: 0.08 }
      );
      observer.observe(el);
      return () => observer.disconnect();
    });
  }, []);

  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={sectionRef} className="reveal text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-3 block">Our Work</span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4 leading-tight">
            Proof that we don't just talk big.<br />We deliver bigger.
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
          We don’t show “nice-looking content.” We show campaigns that drive attention, clicks, and 
          conversions. 
          </p>
        </div>

        <div ref={gridRef} className="reveal-stagger grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="group hover:scale-[1.02] transition-transform duration-300">
              <VideoCard index={i} aspect="vertical" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
