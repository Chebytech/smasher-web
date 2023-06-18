import type { TPlacesTextSearchResponse } from '../../../types/places'

const API_BASE_PATH = process.env.GOOGLE_MAP_API_BASE_PATH
const API_KEY = process.env.GOOGLE_MAP_API_KEY

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    const text = query?.text
    const nextPageToken = query?.pagetoken
    const encodedText = encodeURI(text as string)
    const res = await $fetch<Promise<TPlacesTextSearchResponse>>(
      `${API_BASE_PATH}/maps/api/place/textsearch/json?query=${encodedText}${
        nextPageToken ? `&pagetoken=${nextPageToken}` : ''
      }&key=${API_KEY}`
    )
    return { ...res }
  } catch (e) {
    return {}
  }
})
