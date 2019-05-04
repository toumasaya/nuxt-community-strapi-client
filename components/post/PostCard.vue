<template lang="pug">
  div(class="post-card" @click="showPost(post)")
    div(class="post-card__content")
      div(class="post-card__header")
        nuxt-link(class="post-category" to="/") Nuxt Today
        ul(class="post-tag")
          li(class="post-tag__item" v-for="(tag, index) in post.tag" :key="index")
            |{{ tag }}
      div(class="post-card__title")
        h4.title: nuxt-link(:to="'/post/' + post.id") {{ post.title }}
      div(class="post-card__footer")
        span(class="post-card__footer__item")
          |9
          b-icon(icon="fire" size="is-small")
        span(class="post-card__footer__item")
          |9
          b-icon(icon="comment" size="is-small")
        span(class="post-card__footer__item")
          |{{ formatDate }}
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
  data() {
    return {
      date: '2019-05-04T08:05:34.221Z'
    }
  },
  computed: {
    formatDate() {
      const now = this.$moment()
      // const fewHours = this.$moment().subtract(86400, 'seconds')

      // const diffHours = now.diff(fewHours, 'seconds')
      const diffDate = now.diff(this.date, 'seconds')
      let showDate

      console.log(diffDate)

      if (diffDate < 86400) {
        showDate = this.$moment(this.date).fromNow()
      } else if (diffDate >= 86400) {
        showDate = this.$moment(this.date).calendar()
      }
      return showDate
    }
  },
  methods: {
    showPost(post) {
      return this.$router.push('/post/' + post.id)
    }
  }
}
</script>
