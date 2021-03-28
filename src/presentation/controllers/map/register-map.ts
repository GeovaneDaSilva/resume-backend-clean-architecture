import { AddMap } from '../../../domain/useCases/add-map'
import { MissingParamError } from '../../errors'
import { badRequest, serverError, success } from '../../helpers/http-helper'
import { HttpRequest, HttpResponse, Controller } from './map-protocols'
export class RegisterMapController implements Controller {
  constructor (private readonly addMap: AddMap) {
    this.addMap = addMap
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { title, lat, lng, description } = httpRequest.body

      const requiredField = ['title', 'lat', 'lng', 'description']
      for (const field of requiredField) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }

      const date = new Date()

      const requesMap = await this.addMap.add({
        title, lat, lng, description, date
      })

      return success(requesMap)
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}
