<!-- This section should provide a "Return to top" button and disclaimers -->
<script setup lang="ts">
import {useTemplateRef, onMounted} from 'vue'
import Section from './sections/Section.vue'
import LogoSection from './sections/LogoSection.vue'
import AboutSection from './sections/AboutSection.vue'
import MapSection from './sections/MapSection.vue'
import ResearchSection from './sections/ResearchSection.vue'
import ContactSection from './sections/ContactSection.vue'

const createSections = (components) => components.map((component, id) => ({id, component}))
let returnHidden = true;
let returnButton = useTemplateRef('return-button')

const components = createSections([
  LogoSection,
  AboutSection,
  MapSection,
  ResearchSection,
  ContactSection
])

onMounted(() => {})

const showingClass = 'return-showing'
const hidingClass = 'return-hiding'

document.body.onscroll = (e) => {
  if (!window.scrollY) {
    // hide return button
    returnHidden = true 
    returnButton.value.classList.remove(showingClass)
    returnButton.value.classList.add(hidingClass)
  }
  if (window.scrollY && returnHidden) {
    // show return button
    returnHidden = false
    returnButton.value.classList.remove(hidingClass)
    returnButton.value.classList.add(showingClass)
  }

}
</script>

<template>
  <div class="scroll-container">
    <Section v-for="({component, id}, _) in components" :key="id">
      <component :is="component"/>
    </Section>
  </div>

  <div ref="return-button" class="return-to-top">
    Return to top
  </div>
</template>

<style>
.return-to-top {
  position: fixed;
  right: 40px;
  bottom: 40px;
  opacity: 0;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(40px);
  }
}

.return-showing {
  animation: fadeIn 0.5s ease-out forwards;
}

.return-hiding {
  animation: fadeOut 0.5s ease-out forwards;
}
</style>
