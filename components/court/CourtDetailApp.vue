<!-- eslint-disable no-console -->
<script setup lang="ts">
import PinLocationIcon from '~/assets/icons/location-pin-green.svg'
import CopyIcon from '~/assets/icons/copy-black.svg'
import { useAPIGetPlaceDetail } from '~/utils/api/place'
const route = useRoute()
const placeId = route.params?.id
const { data, isLoading } = useAPIGetPlaceDetail({
  id: placeId as string,
  opts: { enabled: !!placeId },
})
</script>

<template>
  <main class="pt-[50px] flex flex-col min-h-screen">
    <section class="mb-4 mx-4">
      <div
        v-if="isLoading"
        class="w-full h-[250px] bg-gray-200 animate-pulse rounded-lg"
      ></div>
      <img
        v-if="!isLoading"
        :src="`/api/places/photo?photo_reference=${data?.result?.photos?.[0]?.photo_reference}`"
        :alt="data?.result?.name"
        class="w-full h-[250px] rounded-lg bg-gray-200"
      />
    </section>
    <section class="p-4 pt-5 bg-[#FAFAFA] flex-auto rounded-t-[32px]">
      <div class="flex flex-col gap-5">
        <h1 v-if="!isLoading" class="text-[24px] font-semibold">
          {{ data?.result?.name }}
        </h1>
        <span
          v-if="isLoading"
          class="h-[36px] bg-gray-200 animate-pulse rounded-2xl"
        ></span>
        <section v-if="!isLoading">
          <h2 class="font-medium text-[14px]">Alamat</h2>
          <div class="flex justify-between gap-4">
            <p class="text-[12px]">
              {{ data?.result?.formatted_address }}
            </p>
            <a :href="data?.result?.url" target="_blank" rel="noreferrer"
              ><PinLocationIcon filled class="!w-[40px] !h-[40px]"
            /></a>
          </div>
        </section>
        <div
          v-if="isLoading"
          class="h-[63px] bg-gray-200 animate-pulse rounded-2xl"
        ></div>
        <section v-if="!isLoading">
          <h2 class="font-medium text-[14px]">Jam Operasional</h2>
          <ul v-if="data?.result?.opening_hours?.weekday_text">
            <li
              v-for="(item, index) in data?.result?.opening_hours?.weekday_text"
              :key="index"
              class="text-[12px] leading-[18px]"
            >
              {{ item }}
            </li>
          </ul>
          <p
            v-if="!data?.result?.opening_hours?.weekday_text"
            class="text-[12px]"
          >
            -
          </p>
        </section>
        <div
          v-if="isLoading"
          class="h-[147px] bg-gray-200 animate-pulse rounded-2xl"
        ></div>
        <section v-if="!isLoading">
          <h2 class="font-medium text-[14px]">Kontak</h2>
          <div class="flex gap-2 items-center">
            <p class="text-[12px]">
              {{ data?.result?.international_phone_number || '-' }}
            </p>
            <button v-if="!!data?.result?.international_phone_number">
              <CopyIcon filled class="!w-[24px] !h-[24px]" />
            </button>
          </div>
        </section>
        <div
          v-if="isLoading"
          class="h-[47px] bg-gray-200 animate-pulse rounded-2xl"
        ></div>
      </div>
    </section>
  </main>
</template>
