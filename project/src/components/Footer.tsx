import logo_footer from '../assets/logo-footer.png';

import { Zap, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const cols = [
  {
    title: 'Services',
    links: ['Short-Form Editing', 'Content Strategy', 'Caption Design', 'Sound Design', 'Platform Management'],
  },
  {
    title: 'Company',
    links: ['About', 'Work', 'Blog', 'Careers', 'Press'],
  },
  {
    title: 'Resources',
    links: ['Pricing', 'Case Studies', 'Help Center', 'Terms of Service', 'Privacy Policy'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
          <div className="mb-4">
            <img
              src={logo_footer}
              alt="Client Logo"
              className="h-10 w-auto object-contain"
            />
          </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5 max-w-xs">
              We turn raw footage into viral short-form content that grows your audience and drives real results.
            </p>
            <div className="flex items-center gap-3">
              {[Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.title}>
              <p className="text-white font-semibold text-sm mb-4">{col.title}</p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            2024 Influence. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm">
            Built for creators who want to go viral.
          </p>
        </div>
      </div>
    </footer>
  );
}
