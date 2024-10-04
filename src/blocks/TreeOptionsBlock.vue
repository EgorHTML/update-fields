<!-- eslint-disable no-unused-vars -->
<script setup>
import TreeNode from '../interfaces/TreeNode.js'
import OptionsBlock from './OptionsBlock.vue'
import OptionComponent from '../components/TreeNodeOptionComponent.vue'

const porps = defineProps({
  tree: {
    default() {
      return {}
    },
    required: true,
    type: TreeNode,
  },
})
</script>

<template>
  <div class="tree_options" style="border: 1px solid #000">
    <OptionComponent :node="tree" />
  </div>
</template>
