<template>
    <div class="profile-nav bg-light p-4 border border-secondary rounded">
        <div class="panel">
            <div class="user-heading round">
                <a href="#">
                    <img v-if="oneUser.picture" :src="oneUser.picture" alt="Photo de profil">
                    <img v-if="!oneUser.picture" src="https://puu.sh/I5mQA/f1763c6188.png" alt="Photo de profil">
                </a>
                <p class="mt-4">{{oneUser.firstName}} {{oneUser.lastName}}</p>
                
            </div>

            <a class="btn btn-primary m-2" href="http://localhost:8080/#/profile" role="button">Voir le profil</a>
            <a v-if="isAdmin === true" class="btn btn-primary m-2" href="http://localhost:8080/#/users" role="button">Voir les utilisateurs</a>
            <button class="btn btn-danger m-2" @click="signout()">Déconnexion</button>

        </div>
    </div>
</template>

<script>
export default {
  name: 'Profile',
  data: () => ({
    isAdmin: JSON.parse(localStorage.getItem('isAdmin'))
  }),
  methods: {
      signout() {
          localStorage.clear();
          this.$router.push("/login");
      }
  },
  computed: {
    oneUser() {
      return this.$store.state.oneUser
    }
  },
  mounted() {
    this.$store.dispatch("getOneUser");
  }
  
}
</script>

<style scoped>
img {
    width: 200px;
    height: 200px;
    margin: auto;
}

@media all and (max-width: 768px) {
  img {
    display: none;
  };
  .mail {
      display: none;
  }
}
</style>