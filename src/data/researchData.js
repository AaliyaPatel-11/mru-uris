/**
 * Research Data for MRU-URIS
 * Focuses on high-level research initiatives, themes, methodologies, and team profiles.
 * Strictly adheres to confidentiality and non-disclosure of submitted manuscript specifics.
 */

export const researchOverview = {
  title: "Researchers & Research Initiatives",
  eyebrow: "Scientific Inquiry & Innovation",
  summary:
    "The research team at Malla Reddy University investigates the frontiers of speech artificial intelligence, natural language understanding, and algorithmic accessibility. Our research addresses critical performance disparities in foundational speech recognition models, developing empirical frameworks and parameter-efficient adaptation methods that make voice-first computing equitable and accessible for linguistically diverse and varying-literacy populations across the Global South.",
  stats: [
    { value: "06", label: "Research Team Members" },
    { value: "05", label: "Core Research Themes" },
    { value: "03", label: "Active Research Initiatives" },
  ],
};

export const researchTeamMembers = [
  {
    name: "Akshay Benhynn Yendloori",
    role: "URIS Research Contributor · Student Coordinator, MRU-URIS",
    initials: "AB",
    orcidId: "0009-0005-1955-4067",
    orcidUrl: "https://orcid.org/0009-0005-1955-4067",
    interests: [
      "Speech AI & Foundation Models",
      "Parameter-Efficient Adaptation (LoRA)",
      "Linguistic Accessibility",
      "Indic Multilingual Speech",
    ],
    bio: "Contributor to the MRU URIS research initiative, focusing on empirical audits of foundational speech recognition models, econometric modeling of performance disparities, and parameter-efficient adaptation techniques for multilingual and varying-literacy contexts.",
  },
  {
    name: "Patel Aaliya Mubashira",
    role: "URIS Research Contributor · Student Coordinator, MRU-URIS",
    initials: "PA",
    orcidId: "0009-0000-7712-4480",
    orcidUrl: "https://orcid.org/0009-0000-7712-4480",
    interests: [
      "Speech Recognition Auditing",
      "Voice Interface Accessibility",
      "Data Stratification",
      "Multilingual Human-AI Interaction",
    ],
    bio: "Contributor to the MRU URIS research initiative, investigating speech recognition performance across demographic and educational cohorts, protocol design for spontaneous speech elicitation, and voice AI inclusivity.",
  },
  {
    name: "Arusani Varshini",
    role: "URIS Research Contributor",
    initials: "AV",
    orcidId: "0009-0002-9596-1228",
    orcidUrl: "https://orcid.org/0009-0002-9596-1228",
    interests: [
      "Acoustic & Linguistic Analysis",
      "Speech AI Fairness",
      "Error Decomposition",
      "Indic Speech Corpora",
    ],
    bio: "Contributor to the MRU URIS research initiative, engaged in systematic speech data annotation, cross-lingual error profiling, and the empirical evaluation of speech recognition robustness in regional Indian languages.",
  },
  {
    name: "Annu Kumar",
    role: "URIS Research Contributor",
    initials: "AK",
    orcidId: "0009-0007-0502-8036",
    orcidUrl: "https://orcid.org/0009-0007-0502-8036",
    interests: [
      "AI Accessibility",
      "Low-Resource Language Technologies",
      "Speech System Benchmarking",
      "Inclusive AI Systems",
    ],
    bio: "Contributor to the MRU URIS research initiative, contributing to empirical evaluations of speech interfaces, benchmark validation, and accessibility technologies designed for underrepresented user communities.",
  },
  {
    name: "Anmol Singh Patel",
    role: "URIS Research Contributor",
    initials: "AS",
    orcidId: "0009-0006-9551-2130",
    orcidUrl: "https://orcid.org/0009-0006-9551-2130",
    interests: [
      "Machine Learning Evaluation",
      "Quantitative Error Mechanics",
      "Statistical Confound Control",
      "Speech Foundation Models",
    ],
    bio: "Contributor to the MRU URIS research initiative, focusing on quantitative evaluation frameworks, token error mechanics, and statistical modeling of speech systems under real-world acoustic constraints.",
  },
  {
    name: "Athmakuri Koushik",
    role: "URIS Research Contributor",
    initials: "AK",
    orcidId: "0009-0001-8313-3970",
    orcidUrl: "https://orcid.org/0009-0001-8313-3970",
    interests: [
      "Landmark-Based Spatial Grounding",
      "Natural Language Understanding",
      "Voice User Interface Design",
      "Spatial Discourse Modeling",
    ],
    bio: "Contributor to the MRU URIS research initiative, participating in spatial discourse analysis, landmark communication modeling, and investigating informal location reference systems for voice navigation.",
  },
];

