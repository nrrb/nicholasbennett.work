// An authoring scaffold: every editorial block describes what Nicholas will write.
// Identity, employer names, role titles, and functional destinations stay real.
export const profile = {
  name: 'Nicholas Bennett',
  email: 'nicholas@nicholasbennett.work',
  location: 'Baltimore, MD',
  linkedin: 'https://www.linkedin.com/in/nicholasrrbennett/',
  resume: '/resumes/Nicholas_Bennett_CSM_Resume_Nov2026.pdf',
  portrait: '/portrait.webp',
  portraitSmall: '/portrait-small.webp',
}
export const meta = {
  title: 'Nicholas Bennett | Customer Success Writing Scaffold',
  description: 'Your search preview: the customer success role you seek, the value you bring to customers, and one grounded reason to open your story.',
  image: '/portrait-share.jpg',
}
export const copy = {
  hero: {
    label: 'Technical Customer Success · Open to opportunities',
    title: 'Everything is easier with Nicholas.',
    titleSecond: '',
    intro: 'Customers can count on me to take them seriously, care about what they care about, and run alongside them all the way to the finish line.',
    background: "I’m choosing Customer Success because I love helping people accomplish something they were struggling with. Seeing their frustration turn into confidence and delight makes the work meaningful to me.",
    invitation: 'Say hi',
    invitationDetail: 'Tell me what you wish were easier for your customers. Let’s talk about how I could help.',
    resume: 'Read my resume.',
    caption: 'You have my full attention.',
  },
  proof: [
    {value: '16 years', label: 'Helping people across Kellogg get on with the work that mattered to them.'},
    {value: 'Help that fits the person', label: 'I learned what mattered to each person and adapted how I helped. They came back and asked for me.'},
    {value: 'Care before they have to ask', label: 'A small check-in can change someone’s whole experience. I make people feel welcome, whether they want a conversation or a little quiet.'},
    {value: 'Confidence that carries forward', label: 'I want people to leave with understanding they can build on, more confidence in themselves, and the reassurance that they can ask for help.'},
  ],
  story: {
    label: 'An introduction to the thread through your work',
    title: 'The human purpose that gives your career its shape.',
    paragraphs: [
      'The kind of moment that makes work feel worthwhile to you: what you notice in another person, what draws you into helping, and what you hope they feel when the conversation ends.',
      'A bridge into your work history: how that motivation has followed you through different roles, and the question you want the reader to carry into the stories ahead.',
    ],
  },
  human: {
    label: 'The same motivation in a different setting',
    title: 'What your work with people revealed about the work you want.',
    paragraphs: [
      'A moment from driving Uber: a passenger’s need or uncertainty, how you read the situation, and the choice you made to help them feel comfortable. Let a real interaction reveal your attentiveness.',
      'A moment from Trader Joe’s: something you noticed about a customer, how you responded within your role, and what you could observe afterward. Show the care inside an ordinary exchange.',
      'The realization those encounters left with you: why listening and building relationships deserve a larger place in your working life, and how that understanding draws you toward customer success.',
    ],
  },
  community: {
    artwork: 'The feeling you want someone to leave with.',
    artworkCaption: 'A small phrase that holds your community’s promise',
    label: 'Tiny Goose Club · Your role in creating a place to belong',
    title: 'The possibility you wanted to make room for.',
    paragraphs: [
      'Why you started Tiny Goose Club: the kind of creative companionship you wanted for yourself and others, the barriers you noticed, and what an equitable, safe place means to you in practice.',
      'A real choice you have made as a host: how you welcome someone, make participation easier, or respond to a need. Describe what you did and what you observed, leaving room for what you are still learning.',
      'The connection to customer success: what creating this space teaches you about listening, earning trust, and helping someone pursue a goal that belongs to them.',
    ],
    link: 'A link to the community you are building',
  },
  approach: {
    label: 'The strengths your stories have earned the right to name',
    title: 'How your care becomes something someone can rely on.',
    intro: 'A short introduction to how you work: the habits a customer or colleague could expect from you, grounded in the examples above and connected to the value you want to help customers find.',
  },
  contact: {
    label: 'The next chapter you want to write',
    title: 'The future you are inviting someone to build with you.',
    paragraphs: [
      'The role and company you hope to find: the customers you want to serve, the work you want more of, and the convictions you hope to share with the people building the product.',
    ],
    linkedin: 'A link to your LinkedIn profile',
  },
  footer: 'A final human note in your own voice, leaving a little warmth after the story ends.',
}
export const chapters = [
  {
    id: 'support', number: '01', company: 'Northwestern University · Kellogg School of Management',
    role: 'Technical support · Faculty Computing Support Lead',
    title: 'The moment you learned what being dependable feels like to someone else.',
    paragraphs: [
      'A real support encounter at Northwestern or Kellogg: what a person needed to accomplish, what had gone wrong, and the pressure or uncertainty surrounding the technical problem.',
      'How you listened and made the next step understandable. Describe the action you took, the follow-through you provided, and what you actually saw change for that person.',
    ],
    takeaway: 'The lesson about trust you carried forward, expressed as something you learned through helping that person.',
    evidence: 'A verified detail that anchors the story: the people supported, the scope of your responsibility, or an observable result.',
  },
  {
    id: 'kellogg', number: '02', company: 'Kellogg School of Management', role: 'Full Stack Developer',
    title: 'The need you heard beneath the request, and the possibility it opened.',
    paragraphs: [
      'The people and workflow behind a Kellogg application: what they were trying to do, where the existing process became difficult, and how you came to understand the need.',
      'The choices you made with stakeholders and the usable result you built together. Describe what the software enabled, and separate the outcome you observed from the benefit you hoped it would bring.',
    ],
    takeaway: 'What this experience taught you about discovering a goal before choosing a solution.',
    evidence: 'A confirmed application, audience, or workflow that gives the reader something concrete to remember.',
  },
  {
    id: 'pear', number: '03', company: 'Pear Therapeutics', role: 'Product Support Engineer',
    title: 'The care involved in making someone’s problem understandable to the next person.',
    paragraphs: [
      'An actual issue at Pear: how it surfaced, who was affected, and what another team needed to understand before they could investigate.',
      'How you turned the issue into reproducible evidence or useful visibility. Explain your contribution to the handoff and what happened next, naming only the outcome you can substantiate.',
    ],
    takeaway: 'The lesson about advocacy and clear communication that this experience left with you.',
    evidence: 'A verified reproduction case, dashboard, or scope detail that supports the account without overstating your impact.',
  },
  {
    id: 'strata', number: '04', company: 'Strata Decision Technology', role: 'Senior Optimization Consultant',
    title: 'The work behind the software, and how you learned to see it through a customer’s eyes.',
    paragraphs: [
      'A specific customer workflow you investigated at Strata: the task the software needed to support, the obstacle you encountered, and the questions that helped you understand it.',
      'The investigation or configuration work you contributed and what it revealed. Keep the account proportionate to your involvement, including an observed result or an insight you carried forward.',
    ],
    takeaway: 'What you learned about connecting a technical question to the work a customer needs to accomplish.',
    evidence: 'A real workflow, investigation, or tool used, with the context that makes the detail relevant.',
  },
  {
    id: 'cybermaxx', number: '05', company: 'CyberMaxx', role: 'Software Engineer · Frontend team',
    title: 'The experience that brought the customer’s voice into focus, and clarified your own direction.',
    paragraphs: [
      'A real collaboration with Customer Success at CyberMaxx: the customer need or escalation, how it reached you, and the questions that made the underlying problem clearer.',
      'How you worked with others to move it forward: the feedback you translated, the fix or feature you contributed, and the customer-facing capability that resulted. Describe your part precisely.',
      'What you discovered about yourself in that work: why advocating for customers and building relationships draws you toward CSM, and how your engineering experience will help you serve them.',
    ],
    takeaway: 'The conviction this experience gave you about the work you want to do next.',
    evidence: 'A confirmed feature or observable outcome. If you use the portal’s client count, distinguish it from a personally managed customer portfolio.',
  },
]
export const strengths = [
  {
    title: 'The curiosity that helps you find the real goal.',
    text: 'Name how you listen and the questions you ask. Connect those habits to a specific moment when understanding someone’s work changed how you approached their problem.',
    href: '#strata', link: 'The story that makes this strength visible',
  },
  {
    title: 'The clarity that helps someone feel more capable.',
    text: 'Describe how you adapt an explanation to the person in front of you, and what you look for to know they understand. Ground the strength in your support experience.',
    href: '#support', link: 'The support experience behind this strength',
  },
  {
    title: 'The advocacy that carries a customer’s need forward.',
    text: 'Describe how you make a customer’s problem clear and actionable across teams. Show how you balance persistence with respect for the colleagues helping you resolve it.',
    href: '#cybermaxx', link: 'The collaboration that demonstrates this strength',
  },
  {
    title: 'The follow-through that makes help dependable.',
    text: 'Describe how you preserve context and make the next action easier. Use a real example to show what ownership looks like within your responsibility.',
    href: '#pear', link: 'The handoff that gives this strength substance',
  },
]
