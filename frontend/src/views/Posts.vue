<template>
  <div class="post container">
    <div class="row logo">
        <router-link class="col-8 text-left" to="/"><img src="../assets/icon-left-font.png" alt="Responsive image"/></router-link>
    </div>
    <div class="row">
      <div class="profile-component col-md-3 my-5"><ProfileComponent /></div>
      <div class="col-md-9">
        <div class="row flex-column-reverse">
          <PostsComponent class="col-12" />
          <div class="modale col-12">
            <ModalAddPost v-bind:revele="revele" v-bind:toggleModale="toggleModale" />
            <div v-on:click="toggleModale" class="btn btn-light border border-secondary m-4">Ajouter un message</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostsComponent from '@/components/PostsComponent.vue'
import ProfileComponent from '@/components/ProfileComponent.vue'
import ModalAddPost from '@/components/ModalAddPostComponent.vue'

export default {
  name: ['Posts', 'Profile', 'ModalAddPost'],
  components: {
    PostsComponent,
    ProfileComponent,
    ModalAddPost
  },
  data() {
      return {
          revele: false
      }
  },
  methods: {
      toggleModale() {
          this.revele = !this.revele
      },
      
  }
}
</script>

<style scoped lang="scss">
.post {
  position: relative;
  background-color: #f7eaea;
  padding-bottom: 158px;
  width: 100%;
}

.logo {
  position: relative;
  padding: 30px;
  margin-left: -16px;
  background-color: #071833;
  height: 120px;
  width: 105%;
  img {
  position: absolute; 
	top: 20px;
	left: 0;
  width: 40%;
  height: auto;
}
}

@media all and (max-width: 768px){ 
  .logo {
  padding: 30px;
  margin-left: -16px;
  background-color: #071833;
  height: 120px;
  width: 109%;
  img { 
    top: 10px;
    margin-left: -30px;
    width: 100%;
  }
}

.profile-component {
  position: absolute;
  top: 0;
}
  
}
</style>