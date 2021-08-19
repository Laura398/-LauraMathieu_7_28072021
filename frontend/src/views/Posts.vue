<template>
  <div class="post container">
    <PostsComponent />
  </div>
</template>

<script>
import PostsComponent from '@/components/PostsComponent.vue'


export default {
  name: 'Posts',
  components: {
    PostsComponent
  }
}
</script>
