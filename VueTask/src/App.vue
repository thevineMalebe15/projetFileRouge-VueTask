<script setup lang="ts">
import { ref } from 'vue'
import HeaderCom from './components/header.vue'
import Formulaire from './components/formulaire.vue'
import Card from './components/card.vue'
import type { Task } from './stores/task'
import filterCard from './components/filterCard.vue'

const taches = ref<Task[]>([])

const ajouterTache = (task: Task) => {
  taches.value.push(task)
}
</script>

<template>
  <HeaderCom />

  <Formulaire @add-task="ajouterTache" />
  <filterCard />

  <div class="d-flex flex-wrap justify-content-center">
    <Card
      v-for="t in taches"
      :key="t.id"
      :task="t"
    />
  </div>
</template>
