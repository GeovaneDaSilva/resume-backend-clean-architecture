import { MapModel } from '../models/map'

export interface GetMapModel {
  title: string
  lat: number
  lng: number
  description: string
  date: Date

}

export interface GetMap {
  get: (map: GetMapModel) => Promise<MapModel>
}
