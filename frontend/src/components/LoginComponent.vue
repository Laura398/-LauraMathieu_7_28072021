<template>
<div class="container">
  <div class="row">
    <div class="col-8 mx-auto bg-light center border border-secondary rounded mt-4 p-4">
      
      <form class="row g-3" method="post">
        <div class="col-md-5 my-3 mx-auto">
          <label for="validationDefaultUsername" class="form-label">Adresse mail</label>
          <div class="input-group">
            <span class="input-group-text" id="inputGroupPrepend2">@</span>
            <input v-model="email" type="text" class="form-control" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="exemple@mail.com" id="email" aria-describedby="inputGroupPrepend2" required>
          </div>
        </div>
        <div class="col-md-5 my-3 mx-auto">
          <label for="validationDefault03" class="form-label">Mot de passe</label>
          <input v-model="password" type="text" class="form-control" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$" id="password" required>
        </div>
        <div class="col-12 my-3">
          <button class="btn btn-primary" type="submit" @click="login()">Connexion</button>
        </div>
      </form>
<p></p>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: "Login",
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    login() {
        this.$store.dispatch("login", {
            email: this.email,
            password: this.password
        });
        if (this.email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/) && this.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/)) {
          this.$router.push('/posts')
        }
    }
  }
}
</script>