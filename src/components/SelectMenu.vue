<script setup lang="ts">
import { useTemplateRef, onMounted } from 'vue'

type Item = {
  text: string
  path?: string
}

const props = defineProps<{
  vertical?: boolean
  leftAlign?: boolean
  selected?: string
  items: Item[]
}>()

const emit = defineEmits<{ (e: 'select', value: unknown): void }>()

const itemRefs = useTemplateRef('items')

onMounted(() => {
  const selected = props.selected
  if (selected) {
    _selectItem(selected)
  }
})

function selectItem(event: Event) {
  const value = (event!.target! as HTMLElement).textContent

  emit('select', value)

  _selectItem(value)
}

function _selectItem(value: string) {
  for (const el of itemRefs!.value!.values()) {
    if (el.textContent === value) {
      el.classList.add('selected')
    } else {
      el.classList.remove('selected')
    }
  }
}
</script>

<template>
  <div class="select-menu-container" :class="{ vertical, leftAlign }">
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
  margin: 0;
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
  font-size: 18px;
}

.selected {
  --underline-width: 100%;
  color: #666666 !important;
}

.item:hover {
  --underline-width: 100%;
  color: #666666;
}

@media (max-width: 600px) {
  .select-menu-container {
    gap: 0;
    margin-bottom: 8px;
  }

  .vertical {
    /* Ignore vertical menu. */
    flex-direction: row;
    gap: 10px;
  }

  .item {
    font-size: 14px;
  }

  .leftAlign {
    justify-content: left;
    .item {
      padding: 0;
    }
  }
}
</style>
