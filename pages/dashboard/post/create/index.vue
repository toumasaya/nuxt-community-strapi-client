<template lang="pug">
  section.columns
    div(class="column is-8 is-offset-2")
      section.section
        h1.title New post
        div(class="form-section")
          PostForm(:categories="categories" @submit="creatPost")
</template>

<script>
import PostForm from '@/components/form/PostForm'

export default {
  components: {
    PostForm
  },
  data() {
    return {
      categories: this.$store.getters.getCategories
    }
  },
  methods: {
    creatPost(postData) {
      this.$store.dispatch('createPost', postData).then(() => {
        this.$router.push('/')
      })
    }
  }
}
</script>

<style lang="scss">
.form-section {
  margin: 1.5rem 0;
  padding: 2rem;
  border-radius: 0.5rem;
}
</style>
