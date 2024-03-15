<script>
import CheckIcon from './icons/CheckIcon.vue'
export default {
  props: {
    title: String
  },
  components: {
    CheckIcon
  }
}
</script>
<template>
  <div class="successful d-flex flex-column justify-content-center align-items-center">
    <CheckIcon class="text-success" />
    <p class="my-3 fs-4 fw-medium">{{ title }}</p>
  </div>
</template>
