// All site copy lives here, taken verbatim from portfolio-content.md.
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
  { label: 'AI Builds', href: '#ai-builds' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  eyebrow: 'Agentic AI · Product Leadership · B2B SaaS',
  headline: 'Building AI into manufacturing software, and into how product teams work.',
  bio: "I'm a Senior Product Owner at Advantive with 8+ years in B2B SaaS, digital commerce and fintech. I've led delivery for ~$181M ARR across 5 product families and ~42 engineers in three regions, integrated 3 acquisitions, and I run my own work with an 8-agent Claude team that won a 2026 AI Impact Award.",
  status: 'Open to AI product and product leadership roles · St. Augustine, FL · Remote',
};

export const impact = [
  { value: '~$181M', label: 'ARR led across 5 product families' },
  { value: '~42', label: 'engineers across NA, APAC & EMEA' },
  { value: '8 → 16', label: 'core brands, 3 acquisitions integrated' },
  { value: '12–15 hrs', label: 'saved per week by my agent team' },
  { value: '2x', label: 'throughput on specs and decisions' },
];

export interface WorkCase {
  title: string;
  tag?: string;
  nutshell: string;
  challenge: string;
  actionLabel: 'What I built' | 'What I did';
  action: string;
  results: string; // html
  // Headline result shown large at the top of the card. Uses figures from `results` only.
  highlight: { value: string; label: string };
  // Prototype screenshots rendered from design/prototypes/ (placeholder data only).
  shots?: { name: string; alt: string }[];
  shotsCaption?: string;
}

export const work = {
  eyebrow: 'Work cases',
  heading: 'Four problems, and what changed',
  cases: [
    {
      shots: [
        {
          name: 'command-center',
          alt: 'Command Center prototype: panels for today, blockers, release health, competitive intelligence and a living roadmap, with a strip showing what the agent team did this morning.',
        },
      ],
      shotsCaption: 'The Command Center. Illustrative recreation with placeholder data.',
      highlight: { value: '12–15 hrs', label: 'saved per week' },
      title: 'AI Product Command Center → an 8-agent team',
      tag: '2026 AI Impact Award',
      nutshell:
        'I turned my own product workload into an orchestrated team of Claude agents, then rebuilt it in two months.',
      challenge:
        'One product owner carrying backlogs, releases, competitive tracking and stakeholder updates for global teams in three regions.',
      actionLabel: 'What I built',
      action:
        'A Command Center combining calendar, blockers, release health, competitive intelligence and a living roadmap, kept current by scheduled automation. Then a Chief of Staff agent orchestrating 7 specialists, each with a charter and hand-offs, token-efficient context and a UI for visibility.',
      results:
        "<strong>12–15 hours saved per week.</strong> <strong>2x throughput</strong> on specs and decisions. Recognized with the company's <strong>2026 AI Impact Award</strong>.",
    },
    {
      highlight: { value: 'April 2026', label: 'Advantive ONE launched publicly' },
      title: 'AI for manufacturing quality',
      nutshell:
        'bringing AI insights, agents and predictive intelligence to the InfinityQS and PQ Systems quality (SPC) products.',
      challenge:
        'Quality data spread across product families had to become useful, connected AI capabilities for specialty manufacturers.',
      actionLabel: 'What I did',
      action:
        'Own delivery of AI data insights, workspaces, agents, workflows and predictive intelligence through the Advantive ONE intelligence platform.',
      results:
        'AI agents, workflows and predictive intelligence <strong>shipping to customers</strong> as part of <strong>Advantive ONE</strong>, launched publicly in <strong>April 2026</strong> as a unified intelligence layer across operational, financial and quality data.',
    },
    {
      highlight: { value: '8 → 16', label: 'core brands' },
      title: 'Scaling a portfolio through acquisitions',
      nutshell:
        'helped the portfolio grow from 8 to 16 core brands by making acquired products and teams work as one.',
      challenge:
        'Acquired legacy products arrived with fragmented practices, and new product owners needed to get productive fast.',
      actionLabel: 'What I did',
      action:
        "Product management lead for 3 acquisitions; wrote the company's integration playbook; moved acquired teams to Scrum and products from sustainment to modernization; built a Product Owner Bootcamp.",
      results:
        '<strong>8 → 16 core brands</strong>. <strong>20% faster</strong> product owner ramp-up. Supported a <strong>$219M</strong> billings-based revenue base.',
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
      shotsCaption: 'Student kiosk and teacher dashboard. Illustrative recreation with placeholder data.',
      highlight: { value: 'Phase 1', label: 'built and tested' },
      title: 'A privacy-first hall pass for schools',
      tag: 'Independent product · Pre-launch',
      nutshell:
        "a teacher's idea, taken from concept to a deployed web app, so students can leave class without interrupting it.",
      challenge:
        'Every hall pass pulled a teacher out of instruction, paper logs failed during lockdowns and drills, and schools are wary of vendors holding student data.',
      actionLabel: 'What I built',
      action:
        "A student sign-out kiosk, live staff board, reports and lockdown snapshot, built with Claude, Next.js, Supabase and Vercel. Student names are encrypted in the school's own browser, and the interface adapts by grade band, from picture-and-audio for early readers to a fast flow for high schoolers.",
      results:
        '<strong>Phase 1 built and tested</strong>. A design where the service <strong>stores no readable student data</strong> and holds none of the keys. Launch and go-to-market underway.',
    },
  ] satisfies WorkCase[],
};

export const aiBuilds = {
  eyebrow: 'AI builds',
  heading: 'My 8-agent AI team',
  intro:
    'I set direction. A Chief of Staff agent routes work to seven specialists and assembles what comes back.',
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
    caption: 'How the agents get context, and the guardrails in every prompt. Illustrative recreation with placeholder data.',
  },
  principlesHeading: 'How I build with AI',
  principles: [
    {
      title: 'Charters and hand-offs',
      body: 'Every agent has one job, a written charter and a defined hand-off, so work moves cleanly between them.',
    },
    {
      title: 'The right context',
      body: 'Agents are grounded in a curated knowledge base, and each works from the context it needs and nothing more. Accuracy goes up and token cost comes down.',
    },
    {
      title: 'Connected to live data',
      body: 'Custom MCP connectors I built, plus prebuilt ones, link agents to roadmap, delivery and CRM tools, so they work from live data instead of stale copies.',
    },
    {
      title: 'Guardrails first',
      body: 'Written instructions and guardrails define what each agent can access, what it can change, and when it hands a decision back to me.',
    },
    {
      title: 'Scheduled, not prompted',
      body: 'Skills and scheduled tasks keep the system current without someone having to ask.',
    },
    {
      title: 'Visible by design',
      body: 'A UI shows what each agent is doing, so the output is easy to trust and check.',
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
    { company: 'Brightway Insurance', title: 'Technology Product Manager', dates: '2021 – 2022' },
    { company: 'Web.com Group', title: 'Product Manager, Domains', dates: '2019 – 2020' },
    {
      company: 'TIAA Bank',
      title: 'Product Manager, Debit Card & World Markets',
      dates: '2018 – 2019',
    },
    {
      company: 'TIAA · First Citizens Bank',
      title: 'Institutional consulting and financial services leadership',
      dates: '2005 – 2018',
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
  body: "I'm looking for AI product and product leadership roles where AI strategy meets real delivery. Remote, or based in Northeast Florida.",
  footer: 'This site was designed and built with Claude Code.',
  footerAside:
    "Honestly, I'm not sure which Claude license I use more. My agent team and Command Center run on my work one; this site and my hall pass app were built on my personal one.",
};
