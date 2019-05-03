<template lang="pug">
  header(class="app__header")
    nav(class="navbar")
      div(class="navbar-brand")
        nuxt-link(class="navbar-item has-text-primary" to="/"): strong Nuxt Community
      div(class="navbar-end")
        div(class="navbar-item")
          b-field
            b-input(placeholder="Search..."
              type="search"
              icon-pack="fas"
              icon="search")
        div(class="navbar-item")
          div(class="field theme-switch")
            b-switch(
              v-model="themeMode"
              true-value="Dark Mode",
              false-value="Light Mode"
              @change.native="setThemeMode") {{ themeMode }}
        div(class="navbar-item")
          div(class="buttons")
            nuxt-link(class="button is-primary" to="/"): strong Sign up
            nuxt-link(class="button" to="/") Sign in
</template>

<script>
export default {
  data() {
    return {
      themeMode: 'Dark Mode'
    }
  },
  methods: {
    setThemeMode() {
      const mode = this.themeMode

      if (mode === 'Dark Mode') {
        document.documentElement.setAttribute('data-theme', 'dark')
      } else if (mode === 'Light Mode') {
        document.documentElement.setAttribute('data-theme', 'light')
      }
    }
  }
}
</script>
