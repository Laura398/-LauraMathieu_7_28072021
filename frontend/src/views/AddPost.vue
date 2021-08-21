<template>
  <div class="signup container">
    <h1 class="h5">Vous pouvez enregistrer votre nouveau message ici.</h1>
    <AddPostComponent />
  </div>
</template>

<script>
import AddPostComponent from '@/components/AddPostComponent.vue'

export default {
  name: 'AddPost',
  components: {
    AddPostComponent
  }
}
</script>
