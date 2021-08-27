<template>
   <div class="hello col-md-8 m-auto">
    <div class="card mb-3 border border-secondary" v-for='post in posts.slice().reverse()' :key='post.id'>
      <img class="card-img-top" :src="post.attachment" alt="Card image cap" v-if="post.attachment">
      <div class="card-body border-bottom border-secondary">
        <h5 class="card-title font-weight-bold">{{post.title}}</h5>
        <hr>
        <p class="card-text text-left">{{post.content}}</p>
        <p class="card-text text-right"><small class="text-muted">- Publié par {{post.User.firstName}} {{post.User.lastName}}, le {{formatDate(post.createdAt)}}</small></p>
        <hr v-if="post.User.id === UserId">
        <input v-if="post.User.id === UserId || isAdmin === true" type="submit" class="btn modify col-4 mx-4" v-bind="post.id" @click="PostId = post.id" :onclick="modifyAPost" value="Modifier">
        <input v-if="post.User.id === UserId || isAdmin === true" type="submit" class="btn delete col-4 mx-4" v-bind="post.id" @click="PostId = post.id" :onclick="deletePost" value="Supprimer">
      </div>
        <div class="input-group">
          <input v-bind="post.id" @input="text = $event.target.value, PostId = post.id" type="text" class="form-control" placeholder="Ecrivez un commentaire" aria-label="Champ pour écrire un commentaire" aria-describedby="basic-addon2">
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" @click="postAComment">Poster un commentaire</button>
          </div>
        </div>
      <div v-for='comment in comments' :key='comment.PostId'>
        <div v-if="comment.PostId === post.id" class="mt-3">
          <p class="text-left ml-4">{{comment.text}}</p>
          <p class="card-text text-right mr-4"><small class="text-muted">Publié par {{comment.User.firstName}} {{comment.User.lastName}}, le {{formatDate(comment.createdAt)}}</small></p>
          <input v-if="comment.User.id === UserId || isAdmin === true" type="submit" class="btn modify col-4 mx-4 mb-2" v-bind="comment.id" @click="CommentId = comment.id" :onclick="modifyAComment" value="Modifier">
          <input v-if="comment.User.id === UserId || isAdmin === true" type="submit" class="btn delete col-4 mx-4 mb-2" v-bind="comment.id" @click="CommentId = comment.id" :onclick="deleteComment" value="Supprimer">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import jwt_decode from "jwt-decode";

export default {
  name: 'Posts',
  data: () => ({
    text: "",
    UserId: JSON.parse(localStorage.getItem('userId')),
    PostId: '',
    CommentId: '',
    isAdmin: jwt_decode(JSON.parse(localStorage.getItem('token'))).isAdmin
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
    postAComment() {
      this.$store.dispatch("postComment", {
            text: this.text,
            PostId: this.PostId,
            UserId: JSON.parse(localStorage.getItem('userId'))
        });
        window.location.reload();
    },
    modifyAPost() {
      localStorage.setItem('postId', JSON.stringify(this.PostId));
      this.$router.push("/modify-post")
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
    modifyAComment() {
      localStorage.setItem('commentId', JSON.stringify(this.CommentId));
      this.$router.push("/modify-comment")
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
a {
  text-decoration: none;
}

.modify {
  background-color: #f7eaea;
}

.delete {
  background-color: #9f3e44;
  color: white;
}

</style>
