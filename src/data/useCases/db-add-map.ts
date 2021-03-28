import { AddMap, AddMapModel } from '../../domain/useCases/add-map'
import MapService from '../../services/mapService'

export class DbAddMap implements AddMap {
  async add (map: AddMapModel): Promise<AddMapModel> {
    const mapDB: any = await MapService.create(map)
    return new Promise(resolve => resolve(
      mapDB
    ))
  }
}
