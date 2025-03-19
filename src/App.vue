<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="h-screen flex flex-col bg-gray-900 gap-2">
    <header class="bg-gray-800 w-full min-h-25 flex justify-center items-center">
      <nav>
        <h1 class="font-bold text-xl sm:text-2xl text-white">
          Welcome to a basic app!
        </h1>
        <span class="text-sm text-green-500">
          Made with Vue 3.
        </span>
      </nav>
    </header>

    <main class="bg-gray-900 flex flex-col justify-center flex-grow font-sans">
      <RouterView />
    </main>
  </div>
</template>