export const researchThemes = [
  {
    id: "ai-ml",
    title: "Artificial Intelligence & Machine Learning",
    badge: "Model Evaluation & Adaptation",
    description:
      "Auditing large-scale speech foundation models and acoustic architectures. Investigating parameter-efficient fine-tuning (PEFT) methodologies, such as Low-Rank Adaptation (LoRA), to adapt high-capacity models to low-resource dialects and diverse conversational speaking styles with minimal computational overhead.",
    keyPoints: [
      "Diagnostic benchmarking across distinct model architectures (autoregressive and acoustic CTC models)",
      "Parameter-efficient adaptation to bridge performance disparities without full model re-training",
      "Rigorous econometric and statistical modeling accounting for variance heterogeneity and censoring",
    ],
  },
  {
    id: "speech-ai",
    title: "Speech Processing & Voice AI",
    badge: "Acoustic Robustness",
    description:
      "Evaluating automated speech recognition (ASR) systems on spontaneous, unscripted speech collected in naturalistic field environments, examining resilience to ambient noise, hardware variations, and spontaneous speech phenomena.",
    keyPoints: [
      "Analysis of spontaneous versus read speech recognition dynamics",
      "Resilience testing across hardware configurations and real-world signal-to-noise ratios",
      "Fine-grained token error decomposition (substitutions, deletions, and insertions)",
    ],
  },
  {
    id: "nlu",
    title: "Natural Language Understanding",
    badge: "Multilingual & Code-Switching",
    description:
      "Investigating cross-lingual speech recognition and natural language processing across Indic languages—principally Telugu and Hindi—alongside Indian English, with particular attention to conversational code-switching and non-canonical syntax.",
    keyPoints: [
      "Characterizing intra-sentential and inter-sentential code-switching behaviors",
      "Addressing non-standard syntactic phrasing and regional vernacular discourse markers",
      "Investigating script normalization and phonetic transliteration pipelines for Indic scripts",
    ],
  },
  {
    id: "spatial",
    title: "Landmark-Based Location Descriptions",
    badge: "Spatial Language & Grounding",
    description:
      "Exploring how individuals communicate spatial orientation and geographical routes in urban environments where formal hierarchical address systems are not universally utilized, contrasting informal landmark anchoring with structured address conventions.",
    keyPoints: [
      "Typology of spatial descriptions: compositional, landmark-anchored, and name-only references",
      "Assessing communicative precision and identifiability across sociotechnical strata",
      "Informing adaptive dialogue architectures for landmark-grounded voice navigation systems",
    ],
  },
  {
    id: "accessibility",
    title: "AI Accessibility & Digital Literacy Inclusivity",
    badge: "Inclusive Computing",
    description:
      "Examining the sociotechnical barriers that populations with limited formal education face when interacting with voice systems, addressing the 'Voice UI paradox' where voice interfaces are intended for accessibility yet encounter steep empirical recognition challenges.",
    keyPoints: [
      "Operationalizing user schooling attainment and functional literacy as core evaluation axes",
      "Auditing demographic and educational fairness in foundational AI technologies",
      "Formulating human-centered design principles for truly inclusive conversational systems",
    ],
  },
];

