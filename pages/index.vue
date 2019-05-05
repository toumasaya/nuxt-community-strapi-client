<template lang="pug">
  section(class="columns is-gapless")
    div(class="column is-6")
      section(class="section")
        PostFilter
        PostCard(v-for="post in getPosts" :key="post.id" :post="post")
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
  computed: {
    getPosts() {
      return this.$store.getters.getPosts
    }
  }
}
</script>
