<!-- This section should contain a self-portrait (style?) and writeup about myself -->
<script></script>

<template>
  <div class="about-container" id="about">
    <div class="img-container">
      <div class="img-frame">
        <img class="img-content" src="/website_self_cropped.jpg" />
      </div>
    </div>
    <div class="text-container">
      <p class="text-title">Hey there!</p>
      <p class="text-content">
        My name is Kieran Collery, and I am a University of Oxford DPhil candidate in Theology and
        Religion currently studying the philosophical works of Lev Shestov and his assessment and
        critiques of modern Lutheran thought.
      </p>
      <p class="text-content">
        My topics of interest include the relationship between faith and reason, play, incongruous
        laughter, revelation, and otherness, all with a view to their application to Christian
        theology. My academic work has generally focused on existentialism and hermeneutics, and
        Kierkegaard and Gadamer in particular.
      </p>
      <p class="text-content">
        Previously, I studied theology at Durham and St. Andrews. Prior to my academic life, I
        worked as a software engineer. I am grateful to be able to call myself a Christian, and hope
        that my work may help to enrich the life of the Church catholic and those who knock upon
        God's door.
      </p>
    </div>
  </div>
</template>

<style scoped>
.about-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fdfdfd;
}

.img-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.img-frame {
  width: 40vw;
  aspect-ratio: 1/1;
  overflow: hidden;
  position: relative;
}

/* Fade edges to radial gradient for frame. */
.img-frame::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, transparent 55%, #fdfdfd 60%);
  pointer-events: none;
}

.img-content {
  border: solid 20px white;
}

.text-container {
  font-family: 'Geist', Helvetica, sans-serif;
  color: #555555;
  max-width: 40vw;
}

.text-title {
  font-family: 'Geist Pixel', sans-serif;
  font-size: 24px;
  color: black;
  font-weight: bold;
}

/* Touchscreen (mobile/tablet) */
@media (max-width: 600px) {
  .img-frame {
    width: 100vw;
  }

  .img-content {
    max-width: 100vw;
  }

  .about-container {
    flex-direction: column;
  }

  .text-container {
    max-width: 85vw;
  }
}

@media (min-width: 601px) {
  .img-content {
    max-width: 40vw;
  }
}
</style>
