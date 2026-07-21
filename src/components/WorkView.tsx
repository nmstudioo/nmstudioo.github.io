import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, BookOpen, Clock, Tag,
  Music, Sparkles, Layout, Monitor, Library, Smartphone 
} from 'lucide-react';
import { PageId } from '../types';
import { getTagIcon } from './PublicationSingleView';
import { publications } from '../data/publications';
import { projects } from '../data/projects';

const getProjectIcon = (iconType: string) => {
  const classes = "w-4 h-4 text-current transition-colors duration-300";
  switch (iconType) {
    case 'music':
      return <Music className={classes} />;
    case 'grid':
      return <Sparkles className={classes} />;
    case 'plus':
      return <Layout className={classes} />;
    case 'circle':
      return <Monitor className={classes} />;
    case 'chart':
      return <Library className={classes} />;
    case 'heart':
      return <Smartphone className={classes} />;
    default:
      return <Sparkles className={classes} />;
  }
};

interface WorkViewProps {
  onNavigate: (page: PageId) => void;
}

export default function WorkView({ onNavigate }: WorkViewProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Design Philosophy', 'Engineering', 'AI Systems', 'Computer Science', 'Industry Insights', 'Creative AI Direction', 'Systems'];

  const filteredPublications = activeCategory === 'All'
    ? publications
    : publications.filter(pub => {
        // Match exact category or broad category keywords
        if (pub.category === activeCategory) return true;
        if (activeCategory === 'AI Systems' && (pub.tags.includes('AI Workflows') || pub.tags.includes('Prompt Chaining') || pub.tags.includes('AI Agency'))) return true;
        return false;
      });

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
      {/* Page Header */}
      <section className="py-12 md:py-16">
        <div className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-widest uppercase text-violet mb-4">
          <span className="w-7 h-[1px] bg-violet" />
          Showcase
        </div>
        <h1 className="font-display text-[clamp(34px,8.5vw,72px)] font-bold text-white leading-[1.05] tracking-tight mb-6">
          Work &amp; Publications
        </h1>
        <p className="max-w-xl text-base text-fog-3 font-light leading-relaxed">
          An indexed compendium of articles, system reference guidelines, and case studies representing my research and project outputs in frontend engineering, design systems, and AI workflows.
        </p>
      </section>

      {/* Projects Grid Section */}
      <section className="py-10 border-t border-white/5">
        <h2 className="font-display text-2xl font-bold text-white mb-8 flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-violet rounded-full" />
          Featured Projects Showcase
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <div 
              key={proj.id}
              onClick={() => {
                if (proj.link) {
                  const path = proj.link.replace('#/', '');
                  onNavigate(path);
                }
              }}
              className="group relative p-8 border border-white/[0.06] rounded-xl bg-gradient-to-b from-white/[0.01] to-transparent hover:border-violet/30 hover:shadow-[0_24px_48px_rgba(123,97,255,0.04)] hover:-translate-y-1 transition-all duration-500 ease-out cursor-pointer flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle background glow on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-[0.02] transition-opacity duration-700 pointer-events-none"
                style={{ backgroundImage: proj.gradient }}
              />

              <div className="relative z-10 flex-grow">
                {/* Header: Project Number & Icon */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-[9px] tracking-widest text-violet font-semibold uppercase">
                    Project {proj.num}
                  </span>
                  <div className="text-white/40 group-hover:text-violet transition-colors duration-300">
                    {getProjectIcon(proj.iconType)}
                  </div>
                </div>

                <h3 className="font-display text-[17px] font-bold text-white mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                  {proj.name}
                </h3>
                <p className="text-[13px] text-fog-3 group-hover:text-fog-2 leading-relaxed mb-6 font-light transition-colors duration-300">
                  {proj.blurb}
                </p>

                {/* Minimalist Tech Metrics Section */}
                {(proj.role || proj.stack) && (
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/[0.03] mb-6 text-[11px] font-mono tracking-wider">
                    {proj.role && (
                      <div>
                        <span className="text-[9px] uppercase tracking-widest text-fog-3/50 block mb-0.5">Role</span>
                        <span className="text-white/80 font-medium block truncate group-hover:text-violet transition-colors duration-300">{proj.role}</span>
                      </div>
                    )}
                    {proj.stack && (
                      <div>
                        <span className="text-[9px] uppercase tracking-widest text-fog-3/50 block mb-0.5">Stack</span>
                        <span className="text-white/80 font-medium block truncate group-hover:text-violet transition-colors duration-300">{proj.stack}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Minimalist Footer Row with Clean Tags */}
              <div className="relative z-10 flex items-center justify-between border-t border-white/[0.04] pt-5 mt-auto">
                <div className="flex flex-wrap gap-1.5 max-w-[85%]">
                  {proj.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-[9px] font-mono uppercase tracking-wider text-fog-3 bg-white/[0.02] border border-white/[0.06] px-2.5 py-1 rounded-full group-hover:border-white/10 group-hover:text-fog-2 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <ArrowRight className="w-3.5 h-3.5 text-fog-3 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300 flex-shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Publications Section with 9-card Grid */}
      <section className="py-16 border-t border-white/5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <h2 className="font-display text-2xl font-bold text-white flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-violet rounded-full" />
            Technical Publication Index
          </h2>
          
          {/* Category Filter Pills */}
          <div className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-none md:flex-wrap md:overflow-visible -mx-6 px-6 md:mx-0 md:px-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all shrink-0 md:shrink-1 ${
                  activeCategory === cat
                    ? 'bg-violet text-white'
                    : 'bg-white/3 border border-white/5 text-fog-3 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 9-Card Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPublications.map((pub) => (
            <article 
              key={pub.id}
              onClick={() => onNavigate(`publication:${pub.slug}`)}
              className="group border border-white/5 rounded-2xl bg-ink-2 overflow-hidden flex flex-col justify-between hover:border-violet/25 hover:bg-ink-3 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div>
                {/* Accent gradient banner */}
                <div className="h-2 w-full" style={{ background: pub.accentGradient }} />
                
                <div className="p-6">
                  {/* Category & Read Time */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-fog-3 mb-4 uppercase tracking-widest">
                    <span className="text-violet">{pub.category}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {pub.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-violet transition-colors leading-snug tracking-tight mb-3">
                    {pub.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-[13px] text-fog-3 leading-relaxed font-light mb-6">
                    {pub.excerpt}
                  </p>
                </div>
              </div>

              {/* Tags & Action Row */}
              <div className="p-6 pt-0 border-t border-white/5 mt-auto">
                <div className="flex items-center justify-between pt-4">
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 max-w-[70%]">
                    {pub.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className="flex items-center gap-2 text-[10px] font-mono text-fog-3 uppercase tracking-wider">
                        {i > 0 && <span className="text-white/10 select-none">•</span>}
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                  <div className="text-[12px] font-medium text-violet flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read Article
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPublications.length === 0 && (
          <div className="text-center py-16 border border-dashed border-white/5 rounded-2xl">
            <p className="text-fog-3 text-sm">No articles found in this category.</p>
          </div>
        )}
      </section>
    </div>
  );
}
