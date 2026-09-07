<script setup lang="ts">
import { useTemplateRef, onMounted } from 'vue'
const props = defineProps<{
  vertical?: boolean
  selected?: string
  items: [
    {
      text: string
      path?: string
    },
  ]
}>()

const emit = defineEmits<{ (e: 'select', value: string): void }>()

const itemRefs = useTemplateRef('items')

onMounted(() => {
  const selected = props.selected
  if (selected) {
    _selectItem(selected)
  }
})

function selectItem(event) {
  const value = event.target.textContent

  emit('select', value)

  _selectItem(value)
}

function _selectItem(value) {
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
  <div class="select-menu-container" :class="{ vertical }">
    <div class="item-container" v-for="item in items" :key="item.text" ref="items">
      <router-link v-if="item.path" :to="item.path" class="item">{{ item.text }}</router-link>
      <a v-else class="item" @click="selectItem">{{ item.text }} </a>
    </div>
  </div>
</template>

<style>
.select-menu-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: left;
  gap: 40px;
  margin: 0 20px;
}

.vertical {
  flex-direction: column;
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
  color: black;
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
