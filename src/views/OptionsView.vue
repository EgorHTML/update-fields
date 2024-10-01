<script setup>
import ParamsFieldBlock from '../blocks/ParamsFieldBlock.vue'
import FieldOptionsBlock from '../blocks/FieldOptionsBlock.vue'
import { ref, watchEffect } from 'vue'
import { getOptions } from '../api/fieldOptions.js'

const fieldId = ref()
const options = ref([])

watchEffect(() => {
  if (fieldId.value) {
    options.value = getOptions(fieldId.value)
  }
})
</script>

<template>
  <div>
    <ParamsFieldBlock v-model="fieldId" />
    <FieldOptionsBlock :options="options" />
  </div>
</template>
