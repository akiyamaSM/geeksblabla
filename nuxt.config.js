import pkg from './package'
import env from 'dotenv'
import axios from 'axios'
export default {
  mode: 'universal',
  env: env.config().parsed,
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/tailwind.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
      ['storyblok-nuxt', {
          accessToken: env.config().parsed.token_key, cacheProvider: 'memory'
      }]
  ],
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
    }
  },
  generate:{
      routes: function () {
          return axios.get( `https://api.storyblok.com/v1/cdn/stories?starts_with=blablas&token=${env.config().parsed.token_key}&cv= ` + Math.floor(Date.now() / 1e3))
              .then((res) => {
                  const myBlablas = res.data.stories.map( blabla => blabla.full_slug );
                  return [
                      '/',
                      '/about',
                      '/blablas',
                      ... myBlablas
                  ]
              });
      }
  },
}
