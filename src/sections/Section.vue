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
  <div class="section">
    <!-- <div class="section-title">{{ anchor }}</div> -->
    <div class="section-content" :style="style" :id="anchor">
      <div class="section-animation">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.section {
  position: relative;
}

.section-title {
  position: absolute;
  top: 0;
  left: 108px;
  transform-origin: top left;
  rotate: 90deg;
  font-family: 'Geist', sans-serif;
  font-size: 96px;
  color: white;
  font-weight: 600;
}

.section-content {
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
