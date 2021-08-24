<template>
  <div class="modal-block" v-if="revele">
      <div class="overlay" v-on:click="toggleModale">

      </div>

      <div class="modal-card card">
          <div v-on:click="toggleModale" class="btn-modal btn btn-danger">X</div>
          <div class="container mx-auto bg-light center border border-secondary rounded mt-4 p-4">
            <div class="row ">
              <div class="col-12 col-md-4 my-3 mx-auto">
                <label for="validationDefault01" class="form-label">Prénom : {{firstName}}</label>
                <input v-model="firstName" type="text" class="form-control" id="firstName" placeholder="Mark">
              </div>
              <div class="col-12 col-md-4 my-3 mx-auto">
                <label for="validationDefault02" class="form-label">Nom : {{lastName}}</label>
                <input v-model="lastName" type="text" class="form-control" id="lastName" placeholder="Otto">
              </div>
              <div class="col-12 col-md-4 my-3 mx-auto">
                <label for="validationDefaultUsername" class="form-label">Adresse mail : {{email}}</label>
                <input v-model="email" type="text" class="form-control" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="exemple@mail.com" id="email" aria-describedby="inputGroupPrepend2">
              </div>
            </div>
            <div class="row ">
              <div class="col-12 col-md-4 my-3 mx-auto">
                <label for="validationDefault02" class="form-label">Date de naissance : {{birthday}}</label>
                <input v-model="birthday" type="date" class="form-control" id="birthday" placeholder="">
              </div>
              <div class="col-12 col-md-4 my-3 mx-auto">
                <label for="validationDefault02" class="form-label">Résumé : {{bio}}</label>
                <input v-model="bio" type="text" class="form-control" id="bio" placeholder="Otto">
              </div>
              <div class="col-12 col-md-4 my-3 mx-auto">
                <label for="validationDefaultUsername" class="form-label">Pièce jointe : {{picture}}</label>
                <input v-model="picture" type="text" class="form-control" placeholder="Exemple" id="attachment" aria-describedby="inputGroupPrepend2">
              </div>
            </div>
            <div class="row ">
              <div class="col-12 col-md-4 my-3 mx-auto">
                <label for="validationDefault03" class="form-label">Mot de passe : {{password}}</label>
                <input v-model="password" type="text" class="form-control" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$" id="password">
              </div>
            </div>
            <div class="row my-3">
              <input type="submit" class="btn btn-primary mx-4 my-2" :onclick="modifyProfile" value="Modifier">
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'ModalProfile',
    props: ['revele', 'toggleModale'],
    data: () => ({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    birthday: '',
    bio: '',
    picture: '',
    UserId: ''
  }),
  methods: {
    modifyProfile() {
      if (this.firstname != '') {this.$store.dispatch("modifyProfile", { firstName: this.firstName })}
      if (this.lastName != '') {this.$store.dispatch("modifyProfile", { lastName: this.lastName })}
      if (this.email != '') {this.$store.dispatch("modifyProfile", { email: this.email })}
      if (this.password != '') {this.$store.dispatch("modifyProfile", { password: this.password })}
      if (this.birthday != '') {this.$store.dispatch("modifyProfile", { birthday: this.birthday })}
      if (this.bio != '') {this.$store.dispatch("modifyProfile", { bio: this.bio })}
      if (this.picture != '') {this.$store.dispatch("modifyProfile", { picture: this.picture })}
      window.location.reload();
    },
    
  },
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
    left: -60%;
    width: 150%;
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

@media all and (max-width: 768px){
  .modal-card {
    background: #f1f1f1;
    color: #333;
    padding: 30px;
    position: center;
    top: -50%;
    left: 0;
    width: 150%;
}
}
</style>