<template>
  <form @submit.prevent="submitCreateList">
    <label for="listName">Create a list and choose the expiration time</label>
    <br />
    <div class="input-group">
      <input
        type="text"
        name="listName"
        class="form-control"
        v-model.trim="list.name"
      />
      <select
        class="custom-select"
        id="createListExpiration"
        v-model="list.liveTime"
      >
        <option value="tmp" selected>1 Day</option>
        <option value="mth">30 Days</option>
        <option value="keep">1 Year</option>
      </select>
      <div class="input-group-append">
        <button class="btn btn-success" type="submit">Create</button>
      </div>
    </div>
    <p></p>
    <div class="alert alert-danger" role="alert" v-if="invalidInput">
      One or more input fields are invalid. Please check your provided data.
    </div>
    <div class="alert alert-danger" role="alert" v-if="apiError">
      Error with the server communication please contact your administrator.
    </div>
  </form>
</template>

<script src="./CreateToDoList.ts" lang="ts"></script>

<style scoped></style>
