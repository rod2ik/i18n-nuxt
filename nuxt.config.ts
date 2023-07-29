// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
  ],
  i18n: {
    /* module options */
    lazy: true,
    langDir: "locales",
    strategy: "no_prefix",
    locales: [
      {
        code: "en",
        iso: "en-US",
        name: "English",
        file: "en.json",
        flag: "🇺🇸"
      },
      {
        code: "fr",
        iso: "fr-FR",
        name: "Français",
        file: "fr.json",
        flag: "🇫🇷"
      },
    ],
    defaultLocale: "en",
  },
})
