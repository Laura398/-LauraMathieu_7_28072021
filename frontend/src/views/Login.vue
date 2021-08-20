<template>
  <div class="login container">
    <h1 class="h5">Veuillez vous enregistrer afin d'accéder au réseau social.</h1>
    <LoginComponent />
  </div>
</template>

<script>
import LoginComponent from '@/components/LoginComponent.vue'

export default {
  name: 'Login',
  components: {
    LoginComponent
  }
}
</script>
