<!-- This section should contain an interactive map with places I've been -->
<script setup lang="ts">
import { reactive, computed, useTemplateRef } from 'vue'
import SelectMenu from '../components/SelectMenu.vue'

enum MenuItems {
  Academic = 'academic',
  Professional = 'professional',
}

enum AcademicItems {
  Oxford = 'oxford',
  StAndrews = 'st andrews',
  Durham = 'durham',
  Picasso = 'picasso',
  Ubc = 'ubc',
}

enum ProfessionalItems {
  GoogleAustin = 'google atx',
  GoogleMtv = 'google mtv',
  ActivisionBlizzard = 'activision blizzard',
  UbcCs = 'ubc cs',
  UbcComm = 'ubc commerce',
}

type CVItems = AcademicItems | ProfessionalItems
type CVText = {
  text: CVItems
}

const menuItems = [{ text: MenuItems.Academic }, { text: MenuItems.Professional }]

const academicItems: CVText[] = [
  { text: AcademicItems.Oxford },
  { text: AcademicItems.StAndrews },
  { text: AcademicItems.Durham },
  { text: AcademicItems.Picasso },
  { text: AcademicItems.Ubc },
]
const professionalItems: CVText[] = [
  { text: ProfessionalItems.GoogleAustin },
  { text: ProfessionalItems.GoogleMtv },
  { text: ProfessionalItems.ActivisionBlizzard },
  { text: ProfessionalItems.UbcCs },
  { text: ProfessionalItems.UbcComm },
]

type CVItem = {
  title: string
  start: number
  end: number | null
  location: string
  xy: {
    x: number
    y: number
  }
  description: string[]
}

type Content = Partial<Record<MenuItems, Partial<Record<CVItems, CVItem>>>>

const contentMap: Content = {
  [MenuItems.Academic]: {
    [AcademicItems.Oxford]: {
      title: 'DPhil Theology and Religion',
      start: 2026,
      end: null,
      location: 'Oxford, UK',
      xy: { x: 40, y: 23 },
      description: [
        "Currently undertaking a doctorate focusing on the philosophy of Lev Shestov and it's relationship to historic and modern Lutheran " +
          'thought, supervised by Prof. Johannes Zachhuber.',
      ],
    },
    [AcademicItems.StAndrews]: {
      title: 'MLitt Systematic and Historic Theology',
      start: 2025,
      end: 2026,
      location: 'St Andrews, UK',
      xy: { x: 40, y: 19 },
      description: [
        'Focused historical and philosophical theology, culminating in a dissertation supervised by Prof. Judith Wolfe ' +
          "synthesising a model of the Lord's Supper in terms of the aesthetic philosophy of Hans-Georg Gadamer and the hermeneutic theology " +
          'of Eberhard Jüngel.',
        'Graduated with distinction.',
      ],
    },
    [AcademicItems.Durham]: {
      title: 'PgDip Theology and Religion',
      start: 2024,
      end: 2025,
      location: 'Durham, UK',
      xy: { x: 40.5, y: 20 },
      description: [
        'Studied biblical Greek, church history and historic theology and philosophy, and wrote a ' +
          'dissertation supervised by Dr. Marcus Pound on the relationship between Christian orthopraxy and orthodoxy ' +
          'in light of the philosophies of Martin Buber and Søren Kierkegaard.',
        'Graduated with distinction.',
      ],
    },
    [AcademicItems.Picasso]: {
      title: 'Intensive Spanish B1/B2',
      start: 2024,
      end: 2024,
      location: 'Malaga, Spain',
      xy: { x: 39, y: 31 },
      description: [
        'Completed an intensive summer study program in Spanish, receiving a CEFR certification of B2.',
      ],
    },
    [AcademicItems.Ubc]: {
      title: 'BComm Business and Computer Science',
      start: 2011,
      end: 2017,
      location: 'Vancouver, BC',
      xy: { x: 9.5, y: 24 },
      description: [
        'Double majored in business technology management and computer science, completing the Computer Science Co-op program.',
      ],
    },
  },
  [MenuItems.Professional]: {
    [ProfessionalItems.GoogleAustin]: {
      title: 'Tech Lead, Approvals',
      start: 2022,
      end: 2024,
      location: 'Austin, TX',
      xy: { x: 16, y: 35 },
      description: [
        "Acted as senior front end engineer for Google's internal payment approvals " +
          'platform, where I rearchitected the approvals platform to use a modern tech stack and led a team in its implementation and launch.',
        'Additionally led workshops on front end engineering principles, aided in Google hiring, mentored junior team members, ' +
          'and was a lead in the Google Christians Austin chapter.',
      ],
    },
    [ProfessionalItems.GoogleMtv]: {
      title: 'Software Engineer, Fuchsia',
      start: 2019,
      end: 2021,
      location: 'Mountain View, CA',
      xy: { x: 10, y: 31 },
      description: [
        'Worked as a feature lead on several Google Home Hub UI components during the port to ' +
          "Google's open-source Fuchsia operating system, owning notifications and alerts and receiving a promotion for my work.",
        'Regularly interviewed candidates and helped organise team retrospectives and social events.',
      ],
    },
    [ProfessionalItems.ActivisionBlizzard]: {
      title: 'Capacity Planning Engineer, Demonware',
      start: 2016,
      end: 2019,
      location: 'Vancouver, BC',
      xy: { x: 9.5, y: 24 },
      description: [
        "Interned and later hired as a full time software engineer for Activision Blizzard's primary" +
          'capacity planning team for Call of Duty and other console-focused offerings.',
        'Later promoted to intermediate engineer for my efforts leading a project to provide data visualisation ' +
          "tools and API's to internal teams to manage their capacity.",
      ],
    },
    [ProfessionalItems.UbcCs]: {
      title: 'Lead Teaching Assistant, CPSC 310',
      start: 2014,
      end: 2015,
      location: 'Vancouver, BC',
      xy: { x: 9.5, y: 24 },
      description: [
        'Began as a teaching assistant running lab tutorials for students building full stack applications and ' +
          'conducting office hours to clarify software engineering principles discussed in course content.',
        'Later promoted to lead teaching assistant, where I reconstructed the lab application development tutorial ' +
          'alongside previous duties, and was recognised with an award within the deparment.',
      ],
    },
    [ProfessionalItems.UbcComm]: {
      title: 'Teaching Assistant, COMM 202',
      start: 2013,
      end: 2014,
      location: 'Vancouver, BC',
      xy: { x: 9.5, y: 24 },
      description: [
        "Created content for presenting course material alongside fellow TA's, held office hours and ran weekly classes teaching business students business and professional skills.",
      ],
    },
  },
}

