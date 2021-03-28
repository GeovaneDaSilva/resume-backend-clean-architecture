import mongoose from 'mongoose'

const MapSchema = new mongoose.Schema({

  title: { type: String },
  lat: { type: Number },
  lng: { type: Number },
  description: { type: String },
  date: { type: String }
})

export default MapSchema

export class MapModel {
  title: string
  lat: number
  lng: number
  description: string
  date: Date
}
