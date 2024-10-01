<script setup lang="ts">
const props = defineProps({
  requestStatus: {
    type: String,
    required: true,
  },
})

const statuses = {
  success: {
    message: 'Успешно!',
    color: 'green',
    type: 'success',
  },
  error: {
    message: 'Произошла ошибка. Обратитесь к администратору системы.',
    color: 'red',
    type: 'warning',
  },
}
</script>

<template>
  <div
    v-if="statuses[props.requestStatus]"
    class="el-alert"
    :style="{ color: statuses[props.requestStatus].color }"
  >
    {{ statuses[props.requestStatus].message }}
  </div>
</template>

<style>
.el-alert {
  text-align: center;
}
</style>
