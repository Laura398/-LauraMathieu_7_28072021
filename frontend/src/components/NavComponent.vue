<template>
<div class="container">
    <div class="row">
        <router-link class="col-8 text-left" to="/"><img src="../assets/icon-left-font.png" alt="Responsive image"/></router-link>
        <router-link v-if="!userToken" class="link-1 col-md-2" to="/login">Connexion</router-link>
        <router-link v-if="!userToken" to="/signup" class="link-2 col-md-2">S'inscrire</router-link>
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