<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<
  [
    {
      text: string
      path: string
    },
  ]
>()
</script>

<template>
  <div class="menu-container">
    <div class="item-container" v-for="item in items" :key="item.text"></div>
    <!--
        <router-link v-if="item.path" class="item">{{ item.text }}</router-link>
        <a v-else >{{ item.text }} </a>
    -->
    <a class="item">{{ item.text }}</a>
  </div>
</template>

<style>
.menu-container {
  display: flexbox;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
}

.item {
  background: linear-gradient(currentColor 0 0) bottom left/ var(--underline-width, 0%) 0.1em
    no-repeat;
  color: #555555;
  display: inline-block;
  padding: 0 0.5em 0.2em;
  text-decoration: none;
  transition: background-size 0.5s;
}

.item:hover {
  --underline-width: 100%;
  color: #666666;
}
</style>
