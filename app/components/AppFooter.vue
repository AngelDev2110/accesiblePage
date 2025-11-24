<template>
  <footer class="footer bg-tech">
    <div class="footer-content">
      <nav class="footer-nav">
        <a
          v-for="link in NAVIGATION_LINKS"
          :key="link.path"
          :href="link.path"
          :class="getLinkClasses(link.path)"
        >
          {{ link.name }}
        </a>
      </nav>
    </div>

    <div class="footer-bottom">
      © {{ new Date().getFullYear() }} Gears. All rights reserved.
    </div>
  </footer>
</template>

<script setup>
// Imports
import { NAVIGATION_LINKS } from "./AppHeader/constants";
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
.footer {
  @apply w-full mt-20 text-text pt-8 pb-4 relative;

  clip-path: polygon(0 10%, 100% 0%, 100% 100%, 0% 100%);
}

.footer-content {
  @apply max-w-6xl mx-auto px-4
         flex flex-col md:flex-row justify-center items-center;
}

.footer-nav {
  @apply flex flex-col md:flex-row gap-3 md:gap-6 text-sm 
         font-coalition tracking-wide;
}

.footer-link {
  @apply transition-all relative;
}

.footer-bottom {
  @apply text-center text-xs opacity-60 mt-6 tracking-wide text-text;
}
</style>
