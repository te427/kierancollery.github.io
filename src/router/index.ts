import { nextTick } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import LogoSection from '../sections/LogoSection.vue'
import AboutSection from '../sections/AboutSection.vue'
import ExperienceSection from '../sections/ExperienceSection.vue'
import ResearchSection from '../sections/ResearchSection.vue'
import ContactSection from '../sections/ContactSection.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: LogoSection,
    },
    {
      path: '/about',
      name: 'About',
      component: AboutSection,
    },
    {
      path: '/experience',
      name: 'Experience',
      component: ExperienceSection,
    },
    {
      path: '/research',
      name: 'Research',
      component: ResearchSection,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactSection,
    },
  ],
  scrollBehavior(to, _, savedPosition) {
    let obj
    if (to.path) {
      const s = to.path.split('/')[1]

      obj = { el: `#${s}` }
    }
    return { ...(obj ?? { left: 0, top: 0 }), behavior: 'smooth' }
  },
})

router.afterEach((to, _) => {
  const s = to.hash || to.path.split('/')[1]

  const el = document.querySelector(s ? (s.includes('#') ? s : `#${s}`) : '#home')
  // Wait for DOM update before scrolling
  nextTick(() => {
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  })
})

export default router
