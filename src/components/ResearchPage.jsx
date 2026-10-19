import FadeInSection from './FadeInSection';
import ResearcherProfileCard from './ResearcherProfileCard';
import {
  researchOverview,
  researchTeamMembers,
  researchThemes,
  researchMethodology,
  researchContributions,
  ongoingResearch,
  researchVision,
} from '../data/researchData';

export default function ResearchPage({ onNavigateHome, onApply }) {
  return (
    <div className="relative z-10 pt-28 pb-16 px-6 max-w-7xl mx-auto">
      {/* Navigation Breadcrumb / Back button */}
      <FadeInSection>
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#2b2b32]">
          <button
            onClick={onNavigateHome}
            className="group flex items-center gap-2 text-sm text-[#a3a3ab] hover:text-[#2dd4bf] transition-colors duration-200"
          >
            <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
            <span>Back to URIS Portal</span>
          </button>
          <div className="flex items-center gap-2 text-xs text-[#8a8a92]">
            <span>MRU-URIS</span>
            <span>/</span>
            <span className="text-[#2dd4bf] font-medium">Research &amp; Initiatives</span>
          </div>
        </div>
      </FadeInSection>

      {/* ========================================================
          A. Research Overview
          ======================================================== */}
      <section id="overview" className="mb-24">
        <FadeInSection>
          <div className="text-center max-w-4xl mx-auto mb-14">
            <p className="eyebrow text-[#2dd4bf] mb-4 tracking-[4px]">
              {researchOverview.eyebrow}
            </p>
            <h1 className="font-extrabold text-[clamp(32px,5vw,56px)] text-metallic leading-tight mb-6">
              {researchOverview.title}
            </h1>
            <p className="text-[#a3a3ab] text-base sm:text-lg leading-relaxed">
              {researchOverview.summary}
            </p>
          </div>
        </FadeInSection>

        {/* Overview Stats Strip */}
        <FadeInSection delay={80}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px border border-[#2b2b32] rounded-2xl overflow-hidden bg-[#2b2b32] mb-12">
            {researchOverview.stats.map((s, i) => (
              <div key={i} className="bg-[#14141c]/80 px-8 py-8 text-center">
                <div className="font-black text-4xl text-metallic mb-1.5">{s.value}</div>
                <div className="text-[#8a8a92] text-xs uppercase tracking-wider font-semibold">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>
      </section>

      <div className="section-divider mb-24" />

      {/* ========================================================
          B. Research Themes
          ======================================================== */}
      <section id="themes" className="mb-24">
        <FadeInSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="eyebrow text-[#2dd4bf] mb-3 tracking-[3.5px]">Core Disciplines</p>
            <h2 className="font-extrabold text-[clamp(26px,3.8vw,44px)] text-metallic leading-tight mb-4">
              Research Themes &amp; Focus Areas
            </h2>
            <p className="text-[#8a8a92] text-sm sm:text-base">
              Systematic inquiry spanning foundation model benchmarking, multilingual acoustics, spatial reasoning, and equitable interface design.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchThemes.map((theme, idx) => (
            <FadeInSection key={theme.id} delay={idx * 60}>
              <div className="card-hover border border-[#2b2b32] rounded-2xl p-7 bg-[#14141c]/40 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#2dd4bf]/10 text-[#2dd4bf] border border-[#2dd4bf]/20">
                      {theme.badge}
                    </span>
                    <span className="text-[#8a8a92] text-xs font-mono">0{idx + 1}</span>
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl text-white mb-3 teal-underline">
                    {theme.title}
                  </h3>
                  <p className="text-[#a3a3ab] text-sm leading-relaxed mb-5">
                    {theme.description}
                  </p>
                </div>

                <div className="border-t border-[#2b2b32]/60 pt-4 mt-2">
                  <p className="text-[#8a8a92] text-[10px] uppercase font-bold tracking-[1.5px] mb-2.5">
                    Key Investigations
                  </p>
                  <ul className="space-y-2">
                    {theme.keyPoints.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs text-[#a3a3ab]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf] shrink-0 mt-1.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      <div className="section-divider mb-24" />

      {/* ========================================================
          C. Research Methodology
          ======================================================== */}
      <section id="methodology" className="mb-24">
        <FadeInSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="eyebrow text-[#2dd4bf] mb-3 tracking-[3.5px]">Empirical Framework</p>
            <h2 className="font-extrabold text-[clamp(26px,3.8vw,44px)] text-metallic leading-tight mb-4">
              Computational &amp; Experimental Methodology
            </h2>
            <p className="text-[#8a8a92] text-sm sm:text-base">
              Rigorous, reproducible experimental pipelines built on naturalistic speech collection, econometric confound modeling, and targeted adaptation.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {researchMethodology.map((m, idx) => (
            <FadeInSection key={idx} delay={idx * 50}>
              <div className="card-hover border border-[#2b2b32] rounded-2xl p-6 bg-[#14141c]/30 flex items-start gap-4">
                <div className="step-number">{m.step}</div>
                <div>
                  <h3 className="font-bold text-white text-base sm:text-lg mb-1.5">
                    {m.title}
                  </h3>
                  <p className="text-[#a3a3ab] text-sm leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      <div className="section-divider mb-24" />

      {/* ========================================================
          D. Research Contributions
          ======================================================== */}
      <section id="contributions" className="mb-24">
        <FadeInSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="eyebrow text-[#2dd4bf] mb-3 tracking-[3.5px]">Scientific Value</p>
            <h2 className="font-extrabold text-[clamp(26px,3.8vw,44px)] text-metallic leading-tight mb-4">
              High-Level Research Contributions
            </h2>
            <p className="text-[#8a8a92] text-sm sm:text-base">
              Demarcating empirical findings and conceptual advancements that advance linguistic and technological equity.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {researchContributions.map((c, idx) => (
            <FadeInSection key={idx} delay={idx * 70}>
              <div className="border border-[#2b2b32] rounded-2xl p-7 bg-[#14141c]/40 relative overflow-hidden group">
                <div className="w-1.5 h-6 bg-[#2dd4bf] rounded-r-full absolute top-7 left-0" />
                <h3 className="font-bold text-lg text-white mb-3 pl-3">
                  {c.title}
                </h3>
                <p className="text-[#a3a3ab] text-sm leading-relaxed pl-3">
                  {c.desc}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      <div className="section-divider mb-24" />

      {/* ========================================================
          E. Ongoing Research Initiatives (Aggregate Activity)
          ======================================================== */}
      <section id="ongoing" className="mb-24">
        <FadeInSection>
          <div className="border border-[#2b2b32] rounded-3xl p-8 sm:p-12 bg-[#14141c]/50 relative overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse 70% 60% at 50% 100%, rgba(45,212,191,0.05) 0%, transparent 70%)',
              }}
            />

            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                  <p className="eyebrow text-[#2dd4bf] mb-2 tracking-[3px]">
                    {ongoingResearch.statusNotice}
                  </p>
                  <h2 className="font-extrabold text-2xl sm:text-3xl text-metallic">
                    Current Research Status &amp; Initiatives
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <span className="glow-dot" />
                  <span className="text-xs text-[#a3a3ab] font-medium tracking-wide">
                    Active Scholarly Inquiry
                  </span>
                </div>
              </div>

              {/* Status metric badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {ongoingResearch.metrics.map((m, i) => (
                  <div
                    key={i}
                    className="border border-[#2b2b32] rounded-xl p-5 bg-[#0a0a0d]/60 flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#2dd4bf]/10 border border-[#2dd4bf]/20 flex items-center justify-center font-black text-2xl text-[#2dd4bf] shrink-0">
                      {m.count}
                    </div>
                    <div className="text-sm font-semibold text-white leading-snug">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[#a3a3ab] text-sm sm:text-base leading-relaxed mb-6">
                {ongoingResearch.description}
              </p>

              <div className="border-t border-[#2b2b32] pt-4 text-xs text-[#8a8a92] leading-relaxed italic">
                {ongoingResearch.disclaimer}
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      <div className="section-divider mb-24" />

      {/* ========================================================
          F. Research Team (Six Profiles)
          ======================================================== */}
      <section id="team" className="mb-24">
        <FadeInSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="eyebrow text-[#2dd4bf] mb-3 tracking-[3.5px]">MRU URIS Research Initiative</p>
            <h2 className="font-extrabold text-[clamp(28px,4vw,46px)] text-metallic leading-tight mb-4">
              Research Team
            </h2>
            <p className="text-[#8a8a92] text-sm sm:text-base max-w-2xl mx-auto">
              Meet the six researchers collaborating on speech artificial intelligence, multilingual natural language processing, and accessibility research within the MRU URIS research initiative.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchTeamMembers.map((member) => (
            <FadeInSection key={member.name} delay={60}>
              <ResearcherProfileCard member={member} />
            </FadeInSection>
          ))}
        </div>
      </section>

      <div className="section-divider mb-24" />

      {/* ========================================================
          G. Research Vision
          ======================================================== */}
      <section id="vision" className="mb-16">
        <FadeInSection>
          <div className="border border-[#2b2b32] rounded-3xl p-8 sm:p-14 bg-[#14141c]/40 text-center relative overflow-hidden">
            <p className="eyebrow text-[#2dd4bf] mb-4 tracking-[3px]">Looking Forward</p>
            <h2 className="font-extrabold text-[clamp(26px,3.8vw,44px)] text-metallic leading-tight mb-6 max-w-2xl mx-auto">
              Our Research Vision
            </h2>
            <p className="text-[#a3a3ab] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-12">
              "{researchVision.statement}"
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {researchVision.pillars.map((pillar, i) => (
                <div
                  key={i}
                  className="border border-[#2b2b32]/80 rounded-xl p-6 bg-[#0a0a0d]/50"
                >
                  <h3 className="font-bold text-white text-base mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#2dd4bf]" />
                    {pillar.title}
                  </h3>
                  <p className="text-[#a3a3ab] text-xs leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <button
                onClick={onApply}
                className="btn-gradient px-8 py-3 rounded-full text-sm font-bold transition-all duration-200 hover:scale-105 hover:shadow-[0_0_25px_rgba(45,212,191,0.3)]"
              >
                Join URIS Initiatives →
              </button>
            </div>
          </div>
        </FadeInSection>
      </section>
    </div>
  );
}
