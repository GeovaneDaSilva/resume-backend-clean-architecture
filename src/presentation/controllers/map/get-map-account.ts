import { GetMap } from '../../../domain/useCases/get-map'
import MapService from '../../../services/mapService'
import { notFound, serverError, success } from '../../helpers/http-helper'
import { HttpResponse, Controller } from './map-protocols'

export class GetMapController implements Controller {
  constructor (private readonly getMap: GetMap) {
    this.getMap = getMap
  }

  async handle (): Promise<HttpResponse> {
    try {
      const mapDB: any = await MapService.get()
      if (!mapDB) {
        return notFound('')
      }
      const accountMap = await this.getMap.get(mapDB)
      if (!accountMap) {
        return notFound('')
      }

      return success(accountMap)
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}
