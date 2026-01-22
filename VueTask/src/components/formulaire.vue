<script setup lang="ts">
import { ref } from 'vue'
import type { Task, Priority } from '../stores/task'

const emit = defineEmits<{
  (e: 'add-task', task: Task): void
}>()

const titre = ref('')
const description = ref('')
const priorite = ref<Priority | null>(null)
const createdAt = ref('')
const completed = ref(false)

function ajouterTache() {
  if (!titre.value || !description.value || !priorite.value || !createdAt.value) {
    alert('Veuillez remplir tous les champs')
    return
  }

  const task: Task = {
    id: Date.now(),
    titre: titre.value,
    description: description.value,
    priorite: priorite.value,
    createdAt: new Date(createdAt.value),
    completed: completed.value
  }

  emit('add-task', task)

  titre.value = ''
  description.value = ''
  priorite.value = null
  createdAt.value = ''
  completed.value = false
}
</script>

<template>
  <form class="w-50 m-auto" @submit.prevent="ajouterTache">
    
     <div class="d-flex align-items-center justify-content-center flex-column mt-5">
    <div class="tache">Ajouter une tache</div>
    <form class="row g-3 m-auto w-75" @submit.prevent="ajouterTache">
      <div class="col-12">
        <label for="inputTitre" class="form-label">Titre</label>
        <input
          type="text"
          class="form-control"
          id="inputTitre"
          placeholder="Ex: Faire le menage"
          v-model="titre"
        />
      </div>

      <div class="col-12">
        <label for="inputDescription" class="form-label">Description</label>
        <input
          type="text"
          class="form-control"
          id="inputDescription"
          placeholder="Detail de la tache"
          v-model="description"
        />
      </div>

      <div class="col-md-4">
        <label for="inputState" class="form-label">Priorité</label>
        <select id="inputState" class="form-select" v-model="priorite">
          <option selected>Selectionner</option>
          <option>Moyenne</option>
          <option>Elevé</option>
          <option>Urgent</option>
        </select>
      </div>
      <div class="col-12">
        <label for="inputDate">Date de création</label>
        <input type="date" class="form-control" id="inputDate" v-model="createdAt" />
      </div>

      <div class="col-12">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck" v-model="completed" />
          <label class="form-check-label" for="gridCheck"> Tache terminée </label>
        </div>
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary">Ajouter</button>
      </div>
    </form>
  </div>
   
  </form>
</template>

<style scoped>
.tache {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}
</style>
