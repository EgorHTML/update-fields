<script setup>
import ParamsFieldBlock from '../blocks/ParamsFieldBlock.vue'
import FieldOptionsBlock from '../blocks/FieldOptionsBlock.vue'
import { ref, watchEffect } from 'vue'
import { getOptions } from '../api/fieldOptions.js'
import { throttle } from '../utils/throttle.js'

const fieldId = ref()
const options = ref([])
const setOptionsThrottle = throttle(setOptions, 1000)

async function setOptions() {
  try {
    const data = await getOptions(fieldId.value)

    options.value = data.data
  } catch (error) {
    console.warn(error)
  }
}

watchEffect(() => {
  if (fieldId.value) {
    setOptionsThrottle()
  }
})
</script>

<template>
  <div>
    <ParamsFieldBlock v-model="fieldId" />
    <FieldOptionsBlock :field-id="fieldId" :options="options" />
  </div>
</template>
