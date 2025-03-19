<template>
  <div class="flex justify-center my-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
    <DefaultCard v-for="(card, index) in data"
    :key="index"
    :title="card.title"
    :body="card.body"
    :id="card.id"
    />
  </div>
  </div>
</template>

<script setup>

import DefaultCard from './DefaultCard.vue';

defineProps({
data: {
  type: Array,
  required: true,
},

})
</script>
