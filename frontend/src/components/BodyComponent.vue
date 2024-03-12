<script>
import InviteItem from './InviteItem.vue'
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import { updateState, socket } from '../websocket';

export default {
  components: {
    InviteItem
  },
  setup() {
    const store = useStore();
    const invites = ref(computed(() => store.state.invites));

    socket.onmessage = function (event) {
      updateState(JSON.parse(event.data), store)
    }

    const choice = ref(true);

    const setChoice = () => {
      choice.value = !choice.value
    }

    return {
      choice,
      setChoice,
      invites
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
    <div class="container mt-5">
      <input type="email" class="form-control my-3" placeholder="Rechercher" id="exampleInputEmail1" aria-describedby="emailHelp" />
      <div class="invites">
        <InviteItem v-for="(invite, index) in invites" :key="index" :invite="invite"/>
      </div>
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
section .invites {
  height: 65vh;
  overflow: scroll;
}
::-webkit-scrollbar {
  width: 0px;
}
</style>
