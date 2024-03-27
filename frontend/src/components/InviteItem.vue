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
    :class="invite.is_entry == 0 ? 'text-bg-danger' : 'text-bg-success'"
  >
    <div class="d-flex flex-wrap justify-content-between align-items-center" style="width: 80%">
      <div class="m-2 d-flex flex-column w-50">
        <span class="m-2">{{ invite.appelation }}</span>
        <span class="m-2">{{ invite.sexe }}</span>
        <span class="m-2">{{ invite.status }}</span>
        <span class="m-2">{{ invite.numero }}</span>
        <span class="m-2">{{ invite.email }}</span>
      </div>

      <span class="m-2 fw-bold">{{ invite.is_entry == 1 ? 'Present' : 'Absent' }}</span>
    </div>
    <router-link
      :to="
        '/update/' +
        invite.id +
        '/' +
        invite.appelation +
        '/' +
        invite.numero +
        '/' +
        invite.status +
        '/' +
        invite.email +
        '/' +
        invite.sexe +
        '/' +
        invite.is_entry
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
