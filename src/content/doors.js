// All door copy lives here. Numbers come from the two resumes in design/resumes/.
// Headlines are drafts to rewrite. Links marked TODO need real destinations.

export const person = {
  name: 'Nicholas Bennett',
  location: 'Baltimore, MD',
  email: 'nicholas@nicholasbennett.work',
  status: 'Open to full-time',
  question: 'What are you hiring for?',
  portrait: null, // TODO: portrait photo URL, looking at camera
  github: 'https://github.com/nrrb',
  linkedin: 'https://www.linkedin.com/in/nicholasrrbennett/',
  employers: [
    'CyberMaxx',
    'Pear Therapeutics',
    'Kellogg School of Management',
    'Strata Decision Technology',
  ],
}

export const doors = {
  cs: {
    path: '/cs',
    theme: 'cs',
    audience: 'For Customer Success leaders',
    title: 'Customer Success',
    teaser:
      '16 years of technical support, plus security software built alongside a CS team.',
    cta: 'See the proof',
    label: 'Customer Success',
    headline:
      "I explain the technical problem in plain language, then stay until it's fixed.",
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
        text: 'Turned client feedback from CSMs into fixes shipped weekly.',
        href: null, // TODO: short case study page
        image: null, // TODO: photo working with a team
        imageHint: 'photo: you with a team',
      },
      {
        title: 'MITRE ATT&CK Flashcards',
        text: 'A study app I built covering 706 techniques.',
        href: 'https://nrrb.github.io/mitre-flash-cards/',
        image: null, // TODO: app screenshot
        imageHint: 'app screenshot',
      },
      {
        title: 'Tiny Goose Club',
        text: 'A biweekly public meetup I organize and host.',
        href: 'https://tinygoose.club/',
        image: null, // TODO: photo hosting
        imageHint: 'photo: you hosting',
      },
    ],
    actions: [
      { label: 'Email Nicholas', kind: 'email', primary: true },
      { label: 'Résumé', kind: 'resume', href: null }, // TODO: CSM résumé PDF
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
      'Vue 3 interfaces for production security software, shipped weekly.',
    cta: 'See the work',
    label: 'Frontend engineering',
    stack: ['Vue 3', 'React Native', 'Chart.js', 'Playwright', 'Python and SQL as needed'],
    headline:
      'I build the interfaces customers use, and I can follow a bug into the backend.',
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
        title: 'PixelSVG',
        text: 'Pixel editor in TypeScript, Vue 3 and Pinia.',
        href: 'https://pixelsvg.surge.sh/',
        repo: 'https://github.com/nrrb/pixelsvg',
        image: null, // TODO: screenshot
        imageHint: 'app screenshot',
      },
      {
        title: 'MITRE ATT&CK Flashcards',
        text: 'Offline-capable Vue 3 app, 706 techniques.',
        href: 'https://nrrb.github.io/mitre-flash-cards/',
        repo: 'https://github.com/nrrb/mitre-flash-cards',
        image: null, // TODO: screenshot
        imageHint: 'app screenshot',
      },
      {
        title: 'OG Blacman',
        text: 'React site for a musician, desktop and mobile.',
        href: 'https://www.ogblacman.com/',
        repo: 'https://github.com/nrrb/ogblacman',
        image: null, // TODO: screenshot
        imageHint: 'app screenshot',
      },
    ],
    // Swap-ins: Kellogg Board Fellows Optimizer (https://kbfmatcher.surge.sh/),
    // Poster Slicer (https://posterslicer.surge.sh/), Chat Rabbit Hole (no live URL).
    actions: [
      { label: 'Email Nicholas', kind: 'email', primary: true },
      { label: 'GitHub', kind: 'link', href: 'https://github.com/nrrb' },
      { label: 'Résumé', kind: 'resume', href: null }, // TODO: SWE résumé PDF
    ],
    switchTo: { label: 'Customer Success view', prompt: 'Hiring for Customer Success?', path: '/cs' },
    contactExtra: 'github.com/nrrb',
    meta: {
      title: 'Nicholas Bennett | Frontend Engineer',
      description:
        'Frontend engineer working in Vue 3, with React Native, Python and SQL experience, and production work in cybersecurity software. Baltimore, MD.',
    },
  },
}

export const landingMeta = {
  title: 'Nicholas Bennett | Customer Success and Frontend Engineering',
  description:
    'Baltimore-based technical professional open to full-time Customer Success and frontend engineering roles.',
}
