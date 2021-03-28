import { BusinessCardModel } from '../domain/models/business-card'
import BusinessCardRepository from '../domain/repositories/businessCardRepository'

class BusinessCardService {
  async get () {
    return BusinessCardRepository.find({})
  }

  async getOne (email: string) {
    return BusinessCardRepository.findOne({ email })
  }

  async getById (id: string) {
    return BusinessCardRepository.findById(id)
  }

  async create (email: BusinessCardModel) {
    return BusinessCardRepository.create(email)
  }

  async update (id, email) {
    return BusinessCardRepository.findByIdAndUpdate(id, email, { new: true, useFindAndModify: true })
  }

  async delete (id: string) {
    return BusinessCardRepository.findByIdAndDelete(id)
  }
}

export default new BusinessCardService()
