<script setup>
import { useHead } from '@unhead/vue'
import '../styles/customer-success.css'

const contact = {
  email: 'nicholas@nicholasbennett.work',
  linkedin: 'https://www.linkedin.com/in/nicholasrrbennett/',
  github: 'https://github.com/nrrb',
  resume: '/resumes/Nicholas_Bennett_CSM_Resume_Nov2026.pdf',
}
const navigation = [
  { label: 'About', id: 'about' },
  { label: 'Case Studies', id: 'case-studies' },
  { label: 'Approach', id: 'approach' },
  { label: 'Contact', id: 'contact' },
]
const metrics = [
  { value: 'Nearly two decades', label: 'Helping customers succeed', detail: 'Customer-facing experience spanning technical support, software, retail, and service.' },
  { value: 'Hundreds', label: 'Organizations served by CyberMaxx', detail: 'Built customer-facing software at an MSSP serving hundreds of organizations.' },
  { value: 'Thousands of people', label: 'Different roles. Individual attention.', detail: 'Supported 300 faculty, 400 staff, and thousands of MBA and PhD students over the years at Kellogg.' },
]
const cases = [
  {
    number: '01', category: 'Customer reporting', title: 'Make the value of email security visible.', product: 'CyberSight · Sublime MDR for Email',
    challenge: 'Customers needed a usable view of their email-security data, including historical reports they could take into conversations with their own stakeholders.',
    intervention: 'I owned the reporting integration from nightly API retrieval and internal endpoints to interactive dashboards and downloadable PDF reports. I also investigated reporting defects across the frontend and backend.',
    outcome: 'Customers could review email-security activity in the portal and download historical reports. That gave Customer Success a concrete way to help customers understand and communicate the service they were receiving.',
    tags: ['API integration', 'Customer-facing reporting', 'Stakeholder communication'],
  },
  {
    number: '02', category: 'Product usability', title: 'Help customers find the security cases that matter.', product: 'CyberSight · MITRE ATT&CK',
    challenge: 'Customers reviewing security cases needed a way to focus on particular adversary techniques and sub-techniques, rather than work through an undifferentiated set of cases.',
    intervention: 'I built an interactive MITRE ATT&CK matrix with responsive technique and sub-technique filtering. In related reporting work, I investigated scan and pipeline failures that kept data from reaching customer views.',
    outcome: 'Customers gained a focused way to explore cases through the ATT&CK framework. The filters created a clearer path through the data, giving Customer Success a practical capability to demonstrate and explain.',
    tags: ['MITRE ATT&CK', 'Technical troubleshooting', 'Customer enablement'],
  },
]
const skills = [
  { label: 'Technical fluency', title: 'I can get to the root of it.', description: 'I follow symptoms through APIs, logs, and code, then work with engineering on a clear next step.', badges: ['Cybersecurity & MSSP workflows', 'MITRE ATT&CK', 'REST APIs', 'Python & JavaScript', 'SQL & data investigation', 'Cloud application support', 'Elastic · Devo · AlienVault'] },
  { label: 'Customer enablement', title: 'I make the next step understandable.', description: 'I adapt to the person’s goals and technical comfort, explain the plan, and communicate early when something changes.', badges: ['Executive communication', 'Needs discovery', 'Escalation triage', 'Reproduction & documentation', 'Stakeholder UAT', 'CS–engineering collaboration', 'User education'] },
]
const approach = [
  { title: 'Start with their work.', text: 'For onboarding, I’d start with what the customer needs to accomplish and the obstacles in their way. My support experience taught me that the right solution depends on the person using it.' },
  { title: 'Make help dependable.', text: 'I clarify the issue, agree on a plan, and say when I’ll update them. At CyberMaxx, I worked with Customer Success to translate client feedback and escalations into fixes and enhancements.' },
  { title: 'Build toward lasting value.', text: 'I want customers to understand the software well enough to use it with confidence. Clear reporting and usable workflows give them reasons to keep engaging with the product.' },
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
  meta: [
    { name: 'description', content: 'Technical Customer Success candidate with CyberMaxx engineering experience and 16 years in technical support. Customer advocacy backed by hands-on cybersecurity and SaaS expertise.' },
    { name: 'robots', content: 'noindex, nofollow' },
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
        <a href="/cs" class="text-lg font-bold tracking-tight text-slate-900">Nicholas Bennett<span class="text-electric-600">.</span></a>
        <nav aria-label="Main navigation" class="order-3 flex w-full items-center justify-between gap-4 md:order-none md:w-auto md:gap-7">
          <a v-for="item in navigation" :key="item.id" :href="`#${item.id}`" @click="scrollToSection($event, item.id)" class="inline-flex min-h-11 items-center text-sm font-medium text-slate-600 transition-colors hover:text-electric-700">{{ item.label }}</a>
        </nav>
        <a :href="`mailto:${contact.email}`" class="inline-flex min-h-11 items-center rounded-lg bg-electric-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-electric-700">Get in Touch</a>
      </div>
    </header>
    <main id="main">
      <section aria-labelledby="hero-title" class="mx-auto grid max-w-6xl grid-cols-1 items-center gap-x-12 gap-y-8 px-6 pt-6 pb-16 lg:grid-cols-[1.3fr_1fr] lg:gap-y-0 lg:px-8 lg:py-24">
        <div class="lg:self-end">
          <p class="mb-0 lg:mb-6 inline-flex rounded-full border border-solid border-electric-100 bg-electric-50 px-3 py-2 text-xs font-semibold leading-relaxed text-electric-700 sm:text-sm">Technical Customer Success | B2B SaaS</p>

        </div>
        <figure class="m-0 w-full max-w-md justify-self-center lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:justify-self-end">
          <img src="/portrait.webp" srcset="/portrait-small.webp 360w, /portrait.webp 720w" sizes="(max-width: 496px) calc(100vw - 48px), 448px" width="720" height="960" fetchpriority="high" alt="Nicholas Bennett smiling" class="block aspect-square h-auto w-full rounded-2xl border border-solid border-slate-200 object-cover object-[center_25%] shadow-lg" />
          <figcaption class="mt-4 flex items-center justify-between gap-4 text-xs text-slate-500"><span>You have my full attention.</span><span class="font-medium text-electric-700">Open to opportunities</span></figcaption>
        </figure>
        <div class="lg:col-start-1 lg:row-start-2 lg:self-start">
          <h1 id="hero-title" class="m-0 text-4xl font-semibold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">Technical depth.<br /><span class="text-electric-600">A customer’s advocate.</span></h1>
          <p class="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">I built the security software customers rely on. Now I’m bringing that engineering experience into Customer Success to help people understand the product, overcome obstacles, and thrive with it.</p>
          <div class="mt-8 flex flex-wrap gap-3">
            <a href="#case-studies" @click="scrollToSection($event, 'case-studies')" class="inline-flex min-h-12 items-center gap-3 rounded-lg bg-electric-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-electric-700">View Case Studies <svg aria-hidden="true" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m7 10 5 5 5-5M12 4v11" /></svg></a>
            <a :href="contact.resume" download class="inline-flex min-h-12 items-center rounded-lg border border-solid border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-electric-600 hover:text-electric-700">Download Resume</a>
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
          <p>Nearly two decades of customer-facing work taught me to listen closely and care about what people are trying to accomplish.</p>
          <p>At CyberMaxx, working alongside Customer Success showed me where I wanted to go next. I’m bringing my engineering experience into a role centered on relationships, helping customers overcome obstacles and thrive.</p>
        </div>
      </section>

      <section id="case-studies" tabindex="-1" aria-labelledby="cases-title" class="scroll-mt-40 border-y border-solid border-slate-200 bg-white px-6 py-16 md:scroll-mt-24 lg:px-8 lg:py-24">
        <div class="mx-auto max-w-6xl"><div class="max-w-2xl"><p class="mb-4 text-xs font-bold uppercase tracking-widest text-electric-700">Selected work</p><h2 id="cases-title" class="m-0 text-3xl font-semibold tracking-tight sm:text-4xl">Technical work.<br />Customer-facing value.</h2><p class="mt-5 text-base leading-relaxed text-slate-600">Two examples of making managed security software easier to understand and use. My role in each was Software Engineer, working within the product and engineering team.</p></div>
          <div class="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <article v-for="study in cases" :key="study.number" class="flex flex-col rounded-2xl border border-solid border-slate-200 bg-white p-6 sm:p-8">
              <div class="flex items-center justify-between gap-4"><p class="text-xs font-semibold uppercase tracking-widest text-electric-700">{{ study.category }}</p><span class="text-sm font-medium text-slate-400">{{ study.number }}</span></div>
              <h3 class="mb-3 mt-5 text-2xl font-semibold leading-tight tracking-tight text-slate-900">{{ study.title }}</h3><p class="mb-7 text-xs font-medium text-slate-500">{{ study.product }}</p>
              <dl class="m-0 space-y-6"><div><dt class="text-sm font-semibold text-slate-900">Client Challenge</dt><dd class="m-0 mt-2 text-sm leading-7 text-slate-600">{{ study.challenge }}</dd></div><div><dt class="text-sm font-semibold text-slate-900">Technical Intervention</dt><dd class="m-0 mt-2 text-sm leading-7 text-slate-600">{{ study.intervention }}</dd></div><div class="rounded-xl border border-solid border-electric-100 bg-electric-50 p-5"><dt class="text-sm font-semibold text-electric-700">Business / Retention Outcome</dt><dd class="m-0 mt-2 text-sm leading-7 text-slate-700">{{ study.outcome }}</dd></div></dl>
              <div class="mt-6 flex flex-wrap gap-2"><span v-for="tag in study.tags" :key="tag" class="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">{{ tag }}</span></div>
            </article>
          </div>
          <p class="mt-5 max-w-3xl text-xs leading-relaxed text-slate-500">Outcomes describe capabilities delivered. Retention, adoption, and alert-volume changes were not measured in these examples.</p>
          <article aria-labelledby="pear-title" class="mt-10 grid grid-cols-1 gap-4 border-t border-solid border-slate-200 pt-8 md:grid-cols-[1fr_1.6fr] md:gap-8">
            <div><p class="mb-2 text-xs font-semibold uppercase tracking-widest text-electric-700">Healthcare SaaS</p><h3 id="pear-title" class="m-0 text-lg font-semibold text-slate-900">Pear Therapeutics</h3><p class="mt-1 text-sm text-slate-500">Product Support Engineer</p></div>
            <p class="text-sm leading-7 text-slate-600">I turned technical issues in a cloud-based therapy platform into reproducible cases for engineering. I also built Jira dashboards that made more than 4,000 issues visible for prioritization.</p>
          </article>
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
