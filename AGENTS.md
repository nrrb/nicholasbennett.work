# Development and release policy

Nicholas authorized the latest Technical Customer Success design as the sole production homepage on November 15, 2026. The only page is `/`; retired draft routes redirect to it. Do not reintroduce parking pages or alternate versions.

Keep `main` as the canonical branch. Use short-lived feature branches and pull requests for future changes, and delete them after merge. Run `npm run build` before submitting changes. Do not merge or promote future changes without Nicholas’s explicit instruction; this release is authorized. Preserve the manual Vercel production promotion gate.
