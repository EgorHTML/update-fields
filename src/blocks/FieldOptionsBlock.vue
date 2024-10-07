<!-- eslint-disable no-unused-vars -->
<script setup>
import { computed, ref, provide } from 'vue'
import TreeList from '../interfaces/TreeList.js'
import TreeOptionsBlock from './TreeOptionsBlock.vue'
import EditOptionForm from '../components/EditOptionForm.vue'
import { updateOptions, deleteOption } from '../api/fieldOptions.js'
import PopoverComponent from '../components/PopoverComponent.vue'

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

const container = ref()
console.log(container, 'cont')

const actions = {
  edit: updateOptions,
  delete: deleteOption,
}

const editOptionFormSettings = ref({
  type: 'edit',
  show: false,
  coords: {
    x: 0,
    y: 0,
  },
  name: {
    ru: '',
    en: '',
    ua: '',
  },
  node: undefined,
})

provide('editFormSettings', editOptionFormSettings)

function updateFieldOptions() {
  console.log(editOptionFormSettings.value, 'editOptionFormSettings')
}
</script>

<template>
  <div ref="container">
    <PopoverComponent
      :settings="{
        show: editOptionFormSettings.show,
        style: {
          top: editOptionFormSettings.coords.y,
          left: editOptionFormSettings.coords.x,
        },
      }"
    >
      <EditOptionForm
        v-model="editOptionFormSettings"
        @edit="updateFieldOptions"
      />
    </PopoverComponent>
    <TreeOptionsBlock
      v-for="node in treeList.list"
      :key="node.option?.id"
      style="width: 95%; margin: 0 auto"
      :tree="node"
    />
  </div>
</template>
