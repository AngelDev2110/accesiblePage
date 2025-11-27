<template>
  <footer class="footer bg-tech">
    <div class="footer-rights">
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

.footer-rights {
  @apply text-center text-xs opacity-60 mt-6 tracking-wide text-text;
}
</style>
