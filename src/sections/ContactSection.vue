<!-- This section should contain links to my academic page, LinkedIn, Substack and email -->
<script setup lang="ts">
import { reactive } from 'vue'
enum Event {
  None = '',
  Substack = 'substack',
  LinkedIn = 'linkedin',
  Academic = 'my academic profile',
  Mail = 'my email',
}

const state = reactive({ info: Event.None })

function setInfo(event) {
  state.info = event
}
</script>

<template>
  <div class="contact-container">
    <div class="contact-title">Find me on {{ state.info }}</div>
    <div class="contact-links">
      <div class="contact-link-substack">
        <a href="https://burymeintexas.substack.com" target="_blank">
          <img
            src="/substack-logo.png"
            class="contact-link-logo"
            @mouseenter="setInfo(Event.Substack)"
            @mouseleave="setInfo(Event.None)"
          />
        </a>
      </div>
      <div class="contact-link-linkedin">
        <a href="https://linkedin.com" target="_blank">
          <img
            src="/linkedin-logo.png"
            class="contact-link-logo"
            @mouseenter="setInfo(Event.LinkedIn)"
            @mouseleave="setInfo(Event.None)"
          />
        </a>
      </div>
      <div class="contact-link-academic">
        <a href="https://www.theology.ox.ac.uk/dphil-students" target="_blank">
          <img
            src="/academic-logo.png"
            class="contact-link-logo"
            @mouseenter="setInfo(Event.Academic)"
            @mouseleave="setInfo(Event.None)"
          />
        </a>
      </div>
      <div class="contact-link-email">
        <a href="mailto:kieran.collery@gmail.com" target="_blank">
          <img
            src="/mail-logo.png"
            class="contact-link-logo"
            @mouseenter="setInfo(Event.Mail)"
            @mouseleave="setInfo(Event.None)"
          />
        </a>
      </div>
    </div>
    <div class="contact-disclaimer">
      <p class="contact-disclaimer-content">
        All design, animation and code by me, without the use of AI.
      </p>
      <p class="contact-disclaimer-content">
        © {{ new Date().getFullYear() }} Kieran Collery. All rights reserved.
      </p>
    </div>
  </div>
</template>

<style scoped>
.contact-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
}

.contact-title {
  font-family: 'Geist Pixel', sans-serif;
  font-size: 24px;
  color: black;
  font-weight: bold;
  margin-bottom: 48px;
}

.contact-links {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: left;
  gap: 4vw;
  margin-bottom: 48px;
}

.contact-link-logo {
  width: 5vw;
  image-rendering: pixelated;
  transition: all 0.3s ease-in-out;
}

.contact-link-logo:hover {
  filter: brightness(50%);
}

.contact-content {
  height: 24px;
  font-family: 'Geist Pixel', sans-serif;
  font-size: 18px;
  color: #555555;
  font-style: italic;
  margin-bottom: 48px;
}

.contact-disclaimer-content {
  font-family: 'Geist ', sans-serif;
  font-size: 12px;
  color: #999999;
  font-style: italic;
  text-align: center;
}
</style>
