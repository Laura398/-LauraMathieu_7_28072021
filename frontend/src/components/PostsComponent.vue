<template>
  <div class="hello col-md-6 m-auto">
    <a class="btn btn-primary m-2" href="http://localhost:8080/#/add-post" role="button">Ajouter un message</a>
    <div class="card mb-3" v-for='post in posts' :key='post.id'>
      <img class="card-img-top" :src="post.attachment" alt="Card image cap" v-if="post.attachment">
      <div class="card-body">
        <h5 class="card-title">{{post.title}}</h5>
        <p class="card-text">{{post.content}}</p>
        <p class="card-text"><small class="text-muted">{{post.User.firstName}} {{post.User.lastName}}, {{post.createdAt}}</small></p>
      </div>
      <hr>
      <div v-for='comment in comments' :key='comment.PostId'>
        <div v-if="comment.PostId === post.id">
          <p>{{comment.text}}</p>
          <p class="card-text"><small class="text-muted">{{comment.User.firstName}} {{comment.User.lastName}}, {{comment.createdAt}}</small></p>
          <hr>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Posts',
  data: () => ({
    text: "",
    UserId: JSON.parse(localStorage.getItem('userId')),
    PostId: "",
  }),
  computed: {
    posts() {
      return this.$store.state.posts
    },
    comments() {
      return this.$store.state.comments
    },
  },
  methods: {
    getCommentsByPostId(PostId) {
      return this.$store.state.comments.find(comments => comments.PostId === PostId)
    },
    postAComment() {
      console.log(this.text, this.UserId, this.post.id)
    }
  },
  mounted() {
    this.$store.dispatch("getPosts");
    this.$store.dispatch("getComments");
  }
}


</script>

<style scoped>


</style>