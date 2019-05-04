<template lang="pug">
  section(class="columns is-gapless")
    div(class="column is-6")
      section(class="section")
        PostFilter
        PostCard(v-for="post in posts" :key="post.id" :post="post")
    div(class="column is-6")
      section(class="section")
        section(class="post-content")
          nuxt-child
</template>

<script>
import PostCard from '@/components/post/PostCard'
import PostShow from '@/components/post/PostShow'
import PostFilter from '@/components/post/PostFilter'

export default {
  name: 'HomePage',
  components: {
    PostCard,
    PostShow,
    PostFilter
  },
  data() {
    return {
      isComponentModalActive: false,
      formProps: {}
    }
  },
  async asyncData({ $axios, error }) {
    try {
      const response = await $axios.get('http://localhost:1337/posts')
      // console.log(response.data)
      return {
        posts: response.data
      }
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events at this time. Please try again.'
      })
    }
  }
}
</script>
