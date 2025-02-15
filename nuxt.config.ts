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
  ],   
   

  css: ["~/assets/css/tailwind.css"],
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },

  compatibilityDate: "2025-02-15",
});
