<script>
import { ref } from 'vue'
import { sendMessage } from '../websocket'

export default {
  props: {
    backAnswer: Function
  },
  setup(props) {
    const data = ref({
      nom: '',
      prenom: '',
      telephone: '',
      status: 'Enseignant',
      email: '',
      sexe: 'Masculin',
      boursier: 'Non',
      present: 'Non'
    })
    const show = ref(false)

    const onSubmit = (e) => {
      e.preventDefault()
      if (
        data.value.nom === '' ||
        data.value.prenom === '' ||
        data.value.telephone === '' ||
        data.value.status === '' ||
        data.value.email === '' ||
        data.value.sexe === '' ||
        data.value.boursier === '' ||
        data.value.present === ''
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
      <label for="validationDefault01" class="form-label">Nom</label>
      <input
        type="text"
        class="form-control"
        id="validationDefault01"
        placeholder="DEDJINOU"
        v-model="data.nom"
        required
      />
    </div>
    <div class="col-md-6">
      <label for="validationDefault011" class="form-label">Prenom</label>
      <input
        type="text"
        class="form-control"
        id="validationDefault011"
        placeholder="Charlot"
        v-model="data.prenom"
        required
      />
    </div>
    <div class="col-md-6">
      <label for="validationDefault07" class="form-label">Email</label>
      <input
        type="email"
        class="form-control"
        id="validationDefault07"
        placeholder="example@gmail.com"
        v-model="data.email"
        required
      />
    </div>
    <div class="col-md-6">
      <label for="validationDefault08" class="form-label">Sexe</label>
      <select class="form-select" id="validationDefault08" required v-model="data.sexe">
        <option value="Masculin">Masculin</option>
        <option value="Feminin">Féminin</option>
      </select>
    </div>
    <div class="col-md-6">
      <label for="validationDefault02" class="form-label">Telephone</label>
      <input
        type="text"
        class="form-control"
        id="validationDefault02"
        placeholder="59105267"
        v-model="data.telephone"
        required
      />
    </div>
    <div class="col-md-6">
      <label for="validationDefault08" class="form-label">Bénéficiaire du programme MCF ?</label>
      <select class="form-select" id="validationDefault08" required v-model="data.boursier">
        <option value="Oui">Oui</option>
        <option value="Non">Non</option>
      </select>
    </div>
    <div class="col-md-6">
      <label for="validationDefault04" class="form-label">Status</label>
      <select class="form-select" id="validationDefault04" required v-model="data.status">
        <option value="Enseignant" selected>Enseignant</option>
        <option value="Cadre">Cadre Administratif/Responsable</option>
        <option value="Etudiant">Etudiant</option>
        <option value="Diplome">Diplome</option>
        <option value="Lyceen">Lyceen</option>
        <option value="Entrepreneur">Entrepreneur</option>
        <option value="Autre">Autre</option>
      </select>
    </div>
    <div class="col-md-6">
      <label for="validationDefault04" class="form-label">Présent</label>
      <select class="form-select" id="validationDefault04" required v-model="data.present">
        <option value="Oui" selected>Oui</option>
        <option value="Non">Non</option>
      </select>
    </div>
    <div class="alet alert-danger" v-if="show">Veuillez remplir tout les champs</div>
    <button class="btn btn-success">Ajouter</button>
  </form>
</template>
