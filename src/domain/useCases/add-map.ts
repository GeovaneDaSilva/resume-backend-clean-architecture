import { MapModel } from '../models/map'

export interface AddMapModel {
  title: string
  lat: number
  lng: number
  description: string
  date: Date

}

export interface AddMap {
  add: (map: AddMapModel) => Promise<MapModel>
}
