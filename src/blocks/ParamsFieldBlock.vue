<script setup>
import { defineModel } from 'vue'

const fieldId = defineModel()
</script>

<template>
  <form class="params_container" @submit.prevent>
    <input
      v-model="fieldId"
      placeholder="ID поля заявки"
      type="number"
      class="el-input__inner"
    />
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

.el-input__inner {
  text-align: center;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: block;
  font-size: inherit;
  height: 24px;
  line-height: 40px;
  outline: none;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 40%;
}
</style>
