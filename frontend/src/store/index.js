import { createStore } from 'vuex'
import axios from 'axios'
import router from '../router'

export default createStore({

  state: {
    posts: [],
    comments: [],
    oneUser: [],
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    display: false,
    notText: "Notification placeholder text",
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
    //Comments
    SET_COMMENTS(state, comments) {
      state.comments = comments
    },
    // Register
    SET_USER(state, user) {
      state.firstName = user.firstName,
      state.lastName = user.lastName,
      state.email = user.email,
      state.password = user.password
    },
    // Display one user
    SET_ONE_USER(state, oneUser) {
      state.oneUser = oneUser
    },
    // Response from API
    SET_NOTIFICATION: (state, { display, notText, alertClass }) => {
      state.notification.display = display;
      state.notification.notText = notText;
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

    // Add a post
    addPost({commit}, payload) {
      const token = JSON.parse(localStorage.getItem('token'));
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/api/post', payload, { 
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        })
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

    // Get comments
    getComments({ commit }) {
      const token = JSON.parse(localStorage.getItem('token'));
      axios.get('http://localhost:3000/api/comment', { 
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
          .then(response => {
              commit('SET_COMMENTS', response.data)
      })
    },

    // Post comment
    postComment({commit}, payload) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/api/comment', payload)
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

    // Get one user
    getOneUser({ commit }) {
      const userId = JSON.parse(localStorage.getItem('userId'));
      const token = JSON.parse(localStorage.getItem('token'));
      axios.get(`http://localhost:3000/api/auth/${userId}`, { 
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
          .then(response => {
              commit('SET_ONE_USER', response.data)
              console.log(response.data)
      })
    },

    // Modify Profile
    modifyProfile({commit}, payload) {
      const userId = JSON.parse(localStorage.getItem('userId'));
      const token = JSON.parse(localStorage.getItem('token'));
        axios.put(`http://localhost:3000/api/auth/${userId}`, { 
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }, payload
        })
      console.log(commit)
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
