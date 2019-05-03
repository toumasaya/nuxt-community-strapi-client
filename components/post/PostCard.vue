<template lang="pug">
  div(class="post-card" data-url="")
    div(class="post-card__content")
      div(class="post-card__header")
        nuxt-link(class="post-category" to="/") Nuxt Today
        ul(class="post-tag")
          li(class="post-tag__item" v-for="(tag, index) in post.tag" :key="index")
            |{{ tag }}
      div(class="post-card__title")
        h4.title: nuxt-link(to="/") {{ post.title }}
      div(class="post-card__footer")
        span(class="post-card__footer__item")
          |9
          b-icon(icon="fire" size="is-small")
        span(class="post-card__footer__item")
          |9
          b-icon(icon="comment" size="is-small")
        span(class="post-card__footer__item") yesterday at 15:00
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
  }
}
</script>
