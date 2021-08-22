<template>
    <div class="container my-5">
        <h1 class="mb-5">Une modale en Vue JS !</h1>
        <Modal v-bind:revel="revel" v-bind:toggleModal="toggleModal" />
        <div v-on:click="toggleModal" class="btn btn-success">Ouvre la modale</div>
    </div>
</template>

<script>
import Modal from '@/components/ModalComponent.vue'

export default {
    components: {
        Modal
    },
    data() {
        return {
            revele: false
        }
    },
    methods: {
        toggleModal() {
            this.revel = !this.revele
        }
    }
}
</script>