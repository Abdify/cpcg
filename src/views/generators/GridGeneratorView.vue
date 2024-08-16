<script setup lang="ts">
import GridGenerator from '@/components/generators/grid/GridGenerator.vue'
</script>

<template>
  <main class="p-5">
    <div class="text-center mb-5">
      <h1 class="text-5xl font-medium">Grid Generator</h1>
      <p class="text-gray-600">Click on an item to create column span</p>
    </div>

    <GridGenerator />
  </main>
</template>
