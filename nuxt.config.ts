// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 4001,
  },
  nitro: {
    preset: 'vercel',
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
      extensions: ['.vue'],
    },
  ],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  typescript: {
    typeCheck: true,
  },
  modules: ['nuxt-svgo', '@hebilicious/vue-query-nuxt'],
})
