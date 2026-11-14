# Nicholas Bennett · Customer Success

Vue 3 portfolio using Vue Router, Vite, and vite-ssg. The production domain currently serves a parking page. The preserved customer success writing scaffold is developed at `/dev-preview`.

## Local development

Use Node.js 24. Run `npm ci`, then `npm run dev`. Open `/dev-preview` on the local server. `npm run build` generates static pages in `dist/`; `npm run preview` serves that build.

## Routes

| Route | Content |
| --- | --- |
| `/` | Parking page |
| `/cs` | Parking page, preserving old resume links |
| `/eng` | Parking page, preserving old resume links |
| `/dev-preview` | Writing scaffold preserved from pre-parking commit c452d61 |

The scaffold has noindex/nofollow metadata. That directive does not make a URL private. Preview access is controlled in Vercel.

## Preview and release workflow

1. Create a feature branch from current `main` and make changes there.
2. Run `npm run build` locally. Push the feature branch and open a pull request into `main`.
3. Vercel builds a Preview Deployment. Open the PR's Vercel preview URL and append `/dev-preview` to review the draft. The public domain continues serving its current deployment.
4. GitHub Actions runs the `Site build` check. Review both the changes and the rendered site. Merge only when Nicholas authorizes the merge.
5. A merge into `main` creates a staged production deployment because Vercel's **Auto-assign Custom Production Domains** setting is disabled. Inspect its deployment URL before releasing. Do not change this setting.
6. Only after Nicholas explicitly authorizes going live, use Vercel's Promote action for the reviewed staged production deployment. Verify the public domain afterward.

CI contains no Vercel credentials or deploy commands. Do not run `vercel --prod`, assign domains, enable auto-merge, or change the promotion setting to bypass the release gate.

### Vercel setup

Nicholas confirmed automatic production-domain assignment is disabled. `vercel.json` enables Git builds so feature branches receive previews and main receives staged builds. The manual production gate is a Vercel project setting, not a repository setting. Keep production tracking `main`.

### GitHub protection setup

After `Site build` has run, protect `main` with a branch rule/ruleset:

- Require a pull request before merging; for solo work, do not require another person's approval.
- Require the `Site build` status check to pass. Select the actual completed check by that name.
- Require the branch to be up to date before merging.
- Prevent bypassing the rule, including by administrators where available.
- Keep force pushes, branch deletion, and automatic merging disabled.

Review the Vercel preview before each merge. GitHub's check confirms the build; a successful build is not a visual or editorial review.

## Editing

- `src/content/story.js`: every editorial placeholder, profile, metadata, and career story prompt.
- `src/views/LandingView.vue`: writing-scaffold layout.
- `src/views/ParkingView.vue`: public parking page.
- `src/main.js`: route assignments.
- `src/head.js`: canonical URLs and social metadata.
- `src/styles.css`: brand tokens and global styles.
- `public/`: existing portrait, resume PDFs, and other assets.

The unused two-door components and original design mockups are historical source. Preserve actual job titles and factual distinctions. Do not invent customer outcomes or testimonials, or publish CyberMaxx screenshots. Keep the self-descriptive, evocative placeholders until Nicholas supplies or requests finished copy.

### Narrative design studies

Preview-only routes `/version1`, `/version2`, and `/version3` compare editorial, evidence-first, and personal-letter presentations of the shorter Customer Success narrative. They share copy in `src/content/versions.js` and a responsive view in `src/views/VersionView.vue`. All three are marked noindex/nofollow. The CyberMaxx case retains explicit writing prompts until a concrete customer outcome is supplied. `/dev-preview` preserves the earlier full scaffold. Production routes remain parked; promotion still requires explicit authorization.

### Technical Customer Success profile (`/cs`)

Complete Vue 3 component: `src/views/CustomerSuccessView.vue`. It includes its copy, semantic navigation, reduced-motion-aware anchor scrolling, optimized portrait, working resume download, and contact links. Tailwind 4 is installed through `@tailwindcss/vite` in `vite.config.js`; the component imports `src/styles/customer-success.css`. The CSS entry scans this component only and omits Preflight to preserve the older pages. For a different app that already imports Tailwind globally, omit that CSS import and retain the template utility classes.

Exact route in the existing ViteSSG/Vue Router configuration (`src/main.js`):

```js
{ path: '/cs', component: () => import('./views/CustomerSuccessView.vue') },
```

Keep the other route entries. ViteSSG constructs Vue Router with `ViteSSG(App, { routes })`; do not add a second router. The homepage remains ParkingView. Required public files are `/portrait.webp`, `/portrait-small.webp`, `/portrait-share.jpg`, and `/resumes/Nicholas_Bennett_CSM_Resume_Nov2026.pdf`.

`npm run build` prerenders `dist/cs.html`. Existing Vercel configuration is sufficient for direct navigation and refresh at `/cs`:

```json
{
  "cleanUrls": true,
  "git": { "deploymentEnabled": true }
}
```

Do not add a catch-all rewrite to index.html for this SSG application: index.html is the parked homepage and each profile route has its own HTML. If adapting this component to a separate, client-only SPA without prerendering, that application may instead need `"rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]`.

Evidence: case studies use the Sublime MDR for Email reporting integration and MITRE ATT&CK case filtering described in `design/resumes/`. Metrics are 16 years of technical support, the portal's approximately 400-company customer base, and three SIEM rule-management interfaces. The portal count is not a personal customer portfolio. Adoption, alert-volume reductions, and retention uplift are not claimed. Onboarding is described as the approach Nicholas would bring to a CSM role.

This route remains noindex/nofollow on the preview branch. Production promotion remains a separate, explicitly authorized step.
