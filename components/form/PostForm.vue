<template lang="pug">
  form(@submit.prevent="onSave")
    b-field(label="Post Category")
      b-select(v-model="editPost.category" placeholder="Select a Category")
        option(v-for="(cat, index) in categories" :key="index")
          |{{ cat }}
    b-field(label="Post Title")
      b-input(v-model="editPost.title" placeholder="Enter post title")
    b-field(label="Post Content")
      b-input(v-model="editPost.content" type="textarea")
    b-field(label="Add some tags")
      b-taginput(
        v-model="editPost.tag"
        ellipsis
        icon="tag"
        placeholder="Add a tag")
    div(class="buttons is-centered")
      button(class="button" @click="onCancel") Cancel
      button(class="button is-primary" type="submit") Create Your Post
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    categories: {
      type: Array
    },
    // eslint-disable-next-line vue/require-default-prop
    post: {
      type: Object,
      require: false
    }
  },
  data() {
    return {
      editPost: this.post
        ? { ...this.post }
        : {
            category: null,
            title: '',
            content: '',
            tags: []
          }
    }
  },
  methods: {
    onSave() {
      this.$emit('submit', this.editPost)
    },
    onCancel() {
      this.$router.push('/')
    }
  }
}
</script>

<style></style>
