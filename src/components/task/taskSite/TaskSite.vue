<template>
    <div class="row">
        <div class="col-md-12">
            <p></p>
            <center>
              <h4>ToDo List description</h4>
            </center>
            <textarea aria-describedby="inputGroup-sizing-lg" class="form-control" v-model.trim="list.description"></textarea> 
            <p></p>
        </div>
    </div>
    <div class="row">
    <div class="col-md-12">
      <center>
        <h4>ToDo Tasks</h4>
      </center>
    </div>
  </div>
  <div v-for="task in taskList" :key="task.id">
    <task :listName="list.name" :taskProp="task"></task>
  </div>
  <create-task :listName="list.name"></create-task>

</template>

<script src="./TaskSite.ts" lang="ts"></script>

<style scoped></style>
