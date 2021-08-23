<template>
  <div class="modify container">
    <h1 class="h5">Vous pouvez modifier votre message ici.</h1>
    <ModifyPostComponent />
  </div>
</template>

<script>
import ModifyPostComponent from '@/components/ModifyPostComponent.vue'

export default {
  name: 'ModifyPost',
  components: {
    ModifyPostComponent
  }
}
</script>
