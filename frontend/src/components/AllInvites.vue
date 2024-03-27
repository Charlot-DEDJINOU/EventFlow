<script>
import InviteItem from './InviteItem.vue'
import AddIcon from './icons/AddIcon.vue'
import AddInvite from './AddInvite.vue'
import SuccessfulComponent from './SuccessfulComponent.vue'
import { useStore } from 'vuex'
import { computed, ref, watch } from 'vue'
import { updateState, socket } from '../websocket'

export default {
  components: {
    InviteItem,
    AddIcon,
    AddInvite,
    SuccessfulComponent
  },
  setup() {
    const store = useStore()
    const filterInvites = ref(store.state.invites)
    const text = ref('')

    socket.onmessage = function (event) {
      console.log(event)
      updateState(JSON.parse(event.data), store, search)
    }

    const show = ref(true)

    const search = () => {
      const searchText = text.value.toLowerCase()
      filterInvites.value = store.state.invites.filter((invite) => {
        return (
          invite.nom.toLowerCase().includes(searchText) ||
          invite.prenom.toLowerCase().includes(searchText) ||
          invite.email.toLowerCase().includes(searchText) ||
          invite.sexe.toLowerCase().includes(searchText) ||
          invite.status.toLowerCase().includes(searchText) ||
          invite.telephone.toLowerCase().includes(searchText)
        )
      })
    }

    watch(() => store.state.invites, search)

    const showSecondModal = () => {
      show.value = false
      setTimeout(() => {
        document.getElementById('add-icon').click()
        show.value = true
      }, 1000)
    }

    return {
      show,
      filterInvites,
      text,
      search,
      showSecondModal
    }
  }
}
</script>
<template>
  <section class="w-100">
    <div class="container mt-2">
      <div class="w-100 d-flex justify-content-between align-items-center">
        <input
          v-model="text"
          @input="search"
          type="email"
          class="form-control my-3"
          placeholder="Rechercher"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <AddIcon
          class="text-success mx-2 d-inline-block cursor"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        />
      </div>
      <div class="invites">
        <InviteItem v-for="(invite, index) in filterInvites" :key="index" :invite="invite" />
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Ajout d'un nouveau invité</h1>
            <button
              type="button"
              class="btn-close"
              id="add-icon"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <AddInvite class="p-3" :backAnswer="showSecondModal" v-if="show" />
            <SuccessfulComponent v-else title="Ajout effectué avec succés" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
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
