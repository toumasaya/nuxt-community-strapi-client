<template lang="pug">
  div(class="app")
    div(class="app__sidebar")
      aside(class="sidebar")
        AppSidebar
    div(class="app__content")
      AppHeader
      nuxt
</template>

<script>
import AppHeader from '@/components/app/AppHeader'
import AppSidebar from '@/components/app/AppSidebar'

export default {
  components: {
    AppHeader,
    AppSidebar
  }
}
</script>
