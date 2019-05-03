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
            li(class="post-tag__item") General
            li(class="post-tag__item") Modeling
            li(class="post-tag__item") Rigging
          span(class="post-updated-date") yesterday at 15:00
        h2 Some post title here
    div(class="post__body")
      p This is useful in conjunction with the search feature - for example when having to mass clean-up imported alembic files etc. This would be consistent with the 3D View where you can't select hidden objects too.
    footer(class="post__footer")
      nuxt-link(class="author-info" to="/")
        div(class="author-info__avatar")
          img(src="https://picsum.photos/id/1005/300/200")
        div(class="author-info__name") John
        div(class="author-info__posts") (12)
      div(class="buttons")
        button(class="button is-circled")
          b-icon(icon="expand-arrows-alt" size="is-small")
        button(class="button is-circled")
          b-icon(icon="twitter" pack="fab" size="is-small")
        button(class="button is-circled")
          b-icon(icon="facebook-f" pack="fab" size="is-small")
</template>
