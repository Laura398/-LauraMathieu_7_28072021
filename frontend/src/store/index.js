import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    posts: [],
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    display: false,
    text: "Notification placeholder text",
    class: "success"
  },
  getters: {
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts
    },
    SET_USER(state, user) {
      state.firstName = user.firstName,
      state.lastName = user.lastName,
      state.email = user.email,
      state.password = user.password
    },
    SET_NOTIFICATION: (state, { display, text, alertClass }) => {
      state.notification.display = display;
      state.notification.text = text;
      state.notification.class = alertClass;
    },
  },
  actions: {
    getPosts({ commit }) {
      axios.get('http://localhost:3000/api/post')
          .then(response => {
              commit('SET_POSTS', response.data)
      })
    },
    signup({ commit }, { firstName, lastName, email, password }) {
        axios.post('http://localhost:3000/api/auth/signup', {
            firstName,
            lastName,
            email,
            password
        })
        .then(response => {
          commit('SET_USER', response.data)
        });
    },
  },
  modules: {
  }
})
