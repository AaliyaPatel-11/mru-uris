import FadeInSection from './FadeInSection';
import ResearcherProfileCard from './ResearcherProfileCard';
import {
  researchOverview,
  researchTeamMembers,
  researchThemes,
  ongoingResearch,
} from '../data/researchData';

export default function ResearchSection({ onNavigateToResearch }) {
  return (
    <section id="research" className="relative z-10 py-28 px-6">
      <div className="section-divider mb-28" />
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <FadeInSection>
          <div className="text-center mb-16">
            <p className="eyebrow text-[#2dd4bf] mb-4 tracking-[4px]">
              {researchOverview.eyebrow}
            </p>
            <h2 className="font-extrabold text-[clamp(28px,4vw,48px)] text-metallic leading-tight max-w-3xl mx-auto mb-5">
              Researchers &amp; Research Initiatives
            </h2>
            <p className="text-[#a3a3ab] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-6">
              Investigating the intersection of speech artificial intelligence, multilingual natural language processing, and digital accessibility across diverse educational contexts.
            </p>

            {/* Aggregate Status Indicator */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#2b2b32] bg-[#14141c]/60 text-xs text-[#a3a3ab]">
              <span className="glow-dot" />
              <span>
                <strong className="text-white">Aggregate Activity:</strong> Two papers submitted · One in preparation
              </span>
            </div>
          </div>
        </FadeInSection>

        {/* Research Themes Spotlight */}
        <FadeInSection delay={80}>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 mb-14">
            {researchThemes.map((theme) => (
              <div
                key={theme.id}
                className="card-hover border border-[#2b2b32] rounded-xl p-4 bg-[#14141c]/30 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#2dd4bf] block mb-1">
                    {theme.badge}
                  </span>
                  <h3 className="font-semibold text-white text-xs sm:text-sm line-clamp-2">
                    {theme.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>

        {/* Team Profiles Preview Grid */}
        <FadeInSection delay={120}>
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#2b2b32]">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>Research Team</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#1c1c22] text-[#2dd4bf] font-mono">
                  06 Members
                </span>
              </h3>
              <button
                onClick={onNavigateToResearch}
                className="text-xs text-[#2dd4bf] hover:underline font-semibold flex items-center gap-1"
              >
                View Full Dossier →
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {researchTeamMembers.map((member) => (
                <ResearcherProfileCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* Bottom Call to Action banner */}
        <FadeInSection delay={180}>
          <div className="border border-[#2b2b32] rounded-2xl p-6 sm:p-8 bg-[#14141c]/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h4 className="text-white font-bold text-lg mb-1">
                Explore Full Methodology &amp; Scientific Vision
              </h4>
              <p className="text-[#8a8a92] text-sm">
                Detailed overview of our empirical framework, computational methods, and key contributions.
              </p>
            </div>
            <button
              onClick={onNavigateToResearch}
              className="btn-outline px-6 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap hover:scale-105 transition-all shrink-0"
            >
              Explore Full Research Section →
            </button>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
