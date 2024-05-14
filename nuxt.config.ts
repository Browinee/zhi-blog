export default defineNuxtConfig({
  modules: [
    "@vueuse/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "nuxt-icon",
    "nuxt-aos",
    "@vueuse/motion/nuxt",
  ],
  app: {
    baseURL: "/zhi-blog/",
  },
  devtools: { enabled: false },
  devServer: {
    port: 3333,
  },
});
