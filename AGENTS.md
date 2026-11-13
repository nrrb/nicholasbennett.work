# Development and release policy

Nicholas confirmed that Vercel's Auto-assign Custom Production Domains setting is disabled. Keep that manual promotion gate disabled. Never promote, alias, or otherwise publish a deployment to the production domain without Nicholas's explicit go-live instruction. Never run `vercel --prod` or change production domain settings to bypass the gate.

Work on feature branches and open pull requests into `main`. Automatic Vercel preview builds are authorized; they are for review and must not replace the deployment serving the public domain. Supply the preview URL and the result of the `Site build` check. Do not merge a PR without Nicholas's instruction. Do not enable GitHub auto-merge.

The public domain must keep its parking page until Nicholas authorizes a replacement. Keep `/`, `/cs`, and `/eng` parked in this draft. Use `/dev-preview` for the writing scaffold on local and Vercel preview deployments. Do not put a `/dev-preview` URL on the production domain without explicit authorization.

Run `npm run build` before submitting a change. GitHub Actions runs the same build on pull requests and main. Do not add publishing credentials or deployment commands to CI. Preserve the descriptive writing placeholders until Nicholas supplies or requests finished prose.
