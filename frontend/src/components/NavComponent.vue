<template>
<div class="container">
    <div class="row">
        <router-link class="col-8 text-left" to="/">Groupomania</router-link>
        <router-link v-if="!userToken" class="col-2" to="/login">Connexion</router-link>
        <router-link v-if="!userToken" to="/signup" class="col-2">S'inscrire</router-link>
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
}
</script>
