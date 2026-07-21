import React, { useState, useEffect } from 'react';
import { Publication } from '../types';
import { 
  ArrowLeft, Clock, Calendar, User, Tag, BookOpen,
  Brain, Layout, Sparkles, Layers, Palette, Award, Fingerprint, Type,
  Globe, History, Sliders, Code, Workflow, CheckSquare, Settings,
  Music, Waves, HardDrive, Chrome, Gauge, Zap, Grid, AlignJustify,
  Disc, Smartphone, Shield, Printer, Download, ArrowRight, CheckCircle2, ChevronDown, ChevronUp
} from 'lucide-react';
import { publicationExtras } from '../data/publicationExtras';
import PublicationDiagram from './PublicationDiagrams';

export const getTagIcon = (tag: string) => {
  const t = tag.toLowerCase().trim();
  if (t.includes('philosophy')) return <Brain className="w-3.5 h-3.5 text-violet" />;
  if (t.includes('ui/ux') || t.includes('ui design')) return <Layout className="w-3.5 h-3.5 text-violet" />;
  if (t.includes('ai agency') || t.includes('creative ai direction') || t.includes('creative systems')) return <Sparkles className="w-3.5 h-3.5 text-violet" />;
  if (t.includes('design systems')) return <Layers className="w-3.5 h-3.5 text-violet" />;
  if (t.includes('design')) return <Palette className="w-3.5 h-3.5 text-violet" />;
  if (t.includes('personal brand')) return <Award className="w-3.5 h-3.5 text-violet" />;
  if (t.includes('digital identity')) return <Fingerprint className="w-3.5 h-3.5 text-violet" />;
  if (t.includes('typography')) return <Type className="w-3.5 h-3.5 text-violet" />;
  if (t.includes('blogger')) return <Globe className="w-3.5 h-3.5 text-violet" />;
  if (t.includes('legacy web')) return <History className="w-3.5 h-3.5 text-violet" />;
  if (t.includes('theme engineering')) return <Sliders className="w-3.5 h-3.5 text-violet" />;
  if (t.includes('css architecture')) return <Code className="w-3.5 h-3.5 text-violet" />;
  if (t.includes('ai workflows')) return <Workflow className="w-3.5 h-3.5 text-violet" />;
  if (t.includes('productivity')) return <CheckSquare className="w-3.5 h-3.5 text-violet" />;
  if (t.includes('systems design')) return <Settings className="w-3.5 h-3.5 text-violet" />;
  if (t.includes('audio calibration')) return <Sliders className="w-3.5 h-3.5 text-violet" />;
  if (t.includes('digital signals')) return <Waves className="w-3.5 h-3.5 text-violet" />;
  if (t.includes('feature reference')) return <BookOpen className="w-3.5 h-3.5 text-violet" />;
  if (t.includes('hardware optimization')) return <HardDrive className="w-3.5 h-3.5 text-violet" />;
  if (t.includes('via browser')) return <Chrome className="w-3.5 h-3.5 text-violet" />;
  if (t.includes('web performance')) return <Gauge className="w-3.5 h-3.5 text-violet" />;
  if (t.includes('latency reduction')) return <Zap className="w-3.5 h-3.5 text-violet" />;
  if (t.includes('system settings')) return <Settings className="w-3.5 h-3.5 text-violet" />;
  if (t.includes('grid systems')) return <Grid className="w-3.5 h-3.5 text-violet" />;
  if (t.includes('spacing hierarchy')) return <AlignJustify className="w-3.5 h-3.5 text-violet" />;
  if (t.includes('music production') || t.includes('ai composition')) return <Music className="w-3.5 h-3.5 text-violet" />;
  if (t.includes('heavy metal')) return <Disc className="w-3.5 h-3.5 text-violet" />;
  if (t.includes('android systems')) return <Smartphone className="w-3.5 h-3.5 text-violet" />;
  if (t.includes('optimization framework')) return <Zap className="w-3.5 h-3.5 text-violet" />;
  if (t.includes('privacy engineering')) return <Shield className="w-3.5 h-3.5 text-violet" />;
  if (t.includes('system stewardship')) return <Award className="w-3.5 h-3.5 text-violet" />;
  
  return <Tag className="w-3.5 h-3.5 text-violet" />;
};

