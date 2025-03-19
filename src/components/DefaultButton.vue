<template>
  <button
    class="px-4 py-2 bg-gray-200 rounded-md w-full sm:w-auto cursor-pointer hover:bg-gray-300 text-sm sm:text-base md:text-lg font-medium"
    :disabled="isDisabled"
    @click="handleClick"
  >
    {{ label }}
  </button>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  onClick: {
    type: Function,
    required: true,
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
})

const handleClick = () => {
  props.onClick()
}
</script>
