<script>
import EditIcon from './icons/EditIcon.vue'

export default {
  props: {
    invite: Object
  },
  components: {
    EditIcon
  },
  setup() {
    const ObjectToString = (data) => {
      return JSON.stringify(data)
    }

    return {
      ObjectToString
    }
  }
}
</script>
<template>
  <div
    class="item w-100 p-2 d-flex justify-content-between align-items-center invite mb-2 px-3"
    :class="invite.present === 'Non' ? 'text-bg-danger' : 'text-bg-success'"
  >
    <div class="d-flex flex-wrap justify-content-between align-items-center" style="width: 80%">
      <div class="m-2 d-flex flex-column w-50">
        <span class="m-2">{{ invite.nom + ' ' + invite.prenom }}</span>
        <span class="m-2">{{ invite.sexe }}</span>
        <span class="m-2">{{ invite.status }}</span>
        <span class="m-2">{{ invite.telephone }}</span>
        <span class="m-2">{{ invite.email }}</span>
      </div>

      <span class="m-2 fw-bold">{{ invite.present === "Oui" ? 'Present' : 'Absent' }}</span>
    </div>
    <router-link
      :to="
        '/update/' +
        invite._id +
        '/' +
        invite.nom +
        '/' +
        invite.prenom +
        '/' +
        invite.telephone +
        '/' +
        invite.status +
        '/' +
        invite.email +
        '/' +
        invite.sexe +
        '/' +
        invite.boursier +
        '/' +
        invite.present
      "
    >
      <EditIcon class="text-white fw-bold d-inline-block m-2 cursor" />
    </router-link>
  </div>
</template>
<style scoped>
.invite {
  border-radius: 5px;
}
.cursor {
  cursor: pointer;
}
</style>
