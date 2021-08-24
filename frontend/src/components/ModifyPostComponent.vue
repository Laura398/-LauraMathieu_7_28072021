<template>
<div class="container-post-modify">
  <div class="row">
    <div class="col-8 mx-auto bg-light center border border-secondary rounded mt-4 p-4">
      <form class="row g-3" method="post">
        <div class="col-md-10 my-3 mx-auto">
          <label for="validationDefault01" class="form-label">Titre</label>
          <input v-model="title" type="text" class="form-control" id="title" placeholder="Ecrivez le titre" required>
        </div>
        <div class="col-md-10 my-3 mx-auto">
          <label for="validationDefault02" class="form-label">Message</label>
          <input v-model="content" type="text" class="form-control" id="content" placeholder="Ecrivez le message ici" required>
        </div>
        <div class="col-md-10 my-3 mx-auto">
          <label for="validationDefaultUsername" class="form-label">Pièce jointe</label>
            <input v-model="attachment" type="text" class="form-control" placeholder="Exemple" id="attachment" aria-describedby="inputGroupPrepend2">
        </div>
        <div class="col-12 my-3">
          <button class="btn btn-primary" type="submit" @click="modifyAPost()">Modifier le post</button>
        </div>
      </form>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: "ModifyPost",
  data: () => ({
    title: '',
    content: '',
    attachment: '',
    UserId: ''
  }),
  methods: {
    modifyAPost() {
      if (this.title != '') {this.$store.dispatch("modifyPost", { title: this.title })}
      if (this.content != '') {this.$store.dispatch("modifyPost", { content: this.content })}
      if (this.attachment != '') {this.$store.dispatch("modifyPost", { attachment: this.attachment })}
      localStorage.removeItem('postId');
      this.$router.push("/");
    },
  }
}
</script>


<style scoped>
.container-post-modify {
  padding-top: 50px;
  padding-bottom: 200px;
}
</style>