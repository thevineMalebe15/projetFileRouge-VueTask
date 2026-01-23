<script setup lang="ts">
</script>

<template>
  <nav class="navbar bg-body-tertiary d-flex justify-content-evenly align-items-center p-auto">
    <div class="container col-6 p-4">
      <h3>VueTask</h3>
    </div>
    <div class="d-flex gap-2 col-6 justify-content-end p-4">
      <!-- Dashboard -->
      <router-link
        to="/"
        class="btn btn-outline-primary"
      >
        Dashboard
      </router-link>

      <!-- Liste des tâches -->
      <router-link
        to="/liste"
        class="btn btn-outline-primary"
      >
        Liste des tâches
      </router-link>

      <!-- Paramètres -->
      <router-link
        to="/parametre"
        class="btn btn-outline-primary"
      >
        Paramètres
      </router-link>
    </div>
  </nav>
</template>

<style scoped></style>
