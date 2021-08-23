<template>
  <div class="post container">
    <div class="row">
      <div class="col-md-3"><ProfileComponent /></div>
      <div class="col-md-9">
        <div class="row flex-column-reverse">
          <PostsComponent class="col-12" />
          <div class="modale col-12">
            <ModalAddPost v-bind:revele="revele" v-bind:toggleModale="toggleModale" />
            <div v-on:click="toggleModale" class="btn btn-success m-4">Ajouter un message</div>
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

<style scoped>
.container {
  width: 80%;
}
</style>