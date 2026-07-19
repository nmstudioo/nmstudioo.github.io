import { motion } from 'motion/react';
import { ArrowRight, Star, Award, Briefcase, Zap, Cpu, Sparkles } from 'lucide-react';
import { PageId } from '../types';
import { projects } from '../data/projects';
import { publications } from '../data/publications';
import { getTagIcon } from './PublicationSingleView';

interface HomeViewProps {
  onNavigate: (page: PageId) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  // Take first 3 publications to show as highlights
  const featuredPublications = publications.slice(0, 3);

  return (
    <div className="relative overflow-hidden pt-24">
      {/* ─── HERO SECTION ─── */}
      <section className="relative min-h-[90svh] flex flex-col justify-end pb-16 lg:pb-24 overflow-hidden px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        {/* Animated grid lines background */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none z-0"
          style={{ maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)' }}
        />
        
        {/* Ambient background orbs */}
        <div className="absolute -top-48 -right-24 w-[600px] h-[600px] rounded-full bg-radial from-violet/20 to-transparent blur-[120px] pointer-events-none z-0 animate-orb-1" />
        <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] rounded-full bg-radial from-violet/12 to-transparent blur-[100px] pointer-events-none z-0 animate-orb-2" />

        <div className="relative z-10 w-full">
          {/* Status badge */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-white/13 rounded-full font-mono text-[11px] tracking-widest uppercase text-fog-3 bg-white/3 backdrop-blur-md mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open to internships &amp; freelance work
          </motion.div>

          {/* Main heading */}
          <h1 className="font-display text-[clamp(34px,9.5vw,112px)] font-extrabold leading-[0.94] tracking-tighter text-white mb-10 overflow-hidden">
            <motion.span 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              Connecting
            </motion.span>
            <motion.span 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="block text-fog-3"
            >
              design, code <em className="not-italic text-violet">&amp; AI</em>
            </motion.span>
            <motion.span 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              into one craft.
            </motion.span>
          </h1>

          {/* Subtext and actions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mt-6"
          >
            <p className="max-w-[440px] text-base text-fog-3 font-light leading-relaxed">
              <strong className="text-fog font-medium">Frontend developer &amp; UI/UX designer</strong> from Dhaka, Bangladesh, working across interfaces, AI-assisted workflows, and creative systems.
              I move between design and development to build things that feel intentional and genuinely useful.
            </p>
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4 flex-shrink-0">
              <button 
                onClick={() => onNavigate('work')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-violet hover:bg-[#6b4ff0] text-white rounded-full font-medium text-[15px] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(123,97,255,0.4)] cursor-pointer"
              >
                View Work
                <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-6 py-4 border border-white/13 hover:border-fog-2 text-fog-2 hover:text-white rounded-full font-medium text-[15px] transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                Get in Touch
              </button>
            </div>
          </motion.div>

          {/* Stat chips */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 mt-12"
          >
            {[
              { num: '3+', label: 'Years, self-directed' },
              { num: '20+', label: 'Projects built' },
              { num: '9', label: 'Album tracks released' },
              { num: '2', label: 'Chess championships' }
            ].map((stat, i) => (
              <div key={i} className="px-5 py-3.5 border border-white/5 rounded-xl bg-white/3 backdrop-blur-md flex flex-col justify-center">
                <div className="font-display text-2xl font-bold text-white tracking-tight leading-none">{stat.num}</div>
                <div className="text-[11px] text-fog-3 mt-1 font-light uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <div className="border-y border-white/5 py-8 overflow-hidden bg-ink relative z-10">
        <div className="flex animate-marquee-track whitespace-nowrap gap-0 w-max hover:[animation-play-state:paused]">
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="inline-flex items-center gap-0">
              {[
                'Frontend Development',
                'UI/UX Design',
                'Prompt Engineering',
                'AI Workflow Design',
                'Interaction Design',
                'Creative Direction',
                'Music Production',
                'Android Optimization'
              ].map((text, i) => (
                <span key={i} className="inline-flex items-center gap-6 px-10 font-display text-[13px] font-semibold tracking-widest uppercase text-fog-3">
                  {text} <span className="text-violet text-lg">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ─── QUICK ABOUT SECTION ─── */}
      <section className="py-24 lg:py-32 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-start relative z-10">
        <div>
          <div className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-widest uppercase text-violet mb-7">
            <span className="w-7 h-[1px] bg-violet" />
            About me
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.02] tracking-tighter text-white mb-8">
            Curiosity first, <em className="not-italic text-violet">refinement</em> always.
          </h2>
          <div className="aspect-[3/4] rounded-2xl bg-ink-3 border border-white/5 overflow-hidden relative max-w-md w-full mb-10 lg:mb-0 mx-auto lg:mx-0">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(123,97,255,0.1),transparent_60%),linear-gradient(315deg,rgba(60,40,140,0.1),transparent_60%)] z-10 pointer-events-none" />
            <img 
              src="/images/noushad_portrait_1784467295854.jpg" 
              alt="Noushad Mostafa Portrait" 
              className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-6 right-6 bg-violet text-white px-4.5 py-3 rounded-xl font-mono text-[11px] tracking-widest uppercase leading-snug shadow-xl z-20">
              Open to<br />new work ✦
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="text-lg text-fog-2 font-light leading-relaxed flex flex-col gap-6">
            <p>
              I'm <strong className="text-white font-medium">Noushad Mostafa</strong>, a multidisciplinary creator from Dhaka, Bangladesh, working at the intersection of frontend development, UI/UX design, AI systems, and digital creativity.
            </p>
            <p>
              Rather than specializing in one discipline, I naturally gravitated toward understanding complete systems: a user interface led me to frontend engineering, engineering led me to design, and design led me into AI and prompt engineering. <strong className="text-white font-medium">Technology should remove complexity — not create it</strong> — and that principle guides everything I build.
            </p>
            <p>
              I rarely accept default solutions. I compare alternatives, experiment repeatedly, and refine details until the result aligns with both function and aesthetics.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3.5">
            {[
              { title: 'Frontend Development', desc: 'Responsive, accessible interfaces built with clean HTML, CSS, and modern framework patterns.', icon: <Cpu className="w-5 h-5 text-violet" /> },
              { title: 'UI/UX Design', desc: 'Human-centered interfaces shaped by research, visual hierarchy, and intentional interactions.', icon: <Sparkles className="w-5 h-5 text-violet" /> },
              { title: 'AI Prompt Engineering', desc: 'Structured, reusable prompt architectures for reliable, deterministic AI-assisted software work.', icon: <Zap className="w-5 h-5 text-violet" /> },
              { title: 'Creative AI Direction', desc: 'Composing and directing AI-assisted creative music and multimedia art from concept to final release.', icon: <Award className="w-5 h-5 text-violet" /> }
            ].map((skill, idx) => (
              <div 
                key={idx}
                className="p-5 border border-white/5 rounded-2xl bg-ink-2 hover:border-violet/25 hover:bg-ink-3 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-4">{skill.icon}</div>
                <h4 className="font-display text-[15px] font-semibold text-white mb-1.5">{skill.title}</h4>
                <p className="text-[13px] text-fog-3 leading-normal">{skill.desc}</p>
              </div>
            ))}
          </div>

          <button 
            onClick={() => onNavigate('about')}
            className="inline-flex items-center gap-2 text-[13px] font-medium tracking-widest uppercase text-violet hover:text-white transition-colors self-start py-1 border-b border-violet hover:border-white"
          >
            Read Full Background
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* ─── PROJECTS SHOWCASE ─── */}
      <section className="py-24 lg:py-32 border-t border-white/[0.06] px-6 md:px-12 lg:px-20 max-w-7xl mx-auto relative z-10">
        <div className="flex items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-[9px] tracking-[0.2em] uppercase text-violet mb-4">
              <span className="w-5 h-[1px] bg-violet/50" />
              Publications &amp; Projects
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight tracking-tight text-white">
              Technical Insights
            </h2>
          </div>
          <div className="font-mono text-[10px] tracking-wider text-fog-3 uppercase whitespace-nowrap pb-1">
            {publications.length} Publications
          </div>
        </div>

        <div className="flex flex-col border-t border-white/[0.06]">
          {featuredPublications.map((pub, index) => (
            <div 
              key={pub.id} 
              onClick={() => onNavigate(`publication:${pub.slug}`)}
              className="group relative border-b border-white/[0.06] hover:bg-white/[0.01] transition-all duration-500 ease-out cursor-pointer"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 px-2 md:px-4 py-8 transition-all duration-500 group-hover:pl-8">
                <div className="flex items-start gap-5 md:gap-7">
                  <div className="font-mono text-[11px] text-violet/60 font-semibold tracking-wider pt-1.5">
                    0{index + 1}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-1.5 mb-3">
                      {pub.tags.slice(0, 2).map((tag, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="text-[9px] font-mono uppercase tracking-wider text-fog-3 bg-white/[0.02] border border-white/[0.06] px-2.5 py-0.5 rounded-full group-hover:border-violet/20 group-hover:text-violet transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-display text-lg md:text-xl font-bold text-white tracking-tight leading-snug group-hover:text-violet transition-colors duration-300">
                      {pub.title}
                    </h3>
                    <p className="text-[13px] text-fog-3 max-w-[560px] leading-relaxed mt-2 font-light group-hover:text-fog-2 transition-colors duration-300">
                      {pub.excerpt}
                    </p>
                  </div>
                </div>

                {/* Cover image preview & arrow icon */}
                <div className="flex items-center gap-6 ml-auto md:ml-0 self-end md:self-center">
                  <div className="w-28 aspect-[16/10] rounded-lg border border-white/[0.08] overflow-hidden bg-ink-3 relative hidden md:block opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-500 ease-out">
                    <img 
                      src={pub.coverImage} 
                      alt={pub.title} 
                      className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-90 transition-all duration-500" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-violet/10 mix-blend-color opacity-40 group-hover:opacity-0 transition-opacity duration-500" />
                  </div>

                  <div className="w-9 h-9 rounded-full border border-white/[0.08] flex items-center justify-center text-fog-3 group-hover:bg-violet group-hover:border-violet group-hover:text-white transition-all group-hover:-rotate-45 duration-300">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => onNavigate('work')}
            className="inline-flex items-center gap-2 px-7 py-3 bg-white/[0.02] border border-white/[0.08] hover:border-violet/40 hover:bg-violet/[0.02] text-white rounded-full font-medium text-xs tracking-wider uppercase transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 shadow-lg cursor-pointer"
          >
            <span>Explore All Publications &amp; Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* ─── GUIDING PRINCIPLES ─── */}
      <section className="py-24 lg:py-32 border-t border-white/5 overflow-hidden bg-ink-2 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-16">
          <div className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-widest uppercase text-violet mb-4">
            <span className="w-7 h-[1px] bg-violet" />
            Guiding principles
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none tracking-tighter text-white">
            How I think about the work
          </h2>
        </div>

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-ink-2 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-ink-2 to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee-track-slow whitespace-nowrap gap-5 w-max hover:[animation-play-state:paused]">
            {[...Array(2)].map((_, idx) => (
              <div key={idx} className="flex gap-5">
                {[
                  { quote: "Good design isn't decoration — it's communication. If a user notices the interface more than their own task, something needs refining.", role: "On Design" },
                  { quote: "Good development isn't about writing the most complex code. It's building systems that stay understandable months later.", role: "On Development" },
                  { quote: "I use AI to accelerate research and iteration — never as a replacement for human context and expert quality.", role: "On AI Craft" },
                  { quote: "I rarely accept default solutions. I compare alternatives and refine until the result aligns with both function and aesthetics.", role: "On Process" },
                  { quote: "Chess taught me strategic thinking, and music production taught me patience and pacing — lessons that translate beautifully into software craft.", role: "On Mindset" }
                ].map((item, i) => (
                  <div key={i} className="w-[360px] bg-ink border border-white/5 p-8 rounded-2xl flex flex-col justify-between whitespace-normal">
                    <div>
                      <div className="flex gap-1 mb-5 text-[#F5C842]">
                        {[...Array(5)].map((_, s) => <Star key={s} className="w-3.5 h-3.5 fill-current" />)}
                      </div>
                      <p className="text-sm font-light italic text-fog-2 leading-relaxed mb-6">
                        "{item.quote}"
                      </p>
                    </div>
                    <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                      <div className="w-10 h-10 rounded-full bg-ink-3 border border-white/13 flex items-center justify-center font-display text-xs font-bold text-violet">
                        NM
                      </div>
                      <div>
                        <div className="text-[13px] font-semibold text-white">Noushad Mostafa</div>
                        <div className="text-[11px] text-fog-3">{item.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT CALL-TO-ACTION ─── */}
      <section className="py-24 lg:py-32 border-t border-white/5 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto text-center relative z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial from-violet/8 to-transparent blur-[80px] pointer-events-none z-0" />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-widest uppercase text-violet mb-7">
            <span className="w-7 h-[1px] bg-violet" />
            Let's work together
            <span className="w-7 h-[1px] bg-violet" />
          </div>
          <h2 className="font-display text-[44px] md:text-7xl lg:text-[96px] font-extrabold leading-[0.95] tracking-tighter text-white mb-8">
            Got a project<br />in <em className="not-italic text-violet">mind?</em>
          </h2>
          <p className="max-w-md text-[16px] text-fog-3 font-light leading-relaxed mx-auto mb-12">
            I'm open to internships, freelance contracts, and creative collaborations. Based in Dhaka, Bangladesh — happy to collaborate with people worldwide.
          </p>
          <button 
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2.5 px-10 py-5 bg-violet hover:bg-[#6b4ff0] text-white rounded-full font-medium text-base transition-all hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(123,97,255,0.4)]"
          >
            <Briefcase className="w-4.5 h-4.5" />
            nooushadd@gmail.com
          </button>
        </div>
      </section>
    </div>
  );
}
