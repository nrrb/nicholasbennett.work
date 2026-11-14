// All door copy lives here. Numbers come from the two resumes in design/resumes/.
// Headlines are drafts to rewrite. Links marked TODO need real destinations.

export const person = {
  name: 'Nicholas Bennett',
  location: 'Baltimore, MD',
  email: 'nicholas@nicholasbennett.work',
  status: 'Open to full-time',
  question: 'What are you hiring for?',
  portrait: '/portrait-small.webp',
  github: 'https://github.com/nrrb',
  linkedin: 'https://www.linkedin.com/in/nicholasrrbennett/',
  employers: [
    'CyberMaxx',
    'Strata Decision Technology',
    'Pear Therapeutics',
    'Kellogg School of Management',
  ],
}

export const doors = {
  cs: {
    path: '/cs',
    theme: 'cs',
    audience: 'For Customer Success leaders',
    title: 'Customer Success',
    teaser:
      '16 years of technical support, plus security software built alongside a Customer Success team.',
    cta: 'See the proof',
    label: 'Customer Success',
    headline:
      "I explain the technical problem in my audience's language, then own it until it's fixed.",
    introVideo: null, // TODO: URL of the 30 to 45 second intro; hide the button while null
    stats: [
      { value: '16 yrs', label: 'in technical support' },
      { value: '~400', label: 'client companies on the portal I built for' },
      { value: '300', label: 'faculty supported across six campuses' },
      { value: '3 SIEMs', label: 'Elastic, Devo, AlienVault USM' },
    ],
    proofLabel: 'Proof',
    proof: [
      {
        title: 'Escalations at CyberMaxx',
        text: 'Turned client feedback from CSMs into fixes shipped weekly, on customer-facing CyberSight product and backend data integration feeding it.',
        href: null, // TODO: short case study page
        image: '/cybermaxx-cybersight.png',
      },
      {
        title: 'Tiny Goose Club',
        text: 'A biweekly public meetup I organize and host for fellow creatives.',
        href: 'https://tinygoose.club/',
        video: '/tinygooseclub-animated.webm',
      },
      {
        title: 'Medium Talk',
        text: 'An app serving conversation starters for a public picnic I held in Baltimore in 2025.',
        href: 'https://mediumtalk.org/',
        image: '/medium-talk-fan.png',
      },
    ],
    actions: [
      { label: 'Email Nicholas', kind: 'email', primary: true },
      { label: 'Resume', kind: 'resume', href: '/resumes/Nicholas_Bennett_CSM_Resume_Nov2026.pdf' },
    ],
    switchTo: { label: 'Frontend Engineering view', prompt: 'Hiring an engineer?', path: '/eng' },
    contactExtra: 'Baltimore, MD',
    meta: {
      title: 'Nicholas Bennett | Customer Success',
      description:
        'Customer Success candidate with 16 years in technical support and hands-on experience building managed security software. Baltimore, MD.',
    },
  },

  eng: {
    path: '/eng',
    theme: 'eng',
    audience: 'For engineering managers',
    title: 'Frontend Engineering',
    teaser:
      'Vue 3 interfaces for production cybersecurity management software, shipped weekly.',
    cta: 'See the work',
    label: 'Frontend engineering',
    stack: ['Vue 3', 'React Native', 'React', 'Python and SQL as needed'],
    headline:
      'I build the interfaces customers use, and I can follow a bug all the way down to fix it.',
    introVideo: null,
    stats: [
      { value: '~125', label: 'Jira items delivered on an eight-person team' },
      { value: '~6 apps', label: 'migrated from Django templates to Vue' },
      { value: '3 SIEMs', label: 'rule manager interfaces I built' },
      { value: 'Weekly', label: 'production releases, tested with Playwright' },
    ],
    proofLabel: 'Live projects',
    // CyberMaxx work is carried by the stats above; no screenshots of it may be shown.
    proof: [
      {
        title: 'Tiny Goose Club',
        text: 'The custom website for the biweekly public meetup I organize and host for fellow creatives, built with Vue 3. Entirely client-side.',
        href: 'https://tinygoose.club/',
        repo: 'https://github.com/nrrb/tinygoose.club',
        video: '/tinygooseclub-animated.webm',
      },
      {
        title: 'Ghost Bass Finder',
        text: 'A tool to detect subsonic frequencies in your music, built with React. Entirely client-side.',
        href: 'https://ghostbassfinder.surge.sh/',
        repo: 'https://github.com/nrrb/ghostbassfinder',
        video: '/ghostbassfinder-animated.webm',
      },
      {
        title: 'Medium Talk',
        text: 'A mobile-first app serving conversation starters for a public picnic I held in Baltimore in 2025, built with Vue 3. Entirely client-side.',
        href: 'https://mediumtalk.org/',
        image: '/medium-talk-fan.png',
      },
    ],
    // Swap-ins: Kellogg Board Fellows Optimizer (https://kbfmatcher.surge.sh/),
    // Poster Slicer (https://posterslicer.surge.sh/), Chat Rabbit Hole (no live URL).
    actions: [
      { label: 'Email Nicholas', kind: 'email', primary: true },
      { label: 'GitHub', kind: 'link', href: 'https://github.com/nrrb' },
      { label: 'Resume', kind: 'resume', href: '/resumes/Nicholas_Bennett_Frontend_Software_Engineer_Resume_Nov2026.pdf' },
    ],
    switchTo: { label: 'Customer Success view', prompt: 'Hiring for Customer Success?', path: '/cs' },
    contactExtra: 'github.com/nrrb',
    meta: {
      title: 'Nicholas Bennett | Frontend Engineer',
      description:
        'Frontend engineer working in Vue 3, with React Native, Python, and SQL experience, and production work in cybersecurity software. Baltimore, MD.',
    },
  },
}

export const landingMeta = {
  title: 'Nicholas Bennett | Customer Success and Frontend Engineering',
  description:
    'Baltimore-based technical professional open to full-time Customer Success and Frontend Engineering roles.',
}
