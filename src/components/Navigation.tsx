import React, { useState, useEffect } from 'react';
import { PageId } from '../types';

interface NavigationProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (page: PageId, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(page);
    setDrawerOpen(false);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'work', label: 'Work & Publications' },
    { id: 'about', label: 'About' },
    { id: 'process', label: 'Process' },
    { id: 'experience', label: 'Experience' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-20 h-18 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? 'bg-ink/85 backdrop-blur-md border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <a
          href="#/"
          onClick={(e) => handleLinkClick('home', e)}
          className="font-display text-lg font-extrabold tracking-tight text-white flex items-center gap-2.5 group"
        >
          <span className="w-2 h-2 rounded-full bg-violet animate-pulse-dot" />
          NM
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-9 list-none">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id || (link.id === 'work' && currentPage.startsWith('publication:'));
            return (
              <li key={link.id}>
                <a
                  href={`#/${link.id === 'home' ? '' : link.id}`}
                  onClick={(e) => handleLinkClick(link.id, e)}
                  className={`text-[13px] font-medium tracking-widest uppercase transition-colors duration-200 relative py-1 ${
                    isActive ? 'text-white' : 'text-fog-3 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[1px] bg-violet origin-left transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </a>
              </li>
            );
          })}
          <li>
            <a
              href="#/contact"
              onClick={(e) => handleLinkClick('contact', e)}
              className={`px-5 py-2.5 border rounded-full text-[13px] font-medium tracking-widest uppercase transition-all duration-200 ${
                currentPage === 'contact'
                  ? 'bg-violet border-violet text-white'
                  : 'border-white/13 text-white hover:bg-violet hover:border-violet'
              }`}
            >
              Let's Talk
            </a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 z-50"
          onClick={() => setDrawerOpen(!drawerOpen)}
          aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={drawerOpen}
        >
          <span
            className={`block w-5.5 h-[1.5px] bg-fog transition-all duration-300 ${
              drawerOpen ? 'translate-y-[7.5px] rotate-45' : ''
            }`}
          />
          <span
            className={`block w-5.5 h-[1.5px] bg-fog transition-all duration-300 ${
              drawerOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-5.5 h-[1.5px] bg-fog transition-all duration-300 ${
              drawerOpen ? '-translate-y-[7.5px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 bg-ink-2 z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-out md:hidden ${
          drawerOpen ? 'translate-y-0 opacity-100 pointer-events-auto visible' : '-translate-y-full opacity-0 pointer-events-none invisible'
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#/${link.id === 'home' ? '' : link.id}`}
            onClick={(e) => handleLinkClick(link.id, e)}
            className="font-display text-3xl font-bold text-fog-2 hover:text-violet transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#/contact"
          onClick={(e) => handleLinkClick('contact', e)}
          className="font-display text-3xl font-bold text-fog-2 hover:text-violet transition-colors"
        >
          Contact
        </a>
      </div>
    </>
  );
}
