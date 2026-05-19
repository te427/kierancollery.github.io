<script setup lang="ts">
import Section from './sections/Section.vue'
import LogoSection from './sections/LogoSection.vue'

let createSections = (components) => components.map((component, id) => ({id, component}))

const components = createSections([LogoSection])
</script>

<template>
  <div v-for="({component, id}, _) in components" :key="id">
    <Section>
      <component :is="component"/>
    </Section>
  </div>
</template>

<style scoped></style>
