<template>
    <div class="container my-5">
        <h1 class="mb-5">Une modale en Vue JS !</h1>
        <ModalProfile v-bind:revel="revel" v-bind:toggleModal="toggleModal" />
        <div v-on:click="toggleModal" class="btn btn-success">Ouvre la modale</div>
    </div>
</template>

<script>
import ModalProfile from '@/components/ModalProfileComponent.vue'

export default {
    components: {
        ModalProfile
    },
    data() {
        return {
            revel: false
        }
    },
    methods: {
        toggleModal() {
            console.log("hello")
        }
    }
}
</script>