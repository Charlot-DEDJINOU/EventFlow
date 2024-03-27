<script>
import { useStore } from 'vuex'
import { onMounted, watch, ref } from 'vue'

export default {
  setup() {
    const store = useStore()

    let total = ref(store.state.invites.length)
    let etudiant = ref(0)
    let enseignant = ref(0)
    let diplome = ref(0)
    let lyceen = ref(0)
    let entrepreneur = ref(0)
    let cadre = ref(0)
    let autre = ref(0)
    let masculin = ref(0)
    let feminin = ref(0)
    let boursier = ref(0)
    let no_boursier = ref(0)

    const statistiques = () => {
      etudiant.value = 0
      enseignant.value = 0
      diplome.value = 0
      lyceen.value = 0
      entrepreneur.value = 0
      cadre.value = 0
      autre.value = 0
      masculin.value = 0
      feminin.value = 0
      boursier.value = 0
      no_boursier.value = 0
      total.value = store.state.invites.length

      for (const invite of store.state.invites) {
        if (invite.status == 'Etudiant') {
          etudiant.value++
        } else if (invite.status == 'Enseignant') {
          enseignant.value++
        } else if (invite.status == 'Diplome') {
          diplome.value++
        } else if (invite.status == 'Lyceen') {
          lyceen.value++
        } else if (invite.status == 'Entrepreneur') {
          entrepreneur.value++
        } else if (invite.status == 'Cadre') {
          cadre.value++
        } else if (invite.status == 'Autre') {
          autre.value++
        } 

        if (invite.sexe == 'Masculin') {
          masculin.value++
        } else {
          feminin.value++
        }

        if(invite.is_boursier == 1) {
          boursier.value++
        } else {
          no_boursier.value++
        }
      }
    }

    onMounted(statistiques)

    watch(() => store.state.invites, statistiques)

    return {
      etudiant,
      enseignant,
      diplome,
      lyceen,
      entrepreneur,
      cadre,
      autre,
      masculin,
      feminin,
      boursier,
      no_boursier,
      total
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
          <i>{{ etudiant + '/' + total }}</i>
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
              width: (100 * etudiant) / total + '%'
            }"
          ></div>
        </div>
      </div>
      <div class="col-md-12 mb-5">
        <div class="d-flex justify-content-between">
          <span class="mb-2 d-inline-block fs-5 fw-medium">Cadres Administratifs</span>
          <i>{{ cadre + '/' + total }}</i>
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
              width: (100 * cadre) / total + '%'
            }"
          ></div>
        </div>
      </div>
      <div class="col-md-12 mb-5">
        <div class="d-flex justify-content-between">
          <span class="mb-2 d-inline-block fs-5 fw-medium">Enseignants</span>
          <i>{{ enseignant + '/' + total }}</i>
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
              width: (100 * enseignant) / total + '%'
            }"
          ></div>
        </div>
      </div>
      <div class="col-md-12 mb-5">
        <div class="d-flex justify-content-between">
          <span class="mb-2 d-inline-block fs-5 fw-medium">Diplomés</span>
          <i>{{ diplome + '/' + total }}</i>
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
            :style="{ width: (100 * diplome) / total + '%' }"
          ></div>
        </div>
      </div>
      <div class="col-md-12 mb-5">
        <div class="d-flex justify-content-between">
          <span class="mb-2 d-inline-block fs-5 fw-medium">Lyceens</span>
          <i>{{ lyceen + '/' + total }}</i>
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
            :style="{ width: (100 * lyceen) / total + '%' }"
          ></div>
        </div>
      </div>
      <div class="col-md-12 mb-5">
        <div class="d-flex justify-content-between">
          <span class="mb-2 d-inline-block fs-5 fw-medium">Entrepreneurs</span>
          <i>{{ entrepreneur + '/' + total }}</i>
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
              width: (100 * entrepreneur) / total + '%'
            }"
          ></div>
        </div>
      </div>
      <div class="col-md-12 mb-5">
        <div class="d-flex justify-content-between">
          <span class="mb-2 d-inline-block fs-5 fw-medium">Autres Status</span>
          <i>{{ autre + '/' + total }}</i>
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
              width: (100 * autre) / total + '%'
            }"
          ></div>
        </div>
      </div>
      <div class="col-md-12 mb-5">
        <div class="d-flex justify-content-between">
          <span class="mb-2 d-inline-block fs-5 fw-medium">Masculin</span>
          <i>{{ masculin + '/' + total }}</i>
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
              width: (100 * masculin) / total + '%'
            }"
          ></div>
        </div>
      </div>
      <div class="col-md-12 mb-5">
        <div class="d-flex justify-content-between">
          <span class="mb-2 d-inline-block fs-5 fw-medium">Feminin</span>
          <i>{{ feminin + '/' + total }}</i>
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
              width: (100 * feminin) / total + '%'
            }"
          ></div>
        </div>
      </div>
      <div class="col-md-12 mb-5">
        <div class="d-flex justify-content-between">
          <span class="mb-2 d-inline-block fs-5 fw-medium">Bénéficiaires MCF</span>
          <i>{{ boursier + '/' + total }}</i>
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
              width: (100 * boursier) / total + '%'
            }"
          ></div>
        </div>
      </div>
      <div class="col-md-12 mb-5">
        <div class="d-flex justify-content-between">
          <span class="mb-2 d-inline-block fs-5 fw-medium">Non Bénéficiaires MCF</span>
          <i>{{ no_boursier + '/' + total }}</i>
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
              width: (100 * no_boursier) / total + '%'
            }"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>
