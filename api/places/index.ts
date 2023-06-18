import { useInfiniteQuery } from '@tanstack/vue-query'
import type { UseInfiniteQueryOptions } from '@tanstack/vue-query'
import type { TPlacesTextSearchResponse } from '~/types/places'

export function useAPIGetPlacesByText({
  text,
  nextPageToken,
  opts,
}: {
  text: string
  nextPageToken: string | null
  opts?: UseInfiniteQueryOptions<TPlacesTextSearchResponse>
}) {
  return useInfiniteQuery({
    queryKey: ['get-places-by-text', text, nextPageToken],
    queryFn: ({ pageParam }) =>
      $fetch<TPlacesTextSearchResponse>(
        `/api/places?text=${text}${pageParam ? `&pagetoken=${pageParam}` : ''}`
      ),
    getNextPageParam: (lastPages) => lastPages?.next_page_token,
    useErrorBoundary: false,
    staleTime: 0,
    cacheTime: 0,
    ...opts,
  })
}
