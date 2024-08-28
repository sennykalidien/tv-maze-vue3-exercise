// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: false,

  modules: ["@nuxt/ui", "nuxt-api-party", "@nuxt/eslint", "@nuxt/image"],

  apiParty: {
    endpoints: {
      tvmaze: {
        url: "https://api.tvmaze.com",
      },
    },
  },
});
