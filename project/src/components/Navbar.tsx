import { useState, useEffect } from 'react';
import { Zap, Menu, X } from 'lucide-react';
import logo_text from '../assets/logo-text.png';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Blog', href: '#blog' },
  { label: 'Pricing', href: '#pricing' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const y = (target as HTMLElement).getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
        <img
            src={logo_text}
            alt="Client Logo"
            className="h-10 w-auto object-contain group-hover:scale-105 transition-transform"
        />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => handleNav(e, l.href)}
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#pricing" onClick={(e) => handleNav(e, '#pricing')} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Sign in
          </a>
          <a
            href="#pricing"
            onClick={(e) => handleNav(e, '#pricing')}
            className="bg-black text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-gray-800 active:scale-95 transition-all"
          >
            Get started
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-1">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => handleNav(e, l.href)}
              className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={(e) => handleNav(e, '#pricing')}
            className="block mt-3 bg-black text-white text-sm font-semibold px-5 py-3 rounded-xl text-center"
          >
            Get started
          </a>
        </div>
      )}
    </header>
  );
}
