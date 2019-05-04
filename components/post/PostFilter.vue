<template lang="pug">
  div(class="post-filter")
    b-field(grouped)
      b-field
        b-select(placeholder="Tags" icon="tag")
          option tag1
          option tag2
      b-field
        b-select(placeholder="Hot" icon="fire")
          option tag1
          option tag2
      button(class="button")
        b-icon(icon="th-large")
      //- button(class="button")
      //-   b-icon(icon="list")
    button(class="button")
      b-icon(icon="plus-circle")
      span Add Post

</template>

<script>
export default {}
</script>

<style lang="scss"></style>
