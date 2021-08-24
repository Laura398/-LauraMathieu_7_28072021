<template>
  <div class="profile">
    <div class="row logo container-fluid">
      <router-link class="col-5 center-block" to="/"><img src="../assets/icon-left-font.png" alt="Responsive image"/></router-link>
    </div>
    <h1 class="py-4">Page de profil</h1>
    <ProfilePageComponent />
    <div class="absolute col-7 px-4 py-2">
        <a class="link link-1 btn btn-light btn-outline-secondary m-4" href="http://localhost:8080/#/posts" role="button">Retour</a>
        <ModalProfile v-bind:revele="revele" v-bind:toggleModale="toggleModale" />
        <div v-on:click="toggleModale" class="modify btn m-4 link-2">Modifier le profil</div>
        <input type="submit" class="delete btn m-4 link-3" :onclick="deleteUser" value="Supprimer le compte">
      </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ProfilePageComponent from '@/components/ProfilePageComponent.vue'
import ModalProfile from '@/components/ModalProfileComponent.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: ['ProfilePage', 'Footer'],
  components: {
    ProfilePageComponent,
    ModalProfile,
    Footer
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

<style scoped lang="scss">
.absolute {
  position: absolute;
  top: 0;
  right: 10px;
}
.modify {
  background-color: #c2a4a4;
}

.delete {
  background-color: #9f3e44;
  color: white;
}

.profile {
  position: relative;
  padding-bottom: 300px;
  background-color: #f7eaea;
  width: 105%;
}

.logo {
  position: relative;
  padding: 30px;
  margin-left: -16px;
  background-color: #071833;
  height: 120px;
  width: 100%;
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
    position: absolute;
    top: -20px;
    right: 0;
    width: 150%;
  }
}

.absolute {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  .link-1 {
    position: absolute;
    top: 0;
    left: 270px;
  }
  .link-2 {
    position: absolute;
    top: 50px;
    left: 0;
    margin: 0;
  }
  .link-3 {
    position: absolute;
    top: 50px;
    left: 170px;
  }
}
  
}
</style>