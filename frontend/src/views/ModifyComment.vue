<template>
  <div class="modify container">
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
