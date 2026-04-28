import { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Jordan Kim',
    handle: '@jordankim',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=160',
    text: 'Within 3 weeks of working with Influence, one of our Reels hit 1.2M views. The content strategy they put in place is unlike anything I had before.',
    stars: 5,
  },
  {
    name: 'Marcus Reid',
    handle: '@marcusreid',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=160',
    text: 'The turnaround is insane — 48 hours from raw clip to polished, ready-to-post video. We scaled our posting from 2x/week to every single day.',
    stars: 5,
  },
  {
    name: 'Priya Nair',
    handle: '@priyanair_',
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=160',
    text: 'Finally found an agency that actually understands short-form. They know hooks, pacing, and the algorithm better than anyone. Game changer.',
    stars: 5,
  },
  {
    name: 'Tyler Brooks',
    handle: '@tylerb',
    image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=160',
    text: 'Went from 12K to 89K followers in 60 days. The editing quality is premium and they actually care about your growth, not just deliverables.',
    stars: 5,
  },
  {
    name: 'Sofia Chen',
    handle: '@sofiac_',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=160',
    text: 'Every video they produce looks like it came from a major studio but posted in 2 days. My brand has never looked this professional.',
    stars: 5,
  },
  {
    name: 'Devin Walsh',
    handle: '@devinwalsh',
    image: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=160',
    text: 'ROI is undeniable. Our DM volume tripled after our first month. The team is responsive, talented, and actually delivers what they promise.',
    stars: 5,
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'left' ? -340 : 340, behavior: 'smooth' });
  };

  return (
    <section className="bg-gray-50 py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={sectionRef} className="reveal text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-3 block">Testimonials</span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            What clients say after they got viral.
          </h2>
          <p className="text-gray-500 text-lg max-w-lg mx-auto">
            Don't take our word for it — hear from creators and brands who've seen the results.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 -mx-6 px-6"
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex-none w-80 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-5">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.handle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
