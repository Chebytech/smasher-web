<script setup lang="ts">
import { watchEffect, ref } from 'vue'
import CourtSearchResultPlaceholder from './CourtSearchResultPlaceholder.vue'
import CourtSearchEmptyState from './CourtSearchEmptyState.vue'
import { useAPIGetPlacesByText } from '~/api/places/index'
import CourtPlaceholderIcon from '~/assets/icons/court-placeholder.svg'
import type { TPlace } from '~/types/places'

const route = useRoute()
const router = useRouter()
const places = ref<TPlace[]>([])
const nextPageToken = ref<string | null>(null)
const location = route.query?.location
const prefix = 'badminton court near'
const parsedTextQuery = `${prefix} ${location}`
const encodedTextQuery = encodeURI(parsedTextQuery)
const { isInitialLoading, isFetchingNextPage, hasNextPage, fetchNextPage } =
  useAPIGetPlacesByText({
    text: encodedTextQuery,
    nextPageToken: nextPageToken.value,
    opts: {
      enabled: !!location,
      onSuccess: (data) => {
        const currentData = data?.pages?.[data?.pages?.length - 1]
        nextPageToken.value = currentData?.next_page_token || null
        if (currentData?.status === 'OK') {
          places.value = [...places.value, ...currentData?.results]
        }
      },
    },
  })

watchEffect(() => {
  if (!location) {
    router.replace('/search/court')
  }
})
</script>

<template>
  <main class="pt-[50px] flex flex-col min-h-screen">
    <section class="p-4 pt-5 bg-[#FAFAFA] flex-auto rounded-t-[32px]">
      <p class="mb-4 text-[12px]">
        Lapangan badminton di
        <span class="font-bold">{{ decodeURI(location as string) }}</span>
      </p>
      <CourtSearchResultPlaceholder v-if="isInitialLoading" />
      <ul v-if="!!places && places.length > 0" class="flex flex-col gap-4">
        <li v-for="place in places" :key="place?.place_id">
          <button
            class="bg-white shadow-[0px_2px_4px_rgba(0,0,0,0.1)] rounded-2xl h-[56px] w-full text-start flex items-center gap-2 px-3"
            @click="router.push(`/courts/${place?.place_id}`)"
          >
            <CourtPlaceholderIcon filled class="!h-[40px] !w-[40px]" />
            <span class="text-sm font-medium flex-auto">{{ place?.name }}</span>
          </button>
        </li>
      </ul>
      <CourtSearchResultPlaceholder v-if="isFetchingNextPage" class="my-4" />
      <button
        v-if="hasNextPage && !isFetchingNextPage"
        class="bg-[#44B85A] text-[16px] text-white font-semibold rounded-md h-[32px] px-8 mx-auto mt-4 block"
        @click="fetchNextPage()"
      >
        Show more
      </button>
      <CourtSearchEmptyState
        v-if="!isInitialLoading && places.length === 0"
        :location="decodeURI(location as string)"
      />
    </section>
  </main>
</template>