interface PublicationSingleViewProps {
  publication: Publication;
  onBack: () => void;
  onNavigate: (page: string) => void;
  allPublications: Publication[];
}

export default function PublicationSingleView({
  publication,
  onBack,
  onNavigate,
  allPublications
}: PublicationSingleViewProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showHistory, setShowHistory] = useState(false);
  const [activeHeadingId, setActiveHeadingId] = useState<string>('');

  // Pull rich metadata
  const extras = publicationExtras[publication.slug] || {
    version: 'v1.0',
    status: 'Stable',
    difficulty: 'Intermediate',
    wordCount: 820,
    executiveSummary: 'This paper investigates systems-oriented layouts, digital optimization, and clean architectural alignments built to deliver ultra-high performance.',
    takeaways: [
      'Clean engineering alignments yield +100 Lighthouse scores.',
      'Aesthetic refinement and functional speed are not separate concerns.',
      'Symmetric vertical typography shapes intuitive user focus.'
    ],
    revisionHistory: [
      { date: publication.date, version: 'v1.0', note: 'Initial canonical compilation released.' }
    ],
    bibliography: [
      `Mostafa, N. (2026). "${publication.title} - NM Design Chronicles."`
    ]
  };

  // Find related articles
  const currentIndex = allPublications.findIndex((pub) => pub.id === publication.id);
  const prevPublication = currentIndex > 0 ? allPublications[currentIndex - 1] : null;
  const nextPublication = currentIndex < allPublications.length - 1 ? allPublications[currentIndex + 1] : null;

  const related = allPublications
    .filter((pub) => pub.id !== publication.id)
    .slice(0, 2);

  // Dynamic reading scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parse headings out of the content body for the Table of Contents
  const headings = publication.content
    .split('\n')
    .filter((line) => line.startsWith('## ') || line.startsWith('### '))
    .map((line, idx) => {
      const isSub = line.startsWith('### ');
      const text = line.replace(/^#{2,3}\s+/, '').replace(/\*\*/g, '');
      const id = `heading-${idx}`;
      return { id, text, isSub };
    });

  // Track active heading during scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          setActiveHeadingId(visibleEntry.target.id);
        }
      },
      { rootMargin: '-80px 0px -60% 0px' }
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [publication.content]);

  // Export as Markdown function
  const exportMarkdown = () => {
    const mdHeader = `---
title: "${publication.title}"
date: "${publication.date}"
category: "${publication.category}"
author: "${publication.author}"
version: "${extras.version}"
status: "${extras.status}"
difficulty: "${extras.difficulty}"
tags: ${JSON.stringify(publication.tags)}
---

# ${publication.title}

> ${extras.executiveSummary}

## Key Takeaways
${extras.takeaways.map((t) => `* ${t}`).join('\n')}

${publication.content}

## References
${extras.bibliography.map((b) => `* ${b}`).join('\n')}
`;
    const element = document.createElement('a');
    const file = new Blob([mdHeader], { type: 'text/markdown' });
    element.href = URL.createObjectURL(file);
    element.download = `${publication.slug}.md`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  // Custom renderer mapping line strings to beautiful JSX blocks
  const renderContent = (contentString: string) => {
    const lines = contentString.split('\n');
    let inList = false;
    let listItems: string[] = [];
    let seenNonHeader = false;
    let headingCounter = 0;

    const elements: React.ReactNode[] = [];

    const parseBold = (text: string) => {
      const parts = text.split(/(\*\*.*?\*\*)/g);
      return parts.map((part, pIdx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={pIdx} className="text-white font-semibold">{part.slice(2, -2)}</strong>;
        }
        return part;
      });
    };

    const flushList = (keyIndex: number) => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${keyIndex}`} className="list-disc pl-6 mb-6 text-base text-fog-2 font-light space-y-2.5">
            {listItems.map((item, itemIdx) => (
              <li key={itemIdx}>{parseBold(item)}</li>
            ))}
          </ul>
        );
        listItems = [];
      }
      inList = false;
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      // Skip empty lines
      if (!trimmed) {
        if (inList) {
          flushList(index);
        }
        return;
      }

      // Check for headings
      if (trimmed.startsWith('# ')) {
        if (!seenNonHeader) return; // Skip main title
        if (inList) flushList(index);
        elements.push(
          <h1 key={index} className="font-display text-3xl md:text-5xl font-extrabold text-white mt-8 mb-6 tracking-tight">
            {parseBold(trimmed.substring(2))}
          </h1>
        );
      } else if (trimmed.startsWith('## ')) {
        if (inList) flushList(index);
        const headingId = `heading-${headingCounter++}`;
        elements.push(
          <h2 id={headingId} key={index} className="scroll-mt-24 font-display text-xl md:text-2xl font-bold text-white mt-12 mb-5 tracking-tight border-b border-white/5 pb-2">
            {parseBold(trimmed.substring(3))}
          </h2>
        );
      } else if (trimmed.startsWith('### ')) {
        seenNonHeader = true;
        if (inList) flushList(index);
        const headingId = `heading-${headingCounter++}`;
        elements.push(
          <h3 id={headingId} key={index} className="scroll-mt-24 font-display text-lg font-bold text-white mt-8 mb-4 tracking-tight text-violet/90">
            {parseBold(trimmed.substring(4))}
          </h3>
        );
      } else if (trimmed.startsWith('#### ')) {
        seenNonHeader = true;
        if (inList) flushList(index);
        elements.push(
          <h4 key={index} className="font-mono text-xs uppercase tracking-widest text-violet font-semibold mt-8 mb-3">
            {parseBold(trimmed.substring(5))}
          </h4>
        );
      }
      // Check for bullet items
      else if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
        seenNonHeader = true;
        inList = true;
        listItems.push(trimmed.substring(2));
      }
      // Check for numbered lists
      else if (/^\d+\.\s/.test(trimmed)) {
        seenNonHeader = true;
        if (inList) flushList(index);
        const num = trimmed.match(/^\d+/)?.[0] || '1';
        const rest = trimmed.replace(/^\d+\.\s+/, '');
        elements.push(
          <div key={index} className="flex gap-3 text-base text-fog-2 font-light mb-4 pl-2">
            <span className="font-mono text-violet font-semibold">{num}.</span>
            <p>{parseBold(rest)}</p>
          </div>
        );
      }
      // Code blocks markup
      else if (trimmed.startsWith('```')) {
        seenNonHeader = true;
        if (inList) flushList(index);
        return;
      }
      else if (trimmed.includes('pm uninstall') || trimmed.includes('font-size: clamp') || trimmed.includes('adb shell')) {
        seenNonHeader = true;
        if (inList) flushList(index);
        elements.push(
          <pre key={index} className="p-4 rounded-xl bg-white/3 border border-white/5 font-mono text-xs text-violet overflow-x-auto mb-6">
            <code>{trimmed}</code>
          </pre>
        );
      }
      // Normal paragraph
      else {
        seenNonHeader = true;
        if (inList) flushList(index);
        elements.push(
          <p key={index} className="text-base md:text-lg text-fog-2 font-light leading-relaxed mb-6">
            {parseBold(trimmed)}
          </p>
        );
      }
    });

    if (inList) {
      flushList(9999);
    }

    return elements;
  };

  return (
    <div className="pt-24 pb-20 relative z-10">
      {/* Floating Slim Reading Progress Bar */}
      <div className="fixed top-18 left-0 right-0 h-0.5 bg-white/5 z-50 print:hidden">
        <div 
          className="h-full bg-violet transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Article Header Banner */}
      <div 
        className="w-full h-56 md:h-72 relative overflow-hidden print:hidden"
        style={{ background: publication.accentGradient }}
      >
        {publication.coverImage && (
          <img 
            src={publication.coverImage} 
            alt={publication.title} 
            className="absolute inset-0 w-full h-full object-cover opacity-35 hover:opacity-50 transition-opacity duration-700"
            referrerPolicy="no-referrer"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <div className="absolute inset-0 bg-ink/20" />
        <div className="absolute bottom-8 left-0 right-0 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 backdrop-blur-md border border-white/10 text-xs font-mono tracking-widest uppercase text-white hover:bg-white/15 transition-all mb-4 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Showcase
          </button>
        </div>
      </div>

      {/* Main Grid: Responsive sidebar + central text */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid lg:grid-cols-[240px_1fr_240px] gap-12 pt-8">
        
        {/* LEFT COLUMN: Sticky Table of Contents & Article Metadata (Desktop) */}
        <aside className="hidden lg:block space-y-10 sticky top-28 self-start max-h-[80vh] overflow-y-auto pr-4 print:hidden">
          {/* Table of Contents */}
          {headings.length > 0 && (
            <div>
              <h5 className="font-mono text-[10px] uppercase tracking-widest text-fog-3 mb-4 font-semibold">Table of Contents</h5>
              <ul className="space-y-3 font-light text-[13px] border-l border-white/5 pl-2">
                {headings.map((h, i) => (
                  <li key={i} className={h.isSub ? 'pl-3' : ''}>
                    <a
                      href={`#${h.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(h.id)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`block py-0.5 transition-colors duration-200 hover:text-white truncate ${
                        activeHeadingId === h.id ? 'text-violet font-medium border-l-2 border-violet -ml-[11px] pl-[9px]' : 'text-fog-3'
                      }`}
                    >
                      {h.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Tools */}
          <div className="pt-6 border-t border-white/5">
            <h5 className="font-mono text-[10px] uppercase tracking-widest text-fog-3 mb-4 font-semibold">Actions</h5>
            <div className="flex flex-col gap-2.5">
              <button
                onClick={exportMarkdown}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/5 bg-white/3 hover:border-violet/30 hover:bg-violet/5 text-[12px] text-fog-2 hover:text-white transition-all w-full text-left cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-violet" />
                Export Markdown
              </button>
              <button
                onClick={() => window.print()}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/5 bg-white/3 hover:border-violet/30 hover:bg-violet/5 text-[12px] text-fog-2 hover:text-white transition-all w-full text-left cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5 text-violet" />
                Print Article
              </button>
            </div>
          </div>
        </aside>

        {/* MIDDLE COLUMN: Main Reading Text */}
        <main className="w-full">
          <article className="print:text-black">
            {/* Metadata Badges */}
            <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono text-fog-3 mb-6 uppercase tracking-wider pb-6 border-b border-white/5 print:hidden">
              <span className="text-violet font-semibold bg-violet/10 px-3 py-1 rounded-full border border-violet/20">
                {publication.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-violet/60" />
                {publication.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-violet/60" />
                {publication.readTime}
              </span>
              <span className="flex items-center gap-1">
                <User className="w-3 h-3 text-violet/60" />
                {publication.author}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-3xl md:text-5xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-8 print:text-black">
              {publication.title}
            </h1>

            {/* Executive Summary Callout (At the top of the body) */}
            <div className="p-6 md:p-8 rounded-2xl bg-violet/5 border-l-4 border-violet text-fog-2 text-base md:text-lg italic font-light leading-relaxed mb-10 shadow-sm print:bg-gray-100 print:text-black print:border-gray-500">
              <span className="font-mono text-[9px] uppercase tracking-widest text-violet font-bold block not-italic mb-2 print:text-black">
                Executive Summary
              </span>
              "{extras.executiveSummary}"
            </div>

            {/* Custom SVG Geometric Technical Diagram */}
            <PublicationDiagram slug={publication.slug} />

            {/* Content Body */}
            <div className="article-content mt-8 print:text-black">
              {renderContent(publication.content)}
            </div>

            {/* Key Takeaways Highlight Grid Card */}
            <div className="my-12 p-8 rounded-2xl bg-gradient-to-br from-white/3 to-transparent border border-white/10 relative overflow-hidden print:hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet/10 rounded-full blur-2xl pointer-events-none" />
              <h4 className="font-display text-lg font-bold text-white mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-violet" />
                Key Architectural Takeaways
              </h4>
              <div className="grid md:grid-cols-3 gap-6">
                {extras.takeaways.map((t, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="font-mono text-xs text-violet font-bold mb-2">0{idx + 1}</span>
                    <p className="text-[13px] text-fog-2 leading-relaxed font-light">{t}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* COLLAPSIBLE Revision History Accordion */}
            <div className="my-8 border border-white/5 rounded-xl overflow-hidden print:hidden">
              <button
                onClick={() => setShowHistory(!showHistory)}
                className="w-full flex items-center justify-between p-4 bg-white/3 hover:bg-white/5 transition-colors text-left"
              >
                <div className="flex items-center gap-2">
                  <History className="w-4 h-4 text-violet" />
                  <span className="font-display text-xs font-bold uppercase tracking-wider text-white">Revision Timeline</span>
                  <span className="text-[10px] font-mono text-fog-3 bg-white/5 px-2 py-0.5 rounded">
                    Current: {extras.version}
                  </span>
                </div>
                {showHistory ? <ChevronUp className="w-4 h-4 text-fog-3" /> : <ChevronDown className="w-4 h-4 text-fog-3" />}
              </button>
              {showHistory && (
                <div className="p-4 bg-ink/30 border-t border-white/5 divide-y divide-white/5">
                  {extras.revisionHistory.map((rev, idx) => (
                    <div key={idx} className="py-3 first:pt-0 last:pb-0 flex items-start justify-between text-[13px] gap-4">
                      <div>
                        <div className="font-mono text-[10px] text-violet font-semibold">{rev.version}</div>
                        <p className="text-fog-2 mt-0.5 font-light">{rev.note}</p>
                      </div>
                      <span className="font-mono text-[10px] text-fog-3 shrink-0">{rev.date}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Academic Bibliography Section */}
            <div className="my-10 pt-8 border-t border-white/5">
              <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-violet" />
                References &amp; Bibliography
              </h4>
              <ul className="space-y-2.5 font-mono text-[11px] text-fog-3 list-none pl-0">
                {extras.bibliography.map((b, idx) => (
                  <li key={idx} className="pl-4 border-l border-violet/40 py-0.5 hover:text-white transition-colors">
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Tools (Mobile Only) */}
            <div className="flex flex-wrap gap-2.5 pt-6 border-t border-white/5 lg:hidden print:hidden">
              <button
                onClick={exportMarkdown}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/5 bg-white/3 hover:border-violet/30 hover:bg-violet/5 text-[12px] text-fog-2 hover:text-white transition-all cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-violet" />
                Export Markdown
              </button>
              <button
                onClick={() => window.print()}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/5 bg-white/3 hover:border-violet/30 hover:bg-violet/5 text-[12px] text-fog-2 hover:text-white transition-all cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5 text-violet" />
                Print Article
              </button>
            </div>

            {/* Article Tags */}
            <div className="flex flex-wrap gap-2 mt-10 print:hidden">
              {publication.tags.map((tag) => (
                <span key={tag} className="flex items-center gap-1.5 text-xs font-mono text-fog-3 border border-white/10 px-3 py-1 rounded-full bg-white/3">
                  {getTagIcon(tag)}
                  {tag}
                </span>
              ))}
            </div>
          </article>

          {/* NEXT / PREVIOUS PUBLICATION CARDS FOOTER */}
          <div className="grid sm:grid-cols-2 gap-4 mt-16 pt-10 border-t border-white/5 print:hidden">
            {prevPublication ? (
              <div 
                onClick={() => {
                  onNavigate(`publication:${prevPublication.slug}`);
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }}
                className="group p-5 border border-white/5 rounded-xl hover:border-violet/20 hover:bg-white/1 cursor-pointer transition-all duration-300 flex flex-col items-start gap-1 text-left"
              >
                <span className="font-mono text-[9px] text-fog-3 uppercase tracking-wider flex items-center gap-1">
                  <ArrowLeft className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" />
                  Previous Publication
                </span>
                <span className="font-display text-[13px] font-bold text-white group-hover:text-violet transition-colors line-clamp-1 mt-1">
                  {prevPublication.title}
                </span>
              </div>
            ) : <div />}

            {nextPublication ? (
              <div 
                onClick={() => {
                  onNavigate(`publication:${nextPublication.slug}`);
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }}
                className="group p-5 border border-white/5 rounded-xl hover:border-violet/20 hover:bg-white/1 cursor-pointer transition-all duration-300 flex flex-col items-end gap-1 text-right"
              >
                <span className="font-mono text-[9px] text-fog-3 uppercase tracking-wider flex items-center gap-1">
                  Next Publication
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
                <span className="font-display text-[13px] font-bold text-white group-hover:text-violet transition-colors line-clamp-1 mt-1">
                  {nextPublication.title}
                </span>
              </div>
            ) : <div />}
          </div>
        </main>

        {/* RIGHT COLUMN: Publication Specs Sidebar Panel */}
        <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start print:hidden">
          {/* Metadata Specs Widget */}
          <div className="p-5 border border-white/5 rounded-xl bg-ink-2/30 backdrop-blur-md">
            <h5 className="font-mono text-[10px] uppercase tracking-widest text-violet font-bold mb-4">Publication Specs</h5>
            
            <div className="space-y-4 text-xs font-light">
              <div className="flex justify-between border-b border-white/[0.04] pb-2">
                <span className="text-fog-3">Status</span>
                <span className={`font-mono text-[10px] font-semibold uppercase px-2 py-0.5 rounded ${
                  extras.status === 'Canonical' ? 'bg-emerald-400/10 text-emerald-400 border border-emerald-400/20' : 'bg-violet/10 text-violet border border-violet/20'
                }`}>
                  {extras.status}
                </span>
              </div>

              <div className="flex justify-between border-b border-white/[0.04] pb-2">
                <span className="text-fog-3">Version</span>
                <span className="font-mono font-medium text-white">{extras.version}</span>
              </div>

              <div className="flex justify-between border-b border-white/[0.04] pb-2">
                <span className="text-fog-3">Difficulty</span>
                <span className="font-mono font-medium text-white">{extras.difficulty}</span>
              </div>

              <div className="flex justify-between border-b border-white/[0.04] pb-2">
                <span className="text-fog-3">Word Count</span>
                <span className="font-mono font-medium text-white">~{extras.wordCount} words</span>
              </div>

              <div className="flex justify-between border-b border-white/[0.04] pb-2">
                <span className="text-fog-3">License</span>
                <span className="font-mono text-fog-2">CC BY-NC 4.0</span>
              </div>
            </div>
          </div>

          {/* Micro-journey recommendations */}
          <div className="p-5 border border-white/5 rounded-xl bg-ink-2/20 hidden lg:block">
            <h5 className="font-mono text-[10px] uppercase tracking-widest text-fog-3 font-semibold mb-3.5">Related Research</h5>
            <div className="space-y-3">
              {related.map((pub) => (
                <div 
                  key={pub.id}
                  onClick={() => {
                    onNavigate(`publication:${pub.slug}`);
                    window.scrollTo({ top: 0, behavior: 'instant' });
                  }}
                  className="group cursor-pointer block"
                >
                  <span className="font-mono text-[8px] text-violet uppercase tracking-widest font-semibold block">{pub.category}</span>
                  <span className="font-display text-[11px] font-bold text-fog-2 group-hover:text-white transition-colors line-clamp-1.5 mt-0.5">
                    {pub.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </aside>

      </div>

      {/* ALSO READ FOOTER SHOWCASE (Desktop & Tablet) */}
      <div className="max-w-4xl mx-auto px-6 mt-20 pt-16 border-t border-white/[0.06] flex flex-col items-center print:hidden">
        <div className="flex flex-col items-center gap-3 mb-10 text-center">
          <div className="w-9 h-9 rounded-full bg-white/3 border border-white/[0.08] flex items-center justify-center text-violet">
            <BookOpen className="w-3.5 h-3.5" />
          </div>
          <h3 className="font-display text-lg font-bold text-white tracking-tight">Also Read</h3>
          <p className="text-xs text-fog-3 max-w-xs">Selected essays and research from the archives</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5 w-full">
          {related.map((pub) => (
            <div
              key={pub.id}
              onClick={() => {
                onNavigate(`publication:${pub.slug}`);
                window.scrollTo({ top: 0, behavior: 'instant' });
              }}
              className="group p-6 border border-white/[0.06] rounded-xl bg-gradient-to-b from-white/[0.01] to-transparent hover:border-violet/30 hover:-translate-y-1 transition-all duration-400 ease-out cursor-pointer flex flex-col justify-between overflow-hidden"
            >
              <div>
                <div className="font-mono text-[9px] text-violet uppercase tracking-widest mb-3.5 font-semibold">
                  {pub.category}
                </div>
                <h4 className="font-display text-sm font-bold text-white leading-snug tracking-tight mb-2 group-hover:text-violet transition-colors duration-200">
                  {pub.title}
                </h4>
                <p className="text-[12px] text-fog-3 group-hover:text-fog-2 leading-relaxed font-light line-clamp-2 mb-4">
                  {pub.excerpt}
                </p>
              </div>
              <div className="text-[11px] text-fog-3 group-hover:text-white font-medium tracking-wide flex items-center gap-1.5">
                <span>Read Article</span>
                <ArrowLeft className="w-3 h-3 rotate-180 transform group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
