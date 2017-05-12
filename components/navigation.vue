<template>
  <nav role="navigation">
    <ul>
      <li v-if="!/\/.*?\/.*/.test(route.path)" v-for="route in this.$router.options.routes">
        <nuxt-link :to=" { name: route.name }">{{ route.name }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  components: {}
}
</script>

<style>

</style>
