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
      description: [
        'Focused historical and philosophical theology, culminating in a dissertation supervised by Prof. Judith Wolfe ' +
          "synthesising a model of the Lord's Supper in terms of the aesthetic philosophy of Hans-Georg Gadamer and the hermeneutic theology " +
          'of Eberhard Jüngel.',
      ],
    },
    [AcademicItems.Durham]: {
      title: 'PgDip Theology and Religion',
      start: 2024,
      end: 2025,
      location: 'Durham, UK',
      description: [
        'Studied biblical Greek, Reformation history, philosophical theology and Scholastic theology, and wrote a ' +
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
      description: [
        'Completed an intensive summer study program in Spanish, receiving a CEFR certification of B2.',
      ],
    },
    [AcademicItems.Ubc]: {
      title: 'BComm Business and Computer Science',
      start: 2011,
      end: 2017,
      location: 'Vancouver, BC',
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
      description: [
        "Acted as the senior front end engineer for Google's internal vendor onboarding and payment approvals " +
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
      description: [
        "Created content for presenting course material alongside fellow TA's, held office hours and ran weekly classes teaching business students business and professional skills.",
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

  state.content =
    contentMap[state.section][
      state.section === MenuItems.Academic ? state.academicSection : state.professionalSection
    ]
}

function toggleAcademicSubsection(v) {
  state.academicSection = v

  state.content = contentMap[state.section][state.academicSection]
}

function toggleProfessionalSubsection(v) {
  state.professionalSection = v

  state.content = contentMap[state.section][state.professionalSection]
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
      <div class="experience-content-container">
        <div class="experience-content-header">
          <div class="experience-content-title-date">
            <div class="experience-content-title">{{ content.title }}</div>
            <div class="experient-content-date">
              {{
                content.end
                  ? content.start === content.end
                    ? content.start
                    : `${content.start} - ${content.end}`
                  : `${content.start} - current`
              }}
            </div>
          </div>
          <div class="experience-content-location">{{ content.location }}</div>
        </div>
        <div class="experience-content-description">
          <p v-for="(par, i) in content.description" :key="i">{{ par }}</p>
        </div>
      </div>
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
  color: black;
}

.experience-section-container {
  width: 10vw;
}

.experience-subsection-container {
  width: 20vw;
}

.experience-content-container {
  width: 30vw;
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
</style>
