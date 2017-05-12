<template>
  <div>
    <h1 class="title">
      {{ person.fields.name }}
    </h1>
    <h2 class="subtitle">
      {{ person.fields.title }}
    </h2>
    <img :src="person.fields.image.fields.file.url + '?w=600'" width="300" class="mainImage">
    <div>
      Find me on
      <ul>
        <li v-if='person.fields.facebook'>{{ person.fields.facebook }}</li>
        <li v-if='person.fields.twitter'>{{ person.fields.twitter }}</li>
        <li v-if='person.fields.github'>{{ person.fields.github }}</li>
      </ul>

      <nuxt-link :to="{ name: 'blog' }">Blog</nuxt-link>
    </div>
  </div>
</template>

<script>
import client from '../plugins/contentful-client.js'

export default {
  asyncData ({ params }) {
    return client.getEntries({
      'sys.id': process.env.CTF_PERSON_ID
    }).then(entries => {
      return {
        person: entries.items[0]
      }
    })
  },
  components: {}
}
</script>

<style>

</style>
