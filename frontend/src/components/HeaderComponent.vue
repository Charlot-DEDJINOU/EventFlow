<script>
import { ref } from 'vue'
export default {
  setup() {
    const choice = ref(true)

    const setChoice = (status) => {
      choice.value = status
    }

    return {
      choice,
      setChoice
    }
  }
}
</script>

<template>
  <header class="mb-3">
    <div class="text-white text-bg-success text-center py-3 fw-bold fs-5">
      Sommet de l’entrepreneuriat au Bénin
    </div>
    <div class="mt-5 container d-flex border-bottom menu pb-2">
      <router-link to="/" class="text-decoration-none">
        <span
          :class="
            choice ? 'mx-3 fs-5 fw-medium py-2 px-3 choice' : 'mx-3 fs-5 fw-medium py-2 px-3 cursor'
          "
          @click="setChoice(true)"
          >Liste des invités</span
        >
      </router-link>
      <router-link to="/statistique" class="text-decoration-none">
        <span
          :class="
            !choice
              ? 'mx-3 fs-5 fw-medium py-2 px-3 choice'
              : 'mx-3 fs-5 fw-medium py-2 px-3 cursor'
          "
          @click="setChoice(false)"
          >Statistiques</span
        >
      </router-link>
    </div>
  </header>
</template>
<style>
header .menu .choice {
  background-color: #198754;
  color: white;
  border-radius: 5px;
}
</style>
