<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import HeaderCom from './components/header.vue'
import Formulaire from './components/formulaire.vue'
import Card from './components/card.vue'
import type { Task } from './stores/task'
import FilterCard from './components/filterCard.vue'

const taches = ref<Task[]>([])

// Restaurer depuis localStorage au chargement
onMounted(() => {
  const saved = localStorage.getItem('taches')
  if (saved) {
    taches.value = JSON.parse(saved)
  }
})

// Sauvegarder à chaque modification
watch(
  () => taches.value,
  (newVal) => {
    localStorage.setItem('taches', JSON.stringify(newVal))
  },
  { deep: true }
)

const ajouterTache = (task: Task) => {
  taches.value.push(task)
}
</script>

<template>
  <HeaderCom />
  <Formulaire @add-task="ajouterTache" />
  <FilterCard>  </FilterCard>


  <div class="d-flex flex-wrap justify-content-center">
    <Card v-for="t in taches" :key="t.id" :task="t" />
  </div>
</template>
