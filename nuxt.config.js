import pkg from './package'

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Lato:400,700'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#41b883' },

  /*
   ** Global CSS
   */
  css: [
    '~assets/sass/global.scss',
    '~assets/sass/_theme.scss',
    '~assets/sass/_layout.scss',
    '~assets/sass/_appHeader.scss',
    '~assets/sass/_appSidebar.scss',
    '~assets/sass/_postcard.scss',
    '~assets/sass/_postshow.scss',
    '~assets/sass/_postFilter.scss'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/formatDate.js'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    // Doc: https://github.com/nuxt-community/moment-module
    '@nuxtjs/moment'
  ],
  /*
   ** Share variables, mixins, functions across all style files
   */
  styleResources: {
    sass: ['~assets/sass/_variable.scss']
  },
  /*
   ** Buefy using FontAwesome icon
   */
  buefy: {
    // Reference: https://github.com/buefy/nuxt-buefy/issues/27#issuecomment-432452220
    defaultIconPack: 'fas',
    materialDesignIconsHRef:
      'https://use.fontawesome.com/releases/v5.4.1/css/all.css'
  },
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  env: {
    API: process.env.API || 'http://localhost:1337'
  }
}
