<template>
  <div class="modify container py-5">
    <div class="row logo">
        <router-link class="col-8 text-left" to="/"><img src="../assets/icon-left-font.png" alt="Responsive image"/></router-link>
    </div>
    <a class="btn btn-primary float-left mt-5" role="button" href="http://localhost:8080/#/">Retour</a>
    <h1 class="h5 mb-5 message pt-5">Voici une liste des utilisateurs.</h1>
    <UsersListAdmin />
    <Footer />
  </div>
</template>

<script>
import UsersListAdmin from '@/components/UsersListComponent.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: ['UsersList', 'Footer'],
  components: {
    UsersListAdmin,
    Footer
  }
}
</script>

<style scoped lang="scss">
.btn {
  position: fixed;
  margin-left: -23%;
}

.container {
  background-color: #f7eaea;
  position: relative;
}

.logo {
  position: relative;
  margin-top: -70px;
  padding: 30px;
  margin-left: -16px;
  background-color: #071833;
  height: 120px;
  width: 105%;
  img {
  position: absolute; 
	top: 20px;
	left: 0;
  width: 40%;
  height: auto;
}
}

@media all and (max-width: 768px){
.logo {
  padding: 30px;
  margin-left: -16px;
  background-color: #071833;
  height: 120px;
  width: 109%;
  img { 
    top: -10%;
    margin-left: -30px;
    width: 100%;
  }
}

  .message {
    margin-top: 50px;
  }
}
</style>