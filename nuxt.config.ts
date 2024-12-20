// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  // Import Bootstrap CSS
  css: [
    'bootstrap/dist/css/bootstrap.min.css', 
  ],

  // Import Bootstrap JS
  app: {
    head: {
      script: [
        {src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js', defer: true}
      ]
    }
  }
})
