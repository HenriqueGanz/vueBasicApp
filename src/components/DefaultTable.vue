<template>
  <table class="min-w-[800px] min-h-[400px] w-full text-left rtl:text-right my-4">
    <thead class="text-xs bg-gray-950">
      <tr>
        <th
          v-for="(column, index) in columns"
          :key="index"
          class="border border-gray-600 p-4 text-center text-ellipsis text-white text-sm sm:text-base md:text-lg font-semibold"
        >
          {{ column.label }}
        </th>
      </tr>
    </thead>
    <tbody class="bg-white dark:bg-gray-800">
      <tr v-for="(row, rowIndex) in data" :key="rowIndex">
        <td
          v-for="(column, colIndex) in columns"
          :key="colIndex"
          class="text-center border border-gray-600 p-2 text-gray-200 hover:bg-gray-700 text-ellipsis text-sm sm:text-base md:text-lg"
        >
          {{ row[column.key] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
defineProps({
  data: {
    type: Array,
    required: true,
  },
  columns: {
    type: Array,
    required: true,
  },
})
</script>
