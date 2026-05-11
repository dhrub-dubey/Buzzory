import { useEffect, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import VideoCard from './VideoCard';
import vid6 from '../assets/our-work-vid6.mp4';
import vid4 from '../assets/our-work-vid4.mp4';

function useRevealRef() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function FeatureSplit() {
  const row1Left = useRevealRef();
  const row1Right = useRevealRef();
  const row2Left = useRevealRef();
  const row2Right = useRevealRef();

  return (
    <section id="work" className="bg-gray-50 py-28">
      <div className="max-w-7xl mx-auto px-6 space-y-28">

        {/* Row 1: videos left, text right */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: two overlapping video cards */}
          <div ref={row1Left} className="reveal flex items-center justify-center relative h-[560px]">
            <div className="absolute left-[-10px] top-17.7 w-[250px] lg:w-[280px] z-10 card-tilt-left">
              <VideoCard src={vid6} index={1} aspect="vertical" />
            </div>

            <div className="absolute right-[-10px] top-17.7 w-[250px] lg:w-[280px] z-20 card-tilt-right">
              <VideoCard src={vid4} index={2} aspect="vertical" />
            </div>
          </div>

          {/* Right: text */}
          <div ref={row1Right} className="reveal">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-3 block">Content Strategy</span>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-5">
              People don’t watch ads anymore. They scroll past them.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Your audience isn’t sitting in front of TV commercials. 
              They’re on Instagram, YouTube, and Reels — trusting creators more than brands. <br /> <br />
              Attention has moved. 
              If your marketing hasn’t, you’re already behind. 
              <br /> <br />
              <strong className="text-gray-900 font-bold">
                No attention = no sales. Simple math.
              </strong>


            </p>
            <ul className="space-y-3">
              {['People trust creators more than brand ads', 'Short-form content is where decisions are made', 'Traditional ads get skipped. Creator content gets watched', 'Your competitors are already in their feed'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Row 2: text left, horizontal video right */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div ref={row2Left} className="reveal order-2 lg:order-1">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-500 mb-3 block">Full Production</span>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-5">
              No random influencers. No “bhai post kar dena” strategy.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Most brands try influencer marketing once…<br />
              Pick random creators…<br />
              Post content…<br />
              And then say “it didn’t work.” <br /><br /> 
              Of course it didn’t. <br /><br />
              Influencer marketing without strategy is just expensive content.<br /><br />
              <strong className="text-gray-900 font-bold">We fix that.</strong>
            </p>
            <ul className="space-y-3">
              {['Strategy-led content, not random posting', 'Creators selected with purpose', 'Performance-focused editing & optimization', 'Direct upload to your accounts'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-sky-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: landscape video */}
          <div ref={row2Right} className="reveal order-1 lg:order-2">
            <VideoCard index={0} aspect="horizontal" className="w-full shadow-2xl hover:scale-[1.02] transition-transform duration-300" />
          </div>
        </div>

      </div>
    </section>
  );
}
