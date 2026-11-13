<script setup>
import { useHead } from '@unhead/vue'
import { chapters, copy, meta, profile, strengths } from '../content/story.js'
import { pageHead } from '../head.js'
import ArrowIcon from '../components/ArrowIcon.vue'
useHead(pageHead(meta, '/', 'cs'))
</script>

<template>
  <div class="story-page view">
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header wrap">
      <a class="wordmark" href="/" aria-label="Nicholas Bennett home">Nicholas Bennett.</a>
      <nav aria-label="Main navigation">
        <a href="#story">My story</a><a href="#approach">How I work</a>
        <a class="nav-contact" href="#contact">Let’s talk <ArrowIcon /></a>
      </nav>
    </header>
    <main id="main">
      <section class="hero wrap" aria-labelledby="hero-title">
        <div class="hero-copy">
          <p class="eyebrow">{{ copy.hero.label }}</p>
          <h1 id="hero-title">{{ copy.hero.title }}<br /><span>{{ copy.hero.titleSecond }}</span></h1>
          <p class="hero-intro">{{ copy.hero.intro }}</p>
          <p class="hero-background">{{ copy.hero.background }}</p>
          <div class="actions">
            <a class="button primary" :href="`mailto:${profile.email}`">{{ copy.hero.invitation }} <ArrowIcon /></a>
            <a class="text-link" :href="profile.resume">{{ copy.hero.resume }} <ArrowIcon /></a>
          </div>
        </div>
        <figure class="hero-portrait">
          <div class="portrait-frame"><img :src="profile.portrait" alt="Nicholas Bennett" width="600" height="600" fetchpriority="high" /></div>
          <figcaption><span class="mono-label">{{ copy.hero.caption }}</span><span>{{ profile.location }}</span></figcaption>
        </figure>
      </section>
      <div class="credibility wrap" aria-label="Experience at a glance">
        <p v-for="item in copy.proof" :key="item.value"><strong>{{ item.value }}</strong><span>{{ item.label }}</span></p>
      </div>
      <section id="story" class="story-section wrap" aria-labelledby="story-title">
        <div class="section-intro">
          <p class="eyebrow">{{ copy.story.label }}</p>
          <h2 id="story-title">{{ copy.story.title }}</h2>
          <p v-for="paragraph in copy.story.paragraphs" :key="paragraph">{{ paragraph }}</p>
        </div>
        <div class="chapters">
          <article v-for="chapter in chapters" :id="chapter.id" :key="chapter.id" class="chapter">
            <div class="chapter-heading"><span class="chapter-number" aria-hidden="true">{{ chapter.number }}</span><div><p class="chapter-company">{{ chapter.company }}</p><p class="chapter-role">{{ chapter.role }}</p></div></div>
            <h3>{{ chapter.title }}</h3>
            <p v-for="paragraph in chapter.paragraphs" :key="paragraph" class="chapter-body">{{ paragraph }}</p>
            <p class="takeaway">{{ chapter.takeaway }}</p><p class="evidence">{{ chapter.evidence }}</p>
          </article>
        </div>
      </section>
      <section class="human-section" aria-labelledby="human-title">
        <div class="wrap human-grid">
          <div><p class="eyebrow">{{ copy.human.label }}</p><h2 id="human-title">{{ copy.human.title }}</h2></div>
          <div class="human-copy">
            <p v-for="(paragraph, index) in copy.human.paragraphs" :key="paragraph" :class="{ 'human-note': index === 2 }">{{ paragraph }}</p>
          </div>
        </div>
      </section>
      <section class="community-section wrap" aria-labelledby="community-title">
        <div class="community-art" aria-hidden="true"><span class="community-message">{{ copy.community.artwork }}</span><span class="mono-label">{{ copy.community.artworkCaption }}</span></div>
        <div class="community-copy">
          <p class="eyebrow">{{ copy.community.label }}</p><h2 id="community-title">{{ copy.community.title }}</h2>
          <p v-for="paragraph in copy.community.paragraphs" :key="paragraph">{{ paragraph }}</p>
          <a class="text-link" href="https://tinygoose.club/">{{ copy.community.link }} <ArrowIcon /></a>
        </div>
      </section>
      <section id="approach" class="approach-section wrap" aria-labelledby="approach-title">
        <div class="approach-heading"><p class="eyebrow">{{ copy.approach.label }}</p><h2 id="approach-title">{{ copy.approach.title }}</h2><p>{{ copy.approach.intro }}</p></div>
        <div class="strengths">
          <article v-for="(strength, index) in strengths" :key="strength.title" class="strength">
            <span class="mono-label">0{{ index + 1 }}</span><h3>{{ strength.title }}</h3><p>{{ strength.text }}</p>
            <a :href="strength.href">{{ strength.link }} <ArrowIcon /></a>
          </article>
        </div>
      </section>
      <section id="contact" class="contact-section" aria-labelledby="contact-title">
        <div class="wrap contact-inner">
          <p class="eyebrow">{{ copy.contact.label }}</p><h2 id="contact-title">{{ copy.contact.title }}</h2>
          <p v-for="paragraph in copy.contact.paragraphs" :key="paragraph">{{ paragraph }}</p>
          <div class="actions"><a class="button primary" :href="`mailto:${profile.email}`">{{ copy.contact.email }} <ArrowIcon /></a><a class="text-link" :href="profile.linkedin">{{ copy.contact.linkedin }} <ArrowIcon /></a></div>
          <a class="visible-email" :href="`mailto:${profile.email}`">{{ profile.email }}</a>
        </div>
      </section>
    </main>
    <footer class="site-footer wrap"><span>{{ copy.footer }}</span><a :href="profile.resume">Resume <ArrowIcon /></a><a href="#main">Back to the beginning <ArrowIcon /></a></footer>
  </div>
