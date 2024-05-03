<script setup>
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <section class="flex flex-col min-h-screen">
    <HeaderComponent />
    <main class="flex-grow">
      <RouterView />
    </main>
    <FooterComponent />
  </section>
</template>
<style scoped>
.flex {
  display: flex;
}
.flex-col {
  flex-direction: column;
}
.min-h-screen {
  min-height: 100vh;
}
.flex-grow {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
