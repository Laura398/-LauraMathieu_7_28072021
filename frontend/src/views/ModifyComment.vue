<template>
  <div class="modify container pt-5">
    <a class="btn btn-primary float-left" role="button" href="http://localhost:8080/#/">Retour</a>
    <h1 class="h5 message">Vous pouvez modifier votre commentaire ici.</h1>
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

.container {
  background-color: #f7eaea;
}

@media all and (max-width: 768px){
  .message {
    margin-top: 50px;
  }
}
</style>