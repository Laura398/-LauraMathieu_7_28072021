<template>
<div class="container">
  <div class="row">
    <div class="col-8 mx-auto bg-light center border border-secondary rounded mt-4 p-4">
      <form class="row g-3" method="put">
        <div class="col-md-5 my-3 mx-auto">
          <label for="validationDefault01" class="form-label">Prénom : {{firstName}}</label>
          <input v-model="firstName" type="text" class="form-control" id="firstName" placeholder="Mark">
        </div>
        <div class="col-md-5 my-3 mx-auto">
          <label for="validationDefault02" class="form-label">Nom : {{lastName}}</label>
          <input v-model="lastName" type="text" class="form-control" id="lastName" placeholder="Otto">
        </div>
        <div class="col-md-5 my-3 mx-auto">
          <label for="validationDefaultUsername" class="form-label">Adresse mail : {{email}}</label>
            <input v-model="email" type="text" class="form-control" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="exemple@mail.com" id="email" aria-describedby="inputGroupPrepend2">
         
        </div>
        <div class="col-md-5 my-3 mx-auto">
          <label for="validationDefault02" class="form-label">Date de naissance : {{birthday}}</label>
          <input v-model="birthday" type="date" class="form-control" id="birthday" placeholder="">
        </div>
        <div class="col-md-5 my-3 mx-auto">
          <label for="validationDefault02" class="form-label">Résumé : {{bio}}</label>
          <input v-model="bio" type="text" class="form-control" id="bio" placeholder="Otto">
        </div>
        <div class="col-md-5 my-3 mx-auto">
          <label for="validationDefaultUsername" class="form-label">Pièce jointe : {{picture}}</label>
            <input v-model="picture" type="text" class="form-control" placeholder="Exemple" id="attachment" aria-describedby="inputGroupPrepend2">
        </div>
        <div class="col-md-5 my-3 mx-auto">
          <label for="validationDefault03" class="form-label">Mot de passe : {{password}}</label>
          <input v-model="password" type="text" class="form-control" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$" id="password">
        </div>
        <div class="col-12 my-3">
          <button class="btn btn-primary" type="submit" @click="modifyProfile()">Modifier</button>
        </div>
      </form>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ProfilePage', 
  data: () => ({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    birthday: '',
    bio: '',
    picture: ''
  }),
  methods: {
    modifyProfile() {
        this.$store.dispatch("modifyProfile", {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
            birthday: this.birthday,
            bio: this.bio,
            picture: this.picture
        });
        
    }
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