<template lang="pug">
  PostShow(:post="post")
</template>

<script>
import PostShow from '@/components/post/PostShow'

export default {
  components: {
    PostShow
  },
  async asyncData({ $axios, error, params }) {
    try {
      const response = await $axios.get(
        'http://localhost:1337/posts/' + params.id
      )
      return {
        post: response.data
      }
    } catch (e) {
      error({
        statusCode: 503,
        message: `Unable to fetch event no.${
          params.id
        } at this time. Please try again.`
      })
    }
  }
}
</script>

<style></style>
