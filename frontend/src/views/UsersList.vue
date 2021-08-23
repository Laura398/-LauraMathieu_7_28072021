<template>
  <div class="modify container">
    <a class="btn btn-primary float-left" role="button" href="http://localhost:8080/#/">Retour</a>
    <h1 class="h5 mb-5">Voici une liste des utilisateurs.</h1>
    <UsersListAdmin />
  </div>
</template>

<script>
import UsersListAdmin from '@/components/UsersListComponent.vue'

export default {
  name: 'UsersList',
  components: {
    UsersListAdmin
  }
}
</script>

<style scoped>
.btn {
  position: fixed;
  margin-left: -23%;
}
</style>