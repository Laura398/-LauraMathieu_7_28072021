<template>
  <div class="profile">
    <h1>Page de profil</h1>
    <ProfilePageComponent />
    <div class="row bg-light px-4 py-2">
           <a class="link btn btn-primary m-4" href="http://localhost:8080/#/posts" role="button">Retour</a>
           <ModalProfile v-bind:revele="revele" v-bind:toggleModale="toggleModale" />
           <div v-on:click="toggleModale" class="btn btn-success m-4">Modifier le profil</div>
           <input type="submit" class="btn btn-danger m-4" :onclick="deleteUser" value="Supprimer le compte">
       </div>
  </div>
</template>

<script>
import axios from 'axios'
import ProfilePageComponent from '@/components/ProfilePageComponent.vue'
import ModalProfile from '@/components/ModalProfileComponent.vue'

export default {
  name: 'ProfilePage',
  components: {
    ProfilePageComponent,
    ModalProfile
  },
  data() {
      return {
          revele: false
      }
  },
  methods: {
      toggleModale() {
          this.revele = !this.revele
      },
      deleteUser() {
        if ( confirm( "La suppression du compte utilisateur est définitive !" ) ) {
        // Code à éxécuter si le l'utilisateur clique sur "OK"
        const token = JSON.parse(localStorage.getItem('token'));
          const userId = JSON.parse(localStorage.getItem('userId'));
          axios.delete(`http://localhost:3000/api/auth/${userId}`, { 
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            }
          });
          localStorage.clear();
          this.$router.push("/signup");
        }
        }
  }
}
</script>

<style scoped>
.row {
  margin-left: 10%;
}
</style>