const defaultSection = menuItems[0]!.text
const defaultAcademicSection = academicItems[0]!.text
const defaultProfessionalSection = professionalItems[0]!.text

const state = reactive({
  section: defaultSection,
  academicSection: defaultAcademicSection,
  professionalSection: defaultProfessionalSection,
  content:
    contentMap[defaultSection]![
      defaultSection === MenuItems.Academic ? defaultAcademicSection : defaultProfessionalSection
    ],
})

const isAcademic = computed(() => state.section === MenuItems.Academic)
const academicSection = computed(() => state.academicSection)
const professionalSection = computed(() => state.professionalSection)
const content = computed(() => state.content)
const markerStyle = computed(() => {
  const { xy } = state.content!

  return { left: `${xy.x}%`, top: `${xy.y}%` }
})

function toggleSection(v: unknown) {
  state.section = v as MenuItems

  state.content =
    contentMap[state.section]![
      state.section === MenuItems.Academic ? state.academicSection : state.professionalSection
    ]

  animateSubsec()
  animateDesc(true)
}

function toggleAcademicSubsection(v: unknown) {
  state.academicSection = v as AcademicItems

  state.content = contentMap[state.section]![state.academicSection]

  animateDesc()
}

function toggleProfessionalSubsection(v: unknown) {
  state.professionalSection = v as ProfessionalItems

  state.content = contentMap[state.section]![state.professionalSection]

  animateDesc()
}

const descRef = useTemplateRef('desc')
const subsecRef = useTemplateRef('subsec')

function animateDesc(delay = false) {
  descRef!.value!.classList!.remove('desc-animate')
  descRef!.value!.classList!.remove('desc-animate-delay')
  void descRef!.value!.offsetWidth
  descRef!.value!.classList!.add(delay ? 'desc-animate-delay' : 'desc-animate')
}

function animateSubsec() {
  subsecRef!.value!.classList!.remove('subsec-animate')
  void subsecRef!.value!.offsetWidth
  subsecRef!.value!.classList!.add('subsec-animate')
}
</script>

