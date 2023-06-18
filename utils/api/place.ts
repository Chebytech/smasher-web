import { useInfiniteQuery, useQuery } from '@tanstack/vue-query'
import type {
  UseInfiniteQueryOptions,
  UseQueryOptions,
} from '@tanstack/vue-query'
import type {
  TPlacesTextSearchResponse,
  TPlaceDetailResponse,
} from '~/types/places'

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

export function useAPIGetPlaceDetail({
  id,
  opts,
}: {
  id: string
  opts?: UseQueryOptions<TPlaceDetailResponse>
}) {
  return useQuery({
    queryKey: ['get-place-detail', id],
    queryFn: () =>
      $fetch<TPlaceDetailResponse>(`/api/places/detail?place_id=${id}`),
    useErrorBoundary: false,
    ...opts,
  })
}
