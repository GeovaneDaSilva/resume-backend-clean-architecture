import { GetCard, GetOneCard } from '../../../domain/useCases/business-card/business-card'
import BusinessCardService from '../../../services/businessCardService'
import { notFound, serverError, success } from '../../helpers/http-helper'
import { Controller, HttpRequest, HttpResponse } from './business-card-protocols'

export class GetBusinessCardController implements Controller {
  constructor (private readonly getCard: GetCard) {
    this.getCard = getCard
  }

  async handle (): Promise<HttpResponse> {
    try {
      const cardDB: any = await BusinessCardService.get()
      if (!cardDB) {
        return notFound('')
      }
      const card = await this.getCard.get(cardDB)

      return success(card)
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}

export class GetOneBusinessCardController implements Controller {
  constructor (private readonly getOneCard: GetOneCard) {
    this.getOneCard = getOneCard
  }

  async handle (htttpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const id = htttpRequest.params.id
      const cardDB: any = await BusinessCardService.getById(id)
      if (!cardDB) {
        return notFound('')
      }
      const card = await this.getOneCard.getById(cardDB)

      return success(card)
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}
