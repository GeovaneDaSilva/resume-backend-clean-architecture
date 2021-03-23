import { EmailModel } from '../domain/models/email'
import EmailRepository from '../domain/repositories/emailRepository'

class EmailService {
  get () {
    return EmailRepository.find()
  }

  getSelect () {
    return EmailRepository.find({})
  }

  getById (id: string) {
    return EmailRepository.findById(id)
  }

  async create (data) {
    return EmailRepository.create(data)
  }

  update (id) {
    return EmailRepository.findOneAndUpdate(id)
  }

  delete (id: string, user) {
    return EmailRepository.findById(id, user)
  }
}

export default new EmailService()
