export type TBusinessStatus =
  | 'OPERATIONAL'
  | 'CLOSED_TEMPORARILY'
  | 'CLOSED_PERMANENTLY'

export type TLatLngLiteral = {
  lat: number
  lng: number
}

export type TBounds = {
  northeast: TLatLngLiteral
  southwest: TLatLngLiteral
}

export type TGeometry = {
  location: TLatLngLiteral
  viewport: TBounds
}

export type TPlaceOpeningHours = {
  open_now?: boolean
  weekday_text?: string[]
}

export type TPlacePhoto = {
  height: number
  html_attributions: string[]
  photo_reference: string
  width: number
}

export type TPlusCode = {
  global_code: string
  compound_code?: string
}

export type TPlace = {
  business_status?: TBusinessStatus
  formatted_address?: string
  geometry?: TGeometry
  icon?: string
  icon_background_color?: string
  icon_mask_base_uri?: string
  name?: string
  opening_hours?: TPlaceOpeningHours
  photos?: TPlacePhoto[]
  place_id?: string
  plus_code?: TPlusCode
  rating?: number
  reference?: string
  types?: string[]
  user_ratings_total?: number
}

export type TPlacesSearchStatus =
  | 'OK'
  | 'ZERO_RESULTS'
  | 'INVALID_REQUEST'
  | 'OVER_QUERY_LIMIT'
  | 'REQUEST_DENIED'
  | 'UNKNOWN_ERROR'

export type TPlacesTextSearchResponse = {
  html_attributions: string[]
  results: TPlace[]
  status: TPlacesSearchStatus
  next_page_token?: string
}
