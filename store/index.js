import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      categories: ['Nuxt Today', 'Nuxt Module', 'Nuxt Devs'],
      posts: []
    },
    getters: {
      getPosts: state => state.posts,
      getCategories: state => state.categories
    },
    mutations: {
      SET_POSTS(state, posts) {
        state.posts = posts
      },
      ADD_POST(state, post) {
        state.posts.push(post)
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return context.app.$axios
          .get('http://localhost:1337/posts')
          .then(res => {
            // console.log(res.data)
            vuexContext.commit('SET_POSTS', res.data)
          })
          .catch(e => context.error(e))
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('SET_POSTS', posts)
      },
      createPost(vuexContext, post) {
        const postData = {
          ...post,
          createdAt: new Date(),
          updatedAt: new Date(),
          comments: [],
          rating: 0
        }
        return this.$axios
          .post('http://localhost:1337/posts', postData)
          .then(result => {
            vuexContext.commit('ADD_POST', {
              ...postData,
              id: result.data.id
            })
          })
          .catch(e => console.log(e))
      }
    }
  })
}

export default createStore
