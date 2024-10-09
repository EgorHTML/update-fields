<script setup>
import { computed, inject, ref } from 'vue'
import TreeNode from '../interfaces/TreeNode.js'
import { editHandler } from '../utils/editForm.js'

const props = defineProps({
  node: {
    default() {
      return {}
    },
    required: true,
    type: TreeNode,
  },
})

const children = computed(() => props.node.children)

const editForm = inject('editFormSettings')

const hasChildren = children.value && children.value.length
const open = ref(true)

const label = computed(() => {
  const option = props.node.option
  return option.name.ru || option.name.en || option.name.ua || 'Неизвестно'
})
</script>

<template>
  <div class="option">
    <div class="option_content">
      <span
        v-if="hasChildren"
        class="triangle"
        :class="open ? 'triangle-active' : ''"
        @click="open = !open"
      ></span>
      <div class="label" style="flex: 1 1">
        {{ label }} [id {{ node.option.id }}]
      </div>

      <div
        ref="action_buttons"
        class="action_buttons"
        @click="editHandler($event, editForm, node)"
      >
        <div
          v-if="node.option.pid !== undefined"
          class="action_button"
          data-action="add"
        >
          Добавить
        </div>
        <div class="action_button" data-action="edit">Редактировать</div>
        <div class="action_button" data-action="delete">Удалить</div>
      </div>
    </div>

    <Transition name="v">
      <div
        v-if="hasChildren && open"
        class="children"
        style="padding-left: 6px"
      >
        <div style="padding-left: 14px">
          <TreeNodeOptionComponent
            v-for="child in children"
            :key="child.option.id"
            :node="child"
          />
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.action_buttons {
  display: flex;
  gap: 10px;
}

.option {
  position: relative;
  font-size: 14px;
}

.option_content {
  width: 100%;
  display: flex;
}

.triangle-active {
  transform: rotate(180deg) !important;
}

.triangle {
  cursor: pointer;
  transition: transform 0.2s ease;
  position: absolute;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 7px solid #88898b;
  left: -12px;
  top: 5px;
  transform: rotate(90deg);
}

.children {
  display: grid;
  grid-template-rows: 1fr;
  transition: 250ms all ease;
}

.children > div {
  overflow: hidden;
}

.v-enter-active,
.v-leave-active {
  grid-template-rows: 1fr;
}

.v-enter-from,
.v-leave-to {
  grid-template-rows: 0fr;
}
</style>
