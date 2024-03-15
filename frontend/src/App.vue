<script setup>
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
</script>

<template>
  <section>
    <HeaderComponent />
    <RouterView />
  </section>
</template>

<style scoped></style>
