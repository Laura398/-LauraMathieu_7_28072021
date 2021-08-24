<template>
  <router-view/>
</template>

<script>

</script>



<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #071833;
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

  img {
  position: absolute; 
	margin-top: -30px;
	left: 0;
  width: 40%;
  height: auto;
}
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

  img { 
    margin-top: -20px;
    margin-left: -30px;;
    width: 100%;
  }
}
  
}


</style>
