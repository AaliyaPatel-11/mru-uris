export default function ResearcherProfileCard({ member }) {
  return (
    <div className="card-hover border border-[#2b2b32] rounded-2xl p-6 sm:p-8 bg-[#14141c]/40 flex flex-col justify-between h-full relative group">
      {/* Top accent subtle glow */}
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#2dd4bf]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        {/* Header: Avatar + Identity */}
        <div className="flex items-center gap-4 mb-4">
          <div
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-[#2dd4bf]/30 flex items-center justify-center text-lg sm:text-xl font-black text-metallic bg-[#0a0a0d] shrink-0"
            style={{ boxShadow: '0 0 20px rgba(45,212,191,0.08)' }}
            aria-label={`${member.name} Avatar`}
          >
            {member.initials}
          </div>
          <div className="min-w-0">
            <h3 className="text-white font-bold text-lg sm:text-xl leading-snug group-hover:text-[#2dd4bf] transition-colors duration-200 truncate sm:whitespace-normal">
              {member.name}
            </h3>
            <p className="text-[#8a8a92] text-[11px] sm:text-xs font-semibold uppercase tracking-[1.5px] mt-0.5">
              {member.role}
            </p>
          </div>
        </div>

        {/* ORCID iD Link */}
        {member.orcidId && (
          <div className="mb-4">
            <a
              href={member.orcidUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0a0a0d] border border-[#2b2b32] hover:border-[#2dd4bf] text-xs text-[#a3a3ab] hover:text-white transition-all duration-200 group/orcid"
              aria-label={`ORCID profile for ${member.name} (${member.orcidId})`}
            >
              <svg
                className="w-4 h-4 text-[#A6CE39] shrink-0"
                viewBox="0 0 256 256"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0zm-35.4 195.4H65.8V73.2h26.8v122.2zm-13.4-138.8c-8.9 0-16.1-7.2-16.1-16.1s7.2-16.1 16.1-16.1 16.1 7.2 16.1 16.1-7.2 16.1-16.1 16.1zm115.6 74.4c0 36.6-26.6 64.4-64.8 64.4h-37.4V73.2h37.4c38.2 0 64.8 27.8 64.8 64.4zm-26.8 0c0-23.7-16.4-40.7-38-40.7v81.4c21.6 0 38-17 38-40.7z" />
              </svg>
              <span className="font-mono text-[11px] text-[#d7d9de] group-hover/orcid:text-[#2dd4bf] tracking-tight">
                {member.orcidId}
              </span>
              <svg
                className="w-3 h-3 text-[#8a8a92] group-hover/orcid:text-[#2dd4bf] shrink-0 transition-transform duration-200 group-hover/orcid:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        )}

        {/* Bio */}
        <p className="text-[#a3a3ab] text-sm leading-relaxed mb-5">
          {member.bio}
        </p>
      </div>

      {/* Research Interests Tags */}
      <div>
        <p className="text-[#8a8a92] text-[10px] uppercase font-bold tracking-[2px] mb-2.5">
          Research Focus
        </p>
        <div className="flex flex-wrap gap-1.5">
          {member.interests.map((interest, idx) => (
            <span
              key={idx}
              className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#1c1c22] text-[#d7d9de] border border-[#2b2b32]/70"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
