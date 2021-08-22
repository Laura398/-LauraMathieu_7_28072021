<template>
  <div class="modal-block" v-if="revele">
      <div class="overlay" v-on:click="toggleModale">

      </div>

      <div class="modal-card card">
          <div v-on:click="toggleModale" class="btn-modal btn btn-danger">X</div>
          <h2>Contenu de la modale</h2>
      </div>
  </div>
</template>

<script>
export default {
    name: 'PostModal',
    props: ['revel', 'toggleModal']
}
</script>

<style scoped>
.modal-bloc {
    position: fixed;
    top:0;
    left:0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.overlay {
    background: rgba(0,0,0,0.5);
    position: fixed;
    top:0;
    left:0;
    bottom: 0;
    right: 0;
}

.modal-card {
    background: #f1f1f1;
    color: #333;
    padding: 50px;
    position: center;
    top: 30%;
}

.btn-modal {
    position: absolute;
    top: 10px;
    right: 10px;
}
</style>