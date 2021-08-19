<template>
  <div class="signup container">
    <h1 class="h5">Veuillez vous enregistrer afin d'accéder au réseau social.</h1>
    <SignupComponent />
  </div>
</template>

<script>
import SignupComponent from '@/components/SignupComponent.vue'

export default {
  name: 'Signup',
  components: {
    SignupComponent
  }
}
</script>
