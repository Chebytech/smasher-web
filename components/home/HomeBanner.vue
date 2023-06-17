<script setup lang="ts">
import HomeBannerImage from './HomeBannerImage.vue'
</script>

<template>
  <div
    class="bg-[#44B85A] h-[155px] w-full flex flex-row justify-between p-3 mb-10 rounded-2xl overflow-hidden relative"
  >
    <div
      class="flex-1 flex items-center max-w-[160px] sm:max-w-[280px] relative z-10"
    >
      <p
        class="text-white text-[11px] mobile-m:text-[14px] font-medium leading-4 mobile-m:leading-5"
      >
        Bermain Badminton jadi makin mudah, asyik dan praktis. Mulai dengan Cari
        Lapangan.
      </p>
    </div>
    <div class="flex-none relative z-10">
      <HomeBannerImage />
    </div>
    <div
      class="bg-[#38964A] w-[160px] h-[160px] absolute rounded-full top-[-15%] right-[-7%]"
    ></div>
    <div
      class="bg-[#38964A] w-[100px] h-[100px] absolute rounded-full bottom-[-40%] left-[-13%] md:bottom-[-30%] md:left-[-10%]"
    ></div>
  </div>
</template>
