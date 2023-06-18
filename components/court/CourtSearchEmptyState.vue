<script setup lang="ts">
import NotFoundIcon from '~/assets/icons/not-found.svg'
defineProps<{
  location: string
}>()
</script>

<template>
  <div class="flex flex-col items-center gap-5 pt-[150px]">
    <NotFoundIcon filled class="!w-[140px] !h-[116px]" />
    <p class="text-[12px] text-center">
      Tidak ada lapangan badminton di
      <span class="font-bold">{{ location }}</span>
    </p>
    <p class="text-[16px] font-semibold text-center">
      Jangan khawatir, kamu masih bisa Cari Lapangan di lokasi lainnya.
    </p>
  </div>
</template>
