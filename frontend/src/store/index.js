import { createStore } from 'vuex'
import axios from 'axios'
import router from '../router'

export default createStore({

  state: {
    posts: [],
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    display: false,
    text: "Notification placeholder text",
    class: "success",
    userToken: JSON.parse(localStorage.getItem('token')),
  },

  getters: {
  },

  mutations: {
    //Posts
    SET_POSTS(state, posts) {
      state.posts = posts
    },
    // Register
    SET_USER(state, user) {
      state.firstName = user.firstName,
      state.lastName = user.lastName,
      state.email = user.email,
      state.password = user.password
    },
    // Response from API
    SET_NOTIFICATION: (state, { display, text, alertClass }) => {
      state.notification.display = display;
      state.notification.text = text;
      state.notification.class = alertClass;
    },
  },

  actions: {

    // Signup
    signup({commit}, payload) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/api/auth/signup', payload)
        .then(({data, status}) => {
          if (status === 200) {
            resolve(true);
            console.log(commit, data);
          }
        })
        .catch (error => {
          reject(error);
        })
      });
    },

    // Login
    login({commit}, payload) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/api/auth/login', payload)
        .then(({data, status}) => {
          if (status === 200) {
            resolve(true);
            console.log(commit, data);
            localStorage.setItem('token', JSON.stringify(data.token));
            localStorage.setItem('userId', JSON.stringify(data.userId));
            localStorage.setItem('isAdmin', JSON.stringify(data.isAdmin));
          }
        })
        .catch (error => {
          reject(error);
        })
      });
    },

    // Get all posts
    getPosts({ commit }) {
      const token = JSON.parse(localStorage.getItem('token'));
      axios.get('http://localhost:3000/api/post', { 
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
          .then(response => {
              commit('SET_POSTS', response.data)
      })
    },

    // Redirect
    redirect() {
      if (JSON.parse(localStorage.getItem('token'))) {
        router.push("/posts");
      } else {
        router.push("/login");
      }
    }
  },

  modules: {
  }
})
