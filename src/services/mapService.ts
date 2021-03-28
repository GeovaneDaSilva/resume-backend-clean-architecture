import { MapModel } from '../domain/models/map'
import MapRepository from '../domain/repositories/mapRepository'

class MapService {
  async get () {
    return MapRepository.find({})
  }

  async getOne (email: string) {
    return MapRepository.findOne({ email })
  }

  async getById (id: string) {
    return MapRepository.findById(id)
  }

  async create (map: MapModel) {
    return MapRepository.create(map)
  }

  async update (id, map) {
    return MapRepository.findByIdAndUpdate(id, map, { new: true, useFindAndModify: true })
  }

  async delete (id: string) {
    return MapRepository.findByIdAndDelete(id)
  }
}

export default new MapService()
