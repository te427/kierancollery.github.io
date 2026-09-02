<script setup lang="ts">
import { useTemplateRef } from 'vue'
defineProps<{
  vertical?: boolean
  items: [
    {
      text: string
      path?: string
    },
  ]
}>()

const emit = defineEmits<{ (e: 'select', value: string): void }>()

const itemRefs = useTemplateRef('items')

function selectItem(event) {
  const value = event.target.textContent

  emit('select', value)

  for (const el of itemRefs.value.values()) {
    if (el.textContent === value) {
      el.classList.add('selected')
    } else {
      el.classList.remove('selected')
    }
  }
}
</script>

<template>
  <div class="menu-container" :class="{ vertical }">
    <div class="item-container" v-for="item in items" :key="item.text" ref="items">
      <!--
          <router-link v-if="item.path" class="item">{{ item.text }}</router-link>
          <a v-else >{{ item.text }} </a>
      -->
      <a class="item" @click="selectItem">{{ item.text }}</a>
    </div>
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

.vertical {
  flex-direction: row;
  gap: 30px;
}

.item-container {
  color: #999999;
}

.item {
  font-family: 'Geist', Helvetica, sans-serif;
  background: linear-gradient(currentColor 0 0) bottom left/ var(--underline-width, 0%) 0.1em
    no-repeat;
  display: inline-block;
  padding: 0 0.5em 0.2em;
  text-decoration: none;
  transition: background-size 0.5s;
  cursor: pointer;
}

.selected {
  --underline-width: 100%;
  color: #666666 !important;
}

.item:hover {
  --underline-width: 100%;
  color: #666666;
}
</style>
