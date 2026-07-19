import { GraduationCap, Award, Crown, Compass, Users, CheckSquare } from 'lucide-react';

export default function ExperienceView() {
  const timelineEntries = [
    {
      period: '2022 — 2026',
      role: 'Vice President (formerly Treasurer)',
      company: 'Daffodil International Band Society',
      body: 'Helped lead one of the university’s largest student societies with 200+ active student members. Coordinated university-wide events including Rock Fest 2023, overseeing logistics, administrative approvals, volunteer teams, and student rosters.',
      icon: <Users className="w-4 h-4 text-violet" />
    },
    {
      period: '2025 (4 Months)',
      role: 'Intern Teacher',
      company: 'Bhotobhari Government Primary School',
      body: 'Delivered foundational language lessons to primary school classrooms in a rural district of Bangladesh. Developed skills in explaining abstract concepts simply, maintaining engagement, and organizing structured curriculum.',
      icon: <Compass className="w-4 h-4 text-violet" />
    }
  ];

  const academics = [
    {
      period: '2022 — 2026',
      role: 'BA (Honours) in English',
      company: 'Daffodil International University',
      body: 'Focused on structural linguistics, classic literature analysis, and discourse theories. Combined literary studies with independent studies in web layout rendering engines and digital user-interface design.',
      icon: <GraduationCap className="w-4 h-4 text-violet" />
    }
  ];

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
      {/* Page Header */}
      <section className="py-12 md:py-16">
        <div className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-widest uppercase text-violet mb-4">
          <span className="w-7 h-[1px] bg-violet" />
          Background
        </div>
        <h1 className="font-display text-[clamp(34px,8.5vw,72px)] font-bold text-white leading-[1.05] tracking-tight mb-6">
          Experience
        </h1>
        <p className="max-w-xl text-base text-fog-3 font-light leading-relaxed">
          A summary of my leadership, educational internships, academic milestones, and competitive accomplishments.
        </p>
      </section>

      {/* Main Experience Grid */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mt-10">
        
        {/* Left Col: Leadership & Work */}
        <div>
          <h2 className="font-display text-2xl font-bold text-white mb-10 flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 bg-violet rounded-full" />
            Leadership &amp; Internships
          </h2>
          
          <div className="relative pl-6 border-l border-white/5 flex flex-col gap-10">
            {timelineEntries.map((entry, idx) => (
              <div key={idx} className="relative group">
                {/* Node dot */}
                <div className="absolute -left-[30px] top-1.5 w-3 h-3 bg-violet rounded-full flex items-center justify-center border-4 border-ink group-hover:scale-125 transition-transform" />
                
                <div className="font-mono text-[11px] text-violet tracking-widest uppercase mb-2">
                  {entry.period}
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-1">
                  {entry.role}
                </h3>
                <div className="text-[13px] text-fog-3 font-medium mb-3">
                  {entry.company}
                </div>
                <p className="text-sm text-fog-3 leading-relaxed font-light">
                  {entry.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Col: Academics & Chess Championships */}
        <div className="flex flex-col gap-12">
          
          {/* Section 1: Academics */}
          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-10 flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 bg-violet rounded-full" />
              Education
            </h2>
            <div className="relative pl-6 border-l border-white/5 flex flex-col gap-10">
              {academics.map((entry, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[30px] top-1.5 w-3 h-3 bg-violet rounded-full flex items-center justify-center border-4 border-ink group-hover:scale-125 transition-transform" />
                  
                  <div className="font-mono text-[11px] text-violet tracking-widest uppercase mb-2">
                    {entry.period}
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-1">
                    {entry.role}
                  </h3>
                  <div className="text-[13px] text-fog-3 font-medium mb-3">
                    {entry.company}
                  </div>
                  <p className="text-sm text-fog-3 leading-relaxed font-light">
                    {entry.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Chess championships */}
          <div className="p-6 border border-white/5 rounded-2xl bg-ink-2">
            <h3 className="font-display text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Crown className="w-5 h-5 text-violet" />
              Strategic Accomplishments
            </h3>
            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <Crown className="w-5 h-5 text-violet flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-[14px] font-bold text-white leading-tight">Inter-Department Chess Champion</h4>
                  <div className="text-[12px] text-fog-3 mt-1 font-mono uppercase tracking-widest">Daffodil International University</div>
                  <p className="text-[12px] text-fog-3 font-light mt-1.5 leading-normal">
                    Won gold in competitive tournaments, analyzing tactical structures and executing calculations under timed stress conditions.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 border-t border-white/5 pt-4">
                <Award className="w-5 h-5 text-violet flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-[14px] font-bold text-white leading-tight">Inter-University Competitions</h4>
                  <div className="text-[12px] text-fog-3 mt-1 font-mono uppercase tracking-widest">Dhaka District Collegiate Chess</div>
                  <p className="text-[12px] text-fog-3 font-light mt-1.5 leading-normal">
                    Represented DIU across higher-level regional collegiate chess boards, demonstrating strong critical thinking and pattern matching skills.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
