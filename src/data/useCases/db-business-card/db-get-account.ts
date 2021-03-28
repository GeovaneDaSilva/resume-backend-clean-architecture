import { BusinessCardModel } from '../../../domain/models/business-card'
import { GetCard, GetOneCard } from '../../../domain/useCases/business-card/business-card'
export class DbGetCard implements GetCard {
  async get (card: BusinessCardModel): Promise<BusinessCardModel> {
    return new Promise(resolve => resolve(
      card
    ))
  }
}

export class DbGetOneCard implements GetOneCard {
  async getById (card: BusinessCardModel): Promise<BusinessCardModel> {
    return new Promise(resolve => resolve(
      card
    ))
  }
}
