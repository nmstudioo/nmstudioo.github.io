/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
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

// Core layout components
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [loading, setLoading] = useState(true);
  const [loadCount, setLoadCount] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

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
    
    if (['work', 'about', 'process', 'experience', 'contact'].includes(cleanPath)) {
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
        if (['work', 'about', 'process', 'experience', 'contact'].includes(hashPath)) {
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
    let url = '/';
    if (page.startsWith('publication:')) {
      const slug = page.replace('publication:', '');
      url = `/publications/${slug}`;
    } else if (page !== 'home') {
      url = `/${page}`;
    }
    
    window.history.pushState(null, '', url);
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

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
          <Navigation currentPage={currentPage} onNavigate={navigateTo} />

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
    </div>
  );
}
