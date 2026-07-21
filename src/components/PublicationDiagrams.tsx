import React from 'react';

interface DiagramProps {
  slug: string;
}

export default function PublicationDiagram({ slug }: DiagramProps) {
  switch (slug) {
    case 'manifesto':
      return (
        <div className="w-full bg-ink-2/40 border border-white/5 rounded-2xl p-6 md:p-8 my-8 flex flex-col items-center">
          <div className="text-center mb-6">
            <span className="font-mono text-[10px] text-violet uppercase tracking-widest font-semibold bg-violet/10 px-2.5 py-1 rounded-full">
              System Model
            </span>
            <h4 className="font-display text-lg font-bold text-white mt-2">The Interface Synthesis Loop</h4>
            <p className="text-xs text-fog-3 mt-1">Unified territory of Design, Code, and Collaborative AI agency</p>
          </div>
          
          <div className="w-full max-w-lg aspect-[16/10] relative flex items-center justify-center">
            <svg viewBox="0 0 400 240" className="w-full h-full text-white" fill="none">
              {/* Outer Venn Overlaps */}
              <circle cx="160" cy="100" r="70" className="stroke-white/10 fill-violet/5" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle cx="240" cy="100" r="70" className="stroke-white/10 fill-emerald-400/5" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle cx="200" cy="150" r="70" className="stroke-white/10 fill-blue-500/5" strokeWidth="1.5" strokeDasharray="3 3" />

              {/* Glowing Interactive Centers */}
              <circle cx="160" cy="100" r="4" className="fill-violet animate-ping" />
              <circle cx="160" cy="100" r="4" className="fill-violet" />
              
              <circle cx="240" cy="100" r="4" className="fill-emerald-400 animate-pulse" />
              <circle cx="240" cy="100" r="4" className="fill-emerald-400" />
              
              <circle cx="200" cy="150" r="4" className="fill-blue-500" />

              {/* Connecting vectors */}
              <path d="M 160 100 Q 200 80 240 100" className="stroke-violet/40" strokeWidth="1.5" />
              <path d="M 240 100 Q 220 125 200 150" className="stroke-emerald-400/40" strokeWidth="1.5" />
              <path d="M 200 150 Q 180 125 160 100" className="stroke-blue-500/40" strokeWidth="1.5" />

              {/* Intersection Core */}
              <circle cx="200" cy="115" r="22" className="fill-ink-2 stroke-violet/60" strokeWidth="2" />
              <text x="200" y="119" className="fill-white font-mono text-[9px] font-bold text-center" textAnchor="middle">SYNTH</text>

              {/* Labels */}
              <text x="110" y="70" className="fill-fog font-display text-[11px] font-semibold">DESIGN</text>
              <text x="110" y="85" className="fill-fog-3 font-mono text-[8px]">Static Interface</text>

              <text x="290" y="70" className="fill-fog font-display text-[11px] font-semibold" textAnchor="end">CODE</text>
              <text x="290" y="85" className="fill-fog-3 font-mono text-[8px]" textAnchor="end">Deterministic Engine</text>

              <text x="200" y="232" className="fill-fog font-display text-[11px] font-semibold" textAnchor="middle">AI AGENCY</text>
              <text x="200" y="244" className="fill-fog-3 font-mono text-[8px]" textAnchor="middle">Autonomous Collaboration</text>
            </svg>
          </div>
        </div>
      );

    case 'personal-brand-digital-identity':
      return (
        <div className="w-full bg-ink-2/40 border border-white/5 rounded-2xl p-6 md:p-8 my-8 flex flex-col items-center">
          <div className="text-center mb-6">
            <span className="font-mono text-[10px] text-violet uppercase tracking-widest font-semibold bg-violet/10 px-2.5 py-1 rounded-full">
              System Blueprint
            </span>
            <h4 className="font-display text-lg font-bold text-white mt-2">Digital Brand &amp; Domain Topology</h4>
            <p className="text-xs text-fog-3 mt-1">Modular construction of professional presence on decentralized web</p>
          </div>
          
          <div className="w-full max-w-lg aspect-[16/10] relative flex items-center justify-center">
            <svg viewBox="0 0 400 240" className="w-full h-full text-white" fill="none">
              {/* Outer boundary */}
              <rect x="20" y="20" width="360" height="200" rx="12" className="stroke-white/5 fill-ink-3/20" strokeWidth="1.5" />
              
              {/* Core Blocks */}
              <rect x="40" y="60" width="100" height="120" rx="8" className="stroke-violet/30 fill-violet/5" strokeWidth="1.5" />
              <rect x="160" y="60" width="100" height="120" rx="8" className="stroke-white/10 fill-white/2" strokeWidth="1.5" />
              <rect x="280" y="60" width="80" height="120" rx="8" className="stroke-white/10 fill-white/2" strokeWidth="1.5" />

              {/* Connectors */}
              <path d="M 140 120 L 160 120" className="stroke-violet" strokeWidth="1.5" strokeDasharray="2 2" />
              <path d="M 260 120 L 280 120" className="stroke-white/20" strokeWidth="1.5" />

              {/* Labels */}
              <text x="90" y="48" className="fill-fog-3 font-mono text-[9px]" textAnchor="middle">1. IDENTITY SEED</text>
              <text x="90" y="110" className="fill-white font-display text-[12px] font-bold" textAnchor="middle">NM STUDIOO</text>
              <text x="90" y="130" className="fill-violet font-mono text-[9px]" textAnchor="middle">Personal Brand</text>

              <text x="210" y="48" className="fill-fog-3 font-mono text-[9px]" textAnchor="middle">2. PRESENTATION LAYOUT</text>
              <text x="210" y="105" className="fill-white font-display text-[11px] font-bold" textAnchor="middle">Vite SPA Engine</text>
              <text x="210" y="125" className="fill-fog font-mono text-[8px]" textAnchor="middle">Tailwind v4 CSS</text>
              <text x="210" y="140" className="fill-fog font-mono text-[8px]" textAnchor="middle">HTML5 Routing</text>

              <text x="320" y="48" className="fill-fog-3 font-mono text-[9px]" textAnchor="middle">3. INFRASTRUCTURE</text>
              <text x="320" y="110" className="fill-white font-display text-[11px] font-bold" textAnchor="middle">GitHub Pages</text>
              <text x="320" y="130" className="fill-emerald-400 font-mono text-[8px]" textAnchor="middle">Static Server</text>

              {/* Grid calibration text */}
              <text x="200" y="210" className="fill-white/20 font-mono text-[8px]" textAnchor="middle">CALIBRATION SCALE: G-1.618 (GOLDEN RATIO SYSTEM)</text>
            </svg>
          </div>
        </div>
      );

    case 'blogger-theme-engineering':
      return (
        <div className="w-full bg-ink-2/40 border border-white/5 rounded-2xl p-6 md:p-8 my-8 flex flex-col items-center">
          <div className="text-center mb-6">
            <span className="font-mono text-[10px] text-violet uppercase tracking-widest font-semibold bg-violet/10 px-2.5 py-1 rounded-full">
              Compiler Architecture
            </span>
            <h4 className="font-display text-lg font-bold text-white mt-2">Blogger Compilation Tunnel</h4>
            <p className="text-xs text-fog-3 mt-1">Mapping legacy XML templating elements to dynamic CSS variables</p>
          </div>
          
          <div className="w-full max-w-lg aspect-[16/10] relative flex items-center justify-center">
            <svg viewBox="0 0 400 240" className="w-full h-full text-white" fill="none">
              {/* Pipeline Blocks */}
              <g transform="translate(20, 70)">
                <rect x="0" y="0" width="90" height="80" rx="6" className="stroke-white/10 fill-white/2" strokeWidth="1.5" />
                <text x="45" y="35" className="fill-white font-display text-[11px] font-bold" textAnchor="middle">Blogger XML</text>
                <text x="45" y="55" className="fill-fog-3 font-mono text-[8px]" textAnchor="middle">Legacy Layout</text>
              </g>

              <g transform="translate(150, 70)">
                <rect x="0" y="0" width="100" height="80" rx="6" className="stroke-violet/40 fill-violet/5" strokeWidth="1.5" />
                <text x="50" y="30" className="fill-violet font-mono text-[10px] font-bold" textAnchor="middle">THEME ENGINE</text>
                <text x="50" y="48" className="fill-white font-display text-[10px]" textAnchor="middle">Scoped Parser</text>
                <text x="50" y="62" className="fill-fog-3 font-mono text-[8px]" textAnchor="middle">CSS Layer Injection</text>
              </g>

              <g transform="translate(290, 70)">
                <rect x="0" y="0" width="90" height="80" rx="6" className="stroke-emerald-400/20 fill-emerald-400/5" strokeWidth="1.5" />
                <text x="45" y="35" className="fill-white font-display text-[11px] font-bold" textAnchor="middle">Modern DOM</text>
                <text x="45" y="55" className="fill-emerald-400 font-mono text-[8px]" textAnchor="middle">CSS Custom Vars</text>
              </g>

              {/* Arrows */}
              <path d="M 110 110 L 150 110" className="stroke-violet" strokeWidth="1.5" />
              <polygon points="150,110 142,106 142,114" className="fill-violet" />

              <path d="M 250 110 L 290 110" className="stroke-emerald-400" strokeWidth="1.5" />
              <polygon points="290,110 282,106 282,114" className="fill-emerald-400" />

              {/* Meta details */}
              <text x="200" y="190" className="fill-fog-3 font-mono text-[9px]" textAnchor="middle">ELIMINATES: Layout-Thrashing, CLS, XML Schema overhead</text>
              <text x="200" y="205" className="fill-emerald-400/80 font-mono text-[8px]" textAnchor="middle">PERFORMANCE BOOST: +82% FIRST CONTENTFUL PAINT</text>
            </svg>
          </div>
        </div>
      );

    case 'ai-assisted-creative-workflow':
      return (
        <div className="w-full bg-ink-2/40 border border-white/5 rounded-2xl p-6 md:p-8 my-8 flex flex-col items-center">
          <div className="text-center mb-6">
            <span className="font-mono text-[10px] text-violet uppercase tracking-widest font-semibold bg-violet/10 px-2.5 py-1 rounded-full">
              Workflow Protocol
            </span>
            <h4 className="font-display text-lg font-bold text-white mt-2">The Balanced Curation Loop</h4>
            <p className="text-xs text-fog-3 mt-1">Human editorial veto guarding the pipeline of algorithmic generation</p>
          </div>
          
          <div className="w-full max-w-lg aspect-[16/10] relative flex items-center justify-center">
            <svg viewBox="0 0 400 240" className="w-full h-full text-white" fill="none">
              {/* Circular flow layout */}
              <circle cx="200" cy="120" r="70" className="stroke-white/5" strokeWidth="1.5" />

              {/* State 1: Human Prompt */}
              <circle cx="200" cy="50" r="18" className="fill-ink-3 stroke-violet" strokeWidth="1.5" />
              <text x="200" y="54" className="fill-white font-mono text-[9px] font-bold" textAnchor="middle">INTENT</text>

              {/* State 2: LLM Generation */}
              <circle cx="270" cy="120" r="18" className="fill-ink-3 stroke-white/20" strokeWidth="1.5" />
              <text x="270" y="124" className="fill-fog font-mono text-[8px]" textAnchor="middle">OUTPUT</text>

              {/* State 3: Human Curation */}
              <circle cx="200" cy="190" r="18" className="fill-violet/20 stroke-violet" strokeWidth="2" />
              <text x="200" y="194" className="fill-white font-mono text-[9px] font-bold" textAnchor="middle">CURATE</text>

              {/* State 4: Iterative Tuning */}
              <circle cx="130" cy="120" r="18" className="fill-ink-3 stroke-white/20" strokeWidth="1.5" />
              <text x="130" y="124" className="fill-fog font-mono text-[8px]" textAnchor="middle">REFINE</text>

              {/* Connection curves */}
              <path d="M 218 50 Q 270 50 270 102" className="stroke-white/10" strokeWidth="1.5" />
              <path d="M 270 138 Q 270 190 218 190" className="stroke-violet/40" strokeWidth="1.5" />
              <path d="M 182 190 Q 130 190 130 138" className="stroke-white/10" strokeWidth="1.5" />
              <path d="M 130 102 Q 130 50 182 50" className="stroke-violet/40" strokeWidth="1.5" />

              {/* Center Core */}
              <text x="200" y="118" className="fill-white font-display text-[11px] font-bold" textAnchor="middle">Human-in-the-Loop</text>
              <text x="200" y="132" className="fill-violet font-mono text-[9px]" textAnchor="middle">100% Quality Veto</text>
            </svg>
          </div>
        </div>
      );

    case 'wavelet-feature-reference':
      return (
        <div className="w-full bg-ink-2/40 border border-white/5 rounded-2xl p-6 md:p-8 my-8 flex flex-col items-center">
          <div className="text-center mb-6">
            <span className="font-mono text-[10px] text-violet uppercase tracking-widest font-semibold bg-violet/10 px-2.5 py-1 rounded-full">
              Signal Pipeline
            </span>
            <h4 className="font-display text-lg font-bold text-white mt-2">Wavelet Audio Equalization Flow</h4>
            <p className="text-xs text-fog-3 mt-1">Multi-channel response compensation using finite impulse filter arrays</p>
          </div>
          
          <div className="w-full max-w-lg aspect-[16/10] relative flex items-center justify-center">
            <svg viewBox="0 0 400 240" className="w-full h-full text-white" fill="none">
              {/* Input Wave */}
              <path d="M 30 120 Q 50 60 70 120 T 110 120" className="stroke-white/30" strokeWidth="1.5" />
              <text x="50" y="150" className="fill-fog-3 font-mono text-[8px]">RAW AUDIO</text>

              {/* DSP Filter Engine */}
              <rect x="130" y="80" width="140" height="80" rx="8" className="stroke-violet fill-violet/5" strokeWidth="1.5" />
              <path d="M 140 120 L 260 120" className="stroke-white/10" strokeWidth="1" />
              
              {/* Equalization Curve */}
              <path d="M 145 140 Q 170 80 190 130 T 230 110 T 255 125" className="stroke-emerald-400" strokeWidth="2" />
              <text x="200" y="70" className="fill-violet font-mono text-[9px] font-bold" textAnchor="middle">AUTOEQ COMPENSATION</text>

              {/* Output Wave */}
              <path d="M 290 120 Q 310 100 330 120 T 370 120" className="stroke-emerald-400" strokeWidth="1.5" />
              <text x="330" y="150" className="fill-emerald-400 font-mono text-[8px]">CALIBRATED SIGNAL</text>

              {/* Vector arrow connectors */}
              <path d="M 110 120 L 130 120" className="stroke-white/20" strokeWidth="1.5" />
              <path d="M 270 120 L 290 120" className="stroke-white/20" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      );

    case 'via-browser-optimization':
      return (
        <div className="w-full bg-ink-2/40 border border-white/5 rounded-2xl p-6 md:p-8 my-8 flex flex-col items-center">
          <div className="text-center mb-6">
            <span className="font-mono text-[10px] text-violet uppercase tracking-widest font-semibold bg-violet/10 px-2.5 py-1 rounded-full">
              Latency Funnel
            </span>
            <h4 className="font-display text-lg font-bold text-white mt-2">Via Micro-Client Tuning Funnel</h4>
            <p className="text-xs text-fog-3 mt-1">Bypassing layout bottlenecks and network latency by strategic blockades</p>
          </div>
          
          <div className="w-full max-w-lg aspect-[16/10] relative flex items-center justify-center">
            <svg viewBox="0 0 400 240" className="w-full h-full text-white" fill="none">
              {/* Inverted Triangle representing narrowing down latency */}
              <polygon points="100,50 300,50 250,170 150,170" className="stroke-white/10 fill-white/2" strokeWidth="1.5" />
              
              {/* Layers of filter */}
              <line x1="120" y1="90" x2="280" y2="90" className="stroke-violet/40" strokeWidth="2" />
              <line x1="140" y1="130" x2="260" y2="130" className="stroke-emerald-400/40" strokeWidth="2" />

              {/* Inner core funnel */}
              <circle cx="200" cy="195" r="16" className="fill-violet/20 stroke-violet" strokeWidth="1.5" />
              <text x="200" y="198" className="fill-white font-mono text-[9px] font-bold" textAnchor="middle">0.4s</text>

              {/* Labels */}
              <text x="200" y="75" className="fill-white font-display text-[10px]" textAnchor="middle">1. AD-BLOCK / SCRIPT VETO</text>
              <text x="200" y="115" className="fill-fog font-display text-[10px]" textAnchor="middle">2. AGGRESSIVE RENDERING CACHE</text>
              <text x="200" y="155" className="fill-emerald-400 font-display text-[10px]" textAnchor="middle">3. DNS PRE-RESOLVE</text>

              <text x="200" y="225" className="fill-fog-3 font-mono text-[8px]" textAnchor="middle">Optimized Web Navigation Latency</text>
            </svg>
          </div>
        </div>
      );

    case 'typography-spacing-system':
      return (
        <div className="w-full bg-ink-2/40 border border-white/5 rounded-2xl p-6 md:p-8 my-8 flex flex-col items-center">
          <div className="text-center mb-6">
            <span className="font-mono text-[10px] text-violet uppercase tracking-widest font-semibold bg-violet/10 px-2.5 py-1 rounded-full">
              Spacing Geometry
            </span>
            <h4 className="font-display text-lg font-bold text-white mt-2">The Golden Baseline Grid</h4>
            <p className="text-xs text-fog-3 mt-1">Interlocking horizontal grid structures defining strict reading rhythm</p>
          </div>
          
          <div className="w-full max-w-lg aspect-[16/10] relative flex items-center justify-center">
            <svg viewBox="0 0 400 240" className="w-full h-full text-white" fill="none">
              {/* Baseline horizontal lines */}
              {[...Array(12)].map((_, i) => (
                <line 
                  key={i} 
                  x1="30" 
                  y1={40 + i * 16} 
                  x2="370" 
                  y2={40 + i * 16} 
                  className={i % 4 === 0 ? "stroke-violet/20" : "stroke-white/[0.03]"} 
                  strokeWidth="1" 
                />
              ))}

              {/* Mock Typographic glyphs fitted into grids */}
              <rect x="50" y="56" width="300" height="32" rx="4" className="stroke-violet fill-violet/5" strokeWidth="1" />
              <text x="65" y="78" className="fill-white font-display text-[14px] font-bold">The Synthesis Manifesto</text>
              <text x="340" y="76" className="fill-violet font-mono text-[8px]" textAnchor="end">H: 32px (2x GRID)</text>

              <rect x="50" y="104" width="300" height="48" rx="4" className="stroke-white/10 fill-white/2" strokeWidth="1" />
              <text x="65" y="123" className="fill-fog text-[10px] leading-relaxed">
                An investigation into the unified territory of interfaces, software
              </text>
              <text x="65" y="139" className="fill-fog text-[10px] leading-relaxed">
                engineering, and collaborative AI systems...
              </text>
              <text x="340" y="132" className="fill-fog-3 font-mono text-[8px]" textAnchor="end">H: 48px (3x GRID)</text>

              {/* Grid Ruler overlay */}
              <line x1="30" y1="40" x2="30" y2="216" className="stroke-violet" strokeWidth="1.5" />
              <circle cx="30" cy="40" r="2.5" className="fill-violet" />
              <circle cx="30" cy="216" r="2.5" className="fill-violet" />
              <text x="18" y="128" className="fill-violet font-mono text-[8px] rotate-270 origin-center" textAnchor="middle">8px SUB GRID</text>
            </svg>
          </div>
        </div>
      );

    case 'metal-ai-music-no-limits':
      return (
        <div className="w-full bg-ink-2/40 border border-white/5 rounded-2xl p-6 md:p-8 my-8 flex flex-col items-center">
          <div className="text-center mb-6">
            <span className="font-mono text-[10px] text-violet uppercase tracking-widest font-semibold bg-violet/10 px-2.5 py-1 rounded-full">
              Composition Pipeline
            </span>
            <h4 className="font-display text-lg font-bold text-white mt-2">Heavy Metal Gen-Composition Flow</h4>
            <p className="text-xs text-fog-3 mt-1">Iterative composition, structural arrangement, and final mastering loops</p>
          </div>
          
          <div className="w-full max-w-lg aspect-[16/10] relative flex items-center justify-center">
            <svg viewBox="0 0 400 240" className="w-full h-full text-white" fill="none">
              {/* Sequential Process Nodes */}
              <rect x="30" y="80" width="80" height="60" rx="6" className="stroke-white/10 fill-white/2" strokeWidth="1.5" />
              <text x="70" y="110" className="fill-white font-display text-[10px] font-bold" textAnchor="middle">LYRICAL SEED</text>
              <text x="70" y="123" className="fill-fog-3 font-mono text-[7px]" textAnchor="middle">Theme Architecture</text>

              <rect x="150" y="80" width="100" height="60" rx="6" className="stroke-violet fill-violet/5" strokeWidth="1.5" />
              <text x="200" y="110" className="fill-violet font-mono text-[9px] font-bold" textAnchor="middle">SONO MODEL SEED</text>
              <text x="200" y="123" className="fill-white font-display text-[9px]" textAnchor="middle">Prompt Generation</text>

              <rect x="290" y="80" width="80" height="60" rx="6" className="stroke-emerald-400/20 fill-emerald-400/5" strokeWidth="1.5" />
              <text x="330" y="110" className="fill-white font-display text-[10px] font-bold" textAnchor="middle">CURATE / EDIT</text>
              <text x="330" y="123" className="fill-emerald-400 font-mono text-[7px]" textAnchor="middle">Mastering &amp; Cut</text>

              {/* Feed-back Loop Arrow from 3 back to 1 */}
              <path d="M 330 140 Q 200 210 70 140" className="stroke-violet" strokeWidth="1.5" strokeDasharray="3 3" />
              <polygon points="70,140 76,146 70,148" className="fill-violet" />
              <text x="200" y="195" className="fill-violet font-mono text-[8px]" textAnchor="middle">ITERATIVE RE-ARRANGEMENT</text>

              {/* Simple Connection arrows */}
              <path d="M 110 110 L 150 110" className="stroke-white/25" strokeWidth="1.5" />
              <path d="M 250 110 L 290 110" className="stroke-white/25" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      );

    case 'android-customization-framework':
      return (
        <div className="w-full bg-ink-2/40 border border-white/5 rounded-2xl p-6 md:p-8 my-8 flex flex-col items-center">
          <div className="text-center mb-6">
            <span className="font-mono text-[10px] text-violet uppercase tracking-widest font-semibold bg-violet/10 px-2.5 py-1 rounded-full">
              Stewardship Model
            </span>
            <h4 className="font-display text-lg font-bold text-white mt-2">System Modification Safe Boundaries</h4>
            <p className="text-xs text-fog-3 mt-1">Disciplined user modifications vs destructive root level changes</p>
          </div>
          
          <div className="w-full max-w-lg aspect-[16/10] relative flex items-center justify-center">
            <svg viewBox="0 0 400 240" className="w-full h-full text-white" fill="none">
              {/* Split screen showing safe vs destructive */}
              <line x1="200" y1="30" x2="200" y2="210" className="stroke-white/10" strokeWidth="1.5" strokeDasharray="4 4" />

              {/* Left Side: Safe / Disciplined Stewardship */}
              <rect x="30" y="50" width="140" height="130" rx="8" className="stroke-emerald-400/40 fill-emerald-400/5" strokeWidth="1.5" />
              <text x="100" y="40" className="fill-emerald-400 font-mono text-[10px] font-bold" textAnchor="middle">STEWARDSHIP (SAFE)</text>
              
              <text x="100" y="80" className="fill-white font-display text-[10px] font-bold" textAnchor="middle">Package Debloat</text>
              <text x="100" y="94" className="fill-fog-3 font-mono text-[8px]" textAnchor="middle">Non-destructive user-0 space</text>
              
              <text x="100" y="125" className="fill-white font-display text-[10px] font-bold" textAnchor="middle">Controlled Services</text>
              <text x="100" y="139" className="fill-fog-3 font-mono text-[8px]" textAnchor="middle">Restricting background wakelocks</text>

              {/* Right Side: Destructive / Unsafe */}
              <rect x="230" y="50" width="140" height="130" rx="8" className="stroke-red-500/20 fill-red-500/2" strokeWidth="1.5" />
              <text x="300" y="40" className="fill-red-400 font-mono text-[10px] font-bold" textAnchor="middle">DESTRUCTIVE (UNSAFE)</text>
              
              <text x="300" y="80" className="fill-white/60 font-display text-[10px] font-bold" textAnchor="middle">Unlocking Bootloader</text>
              <text x="300" y="94" className="fill-fog-3/80 font-mono text-[8px]" textAnchor="middle">Breaches TEE security tokens</text>

              <text x="300" y="125" className="fill-white/60 font-display text-[10px] font-bold" textAnchor="middle">System-Level Root</text>
              <text x="300" y="139" className="fill-fog-3/80 font-mono text-[8px]" textAnchor="middle">Unlocks attack vector interfaces</text>

              <text x="200" y="215" className="fill-fog-3 font-mono text-[9px]" textAnchor="middle">CORE VALUE: User Agency without Security Sacrifice</text>
            </svg>
          </div>
        </div>
      );

    default:
      return null;
  }
}
