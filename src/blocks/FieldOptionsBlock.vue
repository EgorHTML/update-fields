<!-- eslint-disable no-unused-vars -->
<script setup>
import { ref, provide, watchEffect, nextTick } from 'vue'
import TreeList from '../interfaces/TreeList.js'
import EditOptionForm from '../components/EditOptionForm.vue'
import { updateOptions, deleteOption } from '../api/fieldOptions.js'
import PopoverComponent from '../components/PopoverComponent.vue'
import TreeNodeOptionComponent from '../components/TreeNodeOptionComponent.vue'
import { editHandler } from '../utils/editForm.js'

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

const renderComponent = ref(true)

const forceRender = async () => {
  renderComponent.value = false
  await nextTick()
  renderComponent.value = true
}

const treeList = ref()

watchEffect(async () => {
  treeList.value = new TreeList(props.options)
  await forceRender()
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
  // stop()
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
      data = {
        data: [
          {
            id: editOptionFormSettings.value.node.option.id,
          },
        ],
      }
      data = await deleteOption(
        props.fieldId,
        editOptionFormSettings.value.node.option.id
      )
    }
  } catch (error) {
    console.warn(error)
  }

  treeList.value = treeList.value.update(data.data)
  await forceRender()
}
</script>

<template>
  <div v-if="renderComponent">
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
    <div class="container" style="width: 95%; margin: 0 auto">
      <div
        v-if="treeList.list && treeList.list.length"
        data-action="add"
        class="action_button"
        @click="editHandler($event, editOptionFormSettings, {})"
      >
        Добавить первый уровень
      </div>
      <div
        v-for="node in treeList.list"
        :key="node.option?.id"
        class="tree_options"
      >
        <TreeNodeOptionComponent :node="node" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.tree_options {
  border-bottom: 1px solid #cccbcb;
}
</style>
