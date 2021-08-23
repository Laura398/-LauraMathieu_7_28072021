<template>
  <div class="modal-block" v-if="revele">
      <div class="overlay" v-on:click="toggleModale">

      </div>

      <div class="modal-card card">
          <div v-on:click="toggleModale" class="btn-modal btn btn-danger">X</div>
            <div class="container">
              <div class="row">
                <div class="col-8 mx-auto bg-light center border border-secondary rounded mt-4 p-4">
                  <div class="row g-3">
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
                      <button class="btn btn-primary" type="submit" @click="addAPost">Ajouter le post</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'ModalAddPost',
    props: ['revele', 'toggleModale'],
    data: () => ({
    title: '',
    content: '',
    attachment: '',
    UserId: ''
  }),
  methods: {
    addAPost() {
      if (this.title == '' || this.content == '') {
        alert("Veuillez remplir correctement les informations")
      } else {
        this.$store.dispatch("addPost", {
            title: this.title,
            content: this.content,
            attachment: this.attachment,
            UserId: JSON.parse(localStorage.getItem('userId'))
        })
        window.location.reload();
    }}
  }
}
</script>

<style scoped>
.modal-bloc {
    position: fixed;
    top:0;
    left:0;
    bottom: 0;
    right: 0;
    width: 500px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.overlay {
    background: rgba(0,0,0,0.9);
    position: fixed;
    top:0;
    left:0;
    bottom: 0;
    right: 0;
}

.modal-card {
    background: #f1f1f1;
    color: #333;
    padding: 30px;
    position: center;
    top: -50%;
    left: 10%;
}

.btn-modal {
    position: absolute;
    top: 10px;
    right: 10px;
}

img {
    width: 200px;
    height: 200px;
    margin-top: 2px;
    margin-left: 2px;
}
</style>