<template>
  <div class="profile">
    <h1>Page de profil</h1>
    <ProfilePageComponent />
  </div>
</template>

<script>
import ProfilePageComponent from '@/components/ProfilePageComponent.vue'

export default {
  name: 'ProfilePage',
  components: {
    ProfilePageComponent
  }
}
</script>
