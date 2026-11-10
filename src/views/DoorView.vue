<script setup>
import { ref } from 'vue'
import { useHead } from '@unhead/vue'
import ContactBar from '../components/ContactBar.vue'
import Portrait from '../components/Portrait.vue'
import ProofLink from '../components/ProofLink.vue'
import StatGrid from '../components/StatGrid.vue'
import { person } from '../content/doors.js'
import { pageHead } from '../head.js'

const props = defineProps({ door: { type: Object, required: true } })
useHead(pageHead(props.door.meta, props.door.path, props.door.theme))

const dialog = ref(null)
const video = ref(null)
const openVideo = () => dialog.value?.showModal()
const closeVideo = () => {
  video.value?.pause()
  dialog.value?.close()
}
</script>

<template>
  <div class="door view" :class="door.theme">
    <header class="panel">
      <div class="panel-top">
        <nav class="nav">
          <RouterLink to="/" class="back">
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 10H4M9 5l-5 5 5 5" /></svg>
            {{ person.name }}
          </RouterLink>
          <RouterLink :to="door.switchTo.path" class="switch">
            <span class="prompt">{{ door.switchTo.prompt }}&nbsp;</span>{{ door.switchTo.label }}
            <svg class="arrow" aria-hidden="true" width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10h12M11 5l5 5-5 5" /></svg>
          </RouterLink>
        </nav>
        <div class="identity">
          <Portrait :src="person.portrait" label="PORTRAIT" class="portrait" />
          <div class="id-text">
            <span class="mono-label role">{{ door.label }}</span>
            <button v-if="door.introVideo" type="button" class="video-btn" @click="openVideo">
              <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><path d="M2 1l9 5-9 5z" /></svg>
              Watch my 40-second intro
            </button>
            <span v-if="door.stack" class="stack">{{ door.stack.join(' · ') }}</span>
          </div>
        </div>
        <h1>{{ door.headline }}</h1>
      </div>
      <ContactBar class="contact-panel" :actions="door.actions" :extra="door.contactExtra" />
    </header>

    <main class="body">
      <StatGrid :stats="door.stats" />
      <section class="proof-section" :aria-label="door.proofLabel">
        <h2 class="mono-label proof-label">{{ door.proofLabel }}</h2>
        <div class="proof-list">
          <ProofLink v-for="p in door.proof" :key="p.title" :item="p" />
        </div>
      </section>
      <p class="where">
        <span class="mono-label">Where</span>
        <span>{{ person.employers.join(' · ') }}</span>
      </p>
      <ContactBar class="contact-body" :actions="door.actions" :extra="door.contactExtra" />
    </main>

    <dialog v-if="door.introVideo" ref="dialog" class="video-dialog" aria-label="Intro video">
      <video ref="video" :src="door.introVideo" controls playsinline />
      <button type="button" class="close" @click="closeVideo">Close</button>
    </dialog>
  </div>
</template>

<style scoped>
.door { min-height: 100dvh; display: flex; flex-direction: column; }

/* Mobile: colored header panel, then stats, proof, contact. */
.panel {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 14px 20px 22px;
  border-radius: 0 0 22px 22px;
}
.cs .panel { background: var(--cs); color: var(--ink); --focus: var(--ink); }
.eng .panel { background: var(--eng); color: var(--on-eng); --focus: var(--on-eng); }
.eng .role { color: var(--on-eng-3); }
.eng .stack { color: var(--on-eng-2); }

.panel-top { display: flex; flex-direction: column; gap: 16px; }
.nav { display: flex; justify-content: space-between; align-items: center; }
.back, .switch { display: inline-flex; align-items: center; min-height: 44px; font-weight: 600; }
.back { gap: 6px; font-size: 14px; }
.switch { font-size: 13px; text-decoration: underline; text-underline-offset: 3px; }
.prompt, .arrow { display: none; }

.identity { display: flex; gap: 14px; align-items: center; }
.portrait { --size: 76px; }
.id-text { display: flex; flex-direction: column; gap: 6px; min-width: 0; }
.stack { font-size: 13px; line-height: 1.4; }
.video-btn {
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 44px;
  padding: 0 14px;
  border: 0;
  border-radius: 999px;
  background: var(--ink);
  color: var(--ground);
  font: 600 13px var(--font-body);
  cursor: pointer;
}
h1 {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 27px;
  line-height: 1.08;
  letter-spacing: -0.02em;
}

.body { flex: 1; display: flex; flex-direction: column; padding: 20px 20px 0; gap: 16px; }
.proof-section { display: flex; flex-direction: column; gap: 8px; flex: 1; }
.proof-label { margin: 0; color: var(--ink-3); }
.proof-list { display: flex; flex-direction: column; gap: 8px; }
.where { display: none; }
.contact-body { padding: 0 0 18px; }
.contact-panel { display: none; }

@media (min-width: 960px) {
  .door { position: relative; flex-direction: row; gap: 8px; padding: 24px; }
  .panel {
    flex: none;
    width: 448px;
    justify-content: space-between;
    gap: 24px;
    padding: 36px 40px;
    border-radius: 28px;
  }
  .panel-top { gap: 24px; }
  .back { font-size: 15px; gap: 8px; }
  .identity { gap: 20px; }
  .portrait { --size: 132px; --label-size: 11px; }
  .id-text { gap: 10px; }
  .role { font-size: 12px; }
  .stack { font-size: 14px; }
  .video-btn { padding: 0 16px; font-size: 14px; }
  h1 { font-size: 42px; line-height: 1.04; letter-spacing: -0.025em; }

  /* The switch link sits at the top right of the page, above the right column. */
  .switch {
    position: absolute;
    top: 44px;
    right: 40px;
    gap: 8px;
    font-size: 15px;
    text-underline-offset: 4px;
    color: var(--ink);
  }
  .prompt { display: inline; }
  .arrow { display: block; }

  .body { min-width: 0; padding: 64px 16px 12px 40px; justify-content: space-between; gap: 24px; }
  .proof-section { flex: none; gap: 14px; }
  .proof-label { font-size: 12px; }
  .proof-list { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
  .where { display: flex; align-items: baseline; gap: 16px; font-size: 14px; color: var(--ink-2); }
  .where .mono-label { font-size: 12px; color: var(--ink-3); }
  .contact-body { display: none; }
  .contact-panel { display: flex; }
  .eng .contact-panel {
    --btn-bg: var(--on-eng);
    --btn-fg: var(--ink);
    --btn-line: var(--on-eng);
  }
  .eng .contact-panel .line { color: var(--on-eng-2); }
}

.video-dialog { border: 0; border-radius: 14px; padding: 12px; width: min(720px, 92vw); background: var(--ink); }
.video-dialog video { width: 100%; display: block; border-radius: 8px; }
.close {
  margin-top: 8px; min-height: 44px; padding: 0 16px; border: 2px solid var(--ground);
  border-radius: 14px; background: transparent; color: var(--ground); font: 600 15px var(--font-body); cursor: pointer;
}
.close:focus-visible, .video-dialog video:focus-visible { outline-color: var(--ground); }
</style>
