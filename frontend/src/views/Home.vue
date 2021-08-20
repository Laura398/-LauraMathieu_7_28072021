<template>
  <div class="home">
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("redirect");
  }
}
</script>