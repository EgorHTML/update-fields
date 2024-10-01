<!-- eslint-disable no-unused-vars -->
<script setup>
const props = defineProps({
  options: {
    default() {
      return []
    },
    required: false,
    type: Array,
  },
})
</script>

<template>
  <div>options</div>
</template>
