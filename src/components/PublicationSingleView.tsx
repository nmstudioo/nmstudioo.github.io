import React from 'react';
import { Publication } from '../types';
import { 
  ArrowLeft, Clock, Calendar, User, Tag, BookOpen,
  Brain, Layout, Sparkles, Layers, Palette, Award, Fingerprint, Type,
  Globe, History, Sliders, Code, Workflow, CheckSquare, Settings,
  Music, Waves, HardDrive, Chrome, Gauge, Zap, Grid, AlignJustify,
  Disc, Smartphone, Shield
} from 'lucide-react';

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
  // Find related articles
  const related = allPublications
    .filter((pub) => pub.id !== publication.id)
    .slice(0, 2);

  // Simple renderer to transform the custom content markup into structured paragraphs with rich typography
  const renderContent = (contentString: string) => {
    const lines = contentString.split('\n');
    let inList = false;
    let listItems: string[] = [];
    let seenNonHeader = false;

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
        if (!seenNonHeader) {
          // Skip the duplicate main title at the beginning of the file
          return;
        }
        if (inList) flushList(index);
        elements.push(
          <h1 key={index} className="font-display text-3xl md:text-5xl font-extrabold text-white mt-8 mb-6 tracking-tight">
            {parseBold(trimmed.substring(2))}
          </h1>
        );
      } else if (trimmed.startsWith('## ')) {
        if (!seenNonHeader) {
          // Skip the duplicate subtitle at the beginning of the file
          return;
        }
        if (inList) flushList(index);
        elements.push(
          <h2 key={index} className="font-display text-2xl md:text-3xl font-bold text-white mt-8 mb-4 tracking-tight border-b border-white/5 pb-2">
            {parseBold(trimmed.substring(3))}
          </h2>
        );
      } else if (trimmed.startsWith('### ')) {
        seenNonHeader = true;
        if (inList) flushList(index);
        elements.push(
          <h3 key={index} className="font-display text-lg md:text-xl font-bold text-white mt-6 mb-3 tracking-tight">
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
      // Check for list items with numbers
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
      // Check for code blocks
      else if (trimmed.startsWith('```')) {
        seenNonHeader = true;
        if (inList) flushList(index);
        return;
      }
      else if (trimmed.includes('pm uninstall') || trimmed.includes('font-size: clamp')) {
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

    // Flush any trailing list items
    if (inList) {
      flushList(9999);
    }

    return elements;
  };

  return (
    <div className="pt-24 pb-20 relative z-10">
      {/* Article Header Banner */}
      <div 
        className="w-full h-60 md:h-80 relative overflow-hidden"
        style={{ background: publication.accentGradient }}
      >
        {publication.coverImage && (
          <img 
            src={publication.coverImage} 
            alt={publication.title} 
            className="absolute inset-0 w-full h-full object-cover opacity-50 hover:opacity-70 transition-opacity duration-700"
            referrerPolicy="no-referrer"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <div className="absolute inset-0 bg-ink/20" />
        <div className="absolute bottom-8 left-0 right-0 max-w-4xl mx-auto px-6">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 backdrop-blur-md border border-white/10 text-xs font-mono tracking-widest uppercase text-white hover:bg-white/15 transition-all mb-6 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Showcase
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-6">
        <article className="pt-8">
          {/* Metadata badges */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-fog-3 mb-6 uppercase tracking-widest border-b border-white/5 pb-6">
            <span className="text-violet font-semibold bg-violet/10 px-3 py-1 rounded-full border border-violet/20">
              {publication.category}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {publication.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {publication.readTime}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" />
              {publication.author}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-8">
            {publication.title}
          </h1>

          {/* Content area */}
          <div className="article-content">
            {renderContent(publication.content)}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-white/5">
            {publication.tags.map((tag) => (
              <span key={tag} className="flex items-center gap-1.5 text-xs font-mono text-fog-3 border border-white/10 px-3.5 py-1.5 rounded-full bg-white/3 hover:border-violet/30 hover:text-white transition-colors">
                {getTagIcon(tag)}
                {tag}
              </span>
            ))}
          </div>
        </article>

        {/* Also Read Section */}
        <section className="mt-24 pt-16 border-t border-white/[0.06] flex flex-col items-center">
          <div className="flex flex-col items-center gap-3 mb-12 text-center">
            <div className="w-10 h-10 rounded-full bg-white/3 border border-white/[0.08] flex items-center justify-center text-violet">
              <BookOpen className="w-4 h-4" />
            </div>
            <h3 className="font-display text-xl font-bold text-white tracking-tight">Also Read</h3>
            <p className="text-xs text-fog-3 max-w-xs">Selected essays and research from the archives</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 w-full">
            {related.map((pub) => (
              <div
                key={pub.id}
                onClick={() => {
                  onNavigate(`publication:${pub.slug}`);
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }}
                className="group relative p-8 border border-white/[0.06] rounded-xl bg-gradient-to-b from-white/[0.01] to-transparent hover:border-violet/30 hover:shadow-[0_24px_48px_rgba(123,97,255,0.04)] hover:-translate-y-1 transition-all duration-500 ease-out cursor-pointer flex flex-col justify-between overflow-hidden"
              >
                <div>
                  <div className="font-mono text-[9px] text-violet uppercase tracking-widest mb-4 font-semibold">
                    {pub.category}
                  </div>
                  <h4 className="font-display text-base font-bold text-white leading-snug tracking-tight mb-3 group-hover:text-white transition-colors duration-300">
                    {pub.title}
                  </h4>
                  <p className="text-[13px] text-fog-3 group-hover:text-fog-2 leading-relaxed font-light line-clamp-2 mb-6 transition-colors duration-300">
                    {pub.excerpt}
                  </p>
                </div>
                <div className="text-xs text-fog-3 group-hover:text-white font-medium tracking-wide flex items-center gap-1.5 transition-colors duration-300">
                  <span>Read Article</span>
                  <ArrowLeft className="w-3.5 h-3.5 rotate-180 transform group-hover:translate-x-0.5 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
