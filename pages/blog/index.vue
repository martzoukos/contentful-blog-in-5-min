<template>
  <div>
    <ul>
      <li v-for="post in posts">
        <nuxt-link :to="{ name: 'blog-slug', params: { slug: post.fields.slug }}">{{ post.fields.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import client from '../../plugins/contentful-client.js'

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
  components: {}
}
</script>

<style>

</style>