</template>

<style scoped>
.wrap { width: min(1200px, calc(100% - 64px)); margin-inline: auto; }
.site-header { display: flex; justify-content: space-between; align-items: center; gap: 24px; padding-block: 28px; }
.wordmark { font-family: var(--font-display); font-size: 22px; font-weight: 800; letter-spacing: -.04em; }
nav { display: flex; align-items: center; gap: 28px; font-size: 14px; font-weight: 600; }
nav a { padding-block: 12px; }
.nav-contact { border-bottom: 2px solid var(--ink); }
.eyebrow { font-family: var(--font-mono); font-size: 11px; line-height: 1.7; letter-spacing: .08em; text-transform: uppercase; }
.hero { display: grid; grid-template-columns: minmax(0, 1.55fr) minmax(0, .8fr); gap: 60px; align-items: center; padding-block: 72px 80px; }
.hero .eyebrow { display: flex; align-items: center; gap: 9px; margin-bottom: 22px; }
.status-dot { width: 8px; height: 8px; background: #37634c; border-radius: 50%; flex: none; }
h1, h2, h3 { font-family: var(--font-display); font-weight: 800; letter-spacing: -.045em; }
h1 { font-size: clamp(38px, 4vw, 56px); line-height: 1.06; }
h1 span { color: var(--ink-2); }
.hero-intro { font-size: 21px; line-height: 1.6; margin-top: 25px; max-width: 630px; }
.hero-background { font-size: 16px; line-height: 1.75; color: var(--ink-2); margin-top: 18px; max-width: 590px; }
.actions { display: flex; align-items: center; flex-wrap: wrap; gap: 22px; margin-top: 30px; }
.button { display: inline-flex; align-items: center; justify-content: space-between; gap: 22px; min-height: 48px; padding: 14px 20px; border: 1px solid var(--ink); border-radius: 5px; font-weight: 600; font-size: 14px; }
.primary { background: var(--ink); color: var(--surface); }
.button:hover { background: var(--ink-2); }
.text-link { display: inline-flex; align-items: center; gap: 12px; min-height: 44px; border-bottom: 1px solid currentColor; font-weight: 600; font-size: 14px; }
.hero-portrait { margin: 0; transform: rotate(2deg); }
.portrait-frame { border-radius: 48% 48% 8px 8px; background: var(--cs); padding: 18px 18px 0; overflow: hidden; }
.portrait-frame img { display: block; width: 100%; height: auto; aspect-ratio: 4/5; object-fit: cover; border-radius: 48% 48% 0 0; }
figcaption { display: flex; flex-direction: column; gap: 6px; padding: 16px 10px; font-size: 13px; color: var(--ink-2); }
figcaption .mono-label { line-height: 1.6; }
.credibility { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 32px; padding-block: 28px; border-block: 1px solid #c8c5d1; }
.credibility p { display: flex; flex-direction: column; gap: 7px; }
.credibility strong { font-family: var(--font-display); font-size: 26px; letter-spacing: -.03em; }
.credibility span { font-size: 13px; line-height: 1.5; color: var(--ink-2); }
.story-section { display: grid; grid-template-columns: minmax(0, .8fr) minmax(0, 1.2fr); gap: 100px; align-items: start; padding-block: 110px; }
.section-intro { position: sticky; top: 40px; }
h2 { font-size: clamp(36px, 4vw, 50px); line-height: 1.08; margin: 17px 0 24px; }
.section-intro > p:not(.eyebrow) { font-size: 17px; line-height: 1.8; color: var(--ink-2); margin-top: 18px; }
.chapter { padding-block: 0 44px; margin-bottom: 44px; border-bottom: 1px solid #c8c5d1; scroll-margin-top: 32px; }
.chapter:last-child { margin-bottom: 0; padding-bottom: 0; border: 0; }
.chapter-heading { display: flex; gap: 16px; align-items: center; }
.chapter-number { font-family: var(--font-display); font-size: 32px; font-weight: 800; background: var(--cs); width: 56px; height: 56px; display: grid; place-items: center; border-radius: 50%; flex: none; }
.chapter-company { font-size: 14px; font-weight: 600; line-height: 1.5; }
.chapter-role { font-size: 12px; line-height: 1.6; color: var(--ink-3); margin-top: 3px; }
h3 { font-size: 29px; line-height: 1.18; margin: 22px 0 18px; }
.chapter-body { font-size: 16px; line-height: 1.85; color: var(--ink-2); margin-top: 15px; }
.takeaway { border-left: 3px solid var(--ink); padding-left: 16px; margin-top: 23px; font-size: 17px; font-weight: 600; line-height: 1.6; }
.evidence { margin-top: 18px; font-size: 12px; line-height: 1.6; color: var(--ink-3); }
.human-section { background: var(--ink); color: var(--surface); padding-block: 76px; }
.human-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 100px; }
.human-section h2 { margin-bottom: 0; }
.human-copy > p { font-size: 17px; line-height: 1.85; margin-bottom: 20px; color: #eeecf7; }
.human-copy .human-note { color: var(--surface); font-size: 21px; line-height: 1.6; margin-top: 28px; margin-bottom: 0; }
.community-section { display: grid; grid-template-columns: .8fr 1fr; gap: 100px; align-items: center; padding-block: 100px; }
.community-art { min-height: 365px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; background: var(--cs); border-radius: 150px 150px 8px 8px; }
.community-message { font-family: var(--font-display); font-weight: 800; font-size: 42px; line-height: 1.15; padding-inline: 24px; letter-spacing: -.045em; text-align: center; }
.community-art .mono-label { padding-inline: 20px; text-align: center; }
.community-copy > p:not(.eyebrow) { color: var(--ink-2); font-size: 16px; line-height: 1.85; margin-bottom: 16px; }
.approach-section { padding-block: 60px 110px; border-top: 1px solid #c8c5d1; }
.approach-heading { max-width: 640px; }
.approach-heading > p:last-child { color: var(--ink-2); line-height: 1.8; font-size: 17px; }
.strengths { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 0 64px; margin-top: 36px; }
.strength { padding-block: 30px; border-bottom: 1px solid #c8c5d1; }
.strength h3 { margin-block: 12px; font-size: 27px; }
.strength > p { color: var(--ink-2); font-size: 16px; line-height: 1.8; }
.strength > a { display: inline-block; font-size: 13px; font-weight: 600; text-decoration: underline; text-underline-offset: 4px; padding-block: 15px 8px; }
.contact-section { background: var(--cs); padding-block: 80px; }
.contact-inner { max-width: 820px; }
.contact-section h2 { font-size: clamp(42px,5vw,64px); }
.contact-inner > p:not(.eyebrow) { font-size: 18px; line-height: 1.8; margin-top: 18px; }
.visible-email { display: inline-block; font-size: 14px; margin-top: 24px; padding-block: 10px; text-decoration: underline; text-underline-offset: 4px; overflow-wrap: anywhere; }
.site-footer { display: flex; flex-wrap: wrap; align-items: center; gap: 24px; padding-block: 28px; color: var(--ink-3); font-size: 12px; }
.site-footer span { margin-right: auto; }
.site-footer a { padding-block: 12px; }
.skip-link { position: absolute; left: 16px; top: -80px; z-index: 10; padding: 14px; background: var(--surface); }
.skip-link:focus { top: 12px; }
#story, #approach, #contact { scroll-margin-top: 24px; }
@media (max-width: 1000px) {
  .hero { gap: 30px; grid-template-columns: 1.5fr .8fr; padding-block: 40px 60px; }
  .story-section, .human-grid, .community-section { gap: 50px; }
  .story-section { grid-template-columns: .75fr 1.25fr; }
}
@media (max-width: 720px) {
  .wrap { width: calc(100% - 40px); }
  .site-header { gap: 16px; padding-block: 18px; }
  .wordmark { font-size: 20px; }
  nav { gap: 12px; font-size: 12px; }
  nav > a:not(.nav-contact) { display: none; }
  .hero { grid-template-columns: 1fr; padding-block: 38px 40px; gap: 34px; }
  .hero .eyebrow { font-size: 10px; }
  h1 { font-size: clamp(38px, 10vw, 57px); }
  .hero-intro { font-size: 19px; }
  .hero-background { font-size: 16px; }
  .actions { gap: 14px; }
  .hero-portrait { max-width: 290px; width: 80%; justify-self: center; }
  .portrait-frame img { aspect-ratio: 1; }
  .credibility { grid-template-columns: repeat(2,minmax(0,1fr)); gap: 24px 20px; }
  .credibility strong { font-size: 24px; }
  .credibility span { font-size: 12px; }
  .story-section { grid-template-columns: 1fr; padding-block: 60px; gap: 44px; }
  .section-intro { position: static; }
  h2 { font-size: 38px; }
  .human-section { padding-block: 54px; }
  .human-grid, .community-section { grid-template-columns: 1fr; gap: 30px; }
  .human-copy > p { font-size: 16px; }
  .community-section { padding-block: 60px; }
  .community-art { min-height: 240px; max-width: 350px; width: 100%; justify-self: center; }
  .community-message { font-size: 44px; }
  .approach-section { padding-block: 44px 60px; }
  .strengths { grid-template-columns: 1fr; gap: 0; margin-top: 16px; }
  .contact-section { padding-block: 54px; }
  .contact-inner > p:not(.eyebrow) { font-size: 17px; }
  .site-footer { gap: 10px 24px; padding-block: 20px; }
  .site-footer span { flex-basis: 100%; line-height: 1.6; }
}
</style>
