<script setup>
defineProps({ stats: { type: Array, required: true } })
</script>

<template>
  <dl class="stats">
    <div v-for="s in stats" :key="s.value" class="stat">
      <dd class="value">{{ s.value }}</dd>
      <dt class="label">{{ s.label }}</dt>
    </div>
  </dl>
</template>

<style scoped>
.stats {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  margin: 0;
}
.stat {
  display: flex;
  flex-direction: column;
  gap: 2px;
  border-top: 2px solid var(--ink);
  padding-top: 8px;
}
.value {
  margin: 0;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 32px;
  line-height: 1;
}
.label {
  font-size: 13px;
  line-height: 1.3;
  color: var(--ink-2);
}
@media (min-width: 960px) {
  .stats { grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 24px; }
  .stat { gap: 6px; padding-top: 12px; }
  .value { font-size: 40px; letter-spacing: -0.02em; white-space: nowrap; }
  .label { font-size: 15px; line-height: 1.35; }
}
</style>
