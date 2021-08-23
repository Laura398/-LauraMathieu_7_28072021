<template>
  <div class="hello w-75 m-auto">
    <ul v-if="adminIsAdmin === true" class="list-group list-group-numbered">
      <li class="list-group-item d-flex justify-content-between align-items-start" v-for='user in users' :key='user.id'>
        <div class="ms-2 me-auto">
          <div class="fw-bold">{{user.firstName}} {{user.lastName}}</div>
          {{user.email}}
        </div>
        <span v-if="user.isAdmin === true" class="btn-info col-4 rounded-pill p-1">Administrateur</span> <input v-if="user.isAdmin === true" type="submit" class="btn-danger col-4 rounded-pill p-1" v-bind="user.id" @click="userIdForAdmin = user.id" :onclick="removeAdmin" value="Retirer le statut d'administrateur">
        <input v-if="user.isAdmin === false" type="submit" class="btn-primary col-4 rounded-pill p-1" v-bind="user.id" @click="userIdForAdmin = user.id" :onclick="addAdmin" value="Désigner en tant qu'administrateur">
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UsersList',
  data: () => ({
    isAdmin: '',
    userIdForAdmin: '',
    adminIsAdmin: JSON.parse(localStorage.getItem('isAdmin'))
  }),
  computed: {
    users() {
      return this.$store.state.users
    },
  },
  methods: {
    addAdmin() {
      const token = JSON.parse(localStorage.getItem('token'));
        axios.put(`http://localhost:3000/api/auth/${this.userIdForAdmin}`, { isAdmin: true }, { 
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        })
      window.location.reload();
    },
    removeAdmin() {
      const token = JSON.parse(localStorage.getItem('token'));
        axios.put(`http://localhost:3000/api/auth/${this.userIdForAdmin}`, { isAdmin: false }, { 
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        })
      window.location.reload();
    },
  },
  mounted() {
    this.$store.dispatch("getAllUsers");
  }
}


</script>

<style scoped>


</style>