export default {
  /**
   * Set generate configuraiton
   * Doc: https://nuxtjs.org/guide/routing#spa-fallback
   */
  generate: {
    fallback: true
  },

  /**
   * Set head configuraiton
   * Doc: https://nuxtjs.org/api/configuration-head/
   */
  head: {

    title: 'Puppy Link Component Library',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.3.1/css/all.css' },
    ]
  },

  /**
   * Global CSS
   */
  css: [
    '~/assets/css/tailwind.css'
  ],

  /**
   * Set mode configuration
   * Doc: https://nuxtjs.org/api/configuration-mode
   */
  mode: 'spa',

  /**
   * Set loading configuration
   * Doc: https://nuxtjs.org/api/configuration-loading
   */
  loading: {
    color: '#3B8070'
  },

  /**
   * Set plugins configuration
   * Doc: https://nuxtjs.org/api/configuration-plugins
   */
  plugins: [
    '~plugins/components',
    '~plugins/vuep',
  ],

  /**
   * Set build configuration
   * Doc: https://nuxtjs.org/api/configuration-build
   */
  build: {
    postcss: {
      plugins: {
        tailwindcss: './tailwind.config.js'
      }
    },

    /**
     * You can extend webpack config here
     */
    extend(config, ctx) {
      //
    }
  }
}
