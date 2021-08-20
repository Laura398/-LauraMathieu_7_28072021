<template>
<div class="container">
    <div class="row">
        <router-link class="col-8 text-left" to="/">Groupomania</router-link>
        <router-link v-if="!userToken" class="col-2" to="/login">Connexion</router-link>
        <router-link v-if="!userToken" to="/signup" class="col-2">S'inscrire</router-link>
        <router-link v-if="userToken" to="/about" class="col-2">Profil</router-link>
        <router-link v-if="userToken" to="/signup" class="col-2" @click="signout()">Déconnexion</router-link>
    </div>
</div>
    
</template>

<script>
export default {
  name: "Nav",
  computed: {
    userToken() {
      return this.$store.state.userToken
    }
  },
  methods: {
      signout() {
          localStorage.clear();
      }
  }
}
</script>
