<template>
  <div class="row">
      <div class="col-md-12">
          <button v-if="!showCreateTask" class="task_add_button" type="button" @click="showCreateTask = !showCreateTask">+ Add task</button>
      </div>
  </div>
  <div class="row create_task" style="margin-bottom: 1em;" v-if="showCreateTask">
    <div class="col-md-7">
        <input type="text" v-model="task.task" 
          placeholder="Enter task" class="form-control" @keyup.enter="addTask"/>
    </div>
    <div class="col-md-3">
        
    </div>
    <!-- <div class="col-md-2">
        <datepicker v-model="task.dueDate"></datepicker>
    </div> -->
    <!-- Just show colors of login users -->
    <!-- <div class="col-md-1">
          <chrome-picker v-model="colors"></chrome-picker>
    <Chrome v-model="colors"/>
        <button type="button" class="btn btn btn-outline-info text-center">color</button>
    </div> -->
    <div class="col-md-2" v-if="showCreateTask">
      <button type="button" class="pull-right btn btn btn-outline-success" 
        style="margin-right: 5px;" :disabled='task.task == ""' @click="addTask">Add</button> 

      <button type="button" class="pull-right btn btn btn-outline-danger" @click="showCreateTask = !showCreateTask">Cancel</button>
    </div>
  </div>
  
  <error-modal v-if="showError" @close="showError=false">
      <template v-slot:header>
        {{ errorHeaderMessage }}
      </template>
      <template v-slot:body>
        {{ errorMessage }}
      </template>
  </error-modal>

</template>

<script src="./CreateTask.ts" lang="ts"></script>

<style scoped>
.create_task {
  border: 1px solid grey;
  padding-top: 1em;
  padding-bottom: 1em;
  border-radius: 16px;
}
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
}
.items {
  margin: 0;
      margin-bottom: 0px;
  padding: 0;
  list-style-type: none;
}
.task_add_button {
  text-align: left;
  margin-left: -2px;
  padding: 0 0 8px;
  background: none;
  color: green;
  border: none;
}
</style>
