<template>
  <video controls class="w-full rounded-lg shadow-xl">
    <source src="/gow.mp4" type="video/mp4" />

    <track
      kind="captions"
      src="/captions.vtt"
      srclang="en"
      label="English Close Captions (CC)"
      default
    />

    <!-- <track
      kind="descriptions"
      src="/AD"
      srclang="en"
      label="English Audio Descriptions (AD)"
    /> -->
  </video>
</template>
