<script setup lang="ts"></script>

<template>
<div class="buttons-container">
  <h2 class="h2">Paramètres</h2>
  <button type="button" class="btn btn-danger ">Supprimer toutes les taches</button>
</div>

</template>

<style scoped>
.buttons-container {
  background-color: rgb(221, 194, 143);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 90px;
  margin-top: 20px;
}
.btn{
  margin-bottom: 40px;
}
.h2{
  margin-top: 50px;
}
</style>
