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
