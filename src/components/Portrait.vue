<script setup>
defineProps({
  src: { type: String, default: null },
  label: { type: String, default: 'Portrait' },
})
</script>

<template>
  <img v-if="src" class="portrait" :src="src" alt="Nicholas Bennett" />
  <div v-else class="portrait placeholder" role="img" aria-label="Portrait photo placeholder">
    <span v-html="label" />
  </div>
</template>

<style scoped>
.portrait {
  flex: none;
  width: var(--size, 76px);
  height: var(--size, 76px);
  border-radius: 50%;
  object-fit: cover;
  border: var(--ring, 0) solid var(--ground);
}
.placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: var(--ground);
  outline: 2px dashed var(--ink-3);
  outline-offset: calc(var(--size, 76px) * -0.1);
  font-family: var(--font-mono);
  font-weight: 500;
  font-size: var(--label-size, 9px);
  line-height: 1.3;
  color: var(--ink-3);
}
</style>
