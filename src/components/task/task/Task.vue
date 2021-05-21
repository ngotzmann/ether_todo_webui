<template>
  <div class="row create_card"> <!-- <div class="row create_card" :style="{'background-color': task.color}"> -->
    <task-field @text-updated-enter="updateTaskText" @text-updated-blur="updateTaskText" :text="task.text"></task-field>
    <div class="col-md-1">
      <button type="button" class="btn btn-danger btn" @click="deleteTask">
        Delete
      </button>
    </div>
      <!-- <div class="col-md-2">
      <datepicker v-model="task.dueDate"></datepicker>
    </div> -->
  </div>
<hr/>
</template>

<script src="./Task.ts" lang="ts"></script>

<style scoped>
.create_card {
  border: 1px solid grey;
  padding-top: 1em;
  padding-bottom: 1em;
  border-radius: 16px;
  margin-bottom: 1em;
}
</style>

