<!-- This section should govern min-width, fade-in, focus/blur with scroll, and any other effects, as well as handle mobile view -->
<script setup lang="ts">
const props = defineProps<{
  anchor: string
  color?: string
}>()

const style = {
  'background-color': `#${props.color ?? 'ffffff'}`,
}

console.log(style)
</script>

<template>
  <div class="section" :style="style" :id="anchor">
    <slot />
  </div>
</template>

<style scoped>
.section {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
