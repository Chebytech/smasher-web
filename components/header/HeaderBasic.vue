<script setup lang="ts">
import ArrowBackIcon from '~/assets/icons/arrow-back.svg'
const props = defineProps<{
  title: string
  onBack?: () => void
}>()
const router = useRouter()
const handleBack = () => (props.onBack ? props.onBack() : router.back())
</script>

<template>
  <header
    class="fixed top-0 right-0 left-0 bg-white h-[50px] sm:max-w-[576px] sm:mx-auto"
  >
    <nav class="flex items-center h-full">
      <button class="mx-2 absolute" @click="handleBack()">
        <ArrowBackIcon filled class="!w-[32px] !h-[32px]" />
      </button>
      <div class="flex-1 text-center text-[18px] font-medium">{{ title }}</div>
    </nav>
  </header>
</template>
