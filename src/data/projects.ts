export interface ProjectEmbed {
  title: string;
  description?: string;
  url: string;           // iframe src
  aspectRatio?: string;  // e.g. "16/9", "1/1"
  height?: string;       // e.g. "600px"
}

export interface ProjectSection {
  id: string;
  title: string;
  subtitle?: string;
  body?: string;
  images?: string[];
  imageLayout?: 'grid' | 'stack' | 'masonry';
  masonryColumns?: {
    desktop: number;
    tablet?: number;
    mobile: number;
  };
  embeds?: ProjectEmbed[];
  video?: string; // video URL (mp4, vimeo embed, etc.)
}

export interface Project {
  id: string;
  num: string;
  badge?: string;
  title: string;
  client: string;
  category: string;            // primary category (used on hero)
  categories?: string[];       // multi-category for filtering
  year: string;
  role: string;
  tools: string[];
  tags: string[];
  teaser: string;
  overview: string;
  brief: string;
  approach: string;
  outcome: string;
  heroImage: string;
  images: string[];
  imageLayout?: 'grid' | 'stack' | 'masonry';
  masonryColumns?: {
    desktop: number;
    tablet?: number;
    mobile: number;
  };
  sections?: ProjectSection[];   // multi-section mega-projects
  embeds?: ProjectEmbed[];       // top-level interactive embeds
  link?: string;
  linkLabel?: string;
  websiteUrl?: string;           // top-of-page CTA URL — renders button under title
  websiteLabel?: string;         // custom CTA label (defaults to "Visit Website")
  placeholder?: boolean;         // true = no images yet, render placeholder
  next: string;
}

export const CATEGORIES = [
  'All',
  'Brand Identity',
  'Web Design',
  'UI / UX',
  'Motion / Animation',
  'Digital Media',
  'Editorial · Print',
  'Illustration',
  'Storyboarding',
  'Creative Coding',
] as const;

export const PROFILE = {
  name: 'Omar Ashour',
  role: 'Creative Director & Brand Designer',
  location: 'Doha, Qatar',
  email: 'omar.ashour.oa@gmail.com',
  phone: '+974 6648 0397',
  available: true,
  links: {
    linkedin: 'https://www.linkedin.com/in/omar-t-ashour/',
    behance: 'https://www.behance.net/omar_ashour',
    vimeo: 'https://vimeo.com/user37445115',
  },
};

export const CLIENTS = [
  { name: 'Qatar International Court (QICDRC)', type: 'Legal Institution', url: 'https://qicdrc.gov.qa' },
  { name: 'Ministry of Justice — Qatar', type: 'Government', url: '' },
  { name: 'Ministry of Finance — Qatar', type: 'Government', url: '' },
  { name: 'Asian Football Confederation', type: 'Sports & Events', url: 'https://www.the-afc.com' },
  { name: 'Design Doha Biennial', type: 'Design & Culture', url: '' },
  { name: 'Education Above All', type: 'Non-Profit', url: 'https://educationaboveall.org' },
  { name: 'beIN SPORTS × TOD', type: 'Media & Broadcast', url: '' },
  { name: 'SkipCash', type: 'Fintech', url: '' },
  { name: 'US Embassy — Doha', type: 'Diplomatic', url: '' },
  { name: 'Aspire Zone Foundation', type: 'Sports & Wellness', url: '' },
  { name: 'Fairmont & Raffles Doha', type: 'Hospitality', url: '' },
  { name: 'Action Global Communications', type: 'PR & Comms', url: '' },
];

