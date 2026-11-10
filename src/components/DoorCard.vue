<script setup>
defineProps({ door: { type: Object, required: true } })
</script>

<template>
  <RouterLink :to="door.path" class="card" :class="door.theme">
    <span class="top">
      <span class="mono-label audience">{{ door.audience }}</span>
      <span class="title">{{ door.title }}</span>
      <span class="teaser">{{ door.teaser }}</span>
    </span>
    <span class="cta">
      {{ door.cta }}
      <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10h12M11 5l5 5-5 5" /></svg>
    </span>
  </RouterLink>
</template>

<style scoped>
.card {
  flex: 1;
  border-radius: 22px;
  padding: 22px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
}
.cs { background: var(--cs); color: var(--ink); --focus: var(--ink); }
.eng { background: var(--eng); color: var(--on-eng); --focus: var(--on-eng); }
.eng .audience { color: var(--on-eng-3); }
.eng .teaser { color: var(--on-eng-2); }
.top { display: flex; flex-direction: column; gap: 8px; }
.title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 36px;
  line-height: 1;
  letter-spacing: -0.02em;
}
.teaser { font-size: 15px; line-height: 1.4; max-width: 280px; }
.cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 44px;
  font-weight: 600;
  font-size: 15px;
}
.card:focus-visible { outline-offset: -6px; }

@media (min-width: 960px) {
  .card { border-radius: 28px; padding: 44px 48px; }
  .eng { padding-left: 140px; }
  .top { gap: 14px; max-width: 440px; }
  .audience { font-size: 13px; }
  .title { font-size: 68px; line-height: 0.95; letter-spacing: -0.025em; }
  .teaser { font-size: 20px; max-width: none; }
  .cta { gap: 10px; font-size: 18px; }
  .cta svg { width: 24px; height: 24px; }
}
</style>
