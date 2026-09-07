<!-- This section should fade in a logo (on first load w/ cookie) and with section buttons below it -->
<script></script>

<template>
  <div class="logo-container" id="logo">
    <div class="logo-img-container">
      <img class="logo-img-content" src="/eagle.png" />
    </div>
    <div class="logo-menu-container">
      <div class="logo-menu-title">Kieran Collery</div>
      <div class="logo-menu-content"></div>
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
</style>
