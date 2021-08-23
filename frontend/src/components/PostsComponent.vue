<template>
  <div class="hello col-md-8 m-auto">
    <a class="btn btn-primary m-2" href="http://localhost:8080/#/add-post" role="button">Ajouter un message</a>
    <div class="card mb-3" v-for='post in posts' :key='post.id'>
      <img class="card-img-top" :src="post.attachment" alt="Card image cap" v-if="post.attachment">
      <div class="card-body">
        <h5 class="card-title">{{post.title}}</h5>
        <p class="card-text">{{post.content}}</p>
        <p class="card-text"><small class="text-muted">{{post.User.firstName}} {{post.User.lastName}}, {{post.createdAt}}</small></p>
        <hr v-if="post.User.id === UserId">
        <button v-if="post.User.id === UserId" class="btn-primary col-4 mx-4">Modifier</button>
        <input v-if="post.User.id === UserId" type="submit" class="btn-danger col-4 mx-4" v-bind="post.id" @click="PostId = post.id" :onclick="deletePost" value="Supprimer">
      </div>
      <hr>
      <div>
        <div class="input-group mb-3">
          <input v-bind="post.id" @input="text = $event.target.value, PostId = post.id" type="text" class="form-control" placeholder="Ecrivez un commentaire" aria-label="Champ pour écrire un commentaire" aria-describedby="basic-addon2">
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" @click="postAComment">Button</button>
          </div>
          
        </div>
      </div>
      <div v-for='comment in comments' :key='comment.PostId'>
        <div v-if="comment.PostId === post.id">
          <hr>
          <p>{{comment.text}}</p>
          <p class="card-text"><small class="text-muted">{{comment.User.firstName}} {{comment.User.lastName}}, {{comment.createdAt}}</small></p>
          <input v-if="comment.User.id === UserId" type="submit" class="btn-danger col-4 mx-4" v-bind="comment.id" @click="CommentId = comment.id" :onclick="deleteComment" value="Supprimer">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Posts',
  data: () => ({
    text: "",
    UserId: JSON.parse(localStorage.getItem('userId')),
    PostId: '',
    CommentId: ''
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
      this.$store.dispatch("postComment", {
            text: this.text,
            PostId: this.PostId,
            UserId: JSON.parse(localStorage.getItem('userId'))
        });
        window.location.reload();
    },
    deletePost() {
      const token = JSON.parse(localStorage.getItem('token'));
      axios.delete(`http://localhost:3000/api/post/${this.PostId}`, { 
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });
      window.location.reload();
    },
    deleteComment() {
      const token = JSON.parse(localStorage.getItem('token'));
      axios.delete(`http://localhost:3000/api/comment/${this.CommentId}`, { 
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });
      window.location.reload();
    },
  },
  mounted() {
    this.$store.dispatch("getPosts");
    this.$store.dispatch("getComments");
  }
}


</script>

<style scoped>


</style>