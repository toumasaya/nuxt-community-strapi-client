<template lang="pug">
  div(class="card")
    h1 {{ post.title }}
    p {{ post.content }}
    ul
      li(v-for="(tag, index) in post.tag", :key="index")

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

<style></style>
