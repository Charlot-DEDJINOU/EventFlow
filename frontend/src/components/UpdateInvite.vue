<script>
import { ref } from 'vue'
import { sendMessage } from '../websocket'
import { useRoute, useRouter } from 'vue-router'
import SuccessfulComponent from './SuccessfulComponent.vue'

export default {
  components: {
    SuccessfulComponent
  },
  setup() {
    const router = useRouter()
    const route = useRoute()

    const success = ref(true)

    const data = ref({
      appelation: route.params.appelation,
      id: route.params.id,
      numero: route.params.numero,
      status: route.params.status,
      email: route.params.email,
      sexe: route.params.sexe,
      is_boursier : route.params.is_boursier,
      is_entry: route.params.is_entry
    })

    const show = ref(false)

    const onSubmit = (e) => {
      e.preventDefault()
      if (
        data.value.appelation === '' ||
        data.value.numero === '' ||
        data.value.status === '' ||
        data.value.email === '' ||
        data.value.sexe === '' ||
        data.value.is_boursier === null,
        data.value.is_entry === null
      )
        show.value = true
      else {
        show.value = false

        data.value = {
          action: 'updateInvite',
          item: data.value
        }

        sendMessage(data.value)
        success.value = false

        setTimeout(() => {
          router.push('/')
        }, 1500)
      }
    }

    return {
      data,
      onSubmit,
      show,
      success
    }
  }
}
</script>
<template>
  <div class="container d-flex justify-content-center align-items-center mt-5">
    <form class="row g-3 form-update p-5" @submit="onSubmit" v-if="success">
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
          v-model="data.numero"
          required
        />
      </div>
      <div class="col-md-12">
        <label for="validationDefault08" class="form-label">Êtes-vous bénéficiaire du programme de bourse de la MCF ?</label>
        <select class="form-select" id="validationDefault08" required v-model="data.is_boursier">
          <option value="true">Oui</option>
          <option value="fasle">Non</option>
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
      <div class="col-md-6 mb-3">
        <label for="validationDefault04" class="form-label">Présent</label>
        <select class="form-select" id="validationDefault04" required v-model="data.is_entry">
          <option value="true" selected>Oui</option>
          <option value="false">Non</option>
        </select>
      </div>
      <div class="alet alert-danger" v-if="show">Veuillez remplir tout les champs</div>
      <button class="btn btn-success mb-3">Mettre à jour</button>
    </form>
    <SuccessfulComponent v-else title="Modification effectué avec succés" />
  </div>
</template>
<style>
.form-update {
  background-color: aliceblue;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.3);
}
</style>
