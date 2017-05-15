<template>
  <div>
    <Navigation></Navigation>
    <main class="row column">
      <div >
        <h1>{{ post.fields.title }}</h1>
        <time>3/6/2015</time>
        <img class="thumbnail"
          :src="post.fields.heroImage.fields.file.url + '?fit=scale&w=350&h=196'"
          :srcset="`${post.fields.heroImage.fields.file.url}?w=350 350w, ${post.fields.heroImage.fields.file.url}?w=1000 1000w, ${post.fields.heroImage.fields.file.url}?w=2000 2000w`"
        >
        <vue-markdown>{{post.fields.body}}</vue-markdown>
      </div>
    </main>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import {client} from '../../plugins/contentful-client.js'
import Navigation from '~components/navigation.vue'

export default {
  asyncData ({ params }) {
    return client.getEntries({
      'content_type': process.env.CTF_BLOG_POST_TYPE_ID,
      'fields.slug': params.slug
    }).then(entries => {
      return {
        post: entries.items[0]
      }
    })
    .catch(console.error)
  },
  components: {
    Navigation,
    VueMarkdown
  }
}
</script>

<style>

</style>
