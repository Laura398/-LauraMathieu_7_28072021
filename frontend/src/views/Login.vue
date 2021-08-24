<template>
  <div class="login base">
    <div id="nav">
      <NavComponent />
    </div>
    <div class="login-component">
      <h1 class="h3 mt-5">Veuillez vous connecter afin d'accéder au réseau social.</h1>
      <LoginComponent />
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import LoginComponent from '@/components/LoginComponent.vue'
import NavComponent from '@/components/NavComponent.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: ['Login', 'Nav', 'Footer'],
  components: {
    LoginComponent,
    NavComponent,
    Footer
  }
}
</script>

<style scoped lang="scss">
.base {
  position: relative;
}

.login {
  background-color: #f7eaea;
  padding-bottom: 245px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  margin-left: -16px;
  background-color: #071833;
  height: 120px;
  width: 101%;

  a {
    top: 20px;
    font-weight: bold;
    color: #f7eaea;

    &.router-link-exact-active {
      color: #9f3e44;
    }
  }
}

img {
  position: absolute; 
	margin-top: -30px;
	left: 0;
  width: 40%;
  height: auto;
}

.footer {
  position: absolute;
  bottom: 0;
}

@media all and (max-width: 768px){ 
  #nav {
  padding: 30px;
  margin-left: -16px;
  background-color: #071833;
  height: 120px;
  width: 109%;

  a {
    top: 20px;
    font-weight: bold;
    color: #f7eaea;
    position: relative;

    &.router-link-exact-active {
      color: #9f3e44;
    }
  }

  .link-1 {
    margin-left: 65%;
    margin-top: -20px;
  }

  .link-2 {
    margin-left: 68%;
    margin-top: 20px;
  }
}
  img { 
    margin-top: -20px;
    margin-left: -30px;;
    width: 100%;
  }
}
</style>