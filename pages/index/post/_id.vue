<template lang="pug">
  PostShow(:post="post")
</template>

<script>
import PostShow from '@/components/post/PostShow'

export default {
  components: {
    PostShow
  },
  // could use basic context like:
  // asyncData(context) {...}
  // context.app.$axios
  // or use following:
  async asyncData({ $axios, error, params, env }) {
    try {
      const response = await $axios.get(`${env.API}/posts/${params.id}`)
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
