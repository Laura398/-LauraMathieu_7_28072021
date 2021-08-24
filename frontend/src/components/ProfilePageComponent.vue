<template>
<div class="card-columns row d-flex justify-content-center">
  <div class="card col-md-4 p-3 py-4">
    <blockquote class="blockquote mb-0 card-body">
      <p>{{oneUser.bio}}</p>
      <footer class="blockquote-footer">
        <small class="text-muted">
          <cite title="Source Title">{{oneUser.firstName}} {{oneUser.lastName}}</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card col-md-2 p-4 image">
    <img v-if="oneUser.picture" :src="oneUser.picture" class=" image rounded-circle" alt="Photo de profil">
    <img v-if="!oneUser.picture" src="https://puu.sh/I6d9j/eee2452bed.png" alt="Photo de profil" class="image rounded-circle">
    <div class="card-body">
      <h5 class="card-title">{{oneUser.firstName}} {{oneUser.lastName}}</h5>
    </div>
  </div>
  <div class="card col-md-4 py-4">
    <div class="card-body">
      <h5 class="card-title">Adresse mail :</h5>
      <p class="card-text">{{oneUser.email}}</p>
      <hr>
      <h5 class="card-title">Anniversaire :</h5>
      <p class="card-text">{{oneUser.birthday}}</p>
      <hr>
      <p class="card-text"><small class="text-muted">Membre depuis le {{formatDate(oneUser.createdAt)}}</small></p>
    </div>
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
  methods: {
    formatDate(date) {
      var d = new Date(date),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();
      if (month.length < 2) 
          month = '0' + month;
      if (day.length < 2) 
          day = '0' + day;
      return [day, month, year].join('-');
    },
  },
  mounted() {
    this.$store.dispatch("getOneUser");
  }
}
</script>

<style scoped lang="scss">
.container {
  background-color: black;
  
}

img {
  display: block;
    width: 200px;
    height: 200px;
    margin: auto;
    margin-top: 2px;
    margin-left: 2px;
}

@media all and (max-width: 768px){ 
 .image {
   display: block;
   margin: auto;
 }
}

</style>