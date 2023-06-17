<script setup lang="ts">
import { MENUS } from '~/data/home'
import IconMagnifier from '~/components/icons/IconMagnifier.vue'
import IconScore from '~/components/icons/IconScore.vue'
import ComingSoon from '~/assets/icons/coming-soon.svg'

const router = useRouter()
</script>

<template>
  <h2 class="font-medium text-[18px] text-[#252525] mb-3">Menu</h2>
  <div class="flex gap-4">
    <button
      v-for="menu in MENUS"
      :key="menu.label"
      class="p-2 h-[84px] rounded-2xl shadow-[0px_2px_4px_rgba(0,0,0,0.1)] w-1/2 flex flex-col items-center justify-between relative"
      :class="menu.state === 'comming-soon' ? 'bg-[#EDEDED]' : ''"
      :disabled="menu.state === 'disabled' || menu.state === 'comming-soon'"
      @click="router.push(menu.url)"
    >
      <ComingSoon
        v-if="menu.state === 'comming-soon'"
        class="!w-[100px] !h-[30px] !absolute !top-[-2px] !right-[-5px] z-10"
        filled
      />
      <IconMagnifier v-if="menu.label === 'Cari Lapangan'" />
      <IconScore
        v-if="menu.label === 'Scoring'"
        :class="menu.state === 'comming-soon' ? 'grayscale' : ''"
      />
      <span class="font-medium text-sm text-[#252525]">{{ menu.label }}</span>
    </button>
  </div>
</template>
