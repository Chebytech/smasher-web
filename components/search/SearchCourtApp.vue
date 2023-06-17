<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import SearchIcon from '~/assets/icons/search-court-icon.svg'

const router = useRouter()
const location = ref<string>('')
const error = ref<string | null>(null)

const handleSubmit = () => {
  if (location.value === '') {
    error.value = 'Isi dulu gaezz'
    return null
  }
  router.push(`/courts?location=${encodeURI(location.value)}`)
}

watchEffect(() => {
  if (error.value !== null && location.value !== '') {
    error.value = null
  }
})
</script>
<template>
  <div class="p-4 pt-[100px] flex flex-col gap-8">
    <SearchIcon filled class="!w-[140px] !h-[120px] !mx-auto" />
    <p class="font-semibold text-[16px] text-center">
      Temukan lapangan badminton terbaik dengan mudah dan cepat.
    </p>
    <div class="min-h-[79px]">
      <input
        v-model.trim="location"
        class="w-full p-4 border-2 rounded-md"
        placeholder="Lokasi Anda"
        @keyup.enter="handleSubmit()"
      />
      <p v-if="!!error" class="text-[#FF5200] text-[10px] font-normal mt-1">
        {{ error }}
      </p>
    </div>
    <button
      class="bg-[#44B85A] text-[16px] text-white font-semibold rounded-md h-[56px]"
      @click="handleSubmit()"
    >
      Cari
    </button>
  </div>
</template>
