<script setup>
import OptionComponent from '../components/OptionComponent.vue'

defineProps({
  nodes: {
    default() {
      return []
    },
    required: true,
    type: Array,
  },
})
</script>

<template>
  <div class="options_block">
    <OptionComponent
      v-for="node in nodes"
      :key="node.option.id"
      :option="node.option"
    />
  </div>
</template>
