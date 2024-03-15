<script>
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    let etudiant_present = 0
    let etudiant_absent = 0
    let enseignant_present = 0
    let enseignant_absent = 0
    let diplome_present = 0
    let diplome_absent = 0

    for (const invite of store.state.invites) {
      if (invite.status == 'Etudiant' && invite.is_entry == 1) {
        etudiant_present++
      } else if (invite.status == 'Etudiant' && invite.is_entry == 0) {
        etudiant_absent++
      } else if (invite.status == 'Enseignant' && invite.is_entry == 1) {
        enseignant_present++
      } else if (invite.status == 'Enseignant' && invite.is_entry == 0) {
        enseignant_absent++
      } else if (invite.status == 'Diplome' && invite.is_entry == 1) {
        diplome_present++
      } else if (invite.status == 'Diplome' && invite.is_entry == 0) {
        diplome_absent++
      }
    }

    return {
      etudiant_present,
      etudiant_absent,
      enseignant_present,
      enseignant_absent,
      diplome_present,
      diplome_absent
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
            :style="{ width: (100 * etudiant_present / (etudiant_absent + etudiant_present)) + '%' }"
          ></div>
        </div>
      </div>
      <div class="col-md-12 mb-5">
        <div class="d-flex justify-content-between">
          <span class="mb-2 d-inline-block fs-5 fw-medium">Enseigants</span>
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
            :style="{ width: (100 * enseignant_present / (enseignant_absent + enseignant_present)) + '%' }"
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
            :style="{ width: (100 * diplome_present / (diplome_absent + diplome_present)) + '%' }"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>
