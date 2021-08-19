<template>
<div class="container">
  <div class="row">
    <div class="col-8 mx-auto bg-light center border border-secondary rounded mt-4 p-4">
      
      <form class="row g-3" method="post">
        <div class="col-md-5 my-3 mx-auto">
          <label for="validationDefault01" class="form-label">First name</label>
          <input v-model="firstName" type="text" class="form-control" id="firstName" placeholder="Mark" required>
        </div>
        <div class="col-md-5 my-3 mx-auto">
          <label for="validationDefault02" class="form-label">Last name</label>
          <input v-model="lastName" type="text" class="form-control" id="lastName" placeholder="Otto" required>
        </div>
        <div class="col-md-5 my-3 mx-auto">
          <label for="validationDefaultUsername" class="form-label">adresse mail</label>
          <div class="input-group">
            <span class="input-group-text" id="inputGroupPrepend2">@</span>
            <input v-model="email" type="text" class="form-control" id="email" aria-describedby="inputGroupPrepend2" required>
          </div>
        </div>
        <div class="col-md-5 my-3 mx-auto">
          <label for="validationDefault03" class="form-label">Mot de passe</label>
          <input v-model="password" type="text" class="form-control" id="password" required>
        </div>
        
        
        <div class="col-12 my-3">
          <button class="btn btn-primary" type="submit" @click.prevent="register()">Submit form</button>
        </div>
      </form>
<p></p>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: "Signup",
  data: () => ({
    firstName: '', 
    lastName: '',
    email: '',
    password: ''
  }),
  computed: {
    user() {
      return {
        firstName: this.$store.state.firstName,
        lastName: this.$store.state.lastName,
        email: this.$store.state.email,
        password: this.$store.state.password
      }
    }
  },
  methods: {
    register() {
      if (this.valid()) {
        this.$store.dispatch('signup', {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password
        })
        .then(({ status }) => {
          this.$store.commit("SET_NOTIFICATION", {
            display: true,
            text: 'Your account has been successfully created! you can now login.',
            alertClass: "danger"
          });
          this.$router.push('/about');
          console.log(status)
        })
        .catch (error => {
          console.log(error)
        })
      }
    },
  }
}
</script>