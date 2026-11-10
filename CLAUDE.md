# Nicholas Bennett portfolio: Two Doors

A portfolio site for a job search aimed at two roles: Customer Success Manager and Frontend Engineer. His CyberMaxx title was Software Engineer, on the frontend team; backend work (Python, SQL) supported his frontend features and is presented as supporting experience, never as full stack ownership. The landing page asks "What are you hiring for?" and routes to one of two doors. Each door shows one headline, four numbers, three proof links, and contact buttons, on a single screen.

## Reference material

- `design/*.dc.html`: the approved mockups. Plain HTML with inline styles. Match their layout, colors, type, and spacing. Ignore the `<x-dc>`, `<helmet>`, and `<script type="text/x-dc">` wrappers and the `support.js` line; those belong to the mockup tool.
  - `Main.dc.html`: phone landing (390×844)
  - `CS.dc.html`: phone Customer Success door
  - `Eng.dc.html`: phone Engineering door
  - `DesktopLanding.dc.html`: desktop landing (1280×800)
  - `DesktopCS.dc.html`: desktop Customer Success door
- `design/resumes/`: both resumes. Every number and claim on the site must match them. Do not invent stats.
- `src/content/doors.js`: all door copy. Edit copy here, not in components.

There is no desktop Engineering mockup. Build it by mirroring `DesktopCS.dc.html` with the Engineering content and the indigo panel.

No CyberMaxx screenshots exist and none may be shown. CyberMaxx proof is text-only. Proof images come from Nicholas's own projects.

The full stack resume in `design/resumes/` is being revised toward a frontend framing. Where it and `doors.js` disagree, `doors.js` wins.

## Stack

- Vue 3 with `<script setup>`, Vite, Vue Router.
- Plain CSS with custom properties. No UI framework.
- Prerender the three routes to static HTML (for example with `vite-ssg`) so link previews and deep links work on static hosts.

## Routes

| Path | View | Purpose |
| --- | --- | --- |
| `/` | `LandingView` | Two doors |
| `/cs` | `DoorView` with `doors.cs` | Linked from the CSM resume |
| `/eng` | `DoorView` with `doors.eng` | Linked from the SWE resume |

Each route needs its own `<title>`, meta description, and Open Graph title, description, and image, present in the prerendered HTML. The landing title must not say "moving into Customer Success"; it has to work for both audiences.

## Components

- `LandingView`: header, name, question, two `DoorCard` links, portrait on the seam.
- `DoorCard`: one colored panel linking to a door.
- `DoorView`: renders either door from its data object. One component for both doors.
- `StatGrid`, `ProofLink`, `ContactBar`, `Portrait`: the pieces of a door.

## Design tokens

```css
:root {
  --ground: #EEEDF3;
  --ink: #1B1830;
  --ink-2: #37334F;      /* secondary text on ground */
  --ink-3: #4A4662;      /* labels on ground */
  --surface: #FFFFFF;    /* proof tiles */
  --cs: #F5A524;         /* Customer Success panel, ink text on top */
  --eng: #2A2396;        /* Engineering panel */
  --on-eng: #F3F1FC;
  --on-eng-2: #E4E1F8;
  --on-eng-3: #D5D1F5;
  --font-display: 'Bricolage Grotesque', system-ui, sans-serif;  /* 800 for headlines and numbers */
  --font-body: 'Instrument Sans', system-ui, sans-serif;         /* 400, 500, 600 */
  --font-mono: 'JetBrains Mono', ui-monospace, monospace;        /* 500, uppercase labels */
}
```

Orange is a fill only. Never set orange text on the light ground; it fails contrast.

## Layout rules

- Mobile-first. Design at 390px wide, then add the desktop layout at about 960px and up.
- One screen per view: at 390×844 and at 1280×800 nothing scrolls. Use `min-height: 100dvh`, not a fixed height, so shorter screens scroll instead of clipping content.
- On desktop the doors sit side by side on the landing page; a door view is a colored left panel (identity, headline, contact) beside a right column (stats, proof, employers).
- Touch targets are at least 44px tall.
- Lay out with flex and grid plus `gap`.

## Accessibility

- Real `<a>` and `<button>` elements. The whole door card is one link.
- Body text contrast at least 4.5:1.
- Visible focus styles on every link and button.
- Respect `prefers-reduced-motion`. Keep motion minimal: at most a short transition between landing and door.

## Content still to supply

- Portrait photo (looking at camera), used on the landing seam and in each door.
- A photo hosting Tiny Goose Club and one working with a team, plus a MITRE ATT&CK Flashcards screenshot, for the desktop proof tiles.
- A 30 to 45 second intro video for the Customer Success door. Hide the button until the video exists.
- Résumé PDFs for both roles.
- Destinations for the proof links marked `TODO` in `doors.js`.

Use clearly labelled placeholders for missing images. Do not use stock photos.

## Copy rules

- Plain, specific sentences. No filler adjectives.
- Headlines in `doors.js` are drafts; Nicholas will rewrite them in his own voice.
- Show the email address as visible text next to the email button.
