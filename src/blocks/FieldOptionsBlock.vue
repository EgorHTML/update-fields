<!-- eslint-disable no-unused-vars -->
<script setup>
import { computed, watchEffect } from 'vue'
import TreeList from '../interfaces/TreeList.js'
import TreeOptionsBlock from './TreeOptionsBlock.vue'

const props = defineProps({
  options: {
    default() {
      return []
    },
    required: false,
    type: Array,
  },
})

const treeList = computed(() => new TreeList(props.options))

function getLevel(node) {}

watchEffect(() => {
  console.log(treeList.value, 'treeList.value')
})
</script>

<template>
  <div>
    <TreeOptionsBlock
      v-for="node in treeList.list"
      :key="node.option?.id"
      style="padding-left: 10px"
      :tree="node"
    />
  </div>
</template>
