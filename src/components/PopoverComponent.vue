<script setup>
import { computed } from 'vue'

const props = defineProps({
  settings: {
    default() {
      return {
        show: false,
        style: {
          top: 0,
          left: 0,
          width: 200,
        },
      }
    },
    required: false,
    type: Object,
  },
})

const style = computed(() => {
  const bodyWidth = document.body.clientWidth
  const defaulPopopertWidth = 200
  const diff =
    bodyWidth -
    (props.settings.style.left +
      (props.settings.style.width || defaulPopopertWidth))

  return {
    top: props.settings.style.top + 'px',
    left: props.settings.style.left + (diff < 0 ? diff : 0) + 'px',
    width: (props.settings.style.width || defaulPopopertWidth) + 'px',
  }
})
</script>

<template>
  <Teleport to="body">
    <div v-if="settings.show" class="popover" :style="style">
      <slot></slot>
    </div>
  </Teleport>
</template>

<style scoped>
.popover {
  z-index: 20242024;
  position: absolute;
}
</style>
