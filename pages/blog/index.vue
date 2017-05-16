<template>
  <div>
    <Navigation></Navigation>
    <div class="callout large">
      <div class="row column text-center">
        <h1>Blog</h1>
      </div>
    </div>

    <div class="row">
      <div class="small-12 columns" v-for="post in posts">
        <time>3/6/2015</time>
        <img class="thumbnail"
          :src="post.fields.heroImage.fields.file.url + '?fit=scale&w=350&h=196'"
          :srcset="`${post.fields.heroImage.fields.file.url}?w=350&h=196 350w, ${post.fields.heroImage.fields.file.url}?w=1000&h=562 1000w, ${post.fields.heroImage.fields.file.url}?w=2000&h=1125 2000w`"
        >
        <h4><nuxt-link :to="{ name: 'blog-slug', params: { slug: post.fields.slug }}">{{ post.fields.title }}</nuxt-link></h4>
        <p>{{ post.fields.description }}</p>

        <nuxt-link :to="{ name: 'blog-slug', params: { slug: post.fields.slug }}" :aria-label="post.fields.title">Read more</nuxt-link>
      </div>

      <hr>
    </div>
  </div>
</template>

<script>
import {client} from '../../plugins/contentful-client.js'
import Navigation from '~components/navigation.vue'

export default {
  asyncData ({ params }) {
    return client.getEntries({
      'content_type': process.env.CTF_BLOG_POST_TYPE_ID
    }).then(entries => {
      return {
        posts: entries.items
      }
    })
  },
  components: {
    Navigation
  }
}
</script>

<style>

</style>
