// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
      meta: [{ name: 'theme-color', content: '#ffffff' }],
    },
  },
  devServer: {
    port: 4001,
  },
  nitro: {
    preset: process.env.NITRO_PRESET,
    prerender: {
      routes: ['/', '/search/court'],
    },
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
  modules: ['nuxt-svgo', '@hebilicious/vue-query-nuxt', '@vite-pwa/nuxt'],
  pwa: {
    disable: process.env.DISABLE_PWA === 'true',
    registerType: 'autoUpdate',
    manifest: {
      name: 'Smasher',
      short_name: 'Smasher',
      description: 'Smasher',
      start_url: '/',
      icons: [
        {
          src: '/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: '/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display: 'standalone',
      display_override: ['window-controls-overlay', 'standalone', 'browser'],
      lang: 'id',
      scope: '/',
      orientation: 'portrait',
      categories: ['sports'],
      launch_handler: {
        client_mode: 'navigate-existing',
      },
      id: '/?homescreen=1',
      dir: 'ltr',
      edge_side_panel: {
        preferred_width: 400,
      },
      prefer_related_applications: false,
    },
    manifestFilename: 'site.webmanifest',
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    client: {
      installPrompt: true,
      // you don't need to include this: only for testing purposes
      // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
      periodicSyncForUpdates: 3600 * 24,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
  },
})
