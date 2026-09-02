<!-- This section should contain a self-portrait (style?) and writeup about myself -->
<script></script>

<template>
  <div class="about-container">
    <div class="img-container">
      <div class="img-frame">
        <img src="/website_self_cropped.jpg" class="self" />
      </div>
    </div>
    <div class="text-container">ABOUT ME</div>
  </div>
</template>

<style scoped>
.about-container {
  display: flex;
  flex-direction: column;
  justify-content: center; /* Horizontal center */
  align-items: center; /* Vertical center */
}

.img-container {
  display: flex;
  justify-content: center; /* Horizontal center */
  align-items: center; /* Vertical center */
}

.img-frame {
  width: 40vw;
  aspect-ratio: 1/1;
  overflow: hidden;
  position: relative;
}

/* Fade all edges to white using a radial gradient */
.img-frame::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, transparent 55%, white 65%);
  pointer-events: none;
}

.self {
  border: solid 20px white;
}

/* Touchscreen () */
@media (max-width: 600px) {
  .img-frame {
    width: 100vw;
  }

  .self {
    max-width: 100vw;
  }

  .mobile-only {
    display: block;
  }
}

@media (min-width: 601px) {
  .self {
    max-width: 40vw;
  }
  .desktop-only {
    display: block;
  }
}
</style>
