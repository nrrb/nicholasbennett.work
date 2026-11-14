<script setup>
import { computed } from 'vue'
import ArrowIcon from '../components/ArrowIcon.vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import { profile, copy } from '../content/story.js'
import { narrative as story, versions } from '../content/versions.js'
const route = useRoute()
const variant = computed(() => Number(route.meta.version) || 1)
useHead(() => ({
  title: `Nicholas Bennett | ${versions[variant.value - 1].name}`,
  meta: [{ name: 'robots', content: 'noindex, nofollow' }, { name: 'description', content: copy.hero.intro }],
}))
</script>

<template>
  <div class="edition" :class="`edition-${variant}`">
    <a class="skip" href="#main">Skip to content</a>
    <div class="review-bar">
      <span>Design studies</span>
      <nav aria-label="Compare versions"><a v-for="version in versions" :key="version.id" :href="`/version${version.id}`" :aria-current="variant === version.id ? 'page' : undefined">{{ version.id }}<span> · {{ version.name }}</span></a></nav>
    </div>
    <div class="page-shell">
      <header class="masthead"><a :href="route.path" class="name">Nicholas Bennett<span class="name-dot">.</span></a><a :href="profile.resume" class="underlined">{{ copy.hero.resume }}</a></header>
      <main id="main">
        <section class="hero" aria-labelledby="headline">
          <div class="hero-text">
            <p class="eyebrow">{{ copy.hero.label }}</p>
            <h1 id="headline">Everything is easier <em>with Nicholas.</em></h1>
            <p class="promise">{{ copy.hero.intro }}</p>
            <div class="hero-actions"><a class="button" :href="`mailto:${profile.email}`">{{ copy.hero.invitation }} <ArrowIcon /></a><a href="#work" class="underlined">See how I help <span aria-hidden="true">↓</span></a></div>
            <p class="experience"><strong>16 years at Kellogg.</strong> Helping people get on with the work that mattered to them.</p>
          </div>
          <figure class="portrait"><img :src="profile.portrait" :srcset="`${profile.portraitSmall} 360w, ${profile.portrait} 720w`" sizes="(max-width: 700px) 280px, 360px" width="720" height="960" alt="Nicholas Bennett smiling" fetchpriority="high" /><figcaption>{{ copy.hero.caption }}<span>{{ profile.location }}</span></figcaption></figure>
        </section>
        <div class="story-flow">
          <section id="why" class="why section" aria-labelledby="why-title">
            <div class="section-heading"><p class="eyebrow">Why Customer Success</p><h2 id="why-title">{{ copy.story.title }}</h2></div>
            <div class="prose"><p>{{ story.introduction }}</p><p>{{ story.direction }}</p></div>
          </section>
          <section id="work" class="work section" aria-labelledby="work-title">
            <div class="section-heading work-heading"><p class="eyebrow">Selected experiences</p><h2 id="work-title">What care looks like<br />in practice.</h2><p class="technical">{{ story.technical }}</p></div>
            <div class="cases">
              <article class="case resolved">
                <p class="eyebrow">01 / Kellogg School of Management</p><h3>{{ story.kellogg.title }}</h3>
                <p>{{ story.kellogg.summary }}</p>
                <blockquote>“{{ story.kellogg.quote }}”</blockquote>
                <p class="result">{{ story.kellogg.result }}</p>
                <details><summary>The follow-through</summary><p>{{ story.kellogg.detail }}</p></details>
              </article>
              <article class="case unfinished">
                <p class="eyebrow">02 / CyberMaxx</p><h3>{{ story.cybermaxx.title }}</h3><p>{{ story.cybermaxx.context }}</p>
                <div class="writing-space"><span class="draft-label">Story to write</span><p>{{ story.cybermaxx.prompt }}</p><p>{{ story.cybermaxx.outcome }}</p></div>
              </article>
            </div>
          </section>
        </div>
        <aside class="personal section" aria-label="Beyond the job title"><p class="eyebrow">The same care, elsewhere</p><p>{{ story.personal }} <a class="underlined" href="https://tinygoose.club/">Meet Tiny Goose Club</a></p></aside>
        <section id="contact" class="contact section" aria-labelledby="contact-title"><p class="eyebrow">Let’s talk</p><h2 id="contact-title">Tell me what you wish were easier for your customers.</h2><p>Let’s talk about how I could help.</p><div class="contact-actions"><a class="button" :href="`mailto:${profile.email}`">{{ copy.hero.invitation }} <ArrowIcon /></a><a class="underlined" :href="profile.resume">{{ copy.hero.resume }}</a><a class="underlined" :href="profile.linkedin">LinkedIn</a></div></section>
      </main>
      <footer><span>Nicholas Bennett · Baltimore, MD</span><a :href="`mailto:${profile.email}`">{{ profile.email }}</a></footer>
    </div>
  </div>
</template>

