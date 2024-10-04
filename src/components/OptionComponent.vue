<script setup>
defineProps({
  option: {
    default() {
      return {}
    },
    required: true,
    type: Object,
  },
})
</script>

<template>
  <div class="option">{{ option.id }}</div>
</template>
