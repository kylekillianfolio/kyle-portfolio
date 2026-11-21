# Build brief: Kyle Killian product portfolio

Read this file and `portfolio-content.md` before writing any code.

## Goal
A fast, polished, public portfolio site that shows Kyle as a product leader who builds with AI. The site itself is proof of skill, so the code and the README should be clean enough for a hiring manager to read.

## Stack
- Astro (static output), plain CSS, no UI framework, no tracking scripts
- Deploy on Vercel from a public GitHub repo named `kyle-portfolio`
- Fonts: Space Grotesk (headings), Inter (body) via Google Fonts

## Design system
| Token | Value | Use |
|---|---|---|
| Ground (dark) | `#0E1A2B` | Nav, hero, agent diagram, contact |
| Band | `#13233A` | Impact strip |
| Accent | `#F2A93B` | Eyebrows on dark, buttons, Chief of Staff node |
| Accent text on light | `#8A5300` | Eyebrows and tags on light backgrounds |
| Body ground | `#F6F7F9` | Page background |
| Card | `#FFFFFF`, border `#E2E6EC`, radius 16px | Case studies, principle cards |
| Ink | `#142033` | Body text |
| Muted | `#4A5568` | Secondary text on light |
| Light text on dark | `#F5F7FA` / `#C9D3E0` | Headings / body on dark |

Max content width 1120px. Generous spacing. No gradient washes, no emoji, no stock photos.

## Requirements
- Fully responsive: case-study columns and cards stack on phones; nav wraps.
- Accessible: semantic HTML, WCAG AA contrast, visible focus states, real `<a>` and `<button>` elements, 44px minimum touch targets.
- Lighthouse 95+ on performance, accessibility, best practices and SEO.
- Open Graph and Twitter meta tags with a 1200x630 share image (navy background, tagline, name) so the link previews well on LinkedIn.
- Favicon: a simple amber dot or "KK" monogram on navy.
- The 8-agent diagram is built in HTML/CSS, not an image: Me, then Chief of Staff (amber), then seven specialist cards.
- Put `Kyle_Killian_Resume_Public.pdf` in `/public` and link the Résumé button to it.

## Content rules
- Use the copy in `portfolio-content.md` exactly. Do not invent metrics, employers, tools or claims.
- Do not name Advantive's internal systems (CRM, productivity suite, knowledge base product) anywhere.
- Do not name the independent school product. It stays "a privacy-first hall pass for schools" until launch.
- Do not add a phone number.

## Steps
1. Scaffold the Astro project and components.
2. Build the sections in `portfolio-content.md` order.
3. Run a production build and fix any errors or warnings.
4. Write a README: what the site is, the stack, how to run it locally, and a short "How I built this with Claude Code" section.
5. `git init`, create the public GitHub repo `kyle-portfolio` with `gh`, push.
6. Walk me through importing the repo into Vercel and confirm the live URL.

Explain each step briefly as you go. Ask before anything destructive.
