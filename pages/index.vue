<template>
  <div>
    <Navigation></Navigation>
    <div class="callout large">
      <!--  TODO fix this -->
      <div class="row column text-center">
        <h1>{{ person.fields.name }}</h1>
        <h2>{{ person.fields.title }}</h2>
      </div>
    </div>

    <div class="row">
      <div class="medium-6 columns medium-push-6">
        <img class="thumbnail" :src="person.fields.image.fields.file.url + '?w=600'">
      </div>
      <div class="medium-6 columns medium-pull-6">
        <h2>Our Agency, our selves.</h2>
        <p>Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna diam porttitor mauris, quis sollicitudin sapien justo in libero. Vestibulum mollis mauris enim. Morbi euismod magna ac lorem rutrum elementum. Donec viverra auctor.</p>

        <ul>
          <li v-if='person.fields.facebook'>{{ person.fields.facebook }}</li>
          <li v-if='person.fields.twitter'>{{ person.fields.twitter }}</li>
          <li v-if='person.fields.github'>{{ person.fields.github }}</li>
        </ul>
      </div>
    </div>

    <hr>

    <div class="row column">
      <h3>Recent Articles</h3>
    </div>

    <div class="row">
      <div class="small-12 large-4 columns" v-for="post in posts">
        <time>3/6/2015</time>
        <img class="thumbnail"
          :src="post.fields.heroImage.fields.file.url + '?fit=scale&w=350&h=196'"
          :srcset="`${post.fields.heroImage.fields.file.url}?w=350&h=196&fit=fill 350w, ${post.fields.heroImage.fields.file.url}?w=1000&h=562&fit=fill 1000w, ${post.fields.heroImage.fields.file.url}?w=2000&h=1125&fit=fill 2000w`"
          sizes="(min-width: 1024px) 33vw, 100vw"
        >
        <h4><nuxt-link :to="{ name: 'blog-slug', params: { slug: post.fields.slug }}">{{ post.fields.title }}</nuxt-link></h4>
        <p>{{ post.fields.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {client} from '../plugins/contentful-client.js'
import Navigation from '~components/navigation.vue'

export default {
  asyncData ({ params }) {
    return Promise.all([
      client.getEntries({
        'sys.id': process.env.CTF_PERSON_ID
      }),
      client.getEntries({
        'content_type': process.env.CTF_BLOG_POST_TYPE_ID,
        order: '-sys.createdAt'
      })
    ]).then(([entries, posts]) => {
      return {
        person: entries.items[0],
        posts: posts.items
      }
    }).catch(console.error)
  },
  components: {
    Navigation
  }
}
</script>

<style>

</style>
