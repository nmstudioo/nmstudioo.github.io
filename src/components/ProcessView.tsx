import { Search, Compass, Edit3, CheckSquare, RefreshCw, HelpCircle } from 'lucide-react';

export default function ProcessView() {
  const processes = [
    {
      num: '01',
      title: 'DISCOVER & AUDIT',
      label: 'Deep Research & Alignment',
      desc: 'Before writing code, I analyze existing solutions, study platform documentation, and research visual constraints. I examine how experienced engineers have approached similar architectures, establishing clear technical coordinates.',
      milestones: [
        'Examine technical documentation and requirements',
        'Compare framework and rendering architectures',
        'Analyze layout guidelines, design tokens, and spacing'
      ],
      icon: <Search className="w-6 h-6 text-violet" />
    },
    {
      num: '02',
      title: 'DEFINE & OUTLINE',
      label: 'Problem Framing & Schema Design',
      desc: 'I map out the user journeys and data schemas. Defining types early and isolating state models ensure the application is structured logically from the start—reducing downstream refactoring.',
      milestones: [
        'Establish TypeScript contracts and schema types',
        'Structure state flows and data management trees',
        'Map out core interactive breakpoints and layouts'
      ],
      icon: <Compass className="w-6 h-6 text-violet" />
    },
    {
      num: '03',
      title: 'DESIGN & PROTOTYPE',
      label: 'Crafting, Coding & Refining',
      desc: 'This is where design tokens turn into responsive code. I construct modular, readable components styled with Tailwind, and inject subtle micro-interactions to guide the users attention organically.',
      milestones: [
        'Build responsive, component-based frontend layers',
        'Implement visual spacing grids based on math constants',
        'Refine layout transitions and micro-animations'
      ],
      icon: <Edit3 className="w-6 h-6 text-violet" />
    },
    {
      num: '04',
      title: 'DELIVER & OPTIMIZE',
      label: 'Audit, Lint, and Performance Tune',
      desc: 'I verify my solutions using rigorous linting, type validation, and performance tests. By eliminating repaints, trimming unnecessary nodes, and keeping code modular, I ensure fast loading speeds on any mobile engine.',
      milestones: [
        'Run strict TypeScript checks and code lint audits',
        'Optimize rendering pathways, repaints and asset loading',
        'Generate thorough, accessible markdown documentation'
      ],
      icon: <CheckSquare className="w-6 h-6 text-violet" />
    }
  ];

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
      {/* Page Header */}
      <section className="py-12 md:py-16">
        <div className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-widest uppercase text-violet mb-4">
          <span className="w-7 h-[1px] bg-violet" />
          Workflow
        </div>
        <h1 className="font-display text-[clamp(34px,8.5vw,72px)] font-bold text-white leading-[1.05] tracking-tight mb-6">
          My Process
        </h1>
        <p className="max-w-xl text-base text-fog-3 font-light leading-relaxed">
          How I turn questions and technical constraints into polished, high-performance web products through structured iteration.
        </p>
      </section>

      {/* Dynamic Process Steps */}
      <section className="flex flex-col gap-12 mt-10">
        {processes.map((proc, index) => (
          <div 
            key={proc.num}
            className="p-8 md:p-12 border border-white/5 rounded-3xl bg-ink-2 hover:border-violet/20 hover:bg-ink-3 transition-colors duration-300 relative overflow-hidden group"
          >
            {/* Top row */}
            <div className="flex flex-col md:flex-row items-start justify-between gap-6">
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-violet tracking-widest uppercase">
                  STEP — {proc.num}
                </span>
                <span className="w-5 h-[1px] bg-white/10" />
                <span className="text-[11px] font-mono tracking-widest text-fog-3 uppercase">
                  {proc.label}
                </span>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-violet-lo border border-violet-md flex items-center justify-center">
                {proc.icon}
              </div>
            </div>

            {/* Content row */}
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mt-8 items-start">
              <div className="lg:col-span-7">
                <h3 className="font-display text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight">
                  {proc.title}
                </h3>
                <p className="text-base text-fog-2 font-light leading-relaxed">
                  {proc.desc}
                </p>
              </div>

              {/* Milestones / Checklists */}
              <div className="lg:col-span-5 p-6 border border-white/5 rounded-2xl bg-white/3">
                <h4 className="text-[11px] font-mono tracking-widest uppercase text-white mb-4 flex items-center gap-2">
                  <RefreshCw className="w-3.5 h-3.5 text-violet animate-spin-slow" />
                  Execution Milestones
                </h4>
                <ul className="flex flex-col gap-3 list-none">
                  {proc.milestones.map((ms, msIdx) => (
                    <li key={msIdx} className="text-[13px] text-fog-3 leading-relaxed flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet mt-1.5 flex-shrink-0" />
                      {ms}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
