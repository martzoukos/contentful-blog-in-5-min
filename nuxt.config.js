const ctfConfig = require('./.contentful')
const client = require('./plugins/contentful-client')

const config = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  /*
  ** ᕕ( ᐛ )ᕗ CTF-BLOG-IN-5-MINUTES
  ** Make client available everywhere via Nuxt plugins
  */
  plugins: ['~plugins/contentful-client'],

  /*
  ** ᕕ( ᐛ )ᕗ CTF-BLOG-IN-5-MINUTES
  ** Get all blog posts from Contentful
  ** and generate the needed files upfront
  */
  generate: {
    routes () {
      return client.getEntries({
        'content_type': ctfConfig.CTF_BLOG_POST_TYPE_ID
      }).then(entries => {
        return entries.items.map(entry => `blog/${entry.fields.slug}`)
      })
    }
  },

  env: ctfConfig
}

/*
** ᕕ( ᐛ )ᕗ CTF-BLOG-IN-5-MINUTES
**
** ATTENTION
**
** remove these lines when you're running on gh-pages
** with your own custom domain
*/
// if (process.env.npm_lifecycle_event === 'deploy:gh-pages') {
//   config.router = {
//     base: `/${require('./package').name}`
//   }
// }

module.exports = config
