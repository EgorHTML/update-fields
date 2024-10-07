<script setup>
import { defineModel } from 'vue'

const fieldId = defineModel()
</script>

<template>
  <form class="params_container" @submit.prevent>
    <div style="width: 40%">
      <input
        v-model="fieldId"
        placeholder="ID поля заявки"
        type="number"
        class="el-input__inner"
      />
    </div>
  </form>
</template>

<style scoped>
.params_container {
  height: 130px;
  width: 100%;
  background: -moz-linear-gradient(left, #2c9b75 0, #23879a 100%);
  background: -webkit-linear-gradient(left, #2c9b75 0, #23879a 100%);
  background: linear-gradient(to right, #2c9b75 0, #23879a 100%);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
