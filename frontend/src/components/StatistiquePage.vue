<script>
import { useStore } from 'vuex'
import { onMounted, watch, ref } from 'vue'

export default {
  setup() {
    const store = useStore()

    let etudiant_present = ref(0)
    let etudiant_absent = ref(0)
    let enseignant_present = ref(0)
    let enseignant_absent = ref(0)
    let diplome_present = ref(0)
    let diplome_absent = ref(0)
    let lyceen_present = ref(0)
    let lyceen_absent = ref(0)
    let entrepreneur_present = ref(0)
    let entrepreneur_absent = ref(0)

    const statistiques = () => {
      etudiant_present.value = 0
      etudiant_absent.value = 0
      enseignant_present.value = 0
      enseignant_absent.value = 0
      diplome_present.value = 0
      diplome_absent.value = 0
      lyceen_present.value = 0
      lyceen_absent.value = 0
      entrepreneur_present.value = 0
      entrepreneur_absent.value = 0

      for (const invite of store.state.invites) {
        if (invite.status == 'Etudiant' && invite.is_entry == 1) {
          etudiant_present.value++
        } else if (invite.status == 'Etudiant' && invite.is_entry == 0) {
          etudiant_absent.value++
        } else if (invite.status == 'Enseignant' && invite.is_entry == 1) {
          enseignant_present.value++
        } else if (invite.status == 'Enseignant' && invite.is_entry == 0) {
          enseignant_absent.value++
        } else if (invite.status == 'Diplome' && invite.is_entry == 1) {
          diplome_present.value++
        } else if (invite.status == 'Diplome' && invite.is_entry == 0) {
          diplome_absent.value++
        } else if (invite.status == 'Lyceen' && invite.is_entry == 1) {
          lyceen_present.value++
        } else if (invite.status == 'Lyceen' && invite.is_entry == 0) {
          lyceen_absent.value++
        } else if (invite.status == 'Entrepreneur' && invite.is_entry == 1) {
          entrepreneur_present.value++
        } else if (invite.status == 'Entrepreneur' && invite.is_entry == 0) {
          entrepreneur_absent.value++
        }
      }
    }

    onMounted(statistiques)

    watch(() => store.state.invites, statistiques)

    return {
      etudiant_present,
      etudiant_absent,
      enseignant_present,
      enseignant_absent,
      diplome_present,
      diplome_absent,
      lyceen_present,
      lyceen_absent,
      entrepreneur_present,
      entrepreneur_absent
    }
  }
}
</script>

<template>
  <section class="container h-100 mt-5">
    <div class="row">
      <div class="col-md-12 mb-5">
        <div class="d-flex justify-content-between">
          <span class="mb-2 d-inline-block fs-5 fw-medium">Etudiants</span>
          <i>{{ etudiant_present + '/' + (etudiant_absent + etudiant_present) }}</i>
        </div>
        <div
          class="progress"
          role="progressbar"
          aria-label="Animated striped example"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            class="progress-bar progress-bar-striped progress-bar-animated bg-success"
            :style="{
              width: (100 * etudiant_present) / (etudiant_absent + etudiant_present) + '%'
            }"
          ></div>
        </div>
      </div>
      <div class="col-md-12 mb-5">
        <div class="d-flex justify-content-between">
          <span class="mb-2 d-inline-block fs-5 fw-medium">Enseignants</span>
          <i>{{ enseignant_present + '/' + (enseignant_absent + enseignant_present) }}</i>
        </div>
        <div
          class="progress"
          role="progressbar"
          aria-label="Animated striped example"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            class="progress-bar progress-bar-striped progress-bar-animated bg-success"
            :style="{
              width: (100 * enseignant_present) / (enseignant_absent + enseignant_present) + '%'
            }"
          ></div>
        </div>
      </div>
      <div class="col-md-12 mb-5">
        <div class="d-flex justify-content-between">
          <span class="mb-2 d-inline-block fs-5 fw-medium">Diplomés</span>
          <i>{{ diplome_present + '/' + (diplome_absent + diplome_present) }}</i>
        </div>
        <div
          class="progress"
          role="progressbar"
          aria-label="Animated striped example"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            class="progress-bar progress-bar-striped progress-bar-animated bg-success"
            :style="{ width: (100 * diplome_present) / (diplome_absent + diplome_present) + '%' }"
          ></div>
        </div>
      </div>
      <div class="col-md-12 mb-5">
        <div class="d-flex justify-content-between">
          <span class="mb-2 d-inline-block fs-5 fw-medium">Lyceens</span>
          <i>{{ lyceen_present + '/' + (lyceen_absent + lyceen_present) }}</i>
        </div>
        <div
          class="progress"
          role="progressbar"
          aria-label="Animated striped example"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            class="progress-bar progress-bar-striped progress-bar-animated bg-success"
            :style="{ width: (100 * lyceen_present) / (lyceen_absent + lyceen_present) + '%' }"
          ></div>
        </div>
      </div>
      <div class="col-md-12 mb-5">
        <div class="d-flex justify-content-between">
          <span class="mb-2 d-inline-block fs-5 fw-medium">Entrepreneurs</span>
          <i>{{ entrepreneur_present + '/' + (entrepreneur_absent + entrepreneur_present) }}</i>
        </div>
        <div
          class="progress"
          role="progressbar"
          aria-label="Animated striped example"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            class="progress-bar progress-bar-striped progress-bar-animated bg-success"
            :style="{
              width:
                (100 * entrepreneur_present) / (entrepreneur_absent + entrepreneur_present) + '%'
            }"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>
