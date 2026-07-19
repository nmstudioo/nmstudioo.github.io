import React from 'react';
import { PageId } from '../types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleLinkClick = (page: PageId, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 py-10 relative z-10 bg-ink">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <a
          href="#/"
          onClick={(e) => handleLinkClick('home', e)}
          className="font-display text-base font-extrabold tracking-tight text-white flex items-center gap-2 group"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-violet" />
          NM ✦
        </a>
        <div className="font-mono text-[11px] text-fog-3 tracking-widest uppercase">
          © {new Date().getFullYear()} NOUSHAD MOSTAFA. ALL RIGHTS RESERVED.
        </div>
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 list-none">
          <li>
            <a
              href="#/work"
              onClick={(e) => handleLinkClick('work', e)}
              className="text-[13px] text-fog-3 hover:text-white transition-colors"
            >
              Work &amp; Publications
            </a>
          </li>
          <li>
            <a
              href="#/about"
              onClick={(e) => handleLinkClick('about', e)}
              className="text-[13px] text-fog-3 hover:text-white transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#/contact"
              onClick={(e) => handleLinkClick('contact', e)}
              className="text-[13px] text-fog-3 hover:text-white transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
