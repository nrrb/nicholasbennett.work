<script setup>
defineProps({ item: { type: Object, required: true } })
</script>

<template>
  <component
    :is="item.href ? 'a' : 'div'"
    class="proof"
    v-bind="item.href ? { href: item.href, target: '_blank', rel: 'noopener' } : {}"
  >
    <video v-if="item.video" class="media" :src="item.video" autoplay muted loop playsinline :aria-label="`${item.title} animated preview`" />
    <img v-else-if="item.image" class="media" :src="item.image" :alt="`${item.title} screenshot`" />
    <div v-else class="media placeholder" role="img" aria-label="Image placeholder">
      {{ item.imageHint }}
    </div>
    <div class="text">
      <span class="title">{{ item.title }}</span>
      <span class="desc">{{ item.text }}</span>
    </div>
    <svg v-if="item.href" class="chev" aria-hidden="true" width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4l6 6-6 6" /></svg>
  </component>
</template>

<style scoped>
.proof {
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 60px;
  padding: 8px 12px;
  border-radius: 14px;
  background: var(--surface);
}
.media { display: none; }
.text { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 2px; }
.title { font-weight: 600; font-size: 15px; }
.desc { font-size: 13px; line-height: 1.3; color: var(--ink-2); }

@media (min-width: 960px) {
  .proof { flex-direction: column; align-items: stretch; gap: 12px; padding: 12px; border-radius: 18px; }
  .media { display: block; height: 150px; width: 100%; border-radius: 10px; object-fit: cover; }
  .placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: var(--ground);
    font-family: var(--font-mono);
    font-weight: 500;
    font-size: 11px;
    text-transform: uppercase;
    color: var(--ink-3);
  }
  .text { flex: none; gap: 4px; padding: 0 4px 6px; }
  .title { font-size: 17px; }
  .desc { font-size: 14px; line-height: 1.4; }
  .chev { display: none; }
}
</style>
