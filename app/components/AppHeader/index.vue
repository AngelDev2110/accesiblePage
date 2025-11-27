<template>
  <header class="header bg-tech">
    <img src="/logo.png" class="logo" alt="Gears Logo" />

    <nav class="nav" aria-label="Main Navigation">
      <ul>
        <li v-for="link in NAVIGATION_LINKS" :key="link.path">
          <a :class="getLinkClasses(link.path)" :href="link.path">
            {{ link.name }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
// Imports
import { NAVIGATION_LINKS } from "./constants";
import { useLinkClasses } from "@/composables/useLinkClasses";

// Component Options

// Props and Emits

// Composition API Helpers

// Reactive Variables

// Computed Properties

// Watchers

// Lifecycle Hooks

// Methods
const { getLinkClasses } = useLinkClasses();
</script>

<style scoped>
.header {
  @apply sticky top-0 left-0 right-0 z-20
    h-16 px-4 flex items-center
    bg-bg border-b border-primary overflow-hidden;

  clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
}
.logo {
  @apply h-10 w-auto;

  filter: drop-shadow(0 0 8px rgba(255, 0, 0, 0.4));
}
.nav {
  @apply ml-6 text-text font-coalition overflow-x-auto;
}

.nav ul {
  @apply flex items-center gap-6;
}
</style>
