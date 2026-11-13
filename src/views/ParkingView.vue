<script setup>
import { useHead } from '@unhead/vue'
useHead({
  title: 'Nicholas Bennett | Website update in progress',
  meta: [
    { name: 'description', content: 'Nicholas Bennett. Website update in progress.' },
    { name: 'robots', content: 'noindex, nofollow' },
  ],
})
</script>

<template>
  <main class="parking">
    <div>
      <p class="name">Nicholas Bennett</p>
      <h1>Website update<br />in progress.</h1>
      <a href="mailto:nicholas@nicholasbennett.work">nicholas@nicholasbennett.work</a>
    </div>
  </main>
</template>

<style scoped>
.parking { min-height: 100dvh; display: grid; place-items: center; padding: 32px; }
.parking > div { max-width: 650px; width: 100%; }
.name { font-size: 18px; margin-bottom: 24px; }
h1 { font-family: var(--font-display); font-size: clamp(40px, 8vw, 72px); line-height: 1.08; letter-spacing: -.04em; margin-bottom: 32px; }
a { display: inline-block; min-height: 44px; padding-block: 12px; text-decoration: underline; text-underline-offset: 5px; overflow-wrap: anywhere; }
</style>
