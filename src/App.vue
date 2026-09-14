<!-- This section should provide a "Return to top" button and disclaimers -->
<script setup lang="ts">
import { useTemplateRef } from 'vue'
import type { Component } from 'vue'

import Section from './sections/Section.vue'
import LogoSection from './sections/LogoSection.vue'
import AboutSection from './sections/AboutSection.vue'
import ExperienceSection from './sections/ExperienceSection.vue'
import ResearchSection from './sections/ResearchSection.vue'
import ContactSection from './sections/ContactSection.vue'

type Anchor = {
  anchor: string
  component: Component
}

// Keep in same order as
const sectionAnchors: Anchor[] = [
  {
    anchor: '',
    component: LogoSection,
  },
  {
    anchor: 'about',
    component: AboutSection,
  },
  {
    anchor: 'experience',
    component: ExperienceSection,
  },
  {
    anchor: 'research',
    component: ResearchSection,
  },
  {
    anchor: 'contact',
    component: ContactSection,
  },
]

const createSections = (components: Anchor[]) =>
  components.map(({ anchor, component }, id: number) => {
    const v = (0xff - 0x0d * id).toString(16)
    const color = `${v}${v}${v}`

    return { id, component, color, anchor }
  })

let returnHidden = true
const returnButton = useTemplateRef('return-button')

const components = createSections(sectionAnchors)

const showingClass = 'return-showing'
const hidingClass = 'return-hiding'

document.body.onscroll = (_) => {
  if (window.scrollY < 30 && !returnHidden) {
    // hide return button
    returnHidden = true
    returnButton!.value!.classList!.remove(showingClass)
    returnButton!.value!.classList!.add(hidingClass)
  }
  if (window.scrollY >= 30 && returnHidden) {
    // show return button
    returnHidden = false
    returnButton!.value!.classList!.remove(hidingClass)
    returnButton!.value!.classList!.add(showingClass)
  }
}
</script>

<template>
  <div class="scroll-container" id="home">
    <Section
      v-for="({ component, id, color, anchor }, _) in components"
      :key="id"
      :color="color"
      :anchor="anchor"
    >
      <component :is="component" />
    </Section>
  </div>

  <div ref="return-button" class="return-to-top">
    <router-link to="/" class="item">Return to top</router-link>
  </div>
</template>

<style>
body {
  margin: 0;
}

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
