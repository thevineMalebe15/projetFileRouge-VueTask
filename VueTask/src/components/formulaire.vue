<script setup lang="ts">
import { ref } from 'vue';

  

</script>

<template>
  <div class="d-flex align-items-center justify-content-center flex-column mt-5">
  <div class="tache">
    Ajouter une tache
  </div>
 <form class="row g-3 m-auto w-50 ">
  <div class="col-12">
    <label for="inputTitre" class="form-label">Titre</label>
    <input type="text" class="form-control" id="inputTitre" placeholder="Ex: Faire le menage">
  </div>

  <div class="col-12">
    <label for="inputDescription" class="form-label">Description</label>
    <input type="text" class="form-control" id="inputDescription" placeholder="Detail de la tache">
  </div>


  <div class="col-md-4">
    <label for="inputState" class="form-label">Priorité</label>
    <select id="inputState" class="form-select">
      <option selected>Selectionner</option>
      <option>Moyenne</option>
      <option>Elevé</option>
      <option>Urgent</option>
    </select>
  </div>
  <div class="col-12">
    <label for="inputDate">Date de création</label>
    <input type="date" class="form-control" id="inputDate">
  </div>

  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck">
      <label class="form-check-label" for="gridCheck">
        Tache terminée
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Ajouter</button>
  </div>
</form>
</div>
</template>

<style scoped>
  .tache{
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }

</style>
