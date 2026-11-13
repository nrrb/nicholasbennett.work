// Facts come from design/resumes and Nicholas's own account of his motivations.
// Intentions remain intentions; no invented customer wins or portfolio ownership.
export const profile = {
  name: 'Nicholas Bennett',
  email: 'nicholas@nicholasbennett.work',
  location: 'Baltimore, MD',
  linkedin: 'https://www.linkedin.com/in/nicholasrrbennett/',
  resume: '/resumes/Nicholas_Bennett_CSM_Resume_Nov2026.pdf',
  portrait: '/portrait.jpg',
}
export const meta = {
  title: 'Nicholas Bennett | Customer Success & Customer Advocacy',
  description: 'Customer advocacy, clear communication, and technical depth. Meet Nicholas Bennett, a customer success candidate with 16 years in technical support and software engineering experience.',
}
export const chapters = [
  {
    id: 'support', number: '01',
    company: 'Northwestern University · Kellogg School of Management',
    role: 'Technical support · Faculty Computing Support Lead',
    title: 'Start with the person who needs a hand.',
    paragraphs: [
      'A technical problem arrives in the middle of somebody’s day. They have work to do, and something is standing in the way. My job in support was to understand what was happening, explain it clearly, and help them move forward.',
      'Across 16 years in technical support, I learned how much the human part of that work means to me. At Kellogg, I supported 300 faculty across six campuses. Resolving urgent problems and building relationships were part of the same responsibility.',
    ],
    takeaway: 'Trust starts when someone feels heard and knows what happens next.',
    evidence: '16 years in technical support · 300 faculty across six campuses at Kellogg',
  },
  {
    id: 'kellogg', number: '02', company: 'Kellogg School of Management',
    role: 'Full Stack Developer',
    title: 'Keep listening. There may be a better way.',
    paragraphs: [
      'Supporting people also gave me opportunities to see needs beyond the immediate request. I built a search portal and a student internship-matching tool to address some of those needs.',
      'Later, as a developer, I built applications supporting 1,200 MBA students. The work meant translating stakeholder needs into practical workflows. It gave me another way to help: understand what people are trying to accomplish, then build something they can use.',
    ],
    takeaway: 'Understanding the goal gives a solution its purpose.',
    evidence: 'Applications supporting 1,200 MBA students',
  },
  {
    id: 'pear', number: '03', company: 'Pear Therapeutics',
    role: 'Product Support Engineer',
    title: 'Give a difficult problem somewhere to go.',
    paragraphs: [
      'At Pear, I investigated interface defects in a cloud-based therapy platform. I wrote JavaScript reproduction cases so engineers could investigate the problems people were encountering.',
      'I also created Jira dashboards that made more than 4,000 issues visible and supported prioritization. Clear information helped connect a reported problem to the people who could work on it. That experience is part of how I approach customer advocacy: make the issue understandable and give the next person what they need to act.',
    ],
    takeaway: 'A useful escalation makes it easier for other people to help.',
    evidence: 'Issue reproduction and dashboards exposing 4,000+ issues',
  },
  {
    id: 'strata', number: '04', company: 'Strata Decision Technology',
    role: 'Senior Optimization Consultant',
    title: 'Learn the work the software needs to support.',
    paragraphs: [
      'At Strata, I investigated customer problems in healthcare software using SQL and Excel, along with data integration and configuration. The questions were grounded in the workflows customers needed to carry out.',
      'That is a perspective I want to bring to customer success: learn what a customer needs to accomplish, understand where the software fits, and help them make progress toward that goal.',
    ],
    takeaway: 'Software becomes valuable in the context of somebody’s work.',
    evidence: 'Healthcare software · Customer workflow investigation',
  },
  {
    id: 'cybermaxx', number: '05', company: 'CyberMaxx',
    role: 'Software Engineer · Frontend team',
    title: 'Carry the customer’s voice into the product.',
    paragraphs: [
      'At CyberMaxx, I worked closely with Customer Success to gather customer feedback, accelerate escalations, and turn reported problems into fixes and enhancements. Those relationships helped clarify where I wanted to take my career.',
      'I built customer-facing security dashboards and downloadable historical reports for CyberSight, a portal serving a client base of approximately 400 companies. I also built a MITRE ATT&CK matrix that let customers explore security cases by technique. Each feature gave me a concrete way to make information more accessible to the people using it.',
      'Engineering gave me the technical depth to investigate problems and talk comfortably with the people building the product. I want to bring that understanding closer to the customer, helping them use the software with confidence and advocating for what they need.',
    ],
    takeaway: 'Customer feedback deserves a clear path into the work.',
    evidence: 'Customer Success collaboration · Customer-facing reporting and security workflows',
  },
]
export const strengths = [
  {
    title: 'Listen for the goal.',
    text: 'Get curious about what someone is trying to accomplish. My support and consulting work taught me to pay attention to the workflow around the question.',
    href: '#strata', link: 'Customer workflows at Strata',
  },
  {
    title: 'Make the technical understandable.',
    text: 'Explain the problem in language the person can use. Years of technical support give me a foundation for helping customers feel more capable with software.',
    href: '#support', link: 'Technical support at Kellogg',
  },
  {
    title: 'Advocate across teams.',
    text: 'Make customer needs clear enough for a team to act on. At CyberMaxx, I worked with Customer Success to connect feedback and escalations to product improvements.',
    href: '#cybermaxx', link: 'Customer advocacy at CyberMaxx',
  },
  {
    title: 'Make the next step easier.',
    text: 'Give the next person useful context. At Pear, I made defects reproducible and issues visible so engineering could investigate and prioritize the work.',
    href: '#pear', link: 'Product support at Pear',
  },
]