export const PROJECTS: Project[] = [
  {
    id: 'dlf-2026',
    num: '01',
    badge: '★ Approved by Minister of Justice',
    title: 'Doha Legal Forum 2026',
    client: 'QICDRC × Ministry of Justice — Qatar',
    category: 'Brand Identity',
    categories: ['Brand Identity', 'Web Design', 'Editorial · Print'],
    year: '2026',
    role: 'Brand Identity Lead — Sole Creator',
    tools: ['Figma', 'Illustrator', 'InDesign', 'After Effects'],
    tags: ['Brand Identity', 'Logo Design', 'Brand Guidelines', 'Web Design', 'Web Development', 'Print Design', 'Editorial Design', 'Stationery', 'Event Branding', 'Wayfinding', 'Creative Direction'],
    teaser:
      'Complete brand identity for a flagship government legal conference, formally approved by the Minister of Justice of Qatar.',
    overview:
      "The Doha Legal Forum is one of Qatar's most significant biannual legal conferences, co-produced by QICDRC and the Ministry of Justice. Commissioned as sole creator of the entire identity — from initial concept through final delivery across all event touchpoints.",
    brief:
      "The identity needed to carry institutional authority while feeling forward-looking and international. It had to scale from stage backdrops and signage to digital platforms and printed programmes — all under the scrutiny of two of Qatar's most prominent legal institutions.",
    approach:
      "I developed the visual system around the idea of legal precision meeting architectural scale — clean geometry, authoritative typography, and a restrained palette. Every element was built as a system: scalable, adaptable, cohesive across every surface and screen size. Designed and developed the official forum website end-to-end, including online registration and ticketing flows. Coordinated the on-site filming of panellist and speaker interviews used across the forum's editorial and social outputs.",
    outcome:
      'Brand identity formally approved by the Minister of Justice of Qatar. Successfully deployed across all event touchpoints for the 2026 forum, including stage design, digital platforms, signage, and printed materials.',
    heroImage: '/images/projects/dlf-2026/hero.jpg',
    imageLayout: 'masonry',
    images: [
      '/images/projects/dlf-2026/img-1.jpg',
      '/images/projects/dlf-2026/img-2.jpg',
      '/images/projects/dlf-2026/img-3.jpg',
      '/images/projects/dlf-2026/img-4.jpg',
      '/images/projects/dlf-2026/img-5.png',
    ],
    link: 'https://www.behance.net/omar_ashour',
    linkLabel: 'View on Behance',
    websiteUrl: 'https://www.dohalegalforum.org',
    next: 'qicdrc',
  },

  {
    id: 'qicdrc',
    num: '02',
    badge: '8-Year Institutional Partnership',
    title: 'QICDRC Branding',
    client: 'Qatar International Court & Dispute Resolution Centre',
    category: 'Brand Identity · UI/UX · AR',
    categories: ['Brand Identity', 'Web Design', 'UI / UX', 'Editorial · Print', 'Digital Media'],
    year: '2017–Present',
    role: 'Senior Branding & Digital Specialist',
    tools: ['Figma', 'Illustrator', 'InDesign', 'After Effects', 'Adobe XD', 'AR Kit'],
    tags: ['Brand Identity', 'Brand Guidelines', 'Web Design', 'UI/UX Design', 'Print Design', 'Editorial Design', 'AR Design', 'Motion Design', 'Animation', 'Video Editing', 'Social Media Design', 'Creative Direction'],
    teaser:
      "Eight years of institutional design across brand, web, eCourt platform, AR publications, events, gifts, and social — a comprehensive visual system for Qatar's primary international legal court.",
    overview:
      "A multi-year, multi-disciplinary partnership with QICDRC — Qatar's leading international arbitration court. This mega-project gathers everything produced for the institution: brand system refresh, the website, the eCourt case management platform, the AR-enhanced 10th anniversary commemorative publication, institutional gifts, international conference booths, social content, and events.",
    brief:
      "Unify an eight-year body of institutional work under a coherent visual system that scales from stationery to digital products, from printed programmes to augmented-reality publications — all while carrying the weight of a court serving legal practitioners globally.",
    approach:
      'Rather than treat each piece in isolation, I built a shared visual vocabulary — typography, color, component logic, bilingual rules — that governs every output. Each deliverable (brand, web, eCourt, AR book, gifts, social) inherits from the same system and extends it for its medium.',
    outcome:
      "A fully documented institutional identity deployed across web, app, print, AR, social, and events — serving thousands of legal practitioners and delivered consistently over nearly a decade of engagement.",
    heroImage: '/images/projects/qicdrc-brand/hero.jpg',
    imageLayout: 'masonry',
    images: [],
    sections: [
      {
        id: 'brand-system',
        title: 'Brand System',
        subtitle: 'Refreshed identity · bilingual system · full guidelines',
        body:
          "A full brand refresh integrating newly launched services into a coherent, scalable visual identity. Audited eight years of touchpoints, identified inconsistencies, and built a flexible system — typography, color, component logic — documented in a comprehensive bilingual brand guideline.",
        imageLayout: 'masonry',
        masonryColumns: { desktop: 1, mobile: 1 },
        images: [
          '/images/projects/qicdrc-brand/qicdrc-branding-mockup.jpg',
        ],
      },
      {
        id: 'web-presence',
        title: 'Web Presence',
        subtitle: 'QICDRC.gov.qa · Institutional website',
        body:
          "The public-facing website for QICDRC — structured around case filing, judges' profiles, news, and institutional content. Designed for legal practitioners, journalists, and the general public, in both English and Arabic.",
        imageLayout: 'masonry',
        masonryColumns: { desktop: 3, mobile: 1 },
        images: [
          '/images/projects/qicdrc-brand/img-13.png',
          '/images/projects/qicdrc-brand/img-8.png',
          '/images/projects/qicdrc-brand/img-9.png',
          '/images/projects/qicdrc-brand/img-10.png',
          '/images/projects/qicdrc-brand/img-11.png',
          '/images/projects/qicdrc-brand/img-12.png',
          
        ],
      },
      {
        id: 'ecourt',
        title: 'eCourt Platform',
        subtitle: 'UI/UX for legal case management',
        body:
          "eCourt is QICDRC's digital case management platform, used daily by attorneys, arbitrators, and court administrators. I ran a full UX audit, mapped user flows per role, and redesigned the interface around consistent component patterns — simplifying filing and case-tracking journeys while improving accessibility.",
        imageLayout: 'masonry',
        masonryColumns: { desktop: 1, mobile: 1 },
        images: [
      '/images/projects/ecourt/img-1.jpg',
    ],
      },
      {
        id: 'ar-anniversary',
        title: 'AR Anniversary Edition',
        subtitle: '10th Anniversary Commemorative Book · Augmented Reality',
        body:
          "For QICDRC's 10th anniversary I designed a commemorative publication with embedded AR markers. Scanned with the companion app, still pages came alive with video messages, animated infographics, and immersive content layers — among the first AR-enhanced legal publications in the region.",
        imageLayout: 'masonry',
        masonryColumns: { desktop: 2, mobile: 1 },
        images: [
      '/images/projects/ar-anniversary/img-1.jpg',
      '/images/projects/ar-anniversary/img-2.jpg',
    ],
      },
      {
        id: 'institutional-gifts',
        title: 'Institutional Gifts',
        subtitle: 'Premium commemorative and diplomatic gifts',
        body:
          "Designed a range of institutional gifts presented to visiting dignitaries, partner courts, and panel judges — premium finishes, branded packaging, and quiet diplomatic taste.",
        imageLayout: 'masonry',
        masonryColumns: { desktop: 2, mobile: 1 },
        images: [
          '/images/projects/qicdrc-brand/qicdrc-gift.jpg',
          '/images/projects/qicdrc-brand/qicdrc-gift-2.jpg',
        ],
      },
      {
        id: 'booth-design',
        title: 'Booth Design',
        subtitle: 'International conference presence · Seoul · Rome',
        body:
          "Designed QICDRC's exhibition booths for international legal conferences — translating the institutional brand into a physical conference-floor presence in Seoul and Rome. Signage, wall graphics, brochure displays, and the visitor flow all carry the QICDRC visual system into the room.",
        imageLayout: 'masonry',
        masonryColumns: { desktop: 2, mobile: 1 },
        images: [
          '/images/projects/qicdrc-brand/qicdrc-booth-seoul.jpeg',
          '/images/projects/qicdrc-brand/qicdrc-booth-rome.jpeg',
        ],
      },
      {
        id: 'social-content',
        title: 'Social & Content',
        subtitle: 'Ongoing social programme · announcements · editorial posts',
        body:
          "Long-running social programme for QICDRC — announcement posts, event promotion, editorial content, bilingual typography, and a consistent visual rhythm across LinkedIn, X, and Instagram.",
        imageLayout: 'masonry',
        masonryColumns: { desktop: 4, mobile: 2 },
        images: [
          '/images/projects/qicdrc-brand/qicdrc-social-1.jpg',
          '/images/projects/qicdrc-brand/qicdrc-social-2.jpg',
          '/images/projects/qicdrc-brand/qicdrc-social-3.jpg',
          '/images/projects/qicdrc-brand/qicdrc-social-4.jpg',
          '/images/projects/qicdrc-brand/qicdrc-social-5.jpg',
          '/images/projects/qicdrc-brand/qicdrc-social-6.jpg',
          '/images/projects/qicdrc-brand/qicdrc-social-7.jpg',
        ],
      },
    ],
    link: 'https://qicdrc.gov.qa',
    linkLabel: 'Visit QICDRC',
    websiteUrl: 'https://www.qicdrc.gov.qa',
    next: 'afc-asian-cup',
  },

  {
    id: 'afc-asian-cup',
    num: '03',
    badge: '',
    title: 'AFC Asian Cup 2023 & U23',
    client: 'Asian Football Confederation',
    category: 'Event Branding · Campaign',
    categories: ['Brand Identity', 'Motion / Animation', 'Digital Media'],
    year: '2023–2024',
    role: 'Senior Designer',
    tools: ['After Effects', 'Illustrator', 'Premiere Pro', 'Photoshop'],
    tags: ['Brand Identity', 'Motion Design', 'Animation', 'Infographic Design', 'Social Media Design', 'Editorial Design', 'Campaign Design'],
    teaser: "Match-day digital design, infographic videos, and social content for the continent's biggest football tournament.",
    overview:
      'Led design of match-day digital assets, infographic videos, and social content packages for the AFC Asian Cup 2023 and AFC U23 Asian Cup — two of the most-watched sporting events in Asia.',
    brief:
      'Deliver high-volume, premium digital content under live-event conditions — match-day graphics, animated infographic videos, and campaign materials that needed to feel both immediate and polished.',
    approach:
      'Built a modular visual system that scaled across both tournaments — match-day graphics, infographic video packages, and a signature animated logo outro stamped onto every social reel. Modular templates kept output fast on a tight match-day cadence while letting key moments stand out.',
    outcome:
      'Content delivered across both tournaments drove significant increases in audience engagement across social media, reaching football fans across Asia throughout the full duration of both tournaments. The AFC Asian Cup Qatar 2023 set a new record with 1,068,587 fans — the highest tournament attendance in AFC Asian Cup history.',
    heroImage: '/images/projects/afc-asian-cup/hero.jpg',
    imageLayout: 'masonry',
    masonryColumns: { desktop: 5, mobile: 3 },
    images: [
      '/images/projects/afc-asian-cup/img-1.jpg',
      '/images/projects/afc-asian-cup/img-2.jpg',
      '/images/projects/afc-asian-cup/img-4.jpg',
      '/images/projects/afc-asian-cup/img-5.jpg',
      '/images/projects/afc-asian-cup/img-6.jpg',
      '/images/projects/afc-asian-cup/img-7.jpg',
      '/images/projects/afc-asian-cup/img-8.jpg',
      '/images/projects/afc-asian-cup/img-9.jpg',
      '/images/projects/afc-asian-cup/img-10.jpg',
      '/images/projects/afc-asian-cup/img-11.jpg',
      '/images/projects/afc-asian-cup/img-12.jpg',
      '/images/projects/afc-asian-cup/img-13.jpg',
      '/images/projects/afc-asian-cup/img-14.jpg',
      '/images/projects/afc-asian-cup/img-15.jpg',
      '/images/projects/afc-asian-cup/img-16.jpg',
    ],
    sections: [
      {
        id: 'infographic-animation',
        title: 'Infographic Animation',
        subtitle: 'Motion-driven data graphics for broadcast and social',
        body:
          "Animated infographic package for match-day broadcast and social — statistics, lineups, and results rendered as kinetic information graphics that could be tailored in real time to each fixture.",
        video: '',
      },
    ],
    link: 'https://www.behance.net/omar_ashour',
    linkLabel: 'View on Behance',
    next: 'design-doha',
  },

  {
    id: 'design-doha',
    num: '04',
    badge: '',
    title: 'Design Doha Biennial',
    client: 'Qatar Creates',
    category: 'Event Identity · Editorial',
    categories: ['Brand Identity', 'Motion / Animation', 'Editorial · Print'],
    year: '2024',
    role: 'Senior Designer',
    tools: ['InDesign', 'Illustrator', 'After Effects', 'Figma'],
    tags: ['Brand Identity', 'Event Branding', 'Motion Design', 'Animation', 'Editorial Design', 'Print Design', 'Wayfinding', 'Art Direction'],
    teaser: "Social campaigns, official guidebook, stage, and speaker visuals for the MENA's flagship design festival.",
    overview:
      "Design Doha Biennial is one of the MENA region's most prestigious design events under the Qatar Creates umbrella. Responsible for all digital and print deliverables — from opening week social campaigns through to the official event guidebook, the stage design, and forum presentation visuals.",
    brief:
      'Create a cohesive visual output for a multi-day international design event — balancing editorial quality with event-day practicality across very different display formats, from social posts to large-scale stage screens.',
    approach:
      'Designed the official event guidebook, speaker presentation visuals, digital invitations, stage and environmental visuals, and social campaigns — all part of the same visual language while serving different contexts. Bilingual Arabic/English execution across all formats.',
    outcome:
      'All materials delivered successfully across print and digital for the inaugural Design Doha Biennial (24 Feb – 5 Aug 2024). Social content amplified audience reach throughout opening week and beyond, contributing to the event\'s landmark profile as the MENA region\'s flagship design festival.',
    heroImage: '/images/projects/design-doha/hero.jpg',
    imageLayout: 'masonry',
    masonryColumns: { desktop: 5, mobile: 1 },
    images: [
      '/images/projects/design-doha/img-1.jpg',
      '/images/projects/design-doha/img-2.jpg',
      '/images/projects/design-doha/img-3.jpg',
      '/images/projects/design-doha/img-4.jpg',
      '/images/projects/design-doha/img-5.jpg',
      '/images/projects/design-doha/img-6.jpg',
      '/images/projects/design-doha/img-7.jpg',
      '/images/projects/design-doha/img-8.jpg',
      '/images/projects/design-doha/img-9.jpg',
      '/images/projects/design-doha/img-10.jpg',
      '/images/projects/design-doha/img-11.jpg',
      '/images/projects/design-doha/img-12.jpg',
      '/images/projects/design-doha/img-13.jpg',
      '/images/projects/design-doha/img-14.jpg',
      '/images/projects/design-doha/img-15.jpg',
      '/images/projects/design-doha/img-16.jpg',
      '/images/projects/design-doha/img-17.jpg',
    ],
    sections: [
      {
        id: 'stage-animation',
        title: 'Stage Animation',
        subtitle: 'Motion visuals for the Design Doha Forum main stage',
        body:
          "Animated stage visuals for the Design Doha Forum — speaker intros, session transitions, and ambient motion loops built to scale across multi-screen stage layouts while staying legible to a live audience.",
        video: '',
      },
    ],
    link: 'https://www.behance.net/omar_ashour',
    linkLabel: 'View on Behance',
    next: 'sifocc',
  },

  {
    id: 'sifocc',
    num: '05',
    badge: '',
    title: 'SIFoCC International Conference',
    client: 'QICDRC',
    category: 'Conference Branding',
    categories: ['Brand Identity', 'Editorial · Print'],
    year: '2022',
    role: 'Senior Branding Specialist',
    tools: ['InDesign', 'Illustrator', 'After Effects'],
    tags: ['Brand Identity', 'Logo Design', 'Brand Guidelines', 'Event Branding', 'Print Design', 'Editorial Design', 'Stationery', 'Wayfinding'],
    teaser: "Full visual identity for the world's largest international court conference.",
    overview:
      "SIFoCC — the Standing International Forum of Commercial Courts — is the world's largest international court conference. Directed all event branding and visual communications.",
    brief:
      'Bring together chief justices and senior judges from commercial courts globally under a visual identity that carries institutional weight while feeling modern.',
    approach:
      'Complete event identity — stage design, signage, digital screens, printed programmes, name badges, and all collateral — working at both intimate and large-scale formats simultaneously.',
    outcome:
      'The conference was delivered to its highest attendance, with the visual identity praised for its coherence across all event surfaces.',
    heroImage: '/images/projects/sifocc/hero.jpg',
    imageLayout: 'masonry',
    images: [
      '/images/projects/sifocc/img-1.jpg',
      '/images/projects/sifocc/img-2.jpg',
      '/images/projects/sifocc/img-3.jpg',
      '/images/projects/sifocc/img-4.jpg',
      '/images/projects/sifocc/img-5.jpg',
      '/images/projects/sifocc/img-6.jpg',
      '/images/projects/sifocc/img-7.jpg',
      '/images/projects/sifocc/img-8.jpg',
    ],
    link: 'https://www.behance.net/omar_ashour',
    linkLabel: 'View on Behance',
    next: 'qatar-law-forum',
  },

  {
    id: 'qatar-law-forum',
    num: '06',
    badge: '',
    title: 'Qatar Law Forum 2017',
    client: 'Qatar Law Forum',
    category: 'Event Branding · Web',
    categories: ['Brand Identity', 'Web Design', 'Editorial · Print'],
    year: '2017',
    role: 'Designer — Event Branding & Web',
    tools: ['Illustrator', 'InDesign', 'Photoshop', 'After Effects', 'Squarespace', 'HTML / CSS'],
    tags: ['Brand Identity', 'Logo Design', 'Web Design', 'Print Design', 'Editorial Design', 'Event Branding', 'Motion Design'],
    teaser: "Full event identity, website, and visual communications for a prestigious global legal forum under the Emir of Qatar's patronage.",
    overview:
      "The Qatar Law Forum has built a strong and unrivalled reputation for bringing together global leaders in law. For the 3rd edition of the forum in 2017 — held under the patronage of His Highness the Emir of Qatar — I designed the complete event identity and all supporting communications.",
    brief:
      'Create a cohesive event brand with global authority and presence, covering digital, print, and physical touchpoints for an international legal audience — carrying forward the forum\'s distinguished legacy while feeling current and forward-looking.',
    approach:
      'Delivered the full event branding package: event identity system, website design and front-end development (HTML/CSS), stage and environmental branding, infographics, printed programmes and collateral, social media assets, and coordination with filming and photography teams.',
    outcome:
      "The 2017 Qatar Law Forum was successfully delivered across all touchpoints under the patronage of His Highness the Emir of Qatar. The event reinforced the forum's standing as the region's most prestigious gathering for international legal leaders.",
    heroImage: '/images/projects/qatar-law-forum/hero.jpeg',
    imageLayout: 'masonry',
    images: [
      '/images/projects/qatar-law-forum/img-1.png',
      '/images/projects/qatar-law-forum/img-2.jpg',
      '/images/projects/qatar-law-forum/img-3.jpg',
      '/images/projects/qatar-law-forum/img-4.jpg',
    ],
    link: 'https://www.qatarlawforum.org',
    linkLabel: 'View Website',
    websiteUrl: 'https://www.qatarlawforum.org',
    next: 'ehaf',
  },

  {
    id: 'ehaf',
    num: '07',
    badge: '9 Pages · 800+ Images',
    title: 'EHAF Consulting Engineers',
    client: 'EHAF — Qatar',
    category: 'Web Design · Web Development',
    categories: ['Web Design', 'UI / UX'],
    year: '2018',
    role: 'Web Designer & Developer',
    tools: ['Wix', 'HTML / CSS', 'JavaScript', 'Photoshop'],
    tags: ['Web Design', 'Web Development', 'UI/UX Design'],
    teaser:
      'Full corporate website for one of Qatar\'s leading engineering consultancies — nine pages, 800+ project images, and a searchable filterable portfolio.',
    overview:
      "EHAF is a regional engineering consultancy with a deep, high-volume portfolio of projects across hospitality, government, commercial, and residential sectors. I designed and developed the full corporate website — nine pages, 800+ images, and a database-backed project library that visitors can browse and filter.",
    brief:
      "Take a very large body of construction and engineering work — 800+ project images across dozens of jobs — and present it in a way that feels premium, readable, and easy to navigate across desktop, tablet, and mobile. The site also needed a careers section that visitors could browse and apply through.",
    approach:
      "Built a structured project database so each project could be filtered by sector, explored individually, and browsed at scale without overwhelming the visitor. Paired that with a seamless responsive design across all breakpoints. Developed a careers page with job briefings and an application flow. Led design, front-end build, and the database structure end-to-end.",
    outcome:
      "A nine-page website with a filterable 800+ image portfolio, dedicated careers section, and a consistent responsive experience across devices — serving EHAF's business development and recruitment goals from a single, scalable platform.",
    heroImage: '/images/projects/ehaf/hero.jpg',
    imageLayout: 'masonry',
    masonryColumns: { desktop: 2, mobile: 1 },
    images: [
      '/images/projects/ehaf/img-1.jpg',
      '/images/projects/ehaf/img-2.jpg',
      '/images/projects/ehaf/img-3.jpg',
    ],
    link: 'https://www.behance.net/omar_ashour',
    linkLabel: 'View on Behance',
    websiteUrl: 'https://www.ehafqatar.com/',
    next: 'mof-state-budget',
  },

  {
    id: 'mof-state-budget',
    num: '08',
    badge: '',
    title: 'State of Qatar Annual Budget',
    client: 'Ministry of Finance — Qatar',
    category: 'Editorial · Infographic',
    categories: ['Editorial · Print', 'Digital Media'],
    year: '2020',
    role: 'Lead Designer',
    tools: ['Illustrator', 'InDesign', 'After Effects'],
    tags: ['Editorial Design', 'Print Design', 'Infographic Design', 'Art Direction'],
    teaser: "Visual communications and infographics for the Ministry of Finance's annual State Budget announcement.",
    overview:
      "Designed the public-facing visual communications for the State of Qatar's 2020 Annual Budget announcement — translating dense fiscal data into clear, dignified infographics for press, social, and the Ministry's institutional channels.",
    brief:
      "Make a national budget legible. Public audiences and journalists needed to be able to understand government allocations at a glance, while the Ministry required a visual treatment with appropriate institutional gravitas.",
    approach:
      "Built a bilingual information-design system for budget data — breaking allocations, sector splits, and year-over-year changes into hierarchical infographics. Applied across social announcement posts, press releases, and official Ministry communications.",
    outcome:
      "Delivered the full communications package across print and digital, with infographics used by national press during the budget announcement cycle.",
    heroImage: '/images/projects/mof-state-budget/hero.jpeg',
    imageLayout: 'stack',
    images: [
      '/images/projects/mof-state-budget/img-1.jpeg',
    ],
    link: 'https://www.behance.net/omar_ashour',
    linkLabel: 'View on Behance',
    next: 'recyq',
  },

  {
    id: 'recyq',
    num: '09',
    badge: "MSc Project · University of Edinburgh",
    title: 'RecyQ — Waste Management App',
    client: 'MSc Digital Media Design — University of Edinburgh',
    category: 'UI / UX · Mobile App',
    categories: ['UI / UX'],
    year: '2024',
    role: 'UI/UX Designer — Sole Creator',
    tools: ['Figma', 'Adobe XD'],
    tags: ['UI/UX Design', 'App Design', 'Concept Development', 'Brand Identity'],
    teaser: "Full UX design and interactive prototype for a gamified recycling and waste management app — a coursework project during my MSc.",
    overview:
      "RecyQ is a major coursework project from my MSc in Digital Media Design at the University of Edinburgh. A waste management app concept designed to streamline and enrich the recycling experience for both households and businesses. The app enables users to schedule bin pickups, explore bite-sized educational content on sustainability, earn rewards for eco-conscious actions, and connect with local environmental events and initiatives.",
    brief:
      'Design a mobile app experience that makes recycling more accessible, informative, and genuinely engaging — shifting user behaviour toward eco-conscious habits through reward mechanics and community involvement.',
    approach:
      'Executed the complete UX design process: audience research and user interviews, competitive analysis, user stories and flows, wireframes, and a comprehensive design system. The design system features Poppins typography and a considered green palette. Culminated in an animated, high-fidelity interactive prototype with fully realised app screens.',
    outcome:
      'Delivered a polished, fully interactive prototype demonstrating the end-to-end user journey across key features: hassle-free scheduled pickups, reward points and stores, bite-sized sustainability education, community events, and live chat support. Presented at the Edinburgh graduate show.',
    heroImage: '/images/projects/recyq/hero.jpg',
    imageLayout: 'masonry',
    images: [
      '/images/projects/recyq/img-1.jpg',
      '/images/projects/recyq/img-2.jpg',
      '/images/projects/recyq/img-3.jpg',
    ],
    link: 'https://www.behance.net/omar_ashour',
    linkLabel: 'View on Behance',
    next: 'vitalife',
  },

  {
    id: 'vitalife',
    num: '10',
    badge: '',
    title: 'VitaLife Brand Identity',
    client: 'VitaLife',
    category: 'Brand Identity · Print',
    categories: ['Brand Identity', 'Editorial · Print'],
    year: '2024',
    role: 'Brand Designer — Sole Creator',
    tools: ['Illustrator', 'InDesign'],
    tags: ['Brand Identity', 'Logo Design', 'Brand Guidelines', 'Print Design', 'Editorial Design', 'Stationery', 'Packaging Design'],
    teaser: 'Full brand identity and comprehensive guidelines for a natural and vegan cosmetics company.',
    overview:
      'VitaLife is a cosmetics trading company specialising in bringing natural and vegan products to market. The brand stands for ethical choices and exceptional quality. Created a complete brand identity system representing the harmony of nature, compassion, and beauty.',
    brief:
      'Develop a brand identity with enough depth and flexibility to operate bilingually (English and Arabic) across print and digital — communicating the brand\'s ethical, natural positioning without feeling clinical or generic.',
    approach:
      'Designed a distinctive logo system with logomark and wordmark, a carefully considered five-color palette (Seaside Mist, Pastel Sky, Sapphire Night, Rustic Coral, Apricot Cream), and a bilingual typography system pairing Vellago with Avenir Next for English and Abd ElRady with Tahoma for Arabic. Developed brand patterns, iconography, and a complete stationery system — all documented in a comprehensive brand guideline.',
    outcome:
      'Delivered a complete, print-ready brand guideline covering logo usage and exclusion zones, the full color system with values, bilingual typography hierarchy, custom patterns, icon library, and stationery (business cards, paper bags). Ready for deployment across all brand touchpoints.',
    heroImage: '/images/projects/vitalife/hero.jpg',
    imageLayout: 'stack',
    images: [
      '/images/projects/vitalife/img-1.jpg',
      '/images/projects/vitalife/img-2.jpg',
      '/images/projects/vitalife/img-3.jpg',
      '/images/projects/vitalife/img-4.jpg',
      '/images/projects/vitalife/img-5.jpg',
      '/images/projects/vitalife/img-6.jpg',
      '/images/projects/vitalife/img-7.jpg',
      '/images/projects/vitalife/img-8.jpg',
      '/images/projects/vitalife/img-9.jpg',
      '/images/projects/vitalife/img-10.jpg',
      '/images/projects/vitalife/img-11.jpg',
    ],
    link: 'https://www.behance.net/omar_ashour',
    linkLabel: 'View on Behance',
    next: 'soul-broth',
  },

  {
    id: 'soul-broth',
    num: '11',
    badge: '',
    title: 'Soul Broth',
    client: 'Soul Broth',
    category: 'Brand Identity · Packaging · Social Media',
    categories: ['Brand Identity', 'Digital Media'],
    year: '2024',
    role: 'Brand Designer — Sole Creator',
    tools: ['Illustrator', 'Photoshop', 'InDesign', 'Figma'],
    tags: ['Brand Identity', 'Logo Design', 'Packaging Design', 'Social Media Design', 'Campaign Design', 'Art Direction'],
    teaser: 'Complete brand identity, packaging design, and social media presence for a homemade broth business on Instagram.',
    overview:
      'Soul Broth is a home-based broth business operating through Instagram — crafting slow-cooked, nourishing broths with a personal and wholesome identity. Created the complete brand from the ground up: logo, visual language, packaging, and a cohesive social media aesthetic that feels warm, handcrafted, and deeply appetising.',
    brief:
      'Build a brand identity that communicates the care and craft behind a home kitchen business — feeling approachable yet premium, and translating naturally across packaging and Instagram without losing its soul.',
    approach:
      'Developed a warm, artisan visual identity with a considered colour palette and hand-crafted typographic sensibility. Applied it across all customer touchpoints: product packaging designed for both function and shelf presence, and a social media template system that keeps the feed cohesive while giving each post room to breathe.',
    outcome:
      'Soul Broth launched with a brand identity that punches well above its home-kitchen origins — with packaging that stands out and an Instagram presence that converts browsers into loyal customers.',
    heroImage: '/images/projects/soul-broth/hero.jpg',
    imageLayout: 'stack',
    images: [
      '/images/projects/soul-broth/img-1.jpg',
    ],
    link: 'https://www.instagram.com/soulbroth.qa',
    linkLabel: 'View on Instagram',
    websiteUrl: 'https://www.instagram.com/soulbroth.qa',
    websiteLabel: 'View on Instagram',
    next: 'skipcash',
  },

  {
    id: 'skipcash',
    num: '12',
    badge: '',
    title: 'SkipCash',
    client: 'SkipCash',
    category: 'Digital Media · Social',
    categories: ['Digital Media', 'Brand Identity'],
    year: '2021–2022',
    role: 'Senior Designer',
    tools: ['Illustrator', 'Photoshop', 'After Effects', 'Figma'],
    tags: ['Brand Identity', 'Social Media Design', 'Campaign Design'],
    teaser: "Social and digital content programme for one of Qatar's fastest-growing payments platforms.",
    overview:
      "SkipCash is a Qatar-based fintech offering cashless payments through QR, links, and integrated checkout. I came on at the launch of their social media channels and built the visual programme from day one — a long-running stream of promotional campaigns, product announcements, feature highlights, and editorial posts that established the brand's voice online.",
    brief:
      "Translate a product-led fintech identity into a consistent, confident digital presence — explaining features, reassuring users, and supporting marketing campaigns across a fast product-release cycle.",
    approach:
      "Designed a flexible social system built around the SkipCash brand — campaign artwork, illustrated feature posts, product explainers, and promotional assets. Modular templates kept weekly output fast while leaving room for standout campaigns.",
    outcome:
      "Delivered a sustained programme of social and digital assets supporting SkipCash's user acquisition and product marketing — growing audience engagement across Instagram and LinkedIn.",
    heroImage: '/images/projects/skipcash/hero.jpg',
    imageLayout: 'masonry',
    masonryColumns: { desktop: 3, mobile: 1 },
    images: [
      '/images/projects/skipcash/img-1.jpg',
      '/images/projects/skipcash/img-2.jpg',
      '/images/projects/skipcash/img-3.jpg',
      '/images/projects/skipcash/img-4.jpg',
      '/images/projects/skipcash/img-5.jpg',
      '/images/projects/skipcash/img-6.jpg',
    ],
    link: 'https://www.behance.net/omar_ashour',
    linkLabel: 'View on Behance',
    next: 'education-above-all',
  },

  {
    id: 'education-above-all',
    num: '13',
    badge: 'Featured on Qatar Airways Flights',
    title: 'Educate A Child — Qatar Airways Campaign',
    client: 'Education Above All × Qatar Airways',
    category: 'Motion / Animation · Infographic',
    categories: ['Motion / Animation', 'Digital Media'],
    year: '2017',
    role: 'Motion Designer',
    tools: ['After Effects', 'Illustrator', 'Premiere Pro'],
    tags: ['Motion Design', 'Animation', 'Infographic Design', 'Concept Development', 'Art Direction', 'Campaign Design'],
    teaser: "Animated infographic campaign for Education Above All's Educate A Child programme — shown in-flight on Qatar Airways.",
    overview:
      "In collaboration with Qatar Airways and Education Above All, I designed and animated captivating infographic segments for the 'Educate A Child' campaign video — showcased on Qatar Airways flights to inspire passengers to support the initiative. Through engaging visuals and concise storytelling, the piece highlights the importance of education and the impact of a programme that has enrolled over 5 million out-of-school children since 2012.",
    brief:
      "Communicate a complex global education initiative — numbers, geographic reach, and human impact — in a single animated piece that would hold a captive in-flight audience and move them to donate via the seat-pocket envelope.",
    approach:
      "Wrote the motion treatment around a clear narrative spine — problem, programme, impact — opened with a quiet, emotional frame (a child walking into school) and unfolded into warm shape-based infographics that carried the data without overwhelming the message. Closed with a clear donation prompt.",
    outcome:
      "Delivered as a finished motion piece shown on Qatar Airways flights globally, inspiring passengers to support the cause and make a difference in children's lives worldwide.",
    heroImage: '/images/projects/education-above-all/img-1.png',
    imageLayout: 'masonry',
    masonryColumns: { desktop: 2, mobile: 1 },
    images: [
      '/images/projects/education-above-all/img-1.png',
      '/images/projects/education-above-all/img-2.png',
      '/images/projects/education-above-all/img-3.png',
      '/images/projects/education-above-all/img-4.png',
    ],
    link: 'https://educationaboveall.org',
    linkLabel: 'Visit EAA',
    next: 'arabesque',
  },

  {
    id: 'arabesque',
    num: '14',
    badge: 'MSc Digital Media Design Thesis · University of Edinburgh',
    title: 'Arabesque',
    client: 'MSc Digital Media Design Thesis — University of Edinburgh',
    category: 'Web Design · UI/UX · Creative Coding',
    categories: ['Web Design', 'UI / UX', 'Creative Coding', 'Brand Identity'],
    year: '2024',
    role: 'Designer & Developer — Sole Creator',
    tools: ['PHP', 'Fat-Free Framework', 'MySQL', 'JavaScript', 'P5.js', 'GSAP', 'Driver.js', 'SVG.js', 'Bootstrap', 'HTML / CSS', 'MidJourney'],
    tags: ['Web Design', 'Web Development', 'UI/UX Design', 'Brand Identity', 'Logo Design', 'Interactive Design', 'Concept Development', 'Art Direction'],
    teaser: "A full-stack platform celebrating Islamic geometric patterns — gallery, step-by-step SVG tutorials, generative pattern + rosette tools, and a community of contributors.",
    overview:
      "Arabesque is a full-stack web platform celebrating Islamic geometric patterns — built from the ground up as my MSc Digital Media Design thesis at the University of Edinburgh. It combines a curated legacy pattern database, step-by-step SVG tutorials, a generative Pattern Generator built on Hankin's algorithm, a Rosette Generator built in P5.js, a contributor leaderboard, a points-based community system, and a moderated admin pipeline. Brand, UX, front-end, back-end, and database — all sole-authored.",
    brief:
      "Make Islamic geometric pattern design legible and approachable. Build a public-facing platform where casual browsers can appreciate the work, students can learn to draw the patterns step-by-step, designers can generate their own, and contributors can grow the database — all wrapped in a brand that feels native to the subject.",
    approach:
      "Designed three user personas first (casual browser, illustrator/designer, knowledge contributor) and let each one drive a distinct page archetype. Built the visual identity around a Double Octagon motif and a single signature teal (#98D5D8). Implemented the platform on PHP / Fat-Free Framework with a five-table MySQL schema, async JavaScript for live search and pattern loading, GSAP for the homepage motion, P5.js for the generators, SVG.js for the step-by-step tutorial viewer, and Driver.js for in-page onboarding. Passwords are hashed, queries are prepared, admin moderation gates every community submission.",
    outcome:
      "A live, public, production-quality platform — gallery, generators, contributor system, admin pipeline, and brand all working together. Exhibited as part of the MSc thesis at the University of Edinburgh.",
    heroImage: '/images/projects/arabesque/hero.jpg',
    imageLayout: 'masonry',
    images: [],
    sections: [
      {
        id: 'concept',
        title: 'Concept',
        subtitle: 'Three personas · one platform',
        body:
          "The platform was built around three user personas — a casual browser exploring beautiful patterns, a designer or illustrator looking for generative tools, and a knowledge contributor adding to the database. Each persona drove a distinct surface: discovery, creation, contribution. The whole experience routes back to a single shared library of patterns.",
        imageLayout: 'masonry',
        masonryColumns: { desktop: 3, mobile: 1 },
        images: [
          '/images/projects/arabesque/social-explore.jpg',
          '/images/projects/arabesque/social-create.jpg',
          '/images/projects/arabesque/social-share.jpg',
        ],
      },
      {
        id: 'tech-stack',
        title: 'Tools & Libraries',
        subtitle: 'PHP · MySQL · JavaScript · P5.js · GSAP · SVG.js · Driver.js',
        body:
          "A full-stack JavaScript-heavy build: PHP and Fat-Free Framework on the back end, MySQL for the data layer, vanilla JavaScript and AJAX for async loading, P5.js for the generators, SVG.js for animated tutorial drawing, GSAP for the homepage motion, Driver.js for onboarding, and Bootstrap for layout structure.",
        imageLayout: 'stack',
        images: [
          '/images/projects/arabesque/tech-stack.svg',
        ],
      },
      {
        id: 'homepage',
        title: 'Homepage & Discovery',
        subtitle: 'GSAP scroll-driven storytelling · async leaderboard · featured user patterns',
        body:
          "The homepage is built around four scroll-driven panels: a hero introducing the brand, a 'Create Your Own' CTA into the generators, an 'Explore' CTA into the gallery, and a featured grid of the top user-generated patterns. The rotating motif tracks the scroll position with GSAP, and the leaderboard plus pattern grid load asynchronously via AJAX so the page is interactive immediately.",
        imageLayout: 'masonry',
        masonryColumns: { desktop: 2, mobile: 1 },
        images: [
          '/images/projects/arabesque/homepage-1.png',
          '/images/projects/arabesque/homepage-2.png',
          '/images/projects/arabesque/homepage-3.png',
          '/images/projects/arabesque/homepage-4.png',
        ],
      },
      {
        id: 'gallery',
        title: 'Pattern Gallery',
        subtitle: 'Searchable · async filtering · legacy + user-generated',
        body:
          "The gallery loads the full pattern database — both legacy (historical) patterns and user-submitted designs — with an async search box, a type filter, and a category toggle for All / User Generated / Legacy. Each result links into a deeper Pattern View page with the full step-by-step tutorial.",
        imageLayout: 'stack',
        images: [
          '/images/projects/arabesque/gallery.jpg',
        ],
      },
      {
        id: 'pattern-view',
        title: 'Animated Pattern View',
        subtitle: 'SVG step-by-step · sticky nav · request-edit hook',
        body:
          "The Pattern View is the platform's clearest teaching moment: each legacy pattern is broken into an animated SVG tutorial that draws layer by layer. A sticky side navigation keeps the steps reachable, and a Request Edit button funnels engaged users into registration — converting browsing into contribution.",
        imageLayout: 'stack',
        images: [
          '/images/projects/arabesque/pattern-view.jpg',
        ],
      },
      {
        id: 'pattern-generator',
        title: 'Pattern Generator',
        subtitle: 'Hankin’s algorithm · shape management · animation · export',
        body:
          "The generator implements Hankin's algorithm — a geometric construction method for Islamic patterns — and wraps it in a designer-friendly UI. Users can add random shapes, lock minimum and maximum sizes, manage text overlays, randomise colours, tile across the canvas, and either export a static image or record an animated reveal. A Driver.js-driven onboarding tour walks first-time users through every control before letting them exit.",
        imageLayout: 'masonry',
        masonryColumns: { desktop: 2, mobile: 1 },
        images: [
          '/images/projects/arabesque/generator.jpg',
          '/images/projects/arabesque/generator-onboarding.png',
        ],
      },
      {
        id: 'rosette-generator',
        title: 'Rosette Generator',
        subtitle: 'P5.js · live geometry · save to gallery',
        body:
          "A parallel P5.js sketch generates classical rosette patterns — the user controls petal count, construction-line visibility, opacity, stroke width, pattern colour, and intersection fill, all updating in real time on the canvas. Designs can be saved back into the user's profile and submitted to the moderated gallery.",
        imageLayout: 'stack',
        images: [
          '/images/projects/arabesque/rosette.jpg',
        ],
      },
      {
        id: 'auth-profile',
        title: 'User System & Profile',
        subtitle: 'Hashed auth · onboarded profile · contribution history',
        body:
          "Registered users get a profile with three tabs — Profile, Edit History, and Pending Uploads — so contributors can track what they've submitted and where it sits in moderation. The first profile visit triggers a Driver.js onboarding sequence; the help (?) button replays it without affecting state. Passwords are hashed before they touch the database; emails are stored only for password reset.",
        imageLayout: 'masonry',
        masonryColumns: { desktop: 3, mobile: 1 },
        images: [
          '/images/projects/arabesque/login.png',
          '/images/projects/arabesque/register.png',
          '/images/projects/arabesque/profile.png',
        ],
      },
      {
        id: 'admin-moderation',
        title: 'Admin Moderation',
        subtitle: 'Pending edits · unapproved patterns · contribution points',
        body:
          "The admin dashboard is the operational backbone — pending edit requests on existing patterns, unapproved user-submitted patterns, and the link to award contribution points on approval. Approve and reject both fire async success / failure messaging; rejected edit requests are deleted, approvals push points to the contributor's profile.",
        imageLayout: 'stack',
        images: [
          '/images/projects/arabesque/admin.jpg',
        ],
      },
    ],
    link: 'https://s2273345.edinburgh.domains/Arabesque/',
    linkLabel: 'View Live Project',
    websiteUrl: 'https://s2273345.edinburgh.domains/Arabesque/',
    websiteLabel: 'View Live Project',
    next: 'creative-coding',
  },

  {
    id: 'creative-coding',
    num: '15',
    badge: 'MSc Coursework · NYU Capstone · Interactive',
    title: 'Creative Coding',
    client: 'University of Edinburgh · NYU Abu Dhabi',
    category: 'Creative Coding · Interactive',
    categories: ['Creative Coding', 'Web Design', 'Motion / Animation'],
    year: '2022–2024',
    role: 'Designer & Developer',
    tools: ['Three.js', 'p5.js', 'JavaScript', 'HTML/CSS', 'PHP', 'SQL', 'LiDAR'],
    tags: ['Web Design', 'Web Development', 'Motion Design', 'Interactive Design', 'Concept Development', 'Art Direction'],
    teaser: "Thesis and capstone work exploring code as a design medium — point clouds, typography, data, and generative systems.",
    overview:
      "A multi-project sandbox of creative coding work across my MSc at the University of Edinburgh and my BSc Capstone at NYU Abu Dhabi. Each piece explores a different use of code as a design medium — from LiDAR-scanned sculptural point clouds to live Arabic typography translation, an interactive public-health platform, and generative p5.js experiments.",
    brief:
      "Use creative coding to investigate ideas that would be impossible or tedious to hand-draw — generative systems, interactive behaviour, responsive typography, 3D point-cloud spaces, and data-rich web experiences.",
    approach:
      "Each project was authored as a self-contained piece in Three.js, p5.js, or a full-stack web environment (PHP / SQL / JS). Live demos are linked below so visitors can interact with the output rather than just watch it.",
    outcome:
      "Featured at the Edinburgh College of Art 2024 Graduate Show. A living body of work that keeps code fluent and keeps design thinking open-ended.",
    heroImage: '/images/projects/creative-coding/sculptures-1.png',
    imageLayout: 'masonry',
    images: [],
    sections: [
      {
        id: 'sculptures-thesis',
        title: 'My Sculptures Last Forever',
        subtitle: 'MSc Thesis · University of Edinburgh · 2023–2024',
        body:
          "A creative-coding extension of Yayoi Kusama's sculptural work into the digital space, built around the question: how long can a sculpture last? Using LiDAR scanning on a phone (via Polycam) and Three.js point-cloud rendering, I rebuilt real Kusama sculptures from Doha as interactive 3D scenes. A slider lets visitors visually 'erode' or preserve the sculpture over time, turning a public-space artwork into a persistent digital artefact. Exhibited at the Edinburgh College of Art 2024 Graduate Show.",
        embeds: [
          {
            title: 'Live Demo — My Sculptures Last Forever',
            description: 'Interactive CodePen · drag to orbit the point cloud and use the controls to erode or restore the sculpture.',
            url: 'https://codepen.io/omarashour/embed/GRYMeKj?default-tab=result&theme-id=dark',
            aspectRatio: '16/9',
          },
        ],
        imageLayout: 'masonry',
        masonryColumns: { desktop: 2, mobile: 1 },
        images: [
          '/images/projects/creative-coding/sculptures-1.png',
          '/images/projects/creative-coding/sculptures-2.png',
        ],
      },
      {
        id: 'arabic-type',
        title: 'Interact with Arabic Type!',
        subtitle: 'NYU Abu Dhabi Capstone · 2022 · Three.js',
        body:
          "A live bilingual typography experiment built in Three.js — users type English words and watch them translate, letter-by-letter, into Arabic as 3D glyphs swarm across the canvas. Designed to spark curiosity about the Arabic language through play rather than pedagogy.",
        embeds: [
          {
            title: 'Live Demo — Interact with Arabic Type!',
            description: 'Interactive CodePen · type an English word and watch it translate into Arabic in 3D.',
            url: 'https://codepen.io/omarashour/embed/abGGWgx?default-tab=result&theme-id=dark',
            aspectRatio: '16/9',
          },
        ],
       
      },
      {
        id: 'disease-compass',
        title: 'Disease Insight Compass',
        subtitle: 'University of Edinburgh · 2023 · Full-Stack Dynamic Web',
        body:
          "A dynamic, database-driven web platform designed to make public-health information — disease shape, transmission, fatality, global distribution — accessible to medical professionals, students, researchers, and general audiences. Built with PHP, SQL, Three.js for 3D virus viewers, and interactive D3 maps. Includes registration, a knowledge quiz engine, and an admin dashboard for editing quiz content.",
        
        imageLayout: 'masonry',
        masonryColumns: { desktop: 2, mobile: 1 },
        images: [
          '/images/projects/creative-coding/disease-compass-1.jpg',
          '/images/projects/creative-coding/disease-compass-2.jpg',
        ],
      },
      {
        id: 'p5-experiments',
        title: 'Creative Coding Experiments',
        subtitle: 'NYU Abu Dhabi · p5.js · Generative + Game',
        body:
          "A rotating set of p5.js sketches — generative polygons, parametric harmonographs with live parameter controls, and a small platformer game. Each sketch isolates a different code-as-design instinct: rhythm, randomness, interactivity, and play.",
        embeds: [
          {
            title: 'Generative Polygons',
            description: 'OpenProcessing sketch · generative geometry in p5.js.',
            url: 'https://openprocessing.org/sketch/1506390/embed/',
            aspectRatio: '1/1',
          },
          {
            title: 'Harmonograph',
            description: 'OpenProcessing sketch · parametric harmonograph with live controls.',
            url: 'https://openprocessing.org/sketch/1529697/embed/',
            aspectRatio: '1/1',
          },
          {
            title: 'Platformer Sketch',
            description: 'OpenProcessing sketch · click into the frame, then use arrow keys to play.',
            url: 'https://openprocessing.org/sketch/1513994/embed/',
            aspectRatio: '16/9',
          },
        ],
        
      },
    ],
    link: 'https://www.2024.graduateshow.eca.ed.ac.uk/portfolio/omar-ashour',
    linkLabel: 'View on Edinburgh Graduate Show',
    websiteUrl: 'https://www.2024.graduateshow.eca.ed.ac.uk/portfolio/omar-ashour',
    websiteLabel: 'View on Edinburgh Graduate Show',
    next: 'hope-teaser',
  },

  {
    id: 'hope-teaser',
    num: '16',
    badge: '',
    title: 'Hope — Short Film Teaser',
    client: 'Independent Short Film',
    category: 'Motion / Animation',
    categories: ['Motion / Animation'],
    year: '2022',
    role: 'Teaser Editor',
    tools: ['Premiere Pro', 'After Effects', 'DaVinci Resolve'],
    tags: ['Video Editing', 'Motion Design', 'Concept Development'],
    teaser: "Teaser edit for an independent short film exploring resilience through a single night.",
    overview:
      "Created the teaser for 'Hope', an independent short film I was brought on to as the teaser editor. The teaser distils the film's mood and central question into a 60-second cut designed for festival pitches and social — separate from the feature itself.",
    brief:
      "Produce a teaser that communicates tone, scale, and stakes — without revealing the story — for use in festival submissions, pitch decks, and social previews.",
    approach:
      "Built the edit around rhythm and withheld information — a handful of carefully chosen visual beats, a restrained sound design, and an ending that asks the viewer to lean in rather than tying off.",
    outcome:
      "Delivered a festival-ready teaser used in pitch materials and online promotion for the short.",
    heroImage: '/images/projects/hope-teaser/hero.jpeg',
    imageLayout: 'stack',
    images: [
      '/images/projects/hope-teaser/hero.jpeg',
    ],
    link: 'https://youtu.be/1P3ZgLOy-w8?si=B4hdik7KGIfwB0iM',
    linkLabel: 'Watch the Film',
    websiteUrl: 'https://youtu.be/1P3ZgLOy-w8?si=B4hdik7KGIfwB0iM',
    websiteLabel: 'Watch the Film',
    next: 'storyboarding',
  },

  {
    id: 'storyboarding',
    num: '17',
    badge: 'Co-writer · Revenge Knows Nothing',
    title: 'Writing & Storyboarding',
    client: 'GreenTree Productions · Edge Pictures',
    category: 'Storyboarding · Pre-Production',
    categories: ['Storyboarding', 'Illustration'],
    year: '2017–2021',
    role: 'Writer & Storyboard Artist',
    tools: ['Procreate', 'Photoshop', 'Pen & Paper'],
    tags: ['Storyboarding', 'Illustration', 'Screenwriting', 'Concept Development', 'Art Direction'],
    teaser: "Screenwriting and storyboard work for narrative animation and advertising — including 'Revenge Knows Nothing' and a range of Edge Pictures advert pitches.",
    overview:
      "Selected writing and storyboarding work across narrative animation and commercial advertising. Includes the animated short 'Revenge Knows Nothing' for GreenTree Productions and a range of advert pitch boards for Edge Pictures.",
    brief:
      "Translate scripts, treatments, and creative briefs into visual shot plans that directors, DPs, and clients can align on before a camera rolls — and in the case of 'Revenge Knows Nothing', co-author the script itself.",
    approach:
      "Combined quick thumbnailing for coverage-thinking with tighter, more finished frames for key beats — focusing on staging, lensing implications, and the emotional through-line of each sequence.",
    outcome:
      "Boards and scripts used directly in production — saving shoot time, clarifying intent for everyone on set, and in the case of 'Revenge Knows Nothing' producing a finished animated short now published on YouTube.",
    heroImage: '/images/projects/storyboarding/revenge-board.jpg',
    imageLayout: 'stack',
    images: [],
    sections: [
      {
        id: 'revenge-knows-nothing',
        title: 'Revenge Knows Nothing',
        subtitle: 'GreenTree Productions · 2021 · Animated Short · Doha + Bahrain',
        body:
          "Collaborated with GreenTree Productions on the screenwriting and full storyboarding of 'Revenge Knows Nothing' — a creative story about injustice and how violence begets violence, told through the eyes of an elephant family. A project dear to me that delivers a difficult perspective in a form that welcomes every age. Co-written with Abdulla Janahi and co-directed by Abdulla Janahi and Abdulaziz Khanbabi. The finished animated short is available on YouTube.",
        imageLayout: 'stack',
        images: [
          '/images/projects/storyboarding/revenge-board.jpg',
        ],
      },
      {
        id: 'edge-advert-boards',
        title: 'Storyboards for Advert Pitch',
        subtitle: 'Edge Pictures · 2017 · Tourism & Advertising · Doha + Bahrain',
        body:
          "At Edge Pictures I produced storyboards for a range of advertisement pitches — from captivating narratives to dynamic visuals, each board bringing ideas to life and playing a crucial role in the pitch and production process. Emphasis on compelling shot design, location scouting implications, and clear staging for seamless execution on set.",
        imageLayout: 'stack',
        images: [
          '/images/projects/storyboarding/edge-boards.jpg',
        ],
      },
    ],
    link: 'https://youtu.be/rOqSbpTXQ1I?si=mACgeG6HjDaenx9L',
    linkLabel: 'Watch Revenge Knows Nothing',
    websiteUrl: 'https://youtu.be/rOqSbpTXQ1I?si=mACgeG6HjDaenx9L',
    websiteLabel: 'Watch Revenge Knows Nothing',
    next: 'illustrations',
  },

  {
    id: 'illustrations',
    num: '18',
    badge: '',
    title: 'Illustrations',
    client: 'Personal · Commissioned',
    category: 'Illustration',
    categories: ['Illustration'],
    year: '2016–Present',
    role: 'Illustrator',
    tools: ['Procreate', 'Illustrator', 'Photoshop'],
    tags: ['Illustration', 'Art Direction', 'Editorial Design'],
    teaser: "A rotating selection of personal and commissioned illustration work.",
    overview:
      "A rotating gallery of illustration work — personal experiments, editorial commissions, and studies. Updated periodically as new pieces are added.",
    brief:
      "Keep a personal drawing practice alongside institutional design work — a space for experiment and pure image-making.",
    approach:
      "Mix of traditional and digital pieces, single-image works and small series. No single house style — the medium and subject drive each piece.",
    outcome:
      "An evolving body of work that feeds back into the rest of the practice.",
    heroImage: '/images/projects/illustrations/img-1.jpg',
    imageLayout: 'masonry',
    masonryColumns: { desktop: 3, mobile: 2 },
    images: [
      '/images/projects/illustrations/img-1.jpg',
      '/images/projects/illustrations/img-2.jpg',
      '/images/projects/illustrations/img-3.jpg',
      '/images/projects/illustrations/img-4.jpg',
      '/images/projects/illustrations/img-5.jpg',
      '/images/projects/illustrations/img-6.jpg',
      '/images/projects/illustrations/img-7.jpg',
      '/images/projects/illustrations/img-8.jpg',
      '/images/projects/illustrations/img-9.jpg',
      '/images/projects/illustrations/img-10.jpg',
      '/images/projects/illustrations/img-11.jpg',
      '/images/projects/illustrations/img-12.jpg',
      '/images/projects/illustrations/img-13.jpg',
      '/images/projects/illustrations/img-14.jpg',
      '/images/projects/illustrations/img-15.jpg',
      '/images/projects/illustrations/img-16.jpg',
      '/images/projects/illustrations/img-17.jpg',
      '/images/projects/illustrations/img-18.jpg',
    ],
    link: 'https://www.behance.net/gallery/35205103/Digital-Illustrations',
    linkLabel: 'View on Behance',
    websiteUrl: 'https://www.behance.net/gallery/35205103/Digital-Illustrations',
    websiteLabel: 'View on Behance',
    next: 'dlf-2026',
  },

];