<style scoped>
.edition { --paper: #f7f3eb; --text: #242a25; --accent: #345745; --rule: #c7ccbf; --muted: #536153; background: var(--paper); color: var(--text); --focus: var(--accent); line-height: 1.65; }
.page-shell { max-width: 1180px; padding: 0 48px; margin: auto; }
.review-bar { display:flex; justify-content:space-between; align-items:center; gap:16px; padding:12px max(24px, calc((100vw - 1084px)/2)); background:#202822; color:#fff; font-size:12px; }
.review-bar nav { display:flex; flex-wrap:wrap; gap:8px; }
.review-bar a { padding:5px 10px; border:1px solid transparent; border-radius:4px; }
.review-bar a[aria-current] { border-color:#b4c7af; background:#354437; }
.skip { position:absolute; left:16px; top:-100px; background:var(--text); color:var(--paper); padding:12px; z-index:5; }
.skip:focus { top:12px; }
.masthead { display:flex; align-items:center; justify-content:space-between; gap:20px; padding:30px 0; border-bottom:1px solid var(--rule); }
.name { font:750 23px var(--font-display); letter-spacing:-.8px; }.name-dot { color:var(--accent); }
.underlined { text-decoration:underline; text-underline-offset:5px; text-decoration-thickness:1px; }
.hero { display:grid; grid-template-columns:1.5fr 1fr; gap:72px; padding:78px 0 68px; align-items:center; }
.eyebrow { font:500 11px/1.8 var(--font-mono); text-transform:uppercase; letter-spacing:.09em; color:var(--muted); margin-bottom:20px; }
h1,h2,h3 { font-family:var(--font-display); font-weight:650; letter-spacing:-.045em; line-height:1.07; margin:0; text-wrap:balance; }
h1 { font-size:clamp(48px,5.6vw,76px); }h1 em { display:block; font-style:normal; color:var(--accent); }
h2 { font-size:clamp(32px,3.5vw,46px); }h3 { font-size:31px; margin-bottom:24px; }
.promise { font-size:19px; line-height:1.65; margin-top:28px; max-width:560px; }
.hero-actions,.contact-actions { display:flex; align-items:center; gap:26px; flex-wrap:wrap; margin-top:30px; }
.button { display:inline-flex; justify-content:space-between; gap:38px; align-items:center; padding:13px 22px; background:var(--accent); color:#fff; border-radius:3px; font-weight:600; }.button:hover { filter:brightness(1.15); }
.experience { margin-top:32px; font-size:13px; color:var(--muted); max-width:350px; }.experience strong { color:var(--text); }
.portrait { margin:0; width:100%; max-width:360px; justify-self:end; }.portrait img { display:block; width:100%; height:auto; aspect-ratio:3/4; object-fit:cover; border-radius:160px 160px 5px 5px; }
figcaption { display:flex; flex-wrap:wrap; justify-content:space-between; gap:4px 14px; font-size:11px; margin-top:12px; }
.section { padding:64px 0; border-top:1px solid var(--rule); }
.why { display:grid; grid-template-columns:1fr 1.25fr; gap:76px; }
.prose p + p { margin-top:20px; }.prose { font-size:17px; }
.work-heading { display:grid; grid-template-columns:1fr 1fr; gap:0 76px; }.work-heading .eyebrow { grid-column:1/-1; }.technical { color:var(--muted); }
.cases { display:grid; grid-template-columns:1.15fr 1fr; gap:48px; margin-top:42px; }.case { padding:32px 0 0; border-top:2px solid var(--accent); }.case p { font-size:16px; }
blockquote { font:italic 28px/1.3 Georgia,serif; margin:28px 0; letter-spacing:-.5px; color:var(--accent); }
details { margin-top:24px; font-size:14px; }summary { cursor:pointer; text-decoration:underline; text-underline-offset:5px; }details p { margin-top:16px; }
.writing-space { border-left:2px solid var(--rule); padding:0 0 0 20px; margin-top:25px; color:var(--muted); }.writing-space p { margin-top:14px; font-style:italic; }.draft-label { font:11px var(--font-mono); text-transform:uppercase; letter-spacing:.09em; }
.personal { display:grid; grid-template-columns:1fr 2fr; gap:60px; }.personal p:last-child { max-width:680px; }.personal a { white-space:normal; }
.contact { padding-bottom:72px; }.contact h2 { max-width:820px; font-size:clamp(38px,4.8vw,62px); }.contact > p:not(.eyebrow) { margin-top:20px; font-size:19px; }
footer { display:flex; justify-content:space-between; gap:20px; border-top:1px solid var(--rule); padding:24px 0; font-size:12px; }
/* Field notes: evidence before biography, with a compact portrait and indexed case rail. */
.edition-2 { --paper:#151e25; --text:#f0f2ed; --accent:#bfdc82; --rule:#46515a; --muted:#bdc7cd; --focus:#bfdc82; }
.edition-2 .review-bar { background:#0d1419; }.edition-2 .button { color:#18231c; }.edition-2 .name-dot { color:#bfdc82; }
.edition-2 .hero { grid-template-columns:1fr 210px; gap:80px; padding:62px 0; }.edition-2 h1 { max-width:850px; font-size:clamp(48px,6vw,80px); }.edition-2 h1 em { display:inline; }
.edition-2 .portrait { align-self:start; }.edition-2 .portrait img { border-radius:4px; aspect-ratio:1; }.edition-2 figcaption { display:block; }.edition-2 figcaption span { display:block; }
.edition-2 .promise { max-width:700px; }.edition-2 .story-flow { display:flex; flex-direction:column; }.edition-2 .work { order:-1; }
.edition-2 .work-heading { grid-template-columns:1fr 1.2fr; }.edition-2 .cases { display:block; margin-top:42px; }.edition-2 .case { display:grid; grid-template-columns:1fr 1.5fr; column-gap:70px; padding:30px 0; border-top:1px solid var(--rule); }
.edition-2 .case > .eyebrow { grid-column:1; }.edition-2 .case h3 { grid-column:1; grid-row:2/5; max-width:320px; }.edition-2 .case > p:not(.eyebrow),.edition-2 .case > blockquote,.edition-2 .case > details,.edition-2 .writing-space { grid-column:2; }.edition-2 .case > p:not(.eyebrow) { margin-bottom:12px; }.edition-2 .case > p:nth-of-type(2) { grid-row:1/3; }
.edition-2 .contact { background:#bfdc82; color:#18231c; padding:44px; margin:16px 0 40px; border:0; }.edition-2 .contact .eyebrow { color:#34432c; }.edition-2 .contact .button { background:#18231c; color:#fff; }
/* Letter: a narrow reading column, quiet typography, and the portrait beside the opening. */
.edition-3 { --paper:#fffaf4; --text:#392c2a; --accent:#90432c; --rule:#d9c6b9; --muted:#745f58; }
.edition-3 .page-shell { max-width:900px; }.edition-3 .review-bar { background:#593c32; }.edition-3 .review-bar a[aria-current] { background:#775348; border-color:#d6b8a6; }
.edition-3 h1,.edition-3 h2,.edition-3 h3 { font-family:Georgia,serif; font-weight:400; letter-spacing:-.04em; }.edition-3 h1 { font-size:clamp(48px,6vw,72px); }.edition-3 h1 em { font-style:italic; }
.edition-3 .hero { grid-template-columns:1fr 170px; gap:40px; padding:64px 0 46px; }.edition-3 .portrait img { border-radius:50% 50% 8px 8px; }.edition-3 .portrait { align-self:start; margin-top:40px; }.edition-3 figcaption span { display:none; }
.edition-3 .promise,.edition-3 .prose,.edition-3 .case p,.edition-3 .personal p:last-child { font-family:Georgia,serif; font-size:19px; line-height:1.8; }
.edition-3 .why,.edition-3 .work-heading,.edition-3 .cases,.edition-3 .personal { display:block; }.edition-3 .section { padding:42px 0; }.edition-3 .section-heading h2 { max-width:680px; }.edition-3 .prose { margin-top:28px; }
.edition-3 .technical { margin-top:24px; max-width:650px; }.edition-3 .cases { margin-top:34px; }.edition-3 .case { padding:30px 0; border-top:1px solid var(--rule); }.edition-3 .case h3 { font-size:34px; }.edition-3 blockquote { font-size:34px; border-left:3px solid var(--accent); padding-left:24px; }
.edition-3 .contact h2 { font-size:48px; }.edition-3 .experience { max-width:450px; }
@media(max-width:700px) {
 .page-shell { padding:0 24px; }.review-bar { padding:12px 16px; }.review-bar > span { display:none; }.review-bar nav { width:100%; justify-content:space-between; gap:0; }.review-bar a { padding:5px; font-size:10px; }
 .masthead { padding:22px 0; }.name { font-size:20px; }.masthead > .underlined { font-size:12px; }
 .hero,.edition-2 .hero,.edition-3 .hero { grid-template-columns:1fr; gap:32px; padding:42px 0; }.hero h1 { font-size:48px; }.portrait,.edition-2 .portrait,.edition-3 .portrait { width:240px; justify-self:start; margin:0; }.edition-2 .portrait { width:160px; }.edition-3 .portrait { width:170px; }
 .why,.work-heading,.cases,.personal,.edition-2 .work-heading,.edition-2 .case { display:block; }.section { padding:40px 0; }.prose,.technical { margin-top:24px; }.cases { margin-top:32px; }.case + .case { margin-top:32px; }
 .personal p:last-child { margin-top:20px; }.edition-2 .contact { padding:28px 22px; }.edition-3 .contact h2 { font-size:38px; }footer { flex-direction:column; gap:8px; overflow-wrap:anywhere; }
 .contact-actions { gap:22px; }.edition-2 .case h3 { max-width:none; }.edition-3 .promise,.edition-3 .prose,.edition-3 .case p { font-size:18px; }
}
</style>
