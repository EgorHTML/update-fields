<!-- eslint-disable no-unused-vars -->
<script setup>
import { ref, provide, watchEffect } from 'vue'
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
  fieldId: {
    default: 0,
    required: true,
    type: Number,
  },
})

const treeList = ref()

watchEffect(() => {
  treeList.value = new TreeList(props.options)
  console.log(treeList.value, 'treeList wathch')
})

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

async function updateFieldOptions() {
  console.log(editOptionFormSettings.value, 'editOptionFormSettings')
  const type = editOptionFormSettings.value.type
  let data
  try {
    if (type === 'edit') {
      const option = {
        name: editOptionFormSettings.value.name,
        id: editOptionFormSettings.value.node.option.id,
      }
      data = await updateOptions(props.fieldId, [option])
    } else if (type === 'add') {
      const option = {
        name: editOptionFormSettings.value.name,
        pid: editOptionFormSettings.value.node.option.id,
      }

      data = await updateOptions(props.fieldId, [option])
    } else if (type === 'delete') {
      data = await deleteOption(
        props.fieldId,
        editOptionFormSettings.value.node.option.id
      )
    }
  } catch (error) {
    console.warn(error)
  }

  console.log(data, 'data')
}
</script>

<template>
  <div>
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
