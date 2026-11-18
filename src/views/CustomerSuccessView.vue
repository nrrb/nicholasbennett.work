<script setup>
import { useHead } from '@unhead/vue'
import '../styles/customer-success.css'

const contact = {
  email: 'nicholas@nicholasbennett.work',
  linkedin: 'https://www.linkedin.com/in/nicholasrrbennett/',
  github: 'https://github.com/nrrb',
}
const navigation = [
  { label: 'About', id: 'about' },
  { label: 'Case Studies', id: 'case-studies' },
  { label: 'Approach', id: 'approach' },
  { label: 'Contact', id: 'contact' },
]
const metrics = [
  { value: 'Nearly two decades', label: 'Helping customers succeed', detail: 'Customer-facing experience spanning technical support, software, retail, and service.' },
  { value: 'Engineering depth', label: 'Customer advocacy backed by technical fluency', detail: 'Hands-on experience building software, tracing problems through code and data, and working with engineering to resolve them.' },
  { value: 'Thousands of people', label: 'Different roles. Individual attention.', detail: 'Supported 300 faculty, 400 staff, and thousands of MBA and PhD students over the years at Kellogg.' },
]
const cases = [
  {
    number: '01', category: 'Proactive problem solving', title: 'Two reported issues. A much bigger responsibility.', product: 'CyberMaxx · Software Engineer',
    challenge: 'Two customers were missing historical reports. My investigation showed the same issue affected more than 300 client accounts, including customers who had not reported it.',
    intervention: 'I traced the failures to migration metadata and backend code, built the database and Python/Django fixes, and coordinated their release. I kept Customer Success informed of the scope, timing, and verification plan.',
    outcome: 'Three months of missing reports were restored. I verified the recovery with SQL and customer-portal checks, then closed the loop with the CS manager and the CSMs who raised the issues.',
    tags: ['Customer advocacy', 'SQL & Python', 'Proactive communication'],
  },
  {
    number: '02', category: 'Relationship recovery', title: 'Resolve the problem. Restore the trust.', product: 'Kellogg School of Management · Technical Support',
    challenge: 'A professor was exasperated by a recurring Outlook problem. Previous fixes had not lasted. I traced it to a failing hard drive, putting important work at risk.',
    intervention: 'Before explaining the bad news, I assembled a recovery plan. I coordinated a loaner, specialist data recovery, and updates through resolution, then set up a replacement laptop with automatic backups and a more reliable address book.',
    outcome: 'Her data was recovered, and she returned to work with stronger safeguards. She began requesting me by name and praising our team. Colleagues trusted me with more sensitive cases and VIP support.',
    tags: ['Escalation ownership', 'Calm communication', 'Lasting relationships'],
  },
  {
    number: '03', category: 'Workflow improvement', title: 'Less administration. Fair matching.', product: 'Kellogg School of Management · Board Fellows Internship Matcher', wide: true,
    challenge: 'The Board Fellows program needed a fair way to match MBA students to corporate board internships based on their ranked preferences.',
    intervention: 'I built the Board Fellows Internship Matcher web app to process student preferences and handle the matching process.',
    outcome: 'The app saved an administrator days of work each year while supporting fair matching based on students’ ranked preferences.',
    tags: ['Process improvement', 'Web application development', 'Fair matching'],
  },
]
const skills = [
  { label: 'Technical fluency', title: 'I can get to the root of it.', description: 'I follow symptoms through APIs, logs, and code, then work with engineering on a clear next step.', badges: ['Cybersecurity & SaaS', 'API troubleshooting', 'Python & JavaScript', 'SQL & data investigation', 'AWS & Linux', 'Salesforce investigation', 'ServiceNow implementation'] },
  { label: 'Customer enablement', title: 'I make the next step understandable.', description: 'I adapt to the person’s goals and technical comfort, explain the plan, and communicate early when something changes.', badges: ['Stakeholder communication', 'Needs discovery', 'Escalation coordination', 'Reproduction & documentation', 'Customer validation', 'CS–engineering collaboration', 'User education'] },
  { label: 'AI tools and integration', title: 'I build with AI.', description: 'Extensive professional and personal experience with Claude Code and OpenAI Codex, plus hands-on experience integrating AI APIs into applications.', badges: ['Claude Code', 'OpenAI Codex', 'AI API integration', 'Rapid prototyping'] },
  { label: 'Research data', title: 'Make complex data usable.', description: 'At Northwestern’s SONIC research lab, I partnered with a postdoctoral researcher on an ETL pipeline for hundreds of millions of Chinese MMORPG records. I resolved Chinese character-encoding issues while processing a terabyte-scale database into formats researchers could use.', badges: ['ETL pipelines', 'Character encoding', 'Terabyte-scale data'] },
]
const approach = [
  { title: 'Start with their work.', text: 'At Kellogg, I helped three faculty considering a $20K workstation find a better fit in AWS research computing. I started with their research needs, then worked with specialists to support their move.' },
  { title: 'Make help dependable.', text: 'I explain the plan and give a realistic update time. At Pear, I kept watching tickets after they moved to engineering so I could follow through with Patient Services instead of losing track at the handoff.' },
  { title: 'Build toward lasting value.', text: 'At Hoy Chicago, I worked alongside editorial staff to build and teach new publishing workflows. At Strata, I asked customers to validate completed changes so we knew whether the solution worked for them.' },
]
function scrollToSection(event, id) {
  // Retain normal anchor behavior for modified clicks and non-JavaScript browsing.
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
  const target = document.getElementById(id)
  if (!target) return
  event.preventDefault()
  window.history.replaceState(window.history.state, '', `#${id}`)
  target.focus({ preventScroll: true })
  target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' })
}
useHead({
  title: 'Nicholas Bennett | Technical Customer Success',
  link: [{ rel: 'canonical', href: 'https://nicholasbennett.work/' }],
  meta: [
    { name: 'description', content: 'Nicholas Bennett brings nearly two decades of customer-facing experience and software engineering depth to Technical Customer Success. Explore examples of advocacy, problem solving, and follow-through.' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Nicholas Bennett | Technical Customer Success' },
    { property: 'og:image', content: 'https://nicholasbennett.work/portrait-share.jpg' },
  ],
})
</script>

<template>
  <div class="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased [--focus:var(--color-electric-600)]">
    <a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:p-4 focus:text-electric-700">Skip to content</a>
    <header class="sticky top-0 z-30 border-b border-solid border-slate-200 bg-white/80 backdrop-blur-md">
      <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-4 lg:px-8">
        <a href="/" class="text-lg font-bold tracking-tight text-slate-900">Nicholas Bennett<span class="text-electric-600">.</span></a>
        <nav aria-label="Main navigation" class="order-3 flex w-full items-center justify-between gap-4 md:order-none md:w-auto md:gap-7">
          <a v-for="item in navigation" :key="item.id" :href="`#${item.id}`" @click="scrollToSection($event, item.id)" class="inline-flex min-h-11 items-center text-sm font-medium text-slate-600 transition-colors hover:text-electric-700">{{ item.label }}</a>
        </nav>
        <a :href="`mailto:${contact.email}`" class="inline-flex min-h-11 items-center rounded-lg bg-electric-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-electric-700">Get in Touch</a>
      </div>
    </header>
    <main id="main">
      <section aria-labelledby="hero-title" class="mx-auto grid max-w-6xl grid-cols-1 items-center gap-x-12 gap-y-8 px-6 pt-6 pb-16 lg:grid-cols-[1.3fr_1fr] lg:gap-y-0 lg:px-8 lg:py-24">
        <div class="lg:self-end">
          <p class="mb-0 lg:mb-6 inline-flex rounded-full border border-solid border-electric-100 bg-electric-50 px-3 py-2 text-xs font-semibold leading-relaxed text-electric-700 sm:text-sm">Technical Customer Success | SaaS & Cybersecurity</p>

        </div>
        <figure class="m-0 w-full max-w-md justify-self-center lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:justify-self-end">
          <img src="/portrait.webp" srcset="/portrait-small.webp 360w, /portrait.webp 720w" sizes="(max-width: 496px) calc(100vw - 48px), 448px" width="720" height="960" fetchpriority="high" alt="Nicholas Bennett smiling" class="block aspect-square h-auto w-full rounded-2xl border border-solid border-slate-200 object-cover object-[center_25%] shadow-lg" />
          <figcaption class="mt-4 flex items-center justify-between gap-4 text-xs text-slate-500"><span>You have my full attention.</span><span class="font-medium text-electric-700">Open to opportunities</span></figcaption>
        </figure>
        <div class="lg:col-start-1 lg:row-start-2 lg:self-start">
          <h1 id="hero-title" class="m-0 text-4xl font-semibold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">Technical depth.<br /><span class="text-electric-600">A customer’s advocate.</span></h1>
          <p class="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">I’ve built customer-facing software and helped people through the moments when technology lets them down. Now I’m bringing that engineering depth into Customer Success to help customers understand the product, overcome obstacles, and thrive with it.</p>
          <div class="mt-8 flex flex-wrap gap-3">
            <a href="#case-studies" @click="scrollToSection($event, 'case-studies')" class="inline-flex min-h-12 items-center gap-3 rounded-lg bg-electric-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-electric-700">View Case Studies <svg aria-hidden="true" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m7 10 5 5 5-5M12 4v11" /></svg></a>
          </div>
          <p class="mt-6 text-sm text-slate-500">Former Software Engineer, CyberMaxx · Baltimore, MD</p>
        </div>

      </section>

      <section aria-label="Experience and delivery at a glance" class="mx-auto max-w-6xl px-6 lg:px-8">
        <div class="grid grid-cols-1 overflow-hidden rounded-2xl border border-solid border-slate-200 bg-white shadow-sm md:grid-cols-3">
          <div v-for="(metric, index) in metrics" :key="metric.value" class="p-7 lg:p-8" :class="index > 0 ? 'border-t border-solid border-slate-200 md:border-t-0 md:border-l' : ''">
            <p class="text-4xl font-semibold tracking-tight text-electric-600">{{ metric.value }}</p><h2 class="mb-2 mt-3 text-base font-semibold text-slate-900">{{ metric.label }}</h2><p class="text-sm leading-relaxed text-slate-600">{{ metric.detail }}</p>
          </div>
        </div>
      </section>

      <section id="about" tabindex="-1" aria-labelledby="about-title" class="mx-auto grid max-w-6xl scroll-mt-40 grid-cols-1 gap-8 px-6 py-16 md:scroll-mt-24 lg:grid-cols-[1fr_1.4fr] lg:gap-20 lg:px-8 lg:py-24">
        <div><p class="mb-4 text-xs font-bold uppercase tracking-widest text-electric-700">About</p><h2 id="about-title" class="m-0 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">The work starts with<br />the person using it.</h2></div>
        <div class="flex flex-col gap-6 text-base leading-relaxed text-slate-600">
          <p>I put myself in the customer’s shoes. I want to understand what matters to them, explain the next step in their language, and make it easier to get back to their work.</p>
          <p>Customer Success is a deliberate choice. Empathy is the skill I most enjoy practicing, followed by problem solving. I want to bring both to lasting customer relationships, backed by the technical depth to work closely with engineering.</p>
          <p>I don’t like to sit idle. I’m always spotting inefficiencies, testing ideas, and turning successful experiments into tools people can depend on. When the evidence points toward a better solution, I change direction.</p>
        </div>
      </section>

      <section id="case-studies" tabindex="-1" aria-labelledby="cases-title" class="scroll-mt-40 border-y border-solid border-slate-200 bg-white px-6 py-16 md:scroll-mt-24 lg:px-8 lg:py-24">
        <div class="mx-auto max-w-6xl"><div class="max-w-2xl"><p class="mb-4 text-xs font-bold uppercase tracking-widest text-electric-700">Selected work</p><h2 id="cases-title" class="m-0 text-3xl font-semibold tracking-tight sm:text-4xl">Technical work.<br />Customer-facing value.</h2><p class="mt-5 text-base leading-relaxed text-slate-600">From a reporting defect affecting hundreds of accounts to one person facing a crisis, I take concerns seriously and stay involved through the finish line.</p></div>
          <div class="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <article v-for="study in cases" :key="study.number" class="flex flex-col rounded-2xl border border-solid border-slate-200 bg-white p-6 sm:p-8" :class="study.wide ? 'lg:col-span-2' : ''">
              <div class="flex items-center justify-between gap-4"><p class="text-xs font-semibold uppercase tracking-widest text-electric-700">{{ study.category }}</p><span class="text-sm font-medium text-slate-400">{{ study.number }}</span></div>
              <h3 class="mb-3 mt-5 text-2xl font-semibold leading-tight tracking-tight text-slate-900">{{ study.title }}</h3><p class="mb-7 text-xs font-medium text-slate-500">{{ study.product }}</p>
              <dl class="m-0" :class="study.wide ? 'grid grid-cols-1 gap-6 md:grid-cols-3' : 'space-y-6'"><div><dt class="text-sm font-semibold text-slate-900">The challenge</dt><dd class="m-0 mt-2 text-sm leading-7 text-slate-600">{{ study.challenge }}</dd></div><div><dt class="text-sm font-semibold text-slate-900">What I did</dt><dd class="m-0 mt-2 text-sm leading-7 text-slate-600">{{ study.intervention }}</dd></div><div class="rounded-xl border border-solid border-electric-100 bg-electric-50 p-5"><dt class="text-sm font-semibold text-electric-700">What changed</dt><dd class="m-0 mt-2 text-sm leading-7 text-slate-700">{{ study.outcome }}</dd></div></dl>
              <div class="mt-6 flex flex-wrap gap-2"><span v-for="tag in study.tags" :key="tag" class="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">{{ tag }}</span></div>
            </article>
          </div>
        </div>
      </section>

      <section id="approach" tabindex="-1" aria-labelledby="approach-title" class="mx-auto max-w-6xl scroll-mt-40 px-6 py-16 md:scroll-mt-24 lg:px-8 lg:py-24">
        <p class="mb-4 text-xs font-bold uppercase tracking-widest text-electric-700">Approach</p><h2 id="approach-title" class="m-0 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">Fluent in the system.<br />Attentive to the person.</h2>
        <div class="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2"><article v-for="group in skills" :key="group.label" class="rounded-2xl border border-solid border-slate-200 bg-white p-7 sm:p-8"><p class="text-xs font-semibold uppercase tracking-widest text-electric-700">{{ group.label }}</p><h3 class="mb-3 mt-4 text-xl font-semibold text-slate-900">{{ group.title }}</h3><p class="text-sm leading-relaxed text-slate-600">{{ group.description }}</p><div class="mt-6 flex flex-wrap gap-2"><span v-for="skill in group.badges" :key="skill" class="rounded-full border border-solid border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700">{{ skill }}</span></div></article></div>
        <div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3"><article v-for="(step, index) in approach" :key="step.title"><p class="text-sm font-semibold text-electric-600">0{{ index + 1 }}</p><h3 class="mb-3 mt-3 text-lg font-semibold text-slate-900">{{ step.title }}</h3><p class="text-sm leading-7 text-slate-600">{{ step.text }}</p></article></div>
      </section>

      <section id="contact" tabindex="-1" aria-labelledby="contact-title" class="scroll-mt-40 border-t border-solid border-slate-200 bg-white px-6 py-16 md:scroll-mt-24 lg:px-8 lg:py-24"><div class="mx-auto max-w-3xl text-center"><p class="mb-4 text-xs font-bold uppercase tracking-widest text-electric-700">Let’s talk</p><h2 id="contact-title" class="m-0 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">What do you wish were easier for your customers?</h2><p class="mt-5 text-lg leading-relaxed text-slate-600">I’m looking for a Technical Customer Success role where I can turn deep product understanding into dependable relationships. Let’s talk about how I could help.</p><div class="mt-8 flex flex-wrap items-center justify-center gap-4"><a :href="`mailto:${contact.email}`" class="inline-flex min-h-12 items-center rounded-lg bg-electric-600 px-6 py-3 text-sm font-semibold text-white hover:bg-electric-700">Email Nicholas</a><a :href="contact.linkedin" class="inline-flex min-h-12 items-center px-4 text-sm font-semibold text-slate-700 underline underline-offset-4 hover:text-electric-700">LinkedIn</a><a :href="contact.github" class="inline-flex min-h-12 items-center px-4 text-sm font-semibold text-slate-700 underline underline-offset-4 hover:text-electric-700">GitHub</a></div></div></section>
    </main>
    <footer class="border-t border-solid border-slate-200 bg-white px-6 py-6"><div class="mx-auto flex max-w-6xl flex-col justify-between gap-3 text-xs text-slate-500 sm:flex-row"><span>Nicholas Bennett · Baltimore, MD</span><a :href="`mailto:${contact.email}`" class="break-all hover:text-electric-700">{{ contact.email }}</a></div></footer>
  </div>
</template>
