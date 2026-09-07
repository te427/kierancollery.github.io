<!-- This section should contain an interactive map with places I've been -->
<script setup lang="ts">
import { reactive, computed } from 'vue'
import SelectMenu from '../components/SelectMenu.vue'

enum MenuItems {
  Academic = 'academic',
  Professional = 'professional',
}

enum AcademicItems {
  Oxford = 'university of oxford',
  StAndrews = 'university of st andrews',
  Durham = 'durham university',
  Picasso = 'instututo picasso',
  Ubc = 'university of british columbia',
}

enum ProfessionalItems {
  GoogleAustin = 'google austin',
  GoogleMtv = 'google mountain view',
  ActivisionBlizzard = 'activision blizzard',
  UbcCs = 'ubc faculty of computer science',
  UbcComm = 'ubc faculty of commerce',
}

const menuItems = [{ text: MenuItems.Academic }, { text: MenuItems.Professional }]

const academicItems = [
  { text: AcademicItems.Oxford },
  { text: AcademicItems.StAndrews },
  { text: AcademicItems.Durham },
  { text: AcademicItems.Picasso },
  { text: AcademicItems.Ubc },
]
const professionalItems = [
  { text: ProfessionalItems.GoogleAustin },
  { text: ProfessionalItems.GoogleMtv },
  { text: ProfessionalItems.ActivisionBlizzard },
  { text: ProfessionalItems.UbcCs },
  { text: ProfessionalItems.UbcComm },
]

const contentMap = {
  [MenuItems.Academic]: {
    [AcademicItems.Oxford]: {
      title: 'DPhil Theology and Religion',
      start: 2026,
      end: null,
      location: 'Oxford, UK',
      description: [],
    },
    [AcademicItems.StAndrews]: {
      title: 'MLitt Systematic and Historic Theology',
      start: 2025,
      end: 2026,
      location: 'St Andrews, UK',
      description: [],
    },
    [AcademicItems.Durham]: {
      title: 'PgDip Theology and Religion',
      start: 2024,
      end: 2025,
      location: 'Durham, UK',
      description: [],
    },
    [AcademicItems.Picasso]: {
      title: 'Intensive Spanish B1/B2',
      start: 2024,
      end: 2024,
      location: 'Malaga, Spain',
      description: [],
    },
    [AcademicItems.Ubc]: {
      title: 'BComm Business and Computer Science',
      start: 2011,
      end: 2017,
      location: 'Vancouver, BC',
      description: [],
    },
  },
  [MenuItems.Professional]: {
    [ProfessionalItems.GoogleAustin]: {
      title: 'Tech Lead, Approvals',
      start: 2022,
      end: 2024,
      location: 'Austin, TX',
      description: [],
    },
    [ProfessionalItems.GoogleMtv]: {
      title: 'Software Engineer, Fuchsia',
      start: 2019,
      end: 2021,
      location: 'Mountain View, CA',
      description: [],
    },
    [ProfessionalItems.ActivisionBlizzard]: {
      title: 'Capacity Planning Engineer, Demonware',
      start: 2016,
      end: 2019,
      location: 'Vancouver, BC',
      description: [],
    },
    [ProfessionalItems.UbcCs]: {
      title: 'Lead Teaching Assistant, CPSC 310',
      start: 2014,
      end: 2015,
      location: 'Vancouver, BC',
      description: [],
    },
    [ProfessionalItems.UbcComm]: {
      title: 'Teaching Assistant, COMM 202',
      start: 2013,
      end: 2014,
      location: 'Vancouver, BC',
      description: [
        'Created course content and ran weekly classes teaching business students business and professional skills.',
      ],
    },
  },
}

const defaultSection = menuItems[0].text
const defaultAcademicSection = academicItems[0].text
const defaultProfessionalSection = professionalItems[0].text

const state = reactive({
  section: defaultSection,
  academicSection: defaultAcademicSection,
  professionalSection: defaultProfessionalSection,
  content:
    contentMap[defaultSection][
      defaultSection === MenuItems.Academic ? defaultAcademicSection : defaultProfessionalSection
    ],
})

const isAcademic = computed(() => state.section === MenuItems.Academic)
const academicSection = computed(() => state.academicSection)
const professionalSection = computed(() => state.professionalSection)
const content = computed(() => state.content)

function toggleSection(v) {
  state.section = v
}

function toggleAcademicSubsection(v) {
  state.academicSection = v
}

function toggleProfessionalSubsection(v) {
  state.professionalSection = v
}
</script>

<template>
  <div class="experience-container">
    <div class="experience-map-container">
      <img class="experience-map-img-content" src="/worldmap_filled.png" />
    </div>
    <div class="experience-info-container">
      <div class="experience-section-container">
        <select-menu
          :items="menuItems"
          @select="toggleSection"
          :vertical="true"
          :selected="defaultSection"
        ></select-menu>
      </div>
      <div class="experience-subsection-container">
        <select-menu
          v-if="isAcademic"
          :items="academicItems"
          @select="toggleAcademicSubsection"
          :vertical="true"
          :selected="academicSection"
        ></select-menu>
        <select-menu
          v-else
          :items="professionalItems"
          @select="toggleProfessionalSubsection"
          :vertical="true"
          :selected="professionalSection"
        ></select-menu>
      </div>
      <div class="experience-content-container">{{ content }}</div>
    </div>
  </div>
</template>

<style scoped>
.experience-container {
  display: flexbox;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.experience-map-img-content {
  width: 60vw;
}

.experience-info-container {
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: top;
}
</style>
