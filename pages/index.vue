<template lang="pug">
  section(class="section")
    PostCard(v-for="post in posts" :key="post.id" :post="post")
</template>

<script>
import Strapi from 'strapi-sdk-javascript/build/main'
import PostCard from '@/components/PostCard'

const apiUrl = process.env.API_URL || 'http://localhost:1337'
const strapi = new Strapi(apiUrl)

export default {
  name: 'HomePage',
  components: {
    PostCard
  },
  async asyncData({ error }) {
    try {
      const response = await strapi.request('post', '/graphql', {
        data: {
          query: `query {
            posts {
              _id,
              title,
              content,
              comment,
              tag
            }
          }
          `
        }
      })

      return {
        posts: response.data.posts
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
