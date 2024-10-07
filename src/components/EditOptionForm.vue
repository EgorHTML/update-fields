<!-- eslint-disable no-unused-vars -->
<script setup>
import { computed } from 'vue'

const settings = defineModel()
const emit = defineEmits(['edit'])

const textButton = computed(() => {
  switch (settings.value.type) {
    case 'edit':
      return 'Редактировать'
    case 'add':
      return 'Добавить'
    case 'delete':
      return 'Удалить'
    default:
      return 'Редактировать'
  }
})

const onlyRead = computed(() => settings.value.type === 'delete')

function edit() {
  emit('edit')
  settings.value = {
    ...settings.value,
    name: { ru: '', en: '', ua: '' },
    show: false,
  }
}
</script>

<template>
  <div class="edit-form">
    <button class="form__close-button" @click="settings.show = false">
      <span class="close-icon">X</span>
    </button>

    <input
      v-model="settings.name.ru"
      class="el-input__inner"
      type="text"
      placeholder="Название RU"
      :disabled="onlyRead"
    />
    <input
      v-model="settings.name.en"
      class="el-input__inner"
      type="text"
      placeholder="Название EN"
      :disabled="onlyRead"
    />
    <input
      v-model="settings.name.ua"
      class="el-input__inner"
      type="text"
      placeholder="Название UA"
      :disabled="onlyRead"
    />

    <div class="action_button" @click="edit">
      {{ textButton }}
    </div>
  </div>
</template>

<style scoped>
.edit-form {
  background: #fff;
  display: flex;
  flex-direction: column;
  position: relative;
}

.action_button {
  align-self: flex-end;
}

.form__close-button {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
