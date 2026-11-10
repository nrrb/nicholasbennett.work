<script setup>
import { computed } from 'vue'
import { person } from '../content/doors.js'

const props = defineProps({
  actions: { type: Array, required: true },
  extra: { type: String, default: '' },
})

const visible = computed(() => props.actions.filter((a) => a.kind === 'email' || a.href))
const hrefFor = (a) => (a.kind === 'email' ? `mailto:${person.email}` : a.href)
const external = (a) => a.kind === 'link'
</script>

<template>
  <div class="contact">
    <div class="buttons">
      <a
        v-for="a in visible"
        :key="a.label"
        class="btn"
        :class="{ primary: a.primary }"
        :href="hrefFor(a)"
        v-bind="external(a) ? { target: '_blank', rel: 'noopener' } : {}"
      >{{ a.label }}</a>
    </div>
    <p class="line">{{ person.email }} · {{ extra }}</p>
  </div>
</template>

<style scoped>
.contact {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.buttons { display: flex; gap: 8px; }
.btn {
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 0 16px;
  border: 2px solid var(--btn-line, var(--ink));
  border-radius: 14px;
  font-weight: 600;
  font-size: 15px;
}
.btn.primary { flex: 1; background: var(--btn-bg, var(--ink)); color: var(--btn-fg, var(--ground)); }
.line { font-size: 12px; text-align: center; color: var(--ink-3); overflow-wrap: anywhere; }

@media (min-width: 960px) {
  .contact { gap: 12px; }
  .btn { min-height: 52px; padding: 0 22px; font-size: 16px; }
  .line { font-size: 14px; text-align: left; color: inherit; }
}
</style>
