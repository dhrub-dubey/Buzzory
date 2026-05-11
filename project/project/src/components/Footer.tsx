import { useState } from 'react';

import logo_footer from '../assets/logo-footer.png';
import msme_logo from '../assets/msme.png';
import startup_logo from '../assets/startup-india.png';

import { Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSoonPopup = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <footer className="bg-black border-t border-gray-800 pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Popup */}
        <div
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
            showPopup
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          <div className="bg-white text-black px-5 py-3 rounded-full shadow-[0_0_25px_rgba(255,255,255,0.18)] text-sm font-medium">
            We will be there on that platform soon! Hang tight!
          </div>
        </div>

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-14 mb-14">

          {/* Left Brand Section */}
          <div className="max-w-sm">

            <div className="mb-4">
              <img
                src={logo_footer}
                alt="Buzzory Logo"
                className="h-10 w-auto object-contain"
              />
            </div>

            <p className="text-gray-400/95 hover:text-gray-300 text-sm leading-relaxed mb-6 transition-all duration-300">
              We turn raw footage into viral short-form content that grows your audience and drives real results.
            </p>

            <div className="flex items-center gap-3">

              {/* Twitter */}
              <a
                href="#"
                onClick={handleSoonPopup}
                className="w-9 h-9 rounded-full border border-gray-700/80 flex items-center justify-center text-gray-400/85 hover:text-white hover:border-gray-500 hover:shadow-[0_0_12px_rgba(255,255,255,0.12)] hover:scale-105 transition-all duration-300"
              >
                <Twitter className="w-4 h-4" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/buzzory.in?igsh=MWkxMXdzODdpaTE2Ng=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-gray-700/80 flex items-center justify-center text-gray-400/85 hover:text-white hover:border-pink-500 hover:shadow-[0_0_14px_rgba(236,72,153,0.35)] hover:scale-105 transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/buzzory/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-gray-700/80 flex items-center justify-center text-gray-400/85 hover:text-white hover:border-blue-500 hover:shadow-[0_0_14px_rgba(59,130,246,0.35)] hover:scale-105 transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              {/* YouTube */}
              <a
                href="#"
                onClick={handleSoonPopup}
                className="w-9 h-9 rounded-full border border-gray-700/80 flex items-center justify-center text-gray-400/85 hover:text-white hover:border-red-500 hover:shadow-[0_0_14px_rgba(239,68,68,0.35)] hover:scale-105 transition-all duration-300"
              >
                <Youtube className="w-4 h-4" />
              </a>

            </div>

          </div>

          {/* Right Recognition Logos */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">

            <img
              src={msme_logo}
              alt="MSME"
              className="w-[220px] lg:w-[260px] h-auto object-contain opacity-85 hover:opacity-100 transition"
            />

            <img
              src={startup_logo}
              alt="Startup India"
              className="w-[180px] lg:w-[220px] h-auto object-contain opacity-85 hover:opacity-100 transition"
            />

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm">
            © 2026 Buzzory. All rights reserved.
          </p>

          <p className="text-gray-600 text-sm">
            Built for creators who want to go viral.
          </p>

        </div>

      </div>
    </footer>
  );
}