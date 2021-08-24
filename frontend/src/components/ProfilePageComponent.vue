<template>
   <div class="container bg-primary p-1">
       <div class="row bg-danger m-1 p-1">
           <div class="col-3 bg-warning m-1 p-1">
               <img v-if="oneUser.picture" :src="oneUser.picture" alt="Photo de profil">
                <img v-if="!oneUser.picture" src="https://puu.sh/I5mQA/f1763c6188.png" alt="Photo de profil" class="rounded-circle">
           </div>
           <div class="col-8 m-auto bg-secondary">
               <h1 class="h3">{{oneUser.firstName}} {{oneUser.lastName}}</h1>
                <div class="row">
                    <div class="col-6 my-4">
                        <p class="h5">Adresse mail :</p>
                        <p class="h5">{{oneUser.email}}</p>
                    </div>
                    <div class="col-6 my-4">
                        <p class="h5">Date de naissance :</p>
                        <p class="h5">{{oneUser.birthday}}</p>
                    </div>
                </div>
           </div>
       </div>
       <div class="row bg-info m-4">
           <p class="h3">Biographie :</p>
           <p class="h5">{{oneUser.bio}}</p>
       </div>
   </div>
</template>

<script>
export default {
  name: 'ProfilePage', 
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
    margin-top: 2px;
    margin-left: 2px;
}
</style>