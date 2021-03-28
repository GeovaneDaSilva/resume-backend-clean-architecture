import { EmailModel } from '../domain/models/email'
import EmailRepository from '../domain/repositories/emailRepository'

class EmailService {
  async get () {
    return EmailRepository.find({}, 'name email role password_hash created_date')
  }

  async getOne (email: string) {
    return EmailRepository.findOne({ email })
  }

  async getById (id: string) {
    return EmailRepository.findById(id, 'name email role password_hash created_date')
  }

  async create (email: EmailModel) {
    return EmailRepository.create(email)
  }

  async update (id, email) {
    return EmailRepository.findByIdAndUpdate(id, email, { new: true, useFindAndModify: true })
  }

  async delete (id: string) {
    return EmailRepository.findByIdAndDelete(id)
  }
}

export default new EmailService()
