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
    let data = await getOptions(fieldId.value)
    options.value.push(...data.data)
    const pages = data.pagination.total_pages
    for (let page = 2; page <= pages; page++) {
      data = await getOptions(fieldId.value, page)
      options.value.push(...data.data)
    }
  } catch (error) {
    console.warn(error)
  }
}

watchEffect(() => {
  if (fieldId.value) {
    options.value = []
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
