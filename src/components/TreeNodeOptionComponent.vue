<!-- eslint-disable no-unused-vars -->
<script setup>
import { watchEffect } from 'vue'
import TreeNode from '../interfaces/TreeNode'

const props = defineProps({
  node: {
    default() {
      return {}
    },
    required: true,
    type: TreeNode,
  },
  level: {
    default: 0,
    required: false,
    type: Number,
  },
})
</script>

<template>
  <div class="option">
    <div class="label">{{ node.option.id }}</div>
    <div
      v-if="node.childrens && node.childrens.length"
      class="children"
      style="padding-left: 20px"
    >
      <OptionComponent
        v-for="child in node.childrens"
        :key="child.option.id"
        :node="child"
      />
    </div>
  </div>
</template>