export const researchMethodology = [
  {
    step: "01",
    title: "Stratified Empirical Benchmarking",
    desc: "Operationalizing educational and literacy tiers through rigorous criteria, including completed schooling attainment and functional reading assessments, to audit speech AI systems across diverse user demographics.",
  },
  {
    step: "02",
    title: "In-Situ Spontaneous Elicitation",
    desc: "Gathering spontaneous conversational and task-oriented speech in real-world communicative settings rather than relying on laboratory-recorded read speech.",
  },
  {
    step: "03",
    title: "Cross-Architecture Evaluation",
    desc: "Evaluating diverse model paradigms—including large autoregressive foundation models, Indic-specialized acoustic models, and commercial cloud speech recognition APIs.",
  },
  {
    step: "04",
    title: "Rigorous Confound Control",
    desc: "Applying multivariable regression and econometric specifications to isolate educational and linguistic factors while rigorously controlling for acoustic SNR, recording hardware, age, and gender.",
  },
  {
    step: "05",
    title: "Token-Level Error Mechanics",
    desc: "Conducting granular error decomposition to identify precise failure modes—such as high deletion rates, named-entity distortion, and script-detection anomalies.",
  },
  {
    step: "06",
    title: "Parameter-Efficient Mitigation",
    desc: "Implementing and validating targeted parameter-efficient fine-tuning (LoRA) protocols under strict speaker-disjoint cross-validation to substantially narrow performance disparities.",
  },
  {
    step: "07",
    title: "Ethical & Privacy-Conscious Protocols",
    desc: "Conducting field research under approved institutional ethics protocols, securing native-language informed consent, anonymizing identity data, and maintaining secure research workflows.",
  },
];

export const researchContributions = [
  {
    title: "Framing Educational Attainment as a Speech AI Evaluation Axis",
    desc: "Pioneered the empirical analysis of user schooling and literacy levels as explicit fairness dimensions in speech technology, revealing substantial performance gaps that remain obscured in standard read-speech benchmarks.",
  },
  {
    title: "Comprehensive Multilingual Audit of Foundation Models",
    desc: "Delivered rigorous diagnostics demonstrating how foundational and specialized speech models perform across Indic languages and code-switching, identifying systemic token deletion patterns in spontaneous speech.",
  },
  {
    title: "Demonstrated Disparity Mitigation via Targeted Adaptation",
    desc: "Validated that parameter-efficient fine-tuning (LoRA) can systematically close recognition gaps on conversational Indic speech without necessitating prohibitive re-training costs.",
  },
  {
    title: "Empirical Characterization of Vernacular Spatial Communication",
    desc: "Documented the structural composition and communicative precision of landmark-based route descriptions across sociotechnical strata, providing foundational insights for voice navigation design.",
  },
];

export const ongoingResearch = {
  statusNotice: "Aggregate Research Activity",
  metrics: [
    { count: "2", label: "Research Papers Submitted for Peer Review" },
    { count: "1", label: "Research Paper in Active Preparation" },
  ],
  description:
    "The research team is actively advancing its inquiry into speech AI equity, spatial language grounding, and parameter-efficient model adaptation. Our active investigations focus on extending acoustic robustness to additional regional dialects, exploring real-time landmark resolution for conversational interfaces, and establishing comprehensive open-source benchmarks for linguistic inclusivity.",
  disclaimer:
    "Submissions reflect ongoing scholarly inquiry and are subject to peer review. In accordance with publication protocols and academic integrity standards, manuscript titles, submission venues, and full preprints will be announced following formal peer review and acceptance.",
};

export const researchVision = {
  statement:
    "We envision voice-first artificial intelligence that serves all communities equitably. By uniting rigorous empirical evaluation with human-centered engineering, our goal is to ensure that technological advancements in AI empower individuals regardless of their formal schooling, reading background, or native dialect.",
  pillars: [
    {
      title: "Scientific Rigor",
      desc: "Grounded in reproducible empirical audits, robust statistical methods, and transparent error modeling.",
    },
    {
      title: "Equitable Accessibility",
      desc: "Dedicated to dismantling digital barriers for underserved, low-literacy, and multilingual populations.",
    },
    {
      title: "Responsible Innovation",
      desc: "Committed to privacy-first research ethics, ethical data governance, and open academic scholarship.",
    },
  ],
};
