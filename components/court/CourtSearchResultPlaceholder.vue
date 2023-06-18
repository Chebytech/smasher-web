<script setup lang="ts">
import CourtPlaceholderIcon from '~/assets/icons/court-placeholder.svg'
</script>

<template>
  <ul class="flex flex-col gap-4">
    <li v-for="(item, index) in new Array(20).fill(null)" :key="index">
      <button
        class="bg-white shadow-[0px_2px_4px_rgba(0,0,0,0.1)] rounded-2xl h-[56px] w-full text-start flex items-center gap-2 px-3"
      >
        <CourtPlaceholderIcon filled class="!h-[40px] !w-[40px]" />
        <span
          class="h-[20px] bg-gray-100 animate-pulse rounded-2xl flex-auto"
        ></span>
      </button>
    </li>
  </ul>
</template>
