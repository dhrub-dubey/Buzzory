import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo_text from '../assets/logo-text.png';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Services', href: '#services' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [textColor, setTextColor] = useState('text-gray-900');
  const [lightSection, setLightSection] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      // Detect lighter sections
      setLightSection(scrollY > 400);
  
      // Adaptive text feel
      if (scrollY > 800) {
        setTextColor('text-gray-900');
      } else if (scrollY > 400) {
        setTextColor('text-gray-700');
      } else {
        setTextColor('text-gray-900');
      }
    };
  
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/30 backdrop-blur-2xl border-b border-white/20 shadow-xl'
          : 'bg-white/0 backdrop-blur-sm border-b border-white/10'
      }`}>

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
              className={`px-4 py-2 text-sm font-medium rounded-lg backdrop-blur-sm transition-all duration-300 ${
                scrolled
                  ? `${textColor} hover:bg-white/20 hover:text-gray-950`
                  : `${textColor} hover:bg-white/30 hover:text-gray-950`
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* <a href="#pricing" onClick={(e) => handleNav(e, '#pricing')} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Sign in
          </a> */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();

              const phoneNumber = "918170913636"; // replace with your number

              const message = encodeURIComponent(
                "Hi! I want to get started with your agency."
              );

              window.open(
                `https://wa.me/${phoneNumber}?text=${message}`,
                "_blank"
            );
  }}
  className={`text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 backdrop-blur-sm ${
    lightSection
    ? 'bg-black text-white hover:bg-gray-800 active:scale-95'
    :scrolled
      ? 'bg-black/40 text-white hover:bg-black/60 active:scale-95 border border-white/20'
      : 'bg-black text-white hover:bg-gray-800 active:scale-95'
  }`}
>
  Get started
</a>
        </div>

        {/* Mobile menu toggle */}
        <button className={`md:hidden p-2 rounded-lg transition-all duration-300 backdrop-blur-sm ${
            scrolled
              ? `${textColor} hover:bg-white/30`
              : `${textColor} hover:bg-white/20`
          }`}
               onClick={() => setOpen(!open)}
>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
       <div className="md:hidden bg-white/10 backdrop-blur-xl border-t border-white/10 px-6 py-4 space-y-1">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => handleNav(e, l.href)}
              className="block px-4 py-3 text-sm font-medium text-white/80 hover:bg-white/10 rounded-lg transition"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={(e) => handleNav(e, '#pricing')}
            className="block mt-3 bg-white/10 backdrop-blur-md border border-white/10 text-white text-sm font-semibold px-5 py-3 rounded-xl text-center"
          >
            Get started
          </a>
        </div>
      )}
    </header>
  );
}
