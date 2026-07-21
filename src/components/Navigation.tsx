import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { Search } from 'lucide-react';

interface NavigationProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenPalette?: () => void;
}

export default function Navigation({ currentPage, onNavigate, onOpenPalette }: NavigationProps) {
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
    { id: 'design-system', label: 'Design System' },
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
        <ul className="hidden md:flex items-center gap-7 list-none">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id || (link.id === 'work' && currentPage.startsWith('publication:'));
            return (
              <li key={link.id}>
                <a
                  href={`#/${link.id === 'home' ? '' : link.id}`}
                  onClick={(e) => handleLinkClick(link.id, e)}
                  className={`text-[12px] font-medium tracking-widest uppercase transition-colors duration-200 relative py-1 ${
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
          
          {/* Global Search/Palette Trigger */}
          {onOpenPalette && (
            <li>
              <button
                onClick={onOpenPalette}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/8 bg-white/3 hover:border-violet/30 hover:bg-violet/5 text-[11px] font-mono text-fog-3 hover:text-white transition-all cursor-pointer"
                title="Search / Command Palette (Ctrl+K)"
              >
                <Search className="w-3.5 h-3.5 text-violet" />
                <span className="hidden lg:inline uppercase tracking-widest text-[9px]">Search</span>
                <kbd className="hidden lg:inline bg-white/5 px-1 py-0.5 rounded text-[8px] border border-white/10 font-sans">⌘K</kbd>
              </button>
            </li>
          )}

          <li>
            <a
              href="#/contact"
              onClick={(e) => handleLinkClick('contact', e)}
              className={`px-5 py-2 border rounded-full text-[12px] font-medium tracking-widest uppercase transition-all duration-200 ${
                currentPage === 'contact'
                  ? 'bg-violet border-violet text-white'
                  : 'border-white/13 text-white hover:bg-violet hover:border-violet'
              }`}
            >
              Let's Talk
            </a>
          </li>
        </ul>

        {/* Mobile controls (Menu) */}
        <div className="md:hidden flex items-center gap-1.5">
          {onOpenPalette && (
            <button
              onClick={onOpenPalette}
              className="p-2.5 text-violet hover:text-white transition-colors cursor-pointer"
              aria-label="Open search palette"
            >
              <Search className="w-5 h-5" />
            </button>
          )}
          <button
            className="flex flex-col gap-1.5 p-2"
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
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 bg-ink-2 z-40 flex flex-col items-center justify-center gap-6 transition-all duration-500 ease-out md:hidden ${
          drawerOpen ? 'translate-y-0 opacity-100 pointer-events-auto visible' : '-translate-y-full opacity-0 pointer-events-none invisible'
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#/${link.id === 'home' ? '' : link.id}`}
            onClick={(e) => handleLinkClick(link.id, e)}
            className={`font-display text-2xl font-bold transition-colors ${
              currentPage === link.id ? 'text-violet' : 'text-fog-2 hover:text-white'
            }`}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#/contact"
          onClick={(e) => handleLinkClick('contact', e)}
          className={`font-display text-2xl font-bold transition-colors ${
            currentPage === 'contact' ? 'text-violet' : 'text-fog-2 hover:text-white'
          }`}
        >
          Contact
        </a>
        {onOpenPalette && (
          <button
            onClick={() => {
              setDrawerOpen(false);
              onOpenPalette();
            }}
            className="font-display text-[16px] font-bold text-violet hover:text-white flex items-center gap-2.5 mt-4 px-5 py-2.5 border border-violet/20 rounded-full bg-violet/5 hover:bg-violet/10 transition-all cursor-pointer"
          >
            <Search className="w-4 h-4" />
            <span>Search Portfolio</span>
          </button>
        )}
      </div>
    </>
  );
}
