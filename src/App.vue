<template>
<div class="jumbotron text-center title">
    <h1>EtherToDo</h1>
</div>
<div class="container">
  <router-view></router-view>
</div>
</template>

<script lang="ts">
export default {};
</script>

<style>
.btn-success {
  color: #fff;
  background-color: #198754;
  border-color: #198754;
}

.title {
  color: #228b22;
  text-align: left;
  margin-top: 0px; 
  margin-bottom:0; 
  background: #f8f8f8; 
  height: 4em; 
  padding-top: 8px;
}

.container {
  /* display: flex; */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>
