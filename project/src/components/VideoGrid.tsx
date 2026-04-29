import vid1 from '../assets/our-work-vid1.mp4';
import vid2 from '../assets/our-work-vid2.mp4';
import vid3 from '../assets/our-work-vid3.mp4';
import vid4 from '../assets/our-work-vid4.mp4';
import vid5 from '../assets/our-work-vid5.mp4';
import vid6 from '../assets/our-work-vid6.mp4';
import vid7 from '../assets/our-work-vid7.mp4';


import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import VideoCard from './VideoCard';

export default function VideoGrid() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Original 7 videos
  const baseVideos = [
    vid1,
    vid2,
    vid3,
    vid4,
    vid5,
    vid6,
    vid7,
  ];

  // Duplicate for infinite loop feeling
  const videos = [...baseVideos, ...baseVideos, ...baseVideos];

  // Start from middle set
  const startIndex = 7 + 3;

  const [active, setActive] = useState(startIndex);

  useEffect(() => {
    scrollToIndex(startIndex, false);
  }, []);

  const scrollToIndex = (
    index: number,
    smooth: boolean = true
  ) => {
    const el = scrollRef.current;
    if (!el) return;

    const card = el.children[index] as HTMLElement;
    if (!card) return;

    const left =
      card.offsetLeft -
      (el.clientWidth / 2 - card.clientWidth / 2);

    el.scrollTo({
      left,
      behavior: smooth ? 'smooth' : 'auto',
    });

    setActive(index);
  };

  const next = () => {
    scrollToIndex(active + 1);
  };

  const prev = () => {
    scrollToIndex(active - 1);
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const center = el.scrollLeft + el.clientWidth / 2;

    let closest = 0;
    let closestDistance = Infinity;

    [...el.children].forEach((child, index) => {
      const item = child as HTMLElement;
      const itemCenter =
        item.offsetLeft + item.clientWidth / 2;

      const dist = Math.abs(center - itemCenter);

      if (dist < closestDistance) {
        closestDistance = dist;
        closest = index;
      }
    });

    setActive(closest);

    // Infinite reset logic
    if (closest <= 2) {
      const newIndex = closest + 7;
      scrollToIndex(newIndex, false);
    }

    if (closest >= videos.length - 3) {
      const newIndex = closest - 7;
      scrollToIndex(newIndex, false);
    }
  };

  return (
    <section className="bg-white py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-3 block">
            Our Work
          </span>

          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4 leading-tight">
            Proof that we don't just talk big.
            <br />
            We deliver bigger.
          </h2>

          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            We don’t show nice-looking content.
            We show campaigns that drive attention,
            clicks, and conversions.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">

          {/* Left */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-xl border border-gray-100 flex items-center justify-center hover:scale-110 transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right */}
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-xl border border-gray-100 flex items-center justify-center hover:scale-110 transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Cards */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-8 overflow-x-auto scrollbar-hide px-24 py-6"
          >
            {videos.map((video, index) => (
              <div
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`flex-none w-[320px] cursor-pointer transition-all duration-500 ${
                  active === index
                    ? 'scale-105 opacity-100 z-10'
                    : 'scale-90 opacity-40'
                }`}
              >
                <div className="rounded-3xl overflow-hidden shadow-xl">
                  <VideoCard
                    src={video}
                    aspect="vertical"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
