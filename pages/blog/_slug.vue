<template>
  <div>
    <nuxt-link :to="{ name: 'blog' }">Blog</nuxt-link>
    {{ post.fields.title }}
  </div>
</template>

<script>
import {client} from '../../plugins/contentful-client.js'

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
  components: {}
}
</script>

<style>

</style>
