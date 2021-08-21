<template>
  <div class="post container">
    <div class="row">
      <div class="col-md-4"><ProfileComponent /></div>
    
      <PostsComponent />
    </div>
  </div>
</template>

<script>
import PostsComponent from '@/components/PostsComponent.vue'
import ProfileComponent from '@/components/ProfileComponent.vue'

export default {
  name: ['Posts', 'Profile'],
  components: {
    PostsComponent,
    ProfileComponent
  }
}
</script>