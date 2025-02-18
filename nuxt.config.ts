export default defineNuxtConfig({
  devtools: { enabled: false },
  components: true,
  modules: [
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/google-fonts",
    "@nuxt/icon",
    '@pinia/nuxt',
  ],

  css: ["~/assets/css/tailwind.css"],
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  pinia: {
storesDirs: ["./store/**"],
  },

  compatibilityDate: "2025-02-15",
});
