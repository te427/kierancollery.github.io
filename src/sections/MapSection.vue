<!-- This section should contain an interactive map with places I've been -->
<script setup lang="ts">
import SelectMenu from '../components/SelectMenu.vue'

const menuItems = [{ text: 'Professional' }, { text: 'Academic' }]

function toggleSection(v) {
  // handle conditional content
}
</script>

<template>
  <div class="experience-container">
    <div class="info-container">
      <div class="text-container">
        <div class="submenu-container"></div>
        <div class="content-container"></div>
      </div>
      <div class="map-container"></div>
    </div>
    <div class="menu-container">
      <select-menu :items="menuItems" @select="toggleSection"></select-menu>
    </div>
  </div>
</template>

<style scoped>
.menu-container {
  display: flexbox;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.info-container {
  display: flexbox;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
