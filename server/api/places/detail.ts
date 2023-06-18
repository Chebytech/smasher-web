import type { TPlaceDetailResponse } from '../../../types/places'

export default eventHandler(async (event) => {
  try {
    const API_BASE_PATH = process.env.GOOGLE_MAP_API_BASE_PATH
    const API_KEY = process.env.GOOGLE_MAP_API_KEY
    const query = getQuery(event)
    const placeId = query?.place_id
    const res = await $fetch<Promise<TPlaceDetailResponse>>(
      `${API_BASE_PATH}/maps/api/place/details/json?place_id=${placeId}&key=${API_KEY}`
    )
    return { ...res }
  } catch (e) {
    return {}
  }
})
