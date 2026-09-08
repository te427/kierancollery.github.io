<!-- This section should list publications, presentations and grants (when available) -->
<script setup lang="ts">
const publications = [
  {
    title: 'The last shall be first',
    subtitle: "A Kierkegaardian reflection on the western Church's decline",
    date: '01 Oct 2025',
    publication: 'Touchstone Journal Canada',
    link: 'https://www.touchstonejournal.ca/_files/ugd/9ef50a_18ab8a2b79104a1fb306a4b53bbd7254.pdf',
  },
]

const conferences = [
  {
    title: 'Inverted icons',
    subtitle: 'Causality, violence, and the exclusion of grace in Soviet prison tattooing',
    date: '13 Jun 2026',
    conference: 'Religion from the outside: Christian symbolism in non-Christian art',
    location: 'St Andrews, UK',
    link: 'https://events.st-andrews.ac.uk/events/religion-from-the-outside-christian-symbolism-in-non-christian-art/',
  },
]
</script>

<template>
  <div class="research-container">
    <div class="research-container-title">My research</div>
    <div class="research-container-content">
      <div class="research-publication-container">
        <div class="research-title">Publications</div>
        <div v-for="p in publications" :key="p.title" class="research-publication-content">
          <div class="research-title-date-container">
            <div class="research-title-date">
              <div class="research-title-content">{{ p.title }}</div>
              <div class="research-date-content">{{ p.date }}</div>
            </div>
            <div class="research-subtitle">{{ p.subtitle }}</div>
          </div>
          <div class="research-link">
            <a :href="p.link" target="_blank" class="item research-link-content">{{
              p.publication
            }}</a>
          </div>
        </div>
      </div>
      <div class="research-conference-container">
        <div class="research-title">Conferences</div>
        <div v-for="c in conferences" :key="c.title" class="research-conference-content">
          <div class="research-title-date-container">
            <div class="research-title-date">
              <div class="research-title-content">{{ c.title }}</div>
              <div class="research-date-content">{{ c.date }}</div>
            </div>
            <div class="research-subtitle">{{ c.subtitle }}</div>
          </div>
          <div class="research-link">
            <a :href="c.link" target="_blank" class="item research-link-content">{{
              c.conference
            }}</a>
          </div>
          <div class="research-location">{{ c.location }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.research-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
}

.research-container-title {
  font-family: 'Geist Pixel', sans-serif;
  font-size: 24px;
  color: #333333;
  font-weight: bold;
  margin-bottom: 24px;
  text-align: left;
}

.research-container-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: top;
  color: black;
  gap: 6vw;
}

.research-title {
  font-family: 'Geist', sans-serif;
  font-size: 18px;
  color: #777777;
  font-weight: bold;
  margin-bottom: 18px;
}

.research-title-date {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.research-title-content {
  font-family: 'Geist Pixel', sans-serif;
  font-size: 16px;
  color: black;
  font-weight: bold;
}

.research-date-content {
  font-family: 'Geist Pixel', sans-serif;
  font-size: 16px;
  color: black;
  font-weight: bold;
}

.research-subtitle {
  font-family: 'Geist', sans-serif;
  font-size: 16px;
  color: #555555;
  font-style: italic;
  margin-bottom: 8px;
}

.research-link-content {
  padding: 0;
  margin-bottom: 8px;
}

.research-location {
  font-family: 'Geist', sans-serif;
  font-size: 12px;
  color: #555555;
  font-style: italic;
}
</style>
