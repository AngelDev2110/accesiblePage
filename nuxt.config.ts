// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            primary: "#F41A1A",
            bg: "#0f0f0f",
            text: "#f5f5f5",
          },
          fontFamily: {
            coalition: ["Coalition", "sans-serif"],
          },
        },
      },
    },
  },
});
