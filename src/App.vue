<script setup>
import OptionsView from './views/OptionsView.vue'
</script>

<template>
  <div>
    <OptionsView />
  </div>
</template>

<style scoped>
#app {
  height: 100%;
}
.field_wrapper {
  height: 100%;
}
.field_options {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
}
.button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  border-color: #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 8px 14px;
  font-size: 14px;
  border-radius: 4px;
}

.button__danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
}

.button__danger:hover,
.button__danger:focus {
  background: #f78989;
  border-color: #f78989;
  color: #fff;
}
.el-input__inner {
  margin: 10px auto;
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
.container {
  height: 130px;
  width: 100%;
  background: -moz-linear-gradient(left, #2c9b75 0, #23879a 100%);
  background: -webkit-linear-gradient(left, #2c9b75 0, #23879a 100%);
  background: linear-gradient(to right, #2c9b75 0, #23879a 100%);
}

form {
  padding: 10px 0;
  position: relative;
  width: 100%;
}
</style>
