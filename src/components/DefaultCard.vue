<template>
  <div
    class="flex flex-col justify-between max-w-sm w-full rounded overflow-hidden shadow-lg bg-gray-300"
  >
    <div>
      <div class="p-4 bg-gray-400 text-sm sm:text-base md:text-lg font-semibold">{{ title }}</div>
      <p
        class="text-gray-700 p-4 overflow-hidden text-ellipsis"
      >
        {{ body }}
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span
        class="inline-block rounded-full px-3 py-1 text-gray-700 mr-2 mb-2 bg-gray-400 text-sm sm:text-base md:text-lg"
        >{{ id }}</span
      >
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
})
</script>
