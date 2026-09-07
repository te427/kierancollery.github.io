<!-- This section should fade in a logo (on first load w/ cookie) and with section buttons below it -->
<script setup lang="ts">
import SelectMenu from '../components/SelectMenu.vue'

const menuItems = [
  { text: 'About', path: '/about' },
  { text: 'Experience', path: '/experience' },
  { text: 'Research', path: '/research' },
  { text: 'Contact', path: '/contact' },
]
</script>

<template>
  <div class="logo-container" id="logo">
    <div class="logo-spacer"></div>
    <div class="logo-img-container">
      <img class="logo-img-content" src="/eagle.png" />
    </div>
    <div class="logo-menu-container">
      <div class="logo-menu-title">kierancollery.com</div>
      <div class="logo-menu-content">
        <select-menu :items="menuItems"></select-menu>
      </div>
      <div class="logo-spacer"></div>
    </div>
  </div>
</template>

<style scoped>
.logo-container {
  display: flex;
  flex-direction: column;
}

.logo-img-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.logo-img-content {
  width: 60vw;
}

.logo-menu-container {
  display: flex;
  flex-direction: column;
}

.logo-menu-title {
  font-family: 'Geist', sans-serif;
  font-size: 48px;
  color: #222222;
  font-weight: 600;
  text-align: center;
}

.logo-menu-content {
  padding: 20px;
}

.logo-spacer {
  height: 30px;
}
</style>
