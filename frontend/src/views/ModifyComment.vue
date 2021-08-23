<template>
  <div class="modify container">
    <a class="btn btn-primary float-left" role="button" href="http://localhost:8080/#/">Retour</a>
    <h1 class="h5">Vous pouvez modifier votre commentaire ici.</h1>
    <ModifyCommentComponent />
  </div>
</template>

<script>
import ModifyCommentComponent from '@/components/ModifyCommentComponent.vue'

export default {
  name: 'ModifyComment',
  components: {
    ModifyCommentComponent
  }
}
</script>

<style scoped>
.btn {
  position: fixed;
  margin-left: -23%;
}
</style>