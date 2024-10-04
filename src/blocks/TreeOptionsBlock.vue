<!-- eslint-disable no-unused-vars -->
<script setup>
import { computed, watchEffect } from 'vue'
import TreeNode from '../interfaces/TreeNode.js'
import OptionsBlock from './OptionsBlock.vue'

const porps = defineProps({
  tree: {
    default() {
      return {}
    },
    required: true,
    type: TreeNode,
  },
})

const nodeList = computed(() => {
  const res = []

  return res
})

watchEffect(() => {
  console.log(nodeList.value, 'nodeList')
})
//сделать структуру как у лесенки в виде массива с уровнями вложенности
</script>

<template>
  <div class="tree_options" style="border: 1px solid #000">
    {{ tree.option.id }}
    <br />
    <OptionsBlock :nodes="tree.childrens" />
  </div>
</template>
