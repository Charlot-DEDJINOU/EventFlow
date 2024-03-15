<script>
import { ref } from 'vue'
import { sendMessage } from '../websocket'

export default {
  props: {
    backAnswer: Function
  },
  setup(props) {
    const data = ref({
      appelation: '',
      numero: '',
      status: 'Enseignant',
      is_entry: 0
    })
    const show = ref(false)

    const onSubmit = (e) => {
      e.preventDefault()
      if (
        data.value.appelation === '' ||
        data.value.numero === '' ||
        data.value.status === '' ||
        data.value.is_entry === null
      )
        show.value = true
      else {
        show.value = false

        data.value = {
          action: 'addInvite',
          item: data.value
        }

        sendMessage(data.value)
        props.backAnswer()
      }
    }

    return {
      data,
      onSubmit,
      show
    }
  }
}
</script>
<template>
  <form class="row g-3" @submit="onSubmit">
    <div class="col-md-6">
      <label for="validationDefault01" class="form-label">Nom - Prenoms</label>
      <input
        type="text"
        class="form-control"
        id="validationDefault01"
        placeholder="Mark"
        v-model="data.appelation"
        required
      />
    </div>
    <div class="col-md-6">
      <label for="validationDefault02" class="form-label">Telephone</label>
      <input
        type="text"
        class="form-control"
        id="validationDefault02"
        placeholder="59105267"
        v-model="data.numero"
        required
      />
    </div>
    <div class="col-md-6">
      <label for="validationDefault04" class="form-label">Status</label>
      <select class="form-select" id="validationDefault04" required v-model="data.status">
        <option value="Enseignant" selected>Enseignant</option>
        <option value="Etudiant">Etudiant</option>
        <option value="Diplome">Diplome</option>
      </select>
    </div>
    <div class="col-md-6">
      <label for="validationDefault04" class="form-label">Présent</label>
      <select class="form-select" id="validationDefault04" required v-model="data.is_entry">
        <option value="1" selected>Oui</option>
        <option value="0">Non</option>
      </select>
    </div>
    <div class="alet alert-danger" v-if="show">Veuillez remplir tout les champs</div>
    <button class="btn btn-success">Ajouter</button>
  </form>
</template>
