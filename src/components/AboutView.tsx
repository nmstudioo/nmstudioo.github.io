import { GraduationCap, Award, Crown, CheckCircle2 } from 'lucide-react';

export default function AboutView() {
  const tools = [
    { cat: 'Design & Prototyping', items: ['Figma', 'Canva', 'Penpot', 'Adobe XD'] },
    { cat: 'Development & Editors', items: ['HTML / CSS', 'JavaScript', 'TypeScript', 'React', 'Vite', 'VS Code', 'GitHub'] },
    { cat: 'AI Engines & Prompting', items: ['Claude 3.5 Sonnet', 'GPT-4o', 'Gemini Pro', 'Grok', 'Stable Diffusion', 'Midjourney'] },
    { cat: 'Frameworks & Systems', items: ['Blogger Theme Dev', 'Tailwind CSS v4', 'Android Debug Bridge (ADB)', 'Command Line (Bash)'] },
  ];

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
      {/* Page Header */}
      <section className="py-12 md:py-16">
        <div className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-widest uppercase text-violet mb-4">
          <span className="w-7 h-[1px] bg-violet" />
          Biography
        </div>
        <h1 className="font-display text-[clamp(34px,8.5vw,72px)] font-bold text-white leading-[1.05] tracking-tight mb-6">
          About Me
        </h1>
        <p className="max-w-xl text-base text-fog-3 font-light leading-relaxed">
          The backstory, academic coordinates, and creative driving forces behind my development and design practice.
        </p>
      </section>

      {/* Grid Layout */}
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column (Main Story) */}
        <div className="lg:col-span-7 flex flex-col gap-8 text-[14px] md:text-[15px] text-fog-3 font-light leading-relaxed">
          <h2 className="font-display text-xl font-bold text-white mb-2 tracking-tight">My Journey</h2>
          <p className="text-white/95 font-normal leading-relaxed text-[15px] md:text-[16px] border-l border-violet/30 pl-4 py-1 bg-violet/[0.01]">
            I am a self-directed developer and interface designer based in Dhaka, Bangladesh. I graduated with a BA (Honours) in English from <strong className="text-white font-semibold">Daffodil International University</strong>. While my academic formal training focused on the analysis of complex narratives, linguistics, and literature, my passion for computing drove me to dedicate countless nights to studying UI engineering, web standards, and software mechanics.
          </p>
          <p>
            This dual background has given me a unique perspective on technical work. Writing clean code and constructing high-accuracy prompt structures require the same syntactic precision, semantic clarity, and analytical discipline used in evaluating complex literature.
          </p>
          <p>
            I rarely accept default configurations or cookie-cutter solutions. Whether I am fine-tuning the animation values on a navigation card, overhauling a Blogger template to perform at 100% Google PageSpeed score, or crafting a deterministic prompt chain, I iterate on details until the resulting output aligns precisely with visual balance and optimal performance.
          </p>

          <div className="mt-6">
            <h2 className="font-display text-xl font-bold text-white mb-6 tracking-tight">Core Values</h2>
            <div className="flex flex-col gap-4">
              {[
                { title: 'Extreme Polish', desc: 'No pixel or border value should be an accident. Every visual variable must align to a cohesive proportional mathematical system.' },
                { title: 'Semantic Clarity', desc: 'Interfaces and code are meant to be read by humans. Strive for humble, literal naming, thorough comments, and clean layouts.' },
                { title: 'Analytical Curiosity', desc: 'Read the source code, inspect the underlying rendering pipelines, and understand the core mechanics instead of relying on tutorials.' }
              ].map((value, idx) => (
                <div key={idx} className="p-6 border border-white/[0.06] rounded-xl bg-gradient-to-b from-white/[0.01] to-transparent flex gap-4 hover:border-white/10 transition-colors duration-300">
                  <CheckCircle2 className="w-4 h-4 text-violet flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display text-sm font-bold text-white mb-1 tracking-tight">{value.title}</h4>
                    <p className="text-[12px] text-fog-3 font-light leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (Credentials / Education / Toolbox) */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          {/* Education Card */}
          <div className="p-7 border border-white/[0.06] rounded-xl bg-gradient-to-b from-white/[0.01] to-transparent hover:border-white/10 transition-colors duration-300">
            <h3 className="font-display text-[15px] font-bold text-white mb-5 flex items-center gap-2.5 tracking-tight">
              <GraduationCap className="w-4 h-4 text-violet" />
              Academic Coordinates
            </h3>
            <div className="flex flex-col gap-6">
              <div>
                <div className="font-mono text-[9px] tracking-wider text-violet uppercase mb-1.5 font-semibold">2022 — 2026</div>
                <h4 className="text-[14px] font-bold text-white leading-snug tracking-tight">BA (Honours) in English</h4>
                <div className="text-[12px] text-fog-3 mt-1">Daffodil International University</div>
                <p className="text-[12px] text-fog-3 font-light mt-2 leading-relaxed">
                  Specialized in literary analysis and linguistics, holding an active 45% Merit Scholarship throughout all semesters due to sustained academic performance.
                </p>
              </div>
            </div>
          </div>

          {/* Awards & Recognition */}
          <div className="p-7 border border-white/[0.06] rounded-xl bg-gradient-to-b from-white/[0.01] to-transparent hover:border-white/10 transition-colors duration-300">
            <h3 className="font-display text-[15px] font-bold text-white mb-5 flex items-center gap-2.5 tracking-tight">
              <Award className="w-4 h-4 text-violet" />
              Championships &amp; Merits
            </h3>
            <div className="flex flex-col gap-5">
              <div className="flex gap-3.5">
                <Crown className="w-4 h-4 text-violet flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[13px] font-bold text-white leading-tight tracking-tight">Two-Time Chess Champion</h4>
                  <div className="text-[11px] text-fog-3 mt-0.5">DIU Tournaments</div>
                  <p className="text-[12px] text-fog-3 font-light mt-1.5 leading-relaxed">
                    Won gold across inter-departmental and university chess championships — highlighting strategic anticipation and precise planning.
                  </p>
                </div>
              </div>
              <div className="flex gap-3.5 border-t border-white/[0.05] pt-5">
                <Award className="w-4 h-4 text-violet flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[13px] font-bold text-white leading-tight tracking-tight">45% Academic Merit Scholarship</h4>
                  <div className="text-[11px] text-fog-3 mt-0.5">Daffodil International University</div>
                  <p className="text-[12px] text-fog-3 font-light mt-1.5 leading-relaxed">
                    Maintained consistent academic honors and language proficiency recognitions across 4 years of university.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Toolbox categories */}
          <div className="p-7 border border-white/[0.06] rounded-xl bg-gradient-to-b from-white/[0.01] to-transparent hover:border-white/10 transition-colors duration-300">
            <h3 className="font-display text-[15px] font-bold text-white mb-5 tracking-tight">Technical Toolbox</h3>
            <div className="flex flex-col gap-5">
              {tools.map((group, gIdx) => (
                <div key={gIdx} className="flex flex-col gap-2">
                  <span className="font-mono text-[9px] tracking-wider text-violet uppercase font-semibold">{group.cat}</span>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item, iIdx) => (
                      <span 
                        key={iIdx} 
                        className="text-[10px] font-mono text-fog-3 bg-white/[0.02] border border-white/[0.06] px-2.5 py-1 rounded-full hover:border-white/15 hover:text-white transition-all duration-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
