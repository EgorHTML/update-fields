<script setup>
import { ref } from 'vue'
import { getFieldName } from '../api/fieldOptions'

const input = ref('')
const autoCompleteListFocused = ref(false)
const inputValue = ref()

const emit = defineEmits(['search', 'choose'])

defineProps({
  disabled: {
    default: false,
    required: false,
    type: Boolean,
  },
  items: {
    type: Array,
    required: false,
    default() {
      return []
    },
  },
})

function onBlurItem() {
  setTimeout(() => (autoCompleteListFocused.value = false), 300)
}

function setInputValue(field) {
  emit('choose', field)
  inputValue.value = getFieldName(field)
}
</script>

<template>
  <input
    id="kb-suggest"
    ref="input"
    v-model="inputValue"
    autocomplete="off"
    :disabled="disabled"
    type="text"
    placeholder="Поиск"
    class="search__input"
    :class="disabled ? 'is-disabled' : ''"
    @focus="autoCompleteListFocused = true"
    @blur="onBlurItem"
    @input="$emit('search', inputValue)"
  />
  <ul
    :hidden="!items.length || !autoCompleteListFocused"
    class="autoComplete_list"
  >
    <li
      v-for="item in items"
      :key="item.id"
      class="autoComplete_list__item"
      @click="setInputValue(item)"
    >
      {{ getFieldName(item) }}
    </li>
  </ul>
</template>

<style scoped>
.is-disabled {
  background-color: #f5f7fa;
  border-color: #e4e7ed;
  color: #c0c4cc;
  cursor: not-allowed;
}
.search__input {
  background: #fff;
  border-radius: 20px;
  border: none;
  outline: 0;
  padding-left: 20px;
  font-size: 16px;
  height: 40px;
  width: 100%;
  box-sizing: border-box;
}

.autoComplete_list {
  position: absolute;
  max-height: 226px;
  overflow-y: scroll;
  box-sizing: border-box;
  left: 0;
  right: 0;
  margin: 0.5rem 0 0 0;
  top: 100px;
  padding: 0;
  z-index: 1;
  list-style: none;
  border-radius: 0.6rem;
  background-color: #fff;
  border: 1px solid rgba(33, 33, 33, 0.07);
  box-shadow: 0 3px 6px rgba(149, 157, 165, 0.15);
  outline: 0;
  transition: opacity 0.15s ease-in-out;
  -moz-transition: opacity 0.15s ease-in-out;
  -webkit-transition: opacity 0.15s ease-in-out;
}

.autoComplete_list[hidden] {
  display: block;
  opacity: 0;
  transform: scale(0);
}

.autoComplete_list__item {
  display: flex;
  gap: 10px;
  margin: 0.3rem;
  padding: 0.3rem 0.5rem;
  text-align: left;
  font-size: 1rem;
  color: #212121;
  border-radius: 0.35rem;
  background-color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all 0.2s ease;
}

.autoComplete_list__item:hover {
  cursor: pointer;
  background-color: rgba(79, 158, 175, 0.15);
}

.autoComplete_list::-webkit-scrollbar {
  width: 0;
}
</style>
