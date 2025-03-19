<script setup>
//my components
import DefaultTable from '../components/DefaultTable.vue'
import DefaultButton from '../components/DefaultButton.vue'
import CardCollection from '../components/CardCollection.vue'
import SpinnerAnimation from '../components/SpinnerAnimation.vue'
import VoidMessage from '../components/VoidMessage.vue'
//---

import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import * as api from '../services/api.js'

const route = useRoute()
const loading = ref(false)
const posts = ref()
const error = ref(null)
const displayedPosts = ref([])
const currentPage = ref(1)
const postsPerPage = 10
const totalPages = ref(0)
const cardView = ref(false)

watch(() => route.params.id, fetchData, { immediate: true })

async function fetchData() {
  error.value = posts.value = null
  loading.value = true

  try {
    const response = await api.getPosts()
    posts.value = response
    totalPages.value = Math.ceil(posts.value.length / postsPerPage)
    paginateData()
  } catch (err) {
    error.value = err.toString()
  } finally {
    setInterval(() => {
      loading.value = false
    }, 1000);
  }
}

function paginateData() {
  const start = (currentPage.value - 1) * postsPerPage
  const end = start + postsPerPage
  displayedPosts.value = posts.value.slice(start, end)
}

function goToNextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
    paginateData()
  }
}

function goToPreviousPage() {
  if (currentPage.value > 1) {
    currentPage.value--
    paginateData()
  }
}

const columns = [
  { label: 'ID', key: 'id' },
  { label: 'Title', key: 'title' },
  { label: 'Body', key: 'body' },
]

function toggleView() {
  cardView.value = !cardView.value
}

</script>

<template>
  <div class="shadow-md sm:rounded-lg mx-4 sm:mx-10 overflow-hidden" v-show="!loading && displayedPosts.length > 0">
    <DefaultButton label="Toggle View" :onClick="toggleView"/>

    <div class="overflow-x-auto" v-show="!cardView">
      <DefaultTable :columns="columns" :data="displayedPosts" />
    </div>

    <div class="overflow-x-auto" v-show="cardView">
      <CardCollection :data="displayedPosts" />
    </div>

    <div
      class="flex flex-col sm:flex-row justify-between items-center p-4 bg-gray-950 gap-2 sm:gap-0"
    >
      <DefaultButton label="Previous" :onClick="goToPreviousPage" :isDisabled="currentPage <= 1" />
      <span class="text-white text-center"> Page {{ currentPage }} of {{ totalPages }} </span>
      <DefaultButton label="Next" :onClick="goToNextPage" :isDisabled="currentPage >= totalPages" />
    </div>
  </div>
  <div v-show="loading">
    <SpinnerAnimation />
  </div>
  <div v-show="displayedPosts.length <= 0" class="mx-10">
    <VoidMessage />
  </div>
</template>
