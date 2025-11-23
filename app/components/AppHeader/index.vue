<template>
  <header class="header">
    <img src="/logo.png" class="logo" alt="Gears Logo" />

    <nav class="nav">
      <a
        v-for="link in NAVIGATION_LINKS"
        :key="link.path"
        :class="getLinkClasses(link.path)"
        :href="link.path"
      >
        {{ link.name }}
      </a>
    </nav>
  </header>
</template>

<script setup>
// Imports
import { useRouter } from "vue-router";
import { computed } from "vue";
import { NAVIGATION_LINKS } from "./constants";

// Component Options

// Props and Emits

// Composition API Helpers

// Reactive Variables
const router = useRouter();

// Computed Properties
const currentRoute = computed(() => router.currentRoute.value.path);

// Watchers

// Lifecycle Hooks

// Methods
const getLinkClasses = (path) =>
  path === currentRoute.value ? "link active" : "link";
</script>

<style scoped>
.header {
  @apply sticky top-0 left-0 right-0 z-20
    h-16 px-4 flex items-center
    bg-bg border-b border-primary overflow-hidden;

  clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
  background-image: linear-gradient(
      135deg,
      rgba(255, 0, 0, 0.08) 0%,
      rgba(0, 0, 0, 0) 40%
    ),
    repeating-linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.02) 0px,
      rgba(255, 255, 255, 0.02) 1px,
      transparent 2px,
      transparent 4px
    );
}
.logo {
  @apply h-10 w-auto;

  filter: drop-shadow(0 0 8px rgba(255, 0, 0, 0.4));
}
.nav {
  @apply ml-6 flex items-center gap-6 text-text font-coalition;
}
.link {
  @apply transition-all duration-200 relative tracking-wider;

  text-shadow: 0 0 4px rgba(255, 0, 0, 0.3);
}
.link:hover {
  color: theme("colors.primary");
  transform: translateY(-1px);
}
.link::after {
  content: "";
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0%;
  height: 2px;
  background: theme("colors.primary");
  transition: width 0.25s ease;
}
.link:hover::after {
  width: 100%;
}
.link.active {
  @apply text-primary;
}
.link.active::after {
  width: 100%;
}
</style>
