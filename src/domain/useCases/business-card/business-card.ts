import { BusinessCardModel } from '../../models/business-card'

export interface AddCard {
  add: (card: BusinessCardModel) => Promise<BusinessCardModel>
}

export interface GetCard {
  get: (card: BusinessCardModel) => Promise<BusinessCardModel>
}

export interface GetOneCard{
  getById: (card: BusinessCardModel) => Promise<BusinessCardModel>
}
