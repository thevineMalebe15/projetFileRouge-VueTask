<script setup lang="ts">
import { ref } from 'vue'
import Card from './components/card.vue'
import filterCard from './components/filterCard.vue';

import HeaderCom from './components/header.vue';
import parametre from './components/parametre.vue';
import formulaire from './components/formulaire.vue';
import type { Task, Priority, FilterStatus } from './stores/task';

const taches = ref<Task[]>([]);
const ajouterTache = (tache: Task) => {
  taches.value.push(tache);
};


</script>
<template>
  <HeaderCom></HeaderCom>
  <formulaire></formulaire>
  <filterCard></filterCard>  

  <div class="d-flex flex-wrap justify-content-center">
    <Card v-for="t in taches" :key="t.id" :task="t" />
  </div>
  <parametre></parametre>
</template>
