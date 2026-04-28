import { useEffect, useRef } from 'react';
import { Check, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 497,
    period: '/mo',
    desc: 'Perfect for solo creators building their presence.',
    features: [
      '8 short-form videos/month',
      'Captions & subtitles',
      'Basic color grading',
      '2 revision rounds',
      '5-day delivery',
      'Email support',
    ],
    cta: 'Get started',
    highlight: false,
  },
  {
    name: 'Growth',
    price: 997,
    period: '/mo',
    desc: 'For brands and creators serious about scale.',
    features: [
      '20 short-form videos/month',
      'Advanced captions & animations',
      'Full color grading + sound design',
      'Unlimited revisions',
      '48-hour delivery',
      'Priority Slack support',
      'Monthly strategy call',
      'Platform-specific optimization',
    ],
    cta: 'Start growing',
    highlight: true,
    badge: 'Most Popular',
  },
  {
    name: 'Agency',
    price: 2497,
    period: '/mo',
    desc: 'Full-service content production for teams.',
    features: [
      '50+ short-form videos/month',
      'Full production suite',
      'Dedicated editor + strategist',
      'Unlimited revisions',
      '24-hour delivery',
      'Dedicated account manager',
      'Weekly strategy calls',
      'Multi-platform management',
      'White-label delivery',
    ],
    cta: 'Contact us',
    highlight: false,
  },
];

export default function Pricing() {
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
    <section id="pricing" className="bg-gray-950 py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={sectionRef} className="reveal text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3 block">Pricing</span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Flexible plans built for growth.
          </h2>
          <p className="text-gray-400 text-lg max-w-lg mx-auto">
            Choose the plan that matches your ambition. All plans include our core editing process.
          </p>
        </div>

        <div ref={gridRef} className="reveal-stagger grid md:grid-cols-3 gap-5 items-center">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                plan.highlight
                  ? 'bg-white shadow-2xl shadow-white/10 scale-105 z-10'
                  : 'bg-gray-900 border border-gray-800 hover:border-gray-700'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-amber-500 text-black text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5">
                    <Zap className="w-3 h-3 fill-black" />
                    {plan.badge}
                  </span>
                </div>
              )}

              <p className={`text-sm font-bold mb-1 ${plan.highlight ? 'text-amber-500' : 'text-gray-400'}`}>{plan.name}</p>
              <div className="flex items-end gap-1 mb-2">
                <span className={`text-5xl font-black ${plan.highlight ? 'text-gray-900' : 'text-white'}`}>
                  ${plan.price.toLocaleString()}
                </span>
                <span className={`pb-1.5 text-sm font-medium ${plan.highlight ? 'text-gray-500' : 'text-gray-500'}`}>{plan.period}</span>
              </div>
              <p className={`text-sm mb-7 leading-relaxed ${plan.highlight ? 'text-gray-500' : 'text-gray-400'}`}>{plan.desc}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlight ? 'text-green-500' : 'text-green-400'}`} />
                    <span className={plan.highlight ? 'text-gray-700' : 'text-gray-300'}>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all active:scale-95 ${
                  plan.highlight
                    ? 'bg-black text-white hover:bg-gray-800 shadow-lg'
                    : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
