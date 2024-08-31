// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  // temp disabled becasue of unresolved NuxtImg hydration errors...
  ssr: false,

  modules: ["@nuxt/ui", "nuxt-api-party", "@nuxt/eslint", "@nuxt/image", "@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],

  apiParty: {
    endpoints: {
      tvmaze: {
        url: "https://api.tvmaze.com",
      },
    },
  },
});
