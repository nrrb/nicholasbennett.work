# Nicholas Bennett · Customer Success portfolio

The current brief supersedes the old Two Doors design: the site is entirely focused on Customer Success. Build an encouraging personal narrative grounded in real work, with customer advocacy and software value as the central themes. Engineering is supporting evidence of technical depth. Preserve accurate job titles.

## Stack and content

Vue 3 with script setup, Vue Router, Vite, vite-ssg, and plain CSS. Public narrative copy is in `src/content/story.js`; layout and community copy are in `src/views/LandingView.vue`. The old door content and layouts are unused historical source. The original design mockups describe the superseded two-role site.

Prerender `/`, `/cs`, and `/eng` with the same Customer Success page and canonical `/`. Preserve old resume links. Vercel clean URLs must resolve generated pages.

## Design

Preserve Bricolage Grotesque headlines, Instrument Sans body text, lavender ground, deep purple ink, and orange accent. Use a responsive, scrolling, chapter-based page with a clear opening and contact section. Orange is a fill, not text on the light background. Keep text readable, visible focus indicators, at least 44px action targets, a skip link, semantic headings, and reduced-motion support. Never clip content to a fixed screen height.

## Evidence and voice

Use facts from `design/resumes/` and Nicholas's own accounts. CyberMaxx title: Software Engineer on the frontend team, with Python/SQL supporting frontend work. The client base of approximately 400 companies was served by the portal; it was not his personally managed portfolio. No CyberMaxx screenshots may be shown. Do not invent testimonials or business results. Nicholas has not yet held a formal CSM position. Goals for customer success and Tiny Goose Club must remain goals where outcomes are unmeasured.

Plain, specific, warm first-person writing. Avoid em dashes and canned branding language. A fairy-tale-like feeling should come from a hopeful, coherent arc grounded in facts. Do not invent scenes, dialogue, customer incidents, or outcomes. Ask for real anecdotes when needed.

## Verification

Run `npm run build` after changes. Verify prerendered metadata, root and legacy routes, anchor targets, local assets, and contact/resume links. Visually inspect layout when browser preview is available. Run lint only when requested.
