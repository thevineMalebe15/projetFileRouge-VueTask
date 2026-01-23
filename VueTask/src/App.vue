<script setup lang="ts">
import { ref } from 'vue'


</script>

<template>

  <Taches></Taches>

  <div class="d-flex flex-wrap justify-content-center">
    <Card v-for="t in taches" :key="t.id" :task="t" />
  </div>
</template>
