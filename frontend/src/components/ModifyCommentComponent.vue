<template>
<div class="container-comment-modify">
  <div class="row">
    <div class="col-8 mx-auto bg-light center border border-secondary rounded mt-4 p-4">
      <form class="row g-3" method="post">
        <div class="col-md-10 my-3 mx-auto">
          <label for="validationDefault02" class="form-label">Commentaire</label>
          <input v-model="text" type="text" class="form-control" id="content" placeholder="Ecrivez le commentaire ici" required>
        </div>
        <div class="col-12 my-3">
          <button class="btn btn-primary" type="submit" @click="modifyAComment">Modifier le commentaire</button>
        </div>
      </form>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: "ModifyComment",
  data: () => ({
    text: '',
    UserId: ''
  }),
  methods: {
    modifyAComment() {
      if (this.text != '') {this.$store.dispatch("modifyComment", { text: this.text })}
      localStorage.removeItem('commentId');
      this.$router.push("/");
    },
  }
}
</script>

<style scoped>
.container-comment-modify {
  padding-top: 50px;
  padding-bottom: 500px;
}
</style>