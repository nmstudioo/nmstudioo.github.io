/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, Briefcase, Ruler, User, Activity, Calendar, Mail, FileText, ArrowUp } from 'lucide-react';
import { PageId } from './types';
import { publications } from './data/publications';

// Views
import HomeView from './components/HomeView';
import WorkView from './components/WorkView';
import AboutView from './components/AboutView';
import ProcessView from './components/ProcessView';
import ExperienceView from './components/ExperienceView';
import ContactView from './components/ContactView';
import PublicationSingleView from './components/PublicationSingleView';
import DesignSystemView from './components/DesignSystemView';

// Core layout components
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [loading, setLoading] = useState(true);
  const [loadCount, setLoadCount] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [paletteQuery, setPaletteQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Parse page pathname or hash to PageId
  const parseLocation = (): PageId => {
    const path = window.location.pathname;
    const hash = window.location.hash;
    
    // Check pathname first (for clean routing)
    let cleanPath = path;
    if (cleanPath.startsWith('/')) {
      cleanPath = cleanPath.slice(1);
    }
    if (cleanPath.endsWith('/')) {
      cleanPath = cleanPath.slice(0, -1);
    }
    // Also remove index.html if present
    cleanPath = cleanPath.replace('index.html', '');
    if (cleanPath.endsWith('/')) {
      cleanPath = cleanPath.slice(0, -1);
    }
    
    if (cleanPath.startsWith('publications/')) {
      const slug = cleanPath.replace('publications/', '');
      return `publication:${slug}`;
    }
    
    if (['work', 'about', 'process', 'experience', 'contact', 'design-system'].includes(cleanPath)) {
      return cleanPath as PageId;
    }
    
    // Fallback to hash if pathname is empty or just root
    if (!cleanPath) {
      if (hash && hash !== '#/' && hash !== '#') {
        const cleanHash = hash.replace('#/', '').replace('#', '');
        if (cleanHash.startsWith('publications/')) {
          const slug = cleanHash.replace('publications/', '');
          return `publication:${slug}`;
        }
        const hashPath = cleanHash.replace('.html', '');
        if (['work', 'about', 'process', 'experience', 'contact', 'design-system'].includes(hashPath)) {
          return hashPath as PageId;
        }
      }
    }
    
    return 'home';
  };

  // Listen to popstate and hashchange for back/forward navigation
  useEffect(() => {
    const handleLocationChange = () => {
      const newPage = parseLocation();
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    
    // Initial parse
    handleLocationChange();

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  // Set URL on navigation using HTML5 History API
  const navigateTo = (page: PageId) => {
    let targetPage = page;
    if (page.startsWith('publications/')) {
      targetPage = `publication:${page.replace('publications/', '')}`;
    }

    let url = '/';
    let hash = '#/';
    if (targetPage.startsWith('publication:')) {
      const slug = targetPage.replace('publication:', '');
      url = `/publications/${slug}`;
      hash = `#/publications/${slug}`;
    } else if (targetPage !== 'home') {
      url = `/${targetPage}`;
      hash = `#/${targetPage}`;
    }
    
    // We update both the history state with the hash representation.
    // This maintains back-button functionality and allows reloading directly in iframe previews
    // without triggering parent-window route-guard reloads that redirect the user back to `/`
    window.history.pushState(null, '', hash);
    setCurrentPage(targetPage);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Keyboard shortcut listener for sequential "g" keys and Ctrl+K Command Palette
  useEffect(() => {
    let lastKey = '';
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle Command Palette on Ctrl+K or Cmd+K
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setPaletteOpen(prev => {
          const next = !prev;
          if (next) {
            setPaletteQuery('');
            setSelectedIndex(0);
          }
          return next;
        });
        return;
      }

      if (e.key === 'Escape') {
        setPaletteOpen(false);
        return;
      }

      // Skip sequential triggers if user is actively writing in a text input field
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA' || 
        target.isContentEditable
      ) {
        return;
      }

      if (lastKey === 'g') {
        lastKey = '';
        if (e.key === 'h') { e.preventDefault(); navigateTo('home'); }
        else if (e.key === 'w') { e.preventDefault(); navigateTo('work'); }
        else if (e.key === 'd') { e.preventDefault(); navigateTo('design-system'); }
        else if (e.key === 'a') { e.preventDefault(); navigateTo('about'); }
        else if (e.key === 'p') { e.preventDefault(); navigateTo('process'); }
        else if (e.key === 'e') { e.preventDefault(); navigateTo('experience'); }
        else if (e.key === 'c') { e.preventDefault(); navigateTo('contact'); }
        return;
      }

      if (e.key === 'g') {
        lastKey = 'g';
        setTimeout(() => {
          if (lastKey === 'g') lastKey = '';
        }, 1000);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Fake beautiful loader counting to 100%
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 12) + 4;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => {
          setLoading(false);
        }, 300);
      }
      setLoadCount(current);
    }, 70);

    return () => clearInterval(interval);
  }, []);

  // Monitor scroll for scrollTop button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dynamic page metadata effect
  useEffect(() => {
    let title = "Noushad Mostafa — Frontend Developer & UI/UX Designer";
    let description = "Portfolio of Noushad Mostafa, a design-engineered Frontend Developer & UI/UX Designer specialized in highly polished, performant web interfaces.";
    let isArticle = false;
    let coverImage = "https://nmstudioo.github.io/images/noushad_portrait_1784467295854.jpg";
    const pageUrl = window.location.href;
    let articleData: any = null;

    if (currentPage.startsWith('publication:')) {
      const slug = currentPage.replace('publication:', '');
      const pub = publications.find((p) => p.slug === slug);
      if (pub) {
        title = `${pub.title} — Noushad Mostafa Publications`;
        description = pub.excerpt || `Read "${pub.title}", an article on ${pub.category} by Noushad Mostafa.`;
        isArticle = true;
        coverImage = pub.coverImage ? `https://nmstudioo.github.io${pub.coverImage}` : coverImage;
        articleData = {
          headline: pub.title,
          description: description,
          image: coverImage,
          datePublished: "2026-07-17", // Default publication date
          authorName: "Noushad Mostafa",
          url: pageUrl,
          tags: pub.tags
        };
      }
    } else {
      switch (currentPage) {
        case 'home':
          title = "Noushad Mostafa — Frontend Developer & UI/UX Designer";
          description = "Portfolio of Noushad Mostafa, a design-engineered Frontend Developer & UI/UX Designer specialized in highly polished, performant web interfaces.";
          break;
        case 'work':
          title = "Works & Publications — Noushad Mostafa";
          description = "Explore the selected engineering projects and digital publications of Noushad Mostafa.";
          break;
        case 'about':
          title = "About Me — Noushad Mostafa";
          description = "Learn about the background, design philosophy, and core principles of Noushad Mostafa.";
          break;
        case 'process':
          title = "Development Process — Noushad Mostafa";
          description = "A comprehensive deep dive into my professional design-to-development workflow, token-based systems, and performance standards.";
          break;
        case 'design-system':
          title = "Interactive Design System Guidelines — Noushad Mostafa";
          description = "Explore NM Design's official interactive Design System, showcasing core color palettes, typography scale, spatial rulers, and motion physics.";
          break;
        case 'experience':
          title = "Professional Experience — Noushad Mostafa";
          description = "Chronology of my software engineering career, technical achievements, and leadership in UI/UX architecture.";
          break;
        case 'contact':
          title = "Get in Touch — Noushad Mostafa";
          description = "Let's build something exceptional. Reach out for projects, collaborations, or engineering consultations.";
          break;
      }
    }

    // Set document title
    document.title = title;

    // Helper to find or create meta tag
    const setMetaTag = (selector: string, attrName: string, attrValue: string, content: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Update standard meta description
    setMetaTag('meta[name="description"]', 'name', 'description', description);

    // Update Open Graph tags
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', isArticle ? 'article' : 'website');
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', pageUrl);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', coverImage);

    // Update Twitter Card tags
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', coverImage);

    // Update Canonical link
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', pageUrl);

    // Manage dynamic Schema.org JSON-LD structured data for publication articles
    const existingArticleSchema = document.getElementById('dynamic-article-schema');
    if (existingArticleSchema) {
      existingArticleSchema.remove();
    }

    if (isArticle && articleData) {
      const script = document.createElement('script');
      script.id = 'dynamic-article-schema';
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": articleData.headline,
        "description": articleData.description,
        "image": articleData.image,
        "datePublished": articleData.datePublished,
        "author": {
          "@type": "Person",
          "name": articleData.authorName,
          "url": "https://nmstudioo.github.io/"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Noushad Mostafa",
          "logo": {
            "@type": "ImageObject",
            "url": "https://nmstudioo.github.io/images/noushad_portrait_1784467295854.jpg"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": articleData.url
        },
        "keywords": articleData.tags?.join(", ")
      });
      document.head.appendChild(script);
    }

  }, [currentPage]);

  // Determine which page to render based on page state
  const renderPageContent = () => {
    if (currentPage.startsWith('publication:')) {
      const slug = currentPage.replace('publication:', '');
      const pub = publications.find((p) => p.slug === slug);
      if (pub) {
        return (
          <PublicationSingleView
            publication={pub}
            onBack={() => navigateTo('work')}
            onNavigate={navigateTo}
            allPublications={publications}
          />
        );
      }
    }

    switch (currentPage) {
      case 'home':
        return <HomeView onNavigate={navigateTo} />;
      case 'work':
        return <WorkView onNavigate={navigateTo} />;
      case 'design-system':
        return <DesignSystemView />;
      case 'about':
        return <AboutView />;
      case 'process':
        return <ProcessView />;
      case 'experience':
        return <ExperienceView />;
      case 'contact':
        return <ContactView />;
      default:
        return <HomeView onNavigate={navigateTo} />;
    }
  };

  // Filter list for the search command palette
  const staticItems = [
    { id: 'home', title: 'Go to Home Page', category: 'Navigation', icon: <Home className="w-4 h-4 text-violet" /> },
    { id: 'work', title: 'Go to Work & Publications', category: 'Navigation', icon: <Briefcase className="w-4 h-4 text-violet" /> },
    { id: 'design-system', title: 'Go to Design System Guidelines', category: 'Navigation', icon: <Ruler className="w-4 h-4 text-violet" /> },
    { id: 'about', title: 'Go to About Me', category: 'Navigation', icon: <User className="w-4 h-4 text-violet" /> },
    { id: 'process', title: 'Go to Development Process', category: 'Navigation', icon: <Activity className="w-4 h-4 text-violet" /> },
    { id: 'experience', title: 'Go to Experience Timeline', category: 'Navigation', icon: <Calendar className="w-4 h-4 text-violet" /> },
    { id: 'contact', title: 'Go to Contact / Let\'s Talk', category: 'Navigation', icon: <Mail className="w-4 h-4 text-violet" /> },
  ];

  const publicationItems = publications.map((p) => ({
    id: `publication:${p.slug}`,
    title: p.title,
    category: 'Publication / Research',
    icon: <FileText className="w-4 h-4 text-violet" />,
    excerpt: p.excerpt,
    tags: p.tags.join(' ')
  }));

  const allPaletteItems = [...staticItems, ...publicationItems];

  const filteredItems = allPaletteItems.filter((item) => {
    const q = paletteQuery.toLowerCase().trim();
    if (!q) return true; // Show all by default
    const matchesTitle = item.title.toLowerCase().includes(q);
    const matchesCategory = item.category.toLowerCase().includes(q);
    const matchesTags = 'tags' in item ? ((item as any).tags || '').toLowerCase().includes(q) : false;
    const matchesExcerpt = 'excerpt' in item ? ((item as any).excerpt || '').toLowerCase().includes(q) : false;
    return matchesTitle || matchesCategory || matchesTags || matchesExcerpt;
  });

  // Track keyboard events inside Command Palette
  useEffect(() => {
    if (!paletteOpen) return;
    
    const handlePaletteKeys = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          navigateTo(filteredItems[selectedIndex].id);
          setPaletteOpen(false);
        }
      }
    };

    window.addEventListener('keydown', handlePaletteKeys);
    return () => window.removeEventListener('keydown', handlePaletteKeys);
  }, [paletteOpen, filteredItems, selectedIndex]);

  return (
    <div className="relative min-h-screen bg-ink text-fog selection:bg-violet selection:text-white noise-overlay">
      {/* Dynamic Loader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
            className="fixed inset-0 bg-ink z-50 flex flex-col items-center justify-center gap-8"
          >
            <div className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-white overflow-hidden pb-1 text-center">
              <motion.span
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                Noushad Mostafa
              </motion.span>
            </div>
            <div className="w-48 h-[1px] bg-white/13 relative overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-violet transition-all duration-75"
                style={{ width: `${loadCount}%` }}
              />
            </div>
            <div className="font-mono text-xs text-fog-3 tracking-widest tabular-nums">
              {loadCount}%
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main app layout elements */}
      {!loading && (
        <div className="flex flex-col min-h-screen">
          <CustomCursor />
          <Navigation 
            currentPage={currentPage} 
            onNavigate={navigateTo} 
            onOpenPalette={() => {
              setPaletteOpen(true);
              setPaletteQuery('');
              setSelectedIndex(0);
            }} 
          />

          {/* Animate Page Switcher */}
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                {renderPageContent()}
              </motion.div>
            </AnimatePresence>
          </main>

          <Footer onNavigate={navigateTo} />

          {/* Back to top button */}
          <button
            onClick={handleScrollTop}
            className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-ink-3 border border-white/13 flex items-center justify-center text-fog-2 z-40 transition-all hover:bg-violet hover:border-violet hover:text-white cursor-pointer ${
              showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
            aria-label="Back to top"
          >
            <ArrowUp className="w-4.5 h-4.5" />
          </button>
        </div>
      )}

      {/* COMMAND PALETTE INTERACTIVE MODAL OVERLAY */}
      <AnimatePresence>
        {paletteOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPaletteOpen(false)}
              className="absolute inset-0 bg-ink-2/80 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: 'spring', stiffness: 350, damping: 28 }}
              className="relative w-full max-w-2xl bg-ink border border-white/10 rounded-2xl overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.8)] flex flex-col max-h-[80vh]"
            >
              {/* Header Search Field */}
              <div className="p-4 border-b border-white/5 flex items-center gap-3 bg-white/1">
                <span className="text-violet font-mono text-xs uppercase tracking-widest font-semibold shrink-0">Command</span>
                <input 
                  type="text" 
                  autoFocus
                  placeholder="Type to search publications, tags, or navigation..."
                  value={paletteQuery}
                  onChange={(e) => {
                    setPaletteQuery(e.target.value);
                    setSelectedIndex(0);
                  }}
                  className="w-full bg-transparent border-none text-white focus:outline-none placeholder-fog-3 text-sm font-light"
                />
                <button 
                  onClick={() => setPaletteOpen(false)}
                  className="px-2.5 py-1 rounded bg-white/5 text-[10px] font-mono uppercase tracking-wider text-fog-3 hover:text-white border border-white/5"
                >
                  ESC
                </button>
              </div>

              {/* Suggestions / Dynamic list */}
              <div className="flex-grow overflow-y-auto p-2 space-y-1">
                {filteredItems.length > 0 ? (
                  filteredItems.map((item, idx) => {
                    const isSelected = selectedIndex === idx;
                    return (
                      <div 
                        key={item.id}
                        onClick={() => {
                          navigateTo(item.id);
                          setPaletteOpen(false);
                        }}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        className={`p-3 rounded-xl cursor-pointer transition-all flex items-center justify-between gap-4 ${
                          isSelected ? 'bg-violet/15 border-l-2 border-violet pl-2.5' : 'hover:bg-white/2 border-l-2 border-transparent'
                        }`}
                      >
                        <div className="flex items-center gap-3 truncate">
                          <span className="text-base shrink-0">{item.icon}</span>
                          <div className="truncate">
                            <div className="font-display text-[13px] font-bold text-white leading-normal">
                              {item.title}
                            </div>
                            {'excerpt' in item && item.excerpt && (
                              <p className="text-[11px] text-fog-3 truncate font-light mt-0.5 max-w-lg">
                                {item.excerpt}
                              </p>
                            )}
                          </div>
                        </div>
                        <span className="font-mono text-[9px] text-violet font-bold uppercase tracking-widest shrink-0 bg-violet/5 px-2 py-0.5 rounded-full border border-violet/10">
                          {item.category}
                        </span>
                      </div>
                    );
                  })
                ) : (
                  <div className="p-8 text-center text-fog-3 font-mono text-xs">
                    No matching parameters found. Try searching for "System", "Aesthetics", or "Blogger".
                  </div>
                )}
              </div>

              {/* Footer status bar */}
              <div className="p-3 bg-white/1 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-fog-3">
                <div className="flex gap-4">
                  <span><kbd className="bg-white/5 px-1 py-0.5 rounded border border-white/10 text-[9px]">↑↓</kbd> Navigate</span>
                  <span><kbd className="bg-white/5 px-1 py-0.5 rounded border border-white/10 text-[9px]">Enter</kbd> Select</span>
                </div>
                <span>NM DESIGN NODE // ACTIVE</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
