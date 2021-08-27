import { createStore } from 'vuex'
import axios from 'axios'
import router from '../router'

export default createStore({

  state: {
    users: [],
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
    // Display one user
    SET_ALL_USERS(state, users) {
      state.users = users
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
    signup({commit}, data) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/api/auth/signup', data)
        .then(({data, status}) => {
          if (status === 200) {
            resolve(true);
            console.log(commit, data);
          } else if (status === 400) {
            alert("erreur")
          }
        })
        .catch (error => {
          reject(error);
        })
      });
    },

    // Login
    login({commit}, data) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/api/auth/login', data)
        .then(({data, status}) => {
          if (status === 200) {
            resolve(true);
            console.log(commit, data);
            localStorage.setItem('token', JSON.stringify(data.token));
            router.push("/posts");
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
              commit('SET_POSTS', response.data);
      })
    },

    // Add a post
    addPost({commit}, data) {
      const token = JSON.parse(localStorage.getItem('token'));
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/api/post', data, { 
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        })
        .then(({data, status}) => {
          if (status === 200) {
            resolve(true);
            console.log("yaaaaaay!", commit, status, data);
          } else {console.log(commit, status, data);}
        })
        .catch (error => {
          reject(error);
        })
      });
    },

    // Modify a post
    modifyPost({commit}, data) {
      const postId = JSON.parse(localStorage.getItem('postId'));
      const token = JSON.parse(localStorage.getItem('token'));
        axios.put(`http://localhost:3000/api/post/${postId}`, data, { 
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        })
        .then(({data, status}) => {
          if (status === 200) {
            console.log(commit, data);
            alert("New Task record updated successfully!");
          }
        })
        .catch (error => {
          console.log(error);
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
    postComment({commit}, data) {
      const token = JSON.parse(localStorage.getItem('token'));
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/api/comment', data, { 
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

    // Modify a comment
    modifyComment({commit}, data) {
      const commentId = JSON.parse(localStorage.getItem('commentId'));
      const token = JSON.parse(localStorage.getItem('token'));
        axios.put(`http://localhost:3000/api/comment/${commentId}`, data, { 
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        })
        .then(({data, status}) => {
          if (status === 200) {
            console.log(commit, data);
            alert("New Task record updated successfully!");
          }
        })
        .catch (error => {
          console.log(error);
        });
    },

    // Get all users
    getAllUsers({ commit }) {
      const token = JSON.parse(localStorage.getItem('token'));
      axios.get(`http://localhost:3000/api/auth/`, { 
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
          .then(response => {
              commit('SET_ALL_USERS', response.data)
              console.log(response.data)
      })
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

    // Profile change
    modifyProfile({commit}, data) {
      const userId = JSON.parse(localStorage.getItem('userId'));
      const token = JSON.parse(localStorage.getItem('token'));
        axios.put(`http://localhost:3000/api/auth/${userId}`, data, { 
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        })
        .then(({data, status}) => {
          if (status === 200) {
            console.log(commit, data);
            alert("New Task record updated successfully!");
          }
        })
        .catch (error => {
          console.log(error);
        });
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
