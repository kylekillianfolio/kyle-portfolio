// All site copy lives here. Based on portfolio-content.md, trimmed so each fact appears once
// per view: the big highlight number is not repeated in the results line below it.
// Strings marked `html` contain inline <strong> emphasis only.

export const site = {
  name: 'Kyle Killian',
  title: 'Kyle Killian · Agentic AI · Product Leadership',
  description:
    "Building AI into manufacturing software, and into how product teams work. I'm a Senior Product Owner at Advantive with 8+ years in B2B SaaS, digital commerce and fintech.",
  linkedin: 'https://www.linkedin.com/in/kylekillianmba',
  resume: '/Kyle_Killian_Resume_Public.pdf',
  email: 'kylekillianmba@gmail.com',
};

export const nav = [
  { label: 'Work', href: '#work' },
  { label: 'Agent team', href: '#agent-team' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  eyebrow: 'Agentic AI · Product Leadership · B2B SaaS',
  headline: 'Building AI into manufacturing software, and into how product teams work.',
  // Trimmed for scanning: the impact strip right below carries the ARR, team and acquisition numbers.
  bio: "I'm a Senior Product Owner at Advantive with 8+ years in B2B SaaS, digital commerce and fintech. My AI Command Center earned Advantive's August 2026 AI Impact Award. Two months later I replaced it with an 8-agent Claude team.",
  status: 'Based in St. Augustine, FL',
};

export const impact = [
  { value: '~$181M', label: 'ARR led across 5 product families' },
  { value: '~42', label: 'engineers across NA, APAC & EMEA' },
  { value: '8 → 16', label: 'core brands, 3 acquisitions integrated' },
  { value: '12–15 hrs', label: 'saved per week by my agent team' },
  { value: '2x', label: 'throughput on specs and decisions' },
];

export interface WorkCase {
  tabLabel: string; // short name on the case tab
  title: string;
  tag?: string;
  nutshell: string;
  challenge: string;
  solvedLabel?: string; // defaults to 'How I solved it'
  action: string;
  results: string; // html
  // Headline result shown large at the top of the card. Uses figures from `results` only.
  highlight: { value: string; label: string };
  // Prototype screenshots rendered from design/prototypes/ (placeholder data only).
  shots?: { name: string; alt: string }[];
  shotsCaption?: string;
}

export const work = {
  eyebrow: 'Selected work',
  heading: 'Four problems, and what changed',
  cases: [
    {
      shots: [
        {
          name: 'command-center',
          alt: 'Version 1, the Command Center prototype: panels for today, blockers, release health, competitive intelligence and a living roadmap, with a strip showing what scheduled tasks did this morning.',
        },
      ],
      shotsCaption: "Version 1, the award-winning Command Center I retired. Generic recreation with placeholder data; the real one ran on company systems I can't show.",
      highlight: { value: '12–15 hrs', label: 'saved per week by the agent team' },
      tabLabel: 'My AI workflow',
      title: 'From a Command Center to an 8-agent team',
      tag: 'August 2026 AI Impact Award',
      nutshell:
        'My Command Center won the August 2026 AI Impact Award. Two months later I had retired it for an orchestrated team of Claude agents.',
      challenge:
        'One product owner carrying backlogs, releases, competitive tracking and stakeholder updates for global teams in three regions.',
      action:
        'Version 1 was a Command Center that pulled my artifacts, scheduled tasks and skills into one place: calendar, blockers, release health, competitive intelligence and a living roadmap. It won the award, but pressure-tested against my full workload it took too much upkeep. Within two months I replaced it with version 2: a Chief of Staff agent orchestrating 7 specialists, each with a charter and hand-offs, token-efficient context and a UI for visibility.',
      results:
        '<strong>2x throughput</strong> on specs and decisions.',
    },
    {
      highlight: { value: 'April 2026', label: 'Advantive ONE launched publicly' },
      tabLabel: 'Quality AI',
      title: 'AI for manufacturing quality',
      nutshell:
        'Bringing AI insights, agents and predictive intelligence to the InfinityQS and PQ Systems quality (SPC) products.',
      challenge:
        'Quality data spread across product families had to become useful, connected AI capabilities for specialty manufacturers.',
      action:
        'Own delivery of AI data insights, workspaces, agents, workflows and predictive intelligence through the Advantive ONE intelligence platform.',
      results:
        'AI agents, workflows and predictive intelligence <strong>shipping to customers</strong> as part of <strong>Advantive ONE</strong>, a unified intelligence layer across operational, financial and quality data.',
    },
    {
      highlight: { value: '8 → 16', label: 'core brands' },
      tabLabel: 'Acquisitions',
      title: 'Scaling a portfolio through acquisitions',
      nutshell:
        'Made acquired products and teams work as one.',
      challenge:
        'Acquired legacy products arrived with fragmented practices, and new product owners needed to get productive fast.',
      action:
        "Product management lead for 3 acquisitions; wrote the company's integration playbook; moved acquired teams to Scrum and products from sustainment to modernization; built a Product Owner Bootcamp.",
      results:
        '<strong>20% faster</strong> product owner ramp-up. Supported a <strong>$219M</strong> billings-based revenue base.',
    },
    {
      shots: [
        {
          name: 'hall-pass-kiosk',
          alt: 'Student kiosk prototype: a grid of name tiles to tap, and a countdown ring for a student who is out.',
        },
        {
          name: 'hall-pass-dashboard',
          alt: "Teacher dashboard prototype: who is out right now, pass counts and times, and today's activity, with an Emergency button.",
        },
      ],
      shotsCaption: 'Generic recreation with placeholder names, to protect student privacy before launch.',
      highlight: { value: 'Zero', label: 'readable student data stored' },
      tabLabel: 'Hall pass',
      title: 'A privacy-first hall pass for schools',
      tag: 'Co-founded with my wife · Pre-launch',
      nutshell:
        'Her idea, from 12 years in the classroom; my build. Together we took it from concept to a deployed web app so students can leave class without interrupting it.',
      solvedLabel: 'How we solved it',
      challenge:
        'Every hall pass pulled a teacher out of instruction, paper logs failed during lockdowns and drills, and schools are wary of vendors holding student data.',
      action:
        "A student sign-out kiosk, live staff board, reports and lockdown snapshot, built with Claude, Next.js, Supabase and Vercel. Student names are encrypted in the school's own browser, and the interface adapts by grade band, from picture-and-audio for early readers to a fast flow for high schoolers.",
      results:
        '<strong>Phase 1 built and tested</strong>, and the service holds none of the encryption keys. Launch and go-to-market underway.',
    },
  ] satisfies WorkCase[],
};

export const aiBuilds = {
  eyebrow: 'Agent team',
  heading: 'My 8-agent AI team',
  me: { name: 'Me', role: 'direction & decisions' },
  chief: { name: 'Chief of Staff', role: 'Orchestrates, routes hand-offs, keeps context lean' },
  specialists: [
    { name: 'Customer SME', role: 'Voice of strategic customers' },
    { name: 'Platform SME', role: 'Platform knowledge and fit' },
    { name: 'Competitive Intel', role: 'Market and competitor analysis' },
    { name: 'Feature Writer', role: 'Drafts specs and features' },
    { name: 'Grooming', role: 'Backlog refinement' },
    { name: 'Program Mgmt', role: 'Releases, risks and dependencies' },
    { name: 'Comms', role: 'Stakeholder updates' },
  ],
  contextShot: {
    name: 'agent-guardrails',
    alt: 'Diagram of how the agents get context: files I own, memory that scheduled jobs keep current, and live systems they can only read, feeding every job run. Beside it, five guardrails built into every prompt.',
    caption: "Generic recreation. The real system runs on company systems and data I can't show.",
  },
  principlesHeading: 'Operating principles',
  principles: [
    {
      title: 'Charters and hand-offs',
      body: 'Every agent has one job, a written charter and a defined hand-off, so work moves cleanly between them.',
    },
    {
      title: 'Connected to live data',
      body: 'Custom MCP connectors I built, plus prebuilt ones, link agents to roadmap, delivery and CRM tools, so they work from live data instead of stale copies.',
    },
    {
      title: 'Scheduled, not prompted',
      body: 'Skills and scheduled tasks keep the system current without someone having to ask.',
    },
  ],
};

export const experience = {
  eyebrow: 'Experience',
  heading: "Where I've done it",
  roles: [
    {
      company: 'Advantive',
      title: 'Senior Product Owner · Team Lead, Product Owners · Product Owner',
      dates: '2023 – Present',
    },
    {
      company: 'Brightway Insurance',
      title: 'Technology Product Manager',
      dates: '2021 – 2022',
      impact:
        'Automated manual accounting, underwriting and policy servicing work with RPA, and built a Power BI tool that helped franchisees rewrite policies hit by carrier non-renewals.',
    },
    {
      company: 'Web.com Group',
      title: 'Product Manager, Domains',
      dates: '2019 – 2020',
      impact:
        "Launched AdultBlock, the portfolio's first brand-protection product, and negotiated a 50% reduction in wholesale cost.",
    },
    {
      company: 'TIAA Bank',
      title: 'Product Manager, Debit Card & World Markets',
      dates: '2018 – 2019',
      impact:
        'Moved 50,000+ customers to new card assets during the EverBank-to-TIAA rebrand, and added three new MarketSafe® CD products.',
    },
    {
      company: 'TIAA · First Citizens Bank',
      title: 'Institutional consulting and financial services leadership',
      dates: '2005 – 2018',
      impact:
        "Hit 164–171% of quota leading New York State's Voluntary Defined Contribution rollout, and ranked top 5 statewide at First Citizens.",
    },
  ],
  credentials: [
    'MBA, Gardner-Webb University',
    'SAFe® 6 POPM',
    'CSPO®',
    'Pragmatic Certified Product Manager',
  ],
};

export const contact = {
  heading: "Let's talk",
  body: "Want to talk agent teams, AI product, or how this site was built? I'm always up for comparing notes.",
  footer: 'This site was designed and built with Claude Code.',
  footerAside:
    "Honestly, I'm not sure which Claude license I use more. My agent team, and the Command Center before it, run on my work one; this site and my hall pass app were built on my personal one.",
};
