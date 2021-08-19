<template>
  <div class="hello">
    <div class="card mb-3" v-for='post in posts' :key='post.id'>
  <img class="card-img-top" src="https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{post.title}}</h5>
    <p class="card-text">{{post.content}}</p>
    <p class="card-text"><small class="text-muted">{{post.User.firstName}} {{post.User.lastName}}, <span type="date">{{post.createdAt}}</span></small></p>
  </div>
</div>
  </div>


  
</template>

<script>
export default {
  name: 'Posts',
  data () {
    return {
      msg: 'Welcome to my Vuex Store'
    }
  },
  computed: {
    posts() {
    return this.$store.state.posts
    }
  },
  mounted() {
    this.$store.dispatch("getPosts");
  }
}


</script>

<style scoped>
.hello {
  width: 50%;
  margin: auto;
}
.card-img-top {
  max-width: 100%;
  max-height: auto;
}
</style>