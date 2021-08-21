<template>
  <div class="modify-profile">
    <h1>Modifiez votre page de profil</h1>
    <ModifyProfileComponent />
  </div>
</template>

<script>
import ModifyProfileComponent from '@/components/ModifyProfileComponent.vue'

export default {
  name: 'ModifyProfile',
  components: {
    ModifyProfileComponent
  }
}
</script>
