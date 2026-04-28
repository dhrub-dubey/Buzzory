import { useEffect, useRef } from 'react';
import { Upload, Scissors, Sparkles, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Upload your clips',
    desc: 'Drop your raw footage into our secure portal. No edits needed — we handle everything from there.',
    color: 'bg-amber-500',
    preview: (
      <div className="mt-4 bg-gray-800 rounded-xl p-3 flex items-center gap-3">
        <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
          <Upload className="w-4 h-4 text-amber-400" />
        </div>
        <div className="flex-1">
          <div className="h-2 bg-amber-500 rounded-full mb-1.5 w-3/4" />
          <div className="h-1.5 bg-gray-700 rounded-full w-1/2" />
        </div>
        <span className="text-xs text-amber-400 font-bold">78%</span>
      </div>
    ),
  },
  {
    icon: Scissors,
    title: 'We craft the edit',
    desc: 'Our editors cut, color grade, add captions, sound design, and optimize for hooks within 48 hours.',
    color: 'bg-sky-500',
    preview: (
      <div className="mt-4 bg-gray-800 rounded-xl p-3 grid grid-cols-3 gap-1.5">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <div key={n} className="h-8 bg-gray-700 rounded-lg" style={{ opacity: 0.4 + n * 0.1 }} />
        ))}
      </div>
    ),
  },
  {
    icon: Sparkles,
    title: 'Review & approve',
    desc: 'Preview your content, leave feedback, and get unlimited revisions until it\'s exactly right.',
    color: 'bg-green-500',
    preview: (
      <div className="mt-4 bg-gray-800 rounded-xl p-3 space-y-2">
        {['Hook ✓', 'Pacing ✓', 'Color ✓'].map((item) => (
          <div key={item} className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-xs text-gray-400">{item}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: Rocket,
    title: 'Post & go viral',
    desc: 'We schedule and publish at peak times, or hand you polished files ready to post whenever you want.',
    color: 'bg-rose-500',
    preview: (
      <div className="mt-4 bg-gray-800 rounded-xl p-3">
        <div className="flex items-end gap-1 h-12">
          {[30, 50, 45, 70, 65, 90, 85, 100].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-gradient-to-t from-rose-600 to-rose-400"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <p className="text-[10px] text-gray-500 mt-1.5 text-center">Views over time</p>
      </div>
    ),
  },
];

export default function Process() {
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
    <section className="bg-gray-950 py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={sectionRef} className="reveal text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3 block">Process</span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            Here's how we turn your raw clips<br />into viral content.
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            A streamlined four-step process that gets you from raw footage to viral-ready content in record time.
          </p>
        </div>

        <div ref={gridRef} className="reveal-stagger grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className={`w-10 h-10 ${step.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs text-gray-500 font-bold">0{i + 1}</span>
                <h3 className="text-white font-bold text-lg mt-1 mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                {step.preview}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
