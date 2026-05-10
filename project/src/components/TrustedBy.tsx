import { useEffect, useRef, useState } from 'react';

const logos = [
  { id: 1, name: 'Decathlon', icon: '◆' },
  { id: 2, name: 'Cashify', icon: '◐' },
  { id: 3, name: 'Fashion Factory', icon: '◉' },
  { id: 4, name: 'Shyamsundar Chandniwala', icon: '✦' },
  { id: 5, name: 'Zoorva', icon: '◈' },
  { id: 6, name: 'Cosmo Bazar', icon: '◎' },
];

export default function TrustedBy() {
  const [offset, setOffset] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const speedRef = useRef(2.85);
  const targetSpeedRef = useRef(2.85);

  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrame: number;
    let lastTime = performance.now();

    const animate = (time: number) => {
      // frame delta
      const delta = Math.min(time - lastTime, 32);
      lastTime = time;

      // target speeds
      targetSpeedRef.current = isHovered ? 0.90 : 1.95;

      // smooth slowdown + smooth speedup
      const easing = 1 - Math.pow(0.92, delta / 16);

      speedRef.current +=
        (targetSpeedRef.current - speedRef.current) * easing;

      setOffset((prev) => {
        const next =
          prev - speedRef.current * (delta / 16);

        // dynamic infinite reset
        const trackWidth =
          trackRef.current?.scrollWidth || 0;

        const halfWidth = trackWidth / 2;

        if (Math.abs(next) >= halfWidth) {
          return 0;
        }

        return next;
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isHovered]);

  return (
    <section className="relative w-full -mt-2 lg:-mt-4 -mb-12 lg:-mb-16 z-20 overflow-visible">
      <div className="max-w-[72rem] mx-auto px-6 lg:pr-20">
        <div className="rounded-3xl py-5 lg:py-6 px-6 overflow-hidden relative">

          {/* Star particles background */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-black rounded-full opacity-30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `twinkle ${3 + Math.random() * 4}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>

          {/* Soft glow backdrop */}
          <div className="absolute inset-0 pointer-events-none rounded-3xl">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative z-10">

            {/* Heading */}
            <div className="text-center mb-16">
              <h2 className="text-black text-lg sm:text-xl md:text-2xl font-semibold tracking-tight">
                Over 50+ businesses trust us
              </h2>
            </div>

            {/* Marquee container */}
            <div
              className="marquee-wrapper relative bg-transparent backdrop-blur-sm rounded-2xl border border-gray-200 py-3 px-4 overflow-hidden"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Left fade */}
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#fafafa] to-transparent z-10 pointer-events-none" />

              {/* Right fade */}
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#fafafa] to-transparent z-10 pointer-events-none" />

              {/* Marquee track */}
              <div
                ref={trackRef}
                className="flex gap-10 sm:gap-14 lg:gap-16 marquee-track"
                style={{
                  transform: `translateX(${offset}px)`,
                }}
              >
                {/* First set */}
                {logos.map((logo) => (
                  <div
                    key={`${logo.id}-1`}
                    className="flex-shrink-0 flex items-center gap-2 sm:gap-3 cursor-pointer"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-black">
                      <span className="text-lg sm:text-xl">
                        {logo.icon}
                      </span>
                    </div>

                    <span className="text-gray-400 text-sm sm:text-base opacity-90 whitespace-nowrap font-medium">
                      {logo.name}
                    </span>
                  </div>
                ))}

                {/* Duplicate set */}
                {logos.map((logo) => (
                  <div
                    key={`${logo.id}-2`}
                    className="flex-shrink-0 flex items-center gap-2 sm:gap-3 cursor-pointer"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-black">
                      <span className="text-lg sm:text-xl">
                        {logo.icon}
                      </span>
                    </div>

                    <span className="text-gray-600 text-sm sm:text-base opacity-90 whitespace-nowrap font-medium">
                      {logo.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .marquee-track {
          width: max-content;
          will-change: transform;
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
}