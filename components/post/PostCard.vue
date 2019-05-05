<template lang="pug">
  div(class="post-card" @click="showPost(post)")
    div(class="post-card__content")
      div(class="post-card__header")
        nuxt-link(class="post-category" to="/") {{ post.category }}
        ul(class="post-tag has-suffix")
          li(class="post-tag__item" v-for="(tag, index) in shorterList" :key="index")
            |{{ tag }}
      div(class="post-card__title")
        h4.title: nuxt-link(:to="'/post/' + post.id") {{ post.title }}
      div(class="post-card__footer")
        span(class="post-card__footer__item")
          |{{ post.rating }}
          b-icon(icon="fire" size="is-small" type="is-danger" v-if="post.rating > 5")
          b-icon(icon="heart" size="is-small" v-else)
        span(class="post-card__footer__item")
          |{{ post.comment ? post.comment.length : 0 }}
          b-icon(icon="comment" size="is-small")
        span(class="post-card__footer__item")
          |{{ formatDate(post.updatedAt) }}
    div(class="post-card__img")
      img(src="https://picsum.photos/id/800/600/400")
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    post: {
      type: Object
    }
  },
  computed: {
    shorterList() {
      return this.post.tag.slice(0, 2)
    }
  },
  methods: {
    showPost(post) {
      return this.$router.push('/post/' + post.id)
    },
    formatDate(date) {
      return this.$showDate(date)
    }
  }
}
</script>
