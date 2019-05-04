<template lang="pug">
  article(class="post")
    header(class="post__header")
      div(class="rating-box")
        button(class="button rating-box__up")
          b-icon(icon="angle-up" size="is-small")
        div(class="rating-box__value") 1
        button(class="button rating-box__down")
          b-icon(icon="angle-down" size="is-small")
      div(class="post-details")
        div(class="post-details__info")
          ul(class="post-tag")
            li(class="post-tag__item"
                v-for="(tag, index) in post.tag"
                :key="index") {{ tag }}
          span(class="post-updated-date") {{ formatDate(post.updatedAt) }}
        h2 {{ post.title }}
    div(class="post__body")
      p {{ post.content }}
    footer(class="post__footer")
      nuxt-link(class="author-info" to="/")
        div(class="author-info__avatar")
          img(src="https://picsum.photos/id/1005/300/200")
        div(class="author-info__name") John
        div(class="author-info__posts") (12)
      div(class="buttons")
        button(class="button is-transparent")
          b-icon(icon="expand-arrows-alt" size="is-small")
        button(class="button is-transparent")
          b-icon(icon="twitter" pack="fab" size="is-small")
        button(class="button is-transparent")
          b-icon(icon="facebook-f" pack="fab" size="is-small")
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    post: {
      type: Object
    }
  },
  methods: {
    formatDate(date) {
      return this.$showDate(date)
    }
  }
}
</script>
