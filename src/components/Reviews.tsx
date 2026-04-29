import { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Alex M.',
    handle: '@alexmcreator',
    avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=80',
    text: 'Best investment I made for my brand.',
  },
  {
    name: 'Nina T.',
    handle: '@ninatech',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=80',
    text: 'They just get short-form content completely.',
  },
  {
    name: 'James F.',
    handle: '@jamesfit',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=80',
    text: 'Went from 5K to 200K in 4 months. Wild.',
  },
  {
    name: 'Chloe R.',
    handle: '@chloeruns',
    avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=80',
    text: 'Fast, professional, genuinely impressive quality.',
  },
  {
    name: 'Sam V.',
    handle: '@samvlogs',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=80',
    text: 'Our engagement rate went up 400% literally month one.',
  },
];

export default function Reviews() {
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

  return (
    <section className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="reveal-stagger flex flex-wrap gap-4 justify-center">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-gray-800 border border-gray-700 rounded-2xl px-5 py-4 flex items-start gap-4 max-w-xs hover:border-gray-600 hover:-translate-y-0.5 transition-all duration-200"
            >
              <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-200 text-sm font-medium leading-snug mb-2">"{r.text}"</p>
                <p className="text-gray-400 text-xs">{r.name} · {r.handle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