<template>
  <div class="experience-container">
    <div class="experience-map-container">
      <div class="experience-map-img">
        <img class="experience-map-img-content" src="/worldmap_filled.png" />
        <img class="experience-map-img-marker" :style="markerStyle" src="/marker.gif" />
      </div>
    </div>
    <div class="experience-title-container">What I've been up to...</div>
    <div class="experience-info-container">
      <div class="experience-section-container">
        <select-menu
          :items="menuItems"
          @select="toggleSection"
          :vertical="true"
          :leftAlign="true"
          :selected="defaultSection"
        ></select-menu>
      </div>
      <div class="experience-subsection-container" ref="subsec">
        <select-menu
          v-if="isAcademic"
          :items="academicItems"
          @select="toggleAcademicSubsection"
          :vertical="true"
          :leftAlign="true"
          :selected="academicSection"
        ></select-menu>
        <select-menu
          v-else
          :items="professionalItems"
          @select="toggleProfessionalSubsection"
          :vertical="true"
          :leftAlign="true"
          :selected="professionalSection"
        ></select-menu>
      </div>
      <div class="experience-content-container" ref="desc">
        <div class="experience-content-header">
          <div class="experience-content-title">{{ content!.title }}</div>
          <div class="experience-content-title-date">
            <div class="experience-content-location">{{ content!.location }}</div>
            <div class="experience-content-date">
              {{
                content!.end
                  ? content!.start === content!.end
                    ? content!.start
                    : `${content!.start} - ${content!.end}`
                  : `${content!.start} - current`
              }}
            </div>
          </div>
        </div>
        <div class="experience-content-description">
          <p v-for="(par, i) in content!.description" :key="i">{{ par }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.experience-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.experience-map-img {
  position: relative;
}

.experience-map-img-content {
  width: 60vw;
}

.experience-map-img-marker {
  width: 7.5vw;
  position: absolute;
  top: 0;
  left: 0;
}

.experience-info-container {
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: top;
  color: black;
}

.experience-title-container {
  font-family: 'Geist Pixel', sans-serif;
  font-size: 24px;
  color: #555555;
  font-weight: bold;
  margin-bottom: 24px;
  width: 60vw;
}

.experience-section-container {
  width: 8vw;
}

.experience-subsection-container {
  width: 16vw;
}

.experience-content-container {
  width: 36vw;
  padding-left: 10px;
}

.experience-content-header {
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: top;
}

.experience-content-title-date {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: top;

  font-family: 'Geist Pixel', sans-serif;
  font-size: 18px;
  color: black;
  font-weight: bold;
}

.experience-content-title {
  font-family: 'Geist Pixel', sans-serif;
  font-size: 18px;
  color: black;
  font-weight: bold;
}

.experience-content-date {
  margin-top: 10px;
  font-family: 'Geist Pixel', sans-serif;
  font-size: 16px;
  color: #555555;
  font-weight: bold;
}

.experience-content-location {
  margin-top: 10px;
  font-style: italic;
  font-family: 'Geist Pixel', sans-serif;
  font-size: 16px;
  color: #555555;
  font-weight: bold;
}

.experience-content-description {
  font-family: 'Geist', Helvetica, sans-serif;
  color: #555555;
  max-width: 40vw;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.subsec-animate {
  animation: fadeInLeft 500ms linear both;
}

.desc-animate {
  animation: fadeInLeft 500ms linear both;
}

.desc-animate-delay {
  animation: fadeInLeft 500ms linear both;
  animation-delay: 200ms;
}

@media (max-width: 600px) {
  .experience-map-img-content {
    width: 100vw;
    margin-bottom: 8px;
  }

  .experience-map-img-marker {
    width: 12.5vw;
  }

  .experience-title-container {
    width: 85vw;
    margin-bottom: 8px;
    font-size: 18px;
  }

  .experience-info-container {
    flex-direction: column;
    gap: 4px;
  }
  .experience-section-container {
    width: 85vw;
  }

  .experience-subsection-container {
    width: 85vw;
    margin-bottom: 8px;
  }

  .experience-content-container {
    width: 85vw;
    padding-left: 0;
  }

  .experience-content-title {
    font-size: 14px;
  }

  .experience-content-date {
    font-size: 12px;
    width: 25vw;
    margin: 0;
  }

  .experience-content-location {
    margin: 0;
    font-size: 12px;
  }

  .experience-content-description {
    font-size: 12px;
    max-width: 85vw;
    width: 85vw;
  }
}
</style>
