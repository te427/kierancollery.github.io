<!-- This section should govern min-width, fade-in, focus/blur with scroll, and any other effects, as well as handle mobile view -->
<script setup lang="ts">
const props = defineProps<{
  anchor: string
  color?: string
}>()

const style = {
  'background-color': `#${props.color ?? 'ffffff'}`,
  color: `#${props.color ?? 'ffffff'}`,
}
</script>

<template>
  <div class="section" :style="style" :id="anchor">
    <div class="section-animation">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.section-animation {
  /* Fade in animation */
  animation: fadeIn 100ms linear both;
  animation-timeline: view(block);
  animation-range: entry 0% entry 100%;
}
</style>
