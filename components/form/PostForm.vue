<template lang="pug">
  form
    b-field(label="Post Category")
      b-select(placeholder="Select a Category")
        option tag1
        option tag2
    b-field(label="Post Title")
      b-input(placeholder="Enter post title")
    b-field(label="Post Content")
      b-input(type="textarea")
    b-field(label="Add some tags")
      b-taginput(
        v-model="tags"
        ellipsis
        icon="tag"
        placeholder="Add a tag")
    div(class="buttons is-centered")
      button.button Cancel
      button.button.is-primary Create Your Post
</template>

<script>
export default {
  props: {},
  data() {
    return {
      tags: ['new', 'hot', 'tech']
    }
  }
}
</script>

<style></style>
