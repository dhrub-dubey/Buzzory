import { useEffect, useRef } from 'react';
import { Check, Rocket, Video, UserRound  } from 'lucide-react';

const services = [
  {
    icon: Rocket,
    name: 'Influencer Marketing',
    tagline: 'No random creators. Only campaigns that convert.',
    desc: 'We plan, execute, and manage influencer campaigns end-to-end — from finding the right creators to tracking real results.',
    features: [
      'No "bhai post kar dena" strategy.',
      'Creator vetting & audience analysis',
      'Campaign performance tracking',
      'Direct ROI measurement',
    ],
    highlight: false,
    color: 'bg-rose-500',
  },
  {
    icon: Video,
    name: 'Ad Production',
    tagline: 'Content that doesn\'t just look good — it sells.',
    desc: 'We create performance-driven ads with strong hooks, scripts, and execution — built for Reels, Shorts, and paid campaigns.',
    features: [
      'Pretty videos are easy. Profitable ones aren\'t.',
      'Platform-native formatting',
      'A/B testing & iteration',
      'Conversion-focused editing',
    ],
    highlight: true,
    color: 'bg-sky-500',
  },
  {
    icon: UserRound,
    name: 'Talent Management',
    tagline: 'Creators, managed like assets — not chaos.',
    desc: 'We handle creators professionally — brand deals, content direction, and growth — so both brands and influencers actually win.',
    features: [
      'No missed deadlines. No confusion.',
      'Brand partnership negotiation',
      'Content strategy & planning',
      'Growth & monetization focus',
    ],
    highlight: false,
    color: 'bg-amber-500',
  },
];

export default function Services() {
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
    <section id="services" className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={sectionRef} className="reveal text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-600 mb-3 block">Services</span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg max-w-lg mx-auto">
            Full-service solutions designed to scale your brand's impact across every platform.
          </p>
        </div>

        <div ref={gridRef} className="reveal-stagger grid md:grid-cols-3 gap-5 items-stretch">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 flex flex-col ${
                  service.highlight
                    ? 'bg-gray-900 shadow-xl border border-gray-800 scale-105 z-10'
                    : 'bg-gray-50 border border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center mb-5 flex-shrink-0`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <p className={`text-sm font-bold mb-2 ${service.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                  SERVICE {i + 1}
                </p>

                <h3 className={`text-2xl font-black mb-2 ${service.highlight ? 'text-white' : 'text-gray-900'}`}>
                  {service.name}
                </h3>

                <p className={`text-sm font-semibold mb-4 ${service.highlight ? 'text-gray-300' : 'text-gray-600'}`}>
                  {service.tagline}
                </p>

                <div className={`w-full h-px mb-5 ${service.highlight ? 'bg-gray-700' : 'bg-gray-200'}`} />

                <p className={`text-sm leading-relaxed mb-6 flex-grow ${service.highlight ? 'text-gray-400' : 'text-gray-600'}`}>
                  {service.desc}
                </p>

                <ul className="space-y-3">
                  {service.features.map((f) => (
                    <li key={f} className={`flex items-start gap-3 text-sm ${service.highlight ? 'text-gray-300' : 'text-gray-700'}`}>
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${service.highlight ? 'text-green-400' : 'text-green-500'}`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
