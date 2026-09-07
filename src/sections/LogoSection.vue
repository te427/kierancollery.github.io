<!-- This section should fade in a logo (on first load w/ cookie) and with section buttons below it -->
<script setup lang="ts">
import SelectMenu from '../components/SelectMenu.vue'

const menuItems = [
  { text: 'about', path: '/about' },
  { text: 'experience', path: '/experience' },
  { text: 'research', path: '/research' },
  { text: 'contact', path: '/contact' },
]
</script>

<template>
  <div class="logo-container" id="logo">
    <div class="logo-img-container">
      <img class="logo-img-content" src="/eagle.png" />
    </div>
    <div class="logo-menu-container">
      <div class="logo-menu-title">
        <a class="logo-menu-title-prefix">kieran</a>
        <a class="logo-menu-title-suffix">collery</a>
      </div>
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

  animation: fade-in 1s linear both;
  animation-delay: 300ms;
}

.logo-img-content {
  width: 60vw;
}

.logo-menu-container {
  display: flex;
  flex-direction: column;

  opacity: 0;
  animation: fade-in 1s linear both;
  animation-duration: 1s;
  animation-delay: 1s;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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

.logo-menu-title-prefix {
  color: #cecece;
}

.logo-menu-title-suffix {
  color: #333333;
}
</style>
