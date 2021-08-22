<template>
<div class="container">
  <div class="row">
    <div class="col-8 mx-auto bg-light center border border-secondary rounded mt-4 p-4">
      <a class="btn btn-primary m-2" href="http://localhost:8080/#/posts" role="button">Retour</a>
      <div class="row g-3">
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
          <input type="submit" class="btn btn-primary my-2" :onclick="modifyProfile" value="Modifier"><br/>
          <input type="submit" class="btn btn-danger my-2" :onclick="deleteUser" value="Supprimer le compte">
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ProfilePage', 
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
    },
    deleteUser() {
    if ( confirm( "La suppression du compte utilisateur est définitive !" ) ) {
    // Code à éxécuter si le l'utilisateur clique sur "OK"
    const token = JSON.parse(localStorage.getItem('token'));
      const userId = JSON.parse(localStorage.getItem('userId'));
      axios.delete(`http://localhost:3000/api/auth/${userId}`, { 
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });
      localStorage.clear();
      this.$router.push("/signup");
    }
    }
  },
  
  
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