<!-- This section should govern min-width, fade-in, focus/blur with scroll, and any other effects, as well as handle mobile view -->
<script setup lang="ts">
// TODO: fix background color not showing up on padding
</script>

<template>
  <div class="section">
    <slot />
  </div>
</template>

<style scoped>
.section {
  min-height: 300px;
  padding: 2vh 0;
}
</style>
