# Nicholas Bennett · Customer Success

A narrative portfolio focused on customer advocacy, clear communication, and helping people get value from software. Built with Vue 3, Vue Router, Vite, and vite-ssg.

## Development

Use Node.js 24 and run `npm ci`, then `npm run dev`. `npm run build` generates static HTML in `dist/`. `npm run preview` serves that build. The existing optional lint command is `npm run lint`.

## Content and layout

- `src/content/story.js`: profile, metadata, five career chapters, and strengths with supporting links.
- `src/views/LandingView.vue`: the full narrative page, community story, contact section, and responsive layout.
- `src/head.js`: metadata and canonical origin (`https://nicholasbennett.work`).
- `src/styles.css`: shared colors and typography.
- `public/portrait.jpg`: existing approved portrait.
- `public/resumes/`: linked resume PDFs. The Customer Success resume remains the existing November 2026 version.

The old door components and content are retained as unused source history; they are not rendered by any route.

## Routes and hosting

`/`, `/cs`, and `/eng` all prerender the Customer Success story, with `/` as the canonical URL. Existing resume links keep working. `vercel.json` enables clean URLs so `/cs` and `/eng` resolve to their generated HTML rather than returning 404s.

## Copy and evidence

Use `design/resumes/` and Nicholas's own accounts as sources. Preserve actual job titles. Keep approximately 400 client companies distinct from a personally managed book of business. Do not invent retention, expansion, adoption, customer satisfaction, or revenue results. Do not publish CyberMaxx screenshots or private conversations as testimonials.

The current draft uses verified examples and Nicholas's stated motivations. Specific customer anecdotes can deepen the story after Nicholas supplies the situation, his actions, and the observed result. Keep goals and intentions clearly distinct from demonstrated outcomes.
