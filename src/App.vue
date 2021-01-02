<template>
  <div class="container">
    <div class="row">
      <div style="margin-top: 15px" class="col-md-12 titel">
        <h2>EtherToDo</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <router-view></router-view>
      </div>
    </div>
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

.titel {
  color: #228b22;
  text-align: left;
  margin-top: 15px;
  margin-bottom: 15px;
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
