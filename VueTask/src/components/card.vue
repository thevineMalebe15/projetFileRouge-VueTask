<script setup lang="ts">
import { watch } from 'vue';
import type { Task } from '../stores/task'

const { task } = defineProps<{ task: Task }>()


watch( // observe la variable passée en paramètre
  () => task,
  () => {
    localStorage.setItem('task', JSON.stringify(task))
  },
  { deep: true },
)

const datatask = localStorage.getItem('task') // recuperer les données enregistrées

if (datatask) {
  task.value = JSON.parse(datatask)
}

</script>

<template >

     
    <div class="d-flex justify-content-center align-items-center m-4 flex-wrap$  ">
         <div class="card mt-4  h-100 " style="width: 18rem ">
    <div class="card-body  ">
      <h5 class="card-title">{{ task.titre }}</h5>
      <p class="card-text">{{ task.description }}</p>
      <p class="text-muted">
        Créé le : {{ new Date(task.createdAt).toLocaleDateString() }}
      </p>
      <a href="" class="btn btn-primary">Voir les détails</a>
    </div>
  </div>
    </div>
 
</template>
<style scoped>
    
</style>
