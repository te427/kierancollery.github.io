import { nextTick } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import LogoSection from '../sections/LogoSection.vue'
import AboutSection from '../sections/AboutSection.vue'
import MapSection from '../sections/MapSection.vue'
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
      component: MapSection,
    },
    {
      path: '/reseach',
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
    if (savedPosition) {
      obj = savedPosition
    }
    return { ...(obj ?? { left: 0, top: 0 }), behavior: 'smooth' }
  },
})

router.afterEach((to, _) => {
  const s = to.hash || to.path.split('/')[1]
  console.log(to)

  if (s) {
    // Wait for DOM update before scrolling
    nextTick(() => {
      const el = document.querySelector(`#${s}`)
      console.log(el)

      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    })
  }
})

export default router
