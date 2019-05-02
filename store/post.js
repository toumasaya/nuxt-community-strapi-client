export const state = () => ({
  posts: []
})

export const getters = {
  loadPosts: state => state.posts
}

export const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts
  }
}
