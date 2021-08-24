<template>
    <div class="profile-nav">
        <div class="panel">
            <div class="user-heading round">
                <a href="#">
                    <img v-if="oneUser.picture" :src="oneUser.picture" alt="Photo de profil" class="rounded-circle">
                    <img v-if="!oneUser.picture" src="https://puu.sh/I6d9j/eee2452bed.png" alt="Photo de profil" class="rounded-circle">
                </a>
                <p class="mt-4">{{oneUser.firstName}} {{oneUser.lastName}}</p>
                
            </div>

            <a class="btn see-profile m-2" href="http://localhost:8080/#/profile" role="button">Voir le profil</a>
            <a v-if="isAdmin === true" class="btn btn-light m-2 border border-secondary see-users" href="http://localhost:8080/#/users" role="button">Voir les utilisateurs</a>
            <button class="btn signout m-2" @click="signout()">Déconnexion</button>

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



<style scoped lang="scss">
.profile-nav {
  background-color: white;
  padding: 24px;
  border-color: black;
  border-radius: 10px;
}

.see-profile {
  background-color: #f7eaea;
}

.signout {
  background-color: #9f3e44;
  color: white;
}

img {
    width: 200px;
    height: 200px;
    margin: auto;
}

@media all and (max-width: 768px) {
  .user-heading {
    display: none;
  }

  .profile-nav {
    background: none;
    border: none;
  }

  .see-profile {
  position: absolute;
  background-color: #c2a4a4;
  top: -40px;
  right: 10px;
}

.signout {
  position: absolute;
  background-color: #9f3e44;
  top: 10px;
  right: 10px;
}

.see-users {
  position: absolute;
  left: 40px;
  top: 10px;
}

  .panel {
    background: none;
    border: none;
  }

  img {
    display: none;
  };
}
</style>