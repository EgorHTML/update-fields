<!-- eslint-disable no-unused-vars -->
<script setup>
import TreeNode from '../interfaces/TreeNode.js'
import TreeNodeOptionComponent from '../components/TreeNodeOptionComponent.vue'

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
  <div class="tree_options">
    <TreeNodeOptionComponent :node="tree" />
  </div>
</template>

<style scoped>
.tree_options {
  border-bottom: 1px solid rgb(197, 198, 201, 0.8);
}
</style>
