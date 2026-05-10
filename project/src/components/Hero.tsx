import { ArrowRight, Star, TrendingUp, Users } from 'lucide-react';
import { useEffect, useRef } from 'react';
import VideoCard from './VideoCard';

export default function Hero() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [leftRef.current, rightRef.current];
    els.forEach((el, i) => {
      if (!el) return;
      setTimeout(() => el.classList.add('visible'), i * 150);
    });
  }, []);

  return (
    <section id="about" className="relative min-h-screen bg-white pt-24 pb-16 overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.04) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Gradient blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-50 rounded-full blur-[120px] opacity-60 pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-50 rounded-full blur-[100px] opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-8 min-h-[calc(100vh-96px)]">
        {/* Left */}
        <div ref={leftRef} className="reveal flex-1 flex flex-col justify-center lg:max-w-xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 text-xs font-semibold text-gray-700 mb-6 w-fit">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Trusted by 500+ creators & brands
          </div>

          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight text-gray-900 mb-6">
            Influencer marketing that{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                actually
              </span>
              <svg className="absolute -bottom-1 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                <path d="M0,6 Q25,0 50,5 Q75,10 100,4" stroke="#F59E0B" strokeWidth="3" fill="none" strokeLinecap="round"/>
              </svg>
            </span>{' '}
            makes you money.
          </h1>

          <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-md">
            Most influencer campaigns look good. Ours perform.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <button 
               onClick={() => {
                const phoneNumber = "918170913636"; // replace with your WhatsApp number
          
                const message = encodeURIComponent(
                  "Hi! I want to book a campaign with your agency."
                );
          
                window.open(
                  `https://wa.me/${phoneNumber}?text=${message}`,
                  "_blank"
                );
              }}
              className="group flex items-center gap-2 bg-black text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-gray-800 active:scale-95 transition-all shadow-lg shadow-black/10">
              Book A Campaign
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>


            <button 
             onClick={() => {
             const section = document.getElementById("our-work");

             if (section) {
               section.scrollIntoView({
                 behavior: "smooth",
                 block: "start",
               });
             }
           }}
            className="flex items-center gap-2 text-gray-700 font-semibold px-6 py-3.5 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all">
              See our work
            </button>
          </div>

          {/* Social proof row */}
       {/*   <div className="flex flex-wrap items-center gap-6">
            {/* Stars */}
           {/* <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs text-gray-500 font-medium">4.9/5 from 200+ reviews</span>
            </div>

            <div className="w-px h-8 bg-gray-200" />

            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[
                  'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=80',
                  'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=80',
                  'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=80',
                ].map((src, i) => (
                  <img key={i} src={src} alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                ))}
              </div>
              <span className="text-xs text-gray-500 font-medium">500+ happy clients</span>
            </div>

            <div className="w-px h-8 bg-gray-200" />

            <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
              <TrendingUp className="w-4 h-4 text-green-500" />
              2.1B+ total views delivered
            </div>
          </div> */}
          
        </div> 

        {/* Right — video reel */}
        <div ref={rightRef} className="reveal flex-1 flex items-center justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[360px] md:max-w-[400px] lg:max-w-[440px]">
            {/* Background card shadow/blur */}
            {/* <div className="absolute inset-0 scale-[1.01] translate-y-6 rounded-[3.5rem] bg-black/10 blur-3xl opacity-15" /> */}

            {/* Main video card */}
            <div className="relative z-10 rounded-[3.5rem] py-3.5">
            <VideoCard
              index={0}
              aspect="vertical"
              className="w-full max-w-[340px] md:max-w-[380px] lg:max-w-[420px] mx-auto !rounded-[3.5rem]"
            />
            </div>

            {/* Floating stat cards */}
            <div className="absolute -left-8 top-16 z-20 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-3 border border-gray-100">
              <div className="w-9 h-9 rounded-xl bg-green-100 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900">+340%</p>
                <p className="text-[10px] text-gray-500">Engagement</p>
              </div>
            </div>

            <div className="absolute -right-6 bottom-24 z-20 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-3 border border-gray-100">
              <div className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center">
                <Users className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900">12.4K</p>
                <p className="text-[10px] text-gray-500">New followers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
