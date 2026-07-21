import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Palette, Type, Grid, Sliders, Play, Copy, Check, Layout, 
  Sparkles, Layers, Award, Info, AlertCircle
} from 'lucide-react';

export default function DesignSystemView() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'colors' | 'typography' | 'spacing' | 'motion' | 'components'>('colors');
  const [motionTrigger, setMotionTrigger] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const colors = [
    { name: 'Ink (Primary Dark)', hex: '#020010', desc: 'The rich deep canvas ink backing.' },
    { name: 'Ink 2 (Midtone Dark)', hex: '#08061a', desc: 'Used for panels, secondary cards, and headers.' },
    { name: 'Ink 3 (Light Panels)', hex: '#121028', desc: 'Used for borders, input fields, and hover states.' },
    { name: 'Violet Accent', hex: '#7b61ff', desc: 'Core glowing branding accent representing creative agency.' },
    { name: 'Fog Text (Primary Light)', hex: '#f4f4f7', desc: 'Ultra-safe high-contrast text color for active reading.' },
    { name: 'Fog 2 (Medium)', hex: '#b4b4bf', desc: 'Subtitles, body descriptions, and auxiliary text.' },
    { name: 'Fog 3 (Muted)', hex: '#7a7a85', desc: 'Muted details, system timestamps, and border lines.' },
    { name: 'Emerald (Status)', hex: '#34d399', desc: 'Semantic green for success status and stable releases.' }
  ];

  const handleCopyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const fonts = [
    { name: 'Inter (Sans)', family: 'font-sans', role: 'General reading body, structured paragraphs, interface widgets.' },
    { name: 'Space Grotesk (Display)', family: 'font-display', role: 'Editorial headlines, large numeric metrics, and hero statements.' },
    { name: 'JetBrains Mono (Technical)', family: 'font-mono', role: 'Code blocks, system metrics, dates, and micro-labels.' }
  ];

  return (
    <div className="pt-24 pb-20 relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
      
      {/* Editorial Header */}
      <div className="mb-16 border-b border-white/5 pb-10">
        <span className="font-mono text-[10px] text-violet uppercase tracking-widest font-bold bg-violet/10 px-3 py-1 rounded-full">
          Identity Spec
        </span>
        <h1 className="font-display text-4xl md:text-6xl font-extrabold text-white mt-4 tracking-tighter">
          The NM <em className="not-italic text-violet">Design System</em>
        </h1>
        <p className="text-base text-fog-2 mt-4 max-w-xl font-light leading-relaxed">
          The formal typographic, mathematical, and interaction tokens governing this entire portfolio. 
          Built to secure responsive symmetry and zero design degradation across nodes.
        </p>
      </div>

      {/* Navigation tabs */}
      <div className="flex gap-2.5 mb-12 border-b border-white/5 pb-6 overflow-x-auto scrollbar-none md:flex-wrap md:overflow-visible -mx-6 px-6 md:mx-0 md:px-0">
        {[
          { id: 'colors', label: 'Color Space', icon: <Palette className="w-3.5 h-3.5" /> },
          { id: 'typography', label: 'Typography Scale', icon: <Type className="w-3.5 h-3.5" /> },
          { id: 'spacing', label: 'Spatial Rulers', icon: <Grid className="w-3.5 h-3.5" /> },
          { id: 'motion', label: 'Motion Physics', icon: <Sliders className="w-3.5 h-3.5" /> },
          { id: 'components', label: 'Component Gallery', icon: <Layout className="w-3.5 h-3.5" /> }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer shrink-0 md:shrink-1 ${
              activeTab === tab.id
                ? 'bg-violet text-white font-medium border border-violet shadow-[0_8px_24px_rgba(123,97,255,0.2)]'
                : 'bg-white/3 border border-white/5 text-fog-2 hover:text-white hover:bg-white/6'
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Dynamic Tab Body */}
      <div className="bg-ink-2/30 border border-white/5 rounded-2xl p-6 md:p-10 min-h-[400px]">
        
        {/* TAB 1: COLORS */}
        {activeTab === 'colors' && (
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-full bg-violet/10 flex items-center justify-center text-violet">
                <Palette className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white">Color Palette swatches</h3>
                <p className="text-xs text-fog-3">Design-engineered values. Click any panel to copy the HEX token instantly.</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {colors.map((color) => (
                <div 
                  key={color.hex}
                  onClick={() => handleCopyColor(color.hex)}
                  className="group relative p-4 border border-white/5 rounded-xl bg-ink-2/60 hover:border-violet/30 cursor-pointer transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="w-full aspect-video rounded-lg relative overflow-hidden mb-4" style={{ backgroundColor: color.hex }}>
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-mono text-[11px] font-medium uppercase tracking-widest bg-black/20 backdrop-blur-[1px]">
                      Copy HEX
                    </div>
                  </div>
                  <div>
                    <h4 className="font-display text-[14px] font-bold text-white group-hover:text-violet transition-colors">{color.name}</h4>
                    <span className="font-mono text-[11px] text-fog-3 mt-1 block uppercase">{color.hex}</span>
                    <p className="text-[11px] text-fog-3 mt-2 leading-relaxed font-light">{color.desc}</p>
                  </div>

                  {/* Clipboard alert overlay */}
                  <AnimatePresence>
                    {copiedColor === color.hex && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute inset-0 rounded-xl bg-violet/95 flex flex-col items-center justify-center text-white text-center p-3 z-10"
                      >
                        <Check className="w-6 h-6 mb-1 text-white" />
                        <span className="font-mono text-xs uppercase tracking-widest font-semibold">HEX Copied!</span>
                        <span className="font-mono text-[9px] mt-0.5">{color.hex}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: TYPOGRAPHY */}
        {activeTab === 'typography' && (
          <div className="space-y-12">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-violet/10 flex items-center justify-center text-violet">
                <Type className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white">Font pairing system</h3>
                <p className="text-xs text-fog-3">Three font families that coordinate interface interactions, headers, and code.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 border-b border-white/5 pb-10">
              {fonts.map((f, idx) => (
                <div key={idx} className="p-5 border border-white/5 bg-white/2 rounded-xl">
                  <h4 className="font-display text-[15px] font-bold text-white mb-2">{f.name}</h4>
                  <p className="text-xs text-fog-3 leading-relaxed font-light mb-4">{f.role}</p>
                  <div className={`p-4 rounded bg-ink border border-white/[0.03] ${f.family} text-xs text-fog-2`}>
                    Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz 1234567890
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-violet font-semibold">Hierarchy Specimen Preview</h4>
              <div className="space-y-8">
                <div>
                  <span className="font-mono text-[9px] text-fog-3 block mb-1">Display Large (Hero Title) — Space Grotesk Bold</span>
                  <div className="font-display text-4xl md:text-6xl font-extrabold text-white tracking-tighter leading-none">
                    Connecting design &amp; code.
                  </div>
                </div>

                <div>
                  <span className="font-mono text-[9px] text-fog-3 block mb-1">Heading 1 — Space Grotesk Semi-Bold</span>
                  <div className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight">
                    The Synthesis Manifesto
                  </div>
                </div>

                <div>
                  <span className="font-mono text-[9px] text-fog-3 block mb-1">Body Reading — Inter Light</span>
                  <p className="font-sans text-sm md:text-base text-fog-2 leading-relaxed font-light max-w-xl">
                    Technology should remove complexity — not create it. We build systems using fluid responsive boundaries, clear spacing rhythms, and high typographic contrast.
                  </p>
                </div>

                <div>
                  <span className="font-mono text-[9px] text-fog-3 block mb-1">Metadata Monospace — JetBrains Mono Regular</span>
                  <div className="font-mono text-xs text-violet tracking-widest uppercase">
                    CC BY-NC 4.0 // VERSION-1.5 // Word Count: 890
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: SPACING */}
        {activeTab === 'spacing' && (
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-full bg-violet/10 flex items-center justify-center text-violet">
                <Grid className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white">Spatial Spacing Rulers</h3>
                <p className="text-xs text-fog-3">Calculated dimensions based on the 8px mathematical baseline grid.</p>
              </div>
            </div>

            <div className="space-y-6">
              {[
                { name: 'Micro Spacing (4px)', size: 'h-1', value: '4px / tailwind: 1', desc: 'Tight margins for tags, icons, and inline bullet spacing.' },
                { name: 'Core Spacing (8px)', size: 'h-2', value: '8px / tailwind: 2', desc: 'The fundamental grid unit. Element padding and tight row spacing.' },
                { name: 'Content Gap (16px)', size: 'h-4', value: '16px / tailwind: 4', desc: 'Spacing between headings and body text, button components.' },
                { name: 'Card Padding (24px)', size: 'h-6', value: '24px / tailwind: 6', desc: 'Standard padding block for layouts, blocks, and card elements.' },
                { name: 'Component Gap (32px)', size: 'h-8', value: '32px / tailwind: 8', desc: 'Spacing between stacked blocks, forms, and grid items.' },
                { name: 'Container Offset (48px)', size: 'h-12', value: '48px / tailwind: 12', desc: 'Spacious margin dividing major article blocks and page headers.' }
              ].map((space, idx) => (
                <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 border border-white/[0.03] bg-white/1 rounded-xl">
                  <div className="md:w-1/3">
                    <h4 className="font-display text-[13px] font-bold text-white">{space.name}</h4>
                    <span className="font-mono text-[10px] text-violet block mt-0.5">{space.value}</span>
                    <p className="text-[11px] text-fog-3 leading-relaxed mt-1 font-light">{space.desc}</p>
                  </div>
                  <div className="flex-1 flex items-center gap-4">
                    <div className="flex-1 bg-white/5 rounded overflow-hidden">
                      <div className={`bg-violet rounded-r ${space.size} w-full`} style={{ width: `${(idx + 1) * 16.6}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: MOTION PHYSICS */}
        {activeTab === 'motion' && (
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-full bg-violet/10 flex items-center justify-center text-violet">
                <Sliders className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white">Motion Physics Playground</h3>
                <p className="text-xs text-fog-3">Interactive spring and timing transitions engineered for cognitive flow.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Animation 1: Smooth Spring */}
              <div className="p-5 border border-white/5 rounded-xl bg-ink-2/60 flex flex-col justify-between h-56">
                <div>
                  <h4 className="font-display text-[14px] font-bold text-white">Spring Fluid (0.5s)</h4>
                  <p className="text-[11px] text-fog-3 leading-normal mt-1 font-light">
                    Spring-driven layout physics. Solves route loading snapping issues with natural weight deceleration.
                  </p>
                </div>
                <div className="relative h-16 bg-ink rounded border border-white/5 flex items-center px-4 overflow-hidden">
                  <motion.div 
                    key={`spring-${motionTrigger}`}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 140, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 90, damping: 15 }}
                    className="w-8 h-8 rounded bg-violet flex items-center justify-center text-white"
                  >
                    <Sparkles className="w-4 h-4" />
                  </motion.div>
                </div>
              </div>

              {/* Animation 2: Stagger Fade */}
              <div className="p-5 border border-white/5 rounded-xl bg-ink-2/60 flex flex-col justify-between h-56">
                <div>
                  <h4 className="font-display text-[14px] font-bold text-white">Stagger Block Entrance</h4>
                  <p className="text-[11px] text-fog-3 leading-normal mt-1 font-light">
                    Staggered vertical offset. Sequences user gaze down content-dense list paths systematically.
                  </p>
                </div>
                <div className="flex flex-col gap-2 bg-ink p-3 rounded border border-white/5">
                  {[0, 1, 2].map((num) => (
                    <motion.div 
                      key={`stagger-${num}-${motionTrigger}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: num * 0.12 }}
                      className="h-3 bg-white/5 rounded-full w-full"
                    />
                  ))}
                </div>
              </div>

              {/* Animation 3: Micro pulse */}
              <div className="p-5 border border-white/5 rounded-xl bg-ink-2/60 flex flex-col justify-between h-56">
                <div>
                  <h4 className="font-display text-[14px] font-bold text-white">Hover Decay Scale</h4>
                  <p className="text-[11px] text-fog-3 leading-normal mt-1 font-light">
                    Bespoke micro-scaling loop. Confirms click capabilities without adding gratuitous layout shifting.
                  </p>
                </div>
                <div className="flex items-center justify-center bg-ink rounded h-16 border border-white/5">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-violet/20 border border-violet/30 rounded text-[10px] font-mono uppercase tracking-widest text-white cursor-pointer"
                  >
                    Hover Me
                  </motion.button>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => setMotionTrigger((prev) => prev + 1)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-violet hover:bg-[#6b4ff0] text-white rounded-full font-mono text-[11px] tracking-widest uppercase transition-all shadow-lg hover:shadow-violet/20 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5" />
                Re-trigger Animations
              </button>
            </div>
          </div>
        )}

        {/* TAB 5: COMPONENT SHOWROOM */}
        {activeTab === 'components' && (
          <div className="space-y-12">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-violet/10 flex items-center justify-center text-violet">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white">Component Showroom</h3>
                <p className="text-xs text-fog-3">Modular interfaces with correct typography, spacing, and hover feedback.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {/* Buttons Section */}
              <div className="space-y-6">
                <h4 className="font-mono text-[10px] uppercase tracking-widest text-violet font-semibold">1. Button Configurations</h4>
                <div className="flex flex-col gap-3.5 max-w-sm">
                  <button className="px-6 py-4 bg-violet text-white text-[13px] font-medium tracking-widest uppercase rounded-full hover:bg-[#6b4ff0] transition-colors cursor-pointer text-center">
                    Primary Interactive Action
                  </button>
                  <button className="px-6 py-3 border border-white/13 hover:border-fog-2 text-fog-2 hover:text-white text-[12px] font-medium tracking-widest uppercase rounded-full transition-all cursor-pointer text-center">
                    Secondary Outlined Button
                  </button>
                  <button className="px-4 py-2 bg-white/4 border border-white/5 hover:border-violet/20 text-fog-2 hover:text-white text-[11px] font-mono uppercase tracking-widest rounded-lg transition-all cursor-pointer flex items-center justify-center gap-2">
                    <Info className="w-3.5 h-3.5 text-violet" />
                    Inline Context Tool
                  </button>
                </div>
              </div>

              {/* Form Input Section */}
              <div className="space-y-6">
                <h4 className="font-mono text-[10px] uppercase tracking-widest text-violet font-semibold">2. Form Fields &amp; State</h4>
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!inputValue) return;
                    setIsSubmitting(true);
                    setTimeout(() => {
                      setIsSubmitting(false);
                      setInputValue('');
                    }, 2000);
                  }}
                  className="space-y-4 max-w-md"
                >
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-fog-3 mb-2">Input Field Label</label>
                    <input 
                      type="text" 
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Enter semantic variable..."
                      className="w-full px-4.5 py-3.5 rounded-xl border border-white/10 bg-white/3 focus:border-violet focus:outline-none font-mono text-[12px] text-white placeholder-fog-3 transition-colors"
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="px-5 py-3 rounded-xl bg-violet hover:bg-[#6b4ff0] text-white font-mono text-[11px] tracking-widest uppercase transition-all w-full flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="w-3.5 h-3.5 rounded-full border-2 border-white/20 border-t-white animate-spin" />
                    ) : (
                      'Simulate Action Submission'
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Notification / Context Cards */}
            <div className="space-y-6 pt-6 border-t border-white/5">
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-violet font-semibold">3. Information Callouts</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-violet/5 border-l-4 border-violet flex gap-4">
                  <Info className="w-5 h-5 text-violet shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-display text-[13px] font-bold text-white mb-1">Stewardship Core Directive</h5>
                    <p className="text-[11px] text-fog-2 leading-relaxed font-light">
                      Omit features that do not serve visual hierarchy or functional intent. Avoid unrequested modular noise to sustain architectural dignity.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-amber-500/5 border-l-4 border-amber-500 flex gap-4">
                  <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-display text-[13px] font-bold text-white mb-1">Calibration Latency Warning</h5>
                    <p className="text-[11px] text-fog-2 leading-relaxed font-light">
                      Adding unoptimized external scripts degrades First Contentful Paint. Always pre-render routes and encapsulate custom layouts statically.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>

    </div>
  );
}
