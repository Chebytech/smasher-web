export default eventHandler(async (event) => {
  try {
    const API_BASE_PATH = process.env.GOOGLE_MAP_API_BASE_PATH
    const API_KEY = process.env.GOOGLE_MAP_API_KEY
    const query = getQuery(event)
    const photoReference = query?.photo_reference
    const blob = await $fetch<Promise<Blob>>(
      `${API_BASE_PATH}/maps/api/place/photo?photo_reference=${photoReference}&maxheight=480&maxwidth=768&key=${API_KEY}`
    )
    const arrayBuffer = await blob.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    return buffer
  } catch (e) {
    return { error: 'Something went wrong' }
  }
})
