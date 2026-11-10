<script setup>
import { useHead } from '@unhead/vue'
import DoorCard from '../components/DoorCard.vue'
import Portrait from '../components/Portrait.vue'
import { doors, landingMeta, person } from '../content/doors.js'
import { pageHead } from '../head.js'

useHead(pageHead(landingMeta, '/', 'landing'))
</script>

<template>
  <div class="page view">
    <header class="top">
      <span class="site">nicholasbennett.work</span>
      <div class="right">
        <span class="where">{{ person.location }} · {{ person.email }}</span>
        <span class="status">{{ person.status }}</span>
      </div>
    </header>
    <div class="intro">
      <h1>{{ person.name }}</h1>
      <p>{{ person.question }}</p>
    </div>
    <main class="doors">
      <DoorCard :door="doors.cs" />
      <DoorCard :door="doors.eng" />
      <div class="seam"><Portrait :src="person.portrait" label="YOUR<br>PORTRAIT" /></div>
    </main>
    <footer class="foot">
      <span>{{ person.location }}</span>
      <span>{{ person.email }}</span>
    </footer>
  </div>
</template>

<style scoped>
.page { min-height: 100dvh; display: flex; flex-direction: column; }
.top { display: flex; justify-content: space-between; align-items: center; padding: 20px 20px 0; }
.site { font-family: var(--font-mono); font-weight: 500; font-size: 12px; color: var(--ink-3); }
.status {
  font-size: 12px;
  font-weight: 600;
  padding: 6px 10px;
  border-radius: 999px;
  background: var(--ink);
  color: var(--ground);
}
.where { display: none; }
.intro { padding: 28px 20px 20px; display: flex; flex-direction: column; gap: 8px; }
h1 { font-family: var(--font-display); font-weight: 800; font-size: 38px; line-height: 1.02; letter-spacing: -0.02em; }
.intro p { font-size: 18px; line-height: 1.35; color: var(--ink-2); }
.doors { position: relative; flex: 1; display: flex; flex-direction: column; gap: 6px; padding: 0 12px; }
.seam {
  --size: 104px;
  --ring: 4px;
  --label-size: 10px;
  position: absolute;
  right: 28px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  pointer-events: none;
}
.foot { padding: 14px 20px 18px; font-size: 13px; color: var(--ink-3); display: flex; justify-content: space-between; gap: 12px; }

@media (min-width: 960px) {
  .top { padding: 24px 40px 0; }
  .site { font-size: 13px; }
  .right { display: flex; align-items: center; gap: 20px; font-size: 14px; }
  .where { display: inline; color: var(--ink-2); }
  .status { font-size: 13px; padding: 7px 12px; }
  .intro { flex-direction: row; align-items: baseline; gap: 24px; padding: 36px 40px 28px; }
  h1 { font-size: 64px; line-height: 1; letter-spacing: -0.025em; }
  .intro p { font-size: 24px; }
  .doors { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; padding: 0 24px 24px; }
  .seam {
    --size: 220px;
    --ring: 8px;
    --label-size: 13px;
    left: 50%;
    right: auto;
    top: calc(50% - 12px);
    transform: translate(-50%, -50%);
  }
  .foot { display: none; }
}
</style>
