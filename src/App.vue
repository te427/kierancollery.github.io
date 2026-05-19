<!-- This section should provide a "Return to top" button and disclaimers -->
<script setup lang="ts">
import Section from './sections/Section.vue'
import LogoSection from './sections/LogoSection.vue'
import AboutSection from './sections/AboutSection.vue'
import MapSection from './sections/MapSection.vue'
import ResearchSection from './sections/ResearchSection.vue'
import ContactSection from './sections/ContactSection.vue'

let createSections = (components) => components.map((component, id) => ({id, component}))

const components = createSections([
  LogoSection,
  AboutSection,
  MapSection,
  ResearchSection,
  ContactSection
])
</script>

<template>
  <div v-for="({component, id}, _) in components" :key="id">
    <Section>
      <component :is="component"/>
    </Section>
  </div>
</template>

<style scoped></style>
