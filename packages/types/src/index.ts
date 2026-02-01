export type GeoPoint = {
  lat: number
  lng: number
}

export type Car = {
  id: string
  brand: string
  model: string
  year: number
}

export type User = {
  id: string
  username: string
  avatarUrl?: string
  car?: Car
  location?: GeoPoint
}
