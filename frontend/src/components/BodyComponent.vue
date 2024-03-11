<script>
import { ref } from 'vue'
import InvitesComponent from './InvitesComponent.vue'
// eslint-disable-next-line no-unused-vars
import socket from '../websocket/index.js'

export default {
  components: {
    InvitesComponent
  },
  setup() {
    const choice = ref(true)

    const setChoice = () => {
      choice.value = !choice.value
    }

    return {
      choice,
      setChoice
    }
  }
}
</script>
<template>
  <section class="w-100">
    <div class="text-white text-bg-success text-center py-3 fw-bold fs-5">
      Sommet de l’entrepreneuriat au Bénin
    </div>
    <div class="mt-5 container d-flex border-bottom menu">
      <span
        :class="
          choice ? 'mx-3 fs-5 fw-medium py-2 px-3 choice' : 'mx-3 fs-5 fw-medium py-2 px-3 cursor'
        "
        @click="setChoice"
        >Liste des invités</span
      >
      <span
        :class="
          !choice ? 'mx-3 fs-5 fw-medium py-2 px-3 choice' : 'mx-3 fs-5 fw-medium py-2 px-3 cursor'
        "
        @click="setChoice"
        >Statistiques</span
      >
    </div>
    <div class="container">
      <InvitesComponent />
    </div>
  </section>
</template>
<style>
section .menu .choice {
  background-color: #198754;
  color: white;
  border-radius: 5px;
}
.cursor {
  cursor: pointer;
}
</style>
