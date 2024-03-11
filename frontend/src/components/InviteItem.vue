<script>
import EditIcon from './icons/EditIcon.vue'

export default {
  components: {
    EditIcon
  }
}
</script>
<template>
  <div
    class="item w-100 p-2 d-flex justify-content-between align-items-center invite mb-2 text-bg-success px-3"
  >
    <div class="d-flex flex-wrap justify-content-between align-items-center" style="width: 80%">
      <span class="m-2">Charlot DEDJINOU</span>
      <span class="m-2">Etudiant</span>
      <span class="m-2">59 10 52 67</span>
      <span class="m-2">Présent</span>
    </div>
    <EditIcon class="text-white fw-bold d-inline-block my-2" />
  </div>
  <div
    class="item w-100 p-2 d-flex justify-content-between align-items-center invite mb-2 text-bg-danger px-3"
  >
    <div class="d-flex flex-wrap justify-content-between align-items-center" style="width: 80%">
      <span class="m-2">Charlot DEDJINOU</span>
      <span class="m-2">Etudiant</span>
      <span class="m-2">59 10 52 67</span>
      <span class="m-2">Absent</span>
    </div>
    <EditIcon class="text-white fw-bold d-inline-block my-2" />
  </div>
</template>
<style scoped>
.invite {
  border-radius: 5px;
}
</style>
