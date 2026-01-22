<script setup lang="ts">
import type { Task } from '../stores/task'

const { task } = defineProps<{ task: Task }>()
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
