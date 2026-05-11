import { useEffect, useRef } from 'react';
import { ArrowRight, Clock } from 'lucide-react';

const posts = [
  {
    title: 'The 3-Second Hook Formula That Stops Any Scroll',
    excerpt: 'Learn the exact hook structure our editors use to capture attention in the critical first 3 seconds of every video.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: 'Maya Chen',
    authorImg: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=80',
    read: '5 min read',
    tag: 'Strategy',
  },
  {
    title: 'Why Your TikToks Get 200 Views (And How to Fix It)',
    excerpt: 'A deep dive into the algorithm signals most creators ignore — and the simple fixes that can 10x your reach overnight.',
    image: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: 'Jake Torres',
    authorImg: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=80',
    read: '7 min read',
    tag: 'Growth',
  },
  {
    title: 'Sound Design Secrets for Viral Short-Form Video',
    excerpt: 'Audio is 50% of the experience. These are the sound layering techniques that make content feel premium and shareable.',
    image: 'https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: 'Leila Park',
    authorImg: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=80',
    read: '6 min read',
    tag: 'Editing',
  },
  {
    title: 'How We Built a 12-Video/Week Content System for One Brand',
    excerpt: 'Behind the scenes of scaling a single brand\'s content output from 3 posts to 12 a week without sacrificing quality.',
    image: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: 'Chris Nwosu',
    authorImg: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=80',
    read: '8 min read',
    tag: 'Case Study',
  },
];

const tagColors: Record<string, string> = {
  Strategy: 'bg-amber-100 text-amber-700',
  Growth: 'bg-green-100 text-green-700',
  Editing: 'bg-sky-100 text-sky-700',
  'Case Study': 'bg-rose-100 text-rose-700',
};

export default function Blog() {
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
    <section id="blog" className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={sectionRef} className="reveal flex flex-col sm:flex-row items-start sm:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-3 block">Blog</span>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
              Learn what makes<br />content go viral.
            </h2>
          </div>
          <button className="group flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors flex-shrink-0">
            View all articles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div ref={gridRef} className="reveal-stagger grid sm:grid-cols-2 gap-6">
          {posts.map((post, i) => (
            <article
              key={i}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white"
            >
              <div className="overflow-hidden h-52 bg-gray-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${tagColors[post.tag] || 'bg-gray-100 text-gray-600'}`}>
                    {post.tag}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <Clock className="w-3 h-3" />
                    {post.read}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 text-lg leading-snug mb-2 group-hover:text-amber-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{post.excerpt}</p>
                <div className="flex items-center gap-3">
                  <img src={post.authorImg} alt={post.author} className="w-8 h-8 rounded-full object-cover" />
                  <span className="text-sm font-medium text-gray-700">{post.author}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
